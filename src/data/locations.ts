export interface LocationInfo {
  id: string;
  name: string;
  brand: string;
  type: string;
  address: string;
  city: string;
  phone: string;
  whatsapp: string;
  hours: string;
  features: string[];
  mapEmbedUrl: string;
  mapDirectionsUrl: string;
}

export const LOCATIONS: LocationInfo[] = [
  {
    id: "marinozz-restaurant-flagship",
    name: "Marinozz Multicuisine Restaurant — Flagship Branch",
    brand: "Marinozz Multicuisine Restaurant",
    type: "Dine-In, Takeaway, Banquet & Private Events",
    address: "MG SAM Center, Level 4, 12 Mohakhali C/A",
    city: "Dhaka-1212, Bangladesh",
    phone: "+880 1335-149006",
    whatsapp: "+8801335149006",
    hours: "Open Daily: 12:00 PM – 11:00 PM (Last order 10:30 PM)",
    features: [
      "180+ Seating Capacity",
      "Executive Banquet Hall (Up to 150 guests)",
      "VIP Private Dining Rooms",
      "Dedicated Prayer Room",
      "Secured Basement Valet Parking",
      "High-speed Guest Wi-Fi",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.103!2d90.4045!3d23.7777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77095555555%3A0x6666666666666666!2sMohakhali%20C%2FA%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1714567890126!5m2!1sen!2sbd",
    mapDirectionsUrl: "https://maps.google.com/?q=MG+SAM+Center+12+Mohakhali+CA+Dhaka-1212",
  },
  {
    id: "pantoa-sweets-flagship",
    name: "Pantoa Sweets & Bakery — Central Production & Flagship Boutique",
    brand: "Pantoa Sweets & Bakery",
    type: "Retail Boutique, Takeaway & Central Kitchen",
    address: "MG SAM Center, Ground Floor, 12 Mohakhali C/A",
    city: "Dhaka-1212, Bangladesh",
    phone: "+880 1335-149006",
    whatsapp: "+8801335149006",
    hours: "Open Daily: 08:00 AM – 10:30 PM",
    features: [
      "Hygienic Glass-Front Boutique",
      "Live Pastry & Cake Decorating Studio",
      "Cold Chain Takeaway Packaging",
      "Corporate Bulk Order Concierge",
      "Dedicated Curbside Pickup",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.103!2d90.4045!3d23.7777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77095555555%3A0x6666666666666666!2sMohakhali%20C%2FA%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1714567890126!5m2!1sen!2sbd",
    mapDirectionsUrl: "https://maps.google.com/?q=MG+SAM+Center+12+Mohakhali+CA+Dhaka-1212",
  },
  {
    id: "marinozz-corporate-hq",
    name: "Marinozz Group — Corporate Headquarters (Marinozz PLC)",
    brand: "Marinozz Group / Mariners Group",
    type: "Executive Board, Franchise Relations & Supply Chain Division",
    address: "MG SAM Center, 12 Mohakhali C/A",
    city: "Dhaka-1212, Bangladesh",
    phone: "+880 1335-149006",
    whatsapp: "+8801335149006",
    hours: "Sunday – Thursday: 09:00 AM – 06:00 PM (Corporate Inquiries)",
    features: [
      "Franchise Incubation Center",
      "Vendor & Partner Relations Desk",
      "Central Quality Assurance Office",
      "Corporate Boardroom",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.103!2d90.4045!3d23.7777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77095555555%3A0x6666666666666666!2sMohakhali%20C%2FA%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1714567890126!5m2!1sen!2sbd",
    mapDirectionsUrl: "https://maps.google.com/?q=MG+SAM+Center+12+Mohakhali+CA+Dhaka-1212",
  },
];
