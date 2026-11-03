"use client";

import { useState } from "react";
import Image from "next/image";
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
          summary: `Pre-Selected Dishes: ${summary} — Total: ৳${totalPrice.toLocaleString()}`,
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
    const text = `Hello Marinozz Restaurant,\nI would like to place a table order / reservation for:\n\n${lines.join(
      "\n"
    )}\n\nTotal: ৳${totalPrice.toLocaleString()}\nPlease confirm.`;
    return `https://wa.me/8801335149006?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="menu-repertoire" className="scroll-mt-28 bg-white rounded-3xl shadow-md border border-gray-100 p-6 sm:p-10">
      {/* Top Header & Search */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-gray-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#c71b27] bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Visual Menu &amp; Pre-Order
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#0b3674] tracking-tight mt-2">
            Selected Gastronomic Dishes
          </h3>
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search dish name..."
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
              <div className="p-3.5 rounded-2xl bg-[#f7f6f2] border border-gray-200/70 flex items-center justify-between gap-2">
                <h4 className="text-base font-extrabold text-[#0b3674]">{cat.category}</h4>
                <span className="text-[11px] font-bold text-[#c71b27] bg-white px-3 py-1 rounded-full border border-red-100">
                  100% Halal
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredItems.map((dish) => {
                  const qty = selectedItems[dish.id]?.qty || 0;
                  return (
                    <div
                      key={dish.id}
                      className={`p-4 rounded-3xl border transition-all flex flex-col sm:flex-row gap-4 ${
                        qty > 0
                          ? "border-[#c71b27] bg-red-50/20 shadow-md"
                          : "border-gray-100 hover:border-red-200 hover:shadow-sm bg-white"
                      }`}
                    >
                      {/* Dish Photo */}
                      <div className="relative aspect-[4/3] sm:w-36 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={dish.image}
                          alt={dish.name}
                          fill
                          className="object-cover"
                        />
                        {dish.tag && (
                          <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[9px] font-black uppercase bg-black/70 backdrop-blur-xs text-white">
                            {dish.tag}
                          </span>
                        )}
                      </div>

                      {/* Content & Ordering */}
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h5 className="text-sm font-extrabold text-gray-900 leading-tight">
                              {dish.name}
                            </h5>
                            <span className="text-sm font-black text-[#0b3674] flex-shrink-0">
                              ৳{dish.price.toLocaleString()}
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">
                            {dish.description}
                          </p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
                          <span className="text-[11px] text-gray-400 font-medium">
                            {dish.serving}
                          </span>

                          {qty === 0 ? (
                            <button
                              type="button"
                              onClick={() => updateQty(dish, 1)}
                              className="inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-bold bg-gray-100 hover:bg-[#c71b27] text-gray-800 hover:text-white transition-colors"
                            >
                              <Plus className="w-3.5 h-3.5" />
                              <span>Select</span>
                            </button>
                          ) : (
                            <div className="inline-flex items-center gap-1.5 bg-[#c71b27] text-white px-2 py-0.5 rounded-xl shadow-xs">
                              <button
                                type="button"
                                onClick={() => updateQty(dish, -1)}
                                className="p-1 hover:bg-black/15 rounded"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-bold min-w-[1rem] text-center">
                                {qty}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQty(dish, 1)}
                                className="p-1 hover:bg-black/15 rounded"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pre-Order Selection Drawer */}
      {totalCount > 0 && (
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0b3674] to-[#072147] text-white shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Pre-Selected Dishes ({totalCount})
                </span>
              </div>
              <div className="text-xs text-blue-100 flex flex-wrap gap-2 pt-1">
                {selectedList.map((x) => (
                  <span
                    key={x.item.id}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-white/10 text-white"
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
                <div className="text-[10px] uppercase text-blue-200">Total</div>
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
                <span>Attach to Reservation</span>
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
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-blue-200 hover:text-white transition-colors"
                title="Clear selection"
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
