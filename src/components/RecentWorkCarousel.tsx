"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import type { Project } from "@/lib/projects";

const AUTOPLAY_MS = 7200;

type RecentWorkCarouselProps = {
  projects: Project[];
};

export default function RecentWorkCarousel({
  projects,
}: RecentWorkCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [userPaused, setUserPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const elapsedRef = useRef(0);
  const isInView = useInView(sectionRef, { amount: 0.35 });
  const isPaused = userPaused || interactionPaused || !isInView;
  const activeProject = projects[activeIndex];
  const needsStrongerVeil = activeProject.slug === "head-of-the-harbor";
  const headerVeilClass = needsStrongerVeil
    ? "pointer-events-none absolute -inset-x-10 -inset-y-6 -z-10 bg-[radial-gradient(ellipse_at_18%_50%,rgba(31,35,33,0.38)_0%,rgba(31,35,33,0.22)_34%,rgba(31,35,33,0)_76%)]"
    : "pointer-events-none absolute -inset-x-10 -inset-y-6 -z-10 bg-[radial-gradient(ellipse_at_18%_50%,rgba(31,35,33,0.22)_0%,rgba(31,35,33,0.12)_34%,rgba(31,35,33,0)_72%)]";
  const headerKickerClass = needsStrongerVeil
    ? "font-label text-[10px] text-gold/95 [text-shadow:0_2px_18px_rgba(0,0,0,0.58)]"
    : "font-label text-[10px] text-gold/85 [text-shadow:0_2px_16px_rgba(0,0,0,0.45)]";
  const headerIndexClass = needsStrongerVeil
    ? "mt-2 max-w-md text-xs uppercase leading-relaxed tracking-[0.18em] text-cream-100/72 [text-shadow:0_2px_18px_rgba(0,0,0,0.58)]"
    : "mt-2 max-w-md text-xs uppercase leading-relaxed tracking-[0.18em] text-cream-200/62 [text-shadow:0_2px_16px_rgba(0,0,0,0.45)]";
  const copyVeilClass = needsStrongerVeil
    ? "pointer-events-none absolute -inset-x-7 -top-6 -bottom-7 -z-10 bg-[radial-gradient(ellipse_at_24%_62%,rgba(18,20,19,0.58)_0%,rgba(18,20,19,0.42)_34%,rgba(18,20,19,0.18)_60%,rgba(18,20,19,0.06)_78%,rgba(18,20,19,0)_100%),linear-gradient(90deg,rgba(18,20,19,0.32)_0%,rgba(18,20,19,0.18)_44%,rgba(18,20,19,0.06)_70%,rgba(18,20,19,0)_92%)]"
    : "pointer-events-none absolute -inset-x-10 -inset-y-8 -z-10 bg-[radial-gradient(ellipse_at_22%_58%,rgba(31,35,33,0.24)_0%,rgba(31,35,33,0.13)_42%,rgba(31,35,33,0.04)_64%,rgba(31,35,33,0)_84%)]";
  const copyKickerClass = needsStrongerVeil
    ? "font-label text-[10px] text-gold/95 [text-shadow:0_2px_20px_rgba(0,0,0,0.64)]"
    : "font-label text-[10px] text-gold [text-shadow:0_2px_18px_rgba(0,0,0,0.5)]";
  const titleClass = needsStrongerVeil
    ? "mt-4 max-w-3xl font-display text-4xl leading-[1.06] [letter-spacing:0] [text-shadow:0_2px_5px_rgba(0,0,0,0.62),0_12px_42px_rgba(0,0,0,0.56)] md:text-5xl lg:text-6xl"
    : "mt-4 max-w-3xl font-display text-4xl leading-[1.06] [letter-spacing:0] [text-shadow:0_4px_28px_rgba(0,0,0,0.46)] md:text-5xl lg:text-6xl";
  const projectLinkClass = needsStrongerVeil
    ? "group mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-cream-100/92 transition-colors [text-shadow:0_3px_20px_rgba(0,0,0,0.64)] hover:text-gold"
    : "group mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-cream-200/88 transition-colors [text-shadow:0_3px_18px_rgba(0,0,0,0.52)] hover:text-gold";

  const goToSlide = useCallback((nextIndex: number, nextDirection: number) => {
    elapsedRef.current = 0;
    setProgress(0);
    setDirection(nextDirection);
    setActiveIndex((nextIndex + projects.length) % projects.length);
  }, [projects.length]);

  useEffect(() => {
    if (isPaused || projects.length < 2) return;

    let frameId = 0;
    const startedAt = performance.now() - elapsedRef.current;

    const tick = (now: number) => {
      const elapsed = now - startedAt;
      elapsedRef.current = elapsed;
      const nextProgress = Math.min(elapsed / AUTOPLAY_MS, 1);
      setProgress(nextProgress);

      if (nextProgress >= 1) {
        goToSlide(activeIndex + 1, 1);
        return;
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [activeIndex, goToSlide, isPaused, projects.length]);

  if (!activeProject) return null;

  return (
    <section
      id="recent-work"
      aria-label="Recent work carousel"
      ref={sectionRef}
      className="relative min-h-[92svh] overflow-hidden bg-charcoal text-cream-100"
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onFocus={() => setInteractionPaused(true)}
      onBlur={() => setInteractionPaused(false)}
    >
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={activeProject.id}
          custom={direction}
          initial={{ opacity: 0, x: direction * 28 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -20 }}
          transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={activeProject.image}
            alt={activeProject.title}
            fill
            priority={activeIndex === 0}
            className="object-cover"
            sizes="100vw"
            style={{
              objectPosition:
                activeProject.coverPosition && activeProject.coverPosition !== "center"
                  ? activeProject.coverPosition
                  : "center bottom",
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex min-h-[92svh] flex-col justify-between px-6 py-8 lg:px-8 lg:py-10">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-6">
          <div className="relative isolate -mx-3 -my-2 px-3 py-2">
            <div aria-hidden="true" className={headerVeilClass} />
            <span className={headerKickerClass}>
              Recent Work
            </span>
            <p className={headerIndexClass}>
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous project"
              title="Previous project"
              onClick={() => goToSlide(activeIndex - 1, -1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-100/28 text-cream-100 transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label={userPaused ? "Play carousel" : "Pause carousel"}
              title={userPaused ? "Play carousel" : "Pause carousel"}
              onClick={() => setUserPaused((paused) => !paused)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-100/28 text-cream-100 transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              {userPaused ? (
                <Play className="h-3.5 w-3.5" />
              ) : (
                <Pause className="h-3.5 w-3.5" />
              )}
            </button>
            <button
              type="button"
              aria-label="Next project"
              title="Next project"
              onClick={() => goToSlide(activeIndex + 1, 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-100/28 text-cream-100 transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-[1600px] gap-8 lg:grid-cols-12 lg:items-end">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={`${activeProject.id}-copy`}
              custom={direction}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="recent-work-copy-veil relative isolate -mx-4 -my-4 max-w-[720px] px-4 py-4">
                <div aria-hidden="true" className={copyVeilClass} />
                <span className={copyKickerClass}>
                  {activeProject.editorialKicker}
                </span>
                <h3 className={titleClass}>
                  {activeProject.title}
                </h3>
                <p className="overlay-subtitle mt-5 max-w-xl">
                  {activeProject.lead}
                </p>
                <Link
                  href={`/work/${activeProject.slug}`}
                  className={projectLinkClass}
                  data-cursor="pointer"
                  data-cursor-text="View"
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="grid grid-cols-4 gap-3">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  aria-label={`Show ${project.title}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  title={project.title}
                  onClick={() =>
                    goToSlide(index, index > activeIndex ? 1 : -1)
                  }
                  className="group text-left"
                >
                  <span className="mb-3 block h-px overflow-hidden bg-cream-100/22">
                    <motion.span
                      className="block h-full bg-gold"
                      animate={{
                        width:
                          index === activeIndex
                            ? `${Math.round(progress * 100)}%`
                            : index < activeIndex
                              ? "100%"
                              : "0%",
                      }}
                      transition={{ duration: 0.2, ease: "linear" }}
                    />
                  </span>
                  <span className="font-accent text-2xl italic text-cream-100/42 transition-colors duration-300 group-hover:text-gold/80 group-aria-current:text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
