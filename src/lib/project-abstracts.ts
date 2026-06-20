export type ProjectAbstract = {
  title: string;
  paragraphs: string[];
  meta: {
    label: string;
    value: string;
  }[];
};

export const projectAbstractsBySlug: Record<string, ProjectAbstract> = {
  "head-of-the-harbor": {
    title: "Head of the Harbor",
    paragraphs: [
      "This Long Island estate is located in the Village of Head of the Harbor. A full-scale rebuild, the home was designed from the inside out with architecture, interiors, custom details, and furnishings considered as one complete environment.",
      "Putting together the right team for a project of this magnitude required a collaborative spirit, client synchronicity, and a shared commitment to excellence.",
    ],
    meta: [
      {
        label: "Location",
        value: "Head of the Harbor, Long Island, New York",
      },
      {
        label: "Scope",
        value:
          "Full-scale interior design and renovation, space planning, custom furniture design, architectural finishes, custom lighting design, custom millwork, construction management, audio visual management, art curation, accessories, and styling",
      },
    ],
  },
  houston: {
    title: "North Boulevard",
    paragraphs: [
      "Located in the heart of Houston's Museum District, this classic Georgian home was originally built in 1925. Having already undergone previous additions and renovations, the residence was personalized to better support the needs of the family and reflect their personal style.",
      "In addition to cosmetic updates in the kitchen, PSD reconfigured the primary suite and fully built out the space above the four-car garage to accommodate visiting family and guests. The guest suite is now equipped with an eat-in kitchenette and full-size bath.",
    ],
    meta: [
      {
        label: "Location",
        value: "Houston, Texas",
      },
      {
        label: "Scope",
        value:
          "Full-scale interior design and renovation, space planning, custom furniture design, architectural finishes, custom millwork, construction management, accessories, and styling",
      },
      {
        label: "Photography",
        value: "Lisa Petrole",
      },
    ],
  },
  "hudson-yards": {
    title: "Hudson Yards",
    paragraphs: [
      "A southern bachelor hired PSD to fully furnish this two-bedroom condominium from the ground up in the heart of Hudson Yards. Designed and developed alongside the evolution of Thomas Heatherwick's Vessel and The Shed, the residence sits above both architectural landmarks as well as the beauty of the High Line.",
      "The project exemplifies the holistic approach used to bring every room to life. By bringing the outside in, the surroundings became a launching point for design inspiration. The blue-green gleam of adjacent skyscrapers influenced fabric selections, while the bronzed patina of the Vessel inspired finish and accent choices.",
      "Through a considered mixture of American mid-century furniture and newer pieces, each decision was made with entertaining out-of-town guests top of mind.",
    ],
    meta: [
      {
        label: "Location",
        value: "Manhattan",
      },
      {
        label: "Scope",
        value:
          "Full-scale interior design, space planning, custom furniture design, architectural finishes, art curation, accessories, and styling",
      },
      {
        label: "Photography",
        value: "Kyle Knodell",
      },
    ],
  },
  "greenwich-west": {
    title: "Greenwich West",
    paragraphs: [
      "A young couple was eager to make this downtown high-rise condominium their first home together, despite the challenges of a global pandemic. Nestled between the West Village and Tribeca, and overlooking the Hudson River, Greenwich West offered a newly constructed setting for a deeply personal beginning.",
      "Sustainably designed and built during the Covid-19 pandemic, the project was completed largely through remote collaboration with the recently engaged clients. The result is a refined mix of old-meets-new vintage and custom-designed furniture, timeless finishes, and playful contemporary artwork.",
      "Published soon after the clients were married, Architectural Digest described the home as an optimistic look toward the future.",
    ],
    meta: [
      {
        label: "Location",
        value: "Manhattan",
      },
      {
        label: "Scope",
        value:
          "Full-scale interior design, space planning, custom furniture design, construction management, art curation, accessories, and styling",
      },
      {
        label: "Photography",
        value: "Max Burkhalter",
      },
    ],
  },
  "michigan-avenue": {
    title: "Michigan Avenue",
    paragraphs: [
      "Having returned to Chicago after living as an expat in Singapore for several years, the client once again called on PSD to assist with a new home and reentry into the United States. Perched on the 82nd floor, high above Chicago's Magnificent Mile, the 92-story luxury condominium tower was flooded with natural light and breathtaking city views.",
      "The furnishings were designed to mimic and complement the curvature of the floor-to-ceiling windows. White marble flooring served as a clean backdrop for the modern artwork and sculptures the client brought back after living abroad in Singapore.",
    ],
    meta: [
      {
        label: "Location",
        value: "Chicago, Illinois",
      },
      {
        label: "Scope",
        value:
          "Client relocation, full-scale interior design, space planning, custom furniture design, architectural finishes, art curation, accessories, and styling",
      },
      {
        label: "Photography",
        value: "Ryan McDonald",
      },
    ],
  },
  "pool-house": {
    title: "Asbury Park",
    paragraphs: [
      "Transforming this century-old garage into a state-of-the-art custom pool house was an award-winning performance, well suited for big-name Broadway clients.",
      "Having first designed their Manhattan home, this weekend escape was a quick study in understanding exactly what the clients wanted to achieve with a year-round indoor-outdoor space in Asbury Park, New Jersey.",
      "Working within the existing footprint, PSD selected architectural elements that maximized natural light while leaving enough wall space for a hideaway pocket bar and full-service kitchenette with the latest appliances tucked out of sight behind seamless panel fronts.",
      "Splashy blues and bright whites are subdued by natural elements, including a custom rattan chandelier imported from Mexico. As a nod to Broadway, inspiration came from the glamour of an old-fashioned marquee, bringing just a touch of razzle-dazzle to the space.",
    ],
    meta: [
      {
        label: "Location",
        value: "Asbury Park, New Jersey",
      },
      {
        label: "Scope",
        value:
          "Full-scale interior design and renovation, space planning, custom furniture design, architectural finishes, custom millwork, construction management, accessories, and styling",
      },
      {
        label: "Photography",
        value: "Tim Lenz",
      },
    ],
  },
  "ps-apartment": {
    title: "Peter's West Village Home",
    paragraphs: [
      "Published twice by Architectural Digest for Clever, Peter's West Village home was selected as a reader favorite and named one of the top ten home tours of 2020.",
      "The editors at AD were particularly interested in the apartment as a study in maximizing small-space living without losing the grandeur associated with more square footage. The story highlights many of the planning and layout principles that have become a PSD calling card.",
    ],
    meta: [
      {
        label: "Location",
        value: "West Village, New York City",
      },
      {
        label: "Scope",
        value:
          "Full-scale interior design, space planning, custom furniture design, architectural finishes, art curation, accessories, and styling",
      },
      {
        label: "Photography",
        value: "Kyle Knodell",
      },
    ],
  },
  "design-studio": {
    title: "The Studio",
    paragraphs: [
      "Authenticity is magnetic. When Peter developed the concept for the Manhattan studio, he wanted the space to be filled with the genuine aspects of design that help shape personal and unique interiors for clients.",
      "The feel of a drawer pull, the texture of a wall covering, the grain of wood flooring, and the hand of fabric all become more comprehensible and real when experienced together. Peter and his team regularly meet with top vendors from around the world and are motivated by a discerning eye and a passion for quality in every detail.",
    ],
    meta: [
      {
        label: "Location",
        value: "New York, New York",
      },
      {
        label: "Scope",
        value:
          "Studio interior design, custom millwork, material archive planning, furniture, art, accessories, and styling",
      },
    ],
  },
};
