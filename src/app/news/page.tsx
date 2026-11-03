"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  X,
  Share2,
  Check,
  MessageCircle,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { INITIAL_NEWS, NewsArticle } from "@/data/news";

export default function NewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>(INITIAL_NEWS);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    let loaded = INITIAL_NEWS;
    const saved = localStorage.getItem("marinozz_news");
    if (saved) {
      try {
        loaded = JSON.parse(saved);
        setArticles(loaded);
      } catch (e) {
        console.error(e);
      }
    }

    // Check URL query parameter ?id= or ?story= to auto-open article modal
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const storyId = params.get("id") || params.get("story");
      if (storyId) {
        const match = loaded.find((a) => a.id === storyId || a.slug === storyId);
        if (match) {
          setTimeout(() => openStoryModal(match), 80);
        }
      }
    }
  }, []);

  // Fallback for <dialog closedby="any">
  useEffect(() => {
    const dialog = dialogRef.current;
    if (
      dialog &&
      typeof HTMLDialogElement !== "undefined" &&
      !("closedBy" in HTMLDialogElement.prototype)
    ) {
      const handleBackdropClick = (event: MouseEvent) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (isDialogContent) return;
        dialog.close();
      };
      dialog.addEventListener("click", handleBackdropClick);
      return () => dialog.removeEventListener("click", handleBackdropClick);
    }
  }, []);

  const openStoryModal = (art: NewsArticle) => {
    setActiveArticle(art);
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  };

  const closeStoryModal = () => {
    dialogRef.current?.close();
    setActiveArticle(null);
  };

  const handleCopyShare = (art: NewsArticle) => {
    if (typeof window === "undefined") return;
    const url = `${window.location.origin}/news?id=${art.id}`;
    navigator.clipboard?.writeText(url);
    setCopiedId(art.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const categories = ["All", "Corporate", "Restaurant", "Bakery", "Franchise", "Community"];

  const filtered = articles.filter((art) => {
    const matchesCategory =
      selectedCategory === "All" ||
      art.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-24">
      <PageHeader
        title="News & Media Stories"
        subtitle="Official press releases, corporate developments, culinary milestones, and media publications from Marinozz Group."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Search & Category Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                  selectedCategory === cat
                    ? "bg-[#0b3674] text-white shadow-xs"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              placeholder="Search press releases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filtered.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center space-y-3">
            <p className="text-sm font-semibold text-gray-700">
              No stories found matching your filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs font-bold text-[#c71b27] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((art) => (
              <article
                key={art.id}
                onClick={() => openStoryModal(art)}
                className="group cursor-pointer bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={art.featuredImage}
                      alt={art.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#0b3674] shadow-xs">
                      {art.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {art.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {art.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-gray-900 line-clamp-2 group-hover:text-[#0b3674] transition-colors leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-gray-50 flex items-center justify-between text-xs">
                  <span className="text-gray-400 font-medium">{art.author}</span>
                  <span className="font-bold text-[#0b3674] group-hover:text-[#c71b27] flex items-center gap-1 transition-colors">
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Media Desk Box */}
        <div className="p-8 rounded-3xl bg-[#f7f6f2] border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c71b27]">
              Media Relations Desk
            </span>
            <h4 className="text-lg font-bold text-gray-900">
              Journalists, Broadcasters &amp; Food Critics
            </h4>
            <p className="text-xs text-gray-600">
              For high-resolution brand assets, executive interviews, or tasting invites, contact our media team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+8801335149006"
              className="px-4 py-2.5 text-xs font-bold rounded-xl bg-[#0b3674] text-white hover:bg-[#072147] transition-colors whitespace-nowrap"
            >
              Call Press Desk: +880 1335-149006
            </a>
            <Link
              href="/admin"
              className="px-4 py-2.5 text-xs font-bold rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              Manage Stories (Admin)
            </Link>
          </div>
        </div>
      </div>

      {/* Native Article Reader Modal Dialog */}
      <dialog
        ref={dialogRef}
        {...({ closedby: "any" } as any)}
        aria-labelledby="story-modal-title"
        onClose={() => setActiveArticle(null)}
        className="m-auto w-full max-w-3xl rounded-3xl bg-white p-0 shadow-2xl border border-gray-200 text-gray-900"
      >
        {activeArticle && (
          <div className="max-h-[88vh] overflow-y-auto p-6 sm:p-10 relative">
            <button
              type="button"
              onClick={closeStoryModal}
              className="sticky top-0 float-right p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors z-10"
              aria-label="Close story modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0b3674]">
                {activeArticle.category}
              </span>

              <h2
                id="story-modal-title"
                className="text-2xl sm:text-3xl font-extrabold text-[#0b3674] tracking-tight leading-tight"
              >
                {activeArticle.title}
              </h2>

              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 pb-4 border-b border-gray-100">
                <span>Published on {activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
                <span>•</span>
                <span>Author: {activeArticle.author}</span>
              </div>

              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={activeArticle.featuredImage}
                  alt={activeArticle.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 pt-4 text-sm text-gray-700 leading-relaxed font-normal">
                {activeArticle.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopyShare(activeArticle)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-colors"
                  >
                    {copiedId === activeArticle.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Copy Story Link</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`https://wa.me/8801335149006?text=${encodeURIComponent(
                      `Hello Marinozz Group, I just read "${activeArticle.title}" and would like to learn more.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={closeStoryModal}
                  className="px-5 py-2 font-bold rounded-xl bg-[#0b3674] text-white hover:bg-[#072147]"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
