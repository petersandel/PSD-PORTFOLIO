"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="relative bg-charcoal overflow-hidden"
    >
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal/50 pointer-events-none" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 lg:py-32 xl:py-40">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Image Column - 5 cols */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="lg:col-span-5 relative"
          >
            {/* Portrait with elegant framing */}
            <div className="relative aspect-[3/4] overflow-hidden">
              {/* Gold accent lines */}
              <div className="absolute -left-3 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent z-10 hidden lg:block" />
              <div className="absolute -top-3 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent z-10 hidden lg:block" />
              
              <Image
                src="/images/portraits/SandelPortraits_Final/SandelDesign-444.jpg"
                alt="Peter Sandel - Interior Designer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              
              {/* Subtle vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-charcoal/10 pointer-events-none" />
            </div>

            {/* Location tag beneath portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="mt-6 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-gold/50" />
              <span className="font-label text-[10px] text-cream-200/50">
                New York &amp; The Hamptons
              </span>
            </motion.div>
          </motion.div>

          {/* Content Column - 6 cols, offset for breathing room */}
          <div className="lg:col-span-6 lg:col-start-7">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-gold/60" />
              <span className="font-label text-[10px] text-gold/70">
                The Designer
              </span>
            </motion.div>

            {/* Name - Editorial scale */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <h2 className="font-display-xl text-5xl text-cream-100 lg:text-7xl xl:text-8xl">
                Peter
              </h2>
              <h2 className="font-display-xl text-5xl text-cream-100 lg:text-7xl xl:text-8xl">
                Sandel
              </h2>
            </motion.div>

            {/* Gold divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.65, 0, 0.35, 1] as [number, number, number, number] }}
              className="my-8 h-px w-20 origin-left bg-gradient-to-r from-gold to-gold/0"
            />

            {/* Philosophy quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="mb-8"
            >
              <p className="font-accent text-2xl text-cream-100/90 leading-relaxed lg:text-3xl">
                &ldquo;Design should feel inevitable.&rdquo;
              </p>
            </motion.blockquote>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="font-body-lg max-w-lg text-sm text-cream-200/60 lg:text-[15px]"
            >
              Peter Sandel Design creates refined interiors with a collected
              point of view: rooms shaped by art, vintage tension, custom
              detail, and the rituals of daily life.
            </motion.p>

            {/* Specialties tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {["Residences", "Estates", "Art Curation", "Vintage Sourcing"].map((tag) => (
                <span
                  key={tag}
                  className="border border-cream-100/10 px-4 py-1.5 font-label text-[9px] text-cream-200/50"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="mt-12"
            >
              <Link
                href="/studio"
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-cream-100/80 transition-all duration-500 hover:text-gold"
                data-cursor="pointer"
                data-cursor-text="About"
              >
                <span className="relative">
                  Discover the Studio
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
