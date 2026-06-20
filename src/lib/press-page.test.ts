import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const pressPageSource = readFileSync("src/app/press/page.tsx", "utf8");

test("press feature sections use restrained editorial scale", () => {
  assert.match(
    pressPageSource,
    /bg-\[#d8ddd6\] px-6 py-12 text-charcoal md:px-10 lg:px-14 lg:py-16/,
  );
  assert.match(
    pressPageSource,
    /mt-4 max-w-xl font-display text-4xl leading-\[1\.02\] \[letter-spacing:0\] md:text-5xl/,
  );
  assert.match(
    pressPageSource,
    /bg-charcoal px-6 py-12 text-cream-100 md:px-10 lg:px-14 lg:py-16/,
  );
  assert.doesNotMatch(pressPageSource, /lg:py-24/);
  assert.doesNotMatch(pressPageSource, /font-display text-5xl leading-\[0\.98\][\s\S]*?md:text-6xl/);
});

test("press featured stories keep images and titles compact", () => {
  assert.match(
    pressPageSource,
    /relative min-h-\[42svh\] overflow-hidden bg-charcoal lg:min-h-\[46svh\]/,
  );
  assert.match(
    pressPageSource,
    /mt-6 font-display text-4xl leading-\[1\.02\] text-charcoal \[letter-spacing:0\] md:text-5xl/,
  );
  assert.match(
    pressPageSource,
    /mt-5 font-display text-3xl leading-\[1\.04\] text-charcoal \[letter-spacing:0\] md:text-4xl/,
  );
  assert.doesNotMatch(pressPageSource, /min-h-\[58svh\]/);
});

test("press archive rows stay dense enough for scanning", () => {
  assert.match(
    pressPageSource,
    /py-5 md:grid-cols-\[180px_1fr_96px\] md:gap-6/,
  );
  assert.match(
    pressPageSource,
    /mt-3 max-w-3xl font-display text-xl leading-\[1\.14\] text-cream-100 \[letter-spacing:0\] md:text-2xl/,
  );
  assert.doesNotMatch(pressPageSource, /py-7 md:grid-cols-\[220px_1fr_120px\]/);
});
