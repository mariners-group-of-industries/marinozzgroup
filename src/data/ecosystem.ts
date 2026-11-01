export interface EcosystemPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: string;
}

export const ECOSYSTEM_PILLARS: EcosystemPillar[] = [
  {
    number: "01",
    title: "Ethical Procurement & Raw Sourcing",
    subtitle: "From Grassland Dairy & Verified Agricultural Growers",
    description:
      "We bypass middlemen to source 100% pure cow's milk from vetted dairy cooperatives, direct spices from heritage cultivation zones, and fresh seafood and meats subject to strict veterinary and Halal inspection.",
    tags: ["Traceable Origins", "Direct Dairy Sourcing", "Zero Adulteration"],
    icon: "Wheat",
  },
  {
    number: "02",
    title: "Centralized Production & Food Science",
    subtitle: "Precision Engineering Meets Artisanal Recipes",
    description:
      "Our state-of-the-art central kitchens and confectionery manufacturing plants standardize batch consistency, moisture control, and thermal baking curves while preserving authentic artisanal flavors.",
    tags: ["Automated Baking", "Microbiology Lab", "Standard Operating Procedures"],
    icon: "Factory",
  },
  {
    number: "03",
    title: "Cold-Chain Logistics & Distribution",
    subtitle: "Unbroken Freshness from Production to Counter",
    description:
      "Temperature-regulated delivery fleets and rapid logistics guarantee that delicate dairy sweets, fresh bakery goods, and restaurant ingredients reach destination outlets within hours of preparation.",
    tags: ["Temperature Monitored Fleet", "Daily Route Dispatch", "Smart Warehousing"],
    icon: "Truck",
  },
  {
    number: "04",
    title: "Multi-Format Retail & Dining Touchpoints",
    subtitle: "Curated Experiences Tailored for Every Occasion",
    description:
      "From full-service fine dining multicuisine restaurants and premium high-street sweet boutiques to rapid grab-and-go kiosk models, we engage diverse customer touchpoints with consistent brand warmth.",
    tags: ["Fine Dining", "Sweet Boutiques", "Express Transit Kiosks"],
    icon: "Store",
  },
  {
    number: "05",
    title: "Franchise Partnership & Governance",
    subtitle: "Scalable Turnkey Business Models Backed by Mariners Heritage",
    description:
      "We provide partners with complete architectural blueprints, comprehensive staff hospitality training, POS supply systems, and centralized inventory support—ensuring predictable, profitable operations.",
    tags: ["Turnkey Architecture", "Staff Academy", "Guaranteed Supply"],
    icon: "Handshake",
  },
];

export const CERTIFICATIONS = [
  {
    title: "HACCP Principles",
    description: "Systematic preventative approach to biological, chemical, and physical hazards across all handling stages.",
  },
  {
    title: "ISO 22000 Alignment",
    description: "International standard food safety management protocols integrated across our production and dining facilities.",
  },
  {
    title: "100% Halal Assured",
    description: "Strict adherence to halal protocols for all meat procurement, oil processing, and confectionery emulsifiers.",
  },
  {
    title: "Daily Lab Quality Checks",
    description: "Regular testing of fat percentages, microbial safety, oil TPM indices, and strict water filtration monitoring.",
  },
];
