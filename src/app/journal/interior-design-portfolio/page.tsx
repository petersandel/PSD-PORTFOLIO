import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Interior Design Portfolio: How to Read One Like a Pro",
  description:
    "Not all interior design portfolios are created equal. Learn how to evaluate a designer's portfolio, spot the difference between styling and design, and find the right match for your project.",
  keywords: [
    "interior design portfolio",
    "how to evaluate interior designer",
    "interior designer portfolio review",
    "choosing an interior designer",
    "what to look for in interior design portfolio",
    "interior designer selection",
    "luxury interior design portfolio",
  ],
};

export default function InteriorDesignPortfolio() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Journal", href: "/journal" }, { name: "Interior Design Portfolio Guide", href: "/journal/interior-design-portfolio" }]} />
      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">Client Guides</Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">7 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">Interior Design Portfolio: How to Read One Like a Pro</h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">A portfolio tells you everything you need to know about a designer — if you know what to look for. Here&apos;s your guide.</p>
            <div className="mt-8 flex items-center gap-4 text-sm text-cream-200/50"><span>May 22, 2026</span><span className="text-cream-200/30">•</span><span>By Peter Sandel</span></div>
          </div>
        </section>


        {/* Hero Image */}
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/journal/interior-design-portfolio.jpg"
              alt="Interior Design Portfolio"
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
              <p>You&apos;re looking at two interior design portfolios. Both show beautiful rooms. Both have professional photography. Both designers seem talented. How do you choose? The answer lies in knowing what separates a styled room from a designed one, and what a portfolio reveals — or hides — about a designer&apos;s actual capabilities.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Look for Process, Not Just Results</h2>
              <p>The best portfolios show more than finished rooms. They show the before — the challenging space, the awkward layout, the dated finishes — and the design thinking that transformed it. When a portfolio only shows wide-angle shots of perfect rooms, you&apos;re seeing styling, not design. Ask to see before-and-after comparisons. They reveal a designer&apos;s problem-solving ability.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Detail Shots Matter</h2>
              <p>A designer who shows close-up details — the edge of a countertop, the transition between materials, the inside of a cabinet, the hardware selection — is a designer who cares about execution. These details are where luxury lives. If a portfolio only shows wide shots, the designer may be focused on the overall impression rather than the daily experience.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Range vs. Repetition</h2>
              <p>Does every project look the same? A signature style is one thing — it shows consistency and confidence. But if every room has the same color palette, the same furniture arrangement, and the same accessories, you may be looking at a formula rather than a design process. The best designers adapt their approach to each client, each space, and each budget.</p>
              <p>Look at our <Link href="/work" className="text-gold hover:text-gold-light transition-colors">portfolio</Link> and you&apos;ll see a range of styles — from the contemporary minimalism of our <Link href="/work/hudson-yards" className="text-gold hover:text-gold-light transition-colors">Hudson Yards</Link> project to the layered warmth of our <Link href="/work/greenwich-west" className="text-gold hover:text-gold-light transition-colors">Greenwich West</Link> residence. Each project responds to the client, the architecture, and the context.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Real Rooms vs. Photo Shoots</h2>
              <p>Can you imagine living in the rooms you see? Or do they feel like sets — beautiful but untouchable? The best portfolios show rooms that look inhabited: books on tables, throws on sofas, personal objects on shelves. These details signal that the designer understands how people actually live, not just how rooms photograph.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Ask About the Stories Behind the Photos</h2>
              <p>When you meet with a designer, ask about specific projects in their portfolio. What was the client&apos;s brief? What was the biggest challenge? What would they do differently? A designer who can speak in depth about their work — the decisions, the compromises, the breakthroughs — is a designer who was present for the process, not just the photo shoot.</p>
              <p>If you&apos;re evaluating designers for your project, <Link href="/contact" className="text-gold hover:text-gold-light transition-colors">we&apos;d be happy to walk you through our portfolio</Link> in detail.</p>
            </div>
          </div>
        </section>
        <section className="border-t border-cream-100/10 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="font-display text-2xl text-cream-100">Continue Reading</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Link href="/journal/best-interior-designer-nyc" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">Best Interior Designer NYC</h3><p className="mt-2 text-sm text-cream-200/60">How to find the right designer for your project</p></Link>
              <Link href="/journal/how-to-work-with-interior-designer" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">How to Work with an Interior Designer</h3><p className="mt-2 text-sm text-cream-200/60">What to expect from start to finish</p></Link>
            </div>
          </div>
        </section>
        <section className="bg-graphite py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">See Our Work</span>
            <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">Explore Our Portfolio</h2>
            <p className="mt-4 text-cream-200/70">Every project tells a story. See what ours have to say.</p>
            <Link href="/work" className="mt-8 inline-block btn-gold">View Projects</Link>
          </div>
        </section>
      </article>
    </>
  );
}