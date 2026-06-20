import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { projects } from "@/lib/projects";
import { services } from "@/lib/config";

export const metadata: Metadata = {
  title: "Luxury Interior Designer NYC | Award-Winning New York Interior Design",
  description:
    "Peter Sandel is an award-winning luxury interior designer in New York City. Creating timeless, sophisticated residential interiors featured in Architectural Digest, Elle Decor, and Forbes. Schedule a consultation.",
  keywords: [
    "interior designer NYC",
    "luxury interior designer New York",
    "best interior designer NYC",
    "interior designer near me",
    "NYC interior design",
    "Manhattan interior designer",
    "high-end interior designer NYC",
    "residential interior designer New York",
  ],
};

const nycProjects = projects.filter(
  (p) => p.location.includes("New York")
);

export default function InteriorDesignerNYCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Interior Designer NYC", href: "/interior-designer-nyc" },
        ]}
      />

      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            New York City
          </span>
          <h1 className="mt-4 font-display-lg text-4xl text-cream-100 md:text-5xl lg:text-6xl">
            Luxury Interior Designer
            <br />
            <span className="text-gold">New York City</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream-200/80">
            Peter Sandel Interior Design creates timeless, sophisticated spaces
            in the heart of New York City. From Hudson Yards penthouses to
            Greenwich Village townhouses, we craft interiors that reflect the
            unique vision and lifestyle of each client.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact" className="btn-luxury inline-flex items-center gap-3">
              Schedule a Consultation
            </Link>
            <Link
              href="/work"
              className="text-xs uppercase tracking-widest text-cream-200 transition-colors hover:text-gold"
            >
              View Our Portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* NYC Projects */}
      <section className="bg-charcoal py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            New York Projects
          </span>
          <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">
            NYC Portfolio
          </h2>
          <div className="mt-12 space-y-0">
            {nycProjects.map((project) => (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className="group relative block"
              >
                <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-graphite lg:h-[75vh]">
                  <Image
                    src={project.image}
                    alt={`${project.title} - Interior Design by Peter Sandel NYC`}
                    fill
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <h3 className="font-display text-3xl text-cream-100 transition-colors duration-300 group-hover:text-gold lg:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-cream-100/70">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Peter Sandel for NYC */}
      <section className="bg-graphite py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              Why Peter Sandel
            </span>
            <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">
              New York&apos;s Trusted Luxury Interior Designer
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="border border-cream-100/10 bg-charcoal p-8">
              <span className="font-display text-4xl text-gold/30">01</span>
              <h3 className="mt-4 font-display text-xl text-cream-100">
                NYC Expertise
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
                Deep understanding of New York&apos;s unique design challenges—from
                pre-war co-op board approvals to modern highrise living. We
                navigate building requirements, contractor relationships, and
                city logistics seamlessly.
              </p>
            </div>

            <div className="border border-cream-100/10 bg-charcoal p-8">
              <span className="font-display text-4xl text-gold/30">02</span>
              <h3 className="mt-4 font-display text-xl text-cream-100">
                Award-Winning Design
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
                Featured in Architectural Digest, Forbes, Elle Decor, and Luxe.
                Recognized recipient of multiple design
                excellence awards for our New York residential projects.
              </p>
            </div>

            <div className="border border-cream-100/10 bg-charcoal p-8">
              <span className="font-display text-4xl text-gold/30">03</span>
              <h3 className="mt-4 font-display text-xl text-cream-100">
                Curated Authenticity
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
                Through our curated shop, Provenance &amp; Patina, we source
                exceptional vintage and antique pieces that bring character and
                soul to every New York interior—spaces that feel collected, not
                decorated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services in NYC */}
      <section className="bg-charcoal py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              Our Services
            </span>
            <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">
              Interior Design Services in New York
            </h2>
          </div>

          <div className="mt-16 space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="font-display text-2xl text-cream-100">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-cream-200/70">{service.description}</p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-cream-200/60"
                      >
                        <span className="h-px w-4 bg-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`aspect-[4/3] bg-graphite ${index % 2 === 1 ? "lg:order-2" : ""}`} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-luxury">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* NYC Neighborhoods */}
      <section className="bg-graphite py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              Areas We Serve
            </span>
            <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">
              New York Neighborhoods
            </h2>
            <p className="mt-6 text-cream-200/70">
              We design luxury interiors across Manhattan, Brooklyn, and the
              greater New York area.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {[
              "Hudson Yards",
              "Greenwich Village",
              "Tribeca",
              "Upper East Side",
              "Upper West Side",
              "Chelsea",
              "SoHo",
              "Midtown",
              "Flatiron",
              "West Village",
              "NoHo",
              "NoLita",
              "Battery Park City",
              "Financial District",
              "Brooklyn Heights",
              "Park Slope",
              "DUMBO",
            ].map((neighborhood) => (
              <span
                key={neighborhood}
                className="border border-cream-100/10 px-4 py-2 text-sm text-cream-200/60"
              >
                {neighborhood}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#464D4A] via-[#363d3a] to-[#2a302d]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mx-auto mb-12 h-16 w-px origin-top bg-gold" />
          <span className="font-accent text-lg italic text-gold">
            Ready to transform your New York space?
          </span>
          <h2 className="mt-6 font-display text-4xl text-cream-100 md:text-5xl lg:text-6xl">
            Let&apos;s Create Something
            <br />
            Extraordinary Together
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-cream-200/80">
            Every exceptional New York interior begins with a conversation.
            Share your vision and discover how we can bring your dream space to
            life.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link href="/contact" className="btn-gold inline-flex items-center gap-3">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
