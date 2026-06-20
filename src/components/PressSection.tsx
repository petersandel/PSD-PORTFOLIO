"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const pressLogos = [
  { name: "Architectural Digest", src: "/images/press/ad.png", width: 120, height: 40 },
  { name: "Forbes", src: "/images/press/forbes.png", width: 120, height: 40 },
  { name: "Elle Decor", src: "/images/press/elle-decor.jpg", width: 120, height: 40 },
  { name: "AD España", src: "/images/press/ad-espana.jpeg", width: 80, height: 40 },
  { name: "Luxe", src: "/images/press/luxe.png", width: 80, height: 40 },
  { name: "Sotheby's", src: "/images/press/sothebys.png", width: 120, height: 40 },
  { name: "Jetsetter", src: "/images/press/jetsetter.jpg", width: 120, height: 40 },
  { name: "The Daily", src: "/images/press/the-daily.jpg", width: 100, height: 40 },
  { name: "D Magazine", src: "/images/press/d-magazine.png", width: 100, height: 40 },
  { name: "AskMen", src: "/images/press/askmen.png", width: 100, height: 40 },
  { name: "Expat Living", src: "/images/press/expat-living.png", width: 100, height: 40 },
  { name: "Elle Australia", src: "/images/press/elle-australia.png", width: 100, height: 40 },
];

export default function PressSection() {
  return (
    <section className="bg-charcoal py-12 text-cream-100 lg:py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal
          variant="fadeInUp"
          className="mb-10 flex items-center justify-center gap-6"
        >
          <div className="h-px flex-1 bg-cream-100/10" />
          <span className="text-[9px] uppercase tracking-[0.5em] text-cream-200/50">
            As Seen In
          </span>
          <div className="h-px flex-1 bg-cream-100/10" />
        </ScrollReveal>

        <div className="relative overflow-hidden" role="marquee" aria-live="off">
          <div className="flex animate-marquee items-center gap-x-14 hover:[animation-play-state:paused] lg:gap-x-16">
            {[...pressLogos, ...pressLogos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 opacity-30 transition-opacity duration-500 hover:opacity-60"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-8 w-auto lg:h-9"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/press"
            className="group inline-flex items-center gap-3 font-label text-[9px] text-cream-200/64 transition-colors hover:text-gold"
            data-cursor="pointer"
            data-cursor-text="Press"
          >
            View Press
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
