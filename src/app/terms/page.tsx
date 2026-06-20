import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Peter Sandel Interior Design. Read our terms and conditions for using our website and design services.",
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Terms of Service", href: "/terms" },
        ]}
      />
      <section className="bg-charcoal pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            Legal
          </span>
          <h1 className="mt-4 font-display text-4xl text-cream-100 md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-cream-200/60">
            Last updated: May 22, 2026
          </p>

          <div className="mt-12 space-y-10 text-sm leading-relaxed text-cream-200/80">
            <div>
              <h2 className="font-display text-xl text-cream-100">
                1. Acceptance of Terms
              </h2>
              <p className="mt-4">
                By accessing or using the website at petersandel.com, you agree
                to be bound by these Terms of Service. If you do not agree to
                these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                2. Services
              </h2>
              <p className="mt-4">
                Peter Sandel Interior Design provides luxury interior design
                services including full-service interior design, architectural
                collaboration, and design consultations. All services are subject
                to a separate design agreement that will outline specific terms,
                scope, fees, and deliverables for each project.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                3. Project Budget
              </h2>
              <p className="mt-4">
                Project budgets are discussed during the consultation process to
                ensure alignment between client expectations and the level of
                service required. By submitting a client screening form, you
                acknowledge that project scope and budget will be reviewed during
                the consultation process.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                4. Intellectual Property
              </h2>
              <p className="mt-4">
                All content on this website—including text, images, designs,
                logos, and other materials—is the property of Peter Sandel
                Interior Design and is protected by copyright and intellectual
                property laws. You may not reproduce, distribute, or use our
                content without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                5. Portfolio & Photography
              </h2>
              <p className="mt-4">
                Project images displayed on our website represent completed
                design work by Peter Sandel Interior Design. Photography credits
                belong to their respective photographers. Images are for
                portfolio purposes and may not represent the current state of
                any space. Reproduction of project images without permission is
                prohibited.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                6. Website Use
              </h2>
              <p className="mt-4">You agree to use our website only for:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Learning about our design services</li>
                <li>Viewing our portfolio of completed projects</li>
                <li>Contacting us regarding potential design projects</li>
                <li>Legitimate personal or business purposes</li>
              </ul>
              <p className="mt-4">
                You may not use our website to scrape data, impersonate others,
                distribute malware, or engage in any unlawful activity.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                7. Disclaimer
              </h2>
              <p className="mt-4">
                The information on this website is provided &quot;as is&quot; without
                warranties of any kind. We make every effort to ensure accuracy
                but do not guarantee that all information is complete, current,
                or error-free. Project outcomes may vary based on individual
                circumstances.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                8. Limitation of Liability
              </h2>
              <p className="mt-4">
                To the fullest extent permitted by law, Peter Sandel Interior
                Design shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of this
                website or our services. Our total liability shall not exceed the
                amount paid by you for the specific service giving rise to the
                claim.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                9. Third-Party Services
              </h2>
              <p className="mt-4">
                Our website may link to or integrate with third-party services
                (such as Calendly for scheduling, Instagram for social content,
                and provenanceandpatina.com for our curated shop). These services
                are governed by their own terms and privacy policies, and we are
                not responsible for their practices or availability.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                10. Governing Law
              </h2>
              <p className="mt-4">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the State of New York, without regard
                to its conflict of law provisions. Any disputes arising from
                these terms shall be resolved in the courts of New York County,
                New York.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                11. Changes to Terms
              </h2>
              <p className="mt-4">
                We reserve the right to modify these Terms of Service at any time.
                Changes will be effective immediately upon posting to this page.
                Your continued use of the website after changes constitutes
                acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                12. Contact
              </h2>
              <p className="mt-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 rounded-sm border border-cream-100/10 bg-graphite p-6">
                <p className="text-cream-100">Peter Sandel Interior Design</p>
                <p className="mt-2">Email: peter@petersandel.com</p>
                <p>Phone: +1 (212) 203-6400</p>
                <p>One Union Square West, Suite 814, New York, NY 10003</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}