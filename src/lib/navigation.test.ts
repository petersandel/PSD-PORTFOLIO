import assert from "node:assert/strict";
import { test } from "node:test";
import { navigation } from "./config.ts";

test("visible navigation omits Studio Notes", () => {
  assert.equal(
    navigation.some((item) => item.name === "Studio Notes" || item.href === "/journal"),
    false,
  );
});
