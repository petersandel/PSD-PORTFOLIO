import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const layoutSource = readFileSync("src/app/layout.tsx", "utf8");
const globalsSource = readFileSync("src/app/globals.css", "utf8");

test("site typography uses the Swiss editorial stack for every configured font role", () => {
  assert.doesNotMatch(
    layoutSource,
    /import \{ Inter \} from "next\/font\/google"|const inter = Inter\(|inter\.variable|font-inter/,
  );

  const rootBlock = globalsSource.match(/:root\s*\{(?<block>[\s\S]*?)\n\}/)
    ?.groups?.block ?? "";
  const bodyBlock = globalsSource.match(/body\s*\{(?<block>[\s\S]*?)\n\}/)
    ?.groups?.block ?? "";

  assert.match(
    bodyBlock,
    /--font-swiss-editorial: "Suisse Intl", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;/,
  );

  assert.doesNotMatch(
    rootBlock,
    /--font-(display|body|accent):\s*var\(--font-swiss-editorial\)/,
  );

  for (const token of ["display", "body", "accent"]) {
    assert.match(
      bodyBlock,
      new RegExp(`--font-${token}: var\\(--font-swiss-editorial\\);`),
    );
  }

  assert.doesNotMatch(
    globalsSource,
    /font-inter|Cormorant|Outfit|Garamond|Georgia, serif/,
  );
});
