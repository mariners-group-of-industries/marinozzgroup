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
  Award,
  Layers,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { ECOSYSTEM_PILLARS, CERTIFICATIONS } from "@/data/ecosystem";

export const metadata = {
  title: "Our Business Ecosystem | Marinozz Group Integrated Food Infrastructure",
  description:
    "Discover Marinozz Group's integrated farm-to-table food ecosystem, centralized manufacturing, cold-chain logistics, and turnkey franchise governance.",
};

export default function EcosystemPage() {
  const iconMap: Record<string, any> = {
    Wheat,
    Factory,
    Truck,
    Store,
    Handshake,
  };

  return (
    <div className="space-y-20 pb-24">
      <PageHeader
        badge="Supply Chain & Synergy"
        title="Our Business Ecosystem"
        subtitle="A vertically integrated food and hospitality architecture uniting ethical sourcing, centralized food science, cold-chain distribution, and multichannel retail."
        breadcrumb={[{ label: "Business Ecosystem" }]}
      />

      {/* Intro Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c71b27] bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Vertical Integration
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3674] tracking-tight">
              Why an Integrated Ecosystem Matters
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              In food and hospitality, quality cannot be inspected into a dish at the final second—it
              must be built into the entire journey. Many restaurant and sweet vendors struggle with
              erratic raw ingredient quality, volatile wholesale pricing, and food safety risks.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Marinozz Group, backed by <strong>Mariners Group</strong>, operates an end-to-end
              ecosystem where every link is controlled, standardized, and monitored. This ensures
              traceability from agricultural milk farms to the final dining table, protecting guest
              health and maximizing franchise business predictability.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/franchise"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg bg-[#0b3674] text-white hover:bg-[#072147] transition-colors"
              >
                <span>Partner in Our Ecosystem</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#f7f6f2] p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0b3674] uppercase tracking-wide">
                <Layers className="w-4 h-4 text-red-600" />
                <span>The Marinozz Value Loop</span>
              </div>
              <div className="space-y-3">
                {[
                  { step: "1", title: "Direct Farm Procurement", desc: "Pure cow milk & natural spices" },
                  { step: "2", title: "Central Kitchen Standardization", desc: "Calibrated recipe execution" },
                  { step: "3", title: "Temperature Controlled Fleet", desc: "Zero break cold distribution" },
                  { step: "4", title: "Multichannel Dining & Retail", desc: "Restaurants, boutiques & kiosks" },
                  { step: "5", title: "Franchise & POS Governance", desc: "Turnkey operational profitability" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-xs"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-[#0b3674] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">{item.title}</h4>
                      <p className="text-[11px] text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Ecosystem Pillars */}
      <section className="bg-[#f7f6f2] py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0b3674] bg-blue-50 px-3 py-1 rounded-full">
              Infrastructure Blueprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3674] tracking-tight mt-3">
              The 5 Pillars of Our Ecosystem
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              From raw procurement to retail dining, discover how our entities cooperate seamlessly.
            </p>
          </div>

          <div className="space-y-8">
            {ECOSYSTEM_PILLARS.map((pillar) => {
              const Icon = iconMap[pillar.icon] || Factory;
              return (
                <div
                  key={pillar.number}
                  className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-8 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-5 max-w-2xl">
                    <div className="p-4 rounded-2xl bg-blue-50 text-[#0b3674] flex-shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-[#c71b27]">PILLAR {pillar.number}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-xs text-gray-500 font-medium">{pillar.subtitle}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{pillar.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end">
                    {pillar.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Food Safety */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#c71b27] bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Quality Assurance
          </span>
          <h2 className="text-3xl font-extrabold text-[#0b3674] tracking-tight mt-3">
            Standards & Certifications
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Independent, international and domestic food regulatory benchmarks observed across the group.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-3"
            >
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 w-fit">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-gray-900">{cert.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
