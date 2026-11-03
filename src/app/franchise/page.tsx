import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import FranchiseForm from "@/components/FranchiseForm";
import FranchiseModelsGrid from "@/components/FranchiseModelsGrid";

export const metadata = {
  title: "Franchise & Partnerships | Marinozz Group Expansion Opportunities",
  description:
    "Explore turnkey franchise opportunities with Marinozz Restaurant, Pantoa Sweets & Bakery, and retail express kiosks. High-yield, structured food business models.",
};

export default function FranchisePage() {
  return (
    <div className="space-y-20 pb-24">
      <PageHeader
        title="Franchise & Growth Partnerships"
        subtitle="Join hands with a high-growth food and hospitality ecosystem backed by the heritage and corporate governance of Mariners Group."
      />

      {/* Intro Value Proposition (Visual-First, No Text Walls) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c71b27] bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Franchise Opportunities 2026
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b3674] tracking-tight leading-tight">
              Turnkey Food &amp; Hospitality Partnerships
            </h2>

            {/* Visual Advantage Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              {[
                { title: "Turnkey Setup", sub: "Interior Fit-Out", color: "bg-red-50 text-[#c71b27] border-red-200" },
                { title: "Daily Fleet Supply", sub: "Refrigerated Stock", color: "bg-blue-50 text-[#0b3674] border-blue-200" },
                { title: "Zero Food Waste", sub: "Central Kitchen", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
                { title: "Staff Academy", sub: "Hospitality Training", color: "bg-amber-50 text-amber-800 border-amber-200" },
              ].map((pill, pIdx) => (
                <div key={pIdx} className={`p-3 rounded-2xl border ${pill.color}`}>
                  <div className="text-xs font-black">{pill.title}</div>
                  <div className="text-[10px] font-semibold opacity-80 mt-0.5">{pill.sub}</div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#application-form"
                className="inline-flex items-center gap-2 px-7 py-4 text-xs font-bold rounded-2xl text-white bg-gradient-to-r from-[#c71b27] to-[#9e141d] hover:from-[#9e141d] hover:to-[#7f0f16] shadow-xl shadow-red-900/15 hover:-translate-y-0.5 transition-all"
              >
                <span>Apply for Franchise</span>
                <span className="text-sm">→</span>
              </a>
              <a
                href="#models"
                className="inline-flex items-center gap-2 px-6 py-4 text-xs font-bold rounded-2xl text-[#0b3674] bg-white border border-gray-200 hover:bg-gray-50 transition-all shadow-xs"
              >
                <span>View Models &amp; Margins</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-gray-100 group">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                alt="Marinozz Franchise Hospitality"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-bold uppercase text-amber-300 block">
                  Turnkey Operations
                </span>
                <h4 className="text-base font-black">Centralized Sourcing &amp; Proven Footprint</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Models Matrix */}
      <section className="bg-[#f7f6f2] py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3674] bg-blue-50 px-3 py-1 rounded-full">
              Partnership Formats
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3674] tracking-tight mt-3">
              Explore Our Franchise Models
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Click any format below to load its operational parameters directly into the application form.
            </p>
          </div>

          <FranchiseModelsGrid />
        </div>
      </section>

      {/* Onboarding Roadmap: 5 Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0b3674] bg-blue-50 px-3 py-1 rounded-full">
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
            {
              step: "01",
              title: "Expression of Interest",
              desc: "Submit your details, proposed territory, and commercial profile.",
            },
            {
              step: "02",
              title: "Site Evaluation",
              desc: "Our real estate team inspects footfall, visibility, and zoning suitability.",
            },
            {
              step: "03",
              title: "Legal Agreement",
              desc: "Transparent licensing contract, territory lock, and financial setup.",
            },
            {
              step: "04",
              title: "Fit-out & Training",
              desc: "Standardized interior build-out and intensive staff hospitality academy.",
            },
            {
              step: "05",
              title: "Grand Opening",
              desc: "Coordinated marketing blitz, influencer tastings, and commercial kickoff.",
            },
          ].map((s, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3 relative"
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
