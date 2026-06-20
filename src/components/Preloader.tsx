"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRELOADER_STORAGE_KEY = "preloader-played";

function subscribeToPreloaderState(callback: () => void) {
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("storage", callback);
  };
}

function getPreloaderSnapshot() {
  try {
    return sessionStorage.getItem(PRELOADER_STORAGE_KEY) === "true";
  } catch {
    return true;
  }
}

function getPreloaderServerSnapshot() {
  return true;
}

export default function Preloader() {
  const preloaderAlreadyPlayed = useSyncExternalStore(
    subscribeToPreloaderState,
    getPreloaderSnapshot,
    getPreloaderServerSnapshot
  );
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (preloaderAlreadyPlayed || isDismissed) {
      return;
    }

    const timer = setTimeout(() => {
      try {
        sessionStorage.setItem(PRELOADER_STORAGE_KEY, "true");
      } finally {
        setIsDismissed(true);
      }
    }, 2200);

    return () => clearTimeout(timer);
  }, [isDismissed, preloaderAlreadyPlayed]);

  return (
    <AnimatePresence>
      {!preloaderAlreadyPlayed && !isDismissed && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal"
          aria-hidden="true"
        >
          {/* Logo reveal animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Decorative line above */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
              className="mb-6 h-px w-12 origin-left bg-gold"
            />

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-label text-2xl text-cream-100"
            >
              Peter Sandel
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="mt-2 font-accent text-sm italic text-cream-200/60"
            >
              Interior Design
            </motion.div>

            {/* Decorative line below */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.65, 0, 0.35, 1] }}
              className="mt-6 h-px w-12 origin-right bg-gold"
            />

            {/* Loading bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "linear" }}
              className="mt-8 h-px w-24 origin-left bg-cream-200/30"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
