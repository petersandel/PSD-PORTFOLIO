"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/lib/config";
import { cn } from "@/lib/utils";
import BrandLogo from "./BrandLogo";

const solidHeaderRoutes = new Set(["/work", "/journal"]);
const headerNavigation = navigation.filter((item) => item.href !== "/contact");

type LenisLike = {
  scroll?: number;
  on?: (event: "scroll", callback: () => void) => () => void;
};

declare global {
  interface Window {
    __lenis?: LenisLike;
  }
}

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hasSolidHeader =
    solidHeaderRoutes.has(pathname) || isScrolled || isMobileMenuOpen;

  useEffect(() => {
    let unsubscribeLenis: (() => void) | undefined;

    const handleScroll = () => {
      const scrollY = window.__lenis?.scroll ?? window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    const bindLenis = () => {
      if (!unsubscribeLenis) {
        unsubscribeLenis = window.__lenis?.on?.("scroll", handleScroll);
      }
      handleScroll();
    };

    handleScroll();
    bindLenis();
    window.addEventListener("lenis-ready", bindLenis);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      unsubscribeLenis?.();
      window.removeEventListener("lenis-ready", bindLenis);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] as [number, number, number, number] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-500",
          hasSolidHeader
            ? "border-cream-100/10 bg-charcoal shadow-sm"
            : "border-cream-100/12 bg-charcoal/86 shadow-[0_10px_34px_rgba(0,0,0,0.22)]"
        )}
      >
        <nav className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group relative" data-cursor="pointer">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <BrandLogo
                  className="drop-shadow-[0_2px_10px_rgba(0,0,0,1)]"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden [text-shadow:_0_2px_10px_rgb(0_0_0_/_0.95),_0_1px_1px_rgb(0_0_0_/_1)] lg:flex lg:items-center lg:gap-12">
              {headerNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group relative text-xs uppercase tracking-[0.2em] text-cream-100 transition-colors duration-300 hover:text-gold"
                  data-cursor="pointer"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gold transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
              <Link
                href="/contact"
                className="group relative ml-4 overflow-hidden border border-cream-100/70 bg-charcoal/20 px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-cream-100 transition-all duration-500 hover:border-gold hover:text-charcoal"
                data-cursor="pointer"
                data-cursor-text="Begin"
              >
                {/* Fill sweep on hover */}
                <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
                <span className="relative z-10">Private Inquiry</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center lg:hidden"
              aria-label="Toggle menu"
              data-cursor="pointer"
            >
              <span
                className={cn(
                  "block h-px w-6 bg-cream-100 transition-all duration-300",
                  isMobileMenuOpen && "translate-y-[3px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "mt-1.5 block h-px w-6 bg-cream-100 transition-all duration-300",
                  isMobileMenuOpen && "-translate-y-[3px] -rotate-45"
                )}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-8"
            >
              {headerNavigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.05 + index * 0.06, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                >
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-3xl text-cream-100 transition-colors duration-300 hover:text-gold"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.05 + headerNavigation.length * 0.06, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-luxury-light"
                >
                  Private Inquiry
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
