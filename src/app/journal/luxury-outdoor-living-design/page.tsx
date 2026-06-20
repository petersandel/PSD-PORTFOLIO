import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Luxury Outdoor Living Design: Bringing Interior Design Outside",
  description:
    "Outdoor spaces deserve the same design rigor as indoor ones. Learn how to create luxury outdoor living areas — from terraces and rooftops to gardens and pool houses — that extend your home's design language.",
  keywords: [
    "luxury outdoor living design",
    "outdoor interior design NYC",
    "rooftop terrace design",
    "luxury patio design ideas",
    "outdoor living space design",
    "terrace design Manhattan",
    "pool house interior design",
  ],
};

export default function LuxuryOutdoorLivingDesign() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Journal", href: "/journal" }, { name: "Luxury Outdoor Living Design", href: "/journal/luxury-outdoor-living-design" }]} />
      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">Design Inspiration</Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">9 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">Luxury Outdoor Living Design: Bringing Interior Design Outside</h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">The best outdoor spaces don&apos;t feel like an afterthought. They feel like the most beautiful room in the house — just without a ceiling.</p>
            <div className="mt-8 flex items-center gap-4 text-sm text-cream-200/50"><span>May 22, 2026</span><span className="text-cream-200/30">•</span><span>By Peter Sandel</span></div>
          </div>
        </section>


        {/* Hero Image */}
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/journal/luxury-outdoor-living.jpg"
              alt="Luxury Outdoor Living Design"
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
              <p>In New York City, outdoor space is the ultimate luxury. A terrace, a rooftop, a garden — these are the spaces that transform an apartment from great to extraordinary. Yet too often, they&apos;re treated as afterthoughts: a few planters, some outdoor furniture, and a string of lights. The best outdoor spaces deserve the same design intention as any interior room.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">The Terrace as a Room</h2>
              <p>We design outdoor spaces as rooms — with defined zones, considered circulation, and the same attention to material and proportion that we bring to interiors. A rooftop terrace gets a dining zone, a lounging zone, and a transition zone that connects them. A garden gets a destination — a seating area at the far end that draws you through the space.</p>
              <p>The key is continuity. When the outdoor space uses the same design language as the interior — similar materials, a related color palette, consistent hardware finishes — the home feels larger and more cohesive. The terrace isn&apos;t a separate space; it&apos;s the next room.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Materials That Weather Beautifully</h2>
              <p>Outdoor materials must survive freeze-thaw cycles, UV exposure, wind, and rain — and still look beautiful. Our go-to outdoor materials:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Ipe and teak</strong> — Hardwoods that develop a beautiful silver patina over time</li>
                <li><strong>Bluestone and limestone</strong> — Natural stones that improve with age and weathering</li>
                <li><strong>Marine-grade stainless steel</strong> — For railings, planters, and structural elements</li>
                <li><strong>Performance outdoor fabrics</strong> — Perennials and Sunbrella that look like indoor textiles but withstand the elements</li>
                <li><strong>Exterior-grade plaster and stucco</strong> — For walls that create the feeling of an outdoor room</li>
              </ul>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Rooftop Design in NYC</h2>
              <p>NYC rooftops present unique challenges: weight restrictions, wind exposure, building regulations, and the logistics of getting materials up an elevator (or crane). We&apos;ve navigated all of these and understand how to design for the specific conditions of a rooftop — from wind-rated furniture to container gardens that can survive at 40 stories.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">The Pool House</h2>
              <p>For our <Link href="/work/pool-house" className="text-gold hover:text-gold-light transition-colors">Pool House project</Link>, we designed an outdoor living space that functions as a complete extension of the main residence — with a kitchen, bathroom, and lounging area that make it possible to spend the entire day outside without returning to the house. This is the ideal: an outdoor space so complete that it becomes a destination in its own right.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Lighting the Outdoors</h2>
              <p>Outdoor lighting serves two purposes: functional safety and atmospheric beauty. We specify low-voltage landscape lighting that highlights plantings and architectural features, pathway lighting that guides movement without creating glare, and overhead fixtures that define seating areas. The result is an outdoor space that&apos;s as inviting at night as it is during the day.</p>
              <p>If you have an outdoor space that deserves better design, <Link href="/contact" className="text-gold hover:text-gold-light transition-colors">we&apos;d love to discuss your project</Link>.</p>
            </div>
          </div>
        </section>
        <section className="border-t border-cream-100/10 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="font-display text-2xl text-cream-100">Continue Reading</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Link href="/journal/hamptons-beach-house-interior-design" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">Hamptons Beach House Design</h3><p className="mt-2 text-sm text-cream-200/60">Creating coastal luxury</p></Link>
              <Link href="/journal/behind-design-hudson-yards" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">Inside Our Hudson Yards Residence</h3><p className="mt-2 text-sm text-cream-200/60">A design case study</p></Link>
            </div>
          </div>
        </section>
        <section className="bg-graphite py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Start Your Project</span>
            <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">Design Your Outdoor Space</h2>
            <p className="mt-4 text-cream-200/70">Terraces, rooftops, and gardens deserve the same design rigor as any room.</p>
            <Link href="/contact" className="mt-8 inline-block btn-gold">Schedule a Consultation</Link>
          </div>
        </section>
      </article>
    </>
  );
}