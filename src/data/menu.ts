export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  tag?: "Chef Special" | "Bestseller" | "Signature" | "Healthy Choice";
  spiciness?: number;
}

export interface MenuCategory {
  category: string;
  tagline: string;
  items: MenuItem[];
}

export const RESTAURANT_MENU: MenuCategory[] = [
  {
    category: "Signature Sizzlers & Grills",
    tagline: "Served piping hot on smoking seasoned iron with fresh sauteed buttered greens",
    items: [
      {
        name: "Marinozz Heritage Mixed Meat Sizzler",
        description: "Tender grilled chicken breast, tenderloin steak medallions, and butter-garlic prawns served over fragrant herb butter rice with peppercorn reduction.",
        tag: "Chef Special",
      },
      {
        name: "Smoking BBQ Chicken Sizzler",
        description: "Marinated boneless chicken infused with smokey oak chip BBQ sauce, served with crispy potato wedges and caramelized butter onions.",
        tag: "Bestseller",
      },
      {
        name: "Coastal Jumbo Prawn Sizzler",
        description: "Fresh Bay of Bengal tiger prawns tossed in lemon-herb butter glaze with steamed seasonal florets.",
        tag: "Signature",
      },
    ],
  },
  {
    category: "Pan-Asian Delicacies",
    tagline: "Wok-tossed perfection honoring authentic Cantonese, Thai and Szechuan traditions",
    items: [
      {
        name: "Szechuan Firecracker Chicken",
        description: "Crispy chicken morsels wok-glazed with whole red chilies, roasted cashews, and aromatic scallions.",
        spiciness: 3,
        tag: "Bestseller",
      },
      {
        name: "Thai Basil Prawns (Pad Krapow)",
        description: "Juicy prawns stir-fried with fragrant holy basil, bird's eye chilies, and sweet oyster garlic reduction.",
        spiciness: 2,
      },
      {
        name: "Cantonese Steamed Dim Sum Platter",
        description: "Handcrafted crystal wrappers filled with spiced minced chicken, shiitake mushrooms, and fresh herbs, served with chili-garlic oil.",
        tag: "Signature",
      },
      {
        name: "Authentic Yangchow Fried Rice",
        description: "Wok-breath jasmine rice folded with shredded chicken, sweet corn, eggs, and garden peas.",
      },
    ],
  },
  {
    category: "Mughlai Heritage & Dum Biryani",
    tagline: "Slow-cooked aromatics celebrating centuries of royal culinary artistry",
    items: [
      {
        name: "Royal Lucknowi Mutton Dum Biryani",
        description: "Long-grain aged basmati rice layered with succulent goat meat, saffron milk, and royal kewra water, sealed with dough and slow-steamed on low ember.",
        tag: "Chef Special",
      },
      {
        name: "Murgh Afghani Creamy Kebab",
        description: "Boneless chicken marinated in strained yogurt, cashew cream, green cardamom, and mild aromatic spices, charred gently in the tandoor.",
        tag: "Bestseller",
      },
      {
        name: "Marinozz Dal Makhani",
        description: "Slow-simmered whole black lentils cooked overnight with churned white butter and sun-ripened tomato coulis.",
      },
      {
        name: "Kashmiri Rogan Josh",
        description: "Tender pieces of braised mutton infused with vibrant Kashmiri deghi mirch and aromatic fennel seed infusion.",
        tag: "Signature",
      },
    ],
  },
  {
    category: "Artisanal Mocktails & Refreshers",
    tagline: "Fresh botanical blends and invigorating fruit concoctions crafted to order",
    items: [
      {
        name: "Oceanic Marinozz Breeze",
        description: "Curacao citrus extract, muddled garden mint, freshly squeezed lime, and chilled effervescent soda.",
        tag: "Signature",
      },
      {
        name: "Smokey Green Mango Panna",
        description: "Slow-roasted raw green mango puree shaken with pink rock salt, toasted cumin, and mint sprigs.",
      },
      {
        name: "Virgin Berry Mojito",
        description: "Crushed wild strawberries, fresh mint leaves, cane reduction, and sparkling mineral water.",
      },
    ],
  },
];

export const PANTOA_CATEGORIES = [
  {
    title: "Signature Bengali Sweets",
    description: "Prepared every dawn with 100% natural chhana from local dairy and pure organic cardamom.",
    items: [
      "Royal Pantoa in Golden Saffron Syrup",
      "Spongy Diamond Rasgulla",
      "Kheer Mohan & Malai Chomchom",
      "Classic Clay Pot Mishti Doi",
      "Creamy Pistachio Rasmalai",
    ],
  },
  {
    title: "Pure Ghee Delicacies & Sandesh",
    description: "Crafted strictly with pure country cow ghee and reduced milk without synthetic starch.",
    items: [
      "Nolen Gur Jalbhora Sandesh (Seasonal Special)",
      "Kaju Katli with Edible Silver Foil",
      "Motichoor Pure Ghee Laddu",
      "Besan Gond Ladoo & Pista Barfi",
    ],
  },
  {
    title: "Modern European Bakery & Pastries",
    description: "Delicate layered puff pastries, rich cheesecakes, and morning artisanal breads.",
    items: [
      "New York Baked Cheesecake Slice",
      "Belgian Dark Chocolate Mousse Cake",
      "Butter Flaky Morning Croissant",
      "Fresh Fruit Tartlets with Vanilla Custard",
      "Artisan Multigrain Hearth Loaf",
    ],
  },
  {
    title: "Celebration Cakes & Custom Gifting",
    description: "Bespoke tier cakes for weddings and curated gift boxes for corporate relationships.",
    items: [
      "Wedding 3-Tier Fondant Fantasy",
      "Custom Corporate Heritage Gift Hampers",
      "Festive Diwali & Eid Sweet Assortment Boxes",
      "Handmade Belgian Truffle Collections",
    ],
  },
];
