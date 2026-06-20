import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/JsonLd";

const studioImages = {
  hero: "/images/studio/SandelDesign-626-copy.jpg",
  materials: "/images/projects/PSD Studio 22/SandelDesign-681.jpg",
  atelier: "/images/projects/PSD Studio 22/SandelDesign_Nov2022-046.jpg",
};

const atelierProcess = [
  {
    title: "Discover",
    text: "Architecture, lifestyle, art, and ambition are studied before a direction is drawn.",
  },
  {
    title: "Evaluate",
    text: "Materials, vintage references, and custom details are tested for integrity and weight.",
  },
  {
    title: "Compose",
    text: "Light, color, proportion, and texture are layered until the room feels inevitable.",
  },
  {
    title: "Realize",
    text: "Every detail is carried through with the precision required for daily life.",
  },
];

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Step inside Peter Sandel Design's Manhattan studio, a private interior design atelier shaped by art, material research, vintage sourcing, and refined residential work.",
  alternates: {
    canonical: "/studio",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Studio", href: "/studio" },
        ]}
      />

      <section className="relative isolate min-h-[100svh] overflow-hidden bg-charcoal text-cream-100">
        <Image
          src={studioImages.hero}
          alt="Peter Sandel Design studio with material boards and a view into the atelier"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(31,37,34,0.82)_0%,rgba(31,37,34,0.68)_26%,rgba(31,37,34,0.34)_52%,rgba(31,37,34,0.08)_72%,rgba(31,37,34,0)_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(31,37,34,0.34)_0%,rgba(31,37,34,0.04)_38%,rgba(31,37,34,0.18)_100%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 flex min-h-[100svh] items-end px-6 pb-14 pt-32 md:px-10 lg:px-14 lg:pb-16">
          <div className="max-w-[36rem]">
            <p className="font-label text-[10px] text-gold">The Studio</p>
            <h1 className="mt-5 font-display-xl text-3xl leading-[1.04] [letter-spacing:0] [text-shadow:0_4px_30px_rgba(0,0,0,0.42)] md:text-4xl lg:text-5xl xl:text-[3.9rem]">
              New York Design Studio for Collected, Considered Interiors
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 px-6 py-16 text-charcoal md:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-label text-[10px] text-gold-dark">
              Studio Philosophy
            </p>
            <blockquote className="mt-5 font-accent text-2xl leading-[1.12] text-charcoal [letter-spacing:0] md:text-3xl lg:text-4xl">
              &ldquo;Design should feel inevitable, as if the space could never
              have existed any other way.&rdquo;
            </blockquote>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-charcoal/66">
              Peter Sandel Design works at the intersection of luxury
              residential design and the art world, shaping homes where
              composition, scale, and materiality are felt every day.
            </p>
          </div>
        </div>
      </section>

      <section className="grid bg-cream-100 text-charcoal lg:grid-cols-2">
        <div className="relative min-h-[64svh] overflow-hidden bg-graphite lg:min-h-[92svh]">
          <Image
            src={studioImages.materials}
            alt="Peter Sandel Design material library with stone and tile samples"
            fill
            className="object-cover object-[50%_44%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex items-center px-6 py-16 md:px-10 lg:px-16">
          <div className="max-w-xl">
            <p className="font-label text-[10px] text-gold-dark">
              Our Approach
            </p>
            <h2 className="mt-5 font-display text-2xl leading-[1.1] [letter-spacing:0] md:text-3xl lg:text-4xl">
              A collaborative process with intention at every step.
            </h2>
            <div className="mt-10 border-y border-charcoal/12">
              {atelierProcess.map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-6 border-b border-charcoal/12 py-6 last:border-b-0 sm:grid-cols-[3rem_1fr]"
                >
                  <p className="font-label text-[10px] text-gold-dark">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="font-label text-[11px] text-charcoal">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-charcoal/68">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/services"
              className="mt-10 inline-flex border-b border-charcoal/40 pb-2 font-label text-[10px] text-charcoal transition-colors duration-500 hover:border-gold-dark hover:text-gold-dark"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="grid bg-charcoal text-cream-100 lg:grid-cols-[0.42fr_0.58fr]">
        <div className="flex items-center px-6 py-16 md:px-10 lg:order-1 lg:px-14">
          <div className="max-w-md">
            <p className="font-label text-[10px] text-gold">The Studio</p>
            <h2 className="mt-5 font-display text-2xl leading-[1.1] [letter-spacing:0] md:text-3xl">
              The studio is both creative headquarters and material library.
            </h2>
            <p className="mt-6 text-sm leading-7 text-cream-200/72">
              Fabric swatches, stone and marble samples, vintage references,
              and maker histories stay close at hand. The strongest choices are
              made by comparison, not decoration.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 font-label text-[9px] text-cream-200/60">
              <span>Sotheby&apos;s Contributor</span>
              <span>15+ Years in Practice</span>
              <span>Manhattan Studio</span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[62svh] overflow-hidden bg-graphite lg:order-2 lg:min-h-[72svh]">
          <Image
            src={studioImages.atelier}
            alt="Peter Sandel Design studio work table with art, books, and objects"
            fill
            className="object-cover object-[45%_52%]"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
        </div>
      </section>

    </>
  );
}
