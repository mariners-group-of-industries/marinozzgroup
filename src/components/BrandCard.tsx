import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Brand } from "@/data/brands";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  const accentBorder =
    brand.accentColor === "red"
      ? "hover:border-red-300 group-hover:shadow-red-500/5"
      : brand.accentColor === "gold"
      ? "hover:border-amber-300 group-hover:shadow-amber-500/5"
      : "hover:border-blue-300 group-hover:shadow-blue-500/5";

  return (
    <div
      className={`group bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${accentBorder}`}
    >
      <div>
        {/* Header with Logo & Badge */}
        <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
          <div className="relative h-14 w-44">
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain object-left"
            />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
            {brand.badge}
          </span>
        </div>

        {/* Brand Title & Category */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-[#c71b27] uppercase tracking-wider">
            {brand.category}
          </p>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0b3674] transition-colors mt-1">
            {brand.name}
          </h3>
          <p className="text-sm font-medium text-gray-500 italic mt-1">
            &ldquo;{brand.tagline}&rdquo;
          </p>
        </div>

        {/* Overview */}
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          {brand.overview}
        </p>

        {/* Highlights List */}
        <div className="space-y-2 mb-6">
          {brand.highlights.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-[#0b3674] flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-gray-50 mb-6 text-center">
          {brand.stats.slice(0, 2).map((s, idx) => (
            <div key={idx} className="border-r last:border-r-0 border-gray-200/80 px-2">
              <div className="text-base font-bold text-[#0b3674]">{s.value}</div>
              <div className="text-[10px] uppercase tracking-wider text-gray-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action CTA */}
      <div className="pt-2">
        <Link
          href={brand.href}
          className="inline-flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold rounded-lg bg-gray-50 group-hover:bg-[#0b3674] text-gray-800 group-hover:text-white transition-colors"
        >
          <span>Explore {brand.shortName}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
