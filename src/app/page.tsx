import {
  HeadOfHarborTestimonialVideo,
  HeroSection,
  PressSection,
  RecentWorkCarousel,
  ShopCTA,
  ScrollProgressIndicator,
} from "@/components";
import { projects } from "@/lib/projects";

function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? projects[0];
}

const recentWorkProjects = [
  "head-of-the-harbor",
  "pool-house",
  "houston",
].map(projectBySlug);

export default function Home() {
  return (
    <>
      <ScrollProgressIndicator />

      <HeroSection
        title={"Refined yet relatable;\npersonalized through layers."}
        subtitle=""
        videoSrc="/videos/hero.mp4"
        ctaText="Explore Recent Work"
        ctaHref="#recent-work"
      />

      <div className="h-2 bg-charcoal md:h-3 lg:h-4" aria-hidden="true" />

      <RecentWorkCarousel projects={recentWorkProjects} />

      <div className="h-2 bg-charcoal md:h-3 lg:h-4" aria-hidden="true" />

      <HeadOfHarborTestimonialVideo />

      <ShopCTA />

      <PressSection />
    </>
  );
}
