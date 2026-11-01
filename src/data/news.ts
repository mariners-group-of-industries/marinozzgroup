export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Corporate" | "Restaurant" | "Bakery" | "Franchise" | "Community";
  date: string;
  readTime: string;
  author: string;
  content: string[];
  featuredImage: string;
}

export const INITIAL_NEWS: NewsArticle[] = [
  {
    id: "1",
    slug: "marinozz-group-unveils-unified-hospitality-vision",
    title: "Marinozz Group Unveils Unified Digital Identity & Integrated Hospitality Roadmap",
    excerpt:
      "Bringing Marinozz Multicuisine Restaurant, Pantoa Sweets & Bakery, and Marinozz Confectionery PLC under one cohesive corporate umbrella.",
    category: "Corporate",
    date: "October 28, 2026",
    readTime: "4 min read",
    author: "Corporate Communications",
    featuredImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    content: [
      "In a decisive strategic leap forward, Marinozz Group—associated with the esteemed Mariners Group—has officially consolidated its multi-brand food and hospitality portfolio under a single, unified corporate ecosystem.",
      "The newly unveiled corporate structure brings together Marinozz Multicuisine Restaurant, Pantoa Sweets & Bakery, Marinozz Confectionery PLC, and Marinozz PLC into a synergistic operational network designed to optimize raw material procurement, standardize culinary excellence, and accelerate nationwide franchise expansion.",
      "'Our focus has always been anchored in integrity, exceptional taste, and modern hygienic standards,' remarked the Managing Director. 'By synchronizing our supply chain with our retail and dining touchpoints, we deliver higher value to our guests and stronger returns to our franchise partners.'",
      "The roadmap outlines ambitious expansion milestones for both dine-in gastronomic hubs and high-street sweet boutique formats over the next 24 months.",
    ],
  },
  {
    id: "2",
    slug: "pantoa-sweets-announces-expansion-program",
    title: "Pantoa Sweets & Bakery Announces Strategic Franchise Program for Key Metros",
    excerpt:
      "Entrepreneurs and investors can now apply for turnkey boutique sweet and bakery franchises with centralized daily supply support.",
    category: "Franchise",
    date: "October 14, 2026",
    readTime: "3 min read",
    author: "Franchise Development Desk",
    featuredImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Pantoa Sweets & Bakery has formally launched its highly anticipated Franchise Expansion Program, offering qualified entrepreneurs a structured entry into the booming premium confectionery sector.",
      "Unlike traditional sweet shops fraught with kitchen variance and high waste, Pantoa franchises operate on an innovative hybrid model: all primary sweets, signature syrups, and baked bases are crafted in a state-of-the-art hygienic central kitchen and dispatched via temperature-regulated fleets.",
      "Franchisees receive comprehensive location scouting support, modular architectural schematics, cloud POS integration, and extensive customer service staff onboarding.",
      "Initial franchise slots are currently open for commercial zones, high-density residential avenues, and flagship shopping arcades.",
    ],
  },
  {
    id: "3",
    slug: "marinozz-restaurant-launches-pan-asian-winter-specials",
    title: "Master Chefs at Marinozz Restaurant Introduce Seasonal Pan-Asian & Sizzler Palette",
    excerpt:
      "Guests can savor handcrafted dim sums, wok-tossed Cantonese seafood, and sizzling platters crafted using locally sourced coastal seafood.",
    category: "Restaurant",
    date: "September 30, 2026",
    readTime: "3 min read",
    author: "Executive Culinary Team",
    featuredImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Continuing its commitment to global culinary authenticity, Marinozz Multicuisine Restaurant has unveiled its new seasonal menu section celebrating vibrant Pan-Asian wok classics and theatrical smoking sizzlers.",
      "The new menu features slow-steamed crystal prawn dumplings, Kung Pao chicken tossed in imported Szechuan peppercorn glaze, and sizzler steaks presented on seasoned volcanic cast-iron stones.",
      "Every dish is executed under the watchful eye of our Executive Chef, ensuring that authentic spices, gentle marinades, and balanced heat harmonize perfectly with family dining preferences.",
      "Reservations for private dining booths and festive group tables are now open through our digital desk and WhatsApp concierge.",
    ],
  },
  {
    id: "4",
    slug: "marinozz-confectionery-upgrades-automated-baking-lines",
    title: "Marinozz Confectionery PLC Upgrades Facility to High-Precision Automated Lines",
    excerpt:
      "New automated packaging and moisture-controlled baking technologies bolster production capacity while reducing single-use packaging waste.",
    category: "Corporate",
    date: "August 19, 2026",
    readTime: "4 min read",
    author: "Operations & Quality Assurance",
    featuredImage: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Marinozz Confectionery PLC has successfully commissioned a cutting-edge upgrade at its central manufacturing facility, introducing automated dough depositors and robotic moisture-controlled baking tunnels.",
      "The investment triples hourly packaging throughput for the company's popular butter cookies, toasted rusks, and dry cakes while enhancing shelf-life stability without synthetic preservatives.",
      "Additionally, the upgraded line integrates energy-efficient heat exchangers, reducing the facility's carbon footprint by an estimated 18% over the coming fiscal year.",
    ],
  },
];
