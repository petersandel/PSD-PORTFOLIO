import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "The Provenance & Patina Edit: Vintage Finds That Transform a Room",
  description:
    "Discover how vintage and antique pieces from Provenance & Patina bring soul, character, and authenticity to luxury interiors. A curated guide to the pieces that make a room unforgettable.",
  keywords: [
    "vintage interior design finds",
    "antique furniture for modern homes",
    "Provenance and Patina",
    "vintage design pieces NYC",
    "sourcing vintage furniture",
    "antique decor luxury interior",
  ],
};

export default function ProvenanceAndPatinaEdit() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Journal", href: "/journal" },
          { name: "Provenance & Patina Edit", href: "/journal/vintage-finds-provenance-and-patina" },
        ]}
      />

      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">Design Inspiration</Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">6 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">
              The Provenance & Patina Edit: Vintage Finds That Transform a Room
            </h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">
              Every space needs pieces with a past. Here&apos;s how we use vintage and
              antique finds from Provenance & Patina to bring soul to our projects.
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
              src="/images/journal/provenance-patina.jpg"
              alt="Vintage Finds: Provenance and Patina"
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
                There&apos;s a reason the most compelling interiors always include
                something old. A vintage chair with worn arms. An antique mirror
                with foxed glass. A mid-century lamp with a patina that only decades
                of use can create. These pieces bring something that new furniture
                cannot: a story.
              </p>
              <p>
                That&apos;s why we created{" "}
                <Link href="https://provenanceandpatina.com" className="text-gold transition-colors hover:text-gold-light" target="_blank" rel="noopener noreferrer">
                  Provenance & Patina
                </Link>
                — a curated collection of vintage and antique pieces selected for
                their character, craftsmanship, and ability to transform a room.
                Every piece in the shop has been hand-selected for its design merit
                and its potential to elevate a contemporary interior.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                The Paul McCobb Lounge Chair
              </h2>
              <p>
                In our Hudson Yards residence, the Paul McCobb lounge chair is the
                piece that stops people in their tracks. Its clean mid-century lines
                are instantly recognizable, but it&apos;s the patina — the gentle wear
                on the arms, the softening of the frame — that gives it soul. Placed
                next to a contemporary sofa and a marble cocktail table, it creates
                a conversation between eras that makes the room feel alive.
              </p>
              <p>
                McCobb&apos;s work represents the best of American mid-century design:
                honest materials, clean proportions, and an unwavering commitment to
                accessibility. His pieces were designed to be lived in, and the ones
                that have been lived in are the most beautiful.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                Vintage Rugs: The Foundation of Every Room
              </h2>
              <p>
                A hand-knotted vintage rug does something remarkable: it anchors a
                room while simultaneously making it feel more expansive. The
                irregularities in a vintage rug — the slight color variations, the
                softened edges of the pattern — create visual depth that a new rug
                simply cannot replicate.
              </p>
              <p>
                We source vintage rugs from{" "}
                <Link href="https://provenanceandpatina.com" className="text-gold transition-colors hover:text-gold-light" target="_blank" rel="noopener noreferrer">
                  Provenance & Patina
                </Link>{" "}
                for nearly every project. Persian, Turkish, Moroccan — each type
                brings a different energy. A worn Oushak under a modern dining table.
                A vibrant Kurdish runner in a hallway. A soft Beni Ourain in a
                bedroom. The right rug doesn&apos;t just complete a room — it starts
                the conversation.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                Statement Lighting with History
              </h2>
              <p>
                Vintage lighting is one of the most impactful ways to add character
                to a space. A Murano mushroom lamp from the 1960s. A brass
                chandelier with decades of patina. A pair of hand-blown glass sconces
                that catch the light in ways that modern reproductions cannot.
              </p>
              <p>
                In our Greenwich West project, the James Dieter porcelain light
                fixture over the dining table is contemporary — but it&apos;s paired with
                vintage Breuer Cesca chairs and a Pierre Cardin coffee table. The
                lighting is the bridge between eras, connecting the new with the old.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                Art and Objects with Provenance
              </h2>
              <p>
                The word &ldquo;provenance&rdquo; means the history of ownership of an object.
                It&apos;s the story of where a piece has been, who has owned it, and how
                it came to be. At{" "}
                <Link href="https://provenanceandpatina.com" className="text-gold transition-colors hover:text-gold-light" target="_blank" rel="noopener noreferrer">
                  Provenance & Patina
                </Link>
                , every piece comes with its story — because that story is part of
                what makes it valuable.
              </p>
              <p>
                A Bruce Weber photograph with a personal connection. A Dorothy Dehner
                Brutalist sculpture that has passed through significant collections.
                A set of hand-painted glass lamps that were made in a small Italian
                workshop decades ago. These aren&apos;t just objects — they&apos;re pieces of
                history that bring depth and meaning to a space.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                How to Incorporate Vintage Into Your Space
              </h2>
              <p>
                You don&apos;t need to overhaul your entire home to incorporate vintage.
                Start with one piece:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-cream-100">A vintage rug</strong> — the single most transformative piece you can add</li>
                <li><strong className="text-cream-100">A statement chair</strong> — a mid-century piece that becomes the room&apos;s focal point</li>
                <li><strong className="text-cream-100">A vintage light fixture</strong> — instant character and warmth</li>
                <li><strong className="text-cream-100">An antique mirror</strong> — adds depth, light, and history to any wall</li>
                <li><strong className="text-cream-100">A sculptural object</strong> — a ceramic bowl, a bronze figure, a glass vessel</li>
              </ul>

              <p className="pt-4">
                The most memorable rooms are the ones that feel collected over time —
                not assembled in a single shopping trip.{" "}
                <Link href="https://provenanceandpatina.com" className="text-gold transition-colors hover:text-gold-light" target="_blank" rel="noopener noreferrer">
                  Provenance & Patina
                </Link>{" "}
                exists to make that process easier, more intentional, and more
                rewarding. Because every space deserves pieces with a past.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-graphite py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <p className="font-accent text-lg italic text-cream-200/80">
              Explore the collection
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="https://provenanceandpatina.com" className="btn-gold" target="_blank" rel="noopener noreferrer">
                Shop Provenance & Patina
              </Link>
              <Link href="/contact" className="text-xs uppercase tracking-widest text-cream-200 transition-colors hover:text-gold">
                Work With Us →
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}