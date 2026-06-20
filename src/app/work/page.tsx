import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/JsonLd";
import WorkPageClient from "./WorkPageClient";

export const metadata: Metadata = {
  title: "Luxury Interior Design Portfolio NYC | Peter Sandel",
  description:
    "Explore Peter Sandel's portfolio of luxury interior design projects in New York City, Chicago, Washington D.C., and beyond. From urban penthouses to coastal estates, discover spaces crafted with exceptional attention to detail.",
};

export default function WorkPage() {
  return (
    <main className="bg-charcoal">
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Work", href: "/work" },
        ]}
      />
      <WorkPageClient />
    </main>
  );
}
