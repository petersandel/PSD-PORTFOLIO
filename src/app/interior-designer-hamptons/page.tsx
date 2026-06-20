import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Hamptons Interior Designer | Luxury Design by Peter Sandel",
  description:
    "Peter Sandel is a luxury interior designer serving the Hamptons and Long Island. Creating sophisticated coastal estates, modern beach houses, and summer residences. Featured in Architectural Digest and Forbes.",
  keywords: [
    "Hamptons interior designer",
    "luxury interior designer Hamptons",
    "interior designer Long Island",
    "beach house interior designer",
    "coastal interior design Hamptons",
    "luxury home design Hamptons",
    "Southampton interior designer",
    "East Hampton interior designer",
  ],
};

export default function InteriorDesignerHamptonsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Interior Designer NYC", href: "/interior-designer-nyc" },
          { name: "Hamptons", href: "/interior-designer-hamptons" },
        ]}
      />

      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            The Hamptons
          </span>
          <h1 className="mt-4 font-display text-4xl text-cream-100 md:text-5xl lg:text-6xl">
            Luxury Interior Designer
            <br />
            <span className="text-gold">The Hamptons</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream-200/80">
            From Southampton estates to East Hampton modern masterpieces, Peter
            Sandel creates Hamptons interiors that capture the spirit of coastal
            luxury living. Spaces that are both effortlessly elegant and
            deeply comfortable—designed for the way you live at the shore.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact" className="btn-luxury inline-flex items-center gap-3">
              Schedule a Consultation
            </Link>
            <Link
              href="/work"
              className="text-xs uppercase tracking-widest text-cream-200 transition-colors hover:text-gold"
            >
              View Our Portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* Hamptons Design Approach */}
      <section className="bg-charcoal py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              Coastal Luxury
            </span>
            <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">
              Designing for the Hamptons Lifestyle
            </h2>
            <p className="mt-6 text-cream-200/70">
              Hamptons living demands a unique balance of sophistication and
              relaxation. Our designs embrace natural light, organic materials,
              and the seamless indoor-outdoor flow that defines the best
              coastal homes. We create spaces that feel both grand and
              intimate—perfect for entertaining and everyday living.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="border border-cream-100/10 bg-graphite p-8">
              <span className="font-display text-4xl text-gold/30">01</span>
              <h3 className="mt-4 font-display text-xl text-cream-100">
                Coastal Elegance
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
                We design interiors that honor the Hamptons&apos; coastal
                character—natural materials, sun-washed palettes, and textures
                that age beautifully in a seaside environment. Performance
                fabrics and outdoor-rated materials ensure lasting beauty.
              </p>
            </div>

            <div className="border border-cream-100/10 bg-graphite p-8">
              <span className="font-display text-4xl text-gold/30">02</span>
              <h3 className="mt-4 font-display text-xl text-cream-100">
                Indoor-Outdoor Living
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
                The best Hamptons homes blur the line between inside and out. We
                design pool houses, covered porches, and outdoor entertaining
                spaces that extend your living area and maximize the coastal
                lifestyle.
              </p>
            </div>

            <div className="border border-cream-100/10 bg-graphite p-8">
              <span className="font-display text-4xl text-gold/30">03</span>
              <h3 className="mt-4 font-display text-xl text-cream-100">
                Seasonal Versatility
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
                Whether a year-round residence or a summer retreat, we design
                spaces that adapt to the Hamptons&apos; seasonal rhythms—from
                breezy summer living to cozy winter weekends by the fire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hamptons Areas */}
      <section className="bg-graphite py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              Areas We Serve
            </span>
            <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">
              Hamptons Communities
            </h2>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {[
              "Southampton",
              "East Hampton",
              "Bridgehampton",
              "Sag Harbor",
              "Amagansett",
              "Montauk",
              "Water Mill",
              "Sagaponack",
              "Wainscott",
              "Quogue",
              "Westhampton Beach",
              "Shelter Island",
            ].map((area) => (
              <span
                key={area}
                className="border border-cream-100/10 px-4 py-2 text-sm text-cream-200/60"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#464D4A] via-[#363d3a] to-[#2a302d]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mx-auto mb-12 h-16 w-px origin-top bg-gold" />
          <span className="font-accent text-lg italic text-gold">
            Ready to transform your Hamptons home?
          </span>
          <h2 className="mt-6 font-display text-4xl text-cream-100 md:text-5xl">
            Begin Your Hamptons Project
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-cream-200/80">
            Whether a new construction estate or a beloved summer home
            renovation, we bring the vision and expertise to make your Hamptons
            interior extraordinary.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link href="/contact" className="btn-gold inline-flex items-center gap-3">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}