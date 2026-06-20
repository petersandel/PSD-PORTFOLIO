import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navigation, Footer, SmoothScroll, PageTransition, Preloader, CustomCursor } from "@/components";
import { LocalBusinessSchema } from "@/components/JsonLd";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Peter Sandel | Refined Interior Design NYC`,
    template: `%s | Peter Sandel Interior Design`,
  },
  description:
    "Peter Sandel creates refined, layered interiors for residences in New York, the Hamptons, and select destinations, shaped by art, vintage pieces, custom detail, and personal point of view.",
  keywords: [
    "luxury interior design",
    "interior designer NYC",
    "best interior designer New York",
    "high-end interior designer",
    "residential interior design",
    "luxury interior designer Manhattan",
    "Peter Sandel",
    "custom home design",
    "architectural interior design",
    "award-winning interior design",
    "interior designer near me",
    "NYC interior designer",
  ],
  authors: [{ name: "Peter Sandel" }],
  creator: "Peter Sandel Interior Design",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className="antialiased"
      >
        <a href="#main" className="skip-to-content">Skip to content</a>
        <Preloader />
        <CustomCursor />
        <SmoothScroll>
          <Navigation />
          <LocalBusinessSchema />
          <PageTransition>
            <main id="main">{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
