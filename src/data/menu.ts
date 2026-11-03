export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  serving: string;
  image: string;
  tag?: "Chef Special" | "Bestseller" | "Signature" | "Healthy Choice";
  spiciness?: number;
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
  image: string;
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
    tagline: "Served piping hot on smoking iron with buttered greens",
    items: [
      {
        id: "siz-1",
        name: "Marinozz Heritage Mixed Meat Sizzler",
        description: "Grilled chicken, tenderloin steak & garlic prawns over herb butter rice.",
        price: 1250,
        serving: "Serves 1–2",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        tag: "Chef Special",
        spiciness: 1,
      },
      {
        id: "siz-2",
        name: "Smoking BBQ Chicken Sizzler",
        description: "Oakwood smoked BBQ boneless chicken with potato wedges and caramelized onions.",
        price: 890,
        serving: "Serves 1",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80",
        tag: "Bestseller",
        spiciness: 2,
      },
      {
        id: "siz-3",
        name: "Coastal Jumbo Tiger Prawn Sizzler",
        description: "Bay of Bengal jumbo prawns in garlic lemon glaze with saffron rice.",
        price: 1380,
        serving: "Serves 1–2",
        image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=600&q=80",
        tag: "Signature",
        spiciness: 1,
      },
      {
        id: "siz-4",
        name: "Chargrilled Prime Ribeye Steak Platter",
        description: "Flame-seared premium halal ribeye with garlic mash and mushroom jus.",
        price: 1650,
        serving: "300g Cut",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80",
        tag: "Chef Special",
      },
    ],
  },
  {
    category: "Pan-Asian Delicacies",
    tagline: "Wok-tossed perfection honoring Cantonese and Thai craft",
    items: [
      {
        id: "asn-1",
        name: "Szechuan Firecracker Chicken",
        description: "Crispy chicken glazed with red chilies, roasted cashews and scallions.",
        price: 720,
        serving: "Shares 2–3",
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80",
        spiciness: 3,
        tag: "Bestseller",
      },
      {
        id: "asn-2",
        name: "Thai Basil Prawns (Pad Krapow)",
        description: "Juicy prawns stir-fried with fragrant holy basil and sweet oyster reduction.",
        price: 880,
        serving: "Shares 2–3",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
        spiciness: 2,
      },
      {
        id: "asn-3",
        name: "Cantonese Steamed Dim Sum Platter",
        description: "Handcrafted crystal wrappers filled with chicken and mushrooms.",
        price: 640,
        serving: "8 Pieces",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80",
        tag: "Signature",
      },
      {
        id: "asn-4",
        name: "Authentic Yangchow Fried Rice",
        description: "Jasmine rice with roasted chicken, sweet corn, eggs and prawns.",
        price: 590,
        serving: "Shares 2–3",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
        tag: "Healthy Choice",
      },
    ],
  },
  {
    category: "Mughlai Heritage & Dum Biryani",
    tagline: "Slow-cooked aromatics sealed on low ember",
    items: [
      {
        id: "mug-1",
        name: "Royal Lucknowi Mutton Dum Biryani",
        description: "Aged basmati rice layered with succulent goat meat and saffron milk.",
        price: 950,
        serving: "Royal Handi (Serves 2)",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        tag: "Chef Special",
        spiciness: 2,
      },
      {
        id: "mug-2",
        name: "Murgh Afghani Creamy Kebab",
        description: "Charred boneless chicken in strained yogurt, cashew cream and cardamom.",
        price: 740,
        serving: "6 Pieces",
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        tag: "Bestseller",
        spiciness: 1,
      },
      {
        id: "mug-3",
        name: "Marinozz Overnight Dal Makhani",
        description: "14-hour slow-simmered black lentils with churned butter and tomato coulis.",
        price: 520,
        serving: "Shares 2–3",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80",
        tag: "Signature",
      },
      {
        id: "mug-4",
        name: "Kashmiri Mutton Rogan Josh",
        description: "Braised mutton infused with vibrant Kashmiri mirch and fennel essence.",
        price: 920,
        serving: "Shares 2–3",
        image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        tag: "Signature",
        spiciness: 2,
      },
    ],
  },
  {
    category: "Artisanal Mocktails & Refreshers",
    tagline: "Fresh botanical blends crafted to order",
    items: [
      {
        id: "mck-1",
        name: "Oceanic Marinozz Breeze",
        description: "Blue citrus extract, garden mint, freshly squeezed lime and sparkling soda.",
        price: 340,
        serving: "350 ml",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        tag: "Signature",
      },
      {
        id: "mck-2",
        name: "Smokey Green Mango Panna",
        description: "Roasted raw mango puree with rock salt, toasted cumin and mint.",
        price: 290,
        serving: "350 ml",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
        tag: "Healthy Choice",
      },
      {
        id: "mck-3",
        name: "Wild Strawberry Berry Mojito",
        description: "Muddled wild strawberries, fresh mint leaves and sparkling mineral water.",
        price: 360,
        serving: "350 ml",
        image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80",
        tag: "Bestseller",
      },
      {
        id: "mck-4",
        name: "Royal Saffron Pistachio Lassi",
        description: "Sweet churned yogurt blended with saffron strands and roasted almonds.",
        price: 380,
        serving: "350 ml",
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=600&q=80",
        tag: "Chef Special",
      },
    ],
  },
];

export const PANTOA_CATEGORIES: PantoaCategory[] = [
  {
    title: "Signature Bengali Sweets",
    subtitle: "100% Pure Cow Milk Chhana",
    description: "Handcrafted dawn batches made from pure cow milk chhana.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
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
        name: "Royal Pantoa in Golden Saffron",
        unit: "1 kg Box",
        price: 680,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        badge: "Signature",
      },
      {
        id: "pnt-2",
        name: "Spongy Diamond Rasgulla",
        unit: "1 kg Box",
        price: 580,
        image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=600&q=80",
        badge: "Bestseller",
      },
      {
        id: "pnt-3",
        name: "Kheer Mohan & Chomchom",
        unit: "1 kg Box",
        price: 740,
        image: "https://images.unsplash.com/photo-1505253758473-96b3015f240a?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "pnt-4",
        name: "Classic Clay Pot Mishti Doi",
        unit: "1 kg Clay Handi",
        price: 460,
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=600&q=80",
        badge: "Daily Fresh",
      },
      {
        id: "pnt-5",
        name: "Creamy Pistachio Rasmalai",
        unit: "1 kg Box",
        price: 820,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        badge: "Chef Special",
      },
    ],
  },
  {
    title: "Pure Ghee Delicacies & Sandesh",
    subtitle: "Country Cow Ghee & Zero Starch",
    description: "Prepared with pure country cow ghee and reduced milk.",
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=800&q=80",
    items: [
      "Nolen Gur Jalbhora Sandesh",
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
        image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=600&q=80",
        badge: "Heritage",
      },
      {
        id: "pnt-7",
        name: "Kaju Katli with Silver Foil",
        unit: "500g Box",
        price: 750,
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
        badge: "Premium",
      },
      {
        id: "pnt-8",
        name: "Motichoor Pure Ghee Laddu",
        unit: "1 kg Box",
        price: 690,
        image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=600&q=80",
        badge: "Pure Ghee",
      },
      {
        id: "pnt-9",
        name: "Pistachio Mawa Barfi",
        unit: "500g Box",
        price: 540,
        image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    title: "Modern European Bakery & Pastries",
    subtitle: "Artisanal Morning Bakes",
    description: "European puff pastries, rich cheesecakes and sourdough.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    items: [
      "New York Baked Cheesecake Slice",
      "Belgian Dark Chocolate Mousse Cake",
      "Butter Flaky Morning Croissant",
      "Artisan Multigrain Hearth Loaf",
    ],
    products: [
      {
        id: "pnt-10",
        name: "New York Baked Cheesecake",
        unit: "2 Slices Pack",
        price: 580,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        badge: "Bestseller",
      },
      {
        id: "pnt-11",
        name: "Belgian Chocolate Mousse Cake",
        unit: "1 kg Whole Cake",
        price: 1650,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
        badge: "Signature",
      },
      {
        id: "pnt-12",
        name: "Butter Morning Croissants",
        unit: "Box of 4",
        price: 520,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "pnt-13",
        name: "Multigrain Sourdough Loaf",
        unit: "500g Loaf",
        price: 320,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
        badge: "Healthy",
      },
    ],
  },
  {
    title: "Celebration Cakes & Custom Gifting",
    subtitle: "Corporate & Festive Hampers",
    description: "Bespoke tiered cakes and executive gift boxes.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    items: [
      "Wedding & Celebration Tiered Cakes",
      "Executive Corporate Heritage Hampers",
      "Festive Eid Sweet Assortment Boxes",
    ],
    products: [
      {
        id: "pnt-14",
        name: "Corporate Heritage Gift Hamper",
        unit: "1.5 kg Luxury Box",
        price: 1850,
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80",
        badge: "Bestseller",
      },
      {
        id: "pnt-15",
        name: "Festive Sweet & Dry Fruit Box",
        unit: "1 kg Gift Box",
        price: 1350,
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
        badge: "Gift Ready",
      },
      {
        id: "pnt-16",
        name: "Celebration Fondant Cake",
        unit: "1.5 kg Custom Design",
        price: 2400,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
];
