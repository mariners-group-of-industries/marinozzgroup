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
  HeartHandshake,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "About Marinozz Group | Heritage, Vision & Corporate Governance",
  description:
    "Learn about Marinozz Group, its strategic association with Mariners Group, corporate governance, culinary philosophy, and long-term hospitality roadmap.",
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-24">
      <PageHeader
        badge="Corporate Profile"
        title="About Marinozz Group"
        subtitle="A diversified food, restaurant, confectionery and retail ecosystem built on the principles of integrity, maritime discipline, and culinary mastery."
        breadcrumb={[{ label: "About Us" }]}
      />

      {/* The Marinozz Story & Mariners Group Connection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c71b27] bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Our Genesis
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3674] tracking-tight">
              Rooted in Maritime Heritage, Dedicated to Hospitality
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Marinozz Group was conceived to bring world-class discipline, structured operational
              integrity, and uncompromising hygiene to the food, dining, and confectionery landscape.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Proudly associated with <strong>Mariners Group</strong>—a respected institution known
              for excellence in maritime operations, professional discipline, and ethical business
              governance—Marinozz inherits a distinct ethos: precision in planning, continuous
              adherence to safety, and heartfelt respect for every guest who walks through our doors.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              From our flagship <strong>Marinozz Multicuisine Restaurant</strong> celebrating global
              culinary arts, to <strong>Pantoa Sweets & Bakery</strong> preserving artisanal sweetmaking
              purity, and <strong>Marinozz Confectionery PLC</strong> scaling packaged food distribution,
              every initiative reflects an obsession with genuine quality.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-50 text-[#0b3674]">
                <Compass className="w-8 h-8 text-[#0b3674]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Maritime Rigor in Culinary Operations</h4>
                <p className="text-xs text-gray-500">
                  Standardized SOPs, zero-compromise hygiene checklists, and continuous training.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                alt="Marinozz Group Corporate Dining & Hospitality"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Core Values */}
      <section className="bg-[#f7f6f2] py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0b3674] bg-blue-50 px-3 py-1 rounded-full">
              Strategic Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3674] tracking-tight mt-3">
              Vision, Mission & Values
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              The fundamental benchmarks that direct every culinary creation, factory line, and franchise rollout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div className="p-3.5 rounded-xl bg-red-50 text-[#c71b27] w-fit">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0b3674]">Our Corporate Vision</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To be the most respected, trustworthy, and innovative Food & Hospitality conglomerate
                in the region—recognized for setting gold standards in culinary craftsmanship,
                hygienic purity, employee dignity, and sustainable franchise prosperity.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div className="p-3.5 rounded-xl bg-blue-50 text-[#0b3674] w-fit">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0b3674]">Our Operational Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To consistently delight guests and retail consumers through 100% pure, wholesome food;
                to nurture artisanal confectionery heritage; and to empower partners with structured,
                transparent, and profitable turnkey business ecosystems.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Absolute Integrity",
                desc: "Honest sourcing, transparent pricing, and zero adulteration in any recipe or ingredient.",
              },
              {
                title: "Uncompromising Hygiene",
                desc: "Daily microbial lab analysis, strict HACCP protocols, and pristine guest environments.",
              },
              {
                title: "Warm Hospitality",
                desc: "Treating every guest, customer, and partner as family with respectful, attentive warmth.",
              },
              {
                title: "Sustainable Growth",
                desc: "Energy-efficient manufacturing, eco-friendly packaging, and shared community prosperity.",
              },
            ].map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2"
              >
                <div className="text-xs font-bold text-[#c71b27]">VALUE 0{idx + 1}</div>
                <h4 className="text-base font-bold text-gray-900">{val.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Corporate Governance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#072147] to-[#0b3674] text-white shadow-xl space-y-6">
              <ShieldCheck className="w-10 h-10 text-red-400" />
              <h3 className="text-2xl font-bold">Marinozz Corporate Governance</h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Under the strategic guidance of the Mariners Group leadership, our board adheres to
                the highest standards of corporate compliance, fiscal audit transparency, food
                regulatory certifications, and workplace equity.
              </p>
              <div className="space-y-3 pt-2 text-xs text-blue-200 border-t border-blue-900/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Central Audit & Quality Assurance Committee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Strict Supplier Code of Conduct</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Food Safety & Employee Well-being Charter</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0b3674] bg-blue-50 px-3 py-1 rounded-full">
              Executive Commitment
            </span>
            <h2 className="text-3xl font-extrabold text-[#0b3674] tracking-tight">
              A Culture of Excellence & Accountability
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Every division of Marinozz Group is led by seasoned industry practitioners—from certified
              executive master chefs and food safety microbiologists to retail development veterans and
              maritime logistics experts.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              We reject the shortcut culture common in transient food ventures. By investing heavily
              in centralized infrastructure, automated hygiene, and employee culinary academies, we
              ensure that the Marinozz name stands for enduring trust across generations.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/ecosystem"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg text-white bg-[#0b3674] hover:bg-[#072147] transition-colors"
              >
                <span>Explore Our Business Ecosystem</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/franchise"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <span>Franchise Opportunities</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
