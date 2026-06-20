import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Luxury Bathroom Design NYC: Creating a Spa-Level Retreat at Home",
  description:
    "Transform your NYC bathroom into a spa-level retreat. Expert guidance on materials, layout, lighting, and the design decisions that make the biggest impact in the smallest room.",
  keywords: [
    "luxury bathroom design NYC",
    "spa bathroom design ideas",
    "high-end bathroom renovation",
    "luxury bathroom materials",
    "bathroom design tips NYC",
    "small luxury bathroom",
    "master bathroom design",
  ],
};

export default function LuxuryBathroomDesignNYC() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Journal", href: "/journal" }, { name: "Luxury Bathroom Design NYC", href: "/journal/luxury-bathroom-design-nyc" }]} />
      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">Design Tips</Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">9 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">Luxury Bathroom Design NYC: Creating a Spa-Level Retreat at Home</h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">In New York, the bathroom is often the only room where you can truly close the door. Here&apos;s how to make it worth closing.</p>
            <div className="mt-8 flex items-center gap-4 text-sm text-cream-200/50"><span>May 22, 2026</span><span className="text-cream-200/30">•</span><span>By Peter Sandel</span></div>
          </div>
        </section>


        {/* Hero Image */}
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/journal/luxury-bathroom-nyc.jpg"
              alt="Luxury Bathroom Design NYC"
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
              <p>The bathroom is the most intimate room in any home — and in New York City, it&apos;s often the smallest. This combination of intimacy and constraint makes bathroom design the ultimate test of a designer&apos;s skill. Every material, every fixture, every inch of storage must be considered with precision.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">The Material Palette</h2>
              <p>A luxury bathroom begins with materials that feel extraordinary underfoot and in hand. Our favorites:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Book-matched marble</strong> — There is no substitute for the drama of a single slab of marble, split and opened like a book, creating a mirror image across a wall or vanity.</li>
                <li><strong>Zellige tile</strong> — Handmade in Morocco, each tile is slightly different, creating a surface that catches light like water.</li>
                <li><strong>Plaster walls</strong> — Tadelakt or Venetian plaster in bathrooms creates a seamless, organic surface that feels ancient and modern simultaneously.</li>
                <li><strong>Unlacquered brass</strong> — Faucets, handles, and accessories in unlacquered brass develop a living patina that gets more beautiful with age.</li>
              </ul>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Layout Intelligence</h2>
              <p>In a small NYC bathroom, layout is everything. We always prioritize: a vanity with adequate counter space (even if it means a smaller shower), a toilet room or water closet when square footage allows, storage that&apos;s accessible from where you stand, not where you have to reach, and a shower experience that feels generous — even in a compact footprint.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Lighting That Flatters</h2>
              <p>Bathroom lighting serves two purposes: functional illumination for grooming and ambient warmth for relaxation. The biggest mistake is a single overhead light that casts shadows downward. Instead, we layer: sconces at face height for makeup and shaving, recessed lights on dimmers for general illumination, and a single statement fixture — a pendant or chandelier — for personality.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">The Shower Experience</h2>
              <p>The shower is where most people start their day, and it deserves to be exceptional. We specify: rainfall showerheads with hand-held companions, body sprays when the layout allows, frameless glass enclosures that disappear into the architecture, and niches with built-in LED lighting that make products look like they&apos;re floating.</p>
              <p>If you&apos;re planning a bathroom renovation, <Link href="/contact" className="text-gold hover:text-gold-light transition-colors">we&apos;d love to discuss your vision</Link>. It&apos;s the room where good design has the most daily impact.</p>
            </div>
          </div>
        </section>
        <section className="border-t border-cream-100/10 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="font-display text-2xl text-cream-100">Continue Reading</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Link href="/journal/luxury-bathroom-design-ideas" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">Luxury Bathroom Design Ideas</h3><p className="mt-2 text-sm text-cream-200/60">Making every square inch count</p></Link>
              <Link href="/journal/luxury-home-renovation-nyc" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">Luxury Home Renovation NYC</h3><p className="mt-2 text-sm text-cream-200/60">Complete guide to high-end remodels</p></Link>
            </div>
          </div>
        </section>
        <section className="bg-graphite py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Start Your Project</span>
            <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">Ready for a Spa-Level Bathroom?</h2>
            <p className="mt-4 text-cream-200/70">We design bathrooms that make every morning feel like a retreat.</p>
            <Link href="/contact" className="mt-8 inline-block btn-gold">Schedule a Consultation</Link>
          </div>
        </section>
      </article>
    </>
  );
}