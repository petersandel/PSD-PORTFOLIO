import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Inside Our Hudson Yards Residence: A Luxury Penthouse Design Case Study",
  description:
    "Go behind the design of our Hudson Yards residence — a luxury highrise penthouse featuring custom drapery, vintage Paul McCobb pieces, and contemporary art. A detailed case study by Peter Sandel Interior Design.",
  keywords: [
    "luxury penthouse design NYC",
    "Hudson Yards interior design",
    "luxury highrise apartment design",
    "NYC penthouse case study",
    "luxury apartment design New York",
    "custom drapery interior design",
  ],
};

export default function HudsonYardsCaseStudy() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Journal", href: "/journal" },
          { name: "Hudson Yards Case Study", href: "/journal/behind-design-hudson-yards" },
        ]}
      />

      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">Project Spotlight</Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">12 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">
              Inside Our Hudson Yards Residence: A Design Case Study
            </h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">
              How we transformed a raw Hudson Yards penthouse into a sophisticated
              residence that balances bold contemporary art with timeless comfort.
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
              src="/images/journal/hudson-yards-case-study.jpg"
              alt="Behind the Design: Hudson Yards"
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
                Every project begins with a question. For our Hudson Yards residence,
                the question was: how do you create warmth and intimacy in a glass tower
                overlooking Manhattan? The answer involved custom drapery in unexpected
                colors, vintage furniture with genuine patina, and an art collection
                that challenges and delights in equal measure.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                The Challenge
              </h2>
              <p>
                Hudson Yards represents the newest chapter in Manhattan living —
                gleaming towers with floor-to-ceiling windows, open floor plans, and
                breathtaking views. But these spaces come with a design challenge: how
                do you make a brand-new, glass-walled apartment feel like home?
              </p>
              <p>
                Our client wanted a residence that felt sophisticated and collected —
                not like a furniture showroom. They had a growing art collection and
                an appreciation for vintage pieces, but they weren&apos;t sure how to
                integrate these elements into a modern highrise.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                The Design Approach
              </h2>
              <p>
                We began with the art. The client&apos;s collection — including works by
                Mapplethorpe and other contemporary photographers — set the palette.
                Rather than designing the space and then placing the art, we designed
                the space to serve the art.
              </p>
              <p>
                The living room became a gallery-like space with celadon wool sateen
                drapery that softens the glass walls while creating a warm, enveloping
                atmosphere. The chocolate brown sofa provides a grounded counterpoint
                to the light walls and views. And the vintage Paul McCobb lounge chair
                — sourced through{" "}
                <Link href="https://provenanceandpatina.com" className="text-gold transition-colors hover:text-gold-light" target="_blank" rel="noopener noreferrer">
                  Provenance & Patina
                </Link>{" "}
                — brings a piece of design history into the conversation.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                Key Design Decisions
              </h2>

              <h3 className="font-display text-xl text-cream-100 pt-2">
                Custom Drapery as Architecture
              </h3>
              <p>
                In a glass tower, drapery does more than dress windows — it creates
                architecture. We designed floor-to-ceiling wool sateen drapery in
                celadon for the living areas and a rich purple for the primary bedroom.
                These aren&apos;t just window treatments; they&apos;re walls of fabric that
                define space, absorb sound, and create intimacy in a room that could
                otherwise feel like a fishbowl.
              </p>

              <h3 className="font-display text-xl text-cream-100 pt-2">
                Vintage Pieces with Provenance
              </h3>
              <p>
                The Paul McCobb lounge chair isn&apos;t just seating — it&apos;s a story.
                McCobb was one of America&apos;s most influential mid-century designers,
                and his pieces bring an authenticity that new furniture cannot replicate.
                We paired it with a marble cocktail table and a bronze mirror-front
                console — each piece selected for its character as much as its function.
              </p>
              <p>
                This is the philosophy behind{" "}
                <Link href="https://provenanceandpatina.com" className="text-gold transition-colors hover:text-gold-light" target="_blank" rel="noopener noreferrer">
                  Provenance & Patina
                </Link>
                : every space needs pieces with a past. The vintage and antique items
                in our projects bring soul and depth that simply cannot be manufactured.
              </p>

              <h3 className="font-display text-xl text-cream-100 pt-2">
                Art as the Organizing Principle
              </h3>
              <p>
                The Mapplethorpe knife photograph in the kitchen isn&apos;t decoration —
                it&apos;s a provocation. It challenges the expectation of what belongs in
                a kitchen and elevates the space from functional to meaningful. The
                abstract works in the living room provide color and energy. The
                photography in the bedrooms offers intimacy and reflection.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                The Primary Suite
              </h2>
              <p>
                The primary bedroom is the most personal space in any home, and this
                one needed to feel like a true retreat. The four-poster bed with
                purple mohair bolsters creates a dramatic focal point, while the
                custom drapery in the same palette wraps the room in warmth. The
                hand-painted glass lamps on the nightstands add a touch of whimsy
                that keeps the room from taking itself too seriously.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                Lessons Learned
              </h2>
              <p>
                Every project teaches us something. From Hudson Yards, the lessons
                were clear:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-cream-100">Start with what matters most.</strong> When art is the priority, design the space to serve it.</li>
                <li><strong className="text-cream-100">Custom drapery transforms glass towers.</strong> It&apos;s not optional — it&apos;s essential for creating intimacy.</li>
                <li><strong className="text-cream-100">Vintage pieces ground modern spaces.</strong> A single piece with history changes the entire room.</li>
                <li><strong className="text-cream-100">Color creates emotion.</strong> The celadon and purple palette makes these rooms feel intentional and deeply personal.</li>
                <li><strong className="text-cream-100">Provocation has a place.</strong> Art that challenges makes a space more interesting than art that merely decorates.</li>
              </ul>

              <p className="pt-4">
                The result is a residence that feels both of its place and beyond it —
                a sophisticated Manhattan apartment that could only exist in this
                building, at this moment, for this client. And that&apos;s the ultimate
                measure of successful design.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-graphite py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <p className="font-accent text-lg italic text-cream-200/80">
              See the full project
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/work/hudson-yards" className="btn-gold">View Hudson Yards Project</Link>
              <Link href="/contact" className="text-xs uppercase tracking-widest text-cream-200 transition-colors hover:text-gold">
                Start Your Project →
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}