import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const clientFormSource = readFileSync("src/components/ClientScreeningForm.tsx", "utf8");
const consultationPageSource = readFileSync(
  "src/app/services/design-consultation/page.tsx",
  "utf8",
);
const stripeRouteSource = readFileSync(
  "src/app/api/stripe/design-consultation/route.ts",
  "utf8",
);

test("design consultation page uses the shared private inquiry form", () => {
  assert.match(
    consultationPageSource,
    /<ClientScreeningForm initialInquiryType="design-consultation"/,
  );
  assert.doesNotMatch(consultationPageSource, /DesignConsultationBookingClient/);
  assert.equal(
    existsSync("src/app/services/design-consultation/DesignConsultationBookingClient.tsx"),
    false,
  );
});

test("shared inquiry form supports both full-service and consultation paths", () => {
  assert.match(clientFormSource, /inquiryType/);
  assert.match(clientFormSource, /Design Consultation/);
  assert.match(clientFormSource, /Private Interior Design Inquiry/);
  assert.match(clientFormSource, /startConsultationCheckout/);
  assert.match(clientFormSource, /Pay \$\{siteConfig\.designConsultation\.price\} And Unlock Calendar/);
});

test("design consultation checkout returns to the form entry point", () => {
  assert.match(stripeRouteSource, /returnPath/);
  assert.match(stripeRouteSource, /success_url/);
  assert.match(stripeRouteSource, /cancel_url/);
  assert.match(stripeRouteSource, /metadata\[service\]/);
});
