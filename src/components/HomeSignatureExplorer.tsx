"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  UtensilsCrossed,
  Cake,
  Factory,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Flame,
  CheckCircle2,
} from "lucide-react";
import { RESTAURANT_MENU, PANTOA_CATEGORIES } from "@/data/menu";

export default function HomeSignatureExplorer() {
  const [activeTab, setActiveTab] = useState<"restaurant" | "pantoa" | "fmcg">("restaurant");

  const restaurantSignatures = RESTAURANT_MENU.flatMap((c) =>
    c.items
      .filter((i) => i.tag === "Chef Special" || i.tag === "Signature" || i.tag === "Bestseller")
      .slice(0, 2)
      .map((item) => ({ ...item, categoryName: c.category }))
  ).slice(0, 6);

  const pantoaSignatures = PANTOA_CATEGORIES.flatMap((c) =>
    c.products.slice(0, 2).map((p) => ({ ...p, categoryName: c.title }))
  ).slice(0, 6);

  return (
    <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xl p-6 sm:p-10 space-y-8">
      {/* Header & Interactive Mode Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-gray-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#c71b27] bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Interactive Tasting &amp; Product Showcase
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b3674] tracking-tight mt-3">
            Explore Our Signature Creations
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Switch between our restaurant gastronomy, pure dairy sweets, and commercial FMCG lines.
          </p>
        </div>

        {/* 3 Interactive Switcher Buttons */}
        <div className="flex flex-wrap gap-2 bg-[#f7f6f2] p-1.5 rounded-2xl border border-gray-200/80">
          <button
            type="button"
            onClick={() => setActiveTab("restaurant")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === "restaurant"
                ? "bg-[#c71b27] text-white shadow-sm"
                : "text-gray-700 hover:bg-white"
            }`}
          >
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Marinozz Restaurant</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("pantoa")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === "pantoa"
                ? "bg-amber-600 text-white shadow-sm"
                : "text-gray-700 hover:bg-white"
            }`}
          >
            <Cake className="w-3.5 h-3.5" />
            <span>Pantoa Sweets &amp; Bakery</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("fmcg")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === "fmcg"
                ? "bg-[#0b3674] text-white shadow-sm"
                : "text-gray-700 hover:bg-white"
            }`}
          >
            <Factory className="w-3.5 h-3.5" />
            <span>Confectionery &amp; Supply</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Restaurant Signatures */}
      {activeTab === "restaurant" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {restaurantSignatures.map((dish) => (
              <div
                key={dish.id}
                className="p-5 rounded-2xl border border-gray-100 hover:border-red-200 bg-gray-50/40 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#c71b27] bg-red-50 px-2.5 py-0.5 rounded-md">
                      {dish.categoryName}
                    </span>
                    <span className="text-sm font-extrabold text-[#0b3674]">
                      ৳{dish.price.toLocaleString()}
                    </span>
                  </div>
                  <h4 className="text-base font-extrabold text-gray-900">{dish.name}</h4>
                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed line-clamp-2">
                    {dish.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-gray-500 font-medium">{dish.serving}</span>
                  <a
                    href={`https://wa.me/8801335149006?text=${encodeURIComponent(
                      `Hello Marinozz Restaurant, I would like to reserve / order: ${dish.name} (৳${dish.price}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-[#c71b27] hover:text-[#0b3674] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Quick Book</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-xs text-gray-500 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-[#c71b27]" />
              Prepared fresh to order at MG SAM Center, Level 4, 12 Mohakhali C/A, Dhaka-1212
            </span>
            <Link
              href="/marinozz-restaurant#menu-repertoire"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl bg-[#c71b27] text-white hover:bg-[#9e141d] transition-colors"
            >
              <span>Open Full Interactive Menu &amp; Pre-Order</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}

      {/* Tab 2: Pantoa Sweets & Bakery */}
      {activeTab === "pantoa" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pantoaSignatures.map((prod) => (
              <div
                key={prod.id}
                className="p-5 rounded-2xl border border-gray-100 hover:border-amber-300 bg-amber-50/20 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-md">
                      {prod.categoryName}
                    </span>
                    <span className="text-sm font-extrabold text-[#0b3674]">
                      ৳{prod.price.toLocaleString()}
                    </span>
                  </div>
                  <h4 className="text-base font-extrabold text-gray-900">{prod.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">Pack Unit: {prod.unit}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> 100% Pure Cow Dairy
                  </span>
                  <a
                    href={`https://wa.me/8801335149006?text=${encodeURIComponent(
                      `Hello Pantoa Sweets & Bakery, I would like to order: ${prod.name} (${prod.unit} - ৳${prod.price}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-amber-700 hover:text-[#0b3674] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order Box</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-xs text-gray-500">
              Zero synthetic colors • Pure Country Cow Ghee • Daily Morning Batch
            </span>
            <Link
              href="/pantoa-sweets-bakery#sweet-catalog"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl bg-amber-600 text-white hover:bg-amber-700 transition-colors"
            >
              <span>Build Custom Sweet Box &amp; Hampers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}

      {/* Tab 3: FMCG & Supply Backbone */}
      {activeTab === "fmcg" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in duration-200">
          <div className="p-6 rounded-2xl bg-[#f7f6f2] border border-gray-200 space-y-4">
            <div className="relative h-12 w-48">
              <Image
                src="/logos/marinozz-confectionery.png"
                alt="Marinozz Confectionery PLC"
                fill
                className="object-contain object-left"
              />
            </div>
            <h4 className="text-lg font-extrabold text-[#0b3674]">
              Marinozz Confectionery PLC — Packaged FMCG Lineup
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              ISO 22000 &amp; HACCP aligned commercial baking lines producing packaged biscuits, butter toast, dry cakes, and cream wafers for regional wholesale distribution.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c71b27]" />
                <span>5+ Tons Daily Capacity</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c71b27]" />
                <span>24+ Retail SKUs</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/brands#confectionery"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c71b27] hover:underline"
              >
                <span>View Wholesale Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#f7f6f2] border border-gray-200 space-y-4">
            <div className="relative h-12 w-48">
              <Image
                src="/logos/marinozz-plc.png"
                alt="Marinozz PLC"
                fill
                className="object-contain object-left"
              />
            </div>
            <h4 className="text-lg font-extrabold text-[#0b3674]">
              Marinozz PLC — Corporate Governance &amp; Cold-Chain
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              The holding and supply chain engine associated with Mariners Group, managing direct dairy farm procurement, refrigerated logistics, and franchise compliance.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0b3674]" />
                <span>Zero-Break Cold Fleet</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0b3674]" />
                <span>Turnkey Franchise Hub</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/ecosystem"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b3674] hover:underline"
              >
                <span>Explore 5-Pillar Supply Ecosystem</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
