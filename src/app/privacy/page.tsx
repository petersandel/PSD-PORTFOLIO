import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Peter Sandel Interior Design. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy" },
        ]}
      />
      <section className="bg-charcoal pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            Legal
          </span>
          <h1 className="mt-4 font-display text-4xl text-cream-100 md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-cream-200/60">
            Last updated: May 22, 2026
          </p>

          <div className="mt-12 space-y-10 text-sm leading-relaxed text-cream-200/80">
            <div>
              <h2 className="font-display text-xl text-cream-100">
                1. Information We Collect
              </h2>
              <p className="mt-4">
                Peter Sandel Interior Design (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects
                information you voluntarily provide when you contact us, schedule
                a consultation, submit a client screening form, or interact with
                our website. This may include:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Name, email address, and phone number</li>
                <li>Project details including location, budget, and timeline</li>
                <li>Design preferences and inspiration</li>
                <li>How you heard about our services</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                2. How We Use Your Information
              </h2>
              <p className="mt-4">We use the information we collect to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Respond to your inquiries and schedule consultations</li>
                <li>Evaluate potential client projects and determine fit</li>
                <li>Provide interior design services and project management</li>
                <li>Send relevant updates about our services (with your consent)</li>
                <li>Improve our website and client experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                3. Information Sharing
              </h2>
              <p className="mt-4">
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information with trusted service
                providers who assist in our operations (such as Calendly for
                scheduling, email providers for communications, and analytics
                services), but only to the extent necessary for them to perform
                their services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                4. Data Security
              </h2>
              <p className="mt-4">
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the Internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                5. Cookies & Analytics
              </h2>
              <p className="mt-4">
                Our website may use cookies and similar technologies to enhance
                your browsing experience and analyze site traffic. We use Vercel
                Analytics and Google Analytics 4 to understand how visitors
                interact with our site. These tools collect anonymized data and
                do not personally identify you. You may disable cookies through
                your browser settings.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                6. Third-Party Links
              </h2>
              <p className="mt-4">
                Our website may contain links to third-party websites, including
                our shop at provenanceandpatina.com and our social media profiles.
                We are not responsible for the privacy practices of these external
                sites and encourage you to review their privacy policies.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                7. Your Rights
              </h2>
              <p className="mt-4">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                8. Data Retention
              </h2>
              <p className="mt-4">
                We retain your personal information only for as long as necessary
                to fulfill the purposes for which it was collected, or as
                required by law. Client project information is retained for the
                duration of the project and a reasonable period thereafter for
                reference and legal compliance.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                9. Children&apos;s Privacy
              </h2>
              <p className="mt-4">
                Our services are not directed to individuals under the age of 18.
                We do not knowingly collect personal information from children.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                10. Changes to This Policy
              </h2>
              <p className="mt-4">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new policy on
                this page and updating the &quot;Last updated&quot; date.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-cream-100">
                11. Contact Us
              </h2>
              <p className="mt-4">
                If you have questions about this Privacy Policy or our data
                practices, please contact us at:
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