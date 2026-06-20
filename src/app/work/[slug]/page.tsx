import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProjectHeroImage, projects } from "@/lib/projects";
import {
  type ProjectAbstract,
  projectAbstractsBySlug,
} from "@/lib/project-abstracts";
import { getPublicImageDimensions } from "@/lib/image-dimensions";
import { ProjectSchema, BreadcrumbSchema } from "@/components/JsonLd";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

type GalleryImage = {
  src: string;
  caption?: string;
  index: number;
  width: number;
  height: number;
  orientation: "landscape" | "portrait";
};

type GalleryRow =
  | { type: "landscape"; image: GalleryImage }
  | { type: "portraits"; images: GalleryImage[] };

const fallbackImageDimensions = {
  width: 1600,
  height: 1200,
};

function getProjectAbstract(project: (typeof projects)[number]): ProjectAbstract {
  return (
    projectAbstractsBySlug[project.slug] ?? {
      title: project.title,
      paragraphs: [project.description, project.designResponse],
      meta: [
        ["Location", project.location],
        ["Scope", project.category],
        ["Year", project.year],
      ].map(([label, value]) => ({ label, value })),
    }
  );
}

function getGalleryRows(images: string[], captions: string[]): GalleryRow[] {
  const rows: GalleryRow[] = [];
  const portraitRun: GalleryImage[] = [];

  const flushPortraits = () => {
    while (portraitRun.length > 0) {
      rows.push({
        type: "portraits",
        images: portraitRun.splice(0, 2),
      });
    }
  };

  images.forEach((src, index) => {
    const dimensions = getPublicImageDimensions(src) ?? fallbackImageDimensions;
    const image: GalleryImage = {
      src,
      caption: captions[index],
      index,
      width: dimensions.width,
      height: dimensions.height,
      orientation:
        dimensions.width >= dimensions.height ? "landscape" : "portrait",
    };

    if (image.orientation === "landscape") {
      flushPortraits();
      rows.push({ type: "landscape", image });
      return;
    }

    portraitRun.push(image);
  });

  flushPortraits();
  return rows;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.lead || project.description.slice(0, 160),
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const galleryRows = getGalleryRows(project.images, project.imageCaptions);
  const projectAbstract = getProjectAbstract(project);
  const heroImage = getProjectHeroImage(project);
  const heroImageDimensions =
    getPublicImageDimensions(heroImage) ?? fallbackImageDimensions;
  const projectFacts = [
    ["Location", project.location],
    ["Scope", project.category],
    ["Year", project.year],
  ] as const;
  return (
    <main className="bg-charcoal">
      <ProjectSchema
        title={project.title}
        description={project.description}
        location={project.location}
        images={project.images}
        url={`/work/${project.slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Work", href: "/work" },
          { name: project.title, href: `/work/${project.slug}` },
        ]}
      />

      <section className="bg-charcoal text-cream-100 md:relative md:min-h-screen md:overflow-hidden">
        <div className="pt-20 md:hidden">
          <Image
            src={heroImage}
            alt={project.title}
            width={heroImageDimensions.width}
            height={heroImageDimensions.height}
            priority
            className="h-auto w-full"
            sizes="100vw"
          />
          <div className="px-6 py-8">
            <div className="max-w-[36rem]">
              <Link
                href="/work"
                className="group inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.24em] text-cream-100/78 transition-colors hover:text-gold"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                All Work
              </Link>
              <span className="mt-7 block font-label text-[9px] text-gold">
                {project.editorialKicker}
              </span>
              <h1 className="mt-3 font-display-xl text-4xl leading-[0.98] text-cream-100">
                {project.title}
              </h1>
              <dl className="mt-5 grid gap-5 border-t border-cream-100/18 pt-5">
                {projectFacts.map(([label, value]) => (
                  <div key={label}>
                    <dt className="font-label text-[8px] text-cream-100/58">
                      {label}
                    </dt>
                    <dd className="mt-1 block font-display-xl text-xl leading-tight text-cream-100">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="hidden md:absolute md:inset-0 md:block">
          <Image
            src={heroImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            style={{ objectPosition: project.coverPosition ?? "center" }}
          />
          <div className="pointer-events-none absolute bottom-0 left-0 h-[30vh] w-[72vw] max-w-[48rem] bg-[radial-gradient(ellipse_at_bottom_left,rgba(17,21,19,0.84)_0%,rgba(17,21,19,0.58)_38%,rgba(17,21,19,0.16)_63%,rgba(17,21,19,0)_86%)]" />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 hidden md:block">
          <div className="px-6 pb-4 md:px-8 md:pb-5 lg:px-12 lg:pb-6">
            <div className="max-w-[42rem] text-cream-100 [text-shadow:_0_2px_12px_rgb(0_0_0_/_0.86),_0_1px_2px_rgb(0_0_0_/_0.95)]">
              <Link
                href="/work"
                className="group inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.24em] text-cream-100/92 transition-colors hover:text-gold"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                All Work
              </Link>
              <span className="mt-6 block font-label text-[9px] text-cream-100/88">
                {project.editorialKicker}
              </span>
              <h1 className="mt-3 font-display-xl text-3xl leading-[0.98] text-cream-100 md:text-4xl lg:text-5xl">
                {project.title}
              </h1>
              <dl className="mt-4 flex max-w-[42rem] flex-col gap-4 border-t border-cream-100/52 pt-4 sm:flex-row sm:items-start sm:gap-x-12 md:gap-x-16">
                {projectFacts.map(([label, value]) => (
                  <div key={label} className="sm:flex-none">
                    <dt className="font-label text-[8px] text-cream-100/88">
                      {label}
                    </dt>
                    <dd className="mt-1 block whitespace-nowrap font-display-xl text-lg leading-tight text-cream-100 md:text-xl">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-1 bg-charcoal lg:space-y-2">
        {galleryRows.map((row) => {
          if (row.type === "landscape") {
            const image = row.image;

            return (
              <figure key={image.src}>
                <div className="relative overflow-hidden bg-graphite">
                  <Image
                    src={image.src}
                    alt={`${project.title} - Image ${image.index + 1}`}
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full"
                    sizes="100vw"
                    priority={image.index === 0}
                  />
                </div>
              </figure>
            );
          }

          return (
            <div
              key={row.images.map((image) => image.src).join("|")}
              className={`grid grid-cols-1 gap-1 lg:gap-2 ${
                row.images.length > 1
                  ? "md:grid-cols-2"
                  : "md:grid-cols-[minmax(0,50vw)] md:justify-center"
              }`}
            >
              {row.images.map((image) => (
                <figure key={image.src}>
                  <div className="relative aspect-[3/4] overflow-hidden bg-graphite">
                    <Image
                      src={image.src}
                      alt={`${project.title} - Image ${image.index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </figure>
              ))}
            </div>
          );
        })}
      </section>

      <section className="bg-cream-100 px-6 py-20 text-charcoal md:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[88rem]">
          <div className="grid gap-12 border-y border-charcoal/14 py-12 md:py-16 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20 lg:py-20">
            <div className="max-w-md">
              <span className="font-label text-[10px] text-gold-dark">
                Project Abstract
              </span>
              <h2 className="mt-5 font-display text-5xl leading-[0.98] [letter-spacing:0] md:text-6xl lg:text-7xl">
                {projectAbstract.title}
              </h2>
              <div className="mt-8 h-px w-24 bg-charcoal/24" />
            </div>

            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.38fr)] lg:gap-14">
              <div className="space-y-7 text-[1.05rem] leading-8 text-charcoal/76 md:text-xl md:leading-9">
                {projectAbstract.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <dl className="border-t border-charcoal/14 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                {projectAbstract.meta.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-charcoal/12 py-6 first:pt-0 last:border-b-0 last:pb-0"
                  >
                    <dt className="font-label text-[8px] text-gold-dark/76">
                      {item.label}
                    </dt>
                    <dd className="mt-3 text-sm leading-6 text-charcoal/66">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-cream-100/10 bg-charcoal py-9 text-cream-100 lg:py-12">
        <div className="mx-auto max-w-[92rem] px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            <span className="font-label text-[10px] text-gold">
              Project Index
            </span>
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-cream-100/62 transition-colors hover:text-gold"
            >
              All Projects
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div
            className="project-index-scroll -mx-6 mt-5 overflow-x-auto px-6 pb-4 lg:-mx-8 lg:px-8"
            aria-label="Side to side project index"
          >
            <div className="flex snap-x gap-5 pb-3">
              {projects.map((projectItem) => {
                const isCurrentProject = projectItem.slug === project.slug;
                const useDirectIndexImage =
                  projectItem.slug === "ps-apartment" ||
                  projectItem.slug === "design-studio";

                return (
                  <Link
                    key={projectItem.slug}
                    href={`/work/${projectItem.slug}`}
                    className="group w-[22rem] flex-none snap-start md:w-[28rem] lg:w-[31rem]"
                    aria-current={isCurrentProject ? "page" : undefined}
                  >
                    <div
                      className={`relative aspect-[16/10] overflow-hidden border bg-graphite transition-colors duration-500 ${
                        isCurrentProject
                          ? "border-gold/80"
                          : "border-cream-100/14 group-hover:border-cream-100/46"
                      }`}
                    >
                      <Image
                        src={getProjectHeroImage(projectItem)}
                        alt=""
                        fill
                        loading={useDirectIndexImage ? "eager" : "lazy"}
                        unoptimized={useDirectIndexImage}
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="(min-width: 1024px) 496px, (min-width: 768px) 448px, 352px"
                        style={{
                          objectPosition: projectItem.coverPosition ?? "center",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/8 to-transparent opacity-[0.72] transition-opacity group-hover:opacity-[0.5]" />
                      {isCurrentProject && (
                        <span className="absolute left-4 top-4 font-label text-[8px] text-gold">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="mt-3 flex items-end justify-between gap-4">
                      <div>
                        <span className="font-label text-[8px] text-cream-100/42">
                          {projectItem.location}
                        </span>
                        <span className="mt-1 block font-display text-2xl leading-tight text-cream-100 transition-colors group-hover:text-gold md:text-3xl">
                          {projectItem.title}
                        </span>
                      </div>
                      {!isCurrentProject && (
                        <ArrowRight className="mb-2 h-4 w-4 flex-none text-cream-100/38 transition-transform group-hover:translate-x-1 group-hover:text-gold" />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div
            className="mt-2 flex items-center gap-3 text-cream-100/34"
            aria-hidden="true"
          >
            <ArrowLeft className="h-3 w-3 flex-none" />
            <span className="relative h-px flex-1 overflow-hidden bg-cream-100/14">
              <span className="absolute inset-y-0 left-0 w-1/3 bg-gold/70" />
            </span>
            <ArrowRight className="h-3 w-3 flex-none" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-charcoal text-cream-100">
        <Image
          src={heroImage}
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          style={{ objectPosition: project.coverPosition ?? "center" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(29,34,32,0.97)_0%,rgba(29,34,32,0.88)_48%,rgba(29,34,32,0.58)_100%),linear-gradient(to_top,rgba(29,34,32,0.76),rgba(29,34,32,0.18))]" />
        <div className="relative mx-auto grid min-h-[30rem] max-w-[88rem] items-center gap-10 px-6 py-16 md:py-18 lg:grid-cols-[minmax(0,1.04fr)_minmax(22rem,0.82fr)] lg:px-8 lg:py-20">
          <div>
            <span className="font-label text-[10px] text-gold">
              Private Commissions
            </span>
            <h2 className="mt-5 max-w-4xl font-display text-5xl leading-none md:text-6xl lg:text-7xl">
              Begin a private interior design inquiry.
            </h2>
          </div>

          <div className="border-t border-cream-100/24 pt-7 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
            <p className="overlay-subtitle max-w-xl">
              Peter Sandel Design considers select full-service residential
              interiors in New York, the Hamptons, and destination markets.
            </p>
            <p className="overlay-subtitle mt-5 max-w-xl">
              Share the residence, scope, and timing so the studio can
              determine fit and respond with next steps.
            </p>
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-luxury">
                Submit an Interior Design Inquiry
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-cream-100/66 transition-colors hover:text-gold"
              >
                View Services
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
