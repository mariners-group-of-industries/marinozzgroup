export interface LocationInfo {
  id: string;
  name: string;
  brand: string;
  type: string;
  address: string;
  city: string;
  phone: string;
  whatsapp: string;
  email: string;
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
    address: "Level 4, Mariners Commercial Center, Main Avenue, Commercial District",
    city: "Dhaka, Bangladesh",
    phone: "+880 1711 000000",
    whatsapp: "+8801711000000",
    email: "restaurant@marinozzgroup.com",
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902442430139!2d90.39120367598918!3d23.75085808876404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b888ad3391fb%3A0x2774770d57fd3a74!2sKawran%20Bazar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714567890123!5m2!1sen!2sbd",
    mapDirectionsUrl: "https://maps.google.com/?q=Kawran+Bazar+Dhaka",
  },
  {
    id: "pantoa-sweets-flagship",
    name: "Pantoa Sweets & Bakery — Central Production & Flagship Boutique",
    brand: "Pantoa Sweets & Bakery",
    type: "Retail Boutique, Takeaway & Central Kitchen",
    address: "Plot 12, Food Processing & Retail Hub, Mariners Zone",
    city: "Dhaka, Bangladesh",
    phone: "+880 1712 111111",
    whatsapp: "+8801712111111",
    email: "pantoa@marinozzgroup.com",
    hours: "Open Daily: 08:00 AM – 10:30 PM",
    features: [
      "Hygienic Glass-Front Boutique",
      "Live Pastry & Cake Decorating Studio",
      "Cold Chain Takeaway Packaging",
      "Corporate Bulk Order Concierge",
      "Dedicated Curbside Pickup",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0982348578144!2d90.4125!3d23.7915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714567890124!5m2!1sen!2sbd",
    mapDirectionsUrl: "https://maps.google.com/?q=Gulshan+Dhaka",
  },
  {
    id: "marinozz-corporate-hq",
    name: "Marinozz Group — Corporate Headquarters (Marinozz PLC)",
    brand: "Marinozz Group / Mariners Group",
    type: "Executive Board, Franchise Relations & Supply Chain Division",
    address: "Mariners Tower, Corporate Sector, Suite 901-904",
    city: "Dhaka, Bangladesh",
    phone: "+880 2 9888888",
    whatsapp: "+8801700000000",
    email: "info@marinozzgroup.com",
    hours: "Sunday – Thursday: 09:00 AM – 06:00 PM (Corporate Inquiries)",
    features: [
      "Franchise Incubation Center",
      "Vendor & Partner Relations Desk",
      "Central Quality Assurance Office",
      "Corporate Boardroom",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0567!2d90.4072!3d23.7808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77134371485%3A0x6b772488e0b4a4c5!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714567890125!5m2!1sen!2sbd",
    mapDirectionsUrl: "https://maps.google.com/?q=Banani+Dhaka",
  },
];
