import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Handshake,
  TrendingUp,
  Building2,
  Store,
  DollarSign,
  ShieldCheck,
  Award,
  ArrowRight,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import FranchiseForm from "@/components/FranchiseForm";

export const metadata = {
  title: "Franchise & Partnerships | Marinozz Group Expansion Opportunities",
  description:
    "Explore turnkey franchise opportunities with Marinozz Restaurant, Pantoa Sweets & Bakery, and retail express kiosks. High-yield, structured food business models.",
};

export default function FranchisePage() {
  return (
    <div className="space-y-20 pb-24">
      <PageHeader
        badge="Strategic Expansion"
        title="Franchise & Growth Partnerships"
        subtitle="Join hands with a high-growth food and hospitality ecosystem backed by the heritage and corporate governance of Mariners Group."
        breadcrumb={[{ label: "Franchise & Growth" }]}
      />

      {/* Intro Value Proposition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c71b27] bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Why Marinozz Group
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3674] tracking-tight">
              A Turnkey Food Enterprise Model Built for Long-Term Prosperity
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Operating a food or restaurant business independently is often hindered by chef
              turnover, kitchen variance, supply chain breakdowns, and high wastage.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Marinozz Group de-risks your investment through centralized production and proven
              operational blueprints. We prepare the core sweets, sauces, and baked products in our
              hygienic central facilities and deliver them directly to your counter, drastically
              reducing your kitchen footprint, overhead, and food wastage.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs">
                <div className="text-2xl font-bold text-[#c71b27]">Turnkey</div>
                <div className="text-xs text-gray-500 mt-1">Complete interior design & fit-out support</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs">
                <div className="text-2xl font-bold text-[#0b3674]">Daily Supply</div>
                <div className="text-xs text-gray-500 mt-1">Refrigerated cold-chain inventory delivery</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border border-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                alt="Marinozz Franchise Hospitality"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Models Matrix */}
      <section className="bg-[#f7f6f2] py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0b3674] bg-blue-50 px-3 py-1 rounded-full">
              Partnership Formats
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3674] tracking-tight mt-3">
              Explore Our Franchise Models
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Select the footprint that aligns with your real estate assets, investment bracket, and market vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Model 1: Pantoa Sweet Boutique */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:border-amber-300 transition-all">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
                  Most Popular
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  Pantoa Sweets & Bakery Boutique
                </h3>
                <p className="text-xs text-gray-500 mt-1">High-street retail destination format</p>

                <div className="my-6 p-4 rounded-xl bg-gray-50 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Space Requirement:</span>
                    <strong className="text-gray-900">600 – 1,200 sq. ft.</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Ideal Location:</span>
                    <strong className="text-gray-900">High-Street / Avenues</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Central Kitchen Supply:</span>
                    <strong className="text-emerald-700">100% Guaranteed</strong>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Complete sweet, pastry, cake & hamper displays</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Boutique seating for coffee and quick indulgence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Centralized POS and inventory tracking system</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6">
                <a
                  href="#application-form"
                  className="w-full inline-flex items-center justify-center py-2.5 text-xs font-semibold rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition-colors"
                >
                  Inquire for Boutique Format
                </a>
              </div>
            </div>

            {/* Model 2: Pantoa Express Kiosk */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:border-red-300 transition-all">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200">
                  Rapid Rollout
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  Pantoa Express Kiosk
                </h3>
                <p className="text-xs text-gray-500 mt-1">Compact transit & mall kiosk model</p>

                <div className="my-6 p-4 rounded-xl bg-gray-50 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Space Requirement:</span>
                    <strong className="text-gray-900">150 – 350 sq. ft.</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Ideal Location:</span>
                    <strong className="text-gray-900">Malls, Metro & Towers</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Payback Horizon:</span>
                    <strong className="text-emerald-700">Swift & Agile</strong>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c71b27] flex-shrink-0" />
                    <span>Focus on top-selling packaged sweets & bakes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c71b27] flex-shrink-0" />
                    <span>Low staff requirement (2-3 attendants)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c71b27] flex-shrink-0" />
                    <span>High impulse takeaway sales & corporate gifting</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6">
                <a
                  href="#application-form"
                  className="w-full inline-flex items-center justify-center py-2.5 text-xs font-semibold rounded-lg bg-[#c71b27] hover:bg-[#9e141d] text-white transition-colors"
                >
                  Inquire for Express Kiosk
                </a>
              </div>
            </div>

            {/* Model 3: Marinozz Restaurant */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-all">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200">
                  Premier Asset
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  Marinozz Multicuisine Restaurant
                </h3>
                <p className="text-xs text-gray-500 mt-1">Large-scale dining & banquet facility</p>

                <div className="my-6 p-4 rounded-xl bg-gray-50 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Space Requirement:</span>
                    <strong className="text-gray-900">2,500 – 5,000 sq. ft.</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Ideal Location:</span>
                    <strong className="text-gray-900">Prime Commercial Zones</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Territory Scope:</span>
                    <strong className="text-[#0b3674]">Exclusive District</strong>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0b3674] flex-shrink-0" />
                    <span>Continental, Pan-Asian & Mughlai menu rights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0b3674] flex-shrink-0" />
                    <span>Executive banquet & private celebration hosting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0b3674] flex-shrink-0" />
                    <span>Full master chef and service steward training</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6">
                <a
                  href="#application-form"
                  className="w-full inline-flex items-center justify-center py-2.5 text-xs font-semibold rounded-lg bg-[#0b3674] hover:bg-[#072147] text-white transition-colors"
                >
                  Inquire for Restaurant Franchise
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Roadmap: 5 Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0b3674] bg-blue-50 px-3 py-1 rounded-full">
            Clear Roadmap
          </span>
          <h2 className="text-3xl font-extrabold text-[#0b3674] tracking-tight mt-3">
            Your 5-Step Franchise Journey
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            A transparent, professional onboarding process from initial application to grand opening day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            { step: "01", title: "Expression of Interest", desc: "Submit your details, proposed territory, and commercial profile." },
            { step: "02", title: "Site Evaluation", desc: "Our real estate team inspects footfall, visibility, and zoning suitability." },
            { step: "03", title: "Legal Agreement", desc: "Transparent licensing contract, territory lock, and financial setup." },
            { step: "04", title: "Fit-out & Training", desc: "Standardized interior build-out and intensive staff hospitality academy." },
            { step: "05", title: "Grand Opening", desc: "Coordinated marketing blitz, influencer tastings, and commercial kickoff." },
          ].map((s, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-3 relative"
            >
              <div className="text-2xl font-black text-[#c71b27]">{s.step}</div>
              <h4 className="text-sm font-bold text-gray-900">{s.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Application Form */}
      <section id="application-form" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FranchiseForm />
      </section>
    </div>
  );
}
