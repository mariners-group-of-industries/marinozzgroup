"use client";

import { useState } from "react";
import { RESTAURANT_MENU, MenuItem } from "@/data/menu";
import {
  Flame,
  Sparkles,
  Award,
  Plus,
  Minus,
  ShoppingBag,
  MessageCircle,
  Search,
  CalendarCheck,
  Trash2,
  Check,
} from "lucide-react";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<number | "all">("all");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState<Record<string, { item: MenuItem; qty: number }>>({});

  const updateQty = (item: MenuItem, delta: number) => {
    setSelectedItems((prev) => {
      const current = prev[item.id]?.qty || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[item.id];
        return copy;
      }
      return {
        ...prev,
        [item.id]: { item, qty: next },
      };
    });
  };

  const clearSelection = () => setSelectedItems({});

  const selectedList = Object.values(selectedItems);
  const totalCount = selectedList.reduce((acc, x) => acc + x.qty, 0);
  const totalPrice = selectedList.reduce((acc, x) => acc + x.item.price * x.qty, 0);

  const displayedCategories =
    activeCategory === "all" ? RESTAURANT_MENU : [RESTAURANT_MENU[activeCategory]];

  const handleAttachToReservation = () => {
    if (selectedList.length === 0) return;
    const summary = selectedList
      .map((x) => `${x.item.name} x${x.qty} (৳${x.item.price * x.qty})`)
      .join(", ");
    window.dispatchEvent(
      new CustomEvent("marinozz:attach-dishes", {
        detail: {
          summary: `Pre-Selected Menu Items: ${summary} — Total Est: ৳${totalPrice.toLocaleString()}`,
        },
      })
    );
    const el = document.getElementById("reservation");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappOrderUrl = () => {
    const lines = selectedList.map(
      (x) => `• ${x.item.name} (${x.qty}x) - ৳${(x.item.price * x.qty).toLocaleString()}`
    );
    const text = `Hello Marinozz Multicuisine Restaurant,\nI would like to place a pre-order / table reservation for:\n\n${lines.join(
      "\n"
    )}\n\nEstimated Total: ৳${totalPrice.toLocaleString()}\nPlease confirm availability.`;
    return `https://wa.me/8801335149006?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="menu-repertoire" className="scroll-mt-28 bg-white rounded-3xl shadow-md border border-gray-100 p-6 sm:p-10">
      {/* Top Header & Search */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-gray-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#c71b27] bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Interactive Culinary Repertoire
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b3674] tracking-tight mt-3">
            Explore Our Menu &amp; Build Your Table Order
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Select your favorite dishes below to calculate an estimate, attach to a table reservation, or send directly via WhatsApp.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search sizzler, biryani, prawn..."
            className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-gray-200 bg-gray-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674]"
          />
        </div>
      </div>

      {/* Category & Tag Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all ${
              activeCategory === "all"
                ? "bg-[#0b3674] text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All Categories ({RESTAURANT_MENU.reduce((acc, c) => acc + c.items.length, 0)})
          </button>
          {RESTAURANT_MENU.map((cat, idx) => (
            <button
              key={cat.category}
              type="button"
              onClick={() => setActiveCategory(idx)}
              className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all ${
                activeCategory === idx
                  ? "bg-[#c71b27] text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Tag Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {["All", "Chef Special", "Bestseller", "Signature"].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-colors ${
                selectedTag === tag
                  ? "border-amber-400 bg-amber-50 text-amber-900"
                  : "border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Dishes Sections */}
      <div className="space-y-10">
        {displayedCategories.map((cat) => {
          const filteredItems = cat.items.filter((dish) => {
            const matchesTag = selectedTag === "All" || dish.tag === selectedTag;
            const matchesSearch =
              !searchQuery.trim() ||
              dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              dish.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesTag && matchesSearch;
          });

          if (filteredItems.length === 0) return null;

          return (
            <div key={cat.category} className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#f7f6f2] border border-gray-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-base font-extrabold text-[#0b3674]">{cat.category}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{cat.tagline}</p>
                </div>
                <span className="text-[11px] font-bold text-[#c71b27] bg-white px-3 py-1 rounded-full border border-red-100 w-fit">
                  100% Halal Certified
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredItems.map((dish) => {
                  const qty = selectedItems[dish.id]?.qty || 0;
                  return (
                    <div
                      key={dish.id}
                      className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                        qty > 0
                          ? "border-[#c71b27] bg-red-50/20 shadow-md"
                          : "border-gray-100 hover:border-red-200 hover:shadow-sm bg-white"
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div>
                            <h5 className="text-base font-bold text-gray-900">{dish.name}</h5>
                            <span className="text-[11px] text-gray-400 font-medium">
                              Portion: {dish.serving}
                            </span>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="text-base font-extrabold text-[#0b3674]">
                              ৳{dish.price.toLocaleString()}
                            </div>
                            {dish.tag && (
                              <span
                                className={`mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide ${
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
                        </div>

                        <p className="text-xs text-gray-600 leading-relaxed">{dish.description}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                        {dish.spiciness ? (
                          <div className="flex items-center gap-1 text-[11px] text-red-600 font-semibold">
                            <Flame className="w-3.5 h-3.5" />
                            <span>Spice: {Array(dish.spiciness).fill("🌶️").join("")}</span>
                          </div>
                        ) : (
                          <span className="text-[11px] text-emerald-700 font-medium">
                            ✓ Mild &amp; Family Friendly
                          </span>
                        )}

                        {qty === 0 ? (
                          <button
                            type="button"
                            onClick={() => updateQty(dish, 1)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gray-100 hover:bg-[#c71b27] text-gray-800 hover:text-white transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Select Dish</span>
                          </button>
                        ) : (
                          <div className="inline-flex items-center gap-2 bg-[#c71b27] text-white px-2.5 py-1 rounded-xl shadow-xs">
                            <button
                              type="button"
                              onClick={() => updateQty(dish, -1)}
                              className="p-1 hover:bg-black/15 rounded-lg transition-colors"
                              aria-label={`Decrease quantity of ${dish.name}`}
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-extrabold min-w-[1.25rem] text-center">
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQty(dish, 1)}
                              className="p-1 hover:bg-black/15 rounded-lg transition-colors"
                              aria-label={`Increase quantity of ${dish.name}`}
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Pre-Order & Table Selection Summary Drawer */}
      {totalCount > 0 && (
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0b3674] to-[#072147] text-white shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Your Table &amp; Pre-Order Selection ({totalCount} Dishes)
                </span>
              </div>
              <div className="text-xs text-blue-100 flex flex-wrap gap-2 pt-1">
                {selectedList.map((x) => (
                  <span
                    key={x.item.id}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 border border-white/15"
                  >
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>
                      {x.item.name} × {x.qty}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="pr-3 border-r border-white/20">
                <div className="text-[10px] uppercase text-blue-200">Estimated Total</div>
                <div className="text-xl font-extrabold text-white">
                  ৳{totalPrice.toLocaleString()}
                </div>
              </div>

              <button
                type="button"
                onClick={handleAttachToReservation}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#c71b27] hover:bg-[#9e141d] text-white shadow transition-colors"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Attach to Reservation Form</span>
              </button>

              <a
                href={whatsappOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-600 text-white shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order via WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={clearSelection}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-blue-200 hover:text-white transition-colors"
                title="Clear selection"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
        <p>
          Full printed banquet menus and custom corporate catering packages available at our reception desk.
        </p>
        <a
          href="tel:+8801335149006"
          className="font-bold text-[#0b3674] hover:text-[#c71b27] transition-colors"
        >
          Direct Reservation Desk: +880 1335-149006
        </a>
      </div>
    </div>
  );
}
