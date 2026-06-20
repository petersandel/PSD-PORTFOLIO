// Site configuration and constants
export const siteConfig = {
  name: "Peter Sandel Interior Design",
  description:
    "Peter Sandel creates refined, layered interiors for high-end residences in New York, the Hamptons, and select destinations. The studio is known for artful rooms, vintage and contemporary tension, and deeply personal design.",
  url: "https://petersandel.com",
  ogImage: "/og-image.jpg",
  links: {
    instagram: "https://instagram.com/petersandeldesign",
    pinterest: "https://pinterest.com/petersandeldesign",
    shop: "https://provenanceandpatina.com",
  },
  contact: {
    email: "peter@petersandel.com",
    phone: "(646) 490-5668",
    address: "One Union Square West, Suite 814, New York, NY 10003",
  },
  calendly: {
    url: "https://calendly.com/petersandel/consultation",
  },
  designConsultation: {
    bookingPath: "/services/design-consultation",
    price: 595,
    currency: "USD",
  },
  minimumBudget: 250000,
};

export const navigation = [
  { name: "Work", href: "/work" },
  { name: "Studio", href: "/studio" },
  { name: "Services", href: "/services" },
  { name: "Shop", href: "https://provenanceandpatina.com", external: true },
  { name: "Inquire", href: "/contact" },
];

export const services = [
  {
    title: "Full-Service Interior Design",
    description:
      "Comprehensive residential design from concept to completion, including space planning, materials, custom furnishings, art placement, procurement, and installation.",
    features: [
      "Concept Development",
      "Space Planning",
      "Material & Finish Selection",
      "Custom Furniture Design",
      "Art Curation",
      "Project Management",
    ],
  },
  {
    title: "Architectural Collaboration",
    description:
      "Close partnership with architects, builders, and trades so the interior point of view is integrated from the earliest stages of planning.",
    features: [
      "Floor Plan Consultation",
      "Interior Architecture",
      "Custom Millwork",
      "Lighting Design",
      "Hardware Selection",
    ],
  },
  {
    title: "60-Minute Design Consultation",
    description:
      "A focused $595 consultation for color selections, artwork choices, furniture configuration, room editing, and practical design advice.",
    features: [
      "Design Direction",
      "Color Consultation",
      "Artwork Selection",
      "Furniture Layout",
      "Styling Guidance",
    ],
  },
];

export const projectCategories = [
  "All",
  "Residential",
  "Commercial",
];

export const testimonials = [
  {
    quote: "Peter has an extraordinary ability to translate our lifestyle into spaces that feel both luxurious and deeply personal. Every room tells a story.",
    author: "Private Residence, Malibu",
    project: "Coastal Modern Estate",
  },
  {
    quote: "The attention to detail and unwavering commitment to quality exceeded our highest expectations. A true artist of interior design.",
    author: "Private Residence, Beverly Hills",
    project: "Mediterranean Revival",
  },
  {
    quote: "Working with Peter transformed not just our home, but how we experience daily life. His vision is unparalleled.",
    author: "Private Residence, Aspen",
    project: "Mountain Contemporary",
  },
];

export const awards = [
  { year: "2025", title: "Architectural Digest Top 100", category: "Interior Design" },
  { year: "2024", title: "Elle Decor A-List", category: "Residential Design" },
  { year: "2024", title: "Best of Houzz", category: "Design Excellence" },
  { year: "2023", title: "Interior Design Hall of Fame", category: "Emerging Designer" },
];
