"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  videoSrc?: string;
  imageSrc?: string;
  ctaText?: string;
  ctaHref?: string;
  overlay?: boolean;
}

export default function HeroSection({
  title = "Timeless Interiors",
  subtitle = "Where restraint becomes luxury",
  videoSrc,
  imageSrc = "/images/hero-placeholder.jpg",
  ctaText = "View Our Work",
  ctaHref = "/work",
  overlay = true,
}: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Split title into lines for staggered reveal
  const titleLines = title.split("\n");

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-charcoal"
    >
      {/* Background Media */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : imageSrc ? (
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-stone to-charcoal" />
        )}
      </motion.div>

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/60" />
      )}

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        {subtitle ? (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="overlay-subtitle"
          >
            {subtitle}
          </motion.p>
        ) : null}

        {/* Main Title - Line by line reveal */}
        <h1
          aria-label={titleLines.join(" ")}
          className="mt-4 overflow-hidden pb-[0.12em] font-display-xl text-5xl !leading-[1.08] text-white md:text-6xl lg:text-7xl"
        >
          {titleLines.map((line, i) => (
            <motion.span
              key={line}
              aria-hidden="true"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 0.8,
                delay: 1 + i * 0.15,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mt-12"
        >
          <Link
            href={ctaHref}
            className="group relative inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white transition-colors duration-300 hover:text-gold"
            data-cursor="pointer"
            data-cursor-text="Explore"
          >
            <span>{ctaText}</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gold"
            >
              →
            </motion.span>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}
