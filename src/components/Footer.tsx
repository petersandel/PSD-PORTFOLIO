"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, navigation } from "@/lib/config";
import BrandLogo from "./BrandLogo";
import NewsletterSignup from "./NewsletterSignup";

const footerNavigation = navigation.slice(0, 4);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Dark Studio Green to Black Ombre - seamless from CTA */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a302d] via-[#1a1d1c] to-[#0a0a0a]" />
      
      {/* Content */}
      <div className="relative text-cream-100">
        {/* Main Footer - Award-winning Layout */}
        <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8 lg:pt-32">

          {/* Divider */}
          <div className="h-px w-full bg-cream-100/10" />

          {/* Middle Section - Navigation Grid */}
          <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-20">
            
            {/* Column 1 - Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="flex items-center"
            >
              <Link href="/" className="group inline-block">
                <BrandLogo />
              </Link>
            </motion.div>

            {/* Column 2 - Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-cream-200/50">Navigate</span>
              <ul className="mt-6 space-y-3">
                {footerNavigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-sm text-cream-100 transition-colors hover:text-gold"
                    >
                      {item.name}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3 - Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-cream-200/50">Connect</span>
              <ul className="mt-6 space-y-3">
                <li>
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-cream-100 transition-colors hover:text-gold"
                  >
                    Instagram
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.links.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-cream-100 transition-colors hover:text-gold"
                  >
                    Pinterest
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.links.shop}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-cream-100 transition-colors hover:text-gold"
                  >
                    Shop
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Column 4 - Studio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-cream-200/50">Studio</span>
              <div className="mt-6 space-y-3 text-sm text-cream-100">
                <p>{siteConfig.contact.address}</p>
                <p className="text-cream-200/60">Select destination work</p>
              </div>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-6 block text-sm text-cream-200/60 transition-colors hover:text-cream-100"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="mt-3 block text-sm text-cream-200/60 transition-colors hover:text-cream-100"
              >
                {siteConfig.contact.phone}
              </a>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <NewsletterSignup />

          {/* Divider */}
          <div className="h-px w-full bg-cream-100/10" />

          {/* Bottom Bar - Minimal */}
          <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
            <p className="text-xs text-cream-200/50">
              © {currentYear} Peter Sandel Design
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="/privacy"
                className="text-xs text-cream-200/50 transition-colors hover:text-cream-100"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-cream-200/50 transition-colors hover:text-cream-100"
              >
                Terms
              </Link>
              <span className="text-xs text-cream-200/50">
                Private residential interiors
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
