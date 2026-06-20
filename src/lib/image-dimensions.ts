import { existsSync, readFileSync } from "fs";
import path from "path";

export type ImageDimensions = {
  width: number;
  height: number;
};

const dimensionsCache = new Map<string, ImageDimensions | null>();

export function getPublicImageDimensions(src: string): ImageDimensions | null {
  if (!src.startsWith("/")) return null;

  const cached = dimensionsCache.get(src);
  if (cached !== undefined) return cached;

  const filePath = path.join(process.cwd(), "public", decodeURIComponent(src));

  if (!existsSync(filePath)) {
    dimensionsCache.set(src, null);
    return null;
  }

  const dimensions = readImageDimensions(readFileSync(filePath));
  dimensionsCache.set(src, dimensions);
  return dimensions;
}

function readImageDimensions(buffer: Buffer): ImageDimensions | null {
  return readJpegDimensions(buffer) ?? readPngDimensions(buffer);
}

function readJpegDimensions(buffer: Buffer): ImageDimensions | null {
  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) {
    return null;
  }

  let offset = 2;

  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];
    offset += 2;

    if (marker === 0xd9 || marker === 0xda) break;
    if (offset + 2 > buffer.length) break;

    const segmentLength = buffer.readUInt16BE(offset);
    if (segmentLength < 2 || offset + segmentLength > buffer.length) break;

    if (isJpegStartOfFrame(marker)) {
      return {
        height: buffer.readUInt16BE(offset + 3),
        width: buffer.readUInt16BE(offset + 5),
      };
    }

    offset += segmentLength;
  }

  return null;
}

function readPngDimensions(buffer: Buffer): ImageDimensions | null {
  if (
    buffer.length < 24 ||
    buffer[0] !== 0x89 ||
    buffer[1] !== 0x50 ||
    buffer[2] !== 0x4e ||
    buffer[3] !== 0x47
  ) {
    return null;
  }

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function isJpegStartOfFrame(marker: number) {
  return (
    marker >= 0xc0 &&
    marker <= 0xcf &&
    marker !== 0xc4 &&
    marker !== 0xc8 &&
    marker !== 0xcc
  );
}
