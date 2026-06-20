import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Luxury Dining Room Design: Creating the Room That Brings People Together",
  description:
    "The dining room is where life happens — celebrations, conversations, and the meals that become memories. Expert guidance on designing a luxury dining room that's both beautiful and deeply inviting.",
  keywords: [
    "luxury dining room design",
    "dining room design ideas NYC",
    "formal dining room interior design",
    "luxury dining table ideas",
    "dining room lighting design",
    "elegant dining room ideas",
    "interior designer dining room",
  ],
};

export default function LuxuryDiningRoomDesign() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Journal", href: "/journal" }, { name: "Luxury Dining Room Design", href: "/journal/luxury-dining-room-design" }]} />
      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">Design Tips</Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">8 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">Luxury Dining Room Design: Creating the Room That Brings People Together</h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">The dining room is the most social room in any home. It deserves design that rises to the occasion — and invites people to stay a little longer.</p>
            <div className="mt-8 flex items-center gap-4 text-sm text-cream-200/50"><span>May 22, 2026</span><span className="text-cream-200/30">•</span><span>By Peter Sandel</span></div>
          </div>
        </section>


        {/* Hero Image */}
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/journal/luxury-dining-room.jpg"
              alt="Luxury Dining Room Design"
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
              <p>In a world where we eat most meals at kitchen islands and coffee tables, the dining room has become something more than a place to eat. It&apos;s the room where we mark occasions — birthdays, holidays, dinner parties that stretch past midnight. And because we use it less frequently, every use carries more weight. The dining room must be extraordinary every time.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">The Table: Where Everything Starts</h2>
              <p>The dining table is the room&apos;s anchor, and it sets the tone for everything else. We specify tables that are substantial enough to feel important but not so precious that people are afraid to use them. Solid wood with a hand-rubbed finish. Stone tops for clients who entertain frequently. Round tables for intimate dinners, rectangular for larger gatherings. And always, always, a table that&apos;s large enough — nothing diminishes a dining room faster than a table that&apos;s too small for the space.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Lighting: The Most Important Design Decision</h2>
              <p>A dining room lives and dies by its lighting. The fixture above the table is often the single most impactful element in the room — it sets the mood, defines the scale, and creates the atmosphere that makes people want to linger. We specify fixtures that are proportional to the table (typically one-third to one-half the table&apos;s width), hung low enough to create intimacy (30-34 inches above the table), and always on a dimmer.</p>
              <p>Beyond the centerpiece, we layer: wall sconces for ambient warmth, picture lights for art, and candlelight for the finishing touch that no electric fixture can replicate.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Seating That Invites Staying</h2>
              <p>Dining chairs should be beautiful enough to admire and comfortable enough to sit in for three hours. This is harder than it sounds. We specify chairs with upholstered seats at minimum, fully upholstered chairs when the design allows, and always with attention to the seat height, depth, and angle. The best dinner parties end with people still sitting at the table, not retreating to the living room because the chairs are uncomfortable.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">The Walls: Creating Atmosphere</h2>
              <p>Dining rooms can handle drama that other rooms can&apos;t. This is where we use bold wallpaper, dark paint, or extensive art collections. The room is used primarily in the evening, under artificial light, which means colors read differently than they do in a sun-filled living room. We take advantage of this — creating rooms that feel like destinations, not just places to eat.</p>
              <p>Our favorite dining room treatments include: <Link href="/journal/luxury-wallpaper-ideas" className="text-gold hover:text-gold-light transition-colors">grasscloth wallpaper</Link> for subtle texture, hand-painted murals for drama, and gallery walls with vintage finds from <Link href="https://provenanceandpatina.com" className="text-gold hover:text-gold-light transition-colors">Provenance &amp; Patina</Link> for personality.</p>
              <p>If you&apos;re designing a dining room, <Link href="/contact" className="text-gold hover:text-gold-light transition-colors">we&apos;d love to discuss your vision</Link>.</p>
            </div>
          </div>
        </section>
        <section className="border-t border-cream-100/10 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="font-display text-2xl text-cream-100">Continue Reading</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Link href="/journal/luxury-wallpaper-ideas" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">Luxury Wallpaper Ideas</h3><p className="mt-2 text-sm text-cream-200/60">How to use wallpaper like a top designer</p></Link>
              <Link href="/journal/luxury-living-room-design" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">How to Design an Elegant Living Room</h3><p className="mt-2 text-sm text-cream-200/60">Balancing beauty with livability</p></Link>
            </div>
          </div>
        </section>
        <section className="bg-graphite py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Start Your Project</span>
            <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">Design Your Dining Room</h2>
            <p className="mt-4 text-cream-200/70">Create a room that brings people together — and keeps them at the table.</p>
            <Link href="/contact" className="mt-8 inline-block btn-gold">Schedule a Consultation</Link>
          </div>
        </section>
      </article>
    </>
  );
}