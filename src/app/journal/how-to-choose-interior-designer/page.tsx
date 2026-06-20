import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "How to Choose an Interior Designer: Questions That Reveal the Right Match",
  description:
    "Choosing an interior designer is one of the most personal hiring decisions you'll make. Here are the questions, red flags, and evaluation criteria that help you find the perfect match for your luxury home project.",
  keywords: [
    "how to choose an interior designer",
    "questions to ask interior designer",
    "hiring interior designer tips",
    "interior designer selection criteria",
    "finding the right interior designer",
    "interior designer consultation questions",
    "luxury interior designer selection",
  ],
};

export default function HowToChooseInteriorDesigner() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Journal", href: "/journal" }, { name: "How to Choose an Interior Designer", href: "/journal/how-to-choose-interior-designer" }]} />
      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">Client Guides</Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">8 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">How to Choose an Interior Designer: Questions That Reveal the Right Match</h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">This isn&apos;t just a hiring decision — it&apos;s a creative partnership. Here&apos;s how to find the designer who will understand your vision and bring it to life.</p>
            <div className="mt-8 flex items-center gap-4 text-sm text-cream-200/50"><span>May 22, 2026</span><span className="text-cream-200/30">•</span><span>By Peter Sandel</span></div>
          </div>
        </section>


        {/* Hero Image */}
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/journal/how-to-choose-designer.jpg"
              alt="How to Choose an Interior Designer"
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
              <p>You&apos;re about to entrust someone with the most personal space in your life — your home. The designer you choose will spend months in your space, make hundreds of decisions on your behalf, and ultimately shape how you experience your daily life. This is not a decision to make based on Instagram aesthetics alone.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">The Questions That Matter Most</h2>
              <p>When you meet with a designer, these are the questions that reveal whether they&apos;re the right match:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>&quot;Can you walk me through a project from start to finish?&quot;</strong> — This reveals their process. Listen for structure, communication, and problem-solving.</li>
                <li><strong>&quot;Tell me about a project that didn&apos;t go as planned.&quot;</strong> — This reveals character. Every project has challenges; what matters is how the designer handles them.</li>
                <li><strong>&quot;How do you handle budget overruns?&quot;</strong> — This reveals integrity. A good designer will be honest about what things cost and proactive about managing the budget.</li>
                <li><strong>&quot;What&apos;s your communication style during a project?&quot;</strong> — This reveals compatibility. Some clients want weekly updates; others want to be involved in every decision. Make sure your expectations align.</li>
                <li><strong>&quot;Can I speak with past clients?&quot;</strong> — This reveals confidence. A designer who hesitates to provide references may have something to hide.</li>
              </ul>
              <h2 className="font-display text-2xl text-cream-100 pt-4">What to Look For in a Portfolio</h2>
              <p>A portfolio should show range, depth, and attention to detail. Look for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Before and after photos</strong> — These show the designer&apos;s problem-solving ability, not just their styling skills.</li>
                <li><strong>Detail shots</strong> — Hardware, material transitions, custom joinery. These reveal the level of care in execution.</li>
                <li><strong>Varied projects</strong> — Different styles, different budgets, different building types. This shows adaptability.</li>
                <li><strong>Lived-in spaces</strong> — Rooms that look like people actually live in them, not just staged for photos.</li>
              </ul>
              <h2 className="font-display text-2xl text-cream-100 pt-4">Red Flags</h2>
              <p>Be cautious of designers who: pressure you to sign immediately, can&apos;t provide client references, have a portfolio where every project looks identical, give vague answers about budget and timeline, or dismiss your input. The best designers listen more than they talk in the first meeting.</p>
              <h2 className="font-display text-2xl text-cream-100 pt-4">The Chemistry Test</h2>
              <p>Beyond credentials and portfolio, the most important factor is chemistry. You&apos;ll be working closely with this person for months. Do you feel heard? Do you trust their judgment? Do you enjoy their company? If the answer to all three is yes, you&apos;ve found your designer.</p>
              <p>If you&apos;re evaluating designers for your project, <Link href="/contact" className="text-gold hover:text-gold-light transition-colors">we&apos;d welcome the opportunity to meet you</Link>.</p>
            </div>
          </div>
        </section>
        <section className="border-t border-cream-100/10 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="font-display text-2xl text-cream-100">Continue Reading</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Link href="/journal/best-interior-designer-nyc" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">Best Interior Designer NYC</h3><p className="mt-2 text-sm text-cream-200/60">How to find the right one for your project</p></Link>
              <Link href="/journal/interior-design-portfolio" className="group"><h3 className="font-display text-lg text-cream-100 transition-colors group-hover:text-gold">How to Read a Portfolio Like a Pro</h3><p className="mt-2 text-sm text-cream-200/60">What to look for beyond pretty pictures</p></Link>
            </div>
          </div>
        </section>
        <section className="bg-graphite py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Start Your Project</span>
            <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">Ready to Find Your Designer?</h2>
            <p className="mt-4 text-cream-200/70">Let&apos;s see if we&apos;re the right match.</p>
            <Link href="/contact" className="mt-8 inline-block btn-gold">Schedule a Consultation</Link>
          </div>
        </section>
      </article>
    </>
  );
}