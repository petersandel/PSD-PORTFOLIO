import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Studio Notes",
  description:
    "Studio notes from Peter Sandel Design on recent projects, collecting, materials, art, and layered interiors for New York residences and beyond.",
  keywords: [
    "interior design blog NYC",
    "luxury interior design inspiration",
    "interior design trends 2026",
    "NYC apartment design ideas",
    "how to hire an interior designer",
    "luxury home design tips",
  ],
};

const journalPosts = [
  {
    slug: "how-to-hire-an-interior-designer-nyc",
    title: "How to Hire an Interior Designer in NYC: A Complete Guide",
    excerpt:
      "Finding the right interior designer in New York City requires understanding your vision, budget, and the unique challenges of NYC living. Here's everything you need to know to make the right choice.",
    category: "Client Guides",
    date: "May 22, 2026",
    readTime: "8 min read",
    image: "/images/journal/how-to-hire-interior-designer.jpg",
  },
  {
    slug: "interior-designer-cost-nyc",
    title: "How Much Does an Interior Designer Cost in NYC? (2026 Guide)",
    excerpt:
      "A comprehensive guide to interior designer costs in New York City. Understand fee structures, budget ranges, and what to expect when hiring a luxury interior designer.",
    category: "Client Guides",
    date: "May 22, 2026",
    readTime: "10 min read",
    image: "/images/journal/interior-designer-cost.jpg",
  },
  {
    slug: "interior-designer-vs-interior-decorator",
    title: "Interior Designer vs Interior Decorator: What's the Difference?",
    excerpt:
      "They sound interchangeable, but the distinction matters — especially when you're investing in a New York City home. Understand which professional you need.",
    category: "Client Guides",
    date: "May 22, 2026",
    readTime: "7 min read",
    image: "/images/journal/interior-designer-vs-decorator.jpg",
  },
  {
    slug: "luxury-kitchen-design-ideas-2026",
    title: "Luxury Kitchen Design Ideas for 2026: What NYC Homeowners Need to Know",
    excerpt:
      "From bespoke cabinetry to integrated smart technology, the luxury kitchen of 2026 blends timeless craftsmanship with modern innovation. Explore the trends shaping New York's finest kitchens.",
    category: "Design Trends",
    date: "May 20, 2026",
    readTime: "6 min read",
    image: "/images/journal/luxury-kitchen-design.jpg",
  },
  {
    slug: "interior-design-color-trends-2026",
    title: "Interior Design Color Trends 2026: The New Neutrals and Beyond",
    excerpt:
      "The color conversation is shifting. After years of cool greys and stark whites, 2026 brings warmth, depth, and a return to colors that feel rooted in the natural world.",
    category: "Design Trends",
    date: "May 20, 2026",
    readTime: "7 min read",
    image: "/images/journal/color-trends.jpg",
  },
  {
    slug: "nyc-apartment-design-tips",
    title: "10 Design Tips for Making Your NYC Apartment Feel Luxurious and Spacious",
    excerpt:
      "New York apartments demand creative design thinking. From strategic lighting to custom millwork, discover how to transform compact spaces into expansive, luxurious homes.",
    category: "Design Tips",
    date: "May 18, 2026",
    readTime: "7 min read",
    image: "/images/journal/nyc-apartment-tips.jpg",
  },
  {
    slug: "luxury-bathroom-design-ideas",
    title: "Luxury Bathroom Design Ideas: Making Every Square Inch Count",
    excerpt:
      "In New York City, bathrooms are often the smallest room — and the one where design decisions matter most. Expert tips for creating a luxurious bath retreat.",
    category: "Design Tips",
    date: "May 16, 2026",
    readTime: "8 min read",
    image: "/images/journal/luxury-bathroom-design.jpg",
  },
  {
    slug: "luxury-living-room-design",
    title: "How to Design an Elegant Living Room That's Actually Livable",
    excerpt:
      "The most beautiful living rooms are the ones you never want to leave. Expert strategies for creating a living room that balances elegance with everyday comfort.",
    category: "Design Tips",
    date: "May 14, 2026",
    readTime: "9 min read",
    image: "/images/journal/luxury-living-room.jpg",
  },
  {
    slug: "luxury-bedroom-design-ideas",
    title: "Luxury Bedroom Design: Creating Your Personal Sanctuary",
    excerpt:
      "The bedroom is the most personal room in any home. It deserves the same design rigor as your living room — with even more intention.",
    category: "Design Tips",
    date: "May 12, 2026",
    readTime: "7 min read",
    image: "/images/journal/luxury-bedroom-design.jpg",
  },
  {
    slug: "pre-war-apartment-renovation-nyc",
    title: "Pre-War Apartment Renovation NYC: A Complete Design Guide",
    excerpt:
      "Pre-war apartments are New York's greatest design opportunity — and its greatest challenge. How to honor the past while creating something entirely new.",
    category: "Client Guides",
    date: "May 10, 2026",
    readTime: "11 min read",
    image: "/images/journal/pre-war-renovation.jpg",
  },
  {
    slug: "nyc-co-op-board-design-approval",
    title: "NYC Co-op Board Design Approval: Everything You Need to Know",
    excerpt:
      "The co-op board approval process can make or break your renovation timeline. Here's how to navigate it with confidence.",
    category: "Client Guides",
    date: "May 8, 2026",
    readTime: "9 min read",
    image: "/images/journal/co-op-board.jpg",
  },
  {
    slug: "mixing-vintage-modern-interior-design",
    title: "Mixing Vintage and Modern: The Design Secret That Makes a Room",
    excerpt:
      "The most compelling interiors aren't all-new or all-old. They're a conversation between eras — and mastering that conversation is what separates good design from great.",
    category: "Design Inspiration",
    date: "May 6, 2026",
    readTime: "8 min read",
    image: "/images/journal/mixing-vintage-modern.jpg",
  },
  {
    slug: "art-curation-interior-design",
    title: "How to Curate Art for Your Home: An Interior Designer's Guide",
    excerpt:
      "Art transforms a house into a home. Learn our approach to selecting, placing, and living with art — from emerging artists to established names.",
    category: "Design Inspiration",
    date: "May 4, 2026",
    readTime: "9 min read",
    image: "/images/journal/art-curation.jpg",
  },
  {
    slug: "behind-design-hudson-yards",
    title: "Inside Our Hudson Yards Residence: A Design Case Study",
    excerpt:
      "How we transformed a raw Hudson Yards penthouse into a sophisticated residence that balances bold contemporary art with timeless comfort.",
    category: "Project Spotlight",
    date: "May 2, 2026",
    readTime: "12 min read",
    image: "/images/journal/hudson-yards-case-study.jpg",
  },
  {
    slug: "vintage-finds-provenance-and-patina",
    title: "The Provenance & Patina Edit: Vintage Finds That Transform a Room",
    excerpt:
      "Every space needs pieces with a past. How we use vintage and antique finds from Provenance & Patina to bring soul, character, and authenticity to our projects.",
    category: "Design Inspiration",
    date: "May 1, 2026",
    readTime: "6 min read",
    image: "/images/journal/provenance-patina.jpg",
  },
  {
    slug: "hamptons-beach-house-interior-design",
    title: "Hamptons Beach House Interior Design: Creating Coastal Luxury",
    excerpt:
      "From Fire Island retreats to Montauk escapes — how to design a beach house that feels both effortless and deeply intentional, without falling into coastal clichés.",
    category: "Design Inspiration",
    date: "Apr 28, 2026",
    readTime: "10 min read",
    image: "/images/journal/hamptons-beach-house.jpg",
  },
  {
    slug: "luxury-wallpaper-ideas",
    title: "Luxury Wallpaper Ideas: How to Use Wallpaper Like a Top Designer",
    excerpt:
      "From hand-painted murals to textured grasscloth, discover how top interior designers use wallpaper to transform luxury homes with confidence and restraint.",
    category: "Design Tips",
    date: "Apr 26, 2026",
    readTime: "9 min read",
    image: "/images/journal/luxury-wallpaper.jpg",
  },
  {
    slug: "best-interior-designer-nyc",
    title: "Best Interior Designer NYC: How to Find the Right One for Your Project",
    excerpt:
      "Searching for the best interior designer in NYC? Learn what separates top designers from the rest, what to look for in a portfolio, and how to find the perfect match.",
    category: "Client Guides",
    date: "Apr 24, 2026",
    readTime: "11 min read",
    image: "/images/journal/best-interior-designer.jpg",
  },
  {
    slug: "luxury-home-renovation-nyc",
    title: "Luxury Home Renovation NYC: A Complete Guide to High-End Remodels",
    excerpt:
      "Planning a luxury renovation in New York City? From co-op board approvals to contractor selection, this guide covers everything NYC homeowners need to know.",
    category: "Client Guides",
    date: "Apr 22, 2026",
    readTime: "12 min read",
    image: "/images/journal/luxury-home-renovation.jpg",
  },
  {
    slug: "nyc-penthouse-design",
    title: "NYC Penthouse Design: Ideas for Luxury Living Above It All",
    excerpt:
      "Penthouse design demands a different approach. Learn how to maximize skyline views, create intimacy in expansive spaces, and bring warmth to rooms that live above the city.",
    category: "Design Inspiration",
    date: "Apr 20, 2026",
    readTime: "9 min read",
    image: "/images/journal/nyc-penthouse.jpg",
  },
  {
    slug: "luxury-interior-design-trends-2026",
    title: "Luxury Interior Design Trends 2026: What's Timeless vs. What's Trendy",
    excerpt:
      "Not every trend deserves a place in your home. Our honest assessment of what's worth investing in — warm minimalism, artisanal craft, quiet luxury — and what to admire from a distance.",
    category: "Design Trends",
    date: "Apr 18, 2026",
    readTime: "10 min read",
    image: "/images/journal/luxury-design-trends.jpg",
  },
  {
    slug: "custom-furniture-bespoke-design",
    title: "Custom Furniture and Bespoke Design: Why It's Worth the Investment",
    excerpt:
      "The difference between a decorated room and a designed room often comes down to pieces made specifically for the space. When custom is worth it, how the process works, and what to expect.",
    category: "Design Tips",
    date: "Apr 16, 2026",
    readTime: "9 min read",
    image: "/images/journal/custom-furniture.jpg",
  },
  {
    slug: "small-space-luxury",
    title: "Small Space Luxury: How to Make a Small Apartment Feel Expensive",
    excerpt:
      "Luxury isn't about square footage — it's about intention. Expert strategies for making small NYC apartments feel spacious, expensive, and effortlessly sophisticated.",
    category: "Design Tips",
    date: "Apr 14, 2026",
    readTime: "8 min read",
    image: "/images/journal/small-space-luxury.jpg",
  },
  {
    slug: "nyc-townhouse-renovation",
    title: "NYC Townhouse Renovation: Designing a Complete Home in the City",
    excerpt:
      "A townhouse is the rare New York property where you control every surface. From landmark approvals to vertical flow design, here's how to make the most of that freedom.",
    category: "Project Spotlight",
    date: "Apr 12, 2026",
    readTime: "11 min read",
    image: "/images/journal/nyc-townhouse.jpg",
  },
  {
    slug: "how-to-work-with-interior-designer",
    title: "How to Work with an Interior Designer: What to Expect from Start to Finish",
    excerpt:
      "First time working with an interior designer? Learn the complete process — from initial consultation to final styling — so you know exactly what to expect.",
    category: "Client Guides",
    date: "Apr 10, 2026",
    readTime: "10 min read",
    image: "/images/journal/how-to-work-with-designer.jpg",
  },
  {
    slug: "interior-design-for-real-life",
    title: "Interior Design for Real Life: Designing Homes People Actually Live In",
    excerpt:
      "The best interiors aren't just beautiful — they're livable. How luxury designers create spaces that work for real families, real messes, and real life without sacrificing beauty.",
    category: "Design Inspiration",
    date: "Apr 8, 2026",
    readTime: "8 min read",
    image: "/images/journal/interior-design-real-life.jpg",
  },
  {
    slug: "luxury-kitchen-design-nyc",
    title: "Luxury Kitchen Design NYC: From Concept to Completion",
    excerpt:
      "The ultimate guide to luxury kitchen design in NYC. Expert insights on layout, materials, appliances, and the design decisions that separate good from extraordinary.",
    category: "Design Tips",
    date: "Apr 6, 2026",
    readTime: "11 min read",
    image: "/images/journal/luxury-kitchen-nyc.jpg",
  },
  {
    slug: "interior-design-portfolio",
    title: "Interior Design Portfolio: How to Read One Like a Pro",
    excerpt:
      "Not all portfolios are created equal. Learn how to evaluate a designer's portfolio, spot the difference between styling and design, and find the right match for your project.",
    category: "Client Guides",
    date: "Apr 4, 2026",
    readTime: "7 min read",
    image: "/images/journal/interior-design-portfolio.jpg",
  },
  {
    slug: "luxury-bathroom-design-nyc",
    title: "Luxury Bathroom Design NYC: Creating a Spa-Level Retreat at Home",
    excerpt:
      "Transform your NYC bathroom into a spa-level retreat. Expert guidance on materials, layout, lighting, and the design decisions that make the biggest impact in the smallest room.",
    category: "Design Tips",
    date: "Apr 2, 2026",
    readTime: "9 min read",
    image: "/images/journal/luxury-bathroom-nyc.jpg",
  },
  {
    slug: "interior-design-consultation",
    title: "Interior Design Consultation: What to Expect and How to Prepare",
    excerpt:
      "Preparing for an interior design consultation? Learn what to bring, what questions to ask, and how to make the most of your first meeting with a luxury interior designer.",
    category: "Client Guides",
    date: "Mar 30, 2026",
    readTime: "7 min read",
    image: "/images/journal/interior-design-consultation.jpg",
  },
  {
    slug: "new-construction-interior-design",
    title: "New Construction Interior Design: Designing Before It's Built",
    excerpt:
      "The biggest mistake in new construction? Waiting until the building is finished to hire a designer. Why early involvement changes everything — and how to get it right from day one.",
    category: "Client Guides",
    date: "Mar 28, 2026",
    readTime: "9 min read",
    image: "/images/journal/new-construction.jpg",
  },
  {
    slug: "luxury-dining-room-design",
    title: "Luxury Dining Room Design: Creating the Room That Brings People Together",
    excerpt:
      "The dining room is where life happens — celebrations, conversations, and the meals that become memories. Expert guidance on designing a dining room that's both beautiful and deeply inviting.",
    category: "Design Tips",
    date: "Mar 26, 2026",
    readTime: "8 min read",
    image: "/images/journal/luxury-dining-room.jpg",
  },
  {
    slug: "interior-design-investment",
    title: "Interior Design Investment: Understanding Value vs. Cost in Luxury Design",
    excerpt:
      "The most expensive mistake isn't spending too much — it's spending on the wrong things. Where to invest, where to save, and how quality design increases your home's worth.",
    category: "Client Guides",
    date: "Mar 24, 2026",
    readTime: "10 min read",
    image: "/images/journal/interior-design-investment.jpg",
  },
  {
    slug: "fire-island-interior-design",
    title: "Fire Island Interior Design: Creating the Ultimate Beach Retreat",
    excerpt:
      "Designing for Fire Island requires specialized expertise — from salt-air material selection to off-grid logistics. How to create a beach retreat that's effortlessly relaxed and beautifully considered.",
    category: "Design Inspiration",
    date: "Mar 22, 2026",
    readTime: "9 min read",
    image: "/images/journal/fire-island.jpg",
  },
  {
    slug: "home-staging-vs-interior-design",
    title: "Luxury Home Staging vs Interior Design: What's the Difference and Why It Matters",
    excerpt:
      "Staging sells a fantasy. Design creates a reality. Understanding the difference protects your investment and ensures your home works for your actual life.",
    category: "Client Guides",
    date: "Mar 20, 2026",
    readTime: "7 min read",
    image: "/images/journal/home-staging-vs-design.jpg",
  },
  {
    slug: "luxury-outdoor-living-design",
    title: "Luxury Outdoor Living Design: Bringing Interior Design Outside",
    excerpt:
      "Outdoor spaces deserve the same design rigor as indoor ones. From rooftop terraces to pool houses, learn how to create outdoor living areas that extend your home's design language.",
    category: "Design Inspiration",
    date: "Mar 18, 2026",
    readTime: "9 min read",
    image: "/images/journal/luxury-outdoor-living.jpg",
  },
  {
    slug: "how-to-choose-interior-designer",
    title: "How to Choose an Interior Designer: Questions That Reveal the Right Match",
    excerpt:
      "Choosing an interior designer is one of the most personal hiring decisions you'll make. The questions, red flags, and evaluation criteria that help you find the perfect match.",
    category: "Client Guides",
    date: "Mar 16, 2026",
    readTime: "8 min read",
    image: "/images/journal/how-to-choose-designer.jpg",
  },
];

const categories = [
  "Project Stories",
  "Art & Collecting",
  "Materials",
  "Process",
  "Client Guides",
];

const editorialRank = new Map([
  ["behind-design-hudson-yards", 0],
  ["vintage-finds-provenance-and-patina", 1],
  ["mixing-vintage-modern-interior-design", 2],
  ["art-curation-interior-design", 3],
  ["interior-design-for-real-life", 4],
  ["luxury-outdoor-living-design", 5],
  ["custom-furniture-bespoke-design", 6],
]);

const studioNotesPosts = [...journalPosts].sort((a, b) => {
  const aRank = editorialRank.get(a.slug) ?? 100;
  const bRank = editorialRank.get(b.slug) ?? 100;

  if (aRank !== bRank) return aRank - bRank;
  if (a.category === "Client Guides" && b.category !== "Client Guides") return 1;
  if (b.category === "Client Guides" && a.category !== "Client Guides") return -1;
  return 0;
});

export default function JournalPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Journal", href: "/journal" },
        ]}
      />

      {/* Hero */}
      <section className="bg-cream-100 pt-32 pb-16 text-charcoal lg:pt-40 lg:pb-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <span className="font-label text-[10px] text-stone">
              Studio Notes
            </span>
          </div>
          <div className="lg:col-span-8">
            <h1
              aria-label="Notes on Rooms, Art and Living"
              className="font-display-xl text-5xl leading-none md:text-7xl lg:text-8xl"
            >
              <span aria-hidden="true" className="block">
                Notes on Rooms,
              </span>
              <span aria-hidden="true" className="block">
                Art & Living
              </span>
            </h1>
            <p className="mt-8 max-w-3xl font-accent text-2xl italic leading-relaxed text-charcoal/70">
              Project stories, collecting notes, material observations, and the
              design decisions that give a room its point of view.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Index */}
      <section className="bg-cream-100 pb-8 text-charcoal">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-x-8 gap-y-4 border-y border-charcoal/10 py-6">
            {categories.map((category) => (
              <span
                key={category}
                className="relative py-1 text-[10px] uppercase tracking-[0.24em] text-charcoal/52"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-charcoal py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Featured Post */}
          <Link
            href={`/journal/${studioNotesPosts[0].slug}`}
            className="group block"
          >
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="relative aspect-[16/11] overflow-hidden bg-graphite lg:col-span-7">
                <Image
                  src={studioNotesPosts[0].image}
                  alt={studioNotesPosts[0].title}
                  fill
                  priority
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
                <div className="flex items-center gap-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-gold">
                    {studioNotesPosts[0].category}
                  </span>
                  <span className="text-cream-200/30">•</span>
                  <span className="text-xs text-cream-200/50">
                    {studioNotesPosts[0].readTime}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-4xl leading-tight text-cream-100 transition-colors duration-500 group-hover:text-gold lg:text-5xl">
                  {studioNotesPosts[0].title}
                </h2>
                <p className="mt-4 text-cream-200/70">
                  {studioNotesPosts[0].excerpt}
                </p>
                <span className="mt-6 text-xs uppercase tracking-[0.2em] text-cream-200/50 transition-colors duration-500 group-hover:text-gold">
                  Read Studio Note
                </span>
              </div>
            </div>
          </Link>

          {/* Divider */}
          <div className="my-16 h-px w-full bg-cream-100/10" />

          {/* Remaining Posts */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {studioNotesPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-graphite">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold">
                      {post.category}
                    </span>
                    <span className="text-cream-200/30">•</span>
                    <span className="text-[10px] text-cream-200/50">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl leading-tight text-cream-100 transition-colors duration-500 group-hover:text-gold">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-cream-200/60 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-graphite py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <span className="font-label text-[10px] text-gold">
            Studio Notes
          </span>
          <h2 className="mt-4 font-display text-3xl text-cream-100 md:text-4xl">
            Receive occasional notes from the studio.
          </h2>
          <p className="mt-4 text-cream-200/70">
            Project stories, collecting notes, materials, and observations on
            rooms with point of view.
          </p>
          <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full border border-cream-100/20 bg-charcoal px-6 py-4 text-sm text-cream-100 placeholder:text-cream-200/40 focus:border-gold focus:outline-none sm:max-w-sm"
            />
            <button
              type="submit"
              className="btn-gold whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
