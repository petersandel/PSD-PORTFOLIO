import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "How to Work with an Interior Designer: What to Expect from Start to Finish",
  description:
    "First time working with an interior designer? Learn the complete process — from initial consultation to final styling — so you know exactly what to expect when hiring a luxury interior designer.",
  keywords: [
    "how to work with an interior designer",
    "interior designer process",
    "what to expect from interior designer",
    "interior design consultation",
    "interior design project timeline",
    "client designer relationship",
    "luxury interior design process",
  ],
};

export default function HowToWorkWithInteriorDesigner() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Journal", href: "/journal" }, { name: "How to Work with an Interior Designer", href: "/journal/how-to-work-with-interior-designer" }]} />
      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">Client Guides</Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">10 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">How to Work with an Interior Designer: What to Expect from Start to Finish</h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">The designer-client relationship is a partnership. Here&apos;s exactly how it works — from your first call to the final reveal.</p>
            <div className="mt-8 flex items-center gap-4 text-sm text-cream-200/50"><span>May 22, 2026</span><span className="text-cream-200/30">•</span><span>By Peter Sandel</span></div>
          </div>
        </section>


        {/* Hero Image */}
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/journal/how-to-work-with-designer.jpg"
              alt="How to Work with an Interior Designer"
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
              <p>Hiring an interior designer for the first time can feel daunting. What does the process look like? How much involvement is required from you? When do you make decisions, and when do you trust the expert? This guide walks through every phase so you know exactly what to expect.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Phase 1: Discovery & Consultation</h2>
              <p>Every project begins with a conversation. In the initial consultation, we learn about you — how you live, what you value, what frustrates you about your current space, and what you dream about for the new one. This isn&apos;t a design meeting; it&apos;s a listening meeting. The best designs emerge from deep understanding, and that starts here.</p>
              <p>Come prepared with: inspiration images (even if they&apos;re contradictory — that tells us something), a realistic sense of your budget, and honest answers about how you actually live. If you eat dinner on the couch every night, tell us. We design for real life, not aspirational life.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Phase 2: Concept Development</h2>
              <p>After the consultation, we develop a design concept that translates your vision into a cohesive direction. This includes mood boards, a preliminary color palette, material selections, and a spatial plan. This is where you start to see your home take shape — and where we make sure we&apos;re aligned before investing in detailed drawings.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Phase 3: Design Development</h2>
              <p>Once the concept is approved, we develop it into a complete design: detailed floor plans, elevations, finish specifications, furniture selections, and a comprehensive budget. This is the most intensive phase, and it requires your active participation. We present options, you make choices, and together we refine until every detail is right.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Phase 4: Procurement & Construction</h2>
              <p>With the design finalized, we move into execution. Furniture and materials are ordered, contractors are managed, and construction is overseen. This is where our project management expertise matters most — coordinating dozens of moving parts, managing timelines, and solving problems before they become delays.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Phase 5: Installation & Styling</h2>
              <p>The final phase is where everything comes together. Furniture is delivered and placed, art is hung, accessories are styled, and the finishing touches that make a house feel like a home are added. This is the most exciting phase — and the one that rewards all the careful planning that came before.</p>
              <p>Ready to start? <Link href="/contact" className="text-gold hover:text-gold-light transition-colors">Let&apos;s begin with a conversation</Link>.</p>
            </div>
          </div>
        </section>
        <section className="border-t border-cream-100/10 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="font-display text-2xl text-cream-100">Continue Reading</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Link href="/journal/how-to-hire-an-interior-designer-nyc" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">How to Hire an Interior Designer in NYC</h3><p className="mt-2 text-sm text-cream-200/60">The complete guide to finding the right designer</p></Link>
              <Link href="/journal/interior-designer-cost-nyc" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">How Much Does an Interior Designer Cost?</h3><p className="mt-2 text-sm text-cream-200/60">Understanding fees, budgets, and value</p></Link>
            </div>
          </div>
        </section>
        <section className="bg-graphite py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Start Your Project</span>
            <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">Ready to Begin?</h2>
            <p className="mt-4 text-cream-200/70">Every project starts with a simple conversation.</p>
            <Link href="/contact" className="mt-8 inline-block btn-gold">Schedule a Consultation</Link>
          </div>
        </section>
      </article>
    </>
  );
}