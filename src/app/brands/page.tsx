import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Factory,
  Building2,
  Utensils,
  Cake,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Our Brands | Marinozz Multicuisine Restaurant, Pantoa Sweets & Marinozz PLC",
  description:
    "Explore the 4 unified brands of Marinozz Group: fine dining, pure milk sweets & bakery, industrial food manufacturing, and corporate supply chain.",
};

export default function BrandsPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-24 overflow-hidden">
      <PageHeader
        title="Our Portfolio of Brands"
        subtitle="Uniting fine dining, artisanal confectionery, industrial baking, and supply chain under unified corporate standards."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Brand 1: Marinozz Multicuisine Restaurant */}
        <div
          id="restaurant"
          className="scroll-mt-28 bg-white rounded-3xl border border-gray-200/80 shadow-md hover:shadow-2xl transition-all overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
                  Flagship Dining
                </span>
                <span className="text-xs font-bold text-gray-500">• 180+ Seating Capacity</span>
              </div>

              <div className="relative h-16 w-64">
                <Image
                  src="/logos/marinozz-restaurant.png"
                  alt="Marinozz Multicuisine Restaurant"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#0b3674] tracking-tight">
                Marinozz Multicuisine Restaurant
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  "180+ Seating & VIP Banquet Hall",
                  "Continental, Pan-Asian & Mughlai",
                  "Transparent Kitchen & Daily Oil Testing",
                  "Dedicated Family Suites & Valet Bay",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f7f6f2] border border-gray-200 text-xs font-bold text-gray-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#c71b27] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/marinozz-restaurant"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold rounded-xl text-white bg-gradient-to-r from-[#c71b27] to-[#9e141d] hover:from-[#9e141d] hover:to-[#7f0f16] shadow-lg transition-all"
                >
                  <span>Explore Menu &amp; Venue</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/marinozz-restaurant#reservation"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold rounded-xl text-[#0b3674] bg-white border border-gray-200 hover:bg-gray-50 transition-all shadow-xs"
                >
                  Book a Table
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                alt="Marinozz Multicuisine Restaurant Dining"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase text-amber-300 block">
                  Mohakhali Flagship Venue
                </span>
                <h4 className="text-base font-black">MG SAM Center, Mohakhali</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Brand 2: Pantoa Sweets & Bakery */}
        <div
          id="pantoa"
          className="scroll-mt-28 bg-white rounded-3xl border border-gray-200/80 shadow-md hover:shadow-2xl transition-all overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80"
                alt="Pantoa Sweets and Bakery Art"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase text-amber-300 block">
                  Artisanal Heritage
                </span>
                <h4 className="text-base font-black">100% Pure Cow Milk Sourcing</h4>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200">
                  Artisanal Purity
                </span>
                <span className="text-xs font-bold text-gray-500">• Bengali Sweets &amp; Bakery</span>
              </div>

              <div className="relative h-16 w-60 rounded-2xl overflow-hidden shadow-xs border border-red-100 bg-white p-1">
                <Image
                  src="/logos/pantoa-sweets.jpg"
                  alt="Pantoa Sweets & Bakery"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#0b3674] tracking-tight">
                Pantoa Sweets &amp; Bakery
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  "Signature Royal Pantoa & Mishti Doi",
                  "100% Pure Cow Milk Sourcing",
                  "European Pastries & Artisan Oven Breads",
                  "Bespoke Corporate Gift Box Assortments",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50/50 border border-amber-200/80 text-xs font-bold text-gray-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/pantoa-sweets-bakery"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold rounded-xl text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-lg transition-all"
                >
                  <span>Explore Sweets &amp; Bakery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/franchise"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold rounded-xl text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition-all shadow-xs"
                >
                  Franchise Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Brand 3: Marinozz Confectionery PLC */}
        <div
          id="confectionery"
          className="scroll-mt-28 bg-white rounded-3xl border border-gray-200/80 shadow-md hover:shadow-2xl transition-all p-6 sm:p-10 lg:p-12 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
                  Industrial Processing
                </span>
                <span className="text-xs font-bold text-gray-500">• FMCG &amp; Commercial Baking</span>
              </div>

              <div className="relative h-16 w-64">
                <Image
                  src="/logos/marinozz-confectionery.png"
                  alt="Marinozz Confectionery PLC"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#0b3674] tracking-tight">
                Marinozz Confectionery PLC
              </h2>

              <div className="p-4 rounded-2xl bg-[#f7f6f2] border border-gray-200 grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-xl font-black text-[#0b3674]">5 Tons+</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase mt-0.5">Daily Capacity</div>
                </div>
                <div>
                  <div className="text-xl font-black text-[#c71b27]">ISO 22000</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase mt-0.5">Food Standard</div>
                </div>
                <div>
                  <div className="text-xl font-black text-amber-600">24+ SKUs</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase mt-0.5">Packaged Lineup</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold rounded-xl bg-[#0b3674] text-white hover:bg-[#072147] shadow transition-colors"
                >
                  <span>Wholesale &amp; Distribution Inquiries</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80"
                alt="Marinozz Confectionery PLC Facility"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase text-amber-300 block">
                  Automated Plant
                </span>
                <h4 className="text-base font-black">Industrial Food Manufacturing</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Brand 4: Marinozz PLC */}
        <div
          id="marinozz-plc"
          className="scroll-mt-28 bg-[#f7f6f2] rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl transition-all p-6 sm:p-10 lg:p-12 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 border border-blue-200">
                  Strategic Corporate Entity
                </span>
                <span className="text-xs font-bold text-gray-500">• Supply Chain &amp; Holding</span>
              </div>

              <div className="relative h-16 w-64">
                <Image
                  src="/logos/marinozz-plc.png"
                  alt="Marinozz PLC"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#0b3674] tracking-tight">
                Marinozz PLC
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {[
                  { title: "Corporate Audit", sub: "Board Governance", icon: ShieldCheck },
                  { title: "Franchise Hub", sub: "Compliance Engine", icon: Building2 },
                  { title: "Central Fleet", sub: "Daily Cold Logistics", icon: Factory },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-1"
                    >
                      <Icon className="w-5 h-5 text-[#0b3674]" />
                      <div className="text-xs font-black text-gray-900">{item.title}</div>
                      <div className="text-[10px] text-gray-500">{item.sub}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-5">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-full">
                  Executive Desk
                </span>
                <h4 className="text-lg font-black text-[#0b3674] mt-2">Marinozz PLC Corporate Office</h4>
              </div>

              <div className="text-xs text-gray-700 space-y-2.5">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span className="font-bold">+880 1335-149006</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-gray-600">
                    MG SAM Center, 12 Mohakhali C/A, Dhaka-1212
                  </span>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold rounded-xl bg-[#0b3674] text-white hover:bg-[#072147] shadow transition-colors"
              >
                <span>Contact Corporate Office</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
