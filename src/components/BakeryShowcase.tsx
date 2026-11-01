"use client";

import { PANTOA_CATEGORIES } from "@/data/menu";
import { Cake, Sparkles, CheckCircle2 } from "lucide-react";

export default function BakeryShowcase() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PANTOA_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700">
                  <Cake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{cat.title}</h4>
                  <p className="text-xs text-amber-700 font-medium">Artisanal Purity</p>
                </div>
              </div>

              <p className="text-xs text-gray-600 mb-5 leading-relaxed">{cat.description}</p>

              <div className="space-y-2.5 pt-2 border-t border-gray-100">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
              <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                <Sparkles className="w-3 h-3" /> 100% Pure Cow Dairy
              </span>
              <span>Daily Morning Batch</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
