import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const homepageSource = readFileSync("src/app/page.tsx", "utf8");

test("homepage first three sections stay full bleed with tiny vertical gutters only", () => {
  const verticalGutter =
    '<div className="h-2 bg-charcoal md:h-3 lg:h-4" aria-hidden="true" />';

  assert.doesNotMatch(homepageSource, /bg-charcoal px-/);
  assert.match(
    homepageSource,
    /<HeroSection[\s\S]*?\/>\s*<div className="h-2 bg-charcoal md:h-3 lg:h-4" aria-hidden="true" \/>\s*<RecentWorkCarousel/,
  );
  assert.match(
    homepageSource,
    /<RecentWorkCarousel[\s\S]*?\/>\s*<div className="h-2 bg-charcoal md:h-3 lg:h-4" aria-hidden="true" \/>\s*<HeadOfHarborTestimonialVideo \/>/,
  );
  assert.equal(
    homepageSource.split(verticalGutter).length - 1,
    2,
    "there should be one tiny gutter after section 1 and one after section 2",
  );
});
