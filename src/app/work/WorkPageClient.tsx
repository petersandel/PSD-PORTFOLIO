"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getProjectHeroImage, projects } from "@/lib/projects";
import ScrollReveal from "@/components/ScrollReveal";

export default function WorkPageClient() {
  return (
    <>
      <section className="border-b border-cream-100/8 pt-24 pb-5 lg:pt-28 lg:pb-6">
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
          <ScrollReveal
            variant="fadeInUp"
            className="mx-auto max-w-3xl"
          >
            <h1 className="font-display-xl text-5xl leading-none text-cream-100 md:text-6xl lg:text-7xl">
              Portfolio
            </h1>
            <div className="mx-auto mt-4 h-px w-20 bg-cream-100/22" />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal pb-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="space-y-0"
        >
          {projects.map((project, index) => {
            const heroImage = getProjectHeroImage(project);

            return (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className="group block bg-charcoal"
                data-cursor="pointer"
                data-cursor-text="View"
              >
                <div className="relative h-[72svh] min-h-[520px] w-full overflow-hidden bg-graphite lg:h-[76svh]">
                  <Image
                    src={heroImage}
                    alt={project.title}
                    fill
                    className="object-contain transition-opacity duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-90"
                    sizes="100vw"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-transparent to-transparent transition-opacity duration-700 group-hover:from-black/44" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-cream-100/80">
                      View Project
                    </span>
                  </div>
                </div>

                <div className="border-y border-cream-100/8 bg-charcoal px-6 py-4 text-cream-100 md:px-10 md:py-5 lg:px-14">
                  <div className="mx-auto flex max-w-[88rem] flex-col gap-2 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-4xl">
                      <h2 className="font-display text-3xl leading-[0.98] [letter-spacing:0] transition-colors duration-500 group-hover:text-gold md:text-4xl lg:text-5xl">
                        {project.title}
                      </h2>
                      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-cream-100/58 md:text-sm">
                        <span className="transition-colors duration-500 group-hover:text-cream-100/82">
                          {project.location}
                        </span>
                        <span className="text-cream-100/26">&bull;</span>
                        <span className="text-cream-100/46 transition-colors duration-500 group-hover:text-cream-100/68">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <span className="font-label text-[8px] text-cream-100/34 transition-colors duration-500 group-hover:text-gold md:mb-2">
                      View Project
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </motion.div>
      </section>
    </>
  );
}
