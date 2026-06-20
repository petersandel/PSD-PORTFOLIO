import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
} from "lucide-react";
import { ServiceSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { siteConfig } from "@/lib/config";

const serviceImages = {
  hero: "/images/projects/Head of the Harbor /PS_HeadofHarbor_1918_Final.jpg",
  fullService: "/images/projects/Head of the Harbor /PS_HeadofHarbor_2297_Final.jpg",
  consultationHero:
    "/images/projects/Head of the Harbor /PS_HeadofHarbor_2355_Final.jpg",
  consultationPortrait: "/images/services/pp-about-peter-sandel-portrait-20260519.jpg",
};

const fullServiceDetails = [
  "Interior architecture, floor plans, and design direction",
  "Furniture, lighting, textile, material, and finish selections",
  "Custom furnishings, millwork, window treatments, and art placement",
  "Procurement, trade coordination, installation, and final styling",
];

const consultationAccordions = [
  {
    label: "What Peter can advise on",
    text: "Color, materials, furniture layout, scale, artwork, lighting, window treatments, sourcing direction, and a second opinion before committing.",
  },
  {
    label: "What to prepare",
    text: "Send photos, plans, dimensions, inspiration, links, and the options you are weighing so the hour can move quickly.",
  },
  {
    label: "What it is not",
    text: "The consultation is focused advisory work. Drawings, purchasing, trade coordination, and installation remain part of full-service design.",
  },
];

const consultationDetails = [
  { label: "Format", value: "Private video session" },
  { label: "Duration", value: "One focused hour" },
  { label: "Investment", value: "$595 consultation" },
];

export const metadata: Metadata = {
  title: "Interior Design Services | Peter Sandel Design",
  description:
    "Explore full-service residential interior design and a one-hour video design consultation with Peter Sandel for color, artwork, layout, and design direction.",
};

export default function ServicesPage() {
  return (
    <>
      <ServiceSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />

      <section className="relative isolate min-h-[100svh] overflow-hidden bg-charcoal text-cream-100">
        <Image
          src={serviceImages.hero}
          alt="Head of the Harbor living room with layered textiles, yellow accents, and tailored upholstery"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-16 pt-32 md:px-10 lg:px-14 lg:pb-20">
          <div className="relative max-w-3xl">
            <div className="pointer-events-none absolute -inset-x-12 -inset-y-10 bg-[radial-gradient(ellipse_at_18%_62%,rgba(31,37,34,0.22)_0%,rgba(31,37,34,0.1)_38%,rgba(31,37,34,0.03)_58%,rgba(31,37,34,0)_78%)]" />
            <div className="relative">
              <p className="relative inline-flex font-label text-[10px] text-gold [text-shadow:0_1px_5px_rgba(0,0,0,0.34),0_0_18px_rgba(31,37,34,0.18)]">
                <span className="pointer-events-none absolute -inset-x-2 -inset-y-1 bg-[radial-gradient(ellipse_at_center,rgba(31,37,34,0.1)_0%,rgba(31,37,34,0.04)_46%,rgba(31,37,34,0)_72%)]" />
                <span className="relative">Interior Design Services</span>
              </p>
              <h1 className="mt-5 max-w-2xl font-display-xl text-4xl leading-[1] [letter-spacing:0] [text-shadow:0_3px_22px_rgba(0,0,0,0.36)] md:text-5xl lg:text-6xl xl:text-[4.9rem]">
                Full-service interiors and focused design counsel.
              </h1>
              <p className="overlay-subtitle mt-6 max-w-xl">
                Peter Sandel Design offers comprehensive residential interiors
                for private homes, alongside a new 60-minute consultation for
                specific design decisions that need a refined outside eye.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid bg-cream-100 text-charcoal lg:min-h-[96svh] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-[72svh] overflow-hidden bg-graphite lg:min-h-[96svh]">
          <Image
            src={serviceImages.fullService}
            alt="Head of the Harbor bedroom with twin beds, ochre walls, arched rust window treatment, and tailored details"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 54vw"
          />
        </div>

        <div className="flex items-center px-6 py-20 md:px-10 lg:px-16">
          <div className="max-w-xl">
            <p className="font-label text-[10px] text-gold-dark">
              Full-Service Interior Design
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.02] [letter-spacing:0] md:text-5xl lg:text-6xl">
              A residence resolved from architecture to final placement.
            </h2>
            <p className="mt-8 text-base leading-8 text-charcoal/72">
              For private homes, apartments, penthouses, and select destination
              residences, the studio manages the full design arc: concept,
              space planning, material direction, custom work, procurement, and
              installation.
            </p>

            <div className="mt-10 border-y border-charcoal/12">
              {fullServiceDetails.map((detail) => (
                <div
                  key={detail}
                  className="flex gap-4 border-b border-charcoal/12 py-4 last:border-b-0"
                >
                  <Check className="mt-1 h-4 w-4 flex-none text-gold-dark" />
                  <p className="text-sm leading-6 text-charcoal/70">{detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-charcoal/35 px-8 py-4 font-label text-[10px] text-charcoal transition-colors duration-500 hover:border-gold-dark hover:text-gold-dark"
              >
                Discuss Full Service
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/faq#studio-process"
                className="border-b border-charcoal/18 pb-1 font-label text-[9px] text-charcoal/54 transition-colors duration-500 hover:border-gold-dark hover:text-gold-dark"
              >
                Full-Service FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="design-consultation"
        className="relative isolate min-h-[104svh] overflow-hidden bg-charcoal text-cream-100"
      >
        <Image
          src={serviceImages.consultationHero}
          alt="Head of the Harbor stair hall with curved rail, black tile, tailored wood storage, and sculptural floral arrangement"
          fill
          className="object-cover"
          sizes="100vw"
        />

        <div className="relative z-10 flex min-h-[104svh] items-end px-6 py-16 md:px-10 lg:px-14 lg:py-20">
          <div className="relative max-w-4xl">
            <div className="pointer-events-none absolute -inset-x-14 -inset-y-12 bg-[radial-gradient(ellipse_at_20%_62%,rgba(31,37,34,0.3)_0%,rgba(31,37,34,0.15)_38%,rgba(31,37,34,0.04)_58%,rgba(31,37,34,0)_78%)]" />
            <div className="relative">
              <p className="font-label text-[10px] text-gold [text-shadow:0_2px_16px_rgba(0,0,0,0.45)]">
                New Offering
              </p>
              <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="max-w-3xl font-display text-4xl leading-[1.02] [letter-spacing:0] [text-shadow:0_4px_30px_rgba(0,0,0,0.48)] md:text-5xl lg:text-6xl">
                  One-hour design consultation.
                </h2>
              </div>
              <p className="overlay-subtitle mt-7 max-w-2xl">
                A focused video session for design challenges that do not
                require a full-service engagement: color selections, artwork
                choices, furniture configuration, room editing, sourcing
                direction, or a second opinion before you commit.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={siteConfig.designConsultation.bookingPath}
                  className="inline-flex items-center justify-center gap-3 border border-gold bg-gold px-8 py-4 font-label text-[10px] text-charcoal transition-colors duration-500 hover:border-cream-100 hover:bg-cream-100"
                >
                  Book Design Consultation
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 border border-cream-100/26 px-8 py-4 font-label text-[10px] text-cream-100 transition-colors duration-500 hover:border-gold hover:text-gold"
                >
                  Discuss Full Service
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-cream-100 text-charcoal lg:grid lg:min-h-[92svh] lg:grid-cols-[0.96fr_1.04fr]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,#f6f2eb_0%,#fbfaf7_39%,#ede6dc_100%)]" />
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_16%_18%,rgba(184,175,166,0.26)_0%,rgba(184,175,166,0.1)_34%,rgba(184,175,166,0)_62%),radial-gradient(ellipse_at_76%_76%,rgba(70,77,74,0.14)_0%,rgba(70,77,74,0.06)_32%,rgba(70,77,74,0)_64%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-charcoal/18 to-transparent" />
        <div className="pointer-events-none absolute inset-y-10 left-6 hidden w-px bg-gradient-to-b from-transparent via-charcoal/14 to-transparent lg:block" />

        <div className="relative z-10 flex items-center px-6 py-[4.5rem] md:px-10 lg:px-16 lg:py-20">
          <div className="relative max-w-[43rem]">
            <div className="absolute -left-6 top-1 hidden h-[calc(100%-0.25rem)] w-px bg-gradient-to-b from-gold-dark/0 via-gold-dark/32 to-gold-dark/0 xl:block" />

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-charcoal/14 pb-5 font-label text-[9px] text-gold-dark">
              <span>Video Design Consultation</span>
              <span className="hidden h-px w-10 bg-charcoal/18 sm:block" />
              <span>Peter Sandel</span>
            </div>

            <h2 className="mt-8 max-w-[39rem] font-display text-4xl leading-[1.02] text-charcoal [letter-spacing:0] md:text-5xl lg:text-[3.75rem]">
              A focused hour for the decision holding the room back.
            </h2>
            <p className="mt-7 max-w-[35rem] text-sm leading-7 text-charcoal/70 md:text-[0.98rem]">
              A private video consultation for a room, selection, layout, or
              purchase that needs a practiced eye. Peter reviews the issue live
              and gives direct guidance so the next move feels clear.
            </p>

            <div className="relative mt-9 overflow-hidden rounded-[3px] border border-white/62 bg-white/28 shadow-[0_30px_90px_rgba(70,77,74,0.12),0_10px_36px_rgba(154,146,138,0.08),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(70,77,74,0.05)] backdrop-blur-2xl">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.12)_42%,rgba(206,198,189,0.13)_100%)]" />
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/95 to-transparent" />
              <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-charcoal/10 to-transparent" />
              <div className="relative z-10 grid sm:grid-cols-3">
                {consultationDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="border-b border-white/42 bg-white/[0.08] px-5 py-4 transition-colors duration-500 last:border-b-0 hover:bg-white/[0.18] sm:border-b-0 sm:border-r sm:border-white/38 sm:last:border-r-0"
                  >
                    <p className="font-label text-[8px] text-gold-dark/76">
                      {detail.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-charcoal/72">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-9 border-y border-charcoal/14">
              {consultationAccordions.map((item, index) => (
                <details
                  key={item.label}
                  className="group border-b border-charcoal/12 last:border-b-0"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-label text-[9px] text-charcoal/68 transition-colors duration-500 hover:text-gold-dark [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center gap-4">
                      <span className="font-display text-lg leading-none text-gold-dark/72 [letter-spacing:0]">
                        0{index + 1}
                      </span>
                      {item.label}
                    </span>
                    <span className="relative isolate flex h-9 w-9 items-center justify-center overflow-hidden rounded-[2px] border border-white/66 bg-white/28 font-display text-2xl leading-none text-gold-dark shadow-[0_12px_30px_rgba(70,77,74,0.1),inset_0_1px_0_rgba(255,255,255,0.92),inset_0_-1px_0_rgba(70,77,74,0.05)] backdrop-blur-2xl transition-all duration-500 before:absolute before:inset-0 before:bg-[linear-gradient(145deg,rgba(255,255,255,0.5),rgba(255,255,255,0.12)_56%,rgba(206,198,189,0.14))] before:content-[''] after:absolute after:inset-x-2 after:top-0 after:h-px after:bg-white/90 after:content-[''] group-hover:-translate-y-px group-hover:border-gold-dark/32 group-hover:bg-white/44 group-hover:shadow-[0_16px_36px_rgba(70,77,74,0.13),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(70,77,74,0.06)] group-open:rotate-45">
                      <span className="relative z-10">+</span>
                    </span>
                  </summary>
                  <p className="max-w-xl pb-6 pl-10 text-sm leading-6 text-charcoal/66 sm:pl-[3.55rem]">
                    {item.text}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href={siteConfig.designConsultation.bookingPath}
                className="group inline-flex items-center gap-4 bg-charcoal px-8 py-4 font-label text-[10px] text-cream-100 shadow-[0_16px_42px_rgba(70,77,74,0.18)] transition-all duration-500 hover:bg-gold-dark hover:shadow-[0_18px_52px_rgba(154,146,138,0.28)]"
              >
                Book Design Consultation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/faq#design-consultation"
                className="border-b border-charcoal/18 pb-1 font-label text-[9px] text-charcoal/54 transition-colors duration-500 hover:border-gold-dark hover:text-gold-dark"
              >
                Consultation FAQ
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-10 min-h-[76svh] overflow-hidden bg-charcoal lg:min-h-[92svh]">
          <Image
            src={serviceImages.consultationPortrait}
            alt="Peter Sandel portrait from the Provenance & Patina About page"
            fill
            className="object-cover object-[50%_42%]"
            sizes="(max-width: 1024px) 100vw, 52vw"
          />
        </div>
      </section>
    </>
  );
}
