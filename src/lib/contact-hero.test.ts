import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const contactPageSource = readFileSync("src/app/contact/page.tsx", "utf8");

test("contact hero overlay is bottom-center aligned", () => {
  assert.match(
    contactPageSource,
    /absolute inset-0 flex items-end justify-center px-6 pb-16 pt-32 text-center md:px-10 md:pb-20 lg:pb-24 xl:pb-28/,
  );
});
