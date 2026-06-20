"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Expose lenis to window for other components to use
    (window as unknown as Record<string, unknown>).__lenis = lenis;
    window.dispatchEvent(new Event("lenis-ready"));

    return () => {
      lenis.destroy();
      (window as unknown as Record<string, unknown>).__lenis = undefined;
    };
  }, []);

  return <div className="relative min-h-screen">{children}</div>;
}
