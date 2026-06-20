import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const studioPageSource = readFileSync("src/app/about/page.tsx", "utf8");

test("studio hero uses the supplied full-bleed studio image with a side scrim", () => {
  assert.match(
    studioPageSource,
    /hero:\s*"\/images\/studio\/SandelDesign-626-copy\.jpg"/,
  );
  assert.ok(
    existsSync("public/images/studio/SandelDesign-626-copy.jpg"),
    "studio hero image should be copied into public/images/studio",
  );
  assert.match(
    studioPageSource,
    /<section className="relative isolate min-h-\[100svh\] overflow-hidden bg-charcoal text-cream-100">/,
  );
  assert.match(studioPageSource, /src=\{studioImages\.hero\}/);
  assert.match(
    studioPageSource,
    /alt="Peter Sandel Design studio with material boards and a view into the atelier"/,
  );
  assert.match(studioPageSource, /fill\s+priority/);
  assert.match(studioPageSource, /className="object-cover object-center"/);
  assert.match(studioPageSource, /sizes="100vw"/);
  assert.match(studioPageSource, /linear-gradient\(90deg/);
  assert.match(studioPageSource, /rgba\(31,37,34,0\.82\)/);
  assert.doesNotMatch(
    studioPageSource,
    /grid min-h-\[100svh\] bg-charcoal text-cream-100 lg:grid-cols/,
  );
});

test("studio page typography stays restrained across hero and content sections", () => {
  assert.match(
    studioPageSource,
    /font-display-xl text-3xl leading-\[1\.04\][\s\S]*?md:text-4xl lg:text-5xl xl:text-\[3\.9rem\]/,
  );
  assert.match(
    studioPageSource,
    /font-accent text-2xl leading-\[1\.12\] text-charcoal[\s\S]*?md:text-3xl lg:text-4xl/,
  );
  assert.match(
    studioPageSource,
    /font-display text-2xl leading-\[1\.1\][\s\S]*?md:text-3xl lg:text-4xl/,
  );
  assert.match(
    studioPageSource,
    /font-display text-2xl leading-\[1\.1\][\s\S]*?md:text-3xl/,
  );
  assert.doesNotMatch(studioPageSource, /lg:text-7xl|xl:text-\[5\.4rem\]/);
  assert.doesNotMatch(studioPageSource, /font-accent text-4xl|font-accent text-3xl/);
  assert.doesNotMatch(studioPageSource, /font-display text-4xl leading-\[1\.04\][\s\S]*?lg:text-6xl/);
});
