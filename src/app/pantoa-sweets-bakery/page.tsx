import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Cake,
  CheckCircle2,
  Store,
  Building2,
  Clock,
  Phone,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BakeryShowcase from "@/components/BakeryShowcase";
import FranchiseForm from "@/components/FranchiseForm";
import { LOCATIONS } from "@/data/locations";

export const metadata = {
  title: "Pantoa Sweets & Bakery | Heritage Confectionery & Modern Bakery",
  description:
    "Preserving authentic Bengali sweetmaking purity while mastering European bakery artistry. Discover Pantoa Sweets, our hygienic production model, and retail franchise expansion.",
};

export default function PantoaSweetsBakeryPage() {
  const pantoaLocation = LOCATIONS[1];

  return (
    <div className="space-y-20 pb-24">
      <PageHeader
        badge="Artisanal Confectionery"
        title="Pantoa Sweets & Bakery"
        subtitle="Timeless Bengali confectionery crafted with modern hygienic mastery, paired with artisanal European pastries, bespoke celebration cakes, and pure dairy indulgence."
        breadcrumb={[
          { label: "Our Brands", href: "/brands" },
          { label: "Pantoa Sweets & Bakery" },
        ]}
      />

      {/* Brand Hero & Introduction (Visual-First, No Text Walls) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="relative h-16 w-60 rounded-2xl overflow-hidden shadow-xs border border-red-100 bg-white p-1">
              <Image
                src="/logos/pantoa-sweets.jpg"
                alt="Pantoa Sweets & Bakery Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b3674] tracking-tight leading-tight">
              100% Pure Cow Milk &amp; Artisanal Sweets
            </h2>

            {/* Visual Quality Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              {[
                { title: "Pure Cow Milk", sub: "Audited Farms", color: "bg-amber-50 text-amber-900 border-amber-200" },
                { title: "Zero Adulteration", sub: "Natural Saffron", color: "bg-red-50 text-[#c71b27] border-red-200" },
                { title: "Country Cow Ghee", sub: "Authentic Chhana", color: "bg-yellow-50 text-yellow-900 border-yellow-200" },
                { title: "European Bakery", sub: "Artisan Oven", color: "bg-blue-50 text-[#0b3674] border-blue-200" },
              ].map((b, idx) => (
                <div key={idx} className={`p-3 rounded-2xl border ${b.color}`}>
                  <div className="text-xs font-black">{b.title}</div>
                  <div className="text-[10px] font-semibold opacity-80 mt-0.5">{b.sub}</div>
                </div>
              ))}
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-3 flex flex-wrap gap-4">
              <a
                href="#franchise-inquiry"
                className="inline-flex items-center gap-2 px-7 py-4 text-xs font-bold rounded-2xl text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-xl shadow-amber-900/15 hover:-translate-y-0.5 transition-all"
              >
                <span>Franchise Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${pantoaLocation.whatsapp.replace(/\+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 text-xs font-bold rounded-2xl text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-amber-600" />
                <span>Bulk Corporate Orders</span>
              </a>

              <a
                href={`tel:${pantoaLocation.phone}`}
                className="inline-flex items-center gap-2 px-5 py-4 text-xs font-bold rounded-2xl text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition-all shadow-xs"
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>{pantoaLocation.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border border-gray-100 group">
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80"
                alt="Pantoa Sweets and Bakery Craftsmanship"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 text-amber-800 shadow-sm">
                  Handcrafted Heritage
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Signature Delicacy
                </span>
                <h4 className="text-xl font-black mt-0.5">Royal Pantoa in Golden Saffron</h4>
                <p className="text-xs text-gray-200 mt-1">
                  100% pure cow chhana, simmered to caramelized perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Concept & Food Safety Standard (Visual Photo Cards) */}
      <section className="bg-[#f7f6f2] py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3674] bg-blue-50 px-3 py-1 rounded-full">
              Purity Assurance
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0b3674] tracking-tight mt-2">
              The 3 Standards of Pantoa Purity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Direct Dairy Milk Sourcing",
                tag: "Pure Cow Milk",
                image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=600&q=80",
              },
              {
                step: "02",
                title: "Calibrated Thermal Cooking",
                tag: "Copper Kadas",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
              },
              {
                step: "03",
                title: "Cold Chain Dispatched Fresh",
                tag: "Refrigerated Fleet",
                image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&q=80",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-900 shadow-sm hover:shadow-xl transition-all"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500 text-white shadow-sm">
                    {card.tag}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-bold uppercase text-amber-300 block mb-0.5">
                    Step {card.step}
                  </span>
                  <h3 className="text-base font-black leading-snug">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full">
            Our Creations
          </span>
          <h2 className="text-3xl font-extrabold text-[#0b3674] tracking-tight mt-3">
            Handcrafted Product Categories
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Explore our heritage sweets, European artisan breads, celebration pastries, and corporate gift hampers.
          </p>
        </div>

        <BakeryShowcase />
      </section>

      {/* Retail Expansion Vision (Existing vs Planned) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#072147] to-[#0b3674] text-white space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Retail Growth Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Our 2026-2027 Nationwide Expansion Vision
            </h2>
            <p className="text-sm text-blue-100/90 leading-relaxed">
              We are systematically executing our rollout to establish Pantoa as the preferred
              confectionery brand across Bangladesh. Here is our clear operational status:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white">Current Operational Footprint</h4>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-400 text-emerald-950">
                  Active
                </span>
              </div>
              <ul className="space-y-2 text-xs text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Central Production Hub & QA Lab (Active)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Flagship Retail Boutique & Tasting Counter (Active)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Corporate Festive Hampers & B2B Catering (Active)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white">Planned Franchise Network</h4>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-400 text-amber-950">
                  Expanding
                </span>
              </div>
              <ul className="space-y-2 text-xs text-blue-100">
                <li className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-300" />
                  <span>Phase 1: 10 High-Street Sweet Boutiques in Metro Hubs</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-300" />
                  <span>Phase 2: 15 Express Kiosks in Commercial & Transit Hubs</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-300" />
                  <span>Packaged Sweet Box Shelf Presence in Modern Supermarkets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Pantoa Franchise Inquiry Form */}
      <section id="franchise-inquiry" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FranchiseForm initialBrand="Pantoa Sweets & Bakery Boutique" />
      </section>
    </div>
  );
}
