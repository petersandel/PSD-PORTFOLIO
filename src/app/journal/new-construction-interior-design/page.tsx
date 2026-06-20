import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "New Construction Interior Design: Designing Before It's Built",
  description:
    "Working with new construction? Learn why involving an interior designer early is the smartest investment you can make — and how to get the results you envision from day one.",
  keywords: [
    "new construction interior design",
    "interior designer new construction NYC",
    "new build interior design",
    "designer involvement new construction",
    "luxury new construction design",
    "pre-construction interior design",
    "new apartment design NYC",
  ],
};

export default function NewConstructionInteriorDesign() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Journal", href: "/journal" }, { name: "New Construction Interior Design", href: "/journal/new-construction-interior-design" }]} />
      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">Client Guides</Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">9 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">New Construction Interior Design: Designing Before It&apos;s Built</h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">The biggest mistake in new construction? Waiting until the building is finished to hire a designer. Here&apos;s why early involvement changes everything.</p>
            <div className="mt-8 flex items-center gap-4 text-sm text-cream-200/50"><span>May 22, 2026</span><span className="text-cream-200/30">•</span><span>By Peter Sandel</span></div>
          </div>
        </section>


        {/* Hero Image */}
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/journal/new-construction.jpg"
              alt="New Construction Interior Design"
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
              <p>Buying new construction in New York City — whether it&apos;s a condo in a brand-new tower or a townhouse built from the ground up — presents a unique opportunity. You&apos;re starting with a blank canvas. But that canvas comes with a deadline: once the developer finishes the space, your options for changing it become dramatically more expensive and limited.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Why Early Involvement Matters</h2>
              <p>The ideal time to involve an interior designer in new construction is before the walls go up — or at minimum, before the developer finishes the space. Here&apos;s why:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Electrical and lighting plans</strong> — Once the walls are closed, moving an outlet or adding a light fixture requires cutting into finished surfaces. We plan lighting and electrical layouts that anticipate your furniture placement, not the other way around.</li>
                <li><strong>Plumbing rough-ins</strong> — Want a freestanding tub? A rain shower head? A bidet? These decisions need to be made before the plumber runs the pipes.</li>
                <li><strong>Custom built-ins</strong> — If you want a wall of built-in shelving, a window seat, or a custom closet system, the framing needs to accommodate it.</li>
                <li><strong>Finish selections</strong> — Developers offer standard finish packages. Knowing which to upgrade and which to accept — then customize later — can save tens of thousands of dollars.</li>
              </ul>
              <h2 className="font-display text-2xl text-cream-100 pt-4">What Developers Don&apos;t Tell You</h2>
              <p>Developer finish packages are designed for the broadest possible market, not for you. The &quot;designer kitchen&quot; they advertise is designer in name only — standard cabinets, basic stone, and builder-grade appliances. The &quot;luxury bathroom&quot; has the same fixtures you&apos;ll find in every other unit in the building.</p>
              <p>We work with clients during the pre-construction and construction phases to identify which developer finishes to accept (and customize later) and which to upgrade now (when the cost is a fraction of what it would be post-construction).</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">The Hudson Yards Approach</h2>
              <p>In our <Link href="/work/hudson-yards" className="text-gold hover:text-gold-light transition-colors">Hudson Yards project</Link>, we were involved before the walls were closed. This allowed us to specify custom lighting locations, upgrade the electrical panel to support a full smart home system, and modify the HVAC layout to accommodate a wine storage room. The result is a home that feels custom from the moment you walk in — because it was.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">The Design Process for New Construction</h2>
              <p>Our new construction design process runs parallel to the construction timeline:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Pre-construction</strong> — Review plans, specify custom modifications, coordinate with the developer on finish upgrades.</li>
                <li><strong>During construction</strong> — Site visits to verify rough-ins, coordinate with trades, and ensure design intent is being executed.</li>
                <li><strong>Post-construction</strong> — Furniture, window treatments, art, and styling — the layer that makes a new apartment feel like home.</li>
              </ul>
              <p>If you&apos;re purchasing new construction, <Link href="/contact" className="text-gold hover:text-gold-light transition-colors">involving us early is the single best investment you can make</Link>.</p>
            </div>
          </div>
        </section>
        <section className="border-t border-cream-100/10 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="font-display text-2xl text-cream-100">Continue Reading</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Link href="/journal/nyc-penthouse-design" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">NYC Penthouse Design</h3><p className="mt-2 text-sm text-cream-200/60">Designing for life above it all</p></Link>
              <Link href="/journal/luxury-home-renovation-nyc" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">Luxury Home Renovation NYC</h3><p className="mt-2 text-sm text-cream-200/60">Complete guide to high-end remodels</p></Link>
            </div>
          </div>
        </section>
        <section className="bg-graphite py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Start Your Project</span>
            <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">Buying New Construction?</h2>
            <p className="mt-4 text-cream-200/70">Get us involved early. It makes all the difference.</p>
            <Link href="/contact" className="mt-8 inline-block btn-gold">Schedule a Consultation</Link>
          </div>
        </section>
      </article>
    </>
  );
}