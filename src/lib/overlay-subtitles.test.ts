import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const globalsSource = readFileSync("src/app/globals.css", "utf8");
const recentWorkCarouselSource = readFileSync(
  "src/components/RecentWorkCarousel.tsx",
  "utf8",
);

const overlaySubtitleSources = [
  "src/app/contact/page.tsx",
  "src/app/services/page.tsx",
  "src/app/faq/page.tsx",
  "src/app/press/page.tsx",
  "src/app/work/[slug]/page.tsx",
  "src/components/HeroSection.tsx",
  "src/components/HeadOfHarborTestimonialVideo.tsx",
  "src/components/RecentWorkCarousel.tsx",
];

test("overlay subtitles use a light readable treatment without visible scrims", () => {
  const overlayBlock = globalsSource.match(
    /\.overlay-subtitle\s*\{(?<block>[\s\S]*?)\n\}/,
  )?.groups?.block ?? "";

  assert.match(overlayBlock, /font-weight:\s*300;/);
  assert.doesNotMatch(overlayBlock, /font-weight:\s*[4-9]00;/);
  assert.match(overlayBlock, /font-size:\s*1\.0625rem;/);
  assert.doesNotMatch(overlayBlock, /vw|dvw|svw|lvw/);
  assert.match(overlayBlock, /text-shadow:/);
  assert.doesNotMatch(
    overlayBlock,
    /background|backdrop-filter|linear-gradient|radial-gradient|border-radius/,
  );
});

test("image and video overlay subtitles use the shared overlay subtitle class", () => {
  for (const filePath of overlaySubtitleSources) {
    assert.match(
      readFileSync(filePath, "utf8"),
      /overlay-subtitle/,
      `${filePath} should use overlay-subtitle for supporting copy over media`,
    );
  }
});

test("recent work uses a stronger text veil only for Head of the Harbor", () => {
  const copyVeilBlock = recentWorkCarouselSource.match(
    /const copyVeilClass = needsStrongerVeil(?<block>[\s\S]*?);\n  const copyKickerClass/,
  )?.groups?.block ?? "";

  assert.match(
    recentWorkCarouselSource,
    /const needsStrongerVeil = activeProject\.slug === "head-of-the-harbor";/,
  );
  assert.match(
    recentWorkCarouselSource,
    /const copyVeilClass = needsStrongerVeil\s*\?/,
  );
  assert.match(
    recentWorkCarouselSource,
    /"pointer-events-none absolute -inset-x-7 -top-6 -bottom-7 -z-10/,
  );
  assert.match(
    recentWorkCarouselSource,
    /: "pointer-events-none absolute -inset-x-10 -inset-y-8 -z-10/,
  );
  assert.match(recentWorkCarouselSource, /rgba\(18,20,19,0\.58\)/);
  assert.match(recentWorkCarouselSource, /rgba\(31,35,33,0\.24\)/);
  assert.match(recentWorkCarouselSource, /aria-hidden="true"/);
  assert.match(recentWorkCarouselSource, /className=\{copyVeilClass\}/);
  assert.doesNotMatch(copyVeilBlock, /backdrop-filter|backdrop-blur|border-|rounded/);
  assert.doesNotMatch(globalsSource, /\.recent-work-copy-veil::before/);
});
