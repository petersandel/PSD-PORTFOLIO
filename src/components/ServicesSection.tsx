"use client";

import { services } from "@/lib/config";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

export default function ServicesSection() {
  return (
    <section className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal variant="fadeInUp" className="mx-auto max-w-3xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            Our Services
          </span>
          <h2 className="mt-4 font-display-lg text-4xl text-cream-100 md:text-5xl">
            Tailored Design Excellence
          </h2>
          <p className="mt-6 text-cream-200/80">
            Every project begins with understanding your vision, lifestyle, and 
            aspirations. We offer comprehensive design services to bring your 
            dream spaces to life.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-3" staggerDelay={0.15}>
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <div className="group relative h-full">
                <div className="h-full border border-cream-100/10 bg-graphite p-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-gold/30 hover:shadow-[0_8px_30px_-8px_rgba(184,175,166,0.15)] lg:p-10">
                  {/* Number */}
                  <span className="font-display text-5xl text-stone/30 transition-colors duration-500 group-hover:text-gold/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Title */}
                  <h3 className="mt-6 font-display text-2xl text-cream-100 transition-colors duration-500 group-hover:text-gold">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-cream-200/70">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-6 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-cream-200/60"
                      >
                        <span className="h-px w-4 bg-gold transition-all duration-500 group-hover:w-6" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Accent - fills from left */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal variant="fadeInUp" delay={0.3} className="mt-16 text-center">
          <a href="/services" className="btn-luxury-light" data-cursor="pointer" data-cursor-text="Services">
            Explore All Services
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
