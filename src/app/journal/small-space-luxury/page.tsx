import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Small Space Luxury: How to Make a Small Apartment Feel Expensive",
  description:
    "Luxury isn't about square footage — it's about design intelligence. Expert strategies for making small NYC apartments feel spacious, expensive, and effortlessly sophisticated.",
  keywords: [
    "small space luxury design",
    "small apartment luxury NYC",
    "how to make small apartment feel expensive",
    "luxury small space interior design",
    "studio apartment design ideas",
    "small apartment design tips",
    "maximize small space luxury",
  ],
};

export default function SmallSpaceLuxury() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Journal", href: "/journal" },
          { name: "Small Space Luxury", href: "/journal/small-space-luxury" },
        ]}
      />

      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">
                Design Tips
              </Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">8 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">
              Small Space Luxury: How to Make a Small Apartment Feel Expensive
            </h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">
              Luxury isn&apos;t about square footage. It&apos;s about intention. Here&apos;s how to make every inch of a small apartment feel considered, curated, and completely yours.
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
              src="/images/journal/small-space-luxury.jpg"
              alt="Small Space Luxury"
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
                Some of the most luxurious homes we&apos;ve designed are under 800 square feet. Not in spite of their size — because of it. Small spaces demand a level of design discipline that large rooms can hide from. Every decision matters. Every inch is intentional. And the result, when done right, is a home that feels more considered, more refined, and more luxurious than spaces three times its size.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                Start with What You Can&apos;t Change
              </h2>
              <p>
                Before choosing a single piece of furniture, study the architecture. Where does the light come from? Which walls are longest? Where are the sight lines? In a small apartment, the layout isn&apos;t just about furniture placement — it&apos;s about creating visual flow that makes the space feel larger than it is.
              </p>
              <p>
                We always start by identifying the &quot;hero wall&quot; — the one wall that will anchor the room. In a living room, it might be the wall opposite the entry, where the eye lands first. That wall gets the best treatment: the art, the wallpaper, the most considered furniture placement. Everything else supports it.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                The Power of One Great Piece
              </h2>
              <p>
                In a small space, one exceptional piece of furniture does more work than five good ones. A single statement sofa in a luxurious fabric, a vintage console from <Link href="https://provenanceandpatina.com" className="text-gold hover:text-gold-light transition-colors">Provenance &amp; Patina</Link> that anchors the entry, or a hand-knotted rug that defines the entire living area — these investments transform a room without cluttering it.
              </p>
              <p>
                The mistake most people make is filling a small space with small furniture. Small sofas, small rugs, small art — it all reads as &quot;small apartment.&quot; Instead, choose fewer, larger pieces. A full-size sofa in a small living room feels more luxurious than a loveseat. A 8&apos;x10&apos; rug that extends under all the furniture makes the room feel bigger than a 5&apos;x7&apos; rug that floats in the middle.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                Built-In Storage: The Luxury of Invisible
              </h2>
              <p>
                The most luxurious thing in a small apartment is the absence of clutter. And the best way to achieve that is through built-in storage that disappears into the architecture. Floor-to-ceiling cabinetry painted to match the walls. A window seat with storage underneath. A closet system that uses every vertical inch. When storage is designed into the architecture, you never have to think about it — and that&apos;s the definition of luxury.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                Light as a Design Tool
              </h2>
              <p>
                In small spaces, lighting does double duty: it illuminates and it expands. We use layered lighting — overhead, task, and ambient — to create depth and dimension. A single dramatic pendant can define a dining area. Wall sconces free up surface space while adding warmth. And mirrors placed opposite windows double the natural light and the perceived size of the room.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                Material Consistency
              </h2>
              <p>
                The most impactful small-space strategy is also the simplest: limit your materials. When every surface is a different material, the eye stops at each transition, making the space feel choppy and small. When you use the same flooring throughout, the same metal finish on all hardware, and a limited palette of two or three materials, the eye flows continuously — and the space feels expansive.
              </p>
              <p>
                If you&apos;re working with a small space and want to make it feel truly luxurious, <Link href="/contact" className="text-gold hover:text-gold-light transition-colors">we&apos;d love to help</Link>. Some of our most rewarding projects have been the smallest ones.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-cream-100/10 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="font-display text-2xl text-cream-100">Continue Reading</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Link href="/journal/nyc-apartment-design-tips" className="group">
                <h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">10 Design Tips for NYC Apartments</h3>
                <p className="mt-2 text-sm text-cream-200/60">Making compact spaces feel luxurious</p>
              </Link>
              <Link href="/journal/luxury-bathroom-design-ideas" className="group">
                <h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">Luxury Bathroom Design Ideas</h3>
                <p className="mt-2 text-sm text-cream-200/60">Making every square inch count</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-graphite py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Start Your Project</span>
            <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">
              Small Space, Big Impact
            </h2>
            <p className="mt-4 text-cream-200/70">
              Some of our best work happens in the smallest spaces. Let&apos;s transform yours.
            </p>
            <Link href="/contact" className="mt-8 inline-block btn-gold">
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}