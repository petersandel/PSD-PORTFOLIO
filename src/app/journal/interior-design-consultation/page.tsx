import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Interior Design Consultation: What to Expect and How to Prepare",
  description:
    "Preparing for an interior design consultation? Learn what to bring, what questions to ask, and how to make the most of your first meeting with a luxury interior designer.",
  keywords: [
    "interior design consultation",
    "what to expect interior designer meeting",
    "how to prepare for interior design consultation",
    "interior designer first meeting",
    "luxury interior design consultation NYC",
    "interior design consultation tips",
    "what to bring to interior designer",
  ],
};

export default function InteriorDesignConsultation() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Journal", href: "/journal" }, { name: "Interior Design Consultation", href: "/journal/interior-design-consultation" }]} />
      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">Client Guides</Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">7 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">Interior Design Consultation: What to Expect and How to Prepare</h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">The first meeting sets the tone for the entire project. Here&apos;s how to walk in prepared — and walk out inspired.</p>
            <div className="mt-8 flex items-center gap-4 text-sm text-cream-200/50"><span>May 22, 2026</span><span className="text-cream-200/30">•</span><span>By Peter Sandel</span></div>
          </div>
        </section>


        {/* Hero Image */}
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/journal/interior-design-consultation.jpg"
              alt="Interior Design Consultation"
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
              <p>The consultation is where everything begins. It&apos;s part interview, part creative session, and part chemistry test. Both sides are evaluating — you&apos;re deciding if this designer understands your vision, and the designer is assessing whether they can deliver it. Here&apos;s how to make the most of this critical first meeting.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">What to Bring</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Inspiration images</strong> — Not just rooms you love, but also rooms you hate. Both are equally informative. Save images from magazines, Instagram, and Pinterest.</li>
                <li><strong>Photos of your current space</strong> — Take wide-angle shots of every room, plus detail shots of anything you want to keep.</li>
                <li><strong>A realistic budget range</strong> — Not a wishful number, but the actual range you&apos;re prepared to invest. Good designers can work with any budget; they just need to know what it is.</li>
                <li><strong>A list of must-haves and deal-breakers</strong> — If you work from home and need a dedicated office, say so. If you can&apos;t stand the color blue, say that too.</li>
                <li><strong>Building documents</strong> — If you&apos;re in a co-op or condo, bring your alteration agreement. If you own a townhouse, bring any landmark district information.</li>
              </ul>
              <h2 className="font-display text-2xl text-cream-100 pt-4">What to Ask</h2>
              <p>The consultation is your chance to evaluate the designer as much as they&apos;re evaluating your project. Key questions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>&quot;Can you walk me through a recent project from start to finish?&quot;</li>
                <li>&quot;How do you handle projects that go over budget?&quot;</li>
                <li>&quot;What&apos;s your communication style during a project?&quot;</li>
                <li>&quot;Do you have experience with my type of building?&quot;</li>
                <li>&quot;Can I speak with a past client?&quot;</li>
              </ul>
              <h2 className="font-display text-2xl text-cream-100 pt-4">What We Look For</h2>
              <p>In a first meeting, we&apos;re listening for several things: clarity about what you want (even if it&apos;s still forming), honesty about how you live, openness to new ideas, and realistic expectations about timeline and budget. The best client-designer relationships are built on trust and communication, and that starts in the first conversation.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Red Flags</h2>
              <p>Just as you&apos;re evaluating us, we want you to be informed. Red flags in a designer include: an unwillingness to provide references, pressure to sign a contract immediately, a portfolio where every project looks identical, and vague answers about budget and timeline.</p>
              <p>Ready to schedule your consultation? <Link href="/contact" className="text-gold hover:text-gold-light transition-colors">We&apos;d love to meet you</Link>.</p>
            </div>
          </div>
        </section>
        <section className="border-t border-cream-100/10 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="font-display text-2xl text-cream-100">Continue Reading</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Link href="/journal/how-to-hire-an-interior-designer-nyc" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">How to Hire an Interior Designer in NYC</h3><p className="mt-2 text-sm text-cream-200/60">The complete guide to finding the right designer</p></Link>
              <Link href="/journal/how-to-work-with-interior-designer" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">How to Work with an Interior Designer</h3><p className="mt-2 text-sm text-cream-200/60">What to expect from start to finish</p></Link>
            </div>
          </div>
        </section>
        <section className="bg-graphite py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Book Your Consultation</span>
            <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">Let&apos;s Start the Conversation</h2>
            <p className="mt-4 text-cream-200/70">Every great project begins with a single meeting.</p>
            <Link href="/contact" className="mt-8 inline-block btn-gold">Schedule a Consultation</Link>
          </div>
        </section>
      </article>
    </>
  );
}