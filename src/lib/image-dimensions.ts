import { imageDimensions } from "./image-dimensions.generated";

export type ImageDimensions = {
  width: number;
  height: number;
};

export function getPublicImageDimensions(src: string): ImageDimensions | null {
  if (!src.startsWith("/")) return null;

  return imageDimensions[src as keyof typeof imageDimensions] ?? null;
}
