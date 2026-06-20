"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="border-t border-cream-100/10 py-12 lg:py-16">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <span className="font-label text-[10px] text-gold">
          Studio Notes
        </span>
        <h3 className="mt-4 font-display text-2xl text-cream-100 md:text-3xl">
          Project stories, collecting notes, and material observations.
        </h3>
        <p className="mt-3 text-sm text-cream-200/60">
          Occasional dispatches from the studio. No funnels, no noise.
        </p>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6"
          >
            <p className="font-accent text-lg italic text-gold">
              Thank you. You&apos;re on the Studio Notes list.
            </p>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="w-full border border-cream-100/20 bg-charcoal px-6 py-4 text-sm text-cream-100 placeholder:text-cream-200/40 focus:border-gold focus:outline-none sm:max-w-sm"
            />
            <button type="submit" className="btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
