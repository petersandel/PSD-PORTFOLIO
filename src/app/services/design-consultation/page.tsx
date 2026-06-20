import type { Metadata } from "next";
import { ClientScreeningForm } from "@/components";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Book a One-Hour Design Consultation | Peter Sandel Design",
  description:
    "Share your room, complete the $595 design consultation payment, and unlock Peter Sandel's weekday calendar availability.",
};

export default function DesignConsultationBookingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          {
            name: "Design Consultation",
            href: "/services/design-consultation",
          },
        ]}
      />
      <section className="bg-charcoal px-6 py-28 text-cream-100 md:px-10 lg:px-14 lg:py-32">
        <ClientScreeningForm initialInquiryType="design-consultation" />
      </section>
    </>
  );
}
