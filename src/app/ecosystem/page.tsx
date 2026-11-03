import Image from "next/image";
import Link from "next/link";
import {
  Wheat,
  Factory,
  Truck,
  Store,
  Handshake,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MapPin,
  Phone,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Our Business Ecosystem | Marinozz Group Integrated Food Infrastructure",
  description:
    "Explore Marinozz Group's farm-to-table food ecosystem, centralized manufacturing, cold-chain logistics, and turnkey franchise governance.",
};

const ECOSYSTEM_CARDS = [
  {
    number: "01",
    title: "Direct Dairy & Farm Procurement",
    subtitle: "Ethical Sourcing",
    tag: "100% Pure Milk",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1000&q=80",
    badges: ["Pure Cow Dairy", "Direct Farm Contracts", "Zero Adulteration"],
    href: "/pantoa-sweets-bakery",
  },
  {
    number: "02",
    title: "Central Hygienic Kitchens",
    subtitle: "Calibrated Science",
    tag: "HACCP Aligned",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    badges: ["Digital Thermostats", "Daily Lab Testing", "Master Chef SOPs"],
    href: "/about",
  },
  {
    number: "03",
    title: "Cold-Chain Fleet Logistics",
    subtitle: "Fresh Transit",
    tag: "Daily Dispatch",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=80",
    badges: ["Refrigerated Fleet", "Zero Break Chain", "Same-Day Delivery"],
    href: "/ecosystem",
  },
  {
    number: "04",
    title: "Multichannel Dining & Retail",
    subtitle: "Customer Touchpoints",
    tag: "180+ Seating & Outlets",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    badges: ["Fine Dining Hall", "Sweet Boutiques", "Express Kiosks"],
    href: "/brands",
  },
  {
    number: "05",
    title: "Franchise Governance & POS",
    subtitle: "Turnkey Success",
    tag: "Turnkey Models",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1000&q=80",
    badges: ["Real-time POS", "Staff Academy", "Guaranteed Margins"],
    href: "/franchise",
  },
];

export default function EcosystemPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-24 overflow-hidden">
      <PageHeader
        title="Our Business Ecosystem"
        subtitle="A vertically integrated food architecture uniting farm procurement, central food science, cold chain, and retail."
      />

      {/* 1. Visual 5-Stage Value Journey (Photo Showcase) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3674] bg-blue-50 px-3 py-1 rounded-full">
              Full Spectrum Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0b3674] tracking-tight mt-2">
              The 5 Pillars of Marinozz Synergy
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Farm-to-Table Quality Control</span>
          </div>
        </div>

        <div className="space-y-8">
          {ECOSYSTEM_CARDS.map((pillar) => (
            <div
              key={pillar.number}
              className="group bg-white rounded-3xl border border-gray-200/80 shadow-md hover:shadow-2xl transition-all overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 sm:p-8"
            >
              {/* Photo */}
              <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 shadow-sm">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0b3674] shadow-sm">
                    {pillar.tag}
                  </span>
                </div>
              </div>

              {/* Details & Badges */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#c71b27]">
                  <span>STAGE {pillar.number}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500 font-semibold">{pillar.subtitle}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#0b3674] tracking-tight">
                  {pillar.title}
                </h3>

                <div className="flex flex-wrap gap-2 pt-1">
                  {pillar.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-[#f7f6f2] text-gray-800 border border-gray-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="pt-3">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl text-white bg-[#0b3674] hover:bg-[#072147] shadow transition-colors"
                  >
                    <span>Explore Component</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Visual Franchise & Expansion Synergy CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0b3674] via-[#072147] to-[#0b3674] text-white p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                Partner with the Ecosystem
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Turnkey Expansion Opportunities
              </h2>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-blue-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Zero Adulteration Guarantee
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Daily Refrigerated Supply
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Comprehensive Training Academy
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
              <Link
                href="/franchise"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold rounded-xl text-white bg-[#c71b27] hover:bg-[#9e141d] shadow-lg transition-all"
              >
                <span>Franchise Form</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/brands"
                className="inline-flex items-center justify-center px-6 py-4 text-xs font-bold rounded-xl text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-center"
              >
                <span>View All 4 Brands</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Corporate Contact Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f7f6f2] rounded-3xl p-8 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-black text-[#0b3674]">
              Marinozz Group Supply &amp; Logistics Hub
            </h3>
            <p className="text-xs font-semibold text-gray-600 flex items-center justify-center sm:justify-start gap-1.5">
              <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span>MG SAM Center, 12 Mohakhali C/A, Dhaka-1212</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+8801335149006"
              className="inline-flex items-center gap-1.5 px-5 py-3 text-xs font-bold rounded-xl text-gray-900 bg-white border border-gray-200 shadow-xs hover:bg-gray-50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>+880 1335-149006</span>
            </a>
            <Link
              href="/contact"
              className="px-5 py-3 text-xs font-bold rounded-xl text-white bg-[#0b3674] hover:bg-[#072147] shadow transition-colors"
            >
              <span>Contact Page</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
