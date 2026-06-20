import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { navigation } from "./config.ts";

const navigationSource = readFileSync("src/components/Navigation.tsx", "utf8");
const footerSource = readFileSync("src/components/Footer.tsx", "utf8");

test("visible navigation omits Studio Notes", () => {
  assert.equal(
    navigation.some((item) => item.name === "Studio Notes" || item.href === "/journal"),
    false,
  );
});

test("visible navigation places Press directly after Services", () => {
  assert.deepEqual(
    navigation.map((item) => item.name),
    ["Work", "Studio", "Services", "Press", "Shop", "Inquire"],
  );
});

test("footer navigation does not append a duplicate Press item", () => {
  assert.doesNotMatch(
    footerSource,
    /\.\.\.navigation\.slice\(0,\s*4\)[\s\S]*?\{ name: "Press"/,
  );
});

test("desktop header gives the logo breathing room inside the nav bar", () => {
  assert.match(
    navigationSource,
    /className="flex h-24 items-center justify-between"/,
  );
});
