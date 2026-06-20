import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const projectPageSource = readFileSync("src/app/work/[slug]/page.tsx", "utf8");
const globalsSource = readFileSync("src/app/globals.css", "utf8");

test("project index exposes a visible horizontal scroll affordance", () => {
  assert.match(projectPageSource, /project-index-scroll/);
  assert.match(projectPageSource, /Side to side/);
  assert.doesNotMatch(projectPageSource, /scrollbar-hide/);
  assert.match(globalsSource, /\.project-index-scroll::-webkit-scrollbar/);
  assert.match(globalsSource, /scrollbar-color:\s*rgba\(184, 175, 166, 0\.72\)/);
});
