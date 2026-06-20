import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Mixing Vintage and Modern: The Interior Design Secret That Makes a Room",
  description:
    "Learn how to mix vintage and modern furniture like a pro. Expert tips for blending old and new, sourcing vintage pieces, and creating interiors with soul and character.",
  keywords: [
    "mixing vintage and modern interior design",
    "vintage modern interior design",
    "how to mix old and new furniture",
    "vintage interior design tips",
    "eclectic interior design",
    "sourcing vintage furniture NYC",
  ],
};

export default function MixingVintageModern() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Journal", href: "/journal" },
          { name: "Mixing Vintage and Modern", href: "/journal/mixing-vintage-modern-interior-design" },
        ]}
      />

      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">Design Inspiration</Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">8 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">
              Mixing Vintage and Modern: The Design Secret That Makes a Room
            </h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">
              The most compelling interiors aren&apos;t all-new or all-old. They&apos;re a
              conversation between eras — and mastering that conversation is what
              separates good design from great design.
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
              src="/images/journal/mixing-vintage-modern.jpg"
              alt="Mixing Vintage and Modern in Luxury Design"
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
                Walk into any truly memorable interior and you&apos;ll notice something:
                it doesn&apos;t look like it was furnished in a single afternoon from a
                single catalog. There&apos;s depth. There&apos;s tension. There&apos;s a vintage
                Paul McCobb chair next to a contemporary sofa. A 19th-century mirror
                above a modern console. A Moroccan rug under a glass coffee table.
              </p>
              <p>
                This is the art of mixing vintage and modern — and it&apos;s the single
                most impactful design skill you can develop.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                Why Mixing Works
              </h2>
              <p>
                All-modern interiors can feel sterile. All-vintage interiors can feel
                like museums. The magic happens in the space between — when a room
                tells a story that spans decades. A vintage piece brings history,
                character, and a sense that someone has lived here before. A modern
                piece brings comfort, function, and relevance. Together, they create
                something neither could achieve alone.
              </p>
              <p>
                This philosophy is at the heart of everything we do at Peter Sandel
                Interior Design — and it&apos;s why we created{" "}
                <Link href="https://provenanceandpatina.com" className="text-gold transition-colors hover:text-gold-light" target="_blank" rel="noopener noreferrer">
                  Provenance & Patina
                </Link>
                . Every space needs those pieces with a past — the ones that bring
                soul and authenticity that simply can&apos;t be manufactured.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                The 70/30 Rule
              </h2>
              <p>
                A good starting ratio is 70% modern, 30% vintage. This ensures the
                room feels current and functional while the vintage pieces provide
                character and depth. As you become more confident, you can adjust
                the ratio — but always anchor the room in the present.
              </p>
              <p>
                In our Greenwich West project, the Tacchini Sesann sofa and Breuer
                Cesca chairs are modern anchors, while the Pierre Cardin coffee table
                and Robert Kelly artwork bring the vintage tension. The result is a
                room that feels both timeless and of-the-moment.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                5 Principles for Mixing Successfully
              </h2>

              <h3 className="font-display text-xl text-cream-100 pt-2">
                1. Find a Common Thread
              </h3>
              <p>
                The best mixed interiors have a unifying element — a color palette,
                a material, or a mood that connects old and new. In our Hudson Yards
                project, warm metallics (bronze, brass, gold) appear in both the
                vintage and contemporary pieces, creating a through-line that makes
                the mix feel intentional rather than random.
              </p>

              <h3 className="font-display text-xl text-cream-100 pt-2">
                2. Contrast is Your Friend
              </h3>
              <p>
                Don&apos;t try to make vintage and modern &ldquo;match.&rdquo; Embrace the contrast.
                A sleek modern sofa looks more interesting next to a weathered
                antique side table. A contemporary artwork pops against original
                crown molding. The tension between eras is what makes the mix work.
              </p>

              <h3 className="font-display text-xl text-cream-100 pt-2">
                3. Quality Over Quantity
              </h3>
              <p>
                One exceptional vintage piece has more impact than five mediocre ones.
                Invest in a single statement item — a vintage light fixture, a
                mid-century chair, or an antique rug — and let it be the star.{" "}
                <Link href="https://provenanceandpatina.com" className="text-gold transition-colors hover:text-gold-light" target="_blank" rel="noopener noreferrer">
                  Provenance & Patina
                </Link>{" "}
                curates exactly these kinds of pieces — each one selected for its
                character, craftsmanship, and ability to elevate a space.
              </p>

              <h3 className="font-display text-xl text-cream-100 pt-2">
                4. Let the Vintage Lead
              </h3>
              <p>
                When in doubt, start with the vintage piece and build around it.
                A 1950s Italian floor lamp has a specific scale, color, and energy.
                Designing the room to honor that piece — rather than trying to fit
                it into an existing scheme — creates a more cohesive result.
              </p>

              <h3 className="font-display text-xl text-cream-100 pt-2">
                5. Edit Ruthlessly
              </h3>
              <p>
                The biggest mistake in mixed interiors is overfilling. Each vintage
                piece should have room to breathe. Each modern piece should have
                space to be appreciated. If a room feels cluttered, remove something.
                The negative space between objects is as important as the objects
                themselves.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                Where to Source Vintage Pieces
              </h2>
              <p>
                Finding the right vintage pieces requires patience and a trained eye.
                Here are our go-to sources:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-cream-100">
                    <Link href="https://provenanceandpatina.com" className="text-gold transition-colors hover:text-gold-light" target="_blank" rel="noopener noreferrer">
                      Provenance & Patina
                    </Link>
                  </strong>{" "}
                  — Our curated shop for vintage and antique pieces with character and provenance
                </li>
                <li><strong className="text-cream-100">Estate sales and auctions</strong> — For one-of-a-kind finds with history</li>
                <li><strong className="text-cream-100">Antique markets</strong> — The Brimfield Antique Flea Market, Round Top, and local NYC markets</li>
                <li><strong className="text-cream-100">Specialty dealers</strong> — For specific categories like lighting, art, or rugs</li>
              </ul>

              <p className="pt-4">
                The most beautiful rooms are the ones that feel collected over time —
                not assembled in a single shopping trip. Mixing vintage and modern
                isn&apos;t just a design technique. It&apos;s a philosophy that says: every
                era has something to offer, and the best spaces honor that truth.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-graphite py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <p className="font-accent text-lg italic text-cream-200/80">
              Ready to create a space with soul?
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-gold">Schedule a Consultation</Link>
              <Link href="https://provenanceandpatina.com" className="text-xs uppercase tracking-widest text-cream-200 transition-colors hover:text-gold" target="_blank" rel="noopener noreferrer">
                Shop Provenance & Patina →
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}