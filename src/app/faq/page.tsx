import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { siteConfig } from "@/lib/config";

const faqImages = {
  hero: "/images/projects/PSD Studio 22/SandelDesign-681.jpg",
  consultation:
    "/images/projects/Head of the Harbor /PS_HeadofHarbor_1796_Final.jpg",
};

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Peter Sandel Design",
  description:
    "Answers about Peter Sandel Design services, private residential projects, full-service interiors, and video design consultations.",
};

const designConsultationFaqs = [
  {
    question: "What can be resolved in a one-hour consultation?",
    answer:
      "The hour is best for a focused decision: color, material direction, furniture layout, art placement, lighting, window treatments, sourcing options, or a second opinion before purchasing, renovating, or committing.",
  },
  {
    question: "What should I send before the call?",
    answer:
      "Send photos or video of the room, plans or dimensions if available, inspiration images, product links, finish options, and a short note describing the decision you need help making.",
  },
  {
    question: "What happens during the hour?",
    answer:
      "Peter reviews the material live by video, identifies what is creating the block, and gives direct guidance so you leave with a clear next move.",
  },
  {
    question: "Is this full-service design?",
    answer:
      "No. The consultation is focused advisory work. Drawings, sourcing packages, procurement, trade coordination, installation, and full room schemes remain part of full-service interior design.",
  },
  {
    question: "How much is the consultation?",
    answer:
      "The private one-hour video consultation with Peter Sandel is $595. Payment reserves the session and opens the weekday calendar for booking.",
  },
];

const privateProjectFaqs = [
  {
    question: "How does a private residential project begin?",
    answer:
      "The process begins with a private inquiry. The studio reviews scope, location, timeline, investment level, and the degree of design partnership required before recommending the right next step.",
  },
  {
    question: "What types of homes does the studio take on?",
    answer:
      "Peter Sandel Design works on private homes, apartments, penthouses, townhouses, estate properties, and select destination residences where architecture, art, materiality, and custom detail can be resolved together.",
  },
  {
    question: "Do you work outside New York?",
    answer:
      "Yes. The studio works in New York, the Hamptons, Long Island, and select destination markets when the scope supports a full-service design process.",
  },
  {
    question: "Can existing furniture, art, or family pieces stay?",
    answer:
      "Yes. Existing pieces are often part of what makes a residence feel collected and personal. The studio edits, repositions, restores, or layers them with new and custom work when they serve the room.",
  },
];

const studioProcessFaqs = [
  {
    question: "What is included in full-service interior design?",
    answer:
      "Full-service work can include interior architecture, floor plans, material direction, custom furnishings, millwork, lighting, textiles, art placement, procurement, trade coordination, installation, and final styling.",
  },
  {
    question: "How long does a full residence usually take?",
    answer:
      "Timelines depend on scope, construction, custom work, lead times, and decision cadence. A full residential project commonly moves over several months to more than a year.",
  },
  {
    question: "How are budgets discussed?",
    answer:
      "Budget is discussed early and directly so the design ambition, level of customization, procurement plan, and installation expectations are aligned before a formal proposal is prepared.",
  },
  {
    question: "What makes the studio approach different?",
    answer:
      "The work is edited through architecture, art, materiality, custom detail, and daily use. The goal is a residence that feels collected and inevitable rather than newly decorated.",
  },
];

const faqGroups = [
  {
    id: "design-consultation",
    eyebrow: "Video Design Consultation",
    title: "For the decision that needs a practiced eye.",
    text: "A focused private video hour with Peter Sandel for a room, selection, layout, or purchase that needs expert direction.",
    items: designConsultationFaqs,
  },
  {
    id: "private-projects",
    eyebrow: "Private Projects",
    title: "For residences that need a complete design partner.",
    text: "Questions about inquiry fit, location, existing pieces, and how the studio evaluates a private commission.",
    items: privateProjectFaqs,
  },
  {
    id: "studio-process",
    eyebrow: "Studio Process",
    title: "For scope, timeline, budget, and the way the work moves.",
    text: "A concise view of full-service interiors and the decisions that shape a residence from concept to final placement.",
    items: studioProcessFaqs,
  },
];

const consultationDetails = [
  { label: "Format", value: "Private video" },
  { label: "Length", value: "One focused hour" },
  { label: "Investment", value: "$595" },
];

const allFaqs = faqGroups.flatMap((group) => group.items);

type FaqItem = {
  question: string;
  answer: string;
};

function AccordionList({
  items,
  tone = "dark",
}: {
  items: FaqItem[];
  tone?: "dark" | "light";
}) {
  const isDark = tone === "dark";
  const borderClass =
    tone === "dark" ? "border-cream-100/12" : "border-charcoal/14";
  const questionClass =
    isDark ? "text-cream-100 hover:text-gold" : "text-charcoal hover:text-gold-dark";
  const answerClass =
    isDark ? "text-cream-200/72" : "text-charcoal/68";
  const numberClass =
    isDark ? "text-gold/72" : "text-gold-dark/72";
  const plusClass = isDark
    ? "border-cream-100/16 bg-cream-100/[0.06] text-gold shadow-[0_14px_32px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.12)] group-hover:border-gold/34 group-hover:bg-cream-100/[0.1]"
    : "border-white/66 bg-white/30 text-gold-dark shadow-[0_12px_30px_rgba(70,77,74,0.1),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(70,77,74,0.05)] group-hover:border-gold-dark/34 group-hover:bg-white/48";
  const rowHover = isDark
    ? "hover:bg-cream-100/[0.025]"
    : "hover:bg-white/22";

  return (
    <div className={`border-y ${borderClass}`}>
      {items.map((item, index) => (
        <details
          key={item.question}
          className={`group border-b ${borderClass} last:border-b-0`}
        >
          <summary
            className={`grid cursor-pointer list-none grid-cols-[2.5rem_1fr_auto] items-center gap-5 px-0 py-6 text-left transition-all duration-500 ${rowHover} ${questionClass} [&::-webkit-details-marker]:hidden`}
          >
            <span className={`font-display text-2xl leading-none ${numberClass}`}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-2xl leading-tight [letter-spacing:0] md:text-3xl">
              {item.question}
            </span>
            <span className={`relative isolate flex h-9 w-9 items-center justify-center overflow-hidden rounded-[2px] border font-display text-2xl leading-none backdrop-blur-xl transition-all duration-500 before:absolute before:inset-0 before:bg-[linear-gradient(145deg,rgba(255,255,255,0.34),rgba(255,255,255,0.08)_58%,rgba(206,198,189,0.12))] before:content-[''] after:absolute after:inset-x-2 after:top-0 after:h-px after:bg-white/70 after:content-[''] group-hover:-translate-y-px group-open:rotate-45 ${plusClass}`}>
              <span className="relative z-10">+</span>
            </span>
          </summary>
          <p className={`max-w-3xl pb-7 pl-[4.25rem] text-sm leading-7 md:text-base ${answerClass}`}>
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={allFaqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />

      <section className="relative isolate overflow-hidden bg-charcoal text-cream-100">
        <Image
          src={faqImages.hero}
          alt="Peter Sandel Design studio material shelves with stone, tile, and finish samples"
          fill
          priority
          className="object-cover opacity-[0.58]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,37,34,0.94)_0%,rgba(31,37,34,0.74)_44%,rgba(31,37,34,0.3)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal via-charcoal/68 to-transparent" />

        <div className="relative z-10 flex min-h-[90svh] items-end px-6 pb-14 pt-32 md:px-10 lg:px-14 lg:pb-16">
          <div className="grid w-full max-w-[1680px] gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="font-label text-[10px] text-gold [text-shadow:0_2px_16px_rgba(0,0,0,0.45)]">
                Frequently Asked Questions
              </p>
              <h1 className="mt-6 font-display-xl text-5xl leading-[0.96] [letter-spacing:0] [text-shadow:0_4px_30px_rgba(0,0,0,0.48)] md:text-6xl lg:text-7xl xl:text-[5.8rem]">
                Clear answers before the work begins.
              </h1>
              <p className="overlay-subtitle mt-8 max-w-2xl">
                A more considered guide to consultations, private commissions,
                studio process, and the line between focused advice and
                full-service design.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[3px] border border-cream-100/16 bg-charcoal/44 p-5 shadow-[0_28px_80px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_48%,rgba(184,175,166,0.09))]" />
              <div className="relative z-10">
                <p className="font-label text-[8px] text-gold/82">
                  Browse By Topic
                </p>
                <div className="mt-5 divide-y divide-cream-100/12 border-y border-cream-100/12">
                  {faqGroups.map((group, index) => (
                    <Link
                      key={group.id}
                      href={`#${group.id}`}
                      className="group grid grid-cols-[2.25rem_1fr_auto] items-center gap-4 py-4 text-cream-100 transition-colors duration-500 hover:text-gold"
                    >
                      <span className="font-display text-xl leading-none text-gold/62">
                        0{index + 1}
                      </span>
                      <span>
                        <span className="block font-label text-[9px]">
                          {group.eyebrow}
                        </span>
                        <span className="mt-1 block text-sm leading-6 text-cream-200/62">
                          {group.text}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-gold/70 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="design-consultation"
        className="relative isolate scroll-mt-24 overflow-hidden bg-cream-100 text-charcoal"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,#f6f2eb_0%,#fbfaf7_39%,#ede6dc_100%)]" />
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_14%_18%,rgba(184,175,166,0.24)_0%,rgba(184,175,166,0.09)_34%,rgba(184,175,166,0)_62%),radial-gradient(ellipse_at_82%_76%,rgba(70,77,74,0.12)_0%,rgba(70,77,74,0.05)_32%,rgba(70,77,74,0)_64%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-charcoal/18 to-transparent" />

        <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex items-start px-6 py-[4.5rem] md:px-10 lg:px-14 lg:py-20">
            <div className="max-w-[41rem]">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-charcoal/14 pb-5 font-label text-[9px] text-gold-dark">
                <span>Video Design Consultation</span>
                <span className="hidden h-px w-10 bg-charcoal/18 sm:block" />
                <span>Peter Sandel</span>
              </div>

              <h2 className="mt-8 max-w-[38rem] font-display text-4xl leading-[1.02] [letter-spacing:0] md:text-5xl lg:text-[3.75rem]">
                For the decision that needs a practiced eye.
              </h2>
              <p className="mt-7 max-w-[34rem] text-sm leading-7 text-charcoal/70 md:text-[0.98rem]">
                A focused private video hour with Peter Sandel for a room,
                selection, layout, or purchase that needs expert direction.
              </p>

              <div className="relative mt-9 overflow-hidden rounded-[3px] border border-white/62 bg-white/28 shadow-[0_30px_90px_rgba(70,77,74,0.12),0_10px_36px_rgba(154,146,138,0.08),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(70,77,74,0.05)] backdrop-blur-2xl">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.12)_42%,rgba(206,198,189,0.13)_100%)]" />
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/95 to-transparent" />
                <div className="relative z-10 grid sm:grid-cols-3">
                  {consultationDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className="border-b border-white/42 bg-white/[0.08] px-5 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:border-white/38 sm:last:border-r-0"
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

              <Link
                href={siteConfig.designConsultation.bookingPath}
                className="group mt-9 inline-flex items-center gap-4 bg-charcoal px-8 py-4 font-label text-[10px] text-cream-100 shadow-[0_16px_42px_rgba(70,77,74,0.18)] transition-all duration-500 hover:bg-gold-dark hover:shadow-[0_18px_52px_rgba(154,146,138,0.28)]"
              >
                Book Design Consultation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <div className="flex items-start px-6 pb-16 pt-0 md:px-10 lg:px-14 lg:py-20">
            <div className="w-full">
              <AccordionList items={designConsultationFaqs} tone="light" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-charcoal text-cream-100">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_12%,rgba(184,175,166,0.12)_0%,rgba(184,175,166,0.04)_38%,rgba(184,175,166,0)_66%)]" />
        <div className="relative z-10 px-6 py-[4.5rem] md:px-10 lg:px-14 lg:py-20">
          <div className="max-w-4xl">
            <p className="font-label text-[10px] text-gold">
              Private Project Questions
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.04] [letter-spacing:0] md:text-5xl lg:text-6xl">
              The larger decisions have their own order.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {faqGroups.slice(1).map((group) => (
              <article
                id={group.id}
                key={group.id}
                className="scroll-mt-24 rounded-[3px] border border-cream-100/12 bg-cream-100/[0.035] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm md:p-8 lg:p-10"
              >
                <p className="font-label text-[10px] text-gold">
                  {group.eyebrow}
                </p>
                <h3 className="mt-5 max-w-xl font-display text-4xl leading-[1.04] [letter-spacing:0] md:text-5xl">
                  {group.title}
                </h3>
                <p className="mt-6 max-w-xl text-sm leading-7 text-cream-200/70">
                  {group.text}
                </p>
                <div className="mt-10">
                  <AccordionList items={group.items} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate grid overflow-hidden bg-cream-100 text-charcoal lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative min-h-[58svh] overflow-hidden bg-graphite lg:min-h-[74svh]">
          <Image
            src={faqImages.consultation}
            alt="Peter Sandel standing in a paneled Head of the Harbor interior"
            fill
            className="object-cover object-[50%_42%]"
            sizes="(max-width: 1024px) 100vw, 46vw"
          />
        </div>
        <div className="relative flex items-center px-6 py-16 md:px-10 lg:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_18%,rgba(184,175,166,0.2)_0%,rgba(184,175,166,0.08)_34%,rgba(184,175,166,0)_64%)]" />
          <div className="relative z-10 max-w-2xl">
            <p className="font-label text-[10px] text-gold-dark">
              Not Sure Where To Begin
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.03] [letter-spacing:0] md:text-5xl lg:text-6xl">
              Start with the level of guidance the decision deserves.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-charcoal/68">
              A defined question belongs in a consultation. A residence that
              needs architecture, materials, furnishing, procurement, and
              installation belongs in a private inquiry.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <Link
                href={siteConfig.designConsultation.bookingPath}
                className="group border border-charcoal/12 bg-charcoal px-6 py-5 text-cream-100 shadow-[0_18px_50px_rgba(70,77,74,0.18)] transition-colors duration-500 hover:bg-gold-dark"
              >
                <span className="font-label text-[9px]">Book Consultation</span>
                <span className="mt-5 flex items-center justify-between gap-4 text-sm leading-6 text-cream-200/72">
                  Focused question, clear next move.
                  <ArrowUpRight className="h-4 w-4 flex-none transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
              <Link
                href="/contact"
                className="group border border-charcoal/14 bg-white/34 px-6 py-5 shadow-[0_18px_50px_rgba(70,77,74,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl transition-colors duration-500 hover:border-gold-dark/40"
              >
                <span className="font-label text-[9px] text-charcoal">
                  Private Inquiry
                </span>
                <span className="mt-5 flex items-center justify-between gap-4 text-sm leading-6 text-charcoal/64">
                  Full residence, complete design partner.
                  <ArrowUpRight className="h-4 w-4 flex-none text-gold-dark transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
