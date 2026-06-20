"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type AnimationVariant =
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "clipPathReveal"
  | "scaleIn"
  | "staggerChildren";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

const variants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  clipPathReveal: {
    hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0 },
    visible: { clipPath: "inset(0% 0 0 0)", opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  staggerChildren: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

const transitionConfig = {
  luxury: {
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
  spring: {
    duration: 0.6,
    ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  },
};

export default function ScrollReveal({
  children,
  variant = "fadeInUp",
  delay = 0,
  duration,
  className = "",
  once = true,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const currentVariant = variants[variant];
  const transition = transitionConfig.luxury;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={currentVariant}
      transition={{
        duration: duration ?? transition.duration,
        delay,
        ease: transition.ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for child elements
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  threshold = 0.15,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger child item
export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Text reveal - animates text line by line
export function TextReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {text.split("\n").map((line, i) => (
        <motion.span
          key={i}
          className="block overflow-hidden"
          initial={{ y: "100%" }}
          animate={isInView ? { y: "0%" } : { y: "100%" }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.12,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
        >
          <span className="block">{line}</span>
        </motion.span>
      ))}
    </motion.div>
  );
}

// Gold line that draws from center outward
export function GoldLineReveal({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.65, 0, 0.35, 1] as [number, number, number, number],
      }}
      className={`h-px w-full origin-center bg-gold ${className}`}
    />
  );
}