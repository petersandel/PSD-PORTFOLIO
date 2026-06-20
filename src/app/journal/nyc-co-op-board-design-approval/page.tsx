import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NYC Co-op Board Design Approval: A Complete Guide for Renovations",
  description:
    "Navigate the NYC co-op board approval process for interior design renovations. Expert tips on alteration agreements, insurance, timelines, and getting your design plans approved.",
  keywords: [
    "NYC co-op board approval renovation",
    "co-op alteration agreement design",
    "co-op renovation guide NYC",
    "co-op board interior design",
    "Manhattan co-op renovation tips",
    "co-op board approval process",
  ],
};

export default function CoOpBoardDesignApproval() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Journal", href: "/journal" },
          { name: "Co-op Board Design Approval", href: "/journal/nyc-co-op-board-design-approval" },
        ]}
      />

      <article className="bg-charcoal">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Link href="/journal" className="text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light">Client Guides</Link>
              <span className="text-cream-200/30">•</span>
              <span className="text-xs text-cream-200/50">9 min read</span>
            </div>
            <h1 className="mt-6 font-display text-3xl text-cream-100 md:text-4xl lg:text-5xl leading-tight">
              NYC Co-op Board Design Approval: Everything You Need to Know
            </h1>
            <p className="mt-6 font-accent text-lg italic text-cream-200/70">
              The co-op board approval process can make or break your renovation timeline.
              Here&apos;s how to navigate it with confidence.
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
              src="/images/journal/co-op-board.jpg"
              alt="NYC Co-op Board Design Approval"
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
                If you&apos;re renovating an apartment in a New York City co-op, the
                board approval process is not optional — and it&apos;s not something you
                want to learn about mid-project. Understanding the requirements,
                timelines, and common pitfalls before you begin can save you months
                of delays and thousands of dollars.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                Understanding the Alteration Agreement
              </h2>
              <p>
                The alteration agreement (sometimes called the &ldquo;alteration policy&rdquo; or
                &ldquo;work rules&rdquo;) is the legal document that governs what you can and
                cannot do to your apartment. Every co-op has one, and they vary
                significantly in their restrictions.
              </p>
              <p>
                Key elements to review carefully:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-cream-100">Permitted work hours:</strong> Usually 9am–5pm, Monday–Friday only. No weekends or holidays.</li>
                <li><strong className="text-cream-100">Noise restrictions:</strong> Some buildings prohibit work during certain months or holidays.</li>
                <li><strong className="text-cream-100">Demolition limitations:</strong> What walls can and cannot be removed. Load-bearing walls are obvious, but some buildings restrict even non-structural changes.</li>
                <li><strong className="text-cream-100">Plumbing and electrical:</strong> Many buildings require that all wet work (plumbing) be done by building-approved contractors.</li>
                <li><strong className="text-cream-100">Insurance requirements:</strong> Typically $1–5 million in liability coverage, naming the co-op as additional insured.</li>
              </ul>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                The Approval Timeline
              </h2>
              <p>
                From initial submission to approval, expect the process to take
                4–12 weeks. Here&apos;s a realistic timeline:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-cream-100">Weeks 1–2:</strong> Submit alteration agreement, architectural plans, and insurance certificates</li>
                <li><strong className="text-cream-100">Weeks 2–4:</strong> Board review and potential requests for revisions</li>
                <li><strong className="text-cream-100">Weeks 4–6:</strong> Revised plans resubmitted and approved</li>
                <li><strong className="text-cream-100">Weeks 6–8:</strong> Refundable security deposit paid, contractor approved</li>
                <li><strong className="text-cream-100">Weeks 8–12:</strong> Work can begin</li>
              </ul>
              <p>
                Some buildings are faster; some are slower. Buildings with active
                construction may have queues. Always factor this timeline into your
                project planning.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                Common Mistakes That Cause Delays
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-cream-100">Starting work before approval:</strong> This can result in fines, stop-work orders, and permanent board hostility.</li>
                <li><strong className="text-cream-100">Incomplete insurance documentation:</strong> The most common cause of delays. Get your insurance broker involved early.</li>
                <li><strong className="text-cream-100">Not using building-approved contractors:</strong> Many co-ops require specific contractors for plumbing, electrical, and structural work.</li>
                <li><strong className="text-cream-100">Underestimating the security deposit:</strong> Some buildings require $25,000–$50,000+ refundable deposits.</li>
                <li><strong className="text-cream-100">Ignoring neighbor notifications:</strong> Most buildings require written notice to adjacent shareholders before work begins.</li>
              </ul>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                Working with a Designer Who Knows Co-ops
              </h2>
              <p>
                The single most important decision you can make is hiring a designer
                who has experience with your specific building type. A designer who
                has navigated co-op boards understands the nuances of alteration
                agreements, knows which changes are likely to be approved, and can
                prepare plans that satisfy both your vision and the board&apos;s
                requirements.
              </p>
              <p>
                At Peter Sandel Interior Design, we&apos;ve worked in co-ops across
                Manhattan — from pre-war buildings on the Upper East Side to modern
                towers in Hudson Yards. We understand that every building is different,
                and we prepare accordingly.
              </p>

              <h2 className="font-display text-2xl text-cream-100 pt-4">
                Tips for a Smooth Approval Process
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request the alteration agreement before closing on the apartment</li>
                <li>Meet with the building manager early to understand unwritten rules</li>
                <li>Submit complete packages — missing documents are the #1 cause of delays</li>
                <li>Over-insure rather than under-insure</li>
                <li>Build a 20% time buffer into your project timeline</li>
                <li>Communicate proactively with neighbors before and during construction</li>
              </ul>

              <p className="pt-4">
                The co-op board process can feel daunting, but with the right team
                and preparation, it&apos;s entirely manageable. The key is starting
                early, being thorough, and working with professionals who have
                been through it before.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-graphite py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <p className="font-accent text-lg italic text-cream-200/80">
              Planning a co-op renovation?
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-gold">Schedule a Consultation</Link>
              <Link href="/journal/pre-war-apartment-renovation-nyc" className="text-xs uppercase tracking-widest text-cream-200 transition-colors hover:text-gold">
                Read: Pre-War Guide →
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}