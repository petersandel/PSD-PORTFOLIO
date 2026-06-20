import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Interior Designer vs Interior Decorator: What's the Difference?",
  description:
    "Understand the key differences between interior designers and interior decorators. Learn which professional you need for your NYC project, from structural changes to finishing touches.",
  keywords: [
    "interior designer vs interior decorator",
    "difference between designer and decorator",
    "when to hire interior designer",
    "interior designer vs decorator NYC",
    "what does an interior designer do",
  ],
};

export default function DesignerVsDecorator() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Journal", href: "/journal" },
          { name: "Interior Designer vs Decorator", href: "/journal/interior-designer-vs-interior-decorator" },
        ]}
      />

      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">Client Guides</Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">7 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">
              Interior Designer vs Interior Decorator: What&apos;s the Difference?
            </h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">
              They sound interchangeable, but the distinction matters — especially when
              you&apos;re investing in a New York City home.
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
              src="/images/journal/interior-designer-vs-decorator.jpg"
              alt="Interior Designer vs Interior Decorator"
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
                The terms &ldquo;interior designer&rdquo; and &ldquo;interior decorator&rdquo; are often
                used interchangeably, but they represent fundamentally different skill sets,
                scopes of work, and levels of expertise. Understanding this distinction
                is the first step toward hiring the right professional for your project.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                What an Interior Designer Does
              </h2>
              <p>
                An interior designer is trained to understand the spatial, structural,
                and behavioral aspects of a built environment. They work with architects
                and contractors, understand building codes and ADA compliance, and can
                fundamentally alter the layout and function of a space.
              </p>
              <p>
                In New York City, this distinction is critical. A designer who understands
                load-bearing walls, plumbing rerouting, electrical load calculations, and
                co-op alteration agreements can save you from costly mistakes. They don&apos;t
                just make a space beautiful — they make it work.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Space planning and architectural drawings</li>
                <li>Structural modifications and renovation oversight</li>
                <li>Building code compliance and permit management</li>
                <li>Custom cabinetry and millwork design</li>
                <li>Lighting design and electrical planning</li>
                <li>Material specification for floors, walls, and surfaces</li>
                <li>Project management from concept through installation</li>
              </ul>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                What an Interior Decorator Does
              </h2>
              <p>
                An interior decorator focuses on the aesthetic layer — the furnishings,
                color schemes, window treatments, and accessories that make a space feel
                finished. Decorators excel at styling, selecting furniture, and creating
                cohesive visual narratives. They don&apos;t typically work on structural
                changes or architectural elements.
              </p>
              <p>
                If your space is already built and you simply need help selecting
                furniture, arranging a room, or choosing a color palette, a decorator
                may be sufficient. But if you&apos;re planning any renovation, moving walls,
                or working within a co-op or condo, you need a designer.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                When You Need a Designer vs. a Decorator
              </h2>
              <p>
                <strong className="text-cream-100">Hire an interior designer when:</strong> you&apos;re
                renovating, moving walls, working with a co-op board, building a new home,
                or need someone to manage the entire project from architecture through
                installation.
              </p>
              <p>
                <strong className="text-cream-100">Hire a decorator when:</strong> your space is already
                built and you need help with furniture selection, color schemes, window
                treatments, and styling. This is also where resources like{" "}
                <Link href="https://provenanceandpatina.com" className="text-gold transition-colors hover:text-gold-light" target="_blank" rel="noopener noreferrer">
                  Provenance & Patina
                </Link>{" "}
                shine — sourcing the vintage and antique pieces that give a room its soul.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                The Best Results Come from Both
              </h2>
              <p>
                The most compelling interiors are the result of both disciplines working
                in concert. At Peter Sandel Interior Design, we handle the full scope — from
                architectural planning through the final styling layer. We source from{" "}
                <Link href="https://provenanceandpatina.com" className="text-gold transition-colors hover:text-gold-light" target="_blank" rel="noopener noreferrer">
                  Provenance & Patina
                </Link>{" "}
                for the vintage and antique pieces that bring authenticity and character
                to every project, while managing the structural and architectural work
                that makes the space function beautifully.
              </p>
              <p>
                The result? Spaces that feel both inevitable and surprising — where every
                detail has been considered, and every piece tells a story.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-graphite py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <p className="font-accent text-lg italic text-cream-200/80">
              Not sure which professional you need?
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-gold">Schedule a Consultation</Link>
              <Link href="/journal/how-to-hire-an-interior-designer-nyc" className="text-xs uppercase tracking-widest text-cream-200 transition-colors hover:text-gold">
                Read: How to Hire →
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}