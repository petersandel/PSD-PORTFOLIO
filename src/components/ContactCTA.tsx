"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import ScrollReveal, { GoldLineReveal } from "./ScrollReveal";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-24 pb-0 lg:py-32 lg:pb-0">
      {/* Studio Green to Dark Studio Green Ombre */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#464D4A] via-[#363d3a] to-[#2a302d]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        {/* Decorative Line */}
        <GoldLineReveal className="mx-auto mb-12 h-16 w-px" />

        <ScrollReveal variant="fadeInUp">
          <span className="font-accent text-lg italic text-gold">
            Select residential commissions
          </span>
          <h2 className="mt-6 font-display-lg text-4xl text-cream-100 md:text-5xl lg:text-6xl">
            Discuss a Residence
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-cream-200/80">
            Share the location, scope, and ambition of your project. The studio
            reviews inquiries privately and responds where there is a strong fit.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              href="/contact"
              className="btn-gold inline-flex items-center gap-3"
              data-cursor="pointer"
              data-cursor-text="Schedule"
            >
              <Calendar className="h-4 w-4" />
              Start a Private Inquiry
            </Link>
            <span className="text-xs uppercase tracking-widest text-cream-200/60">
              or
            </span>
            <Link
              href="/work"
              className="text-xs uppercase tracking-widest text-cream-200 transition-colors duration-300 hover:text-gold"
              data-cursor="pointer"
            >
              View Recent Work →
            </Link>
          </div>
        </ScrollReveal>

        {/* Bottom Decorative Line */}
        <GoldLineReveal className="mx-auto mt-12 h-16 w-px" delay={0.3} />
      </div>
    </section>
  );
}
