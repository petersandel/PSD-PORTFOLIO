"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import ScrollReveal from "./ScrollReveal";

export default function ShopCTA() {
  return (
    <section className="relative overflow-hidden bg-[#E8E4DF] py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <ScrollReveal variant="fadeInLeft" className="flex flex-col justify-center">
            {/* P&P Logo */}
            <div className="mb-8">
              <Image
                src="/images/logo/pp-logo.png"
                alt="Provenance & Patina"
                width={200}
                height={180}
                className="object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold-dark">
              Curated Collection by Peter Sandel
            </span>
            <p className="mt-6 text-charcoal/80">
              Provenance &amp; Patina brings framed art, wallcoverings, custom
              furnishings, and vintage pieces into rooms that feel personally
              authored over time.
            </p>
            <p className="mt-4 text-charcoal/80">
              Each work is considered through the eye of an interior designer,
              but its story begins again with the person who chooses to live with
              it. Provenance is shaped in that exchange: through the artwork we
              respond to, the furniture we commission, and the pieces that become
              part of daily life.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={siteConfig.links.shop}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-charcoal px-8 py-4 text-xs uppercase tracking-[0.2em] text-charcoal transition-all duration-500 hover:bg-charcoal hover:text-cream-100"
                data-cursor="pointer"
                data-cursor-text="Shop"
              >
                Visit the Shop
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-sm text-charcoal/60">
                provenanceandpatina.com
              </span>
            </div>
          </ScrollReveal>

          {/* Image Grid - Provenance & Patina Products */}
          <ScrollReveal variant="fadeInRight" delay={0.2} className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="image-luxury relative aspect-square overflow-hidden bg-stone/20">
                <Image
                  src="/images/shop/shop-1.webp"
                  alt="Toile wallpaper - Provenance & Patina"
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="image-luxury relative aspect-[4/5] overflow-hidden bg-stone/20">
                <Image
                  src="/images/shop/shop-2.webp"
                  alt="Vintage mohair swivel chair - Provenance & Patina"
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <div className="image-luxury relative aspect-[4/5] overflow-hidden bg-stone/20">
                <Image
                  src="/images/shop/shop-3.webp"
                  alt="Framed photography - Provenance & Patina"
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="image-luxury relative aspect-square overflow-hidden bg-stone/20">
                <Image
                  src="/images/shop/shop-4.webp"
                  alt="Ceramic vase - Provenance & Patina"
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
