import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const heroSectionSource = readFileSync("src/components/HeroSection.tsx", "utf8");

test("homepage hero title uses restrained desktop type scale", () => {
  assert.match(
    heroSectionSource,
    /font-display-xl text-5xl !leading-\[1\.08\] text-white md:text-6xl lg:text-7xl/,
  );
  assert.match(
    heroSectionSource,
    /overflow-hidden pb-\[0\.12em\] font-display-xl/,
  );
  assert.doesNotMatch(heroSectionSource, /leading-tight text-white/);
  assert.doesNotMatch(heroSectionSource, /md:text-7xl lg:text-8xl/);
});
