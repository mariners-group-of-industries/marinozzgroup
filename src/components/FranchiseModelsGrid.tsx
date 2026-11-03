"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";

export default function FranchiseModelsGrid() {
  const handleSelectModel = (modelId: string) => {
    window.dispatchEvent(
      new CustomEvent("marinozz:select-franchise-model", {
        detail: { modelId },
      })
    );
    const el = document.getElementById("application-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Model 1: Pantoa Sweet Boutique */}
      <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl flex flex-col justify-between hover:border-amber-400 transition-all">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
            Most Popular
          </span>
          <h3 className="text-xl font-extrabold text-gray-900 mt-4">
            Pantoa Sweets &amp; Bakery Boutique
          </h3>
          <p className="text-xs text-gray-500 mt-1">High-street retail destination format</p>

          <div className="my-6 p-4 rounded-2xl bg-gray-50 space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-500">Space Requirement:</span>
              <strong className="text-gray-900">600 – 1,200 sq. ft.</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Ideal Location:</span>
              <strong className="text-gray-900">High-Street / Avenues</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Central Kitchen Supply:</span>
              <strong className="text-emerald-700">100% Guaranteed</strong>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>Complete sweet, pastry, cake &amp; hamper displays</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>Boutique seating for coffee and quick indulgence</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>Centralized POS and inventory tracking system</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 mt-6">
          <button
            type="button"
            onClick={() => handleSelectModel("Pantoa Sweets & Bakery Boutique")}
            className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-bold rounded-xl bg-amber-600 hover:bg-amber-700 text-white shadow-sm transition-colors"
          >
            <span>Select Boutique Format</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Model 2: Pantoa Express Kiosk */}
      <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl flex flex-col justify-between hover:border-red-400 transition-all">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200">
            Rapid Rollout
          </span>
          <h3 className="text-xl font-extrabold text-gray-900 mt-4">
            Pantoa Express Kiosk
          </h3>
          <p className="text-xs text-gray-500 mt-1">Compact transit &amp; mall kiosk model</p>

          <div className="my-6 p-4 rounded-2xl bg-gray-50 space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-500">Space Requirement:</span>
              <strong className="text-gray-900">150 – 350 sq. ft.</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Ideal Location:</span>
              <strong className="text-gray-900">Malls, Metro &amp; Towers</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Payback Horizon:</span>
              <strong className="text-emerald-700">Swift &amp; Agile</strong>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c71b27] flex-shrink-0" />
              <span>Focus on top-selling packaged sweets &amp; bakes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c71b27] flex-shrink-0" />
              <span>Low staff requirement (2-3 attendants)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c71b27] flex-shrink-0" />
              <span>High impulse takeaway sales &amp; corporate gifting</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 mt-6">
          <button
            type="button"
            onClick={() => handleSelectModel("Pantoa Express Kiosk")}
            className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-bold rounded-xl bg-[#c71b27] hover:bg-[#9e141d] text-white shadow-sm transition-colors"
          >
            <span>Select Express Kiosk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Model 3: Marinozz Restaurant */}
      <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl flex flex-col justify-between hover:border-blue-400 transition-all">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200">
            Premier Asset
          </span>
          <h3 className="text-xl font-extrabold text-gray-900 mt-4">
            Marinozz Multicuisine Restaurant
          </h3>
          <p className="text-xs text-gray-500 mt-1">Large-scale dining &amp; banquet facility</p>

          <div className="my-6 p-4 rounded-2xl bg-gray-50 space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-500">Space Requirement:</span>
              <strong className="text-gray-900">2,500 – 5,000 sq. ft.</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Ideal Location:</span>
              <strong className="text-gray-900">Prime Commercial Zones</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Territory Scope:</span>
              <strong className="text-[#0b3674]">Exclusive District</strong>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0b3674] flex-shrink-0" />
              <span>Continental, Pan-Asian &amp; Mughlai menu rights</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0b3674] flex-shrink-0" />
              <span>Executive banquet &amp; private celebration hosting</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0b3674] flex-shrink-0" />
              <span>Full master chef and service steward training</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 mt-6">
          <button
            type="button"
            onClick={() => handleSelectModel("Marinozz Multicuisine Restaurant")}
            className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-bold rounded-xl bg-[#0b3674] hover:bg-[#072147] text-white shadow-sm transition-colors"
          >
            <span>Select Restaurant Franchise</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
