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

      {/* Brand Hero & Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="relative h-16 w-60 rounded-xl overflow-hidden shadow-xs border border-red-100">
              <Image
                src="/logos/pantoa-sweets.jpg"
                alt="Pantoa Sweets & Bakery Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3674] tracking-tight">
              Rediscovering Confectionery Heritage with Uncompromised Purity
            </h2>

            <p className="text-base text-gray-700 leading-relaxed">
              Named after the legendary caramelized sweet celebrated across Bengal,{" "}
              <strong>Pantoa Sweets & Bakery</strong> was founded to solve a pervasive problem in
              the traditional confectionery industry: inconsistency, questionable milk quality, and
              hidden adulteration.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              At Pantoa, we adhere strictly to ancient artisanal recipes while adopting modern
              hygienic food science. We source exclusively 100% natural pure cow dairy from verified
              farms, use authentic country cow ghee, natural saffron, and zero chemical colorings.
              Simultaneously, our European bakery wing crafts sourdough hearth breads, delicate
              croissants, and bespoke multi-tier celebration cakes for modern lifestyles.
            </p>

            {/* Existing Operations vs Planned Expansion Badges */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Operational Status Breakdown</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3 rounded-xl border border-amber-100">
                  <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Existing Operations
                  </span>
                  <p className="font-semibold text-gray-800 mt-1">Central Kitchen & Flagship Hub</p>
                  <p className="text-gray-500 text-[11px]">
                    Fully active central hygienic production, catering, and flagship retail counter.
                  </p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-amber-100">
                  <span className="text-[10px] uppercase font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    Planned Expansion (2026-2027)
                  </span>
                  <p className="font-semibold text-gray-800 mt-1">High-Street Boutiques & Kiosks</p>
                  <p className="text-gray-500 text-[11px]">
                    Rolling out 25+ franchise outlets across high-density residential and transit hubs.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#franchise-inquiry"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl text-white bg-amber-600 hover:bg-amber-700 shadow transition-colors"
              >
                <span>Franchise Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${pantoaLocation.whatsapp.replace(/\+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-xl text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-amber-600" />
                <span>Bulk Corporate Orders</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border border-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80"
                alt="Pantoa Sweets and Bakery Craftsmanship"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Signature Delicacy
                </span>
                <h4 className="text-lg font-bold">Royal Pantoa in Golden Saffron</h4>
                <p className="text-xs text-gray-200 mt-1">
                  100% pure cow chhana, simmered to caramelized perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Concept & Food Safety Standard */}
      <section className="bg-[#f7f6f2] py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0b3674] bg-blue-50 px-3 py-1 rounded-full">
              Production Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3674] tracking-tight mt-3">
              The Centralized Hygienic Kitchen Concept
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Why Pantoa Sweets delivers identical taste and superior safety across every batch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div className="text-2xl font-black text-amber-600">01</div>
              <h3 className="text-lg font-bold text-gray-900">Direct Dairy Milk Sourcing</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Raw milk arrives at our facility every morning from audited dairy farms. Lactometer
                testing, fat analysis, and strict absence of powdered substitutes guarantee 100%
                authentic chhana texture.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#c71b27]">02</div>
              <h3 className="text-lg font-bold text-gray-900">Calibrated Thermal Cooking</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Traditional copper kadas are monitored with precision digital thermostats. Syrup
                specific gravities and ghee temperatures are strictly controlled, removing human
                guesswork while honoring master recipe timing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#0b3674]">03</div>
              <h3 className="text-lg font-bold text-gray-900">Cold Chain Dispatched Fresh</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Finished sweets and delicate pastries are packed in food-grade sealed containers and
                transported in refrigerated vans. Retail counters receive fresh stock daily without
                staling or room-temperature degradation.
              </p>
            </div>
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
