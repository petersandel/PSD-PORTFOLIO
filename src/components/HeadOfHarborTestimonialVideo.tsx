"use client";

import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";

const teaserVideo = "/videos/petersandeldesign_hoh_socialteaser01_v5 (720p).mp4";
const testimonialVideo = "/videos/hoh_socialminidoc_v3 (720p).mp4";

export default function HeadOfHarborTestimonialVideo() {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      videoRef.current?.play().catch(() => undefined);
    } else {
      videoRef.current?.pause();
    }
  }, [isOpen]);

  return (
    <section className="relative min-h-[78svh] overflow-hidden bg-charcoal text-cream-100 lg:min-h-[86svh]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/projects/Head of the Harbor /PS_HeadofHarbor_1501_Final.jpg"
      >
        <source src={teaserVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,37,34,0.82)_0%,rgba(31,37,34,0.58)_36%,rgba(31,37,34,0.18)_72%,rgba(31,37,34,0.44)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(31,37,34,0.42)_0%,rgba(31,37,34,0)_42%,rgba(31,37,34,0.28)_100%)]" />

      <div className="relative z-10 flex min-h-[78svh] items-center px-6 py-24 md:px-10 lg:min-h-[86svh] lg:px-14">
        <div className="max-w-[720px]">
          <p className="font-label text-[10px] text-gold">
            Head of the Harbor
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-5xl leading-none text-cream-100 md:text-7xl">
            Hear how the residence came into focus.
          </h2>
          <p className="overlay-subtitle mt-7 max-w-xl">
            A private client reflects on the process behind a Long Island home:
            the trust, restraint, and detailed decisions that shaped the final
            rooms.
          </p>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="mt-10 inline-flex items-center gap-5 border border-cream-100/28 bg-charcoal/48 px-5 py-4 text-left shadow-[0_22px_60px_rgba(0,0,0,0.34)] transition-colors hover:border-gold hover:bg-charcoal/70"
            data-cursor="pointer"
            data-cursor-text="Watch"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/64 bg-gold text-charcoal">
              <Play className="ml-0.5 h-5 w-5 fill-current" />
            </span>
            <span>
              <span className="block font-label text-[9px] text-gold">
                Watch Client Testimonial
              </span>
              <span className="mt-1 block text-sm leading-6 text-cream-200/68">
                Play the Head of the Harbor film
              </span>
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between border-t border-cream-100/16 bg-charcoal/60 px-6 py-5 md:px-10 lg:px-14">
        <p className="font-label text-[9px] text-cream-100/58">
          Client Perspective
        </p>
        <p className="font-label text-[9px] text-cream-100/58">
          Long Island, New York
        </p>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-charcoal/96 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Head of the Harbor client testimonial video"
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center border border-cream-100/24 text-cream-100 transition-colors hover:border-gold hover:text-gold"
            aria-label="Close testimonial video"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="w-full max-w-6xl">
            <video
              ref={videoRef}
              className="aspect-video w-full bg-black shadow-[0_30px_90px_rgba(0,0,0,0.5)]"
              controls
              playsInline
              poster="/images/projects/Head of the Harbor /PS_HeadofHarbor_1501_Final.jpg"
            >
              <source src={testimonialVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
