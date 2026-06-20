import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NYC Penthouse Design: Ideas for Luxury Living Above It All",
  description:
    "Penthouse design in NYC demands a different approach. Learn how top designers maximize skyline views, create flow in open floor plans, and bring warmth to spaces that live above the city.",
  keywords: [
    "NYC penthouse design",
    "penthouse interior design ideas",
    "luxury penthouse Manhattan",
    "skyline apartment design",
    "penthouse renovation NYC",
    "high-rise interior design",
    "luxury apartment design tips",
  ],
};

export default function NYCPenthouseDesign() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Journal", href: "/journal" },
          { name: "NYC Penthouse Design", href: "/journal/nyc-penthouse-design" },
        ]}
      />

      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">
                Design Inspiration
              </Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">9 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">
              NYC Penthouse Design: Ideas for Luxury Living Above It All
            </h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">
              A penthouse isn&apos;t just an apartment on the top floor. It&apos;s a different kind of living entirely — and it demands a different kind of design.
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
              src="/images/journal/nyc-penthouse.jpg"
              alt="NYC Penthouse Design"
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
                There&apos;s a moment in every great penthouse when you stop looking at the furniture and start looking at the view. That&apos;s exactly the point. The best penthouse designs don&apos;t compete with the skyline — they frame it, complement it, and create a living experience that feels like the city was built for you.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                Designing for the View
              </h2>
              <p>
                The view is the penthouse&apos;s greatest asset and its greatest design challenge. Every furniture placement, every material choice, and every window treatment must work in service of what&apos;s outside. This means:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Low-profile furniture</strong> that preserves sightlines from every angle</li>
                <li><strong>Reflective surfaces</strong> — mirrors, polished stone, lacquered finishes — that double the impact of the view</li>
                <li><strong>Minimal window treatments</strong> — motorized shades that disappear when not in use, sheer fabrics that filter without blocking</li>
                <li><strong>Strategic lighting</strong> that doesn&apos;t create glare on glass at night</li>
              </ul>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                Creating Intimacy in Expansive Spaces
              </h2>
              <p>
                The paradox of penthouse design: you have more space than you&apos;ve ever had, and yet it can feel like the least intimate home you&apos;ve ever lived in. Open floor plans that stretch endlessly, ceilings that soar, and walls of glass that connect you to the sky — these are extraordinary features that require extraordinary design to feel like home.
              </p>
              <p>
                We solve this through what we call &quot;zones of intimacy&quot; — carefully defined areas within the open plan that feel like rooms without walls. A seating area grounded by a massive rug and defined by a pendant light overhead. A dining space enclosed by a screen of sheer fabric. A reading nook carved into a window alcove with built-in banquette seating.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                Material Selection for High-Altitude Living
              </h2>
              <p>
                Penthouses present unique material challenges. The light is different — more intense, more direct, and more variable throughout the day. The air is different — drier in winter, more humid in summer. And the scale demands materials that can hold their own in large expanses.
              </p>
              <p>
                Our go-to materials for penthouse projects: wide-plank European oak floors that warm up vast expanses, book-matched marble slabs that create drama at scale, plaster walls that absorb light beautifully, and textiles — linen, velvet, bouclé — that add softness to hard-edged architecture.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                The Hudson Yards Case Study
              </h2>
              <p>
                In our <Link href="/work/hudson-yards" className="text-gold hover:text-gold-light transition-colors">Hudson Yards residence</Link>, we faced the ultimate penthouse design challenge: floor-to-ceiling windows on three sides with panoramic views of the Hudson River, the skyline, and the Vessel. The solution was to design every element — from the custom millwork to the furniture layout to the art placement — to direct the eye outward while creating pockets of warmth that made the 3,200 square feet feel like a series of intimate rooms.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                Outdoor Spaces
              </h2>
              <p>
                Many NYC penthouses include terraces or rooftop access, and these outdoor spaces deserve the same design attention as the interiors. We treat them as outdoor rooms — with proper furniture, lighting, planters, and even outdoor rugs — that extend the living space and create a seamless transition between inside and out.
              </p>
              <p>
                If you&apos;re designing a penthouse or high-rise residence, <Link href="/contact" className="text-gold hover:text-gold-light transition-colors">we&apos;d love to discuss your project</Link>. These spaces require a specific expertise, and it&apos;s one we&apos;ve developed through years of working at the top of New York&apos;s most iconic buildings.
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
                <p className="mt-2 text-sm text-cream-200/60">Making compact spaces feel luxurious and expansive</p>
              </Link>
              <Link href="/journal/behind-design-hudson-yards" className="group">
                <h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">Inside Our Hudson Yards Residence</h3>
                <p className="mt-2 text-sm text-cream-200/60">A design case study</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-graphite py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Start Your Project</span>
            <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">
              Designing a Penthouse?
            </h2>
            <p className="mt-4 text-cream-200/70">
              We specialize in high-rise and penthouse residences throughout Manhattan.
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