"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, X, Shield, Share2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { INITIAL_NEWS, NewsArticle } from "@/data/news";

export default function NewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>(INITIAL_NEWS);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("marinozz_news");
    if (saved) {
      try {
        setArticles(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const categories = ["All", "Corporate", "Restaurant", "Bakery", "Franchise", "Community"];

  const filtered = articles.filter((art) => {
    const matchesCategory =
      selectedCategory === "All" || art.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-24">
      <PageHeader
        badge="Press & Announcements"
        title="News & Media Stories"
        subtitle="Official press releases, corporate developments, culinary milestones, and media publications from Marinozz Group."
        breadcrumb={[{ label: "News & Media" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Search & Category Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
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
              type="text"
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
            <p className="text-sm font-semibold text-gray-700">No stories found matching your filter.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs font-semibold text-[#c71b27] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((art) => (
              <article
                key={art.id}
                className="bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-gray-100">
                    <Image
                      src={art.featuredImage}
                      alt={art.title}
                      fill
                      className="object-cover"
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

                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2 hover:text-[#0b3674] transition-colors leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-gray-50 flex items-center justify-between text-xs">
                  <span className="text-gray-400 font-medium">{art.author}</span>
                  <button
                    onClick={() => setActiveArticle(art)}
                    className="font-bold text-[#0b3674] hover:text-[#c71b27] flex items-center gap-1 transition-colors"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
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
              Journalists, Broadcasters & Food Critics
            </h4>
            <p className="text-xs text-gray-600">
              For high-resolution brand assets, executive interviews, or tasting invites, contact our media team.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:+8801335149006"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#0b3674] text-white hover:bg-[#072147] transition-colors whitespace-nowrap"
            >
              Call Press Desk: +880 1335-149006
            </a>
            <Link
              href="/admin"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              Manage Stories (Admin)
            </Link>
          </div>
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
              aria-label="Close story modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0b3674]">
                {activeArticle.category}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b3674] tracking-tight leading-tight">
                {activeArticle.title}
              </h2>

              <div className="flex items-center gap-4 text-xs text-gray-400 pb-4 border-b border-gray-100">
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

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>Marinozz Group Corporate Communications</span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 font-semibold rounded-lg bg-[#0b3674] text-white hover:bg-[#072147]"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
