import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const servicesPageSource = readFileSync("src/app/services/page.tsx", "utf8");

test("services consultation portrait uses the Provenance and Patina About page image", () => {
  assert.match(
    servicesPageSource,
    /consultationPortrait:\s*"\/images\/services\/pp-about-peter-sandel-portrait-20260519\.jpg"/,
  );
  assert.match(
    servicesPageSource,
    /alt="Peter Sandel portrait from the Provenance & Patina About page"/,
  );
  assert.doesNotMatch(
    servicesPageSource,
    /consultationPortrait:\s*"\S*PS_HeadofHarbor_1796_Final\.jpg"/,
  );
});
