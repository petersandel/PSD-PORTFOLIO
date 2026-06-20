import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const workPageSource = readFileSync("src/app/work/WorkPageClient.tsx", "utf8");

test("work index project images render uncropped inside a viewport-height frame", () => {
  assert.match(workPageSource, /className="relative h-\[72svh\]/);
  assert.match(workPageSource, /fill/);
  assert.match(workPageSource, /className="object-contain/);
  assert.doesNotMatch(workPageSource, /object-cover/);
});
