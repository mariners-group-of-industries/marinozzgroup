"use client";

import { useState } from "react";
import { RESTAURANT_MENU } from "@/data/menu";
import { Flame, Sparkles, Award } from "lucide-react";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#c71b27] bg-red-50 px-2.5 py-1 rounded-full">
            Culinary Repertoire
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b3674] tracking-tight mt-2">
            Selected Gastronomic Highlights
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Carefully curated dishes executed by master chefs using premium halal meats and farm-fresh spices.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {RESTAURANT_MENU.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(idx)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === idx
                  ? "bg-[#c71b27] text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      {/* Current Category Info */}
      <div className="mb-6 p-4 rounded-xl bg-gray-50/70 border border-gray-100 flex items-center justify-between">
        <div>
          <h4 className="text-base font-bold text-gray-900">
            {RESTAURANT_MENU[activeCategory].category}
          </h4>
          <p className="text-xs text-gray-500 mt-0.5">
            {RESTAURANT_MENU[activeCategory].tagline}
          </p>
        </div>
      </div>

      {/* Menu Dishes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {RESTAURANT_MENU[activeCategory].items.map((dish, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl border border-gray-100 hover:border-red-200 hover:bg-red-50/10 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <h5 className="text-base font-bold text-gray-900">{dish.name}</h5>
                {dish.tag && (
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide ${
                      dish.tag === "Chef Special"
                        ? "bg-amber-100 text-amber-900"
                        : dish.tag === "Signature"
                        ? "bg-red-100 text-red-900"
                        : "bg-blue-100 text-blue-900"
                    }`}
                  >
                    {dish.tag === "Chef Special" && <Award className="w-3 h-3" />}
                    {dish.tag === "Signature" && <Sparkles className="w-3 h-3" />}
                    {dish.tag}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{dish.description}</p>
            </div>

            {dish.spiciness && (
              <div className="mt-3 pt-2 border-t border-gray-100 flex items-center gap-1 text-[11px] text-red-600 font-medium">
                <Flame className="w-3.5 h-3.5" />
                <span>Spice Level: {Array(dish.spiciness).fill("🌶️").join("")}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-500">
          Full printed banquet menus and dietary customization options available upon request at our reception desk.
        </p>
      </div>
    </div>
  );
}
