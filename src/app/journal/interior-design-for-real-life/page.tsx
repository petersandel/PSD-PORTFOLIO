import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Interior Design for Real Life: Designing Homes People Actually Live In",
  description:
    "The best interiors aren't just beautiful — they're livable. Learn how luxury interior designers create spaces that work for real families, real messes, and real life without sacrificing beauty.",
  keywords: [
    "interior design for real life",
    "livable luxury design",
    "family friendly interior design",
    "practical luxury design",
    "pet friendly interior design",
    "washable luxury furniture",
    "functional interior design",
  ],
};

export default function InteriorDesignForRealLife() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Journal", href: "/journal" }, { name: "Interior Design for Real Life", href: "/journal/interior-design-for-real-life" }]} />
      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">Design Inspiration</Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">8 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">Interior Design for Real Life: Designing Homes People Actually Live In</h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">The most beautiful homes are the ones you never want to leave — not because they&apos;re precious, but because they&apos;re designed for the way you actually live.</p>
            <div className="mt-8 flex items-center gap-4 text-sm text-cream-200/50"><span>May 22, 2026</span><span className="text-cream-200/30">•</span><span>By Peter Sandel</span></div>
          </div>
        </section>


        {/* Hero Image */}
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/journal/interior-design-real-life.jpg"
              alt="Interior Design for Real Life"
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
              <p>There&apos;s a version of interior design that exists only in photographs — pristine rooms with perfectly fluffed pillows, no cables in sight, and surfaces so bare you wonder if anyone actually lives there. That&apos;s not what we do. We design for real life. For homes with children tracking in from the park, dogs who claim the best sofa, and mornings when the only thing that matters is whether the coffee maker is within arm&apos;s reach.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Performance Fabrics That Don&apos;t Look Like Performance Fabrics</h2>
              <p>The single biggest advancement in residential design over the past decade has been the evolution of performance fabrics. Today&apos;s best indoor/outdoor fabrics, Crypton-treated upholstery, and stain-resistant linens are indistinguishable from their delicate counterparts. We use them everywhere — and we never tell our clients&apos; guests which sofa they can actually spill wine on.</p>
              <p>Our go-to performance fabric brands include Perennials, Sunbrella, and Inside Out — all of which offer textures and colors that look and feel like natural linen, cotton, or velvet.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Designing for Pets Without Compromise</h2>
              <p>Pets are family, and their presence shouldn&apos;t mean compromising on design. Our strategies: washable slipcovers in performance fabrics, furniture with legs high enough for a robot vacuum, durable rugs (vintage and antique wash surprisingly well), and designated pet zones that are integrated into the design rather than hidden away.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">The Drop Zone</h2>
              <p>Every home needs a drop zone — a place near the entry where keys, bags, shoes, and mail land. The difference between a cluttered entry and a designed one is intention. We build drop zones into our entry designs: a console with drawers for keys and mail, a bench with storage underneath for shoes, hooks for coats that are part of the design rather than an afterthought.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Kid-Friendly Doesn&apos;t Mean Design-Hostile</h2>
              <p>Children&apos;s spaces can be beautiful. A nursery with a hand-painted mural from <Link href="https://provenanceandpatina.com" className="text-gold hover:text-gold-light transition-colors">Provenance &amp; Patina</Link> is more interesting than a themed room. A playroom with built-in storage that grows with the child is more practical than bins that multiply. Round tables instead of sharp corners, washable rugs instead of wall-to-wall carpet, and furniture that&apos;s low to the ground — these choices make a home work for the whole family.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">The Luxury of Easy</h2>
              <p>True luxury isn&apos;t a sofa you&apos;re afraid to sit on — it&apos;s a sofa that looks incredible and invites you to stay. If you want a home that&apos;s both beautiful and livable, <Link href="/contact" className="text-gold hover:text-gold-light transition-colors">let&apos;s talk about your life</Link>.</p>
            </div>
          </div>
        </section>
        <section className="border-t border-cream-100/10 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="font-display text-2xl text-cream-100">Continue Reading</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Link href="/journal/luxury-living-room-design" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">How to Design an Elegant Living Room</h3><p className="mt-2 text-sm text-cream-200/60">Balancing beauty with livability</p></Link>
              <Link href="/journal/small-space-luxury" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">Small Space Luxury</h3><p className="mt-2 text-sm text-cream-200/60">Making small apartments feel expensive</p></Link>
            </div>
          </div>
        </section>
        <section className="bg-graphite py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Start Your Project</span>
            <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">Design for Your Life</h2>
            <p className="mt-4 text-cream-200/70">Beautiful spaces that work for the way you actually live.</p>
            <Link href="/contact" className="mt-8 inline-block btn-gold">Schedule a Consultation</Link>
          </div>
        </section>
      </article>
    </>
  );
}