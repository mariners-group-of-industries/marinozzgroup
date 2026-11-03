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
} from "lucide-react";
import { RESTAURANT_MENU, PANTOA_CATEGORIES } from "@/data/menu";

export default function HomeSignatureExplorer() {
  const [activeTab, setActiveTab] = useState<"restaurant" | "pantoa" | "fmcg">("restaurant");

  const restaurantSignatures = RESTAURANT_MENU.flatMap((c) =>
    c.items.slice(0, 2).map((item) => ({ ...item, categoryName: c.category }))
  ).slice(0, 6);

  const pantoaSignatures = PANTOA_CATEGORIES.flatMap((c) =>
    c.products.slice(0, 2).map((p) => ({ ...p, categoryName: c.title }))
  ).slice(0, 6);

  return (
    <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xl p-6 sm:p-10 space-y-8">
      {/* Header & Mode Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#c71b27] bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Visual Showcase
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0b3674] tracking-tight mt-2">
            Signature Flavors &amp; Delights
          </h2>
        </div>

        {/* 3 Switcher Buttons */}
        <div className="flex flex-wrap gap-2 bg-[#f7f6f2] p-1.5 rounded-2xl border border-gray-200">
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

      {/* Tab 1: Restaurant Photo Grid */}
      {activeTab === "restaurant" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurantSignatures.map((dish) => (
              <div
                key={dish.id}
                className="group rounded-3xl border border-gray-100 bg-white hover:border-red-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#0b3674]">
                      {dish.categoryName}
                    </span>
                    <span className="absolute bottom-3 right-3 text-base font-black text-white bg-[#0b3674]/90 px-3 py-1 rounded-lg backdrop-blur-xs">
                      ৳{dish.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="p-4 space-y-1">
                    <h4 className="text-base font-extrabold text-gray-900 group-hover:text-[#c71b27] transition-colors leading-snug">
                      {dish.name}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-1">{dish.description}</p>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-2 flex items-center justify-between border-t border-gray-50 text-xs">
                  <span className="text-[11px] text-gray-400 font-medium">{dish.serving}</span>
                  <a
                    href={`https://wa.me/8801335149006?text=${encodeURIComponent(
                      `Hello Marinozz Restaurant, I would like to order / reserve: ${dish.name} (৳${dish.price}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-[#c71b27] hover:text-[#0b3674]"
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
              MG SAM Center, Level 4, 12 Mohakhali C/A, Dhaka-1212
            </span>
            <Link
              href="/marinozz-restaurant#menu-repertoire"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl bg-[#c71b27] text-white hover:bg-[#9e141d] transition-colors"
            >
              <span>View Full Visual Menu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}

      {/* Tab 2: Pantoa Sweets Photo Grid */}
      {activeTab === "pantoa" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pantoaSignatures.map((prod) => (
              <div
                key={prod.id}
                className="group rounded-3xl border border-gray-100 bg-white hover:border-amber-300 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/95 text-amber-900">
                      {prod.categoryName}
                    </span>
                    <span className="absolute bottom-3 right-3 text-base font-black text-white bg-amber-700/90 px-3 py-1 rounded-lg backdrop-blur-xs">
                      ৳{prod.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="p-4 space-y-1">
                    <h4 className="text-base font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors leading-snug">
                      {prod.name}
                    </h4>
                    <p className="text-xs text-gray-400">Pack: {prod.unit}</p>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-2 flex items-center justify-between border-t border-gray-50 text-xs">
                  <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> 100% Pure Dairy
                  </span>
                  <a
                    href={`https://wa.me/8801335149006?text=${encodeURIComponent(
                      `Hello Pantoa Sweets, I would like to order: ${prod.name} (${prod.unit} - ৳${prod.price}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-amber-700 hover:text-[#0b3674]"
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
              MG SAM Center, Ground Floor, 12 Mohakhali C/A, Dhaka-1212
            </span>
            <Link
              href="/pantoa-sweets-bakery#sweet-catalog"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl bg-amber-600 text-white hover:bg-amber-700 transition-colors"
            >
              <span>Build Custom Sweet Boxes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}

      {/* Tab 3: FMCG & Supply Backbone Photo Cards */}
      {activeTab === "fmcg" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in duration-200">
          <div className="group rounded-3xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all">
            <div className="relative aspect-[16/9] w-full bg-gray-100 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80"
                alt="Marinozz Confectionery Commercial Baking"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-white/95 text-red-700">
                  Industrial FMCG
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-xl font-black">Marinozz Confectionery PLC</h4>
                <p className="text-xs text-gray-200 mt-0.5">5+ Tons Daily Commercial Capacity • 24+ SKUs</p>
              </div>
            </div>
            <div className="p-5 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-700">ISO 22000 &amp; HACCP Certified</span>
              <Link
                href="/brands#confectionery"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c71b27] hover:underline"
              >
                <span>Wholesale Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="group rounded-3xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all">
            <div className="relative aspect-[16/9] w-full bg-gray-100 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                alt="Marinozz PLC Corporate Holding"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-white/95 text-[#0b3674]">
                  Supply Backbone
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-xl font-black">Marinozz PLC — Mariners Associated</h4>
                <p className="text-xs text-gray-200 mt-0.5">Cold Chain Logistics &amp; Franchise Governance</p>
              </div>
            </div>
            <div className="p-5 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-700">Centralized Procurement Engine</span>
              <Link
                href="/ecosystem"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b3674] hover:underline"
              >
                <span>Explore Ecosystem</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
