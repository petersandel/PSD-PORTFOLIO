"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const POINTER_QUERY = "(hover: hover) and (pointer: fine)";

function subscribeToPointerCapability(callback: () => void) {
  const mediaQuery = window.matchMedia(POINTER_QUERY);
  mediaQuery.addEventListener("change", callback);

  return () => {
    mediaQuery.removeEventListener("change", callback);
  };
}

function getPointerSnapshot() {
  return window.matchMedia(POINTER_QUERY).matches;
}

function getPointerServerSnapshot() {
  return false;
}

export default function CustomCursor() {
  const isVisible = useSyncExternalStore(
    subscribeToPointerCapability,
    getPointerSnapshot,
    getPointerServerSnapshot
  );
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (!isVisible) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]'
      );
      if (interactiveEl) {
        setIsHovering(true);
        const text = interactiveEl.getAttribute("data-cursor-text");
        setHoverText(text || "");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]'
      );
      if (interactiveEl) {
        setIsHovering(false);
        setHoverText("");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div aria-hidden="true">
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? (hoverText ? 120 : 60) : isClicking ? 30 : 40,
            height: isHovering ? (hoverText ? 120 : 60) : isClicking ? 30 : 40,
            borderWidth: isHovering ? 1 : 1,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center rounded-full border-gold/90 shadow-[0_0_18px_rgba(0,0,0,0.26)]"
          style={{ borderStyle: "solid" }}
        >
          {hoverText && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="whitespace-nowrap text-[9px] uppercase tracking-[0.15em] text-cream-100 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]"
            >
              {hoverText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isClicking ? 4 : isHovering ? 0 : 6,
            height: isClicking ? 4 : isHovering ? 0 : 6,
            opacity: isHovering && !hoverText ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="rounded-full bg-gold"
        />
      </motion.div>
    </div>
  );
}
