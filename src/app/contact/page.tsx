import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { ClientScreeningForm, HeadOfHarborTestimonialVideo } from "@/components";
import { BreadcrumbSchema } from "@/components/JsonLd";

const contactImages = {
  hero: "/images/projects/Head of the Harbor /PS_HeadofHarbor_2064_Final.jpg",
};

export const metadata: Metadata = {
  title: "Private Inquiry",
  description:
    "Submit a private residential design inquiry to Peter Sandel Design for select projects in New York, the Hamptons, and destination markets.",
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      {/* Review Schema for Google Business Profile */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://petersandel.com/#business",
            name: "Peter Sandel Interior Design",
            image: "https://petersandel.com/images/logo/PSD%20logo%20white.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "One Union Square West, Suite 814",
              addressLocality: "New York",
              addressRegion: "NY",
              postalCode: "10003",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 40.7359,
              longitude: -73.9911,
            },
            url: "https://petersandel.com",
            telephone: "+1-646-490-5668",
            email: "peter@petersandel.com",
            priceRange: "$$$$",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-charcoal text-cream-100">
        <div className="relative h-[82svh] min-h-[620px] overflow-hidden bg-graphite">
          <Image
            src={contactImages.hero}
            alt="Head of the Harbor bedroom with layered textiles, open terrace doors, and tailored architectural detail"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31,37,34,0.34)_0%,rgba(31,37,34,0.18)_36%,rgba(31,37,34,0.06)_62%,rgba(31,37,34,0)_82%),linear-gradient(180deg,rgba(31,37,34,0.16)_0%,rgba(31,37,34,0.03)_38%,rgba(31,37,34,0.22)_100%)]" />
          <div className="absolute inset-0 flex items-end justify-center px-6 pb-16 pt-32 text-center md:px-10 md:pb-20 lg:pb-24 xl:pb-28">
            <div className="max-w-3xl">
              <h1 className="font-display-xl text-5xl leading-[0.96] text-cream-100 [letter-spacing:0] [text-shadow:0_5px_34px_rgba(0,0,0,0.5)] md:text-6xl lg:text-7xl xl:text-[5.4rem]">
                Begin the conversation.
              </h1>
              <p className="overlay-subtitle mx-auto mt-6 max-w-xl">
                Tell us what you are imagining. We will guide the right next
                step.
              </p>
              <a
                href="#private-inquiry"
                className="group mt-8 inline-flex items-center justify-center gap-3 border border-cream-100/38 px-8 py-4 font-label text-[10px] text-cream-100 transition-colors duration-500 hover:border-gold hover:text-gold"
              >
                Start a Private Inquiry
                <ArrowDown className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Client Screening Form */}
      <section id="private-inquiry" className="scroll-mt-24 bg-charcoal py-10 lg:py-14">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
          <ClientScreeningForm />
        </div>
      </section>

      <HeadOfHarborTestimonialVideo />
    </>
  );
}
