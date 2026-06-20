"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getProjectHeroImage, projects } from "@/lib/projects";

interface ProjectGalleryProps {
  showAll?: boolean;
  limit?: number;
}

export default function ProjectGallery({ showAll = false, limit = 4 }: ProjectGalleryProps) {
  const displayProjects = showAll ? projects : projects.slice(0, limit);
  const leadProject = displayProjects[0];
  const remainingProjects = displayProjects.slice(1);

  if (!leadProject) return null;

  return (
    <section className="bg-charcoal text-cream-100">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28"
      >
        <div className="mb-14 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="font-label text-[10px] text-gold/70">
              Recent Work
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              New rooms with old souls: residences shaped by art, materials,
              and the life already waiting for them.
            </h2>
          </div>
        </div>

        <Link
          href={`/work/${leadProject.slug}`}
          className="group grid gap-10 lg:grid-cols-12 lg:items-end"
          data-cursor="pointer"
          data-cursor-text="View"
        >
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden bg-graphite lg:aspect-[5/4]">
              <Image
                src={getProjectHeroImage(leadProject)}
                alt={leadProject.title}
                fill
                priority
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 58vw"
                style={{ objectPosition: leadProject.coverPosition ?? "center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <span className="font-label text-[10px] text-gold">
              {leadProject.editorialKicker}
            </span>
            <h3 className="mt-4 font-display text-4xl leading-none text-cream-100 transition-colors duration-500 group-hover:text-gold lg:text-6xl">
              {leadProject.title}
            </h3>
            <p className="mt-4 text-sm text-cream-200/60">
              {leadProject.location} / {leadProject.year}
            </p>
            <p className="mt-6 text-cream-200/75">
              {leadProject.lead}
            </p>
            <span className="mt-8 inline-flex text-xs uppercase tracking-[0.22em] text-cream-100 transition-colors duration-500 group-hover:text-gold">
              View Case Study
            </span>
          </div>
        </Link>
      </motion.div>

      <div className="border-t border-cream-100/10">
        {remainingProjects.map((project, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="border-b border-cream-100/10"
            >
              <Link
                href={`/work/${project.slug}`}
                className="group mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-12 lg:px-8 lg:py-24"
                data-cursor="pointer"
                data-cursor-text="View"
              >
                <div className={`${imageFirst ? "lg:order-1" : "lg:order-2 lg:col-start-7"} lg:col-span-6`}>
                  <div className="relative aspect-[16/11] overflow-hidden bg-graphite">
                    <Image
                      src={getProjectHeroImage(project)}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      style={{ objectPosition: project.coverPosition ?? "center" }}
                    />
                  </div>
                </div>

                <div className={`${imageFirst ? "lg:order-2 lg:col-start-8" : "lg:order-1"} flex flex-col justify-center lg:col-span-5`}>
                  <div className="flex items-center gap-4">
                    <span className="font-label text-[9px] text-gold/75">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                    <span className="h-px w-10 bg-gold/30" />
                    <span className="font-label text-[9px] text-cream-200/45">
                      {project.editorialKicker}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-3xl text-cream-100 transition-colors duration-500 group-hover:text-gold lg:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-cream-200/55">
                    {project.location} / {project.year}
                  </p>
                  <p className="mt-6 max-w-xl text-cream-200/70">
                    {project.lead}
                  </p>
                  <span className="mt-8 text-xs uppercase tracking-[0.22em] text-cream-200/70 transition-colors duration-500 group-hover:text-gold">
                    View Case Study
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {!showAll && (
        <div className="py-20 text-center lg:py-28">
          <Link
            href="/work"
            className="inline-flex border border-cream-100/20 px-8 py-4 text-xs uppercase tracking-[0.22em] text-cream-100 transition-all duration-500 hover:border-gold hover:text-gold"
            data-cursor="pointer"
          >
            Explore the Portfolio
          </Link>
        </div>
      )}
    </section>
  );
}
