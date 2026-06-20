import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "How to Curate Art for Your Home: An Interior Designer's Guide",
  description:
    "Expert guide to curating art for your home. From selecting pieces that resonate to placement, framing, and building a collection over time — learn how to make art the soul of your space.",
  keywords: [
    "how to curate art for your home",
    "art curation interior design",
    "selecting art for home",
    "interior designer art selection",
    "how to choose art for walls",
    "building an art collection",
  ],
};

export default function ArtCurationGuide() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Journal", href: "/journal" },
          { name: "Art Curation Guide", href: "/journal/art-curation-interior-design" },
        ]}
      />

      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">Design Inspiration</Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">9 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">
              How to Curate Art for Your Home: An Interior Designer&apos;s Guide
            </h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">
              Art transforms a house into a home. Here&apos;s how to select, place, and
              live with art in a way that elevates every room.
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
              src="/images/journal/art-curation.jpg"
              alt="Art Curation in Interior Design"
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
                Art is the most personal element in any interior. Furniture can be
                functional, lighting can be practical, but art exists purely to make
                you feel something. The right piece can transform a room from
                decorated to designed — from pleasant to unforgettable.
              </p>
              <p>
                Yet art curation is often the most intimidating part of the design
                process. Where do you start? How do you know if a piece is &ldquo;good&rdquo;?
                How do you hang it? And how do you build a collection that feels
                cohesive without being matchy?
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                1. Start with What Moves You
              </h2>
              <p>
                The single most important rule in art curation: buy what you love.
                Not what&apos;s trending. Not what matches your sofa. Not what your friend
                has. If a piece makes you pause, makes you feel something, makes you
                want to look at it again — that&apos;s the piece for you.
              </p>
              <p>
                In our Hudson Yards project, the art was the starting point. The
                client&apos;s collection of contemporary photography — including Mapplethorpe
                and other provocative artists — set the tone for every other design
                decision. The celadon drapery, the chocolate brown sofa, the bronze
                accents — all of it was in service of the art.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                2. Mix Media and Eras
              </h2>
              <p>
                The most interesting art collections span media and time periods. A
                Robert Mangold plaster relief next to a Christopher Baer painting.
                A vintage photograph next to a contemporary print. A sculptural object
                on a shelf next to a framed work on paper. The contrast between
                different types of art creates visual energy that a uniform collection
                cannot.
              </p>
              <p>
                In our Dupont Circle project, we paired contemporary art by Christopher
                Baer and Suzanne Caporael with traditional furniture — and the
                juxtaposition is what makes the rooms feel alive. The art challenges
                the architecture, and the architecture grounds the art.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                3. Think About Scale
              </h2>
              <p>
                One of the most common mistakes in art placement is choosing pieces
                that are too small for the wall. A tiny painting on a large wall
                looks lost. A single large piece — or a carefully arranged group —
                makes a confident statement.
              </p>
              <p>
                As a general rule, art should fill approximately two-thirds to
                three-quarters of the available wall space above a piece of furniture.
                When in doubt, go bigger. A large-scale work has presence and
                authority that small pieces simply cannot achieve.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                4. Framing Is Design
              </h2>
              <p>
                The frame is not an afterthought — it&apos;s part of the design. A
                well-chosen frame can elevate a modest work, while a poor frame can
                diminish a masterpiece. Consider:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-cream-100">Float mounting:</strong> Shows the deckled edges of works on paper — always elegant</li>
                <li><strong className="text-cream-100">Thin brass frames:</strong> Warm, contemporary, and work with almost any style of art</li>
                <li><strong className="text-cream-100">Natural wood frames:</strong> Add warmth and pair beautifully with vintage pieces</li>
                <li><strong className="text-cream-100">No frame at all:</strong> For gallery-wrapped canvases, going frameless is a bold, modern choice</li>
              </ul>
              <p>
                We work with exceptional framers who understand that the frame should
                serve the art, never compete with it.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                5. Placement and Hanging
              </h2>
              <p>
                The center of a piece of art should hang at approximately 57 inches
                from the floor — eye level for the average person. When hanging art
                above furniture, leave 6–8 inches between the bottom of the frame and
                the top of the furniture. When creating a gallery wall, start from
                the center and work outward.
              </p>
              <p>
                But rules are meant to be broken. In a dining room, art can hang
                lower — it&apos;s viewed from a seated position. In a hallway, it can
                hang slightly higher. The most important thing is that the art feels
                connected to the architecture and furniture around it.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                6. Build a Collection Over Time
              </h2>
              <p>
                The best art collections are built slowly, over years. Start with one
                piece that you love, and let it inform the next purchase. Visit
                galleries, attend art fairs, follow artists on social media. Let your
                taste evolve naturally rather than trying to fill every wall at once.
              </p>
              <p>
                For accessible, curated pieces with character, we often direct clients
                to{" "}
                <Link href="https://provenanceandpatina.com" className="text-gold transition-colors hover:text-gold-light" target="_blank" rel="noopener noreferrer">
                  Provenance & Patina
                </Link>{" "}
                — their selection of vintage prints, photographs, and small works
                provides an excellent starting point for building a collection.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                7. Don&apos;t Forget Sculptural Objects
              </h2>
              <p>
                Art isn&apos;t just what hangs on walls. Sculptural objects — a ceramic
                vessel, a bronze figure, a glass paperweight — bring art into
                three dimensions. Place them on bookshelves, console tables, and
                windowsills. They add depth and interest to every surface.
              </p>
              <p>
                In our Michigan Avenue project, a Dorothy Dehner Brutalist sculpture
                became the defining element of the living room — not because it was
                the most expensive piece, but because it brought a raw, sculptural
                energy that elevated everything around it.
              </p>

              <p className="pt-4">
                Art curation is a journey, not a destination. The best collections
                grow and change with you, reflecting your experiences, your travels,
                and your evolving taste. Start with what you love, and everything
                else will follow.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-graphite py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <p className="font-accent text-lg italic text-cream-200/80">
              Ready to curate your collection?
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