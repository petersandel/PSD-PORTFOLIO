"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

export default function TestimonialsSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative overflow-hidden bg-charcoal py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <ScrollReveal variant="fadeInUp" className="lg:col-span-4">
            <span className="font-label text-[10px] text-gold">
              Studio Film
            </span>
            <h2 className="mt-5 font-display text-4xl leading-tight text-cream-100 md:text-5xl">
              A closer look at how a residence comes together.
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fadeInUp" delay={0.15} className="lg:col-span-7 lg:col-start-6">
            <p className="max-w-2xl text-cream-200/70">
              Moving image gives a better sense of scale, light, and sequence:
              the details that make a room feel resolved in person.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fadeInUp" delay={0.25} className="mt-14">
          <div className="relative aspect-video overflow-hidden bg-graphite">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              poster="/images/projects/Head of the Harbor /PS_HeadofHarbor_1501_Final.jpg"
              onEnded={() => setIsPlaying(false)}
              playsInline
            >
              <source src="/videos/hoh_socialminidoc_v3 (720p).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <button
              onClick={toggleVideo}
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
              )}
              aria-label={isPlaying ? "Pause studio film" : "Play studio film"}
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/90 text-charcoal transition-transform hover:scale-105">
                {isPlaying ? (
                  <Pause className="h-8 w-8" />
                ) : (
                  <Play className="ml-1 h-8 w-8" />
                )}
              </span>
            </button>
          </div>
          <p className="mt-4 text-sm text-cream-200/55">
            Head of the Harbor / Long Island, New York
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
