import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Luxury Bathroom Design Ideas: Small Bathroom Luxury for NYC Homes",
  description:
    "Transform your NYC bathroom into a luxurious retreat. Expert design ideas for small bathrooms, primary baths, and powder rooms — from custom vanities to statement tile and smart storage.",
  keywords: [
    "luxury bathroom design ideas",
    "small bathroom luxury NYC",
    "bathroom renovation New York",
    "luxury bathroom remodel ideas",
    "small bathroom design tips",
    "primary bathroom design 2026",
  ],
};

export default function LuxuryBathroomDesign() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Journal", href: "/journal" },
          { name: "Luxury Bathroom Design", href: "/journal/luxury-bathroom-design-ideas" },
        ]}
      />

      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">Design Tips</Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">8 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">
              Luxury Bathroom Design Ideas: Making Every Square Inch Count
            </h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">
              In New York City, bathrooms are often the smallest room in the home —
              and the one where design decisions matter most.
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
              src="/images/journal/luxury-bathroom-design.jpg"
              alt="Luxury Bathroom Design Ideas"
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
                The bathroom is the most intimate space in any home — the first room
                you enter in the morning and the last you leave at night. In New York
                City, where bathrooms can be as small as 25 square feet, every decision
                carries outsized weight. The right tile, the right fixture, the right
                lighting can transform a cramped afterthought into a genuine sanctuary.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                1. Invest in Custom Millwork
              </h2>
              <p>
                Off-the-shelf vanities waste precious inches. Custom cabinetry maximizes
                every fraction of space, integrates storage seamlessly, and creates the
                architectural cohesion that separates a designed bathroom from a
                decorated one. In our Hudson Yards project, a custom marble vanity with
                integrated storage transformed a compact primary bath into a spa-like
                retreat.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                2. Choose Statement Tile Strategically
              </h2>
              <p>
                Tile is the jewelry of a bathroom — it sets the tone for the entire
                space. But in a small bathroom, restraint is key. We recommend investing
                in one statement element: a dramatic floor tile, a book-matched marble
                wall, or a hand-painted accent. Then let everything else recede. The
                contrast between one extraordinary element and quiet surroundings creates
                more impact than covering every surface in pattern.
              </p>
              <p>
                For sourcing unique tiles and vintage accents, we often turn to{" "}
                <Link href="https://provenanceandpatina.com" className="text-gold transition-colors hover:text-gold-light" target="_blank" rel="noopener noreferrer">
                  Provenance & Patina
                </Link>{" "}
                — their curated collection of encaustic tiles and vintage fixtures
                brings character that mass-produced options simply can&apos;t match.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                3. Master the Art of Lighting
              </h2>
              <p>
                Bathroom lighting is where most renovations fail. A single overhead
                fixture creates unflattering shadows and makes the space feel clinical.
                The formula for bathroom lighting excellence:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-cream-100">Vanity sconces at eye level</strong> — eliminates shadows on the face</li>
                <li><strong className="text-cream-100">Recessed ceiling lights on dimmers</strong> — for ambient light and nighttime visits</li>
                <li><strong className="text-cream-100">A statement pendant or chandelier</strong> — adds personality and vertical interest</li>
                <li><strong className="text-cream-100">Toe-kick lighting</strong> — a subtle glow that makes the floor float</li>
              </ul>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                4. The Walk-In Shower Revolution
              </h2>
              <p>
                If space allows, a walk-in shower with frameless glass is transformative.
                It eliminates the visual barrier of a tub or shower curb, making the
                bathroom feel significantly larger. Pair it with a rain showerhead,
                body jets, and a built-in niche with slab marble — and you&apos;ve created
                a daily ritual worth looking forward to.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                5. Heated Floors Are Non-Negotiable
              </h2>
              <p>
                In a city where winter mornings are brutal, radiant floor heating is
                the single most impactful luxury upgrade you can make in a bathroom.
                It&apos;s relatively inexpensive to install during a renovation, and the
                daily pleasure of stepping onto warm tile is immeasurable. This is one
                of those investments that pays dividends every single day.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                6. Mirror, Mirror
              </h2>
              <p>
                A large mirror — ideally wall-to-wall or extending beyond the vanity —
                is the oldest and most effective small-bathroom trick. It doubles the
                perceived space, reflects light, and creates a sense of openness. Consider
                a mirror with integrated LED lighting for a clean, modern look that
                eliminates the need for separate sconces in very tight spaces.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                7. The Powder Room: Maximum Impact, Minimum Space
              </h2>
              <p>
                The powder room is where you can take the biggest design risks. It&apos;s
                a small, self-contained space that guests experience briefly — the
                perfect canvas for bold wallpaper, a dramatic mirror, or a sculptural
                sink. We&apos;ve used everything from hand-painted de Gournay wallpaper
                to vintage Murano glass sconces to create powder rooms that guests
                remember long after they&apos;ve left.
              </p>

              <p className="pt-4">
                Whether you&apos;re planning a complete bathroom renovation or refreshing
                a single space, the key is intentionality. In a small bathroom, every
                choice is amplified — make each one count.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-graphite py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <p className="font-accent text-lg italic text-cream-200/80">
              Ready to transform your bathroom?
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-gold">Schedule a Consultation</Link>
              <Link href="/journal" className="text-xs uppercase tracking-widest text-cream-200 transition-colors hover:text-gold">More Articles →</Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}