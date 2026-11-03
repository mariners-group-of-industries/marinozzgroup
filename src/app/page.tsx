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
  Compass,
} from "lucide-react";
import BrandCard from "@/components/BrandCard";
import HomeSignatureExplorer from "@/components/HomeSignatureExplorer";
import { BRANDS } from "@/data/brands";
import { INITIAL_NEWS } from "@/data/news";

export default function HomePage() {
  const recentNews = INITIAL_NEWS.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-hidden">
      {/* 1. Full-Width Editorial Hero Section (Clean Front View) */}
      <section className="relative bg-gradient-to-b from-white via-[#faf9f6]/60 to-white text-gray-900 border-b border-gray-100 overflow-hidden">
        {/* Subtle ambient luxury glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-14 sm:pt-8 sm:pb-20 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.14] text-[#0b3674]">
                Nourishing Lives,{" "}
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#c71b27] via-rose-600 to-[#9e141d]">
                  Elevating Hospitality
                </span>
              </h1>

              {/* Two CTA Links */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/brands"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold rounded-xl text-white bg-gradient-to-r from-[#c71b27] to-[#9e141d] hover:from-[#9e141d] hover:to-[#7f0f16] shadow-lg shadow-red-900/15 hover:shadow-xl hover:shadow-red-900/25 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Explore Our Brands</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/franchise"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold rounded-xl text-[#0b3674] bg-white hover:bg-gray-50 border-2 border-gray-200 shadow-xs hover:border-[#0b3674]/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Franchise &amp; Partnerships</span>
                </Link>
              </div>

              {/* Interactive Quick Trust Pillars & Brand Links */}
              <div className="pt-6 border-t border-gray-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-gray-700">
                <Link
                  href="/marinozz-restaurant"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-gray-100 hover:border-red-200 hover:bg-red-50/40 shadow-xs transition-all"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 flex-shrink-0" />
                  <span>Fine Dining</span>
                </Link>
                <Link
                  href="/pantoa-sweets-bakery"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-gray-100 hover:border-amber-200 hover:bg-amber-50/40 shadow-xs transition-all"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0" />
                  <span>Sweets &amp; Bakery</span>
                </Link>
                <Link
                  href="/brands#confectionery"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-gray-100 hover:border-red-300 hover:bg-red-50/40 shadow-xs transition-all"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-red-800 flex-shrink-0" />
                  <span>FMCG Production</span>
                </Link>
                <Link
                  href="/brands#marinozz-plc"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-gray-100 hover:border-blue-200 hover:bg-blue-50/40 shadow-xs transition-all"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0b3674] flex-shrink-0" />
                  <span>Supply Backbone</span>
                </Link>
              </div>
            </div>

            {/* Right Multi-Layered Editorial Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative glowing gradient aura */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#c71b27]/15 via-amber-400/10 to-[#0b3674]/15 blur-xl opacity-75" />

                {/* Main Hero Media Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 aspect-[4/5] bg-gray-900 group">
                  <Image
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                    alt="Premium Multicuisine Dining at Marinozz Restaurant"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Floating Top Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-md text-[#0b3674] shadow-md border border-white/40">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      100% Halal &amp; ISO Aligned
                    </span>
                  </div>

                  {/* Bottom Caption Card */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md text-gray-900 shadow-xl border border-white/60">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                          <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#c71b27]">
                            Flagship Dining Destination
                          </p>
                        </div>
                        <h3 className="text-sm font-extrabold text-gray-900 mt-0.5">
                          Marinozz Multicuisine Restaurant
                        </h3>
                        <p className="text-[11px] text-gray-500">
                          MG SAM Center, 12 Mohakhali C/A, Dhaka-1212
                        </p>
                      </div>
                      <Link
                        href="/marinozz-restaurant"
                        className="p-2.5 rounded-xl bg-red-50 text-[#c71b27] hover:bg-[#c71b27] hover:text-white shadow-xs transition-colors flex-shrink-0"
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

      {/* 2. Interactive Signature Culinary & Confectionery Tasting Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HomeSignatureExplorer />
      </section>

      {/* 3. About Marinozz Group — Concise Corporate Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border border-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                alt="Marinozz Group Hospitality Space"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-red-50 text-[#c71b27]">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0b3674]">Mariners Heritage</h4>
                  <p className="text-xs text-gray-500">
                    Governed by timeless discipline and ethical business practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0b3674] bg-blue-50 border border-blue-100">
              About Marinozz Group
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3674] tracking-tight leading-tight">
              A Unified Food &amp; Hospitality Business Ecosystem
            </h2>

            <p className="text-base text-gray-700 leading-relaxed">
              Marinozz Group represents a strategic diversification into consumer food,
              hospitality, and confectionery, founded on the prestigious corporate pedigree of{" "}
              <strong>Mariners Group</strong>. Our vision is to elevate dining standards, preserve
              authentic confectionery heritage, and build scalable food enterprises.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              Through vertical integration—from direct farm and dairy procurement to state-of-the-art
              central kitchens and temperature-regulated logistics—Marinozz guarantees unmatched
              freshness, hygienic safety, and consistent flavor profile across all customer touchpoints.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div>
                <div className="text-2xl font-extrabold text-[#c71b27]">4</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Strategic Entities
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#0b3674]">100%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Halal &amp; Traceable
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-amber-600">Nationwide</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Expansion Vision
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0b3674] hover:text-[#c71b27] group"
              >
                <span>Discover Our Corporate Heritage &amp; Governance</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Complete 4-Brand Ecosystem Portfolio */}
      <section className="bg-[#f7f6f2] py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#c71b27] bg-red-50 px-3 py-1 rounded-full border border-red-200">
                Complete Brand Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3674] tracking-tight mt-3">
                4 Distinct Entities, One Standard of Excellence
              </h2>
              <p className="text-sm text-gray-600 mt-2 max-w-xl">
                Each entity within the Marinozz ecosystem fulfills a vital mission—spanning fine dining, heritage sweets, commercial baking, and corporate supply.
              </p>
            </div>

            <Link
              href="/brands"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0b3674] hover:text-[#c71b27] transition-colors"
            >
              <span>Compare All 4 Entities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {BRANDS.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Expertise — Restaurant, Confectionery, Food Production, Retail, Franchise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0b3674] bg-blue-50 px-3 py-1 rounded-full">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3674] tracking-tight mt-3">
            Our Breadth of Expertise
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            A comprehensive spectrum spanning agricultural sourcing, gastronomic craft,
            industrial packaging, and turnkey retail scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            {
              title: "Fine Dining",
              desc: "Multi-cuisine gastronomy, banquets, and executive dining suites.",
              icon: UtensilsCrossed,
              color: "text-red-700 bg-red-50",
              href: "/marinozz-restaurant",
            },
            {
              title: "Confectionery",
              desc: "Artisanal dairy sweets, authentic syrups, and pure ghee specialties.",
              icon: Cake,
              color: "text-amber-700 bg-amber-50",
              href: "/pantoa-sweets-bakery",
            },
            {
              title: "Food Production",
              desc: "ISO 22000 aligned commercial baking lines and packaging plants.",
              icon: Factory,
              color: "text-red-800 bg-red-50",
              href: "/brands#confectionery",
            },
            {
              title: "Retail & Kiosks",
              desc: "High-street retail boutiques and rapid grab-and-go kiosk formats.",
              icon: Store,
              color: "text-blue-700 bg-blue-50",
              href: "/franchise",
            },
            {
              title: "Franchise Scale",
              desc: "Turnkey operational systems, staff academies, and POS supply hubs.",
              icon: Handshake,
              color: "text-emerald-700 bg-emerald-50",
              href: "/franchise",
            },
          ].map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <Link
                key={idx}
                href={exp.href}
                className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#0b3674]/30 shadow-xs hover:shadow-lg transition-all text-center flex flex-col items-center"
              >
                <div
                  className={`p-4 rounded-2xl ${exp.color} mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#0b3674] mb-2">
                  {exp.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{exp.desc}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 6. Our Philosophy — Quality, Hospitality, Consistency, Sustainability */}
      <section className="bg-gradient-to-b from-white to-[#f7f6f2] py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c71b27] bg-red-50 px-3 py-1 rounded-full">
                Guiding Principles
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3674] tracking-tight">
                Our Corporate Philosophy
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Hospitality is fundamentally a discipline of trust. At Marinozz Group, we believe
                that greatness in food and beverage requires continuous rigor, transparent sourcing,
                and respect for both the guest and the community.
              </p>
              <div className="p-4 rounded-2xl bg-white border border-gray-200 text-xs text-gray-600 shadow-xs">
                <p className="font-semibold text-[#0b3674] mb-1">
                  &ldquo;A meal is more than nourishment—it is a covenant of hygiene, flavor, and
                  dignity.&rdquo;
                </p>
                <span className="text-gray-400">— Marinozz Group Board Charter</span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: "Uncompromising Quality",
                  desc: "Zero-compromise on pure ingredients, certified farm dairy, and Halal meat standards.",
                  icon: Award,
                },
                {
                  title: "Heartfelt Hospitality",
                  desc: "Courteous, attentive guest service inspired by international maritime traditions.",
                  icon: Sparkles,
                },
                {
                  title: "Standardized Consistency",
                  desc: "Rigorous master recipes and calibrated culinary SOPs guaranteeing identical taste.",
                  icon: ShieldCheck,
                },
                {
                  title: "Responsible Business",
                  desc: "Eco-conscious baking ovens, biodegradable food packing, and community support.",
                  icon: Leaf,
                },
              ].map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-md transition-shadow space-y-2.5"
                  >
                    <Icon className="w-6 h-6 text-[#c71b27]" />
                    <h4 className="text-base font-bold text-[#0b3674]">{p.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Grow With Us — Franchise & Business Collaboration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0b3674] via-[#072147] to-[#0b3674] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                Strategic Expansion 2026
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Grow With Marinozz Group: Franchise &amp; Partnership
              </h2>
              <p className="text-sm sm:text-base text-blue-100/90 max-w-2xl leading-relaxed">
                We are actively partnering with ambitious restaurateurs, retail property owners,
                and FMCG distributors across high-density urban corridors. Benefit from complete
                turnkey fit-outs, centralized kitchen supplies, and brand equity.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-blue-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Turnkey Store Blueprints
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Daily Cold-Chain Inventory
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Marketing &amp; Staff Training
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/franchise"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold rounded-xl text-white bg-[#c71b27] hover:bg-[#9e141d] shadow-lg transition-all"
              >
                <span>Apply for Franchise</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold rounded-xl text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-center"
              >
                Schedule Corporate Meeting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Latest Stories — Direct Reader Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3674] bg-blue-50 px-3 py-1 rounded-full">
              Newsroom
            </span>
            <h2 className="text-3xl font-extrabold text-[#0b3674] tracking-tight mt-3">
              Latest Stories &amp; Corporate Announcements
            </h2>
          </div>
          <Link
            href="/news"
            className="text-sm font-bold text-[#c71b27] hover:underline flex items-center gap-1"
          >
            <span>View All News &amp; Media</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentNews.map((article) => (
            <Link
              key={article.id}
              href={`/news?id=${article.id}`}
              className="group bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-xl hover:border-blue-200 transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-xs text-[#0b3674]">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs text-gray-400 mb-2">
                    {article.date} • {article.readTime}
                  </div>
                  <h3 className="text-base font-extrabold text-gray-900 line-clamp-2 group-hover:text-[#0b3674] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-3 mt-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between text-xs">
                <span className="text-gray-400">By {article.author}</span>
                <span className="font-bold text-[#0b3674] group-hover:text-[#c71b27] flex items-center gap-1">
                  Read Story →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 9. Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f7f6f2] rounded-3xl p-8 sm:p-12 border border-gray-200 text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#c71b27] bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3674] tracking-tight">
            Connect With Marinozz Group
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            Whether booking an executive table, arranging bulk confectionery hampers, exploring
            franchise territories, or initiating corporate supply contracts—we are here to serve.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3.5 text-sm font-bold rounded-xl text-white bg-[#0b3674] hover:bg-[#072147] shadow transition-colors"
            >
              Contact Our Head Office
            </Link>
            <a
              href="tel:+8801335149006"
              className="px-6 py-3.5 text-sm font-bold rounded-xl text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 shadow-xs transition-colors"
            >
              Call Front Desk: +880 1335-149006
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
