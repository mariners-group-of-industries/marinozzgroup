export interface Brand {
  id: string;
  name: string;
  shortName: string;
  logo: string;
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
    tagline: "A Symphony of Global Flavours, Served with Maritime Warmth",
    category: "Fine Dining & Multicuisine Hospitality",
    href: "/marinozz-restaurant",
    badge: "Flagship Dining",
    accentColor: "red",
    overview:
      "Marinozz Multicuisine Restaurant brings together the culinary traditions of Continental, Pan-Asian, authentic Mughlai, sizzling delicacies, and artisanal desserts under one sophisticated roof. Designed for discerning families, corporate gatherings, and food lovers who value uncompromising taste, hygienic preparation, and attentive service.",
    highlights: [
      "Master Chef Curated Menus across 6 international cuisines",
      "Sophisticated interior ambiance with private dining zones",
      "Executive banquet & celebration hall for up to 150 guests",
      "Transparent hygienic kitchen with strict food safety protocol",
      "Dedicated mocktail bar & signature live tandoor counter",
    ],
    operationalStatus: "Active & Welcoming Guests Daily (12:00 PM – 11:00 PM)",
    stats: [
      { label: "Cuisine Styles", value: "6+" },
      { label: "Signature Recipes", value: "120+" },
      { label: "Seating Capacity", value: "180+" },
      { label: "Guest Satisfaction", value: "98%" },
    ],
  },
  {
    id: "pantoa-sweets-bakery",
    name: "Pantoa Sweets & Bakery",
    shortName: "Pantoa Sweets",
    logo: "/logos/marinozz-confectionery.png",
    tagline: "Timeless Bengali Confectionery Crafted with Modern Hygienic Mastery",
    category: "Artisanal Sweets, Bakery & Confectionery",
    href: "/pantoa-sweets-bakery",
    badge: "Heritage & Modern Bakery",
    accentColor: "gold",
    overview:
      "Pantoa Sweets & Bakery bridges authentic traditional sweetmaking with contemporary European pastry craft. Made exclusively with 100% pure cow's milk, certified ingredients, and zero adulteration, Pantoa is fast becoming the gold standard for daily indulgence, wedding celebrations, and premium corporate gifting.",
    highlights: [
      "Signature melt-in-mouth Pantoa, Rasmalai & pure ghee Sandesh",
      "Artisanal European breads, sourdoughs, and flaky morning pastries",
      "Bespoke designer celebration cakes & handcrafted chocolates",
      "Luxury corporate gift hampers & customized wedding packaging",
      "Centralized hygienic production with cold-chain distribution",
    ],
    operationalStatus:
      "Flagship Central Kitchen Active | Retail Outlets & Express Kiosks Expanding Nationwide",
    stats: [
      { label: "Sweet Varieties", value: "45+" },
      { label: "Bakery Delights", value: "60+" },
      { label: "Pure Milk Daily", value: "1,500L+" },
      { label: "Planned Outlets", value: "25+" },
    ],
  },
  {
    id: "marinozz-confectionery-plc",
    name: "Marinozz Confectionery PLC",
    shortName: "Marinozz Confectionery",
    logo: "/logos/marinozz-confectionery.png",
    tagline: "Industrial Food Production Built on Precision, Purity & Scale",
    category: "Commercial Food Manufacturing & FMCG",
    href: "/brands#confectionery",
    badge: "Industrial Manufacturing",
    accentColor: "red",
    overview:
      "Marinozz Confectionery PLC spearheads the industrial packaged food operations of the group. With modern semi-automated baking lines and food processing plants, the entity produces high-grade biscuits, cookies, dry cakes, toast, wafers, and confectionery items for mass distribution across local retail and regional trade channels.",
    highlights: [
      "ISO 22000 & HACCP aligned food manufacturing facilities",
      "Automated continuous baking ovens and nitrogen-flushed packaging",
      "Stringent quality lab checking moisture, microbiological safety & shelf life",
      "High-capacity bulk manufacturing serving modern trade and retail partners",
      "Eco-conscious production with minimal ingredient waste",
    ],
    operationalStatus:
      "Central Manufacturing Unit Active | Institutional & Wholesale Supply Channel Operational",
    stats: [
      { label: "Daily Output", value: "5 Tons+" },
      { label: "Retail SKUs", value: "24+" },
      { label: "Quality Checks", value: "18 Points" },
      { label: "Supply Reach", value: "Growing" },
    ],
  },
  {
    id: "marinozz-plc",
    name: "Marinozz PLC",
    shortName: "Marinozz PLC",
    logo: "/logos/marinozz-plc.png",
    tagline: "Corporate Governance, Strategic Supply Chain & Hospitality Investment",
    category: "Corporate Holding, Logistics & Strategic Trade",
    href: "/brands#marinozz-plc",
    badge: "Corporate & Supply Backbone",
    accentColor: "blue",
    overview:
      "Marinozz PLC functions as the corporate management engine and strategic supply chain spine of the group. Associated with the distinguished Mariners Group, Marinozz PLC handles bulk commodity procurement, cold chain logistics, commercial real estate lease management, and institutional partnerships that power all retail brands.",
    highlights: [
      "Centralized procurement securing premium ingredients directly from verified farms",
      "Temperature-controlled fleet ensuring zero-break cold chain logistics",
      "Corporate compliance, financial governance, and brand licensing administration",
      "Franchise incubator providing turnkey business kits, SOPs, and POS systems",
      "Backed by the maritime legacy, discipline, and trust of Mariners Group",
    ],
    operationalStatus: "Group Headquarters & Supply Network Active",
    stats: [
      { label: "Logistics Hubs", value: "Central" },
      { label: "Direct Sourcing", value: "100%" },
      { label: "Group Entities", value: "4 Brands" },
      { label: "Ecosystem Integrity", value: "Grade A" },
    ],
  },
];
