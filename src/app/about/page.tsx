import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Compass,
  Award,
  Users,
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Phone,
  MapPin,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "About Marinozz Group | Heritage, Vision & Corporate Standards",
  description:
    "Discover Marinozz Group: premier dining, artisanal confectionery, industrial baking, and corporate hospitality associated with Mariners Group.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-24 overflow-hidden">
      <PageHeader
        title="About Marinozz Group"
        subtitle="Premier hospitality, artisanal confectionery, and food manufacturing associated with Mariners Group."
      />

      {/* 1. Visual 4-Pillar Operations Collage (Photo-First, Zero Text Walls) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3674] bg-blue-50 px-3 py-1 rounded-full">
              Our Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0b3674] tracking-tight mt-2">
              Inside Marinozz Group
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs font-bold text-gray-600">
            <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              100% Halal &amp; ISO Aligned
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Fine Dining & Banquets",
              stat: "180+ Seating",
              tag: "Mohakhali Flagship",
              image:
                "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
              href: "/marinozz-restaurant",
            },
            {
              title: "Artisanal Dairy Sweets",
              stat: "100% Pure Milk",
              tag: "Bengali Heritage",
              image:
                "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
              href: "/pantoa-sweets-bakery",
            },
            {
              title: "European Bakery & Cakes",
              stat: "Daily Fresh Bakes",
              tag: "Artisan Oven",
              image:
                "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
              href: "/pantoa-sweets-bakery",
            },
            {
              title: "Commercial Baking Plant",
              stat: "ISO 22000 Certified",
              tag: "FMCG Scaling",
              image:
                "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
              href: "/brands#confectionery",
            },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-gray-900 shadow-md hover:shadow-2xl transition-all"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0b3674] shadow-sm">
                  {item.tag}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs font-bold text-amber-300 block mb-0.5">
                  {item.stat}
                </span>
                <h3 className="text-lg font-black leading-snug">{item.title}</h3>
                <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-red-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 2. Visual Core Values (Photo Cards) */}
      <section className="bg-[#f7f6f2] py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3674] bg-blue-50 px-3 py-1 rounded-full">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0b3674] tracking-tight mt-2">
              Our 4 Pillars of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Absolute Integrity",
                desc: "100% pure ingredients & zero adulteration",
                badge: "Pure Sourcing",
                image:
                  "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Uncompromising Hygiene",
                desc: "Daily microbial lab testing & HACCP standards",
                badge: "Certified Clean",
                image:
                  "https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Warm Hospitality",
                desc: "Attentive, respectful service for every guest",
                badge: "Maritime Care",
                image:
                  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Sustainable Growth",
                desc: "Eco-friendly packaging & turnkey partner success",
                badge: "Future Ready",
                image:
                  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
              },
            ].map((val, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-gray-900 shadow-sm hover:shadow-xl transition-all"
              >
                <Image
                  src={val.image}
                  alt={val.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-600 text-white shadow-sm">
                    {val.badge}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-bold uppercase text-amber-300 block mb-0.5">
                    Standard 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-black leading-snug">{val.title}</h3>
                  <p className="text-xs text-gray-200 mt-1 leading-snug">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Visual Mariners Group Association & Governance Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0b3674] via-[#072147] to-[#0b3674] text-white p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                <Compass className="w-3.5 h-3.5" />
                Associated with Mariners Group
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
                Maritime Discipline Meets Culinary Excellence
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 text-xs font-semibold text-blue-100">
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-1" />
                  <div className="font-bold text-white">Corporate Governance</div>
                  <div className="text-[11px] text-blue-200">Executive Audit Board</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-1" />
                  <div className="font-bold text-white">Hygiene Checklists</div>
                  <div className="text-[11px] text-blue-200">Daily HACCP Protocols</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-1" />
                  <div className="font-bold text-white">Turnkey Systems</div>
                  <div className="text-[11px] text-blue-200">Refrigerated Logistics</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/brands"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold rounded-xl text-white bg-[#c71b27] hover:bg-[#9e141d] shadow-lg transition-all"
              >
                <span>Explore All Brands</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/franchise"
                className="inline-flex items-center justify-center px-6 py-4 text-xs font-bold rounded-xl text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-center"
              >
                <span>Franchise Opportunities</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact & Headquarters Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f7f6f2] rounded-3xl p-8 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-black text-[#0b3674]">
              Marinozz Group Corporate Office
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
              <span>Contact Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
