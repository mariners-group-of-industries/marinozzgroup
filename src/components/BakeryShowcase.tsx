"use client";

import { useState } from "react";
import Image from "next/image";
import { PANTOA_CATEGORIES, PantoaProductItem } from "@/data/menu";
import {
  Cake,
  Sparkles,
  Plus,
  Minus,
  Gift,
  MessageCircle,
  CheckCircle2,
  Trash2,
} from "lucide-react";

export default function BakeryShowcase() {
  const [selectedCatIndex, setSelectedCatIndex] = useState<number | "all">("all");
  const [boxItems, setBoxItems] = useState<
    Record<string, { product: PantoaProductItem; qty: number }>
  >({});
  const [orderSaved, setOrderSaved] = useState(false);

  const updateBox = (product: PantoaProductItem, delta: number) => {
    setOrderSaved(false);
    setBoxItems((prev) => {
      const current = prev[product.id]?.qty || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[product.id];
        return copy;
      }
      return {
        ...prev,
        [product.id]: { product, qty: next },
      };
    });
  };

  const selectedProducts = Object.values(boxItems);
  const totalBoxes = selectedProducts.reduce((acc, x) => acc + x.qty, 0);
  const totalAmount = selectedProducts.reduce(
    (acc, x) => acc + x.product.price * x.qty,
    0
  );

  const visibleCategories =
    selectedCatIndex === "all"
      ? PANTOA_CATEGORIES
      : [PANTOA_CATEGORIES[selectedCatIndex]];

  const whatsappPantoaUrl = () => {
    const lines = selectedProducts.map(
      (x) =>
        `• ${x.product.name} (${x.product.unit}) × ${x.qty} = ৳${(
          x.product.price * x.qty
        ).toLocaleString()}`
    );
    const msg = `Hello Pantoa Sweets & Bakery (Marinozz Group),\nI would like to order the following sweet & bakery assortment:\n\n${lines.join(
      "\n"
    )}\n\nEstimated Total: ৳${totalAmount.toLocaleString()}\nPlease let me know pickup / delivery timing.`;
    return `https://wa.me/8801335149006?text=${encodeURIComponent(msg)}`;
  };

  const handleSaveBulkInquiry = () => {
    if (selectedProducts.length === 0) return;
    try {
      const existing = JSON.parse(
        localStorage.getItem("marinozz_inquiries") || "[]"
      );
      const summary = selectedProducts
        .map((x) => `${x.product.name} (${x.product.unit}) x${x.qty}`)
        .join(", ");
      const newOrder = {
        id: "inq_" + Date.now(),
        date: new Date().toISOString(),
        brand: "Pantoa Sweets & Bakery",
        name: "Custom Sweet Box Builder Order",
        phone: "+880 1335-149006 (Direct Web Selection)",
        category: "Pantoa Sweets & Bulk Gifting",
        message: `Custom Assortment: ${summary} — Total Est: ৳${totalAmount.toLocaleString()}`,
      };
      localStorage.setItem(
        "marinozz_inquiries",
        JSON.stringify([newOrder, ...existing])
      );
      setOrderSaved(true);
    } catch {
      // ignore storage errors
    }
  };

  return (
    <div id="sweet-catalog" className="scroll-mt-28 space-y-8">
      {/* Category Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setSelectedCatIndex("all")}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
            selectedCatIndex === "all"
              ? "bg-[#0b3674] text-white shadow-sm"
              : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
          }`}
        >
          All 4 Collections
        </button>
        {PANTOA_CATEGORIES.map((cat, idx) => (
          <button
            key={cat.title}
            type="button"
            onClick={() => setSelectedCatIndex(idx)}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              selectedCatIndex === idx
                ? "bg-amber-600 text-white shadow-sm"
                : "bg-white border border-gray-200 text-gray-700 hover:bg-amber-50"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {visibleCategories.map((cat) => (
          <div
            key={cat.title}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Category Banner Photo */}
              <div className="relative h-48 w-full bg-gray-100">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                      {cat.subtitle}
                    </span>
                    <h4 className="text-xl font-extrabold leading-tight">
                      {cat.title}
                    </h4>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/15 backdrop-blur-md text-amber-300">
                    <Cake className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs text-gray-600 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Interactive Selectable Products */}
                <div className="space-y-3">
                  {cat.products.map((prod) => {
                    const qty = boxItems[prod.id]?.qty || 0;
                    return (
                      <div
                        key={prod.id}
                        className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                          qty > 0
                            ? "border-amber-500 bg-amber-50/40"
                            : "border-gray-100 bg-gray-50/60 hover:bg-white hover:border-amber-200"
                        }`}
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-bold text-gray-900">
                              {prod.name}
                            </span>
                            {prod.badge && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                                {prod.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-gray-500 mt-0.5">
                            Pack: {prod.unit} •{" "}
                            <strong className="text-[#0b3674]">
                              ৳{prod.price.toLocaleString()}
                            </strong>
                          </div>
                        </div>

                        {qty === 0 ? (
                          <button
                            type="button"
                            onClick={() => updateBox(prod, 1)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-white border border-gray-200 hover:border-amber-500 hover:bg-amber-600 text-gray-800 hover:text-white transition-colors flex-shrink-0 shadow-2xs"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add Box</span>
                          </button>
                        ) : (
                          <div className="inline-flex items-center gap-2 bg-amber-600 text-white px-2.5 py-1 rounded-xl flex-shrink-0">
                            <button
                              type="button"
                              onClick={() => updateBox(prod, -1)}
                              className="p-0.5 hover:bg-black/15 rounded"
                              aria-label={`Remove one ${prod.name}`}
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-extrabold min-w-[1rem] text-center">
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateBox(prod, 1)}
                              className="p-0.5 hover:bg-black/15 rounded"
                              aria-label={`Add one more ${prod.name}`}
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-7 py-4 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
              <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                <Sparkles className="w-3.5 h-3.5" /> 100% Pure Cow Dairy &amp; Zero Starch
              </span>
              <span className="font-medium">Fresh Morning Batch</span>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Sweet Box & Corporate Hamper Builder Summary Bar */}
      {totalBoxes > 0 && (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#072147] via-[#0b3674] to-[#072147] text-white shadow-2xl border border-blue-900 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-amber-300" />
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-amber-300">
                  Your Custom Pantoa Sweet &amp; Bakery Box ({totalBoxes} Packs)
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProducts.map((x) => (
                  <span
                    key={x.product.id}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-blue-100"
                  >
                    {x.product.name} ({x.product.unit}) × {x.qty}
                  </span>
                ))}
              </div>
              {orderSaved && (
                <p className="text-xs text-emerald-300 flex items-center gap-1.5 font-semibold pt-1">
                  <CheckCircle2 className="w-4 h-4" />
                  Saved to Corporate Order Log! You can also send immediately via WhatsApp.
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="pr-4 border-r border-white/20">
                <div className="text-[10px] uppercase text-blue-200">Estimated Total</div>
                <div className="text-2xl font-black text-amber-300">
                  ৳{totalAmount.toLocaleString()}
                </div>
              </div>

              <a
                href={whatsappPantoaUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order Box on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleSaveBulkInquiry}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-amber-950 transition-colors"
              >
                <span>Log Bulk Order</span>
              </button>

              <button
                type="button"
                onClick={() => setBoxItems({})}
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-blue-200 hover:text-white transition-colors"
                title="Clear box"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
