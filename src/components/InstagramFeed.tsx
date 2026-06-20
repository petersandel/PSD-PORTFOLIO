"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/lib/config";

// Instagram post data — static grid, no external scripts
const instagramPosts = [
  {
    url: "https://www.instagram.com/p/DE7QyAzMxJ4/",
    image: "/images/instagram/ig-1.jpg",
    alt: "Peter Sandel Design - Interior detail",
  },
  {
    url: "https://www.instagram.com/p/DD6yYdCNatg/",
    image: "/images/instagram/ig-2.jpg",
    alt: "Peter Sandel Design - Project reveal",
  },
  {
    url: "https://www.instagram.com/p/C-2Scyloo60/",
    image: "/images/instagram/ig-3.jpg",
    alt: "Peter Sandel Design - Material selection",
  },
  {
    url: "https://www.instagram.com/p/C9CrJ17N8Um/",
    image: "/images/instagram/ig-4.jpg",
    alt: "Peter Sandel Design - Design process",
  },
  {
    url: "https://www.instagram.com/p/C846xLihEtD/",
    image: "/images/instagram/ig-5.jpg",
    alt: "Peter Sandel Design - Finished space",
  },
  {
    url: "https://www.instagram.com/p/Czd49CAOGNF/",
    image: "/images/instagram/ig-6.jpg",
    alt: "Peter Sandel Design - Behind the scenes",
  },
];

export default function InstagramFeed() {
  return (
    <section className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold transition-colors hover:text-gold-light"
          >
            <Instagram className="h-4 w-4" />
            Follow Along
          </a>
          <h2 className="mt-4 font-display-lg text-4xl text-cream-100 md:text-5xl">
            @petersandeldesign
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body-lg text-cream-200/60">
            Behind the scenes, design inspiration, and glimpses into our latest 
            projects.
          </p>
        </motion.div>

        {/* Static Instagram Grid — no external scripts */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4"
        >
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden bg-graphite"
              aria-label={`View Instagram post ${index + 1}`}
            >
              {/* Placeholder gradient — replace with actual images */}
              <div className="absolute inset-0 bg-gradient-to-br from-graphite to-charcoal" />
              
              {/* Instagram icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-charcoal/40">
                <Instagram className="h-8 w-8 text-cream-100" />
              </div>

              {/* Subtle border on hover */}
              <div className="absolute inset-0 border border-gold/0 transition-all duration-500 group-hover:border-gold/30" />
            </motion.a>
          ))}
        </motion.div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-light inline-flex items-center gap-2"
          >
            <Instagram className="h-4 w-4" />
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}