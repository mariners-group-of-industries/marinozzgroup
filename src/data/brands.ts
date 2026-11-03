export interface Brand {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  image: string;
  tagline: string;
  category: string;
  href: string;
  badge: string;
  accentColor: "red" | "blue" | "gold";
  overview: string;
  highlights: string[];
  operationalStatus: string;
  stats: { label: string; value: string }[];
}

export const BRANDS: Brand[] = [
  {
    id: "marinozz-restaurant",
    name: "Marinozz Multicuisine Restaurant",
    shortName: "Marinozz Restaurant",
    logo: "/logos/marinozz-restaurant.png",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    tagline: "Fine Dining, Sizzlers, Pan-Asian & Royal Dum Biryani",
    category: "Multicuisine Fine Dining",
    href: "/marinozz-restaurant",
    badge: "Flagship Dining",
    accentColor: "red",
    overview: "Fine dining & banquets at MG SAM Center.",
    highlights: [
      "180+ Seating Capacity & VIP Private Dining Rooms",
      "Executive Banquet Hall (Up to 150 guests)",
      "Continental, Pan-Asian & Mughlai Gastronomy",
      "Hygienic Transparent Live Kitchen",
    ],
    operationalStatus: "Open Daily 12:00 PM – 11:00 PM",
    stats: [
      { label: "Cuisines", value: "6+" },
      { label: "Capacity", value: "180+" },
      { label: "Dishes", value: "120+" },
      { label: "Halal", value: "100%" },
    ],
  },
  {
    id: "pantoa-sweets-bakery",
    name: "Pantoa Sweets & Bakery",
    shortName: "Pantoa Sweets",
    logo: "/logos/pantoa-sweets.jpg",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    tagline: "100% Pure Cow Dairy Sweets & European Bakery",
    category: "Artisanal Sweets & Bakery",
    href: "/pantoa-sweets-bakery",
    badge: "Artisanal Confectionery",
    accentColor: "gold",
    overview: "Authentic Bengali sweets & morning bakery goods.",
    highlights: [
      "Royal Pantoa, Rasmalai & Pure Ghee Sandesh",
      "100% Farm-Fresh Pure Cow Milk Sourcing",
      "European Cheesecakes, Croissants & Sourdough",
      "Bespoke Corporate Gift Hampers & Wedding Boxes",
    ],
    operationalStatus: "Open Daily 08:00 AM – 10:30 PM",
    stats: [
      { label: "Sweets", value: "45+" },
      { label: "Bakes", value: "60+" },
      { label: "Dairy", value: "100% Pure" },
      { label: "Expansion", value: "25+ Outlets" },
    ],
  },
  {
    id: "marinozz-confectionery-plc",
    name: "Marinozz Confectionery PLC",
    shortName: "Marinozz Confectionery",
    logo: "/logos/marinozz-confectionery.png",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80",
    tagline: "Commercial Baking, Biscuits & FMCG Food Manufacturing",
    category: "Industrial Food Manufacturing",
    href: "/brands#confectionery",
    badge: "Industrial FMCG",
    accentColor: "red",
    overview: "High-volume packaged baking & distribution.",
    highlights: [
      "ISO 22000 & HACCP Compliant Industrial Production",
      "Semi-Automated Continuous Baking Ovens",
      "24+ Packaged Biscuits, Cookies, Toast & Wafers",
      "National Wholesale & Retail Modern Trade Supply",
    ],
    operationalStatus: "Active Industrial Unit & Wholesale Logistics",
    stats: [
      { label: "Capacity", value: "5+ Tons/Day" },
      { label: "Lineup", value: "24+ SKUs" },
      { label: "Standard", value: "ISO 22000" },
      { label: "Logistics", value: "Nationwide" },
    ],
  },
  {
    id: "marinozz-plc",
    name: "Marinozz PLC",
    shortName: "Marinozz PLC",
    logo: "/logos/marinozz-plc.png",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    tagline: "Supply Chain Backbone, Cold Chain & Corporate Governance",
    category: "Corporate Holding & Logistics",
    href: "/brands#marinozz-plc",
    badge: "Corporate Backbone",
    accentColor: "blue",
    overview: "Strategic supply chain & franchise incubation.",
    highlights: [
      "Strategic Association with Mariners Group",
      "Direct Farm Dairy Procurement Network",
      "Temperature-Regulated Cold-Chain Fleet",
      "Turnkey Franchise Support & Quality Audit",
    ],
    operationalStatus: "Corporate HQ at MG SAM Center, Mohakhali",
    stats: [
      { label: "Fleet", value: "Cold-Chain" },
      { label: "Sourcing", value: "100% Direct" },
      { label: "Audits", value: "Daily QA" },
      { label: "Trust", value: "Mariners" },
    ],
  },
];
