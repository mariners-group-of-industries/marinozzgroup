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

      {/* Intro Value Proposition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c71b27] bg-red-50 px-3 py-1 rounded-full border border-red-200">
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
              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-xs">
                <div className="text-2xl font-extrabold text-[#c71b27]">Turnkey</div>
                <div className="text-xs text-gray-500 mt-1">
                  Complete interior design &amp; fit-out support
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-xs">
                <div className="text-2xl font-extrabold text-[#0b3674]">Daily Supply</div>
                <div className="text-xs text-gray-500 mt-1">
                  Refrigerated cold-chain inventory delivery
                </div>
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
