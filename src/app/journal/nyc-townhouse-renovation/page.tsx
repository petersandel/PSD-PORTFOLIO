import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NYC Townhouse Renovation: Designing a Complete Home in the City",
  description:
    "NYC townhouse renovations offer unmatched design freedom — and unique challenges. From landmark approvals to vertical flow design, learn how to transform a townhouse into a luxury residence.",
  keywords: [
    "NYC townhouse renovation",
    "townhouse interior design NYC",
    "brownstone renovation Manhattan",
    "luxury townhouse design",
    "townhouse renovation cost NYC",
    "vertical design townhouse",
    "historic home renovation NYC",
  ],
};

export default function NYCTownhouseRenovation() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Journal", href: "/journal" }, { name: "NYC Townhouse Renovation", href: "/journal/nyc-townhouse-renovation" }]} />
      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">Project Spotlight</Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">11 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">NYC Townhouse Renovation: Designing a Complete Home in the City</h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">A townhouse is the rare New York property where you control every surface, every system, every detail. Here&apos;s how to make the most of that freedom.</p>
            <div className="mt-8 flex items-center gap-4 text-sm text-cream-200/50"><span>May 22, 2026</span><span className="text-cream-200/30">•</span><span>By Peter Sandel</span></div>
          </div>
        </section>


        {/* Hero Image */}
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/journal/nyc-townhouse.jpg"
              alt="NYC Townhouse Renovation"
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
              <p>There is nothing quite like a New York City townhouse. In a city of apartments, a townhouse offers something almost mythical: a complete home — with a front door, a garden, and multiple floors of design possibility. But that freedom comes with complexity. Townhouse renovations are among the most demanding projects in our practice, and also the most rewarding.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">The Vertical Design Challenge</h2>
              <p>Unlike apartments, which flow horizontally, townhouses flow vertically. This creates a unique design challenge: how do you create a cohesive experience across four, five, or six floors? Our approach is to treat each floor as a chapter in a single story. The materials evolve — heavier and more grounded on the parlor floor, lighter and more private on the bedroom floors — but the language is consistent.</p>
              <p>The staircase becomes the spine of the home, and we design it as a continuous experience: consistent railing design, considered lighting at every landing, and art or wallpaper that creates moments of surprise as you move between floors.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Landmark and Regulatory Considerations</h2>
              <p>Many NYC townhouses fall within historic districts, which means the Landmarks Preservation Commission must approve any changes to the exterior. This includes facade work, window replacements, and even paint colors on the front door. Interior changes are generally unrestricted, but the approval process adds time and requires expertise.</p>
              <p>We navigate these approvals regularly and maintain relationships with the LPC that help us guide projects through the process efficiently.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">The Garden Level</h2>
              <p>The garden level is the townhouse&apos;s secret weapon. Often underutilized as a rental unit or storage, this floor can become a private suite, a home office, a media room, or — when connected to the garden — an extraordinary indoor-outdoor living space. We always advocate for reclaiming the garden level as part of the primary residence.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Systems and Infrastructure</h2>
              <p>Townhouse renovations often require complete systems overhauls: new electrical, new plumbing, new HVAC, and often structural reinforcement. This is the unglamorous work that makes everything else possible. We plan these systems first, not last, because they determine what&apos;s possible in every room above.</p>
              <p>If you&apos;re considering a townhouse renovation, <Link href="/contact" className="text-gold hover:text-gold-light transition-colors">we&apos;d welcome the conversation</Link>. These projects require experience, and we have it.</p>
            </div>
          </div>
        </section>
        <section className="border-t border-cream-100/10 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="font-display text-2xl text-cream-100">Continue Reading</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Link href="/journal/luxury-home-renovation-nyc" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">Luxury Home Renovation NYC</h3><p className="mt-2 text-sm text-cream-200/60">Complete guide to high-end remodels</p></Link>
              <Link href="/journal/pre-war-apartment-renovation-nyc" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">Pre-War Apartment Renovation</h3><p className="mt-2 text-sm text-cream-200/60">Honoring the past while creating something new</p></Link>
            </div>
          </div>
        </section>
        <section className="bg-graphite py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Start Your Project</span>
            <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">Renovating a Townhouse?</h2>
            <p className="mt-4 text-cream-200/70">We bring decades of townhouse experience to every project.</p>
            <Link href="/contact" className="mt-8 inline-block btn-gold">Schedule a Consultation</Link>
          </div>
        </section>
      </article>
    </>
  );
}