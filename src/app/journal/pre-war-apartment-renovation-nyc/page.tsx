import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pre-War Apartment Renovation NYC: A Complete Design Guide",
  description:
    "Expert guide to renovating pre-war apartments in New York City. From co-op board approvals to preserving architectural character while modernizing — everything you need to know.",
  keywords: [
    "pre-war apartment renovation NYC",
    "pre-war apartment design ideas",
    "NYC co-op renovation guide",
    "renovating pre-war apartment",
    "pre-war apartment interior design",
    "historic apartment renovation New York",
  ],
};

export default function PreWarApartmentRenovation() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Journal", href: "/journal" },
          { name: "Pre-War Apartment Renovation NYC", href: "/journal/pre-war-apartment-renovation-nyc" },
        ]}
      />

      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">Client Guides</Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">11 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">
              Pre-War Apartment Renovation NYC: A Complete Design Guide
            </h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">
              Pre-war apartments are New York&apos;s greatest design opportunity — and
              its greatest design challenge. Here&apos;s how to honor the past while
              creating something entirely new.
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm text-cream-200/50">
              <span>May 22, 2026</span>
              <span className="text-cream-200/30">•</span>
              <span>By Peter Sandel</span>
            </div>
          </div>
        </section>


        {/* Hero Image */}
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/journal/pre-war-renovation.jpg"
              alt="Pre-War Apartment Renovation NYC"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
          </div>
        </div>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="space-y-8 text-cream-200/80 leading-relaxed">
              <p>
                New York City&apos;s pre-war apartments — those built before 1945 —
                represent some of the finest residential architecture in America.
                High ceilings, generous proportions, original moldings, herringbone
                floors, and solid construction that has stood for nearly a century.
                Renovating one is both a privilege and a responsibility.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                1. Understand What You Have
              </h2>
              <p>
                Before making a single design decision, study your apartment&apos;s
                original architecture. What are the defining features? Crown moldings,
                chair rails, medallions, pocket doors, original hardware — these are
                the elements that give pre-war apartments their soul. The best
                renovations preserve and highlight these features rather than erasing
                them.
              </p>
              <p>
                Walk the apartment with your designer and identify what&apos;s original,
                what&apos;s been altered, and what can be restored. Sometimes the most
                impactful design move is simply revealing what was always there —
                stripping paint from original moldings or refinishing herringbone
                floors that have been hidden under wall-to-wall carpet.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                2. Navigate the Co-op Board Process
              </h2>
              <p>
                If your pre-war apartment is in a co-op — and most are — the board
                approval process is your first major hurdle. Every co-op has different
                rules, but common requirements include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-cream-100">Alteration agreements:</strong> Legal documents outlining what you can and cannot change</li>
                <li><strong className="text-cream-100">Insurance requirements:</strong> Often $1M+ in liability coverage</li>
                <li><strong className="text-cream-100">Working hours restrictions:</strong> Typically 9am–5pm, Monday–Friday only</li>
                <li><strong className="text-cream-100">Refundable deposits:</strong> $5,000–$50,000+ depending on the building</li>
                <li><strong className="text-cream-100">Architectural review:</strong> Some boards require plans to be approved before work begins</li>
              </ul>
              <p>
                Work with a designer who has experience navigating these processes.
                The right relationships and knowledge of building-specific requirements
                can save months of delays.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                3. Honor the Bones, Modernize the Systems
              </h2>
              <p>
                The design philosophy for pre-war renovations should be: preserve the
                character, upgrade the performance. This means:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-cream-100">Keep original moldings and details</strong> — restore rather than replace</li>
                <li><strong className="text-cream-100">Upgrade electrical and plumbing</strong> — pre-war wiring and pipes need modernization</li>
                <li><strong className="text-cream-100">Install central air carefully</strong> — conceal ductwork without compromising ceiling height</li>
                <li><strong className="text-cream-100">Modernize the kitchen and baths</strong> — these are where pre-war apartments need the most help</li>
                <li><strong className="text-cream-100">Add smart home technology invisibly</strong> — motorized shades, integrated audio, smart lighting</li>
              </ul>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                4. The Kitchen: Where Old Meets New
              </h2>
              <p>
                The kitchen is typically the most dramatic transformation in a pre-war
                renovation. Original kitchens were small, utilitarian, and designed for
                staff. Today&apos;s kitchen needs to be open, integrated, and the heart of
                the home.
              </p>
              <p>
                The key is creating a kitchen that feels like it belongs in the
                apartment. Panel-front appliances that disappear into custom cabinetry.
                Marble counters that echo the building&apos;s original materials. Brass
                hardware that ages alongside the apartment&apos;s original fixtures. The
                best pre-war kitchens feel both contemporary and inevitable.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                5. Furnishing a Pre-War Space
              </h2>
              <p>
                Pre-war apartments deserve furniture with presence. The generous
                proportions can handle substantial pieces — a large dining table,
                a deep sofa, a tall bookcase. This is where mixing vintage and modern
                truly shines. A pre-war living room with original moldings, herringbone
                floors, and a vintage Paul McCobb lounge chair feels like a
                conversation between eras.
              </p>
              <p>
                We source many of our vintage pieces through{" "}
                <Link href="https://provenanceandpatina.com" className="text-gold transition-colors hover:text-gold-light" target="_blank" rel="noopener noreferrer">
                  Provenance & Patina
                </Link>{" "}
                — their curated collection of mid-century and antique furniture is
                ideally suited to pre-war spaces. The patina of age sits beautifully
                against original architectural details in a way that brand-new
                furniture simply cannot.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                6. Budgeting Realistically
              </h2>
              <p>
                Pre-war renovations in NYC are more expensive than comparable work in
                new construction. Expect to budget 20–30% more for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Co-op deposits and fees</li>
                <li>Restricted working hours (longer timeline = higher labor costs)</li>
                <li>Asbestos and lead paint remediation (common in pre-war buildings)</li>
                <li>Plumbing and electrical upgrades to meet current codes</li>
                <li>Custom solutions for non-standard dimensions and conditions</li>
              </ul>

              <p className="pt-4">
                A pre-war apartment is a piece of New York history. Renovating one
                is an opportunity to write the next chapter while honoring what came
                before. Done well, the result is a home that feels both timeless and
                thoroughly modern — a space that could only exist in this city, in
                this building, at this moment.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-graphite py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <p className="font-accent text-lg italic text-cream-200/80">
              Planning a pre-war renovation?
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-gold">Schedule a Consultation</Link>
              <Link href="/journal/nyc-co-op-board-design-approval" className="text-xs uppercase tracking-widest text-cream-200 transition-colors hover:text-gold">
                Read: Co-op Board Guide →
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}