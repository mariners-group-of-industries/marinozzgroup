export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  serving: string;
  tag?: "Chef Special" | "Bestseller" | "Signature" | "Healthy Choice";
  spiciness?: number;
  image?: string;
}

export interface MenuCategory {
  category: string;
  tagline: string;
  items: MenuItem[];
}

export interface PantoaProductItem {
  id: string;
  name: string;
  unit: string;
  price: number;
  badge?: string;
}

export interface PantoaCategory {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  items: string[];
  products: PantoaProductItem[];
}

export const RESTAURANT_MENU: MenuCategory[] = [
  {
    category: "Signature Sizzlers & Grills",
    tagline: "Served piping hot on smoking seasoned iron with fresh sauteed buttered greens",
    items: [
      {
        id: "siz-1",
        name: "Marinozz Heritage Mixed Meat Sizzler",
        description:
          "Tender grilled chicken breast, tenderloin steak medallions, and butter-garlic prawns served over fragrant herb butter rice with peppercorn reduction.",
        price: 1250,
        serving: "Serves 1–2",
        tag: "Chef Special",
        spiciness: 1,
      },
      {
        id: "siz-2",
        name: "Smoking BBQ Chicken Sizzler",
        description:
          "Marinated boneless chicken infused with smokey oak chip BBQ sauce, served with crispy potato wedges and caramelized butter onions.",
        price: 890,
        serving: "Serves 1",
        tag: "Bestseller",
        spiciness: 2,
      },
      {
        id: "siz-3",
        name: "Coastal Jumbo Prawn Sizzler",
        description:
          "Fresh Bay of Bengal tiger prawns tossed in lemon-herb butter glaze with steamed seasonal florets and saffron rice.",
        price: 1380,
        serving: "Serves 1–2",
        tag: "Signature",
        spiciness: 1,
      },
      {
        id: "siz-4",
        name: "Chargrilled Prime Ribeye Steak Platter",
        description:
          "Flame-seared premium halal beef ribeye with roasted garlic mash, grilled asparagus, and signature mushroom jus.",
        price: 1650,
        serving: "300g Cut",
        tag: "Chef Special",
      },
    ],
  },
  {
    category: "Pan-Asian Delicacies",
    tagline: "Wok-tossed perfection honoring authentic Cantonese, Thai and Szechuan traditions",
    items: [
      {
        id: "asn-1",
        name: "Szechuan Firecracker Chicken",
        description:
          "Crispy chicken morsels wok-glazed with whole red chilies, roasted cashews, and aromatic scallions.",
        price: 720,
        serving: "Shares 2–3",
        spiciness: 3,
        tag: "Bestseller",
      },
      {
        id: "asn-2",
        name: "Thai Basil Prawns (Pad Krapow)",
        description:
          "Juicy prawns stir-fried with fragrant holy basil, bird's eye chilies, and sweet oyster garlic reduction.",
        price: 880,
        serving: "Shares 2–3",
        spiciness: 2,
      },
      {
        id: "asn-3",
        name: "Cantonese Steamed Dim Sum Platter",
        description:
          "Handcrafted crystal wrappers filled with spiced minced chicken, shiitake mushrooms, and fresh herbs, served with chili-garlic oil.",
        price: 640,
        serving: "8 Pieces",
        tag: "Signature",
      },
      {
        id: "asn-4",
        name: "Authentic Yangchow Fried Rice",
        description:
          "Wok-breath jasmine rice folded with roasted chicken, sweet corn, farm eggs, prawns, and garden peas.",
        price: 590,
        serving: "Shares 2–3",
        tag: "Healthy Choice",
      },
    ],
  },
  {
    category: "Mughlai Heritage & Dum Biryani",
    tagline: "Slow-cooked aromatics celebrating centuries of royal culinary artistry",
    items: [
      {
        id: "mug-1",
        name: "Royal Lucknowi Mutton Dum Biryani",
        description:
          "Long-grain aged basmati rice layered with succulent goat meat, saffron milk, and royal kewra water, sealed with dough and slow-steamed on low ember.",
        price: 950,
        serving: "Royal Handi (Serves 2)",
        tag: "Chef Special",
        spiciness: 2,
      },
      {
        id: "mug-2",
        name: "Murgh Afghani Creamy Kebab",
        description:
          "Boneless chicken marinated in strained yogurt, cashew cream, green cardamom, and mild aromatic spices, charred gently in the clay tandoor.",
        price: 740,
        serving: "6 Pieces",
        tag: "Bestseller",
        spiciness: 1,
      },
      {
        id: "mug-3",
        name: "Marinozz Overnight Dal Makhani",
        description:
          "Slow-simmered whole black lentils cooked 14 hours with churned white butter and sun-ripened tomato coulis.",
        price: 520,
        serving: "Shares 2–3",
        tag: "Signature",
      },
      {
        id: "mug-4",
        name: "Kashmiri Mutton Rogan Josh",
        description:
          "Tender pieces of braised mutton infused with vibrant Kashmiri deghi mirch and aromatic fennel seed infusion.",
        price: 920,
        serving: "Shares 2–3",
        tag: "Signature",
        spiciness: 2,
      },
    ],
  },
  {
    category: "Artisanal Mocktails & Refreshers",
    tagline: "Fresh botanical blends and invigorating fruit concoctions crafted to order",
    items: [
      {
        id: "mck-1",
        name: "Oceanic Marinozz Breeze",
        description:
          "Blue citrus extract, muddled garden mint, freshly squeezed lime, and chilled effervescent soda.",
        price: 340,
        serving: "350 ml",
        tag: "Signature",
      },
      {
        id: "mck-2",
        name: "Smokey Green Mango Panna",
        description:
          "Slow-roasted raw green mango puree shaken with pink rock salt, toasted cumin, and mint sprigs.",
        price: 290,
        serving: "350 ml",
        tag: "Healthy Choice",
      },
      {
        id: "mck-3",
        name: "Wild Strawberry Berry Mojito",
        description:
          "Crushed wild strawberries, fresh mint leaves, cane reduction, and sparkling mineral water.",
        price: 360,
        serving: "350 ml",
        tag: "Bestseller",
      },
      {
        id: "mck-4",
        name: "Royal Saffron Pistachio Badam Lassi",
        description:
          "Thick churned sweet yogurt blended with Iranian saffron strands, crushed pistachios, and roasted almonds.",
        price: 380,
        serving: "350 ml",
        tag: "Chef Special",
      },
    ],
  },
];

export const PANTOA_CATEGORIES: PantoaCategory[] = [
  {
    title: "Signature Bengali Sweets",
    subtitle: "100% Pure Cow Milk Chhana",
    description:
      "Prepared every dawn with 100% natural chhana from audited dairy farms and pure organic cardamom.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    items: [
      "Royal Pantoa in Golden Saffron Syrup",
      "Spongy Diamond Rasgulla",
      "Kheer Mohan & Malai Chomchom",
      "Classic Clay Pot Mishti Doi",
      "Creamy Pistachio Rasmalai",
    ],
    products: [
      {
        id: "pnt-1",
        name: "Royal Pantoa in Golden Saffron Syrup",
        unit: "1 kg Box",
        price: 680,
        badge: "Signature",
      },
      {
        id: "pnt-2",
        name: "Spongy Diamond Rasgulla",
        unit: "1 kg Box",
        price: 580,
        badge: "Bestseller",
      },
      {
        id: "pnt-3",
        name: "Kheer Mohan & Malai Chomchom",
        unit: "1 kg Box",
        price: 740,
      },
      {
        id: "pnt-4",
        name: "Classic Clay Pot Mishti Doi",
        unit: "1 kg Clay Handi",
        price: 460,
        badge: "Daily Fresh",
      },
      {
        id: "pnt-5",
        name: "Creamy Pistachio Rasmalai",
        unit: "1 kg Box",
        price: 820,
        badge: "Chef Special",
      },
    ],
  },
  {
    title: "Pure Ghee Delicacies & Sandesh",
    subtitle: "Country Cow Ghee & Zero Starch",
    description:
      "Crafted strictly with pure country cow ghee and reduced milk without synthetic starch or artificial colors.",
    image:
      "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=800&q=80",
    items: [
      "Nolen Gur Jalbhora Sandesh (Seasonal Special)",
      "Kaju Katli with Edible Silver Foil",
      "Motichoor Pure Ghee Laddu",
      "Besan Gond Ladoo & Pista Barfi",
    ],
    products: [
      {
        id: "pnt-6",
        name: "Nolen Gur Jalbhora Sandesh",
        unit: "500g Box",
        price: 590,
        badge: "Heritage",
      },
      {
        id: "pnt-7",
        name: "Kaju Katli with Edible Silver Foil",
        unit: "500g Box",
        price: 750,
        badge: "Premium",
      },
      {
        id: "pnt-8",
        name: "Motichoor Pure Ghee Laddu",
        unit: "1 kg Box",
        price: 690,
        badge: "Pure Ghee",
      },
      {
        id: "pnt-9",
        name: "Pistachio Mawa Barfi",
        unit: "500g Box",
        price: 540,
      },
    ],
  },
  {
    title: "Modern European Bakery & Pastries",
    subtitle: "Artisanal Morning Bakes",
    description:
      "Delicate layered puff pastries, rich cheesecakes, and morning artisanal breads baked fresh throughout the day.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    items: [
      "New York Baked Cheesecake Slice",
      "Belgian Dark Chocolate Mousse Cake",
      "Butter Flaky Morning Croissant",
      "Fresh Fruit Tartlets with Vanilla Custard",
      "Artisan Multigrain Hearth Loaf",
    ],
    products: [
      {
        id: "pnt-10",
        name: "New York Baked Cheesecake",
        unit: "2 Slices Pack",
        price: 580,
        badge: "Bestseller",
      },
      {
        id: "pnt-11",
        name: "Belgian Dark Chocolate Mousse Cake",
        unit: "1 kg Whole Cake",
        price: 1650,
        badge: "Signature",
      },
      {
        id: "pnt-12",
        name: "Butter Flaky Morning Croissants",
        unit: "Box of 4",
        price: 520,
      },
      {
        id: "pnt-13",
        name: "Artisan Multigrain Sourdough Loaf",
        unit: "500g Loaf",
        price: 320,
        badge: "Healthy",
      },
    ],
  },
  {
    title: "Celebration Cakes & Custom Gifting",
    subtitle: "Corporate & Festive Hampers",
    description:
      "Bespoke tier cakes for weddings and curated gift boxes designed for executive corporate relationships.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    items: [
      "Wedding & Anniversary Tiered Celebration Cakes",
      "Custom Corporate Heritage Gift Hampers",
      "Festive Eid & Pohela Boishakh Assortment Boxes",
      "Handmade Belgian Truffle & Dry Fruit Boxes",
    ],
    products: [
      {
        id: "pnt-14",
        name: "Executive Corporate Heritage Gift Hamper",
        unit: "1.5 kg Luxury Box",
        price: 1850,
        badge: "Corporate Bestseller",
      },
      {
        id: "pnt-15",
        name: "Royal Festive Sweet & Dry Fruit Assortment",
        unit: "1 kg Gift Box",
        price: 1350,
        badge: "Gift Ready",
      },
      {
        id: "pnt-16",
        name: "Custom Celebration Fondant Cake",
        unit: "1.5 kg Custom Design",
        price: 2400,
      },
      {
        id: "pnt-17",
        name: "Assorted Savory & Sweet High-Tea Box",
        unit: "10 Guest Pack",
        price: 2200,
      },
    ],
  },
];
