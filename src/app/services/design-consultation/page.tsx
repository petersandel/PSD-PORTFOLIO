import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/JsonLd";
import DesignConsultationBookingClient from "./DesignConsultationBookingClient";

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
      <DesignConsultationBookingClient />
    </>
  );
}
