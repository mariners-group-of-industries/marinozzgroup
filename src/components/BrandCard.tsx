import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Brand } from "@/data/brands";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="group bg-white rounded-3xl border border-gray-200/80 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
      {/* 1. Large Visual Cover Photo */}
      <div className="relative aspect-[16/9] w-full bg-gray-900 overflow-hidden">
        <Image
          src={brand.image}
          alt={brand.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Floating Brand Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#0b3674] shadow-md border border-white/50">
            {brand.badge}
          </span>
        </div>

        {/* Floating Category & Tagline over Image */}
        <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
            {brand.category}
          </span>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
            {brand.name}
          </h3>
        </div>
      </div>

      {/* 2. Brand Identity & Visual Highlights (Zero Text Walls) */}
      <div className="p-6 sm:p-7 space-y-5">
        {/* Brand Logo Banner */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-gray-100">
          <div className="relative h-12 w-48">
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain object-left"
            />
          </div>
          <span className="text-[11px] font-bold text-gray-500 bg-gray-50 px-3 py-1 rounded-lg border border-gray-100">
            {brand.operationalStatus}
          </span>
        </div>

        {/* Visual Bullet Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-700">
          {brand.highlights.slice(0, 4).map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-[#f7f6f2] border border-gray-100">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#c71b27] flex-shrink-0" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>

        {/* 4 Quick Stat Badges */}
        <div className="grid grid-cols-4 gap-2 text-center pt-1">
          {brand.stats.map((s, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-100/60">
              <div className="text-base font-black text-[#0b3674]">{s.value}</div>
              <div className="text-[10px] uppercase font-bold text-gray-500 mt-0.5 truncate">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href={brand.href}
            className="inline-flex items-center justify-between w-full px-5 py-3 text-sm font-bold rounded-xl bg-[#0b3674] hover:bg-[#c71b27] text-white shadow-sm hover:shadow-md transition-all duration-200 group/btn"
          >
            <span>Explore {brand.shortName}</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
