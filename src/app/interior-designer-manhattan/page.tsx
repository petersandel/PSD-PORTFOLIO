import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Manhattan Interior Designer | Luxury Design by Peter Sandel",
  description:
    "Peter Sandel is a premier luxury interior designer in Manhattan, New York. Specializing in high-end residential design for penthouses, apartments, and townhouses across Manhattan. Featured in Architectural Digest and Elle Decor.",
  keywords: [
    "Manhattan interior designer",
    "luxury interior designer Manhattan",
    "interior designer Manhattan NYC",
    "high-end interior design Manhattan",
    "penthouse interior designer Manhattan",
    "apartment interior designer NYC",
    "luxury apartment design Manhattan",
  ],
};

export default function InteriorDesignerManhattanPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Interior Designer NYC", href: "/interior-designer-nyc" },
          { name: "Manhattan", href: "/interior-designer-manhattan" },
        ]}
      />

      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            Manhattan
          </span>
          <h1 className="mt-4 font-display text-4xl text-cream-100 md:text-5xl lg:text-6xl">
            Luxury Interior Designer
            <br />
            <span className="text-gold">Manhattan</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream-200/80">
            From soaring Hudson Yards penthouses to intimate Greenwich Village
            apartments, Peter Sandel creates Manhattan interiors that are both
            visually stunning and deeply personal. Every space tells a
            story—we help you tell yours.
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

      {/* Manhattan Design Expertise */}
      <section className="bg-charcoal py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              Manhattan Expertise
            </span>
            <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">
              Designing for Manhattan Living
            </h2>
            <p className="mt-6 text-cream-200/70">
              Manhattan presents unique design challenges and opportunities. From
              navigating co-op board requirements to maximizing space in
              compact apartments, our deep experience with New York&apos;s
              residential landscape ensures your project moves smoothly from
              concept to completion.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="border border-cream-100/10 bg-graphite p-8 lg:p-10">
              <h3 className="font-display text-xl text-cream-100">
                Pre-War & Co-op Expertise
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-cream-200/70">
                We have extensive experience working within the guidelines of
                Manhattan&apos;s most prestigious co-op boards. From renovation
                approval processes to contractor requirements, we manage every
                detail so your project proceeds without complications.
              </p>
            </div>

            <div className="border border-cream-100/10 bg-graphite p-8 lg:p-10">
              <h3 className="font-display text-xl text-cream-100">
                Modern Highrise Living
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-cream-200/70">
                New construction towers in Hudson Yards, Tribeca, and along
                Billionaires&apos; Row offer spectacular views and modern
                amenities. We specialize in designing interiors that complement
                these architectural statements while creating warm, livable
                spaces.
              </p>
            </div>

            <div className="border border-cream-100/10 bg-graphite p-8 lg:p-10">
              <h3 className="font-display text-xl text-cream-100">
                Space Optimization
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-cream-200/70">
                Manhattan apartments demand creative space planning. We excel at
                maximizing every square foot through custom millwork, multi-
                functional furniture, and thoughtful layouts that make compact
                spaces feel expansive and luxurious.
              </p>
            </div>

            <div className="border border-cream-100/10 bg-graphite p-8 lg:p-10">
              <h3 className="font-display text-xl text-cream-100">
                Art & Antiques Curation
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-cream-200/70">
                Through our curated shop, Provenance &amp; Patina, we source
                exceptional vintage pieces and contemporary art that bring
                character to Manhattan interiors. Spaces that feel collected over
                time, not decorated overnight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manhattan Neighborhoods */}
      <section className="bg-graphite py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              Areas We Serve
            </span>
            <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">
              Manhattan Neighborhoods
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Hudson Yards", desc: "Luxury highrise residences with panoramic views" },
              { name: "Tribeca", desc: "Loft conversions and modern condominiums" },
              { name: "Greenwich Village", desc: "Historic charm meets contemporary living" },
              { name: "Upper East Side", desc: "Classic pre-war elegance and sophistication" },
              { name: "Upper West Side", desc: "Grand pre-war apartments and modern towers" },
              { name: "Chelsea", desc: "Art-filled galleries and modern living" },
              { name: "SoHo", desc: "Cast-iron lofts and designer boutiques" },
              { name: "Midtown", desc: "Central living with iconic skyline views" },
              { name: "Flatiron", desc: "Architectural landmarks and modern amenities" },
            ].map((neighborhood) => (
              <div
                key={neighborhood.name}
                className="border border-cream-100/10 bg-charcoal p-6"
              >
                <h3 className="font-display text-lg text-cream-100">
                  {neighborhood.name}
                </h3>
                <p className="mt-2 text-sm text-cream-200/60">
                  {neighborhood.desc}
                </p>
              </div>
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
            Ready to transform your Manhattan home?
          </span>
          <h2 className="mt-6 font-display text-4xl text-cream-100 md:text-5xl">
            Begin Your Manhattan Project
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-cream-200/80">
            Whether you&apos;re renovating a pre-war co-op or designing a new
            construction penthouse, we bring the expertise and vision to make
            your Manhattan interior extraordinary.
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