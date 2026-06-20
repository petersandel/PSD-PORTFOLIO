import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { pressItems, type PressItem } from "@/lib/press";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Explore press features, interviews, and publication mentions for Peter Sandel Design.",
};

type PressVisual = {
  image: string;
  imageAlt: string;
  project?: string;
  projectHref?: string;
  position?: string;
};

const defaultVisual: PressVisual = {
  image: "/images/projects/PSD Studio 22/SandelDesign-624.jpg",
  imageAlt: "Peter Sandel Design studio with pinboards, material samples, and textile archives",
  project: "Design Studio",
  projectHref: "/work/design-studio",
  position: "center",
};

const heroImage =
  "/images/projects/PS Apartment for AD/20_02_17_AD_Peter_Sandel_0222_v2.jpeg";

const publicationLogos = [
  { name: "Architectural Digest", src: "/images/press/ad.png", width: 132 },
  { name: "Forbes", src: "/images/press/forbes.png", width: 132 },
  { name: "Elle Decor", src: "/images/press/elle-decor.jpg", width: 132 },
  { name: "Sotheby's", src: "/images/press/sothebys.png", width: 132 },
  { name: "The Daily", src: "/images/press/the-daily.jpg", width: 116 },
  { name: "Luxe", src: "/images/press/luxe.png", width: 92 },
];

function getPressVisual(item: PressItem): PressVisual {
  if (item.publication === "The Daily") {
    return {
      image: "/images/press/daily-front-row-peter-sandel.jpg",
      imageAlt:
        "Peter Sandel photographed for The Daily Front Row feature in his studio",
      project: "The Daily Front Row",
      position: "center",
    };
  }

  if (
    item.title.includes("New York City Condo") ||
    item.publication === "AD Espana" ||
    item.publication === "Jersey's Best"
  ) {
    return {
      image: "/images/projects/Greenwich West/110CarltonSt_Oct21-164.jpg",
      imageAlt: "Greenwich West living room with skyline windows, vintage seating, and contemporary art",
      project: "Greenwich West",
      projectHref: "/work/greenwich-west",
      position: "center",
    };
  }

  if (
    item.title.includes("Studio Apartment") ||
    item.title.includes("Clever Home Tours") ||
    item.publication === "AD Middle East" ||
    item.publication === "Forbes" ||
    item.publication === "AskMen" ||
    item.publication === "Elle Decor"
  ) {
    return {
      image: "/images/projects/PS Apartment for AD/20_02_17_AD_Peter_Sandel_0222_v2.jpeg",
      imageAlt: "Peter Sandel apartment living room featured by Architectural Digest",
      project: "PS Apartment",
      projectHref: "/work/ps-apartment",
      position: "center",
    };
  }

  if (
    item.publication === "Mann About Town" ||
    item.publication === "Best Interior Designers" ||
    item.publication === "The Dallas Morning News"
  ) {
    return {
      image: "/Peter Sandel Portraits/SandelDesign-484.jpg",
      imageAlt: "Portrait of Peter Sandel in a layered residential interior",
      project: "Studio Profile",
      projectHref: "/studio",
      position: "center 36%",
    };
  }

  if (
    item.publication === "Expat Living" ||
    item.publication === "Elle Australia"
  ) {
    return {
      image: "/images/projects/St Regis Singapore/2100 Singapore Split Shot.jpeg",
      imageAlt: "St. Regis Singapore residence with a glass-walled study and city views",
      project: "St. Regis Singapore",
      projectHref: "/work/st-regis-singapore",
      position: "center",
    };
  }

  if (item.publication === "Luxe") {
    return {
      image: "/images/projects/Michigan Avenue/191018_PeterSandel_01.jpg",
      imageAlt: "Michigan Avenue residence with tailored furnishings and city light",
      project: "Michigan Avenue",
      projectHref: "/work/michigan-avenue",
      position: "center",
    };
  }

  return defaultVisual;
}

const featuredPressItems = [
  pressItems.find((item) => item.title.includes("New York City Condo")),
  pressItems.find((item) => item.title.includes("Studio Apartment")),
  pressItems.find((item) => item.publication === "The Daily"),
  pressItems.find((item) => item.publication === "Expat Living"),
].filter((item): item is PressItem => Boolean(item));

function PressLogo({
  item,
  className = "",
}: {
  item: PressItem;
  className?: string;
}) {
  if (item.logo) {
    return (
      <Image
        src={item.logo}
        alt={item.publication}
        width={180}
        height={72}
        className={`max-h-10 w-auto object-contain grayscale ${className}`}
      />
    );
  }

  return (
    <span className={`font-label text-[9px] text-gold ${className}`}>
      {item.publication}
    </span>
  );
}

function FeaturedStory({
  item,
  index,
}: {
  item: PressItem;
  index: number;
}) {
  const visual = getPressVisual(item);
  const isPrimary = index === 0;

  return (
    <article
      className={
        isPrimary
          ? "grid border-y border-charcoal/14 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:py-10"
          : "border-t border-charcoal/14 py-6"
      }
    >
      <div
        className={
          isPrimary
            ? "relative min-h-[42svh] overflow-hidden bg-charcoal lg:min-h-[46svh]"
            : "relative aspect-[5/3] overflow-hidden bg-charcoal"
        }
      >
        <Image
          src={visual.image}
          alt={visual.imageAlt}
          fill
          priority={isPrimary}
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
          sizes={
            isPrimary
              ? "(max-width: 1024px) 100vw, 54vw"
              : "(max-width: 1024px) 100vw, 33vw"
          }
          style={{ objectPosition: visual.position ?? "center" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,20,19,0)_42%,rgba(18,20,19,0.42)_100%)]" />
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 border-t border-cream-100/22 pt-4 text-cream-100">
          <span className="font-label text-[8px] text-cream-100/74">
            {visual.project}
          </span>
          {visual.projectHref ? (
            <Link
              href={visual.projectHref}
              className="font-label text-[8px] text-cream-100/64 transition-colors hover:text-gold"
            >
              View Project
            </Link>
          ) : null}
        </div>
      </div>

      <div
        className={
          isPrimary
            ? "flex flex-col justify-center pt-6 lg:pt-0"
            : "pt-5"
        }
      >
        <div className="flex items-center justify-between gap-6">
          <PressLogo item={item} className="opacity-70" />
          <span className="font-label text-[8px] text-charcoal/45">
            {item.date}
          </span>
        </div>
        <h2
          className={
            isPrimary
              ? "mt-6 font-display text-4xl leading-[1.02] text-charcoal [letter-spacing:0] md:text-5xl"
              : "mt-5 font-display text-3xl leading-[1.04] text-charcoal [letter-spacing:0] md:text-4xl"
          }
        >
          {item.title}
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-6 text-charcoal/66">
          {item.publication} placed the studio&apos;s work in a broader
          conversation around proportion, restraint, and interiors that feel
          lived in rather than merely styled.
        </p>
        {item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-3 font-label text-[9px] text-charcoal transition-colors hover:text-gold-dark"
          >
            Read Feature
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ) : null}
      </div>
    </article>
  );
}

function ArchiveRow({ item, index }: { item: PressItem; index: number }) {
  const inner = (
    <>
      <div className="flex min-h-[4.5rem] items-start">
        {item.logo ? (
          <PressLogo item={item} className="opacity-60" />
        ) : (
          <span className="font-display text-3xl leading-none text-cream-100/22">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="font-label text-[8px] text-gold/84">
            {item.publication}
          </span>
          <span className="font-label text-[8px] text-cream-200/40">
            {item.date}
          </span>
        </div>
        <h3 className="mt-3 max-w-3xl font-display text-xl leading-[1.14] text-cream-100 [letter-spacing:0] md:text-2xl">
          {item.title}
        </h3>
      </div>
      <div className="flex items-center justify-between gap-4 md:justify-end">
        <span className="font-label text-[8px] text-cream-200/34">
          {item.href ? "Article" : "Print"}
        </span>
        {item.href ? (
          <ArrowUpRight className="h-4 w-4 shrink-0 text-cream-200/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold" />
        ) : null}
      </div>
    </>
  );

  if (!item.href) {
    return (
      <article className="grid gap-5 border-b border-cream-100/12 py-5 md:grid-cols-[180px_1fr_96px] md:gap-6">
        {inner}
      </article>
    );
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid gap-5 border-b border-cream-100/12 py-5 transition-colors duration-500 hover:border-gold/45 md:grid-cols-[180px_1fr_96px] md:gap-6"
    >
      {inner}
    </a>
  );
}

export default function PressPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Press", href: "/press" },
        ]}
      />

      <section className="relative isolate min-h-[88svh] overflow-hidden bg-charcoal text-cream-100">
        <Image
          src={heroImage}
          alt="Peter Sandel apartment living room photographed for Architectural Digest"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="relative z-10 flex min-h-[88svh] flex-col justify-end px-6 pb-12 pt-32 md:px-10 lg:px-14 lg:pb-16">
          <div className="relative max-w-3xl">
            <div className="pointer-events-none absolute -inset-x-12 -inset-y-10 bg-[radial-gradient(ellipse_at_20%_58%,rgba(18,20,19,0.42)_0%,rgba(18,20,19,0.28)_34%,rgba(18,20,19,0.10)_58%,rgba(18,20,19,0)_78%)]" />
            <div className="relative">
              <p className="font-label text-[10px] text-gold/90 [text-shadow:0_2px_16px_rgba(0,0,0,0.58)]">
                Press / Peter Sandel Design
              </p>
              <h1 className="mt-5 max-w-[720px] font-display-xl text-4xl leading-[0.98] text-cream-100 [letter-spacing:0] [text-shadow:0_4px_28px_rgba(0,0,0,0.52)] md:text-5xl lg:text-6xl xl:text-[4.65rem]">
                Published rooms, recognized point of view.
              </h1>
              <p className="overlay-subtitle mt-7 max-w-lg">
                A selection of features, interviews, and design commentary from
                Architectural Digest, Forbes, Elle Decor, Sotheby&apos;s, and
                international design publications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 px-6 py-8 text-charcoal md:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-label text-[9px] text-gold-dark">
              As Seen In
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-charcoal/62">
              Selected publications that have featured the studio&apos;s rooms,
              ideas, and approach to refined residential interiors.
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
            {publicationLogos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={52}
                className="max-h-9 w-auto object-contain opacity-62 grayscale"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#d8ddd6] px-6 py-12 text-charcoal md:px-10 lg:px-14 lg:py-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-4 grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="font-label text-[10px] text-gold-dark">
                Selected Features
              </p>
              <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.02] [letter-spacing:0] md:text-5xl">
                Editorial moments with the rooms in view.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-charcoal/66 lg:justify-self-end">
              The press archive works hardest when the published work is visible.
              These featured stories pair the article with the actual residence,
              studio, or profile imagery behind the coverage.
            </p>
          </div>

          <div>
            {featuredPressItems.map((item, index) => (
              <FeaturedStory
                key={`${item.publication}-${item.date}-${item.title}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-6 py-12 text-cream-100 md:px-10 lg:px-14 lg:py-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-6 border-b border-cream-100/16 pb-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="font-label text-[10px] text-gold/82">
                Complete Archive
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.02] [letter-spacing:0] md:text-5xl">
                Press links and publication history.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-cream-200/62 lg:justify-self-end">
              External articles open in a new tab. Print-only mentions are
              retained for continuity with the original archive.
            </p>
          </div>

          <div className="pt-4">
            {pressItems.map((item, index) => (
              <ArchiveRow
                key={`${item.publication}-${item.date}-${item.title}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
