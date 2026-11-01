import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marinozzgroup.com"),
  title: {
    default: "Marinozz Group | Modern Food, Hospitality & Confectionery Ecosystem",
    template: "%s | Marinozz Group",
  },
  description:
    "Marinozz Group is a growing Food, Restaurant, Confectionery, Retail and Hospitality business ecosystem associated with Mariners Group. Discover our dining destinations, sweets, bakery, and franchise opportunities.",
  keywords: [
    "Marinozz Group",
    "Marinozz Restaurant",
    "Pantoa Sweets & Bakery",
    "Marinozz Confectionery PLC",
    "Mariners Group",
    "Multicuisine Restaurant",
    "Food Hospitality Bangladesh",
    "Confectionery Franchise",
  ],
  authors: [{ name: "Marinozz Group Corporate Communications" }],
  openGraph: {
    title: "Marinozz Group | Food & Hospitality Ecosystem",
    description:
      "A premier food, restaurant, confectionery and retail ecosystem delivering excellence in dining, artisanal bakery, and franchise growth.",
    url: "https://marinozzgroup.com",
    siteName: "Marinozz Group",
    images: [
      {
        url: "/logos/marinozz-group.png",
        width: 1200,
        height: 630,
        alt: "Marinozz Group Corporate Identity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marinozz Group | Food & Hospitality Ecosystem",
    description:
      "A premier food, restaurant, confectionery and retail ecosystem delivering excellence in dining, artisanal bakery, and franchise growth.",
    images: ["/logos/marinozz-group.png"],
  },
  icons: {
    icon: "/logos/marinozz-group.png",
    shortcut: "/logos/marinozz-group.png",
    apple: "/logos/marinozz-group.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-neutral-900 selection:bg-red-100 selection:text-red-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
