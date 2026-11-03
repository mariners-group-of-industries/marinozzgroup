import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  UtensilsCrossed,
  Cake,
  Factory,
  Store,
  Handshake,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Award,
  Leaf,
  MapPin,
  Phone,
} from "lucide-react";
import BrandCard from "@/components/BrandCard";
import HomeSignatureExplorer from "@/components/HomeSignatureExplorer";
import { BRANDS } from "@/data/brands";
import { INITIAL_NEWS } from "@/data/news";

export default function HomePage() {
  const recentNews = INITIAL_NEWS.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-hidden">
      {/* 1. Full-Width Clean Editorial Hero (Zero Text Paragraphs) */}
      <section className="relative bg-gradient-to-b from-white via-[#faf9f6]/60 to-white text-gray-900 border-b border-gray-100 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-14 sm:pt-8 sm:pb-20 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-[#0b3674]">
                Nourishing Lives,{" "}
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#c71b27] via-rose-600 to-[#9e141d]">
                  Elevating Hospitality
                </span>
              </h1>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/brands"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold rounded-2xl text-white bg-gradient-to-r from-[#c71b27] to-[#9e141d] hover:from-[#9e141d] hover:to-[#7f0f16] shadow-xl shadow-red-900/15 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Explore Our Brands</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/franchise"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold rounded-2xl text-[#0b3674] bg-white hover:bg-gray-50 border-2 border-gray-200 shadow-xs hover:border-[#0b3674]/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Franchise &amp; Partnerships</span>
                </Link>
              </div>

              {/* 4 Interactive Brand Pills */}
              <div className="pt-6 border-t border-gray-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold text-gray-700">
                <Link
                  href="/marinozz-restaurant"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-gray-200 shadow-2xs hover:border-red-300 hover:bg-red-50/40 transition-all"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 flex-shrink-0" />
                  <span>Fine Dining</span>
                </Link>
                <Link
                  href="/pantoa-sweets-bakery"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-gray-200 shadow-2xs hover:border-amber-300 hover:bg-amber-50/40 transition-all"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0" />
                  <span>Sweets &amp; Bakery</span>
                </Link>
                <Link
                  href="/brands#confectionery"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-gray-200 shadow-2xs hover:border-red-300 hover:bg-red-50/40 transition-all"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-red-800 flex-shrink-0" />
                  <span>FMCG Baking</span>
                </Link>
                <Link
                  href="/brands#marinozz-plc"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-gray-200 shadow-2xs hover:border-blue-300 hover:bg-blue-50/40 transition-all"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0b3674] flex-shrink-0" />
                  <span>Supply Backbone</span>
                </Link>
              </div>
            </div>

            {/* Right Large Visual Cover */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#c71b27]/20 via-amber-400/10 to-[#0b3674]/20 blur-xl opacity-80" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 aspect-[4/5] bg-gray-900 group">
                  <Image
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                    alt="Premium Multicuisine Dining at Marinozz Restaurant"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-extrabold bg-white/95 backdrop-blur-md text-[#0b3674] shadow-md border border-white/40">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      100% Halal &amp; ISO Aligned
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md text-gray-900 shadow-xl border border-white/60">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                          <p className="text-[10px] font-black uppercase tracking-wider text-[#c71b27]">
                            Flagship Venue
                          </p>
                        </div>
                        <h3 className="text-base font-black text-gray-900 mt-0.5">
                          Marinozz Multicuisine Restaurant
                        </h3>
                        <p className="text-[11px] text-gray-500">
                          MG SAM Center, 12 Mohakhali C/A, Dhaka-1212
                        </p>
                      </div>
                      <Link
                        href="/marinozz-restaurant"
                        className="p-3 rounded-xl bg-red-50 text-[#c71b27] hover:bg-[#c71b27] hover:text-white shadow-xs transition-colors flex-shrink-0"
                        aria-label="View Marinozz Restaurant"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visual Tasting Explorer: Dishes, Sweets & FMCG with Photos & Prices */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HomeSignatureExplorer />
      </section>

      {/* 3. Visual 4-Photo Collage: The Marinozz Standards (Zero Essay Paragraphs) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3674] bg-blue-50 px-3 py-1 rounded-full">
              Infrastructure &amp; Craft
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0b3674] tracking-tight mt-2">
              Inside the Marinozz Ecosystem
            </h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-gray-600">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Mariners Group Associated
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-[#c71b27]" />
              MG SAM Center, Mohakhali
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Fine Dining & Banquets",
              sub: "180+ Seating & VIP Suites",
              image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
              href: "/marinozz-restaurant",
            },
            {
              title: "Artisanal Dairy Sweets",
              sub: "100% Pure Cow Milk",
              image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
              href: "/pantoa-sweets-bakery",
            },
            {
              title: "European Bakery & Cakes",
              sub: "Morning Bakes & Hampers",
              image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
              href: "/pantoa-sweets-bakery",
            },
            {
              title: "Commercial Baking Line",
              sub: "ISO 22000 Certified Plant",
              image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
              href: "/brands#confectionery",
            },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-gray-900 shadow-md hover:shadow-2xl transition-all"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  {item.sub}
                </span>
                <h4 className="text-lg font-black mt-0.5 leading-snug">{item.title}</h4>
                <div className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-red-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Complete 4-Brand Portfolio Cards with Large Photos */}
      <section className="bg-[#f7f6f2] py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#c71b27] bg-red-50 px-3 py-1 rounded-full border border-red-200">
                Brand Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0b3674] tracking-tight mt-2">
                4 Unified Business Entities
              </h2>
            </div>
            <Link
              href="/brands"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0b3674] hover:text-[#c71b27] transition-colors"
            >
              <span>View All Brands</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {BRANDS.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. 5 Visual Pillars of Operations (Photo Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0b3674] bg-blue-50 px-3 py-1 rounded-full">
            Vertical Synergy
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0b3674] tracking-tight mt-2">
            Our 5 Core Operations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {[
            {
              title: "Fine Dining",
              tag: "180+ Seating",
              image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
              href: "/marinozz-restaurant",
            },
            {
              title: "Artisanal Sweets",
              tag: "100% Pure Milk",
              image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
              href: "/pantoa-sweets-bakery",
            },
            {
              title: "Industrial Baking",
              tag: "ISO 22000 Plant",
              image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
              href: "/brands#confectionery",
            },
            {
              title: "Retail Boutiques",
              tag: "Prime High-Street",
              image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
              href: "/franchise",
            },
            {
              title: "Franchise Growth",
              tag: "Turnkey Models",
              image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
              href: "/franchise",
            },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-gray-900 shadow-sm hover:shadow-xl transition-all"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase text-amber-300 block">
                  {item.tag}
                </span>
                <h4 className="text-base font-black leading-tight mt-0.5">{item.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Grow With Us — Franchise & Expansion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0b3674] via-[#072147] to-[#0b3674] text-white p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                Franchise 2026
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Partner with Marinozz Group
              </h2>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-blue-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Turnkey Store Fit-Outs
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Daily Refrigerated Supply
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Staff Training Academy
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
              <Link
                href="/franchise"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold rounded-xl text-white bg-[#c71b27] hover:bg-[#9e141d] shadow-lg transition-all"
              >
                <span>Apply for Franchise</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold rounded-xl text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-center"
              >
                <span>Contact Head Office</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Latest Media Stories (Image-Led Cards, No Paragraph Excerpts) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3674] bg-blue-50 px-3 py-1 rounded-full">
              Newsroom
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0b3674] tracking-tight mt-2">
              Latest Stories &amp; Updates
            </h2>
          </div>
          <Link
            href="/news"
            className="text-xs font-bold text-[#c71b27] hover:underline flex items-center gap-1"
          >
            <span>View All Stories</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentNews.map((article) => (
            <Link
              key={article.id}
              href={`/news?id=${article.id}`}
              className="group bg-white rounded-3xl border border-gray-100 shadow-xs hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#0b3674]">
                    {article.category}
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-[11px] text-gray-400 mb-1.5">{article.date}</div>
                  <h3 className="text-base font-extrabold text-gray-900 line-clamp-2 group-hover:text-[#0b3674] transition-colors leading-snug">
                    {article.title}
                  </h3>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1 flex items-center justify-between text-xs font-bold text-[#c71b27]">
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. Contact & Location Quick Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f7f6f2] rounded-3xl p-8 sm:p-10 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-[#0b3674]">
              Marinozz Group Corporate Headquarters
            </h3>
            <p className="text-xs font-semibold text-gray-600 flex items-center justify-center sm:justify-start gap-1.5">
              <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span>MG SAM Center, 12 Mohakhali C/A, Dhaka-1212</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
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
