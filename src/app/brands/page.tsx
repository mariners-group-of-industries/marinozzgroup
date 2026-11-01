import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Building2, Utensils, Cake } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { BRANDS } from "@/data/brands";

export const metadata = {
  title: "Our Brands | Marinozz Multicuisine Restaurant, Pantoa Sweets & Marinozz PLC",
  description:
    "Discover the multi-brand food and hospitality portfolio of Marinozz Group, including Marinozz Restaurant, Pantoa Sweets & Bakery, Marinozz Confectionery PLC, and Marinozz PLC.",
};

export default function BrandsPage() {
  return (
    <div className="space-y-20 pb-24">
      <PageHeader
        badge="Brand Ecosystem"
        title="Our Portfolio of Brands"
        subtitle="Uniting diverse culinary formats under one uncompromising corporate standard of purity, taste, and hospitality."
        breadcrumb={[{ label: "Our Brands" }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Brand 1: Marinozz Multicuisine Restaurant */}
        <div id="restaurant" className="scroll-mt-28 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
                  Flagship Dining
                </span>
                <span className="text-xs text-gray-500">• Multicuisine Hospitality</span>
              </div>

              <div className="relative h-14 w-56">
                <Image
                  src="/logos/marinozz-restaurant.png"
                  alt="Marinozz Multicuisine Restaurant"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b3674] tracking-tight">
                Marinozz Multicuisine Restaurant
              </h2>

              <p className="text-sm font-medium text-gray-600 italic">
                &ldquo;A Symphony of Global Flavours, Served with Maritime Warmth&rdquo;
              </p>

              <p className="text-sm text-gray-700 leading-relaxed">
                Marinozz Multicuisine Restaurant is our premier fine dining destination, offering
                an expansive gourmet repertoire spanning Continental steaks, sizzling platters,
                vibrant Pan-Asian wok classics, authentic slow-cooked Mughlai dum biryanis, and
                botanical mocktails.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "180+ Seating Capacity & Banquet Hall",
                  "Continental, Pan-Asian & Mughlai",
                  "Transparent Kitchen & Daily Oil Testing",
                  "Dedicated Family Suites & VIP Lounges",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#c71b27] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/marinozz-restaurant"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl text-white bg-[#c71b27] hover:bg-[#9e141d] shadow transition-colors"
                >
                  <span>Explore Restaurant Page & Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/marinozz-restaurant#reservation"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Book a Table
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                alt="Marinozz Multicuisine Restaurant Dining"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Brand 2: Pantoa Sweets & Bakery */}
        <div id="pantoa" className="scroll-mt-28 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80"
                alt="Pantoa Sweets and Bakery Art"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200">
                  Artisanal Heritage
                </span>
                <span className="text-xs text-gray-500">• Sweets & European Bakery</span>
              </div>

              <div className="relative h-14 w-56 rounded-xl overflow-hidden shadow-xs border border-red-100">
                <Image
                  src="/logos/pantoa-sweets.jpg"
                  alt="Pantoa Sweets & Bakery"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b3674] tracking-tight">
                Pantoa Sweets & Bakery
              </h2>

              <p className="text-sm font-medium text-gray-600 italic">
                &ldquo;Timeless Bengali Confectionery Crafted with Modern Hygienic Mastery&rdquo;
              </p>

              <p className="text-sm text-gray-700 leading-relaxed">
                Pantoa revives traditional Bengali sweet-making using 100% natural pure cow dairy,
                zero synthetic colors, and authentic pure ghee. Combined with modern European pastry
                craft, rich cheesecakes, and morning bakery goods, Pantoa is expanding into prime
                high-street retail boutiques and express kiosks nationwide.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Signature Royal Pantoa & Mishti Doi",
                  "100% Pure Cow Milk Sourcing",
                  "European Pastries & Artisanal Breads",
                  "Bespoke Corporate Gift Box Assortments",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/pantoa-sweets-bakery"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl text-white bg-amber-600 hover:bg-amber-700 shadow transition-colors"
                >
                  <span>Explore Pantoa Sweets Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/franchise"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Franchise Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Brand 3: Marinozz Confectionery PLC */}
        <div id="confectionery" className="scroll-mt-28 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
                  Industrial Food Processing
                </span>
                <span className="text-xs text-gray-500">• FMCG & Commercial Baking</span>
              </div>

              <div className="relative h-14 w-56">
                <Image
                  src="/logos/marinozz-confectionery.png"
                  alt="Marinozz Confectionery PLC"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b3674] tracking-tight">
                Marinozz Confectionery PLC
              </h2>

              <p className="text-sm font-medium text-gray-600 italic">
                &ldquo;Industrial Food Production Built on Precision, Purity & Scale&rdquo;
              </p>

              <p className="text-sm text-gray-700 leading-relaxed">
                Operating semi-automated production lines adhering to ISO 22000 and HACCP food
                safety benchmarks. Marinozz Confectionery PLC manufactures premium biscuits,
                dry cakes, toast, wafers, and snack confectionery packaged for wholesale and
                retail distribution across regional distribution channels.
              </p>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/60 grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-lg font-bold text-[#0b3674]">5 Tons+</div>
                  <div className="text-[10px] text-gray-500 uppercase">Daily Capacity</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#c71b27]">ISO 22000</div>
                  <div className="text-[10px] text-gray-500 uppercase">Food Standard</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-amber-600">24+ SKUs</div>
                  <div className="text-[10px] text-gray-500 uppercase">Packaged Lineup</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg bg-[#0b3674] text-white hover:bg-[#072147] transition-colors"
                >
                  <span>Wholesale & Distribution Inquiries</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80"
                alt="Marinozz Confectionery PLC Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Brand 4: Marinozz PLC */}
        <div id="marinozz-plc" className="scroll-mt-28 bg-[#f7f6f2] rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-800 bg-blue-100 border border-blue-200">
                  Strategic Corporate Entity
                </span>
                <span className="text-xs text-gray-500">• Supply Chain & Holding</span>
              </div>

              <div className="relative h-14 w-56">
                <Image
                  src="/logos/marinozz-plc.png"
                  alt="Marinozz PLC"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b3674] tracking-tight">
                Marinozz PLC
              </h2>

              <p className="text-sm font-medium text-gray-600 italic">
                &ldquo;The Strategic Backbone of Food & Hospitality Supply Chain&rdquo;
              </p>

              <p className="text-sm text-gray-700 leading-relaxed">
                Marinozz PLC manages group-wide commodity sourcing, cold chain logistics,
                franchise administration, and brand equity. In partnership with Mariners Group,
                Marinozz PLC guarantees that every outlet receives guaranteed, timely inventory
                while upholding strict corporate governance.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <ShieldCheck className="w-4 h-4 text-[#0b3674]" />
                  <span>Corporate Governance & Audit</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <Building2 className="w-4 h-4 text-[#0b3674]" />
                  <span>Franchise Compliance Hub</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <Factory className="w-4 h-4 text-[#0b3674]" />
                  <span>Central Procurement Engine</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-200 space-y-4">
              <h4 className="text-sm font-bold text-[#0b3674]">Corporate Inquiries</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                For institutional supplier proposals, real estate leasing for retail expansion, or
                investor briefings, contact the Marinozz PLC executive office.
              </p>
              <div className="text-xs text-gray-700 space-y-1 pt-1">
                <p><strong>Corporate Desk:</strong> +880 1335-149006</p>
                <p><strong>Location:</strong> MG SAM Center, 12 Mohakhali C/A, Dhaka-1212</p>
              </div>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg bg-[#0b3674] text-white hover:bg-[#072147] transition-colors"
              >
                Contact Marinozz PLC
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
