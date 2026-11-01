"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  Users,
  Briefcase,
  Plus,
  Trash2,
  CheckCircle2,
  Building2,
  Calendar,
  Phone,
  Mail,
  Download,
  Shield,
} from "lucide-react";
import { INITIAL_NEWS, NewsArticle } from "@/data/news";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"news" | "inquiries" | "franchise" | "locations">("news");
  const [articles, setArticles] = useState<NewsArticle[]>(INITIAL_NEWS);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [franchiseApps, setFranchiseApps] = useState<any[]>([]);

  // New Article Form state
  const [isAddingArticle, setIsAddingArticle] = useState(false);
  const [newArticle, setNewArticle] = useState<Partial<NewsArticle>>({
    title: "",
    category: "Corporate",
    excerpt: "",
    author: "Corporate Communications",
    readTime: "3 min read",
    featuredImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    content: [""],
  });

  useEffect(() => {
    // Load local storage items
    const savedNews = localStorage.getItem("marinozz_news");
    if (savedNews) {
      try {
        setArticles(JSON.parse(savedNews));
      } catch (e) {
        console.error(e);
      }
    }

    const savedInquiries = localStorage.getItem("marinozz_inquiries");
    if (savedInquiries) {
      try {
        setInquiries(JSON.parse(savedInquiries));
      } catch (e) {
        console.error(e);
      }
    }

    const savedFranchise = localStorage.getItem("marinozz_franchise_apps");
    if (savedFranchise) {
      try {
        setFranchiseApps(JSON.parse(savedFranchise));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSaveArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newArticle.title || !newArticle.excerpt) return;

    const articleToSave: NewsArticle = {
      id: "news_" + Date.now(),
      slug: (newArticle.title || "article")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, ""),
      title: newArticle.title || "",
      excerpt: newArticle.excerpt || "",
      category: newArticle.category as any,
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      readTime: newArticle.readTime || "3 min read",
      author: newArticle.author || "Corporate Desk",
      featuredImage: newArticle.featuredImage || "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      content: typeof newArticle.content === "string" ? [(newArticle.content as any)] : (newArticle.content || [""]),
    };

    const updated = [articleToSave, ...articles];
    setArticles(updated);
    localStorage.setItem("marinozz_news", JSON.stringify(updated));
    setIsAddingArticle(false);
    setNewArticle({
      title: "",
      category: "Corporate",
      excerpt: "",
      author: "Corporate Communications",
      readTime: "3 min read",
      content: [""],
    });
  };

  const handleDeleteArticle = (id: string) => {
    if (confirm("Are you sure you want to delete this story?")) {
      const updated = articles.filter((a) => a.id !== id);
      setArticles(updated);
      localStorage.setItem("marinozz_news", JSON.stringify(updated));
    }
  };

  const handleClearInquiries = () => {
    if (confirm("Clear all received inquiries?")) {
      setInquiries([]);
      localStorage.removeItem("marinozz_inquiries");
    }
  };

  const handleClearFranchise = () => {
    if (confirm("Clear all franchise applications?")) {
      setFranchiseApps([]);
      localStorage.removeItem("marinozz_franchise_apps");
    }
  };

  const exportData = (data: any, filename: string) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-[#f7f6f2] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0b3674]">
              <Shield className="w-4 h-4 text-red-600" />
              <span>Marinozz Group Management Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
              Corporate Content & Lead Manager
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Easily edit news articles, view customer inquiries, review franchise leads, and update brand details.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm"
            >
              ← Back to Live Website
            </Link>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveTab("news")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === "news"
                ? "bg-[#0b3674] text-white shadow-sm"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>News & Stories ({articles.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("inquiries")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === "inquiries"
                ? "bg-[#0b3674] text-white shadow-sm"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>General Inquiries ({inquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("franchise")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === "franchise"
                ? "bg-[#0b3674] text-white shadow-sm"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Franchise Leads ({franchiseApps.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("locations")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
              activeTab === "locations"
                ? "bg-[#0b3674] text-white shadow-sm"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Branch Directory (3 Locations)</span>
          </button>
        </div>

        {/* Tab 1: News & Press Releases */}
        {activeTab === "news" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-200">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Live Articles & Media Releases</h3>
                <p className="text-xs text-gray-500">
                  Updates reflect instantly on the /news page and homepage Latest Stories carousel.
                </p>
              </div>
              <button
                onClick={() => setIsAddingArticle(!isAddingArticle)}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#c71b27] text-white hover:bg-[#9e141d] transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>{isAddingArticle ? "Cancel" : "Publish New Story"}</span>
              </button>
            </div>

            {/* New Article Form */}
            {isAddingArticle && (
              <form
                onSubmit={handleSaveArticle}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md space-y-4"
              >
                <h4 className="text-base font-bold text-[#0b3674]">Create a New Article / Announcement</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700">Headline / Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marinozz Restaurant Launches Rooftop Dining"
                      value={newArticle.title}
                      onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700">Category</label>
                    <select
                      value={newArticle.category}
                      onChange={(e) => setNewArticle({ ...newArticle, category: e.target.value as any })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white"
                    >
                      <option value="Corporate">Corporate</option>
                      <option value="Restaurant">Restaurant</option>
                      <option value="Bakery">Bakery & Confectionery</option>
                      <option value="Franchise">Franchise & Expansion</option>
                      <option value="Community">Community & CSR</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">Short Summary / Excerpt *</label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Brief 1-2 sentence preview shown on cards..."
                    value={newArticle.excerpt}
                    onChange={(e) => setNewArticle({ ...newArticle, excerpt: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">Full Article Content *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Enter full paragraph details..."
                    value={Array.isArray(newArticle.content) ? newArticle.content.join("\n\n") : ""}
                    onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value.split("\n\n") })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsAddingArticle(false)}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-gray-100 text-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold rounded-lg bg-[#0b3674] text-white hover:bg-[#072147]"
                  >
                    Publish to Website
                  </button>
                </div>
              </form>
            )}

            {/* List of Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {articles.map((art) => (
                <div
                  key={art.id}
                  className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-800">
                        {art.category}
                      </span>
                      <span>{art.date}</span>
                    </div>
                    <h4 className="text-base font-bold text-gray-900">{art.title}</h4>
                    <p className="text-xs text-gray-600 line-clamp-2 mt-2 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="text-gray-400">By {art.author}</span>
                    <button
                      onClick={() => handleDeleteArticle(art.id)}
                      className="text-red-500 hover:text-red-700 flex items-center gap-1 font-medium"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: General Inquiries */}
        {activeTab === "inquiries" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-200">
              <div>
                <h3 className="text-sm font-bold text-gray-900">
                  Customer & Corporate Inquiries ({inquiries.length})
                </h3>
                <p className="text-xs text-gray-500">
                  Form submissions sent from Contact Us and brand pages.
                </p>
              </div>

              {inquiries.length > 0 && (
                <div className="flex gap-2">
                  <button
                    onClick={() => exportData(inquiries, "marinozz-inquiries.json")}
                    className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export JSON</span>
                  </button>
                  <button
                    onClick={handleClearInquiries}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-red-50 text-red-600 hover:bg-red-100"
                  >
                    Clear All
                  </button>
                </div>
              )}
            </div>

            {inquiries.length === 0 ? (
              <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center space-y-2">
                <Users className="w-8 h-8 text-gray-300 mx-auto" />
                <h4 className="text-sm font-semibold text-gray-700">No Inquiries Submitted Yet</h4>
                <p className="text-xs text-gray-400 max-w-sm mx-auto">
                  When visitors submit the form on the Contact Us or Brand pages, inquiries will appear here automatically.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {inquiries.map((inq, i) => (
                  <div
                    key={inq.id || i}
                    className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
                      <div>
                        <span className="text-xs font-bold text-[#0b3674]">{inq.name}</span>
                        <span className="text-xs text-gray-400 ml-2">
                          ({inq.category || "General Inquiry"})
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(inq.date).toLocaleString()}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                          New Lead
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-gray-400" />
                        <a href={`mailto:${inq.email}`} className="text-blue-600 hover:underline">
                          {inq.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-gray-400" />
                        <a href={`tel:${inq.phone}`} className="text-blue-600 hover:underline">
                          {inq.phone}
                        </a>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-gray-50 text-xs text-gray-700 leading-relaxed">
                      {inq.message}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Franchise Leads */}
        {activeTab === "franchise" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-200">
              <div>
                <h3 className="text-sm font-bold text-gray-900">
                  Franchise Applications & Growth Leads ({franchiseApps.length})
                </h3>
                <p className="text-xs text-gray-500">
                  Prospective partners seeking Pantoa or Marinozz Restaurant franchises.
                </p>
              </div>

              {franchiseApps.length > 0 && (
                <div className="flex gap-2">
                  <button
                    onClick={() => exportData(franchiseApps, "marinozz-franchise-leads.json")}
                    className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export JSON</span>
                  </button>
                  <button
                    onClick={handleClearFranchise}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-red-50 text-red-600 hover:bg-red-100"
                  >
                    Clear All
                  </button>
                </div>
              )}
            </div>

            {franchiseApps.length === 0 ? (
              <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center space-y-2">
                <Briefcase className="w-8 h-8 text-gray-300 mx-auto" />
                <h4 className="text-sm font-semibold text-gray-700">No Franchise Leads Yet</h4>
                <p className="text-xs text-gray-400 max-w-sm mx-auto">
                  When potential investors fill out the expression of interest form on the Franchise page, entries will appear here.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {franchiseApps.map((lead, i) => (
                  <div
                    key={lead.id || i}
                    className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">{lead.fullName}</h4>
                        <p className="text-xs font-semibold text-red-600 mt-0.5">
                          Format: {lead.brandModel}
                        </p>
                      </div>
                      <div className="text-xs text-gray-500">
                        {new Date(lead.date).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 rounded-xl bg-gray-50 text-xs">
                      <div>
                        <span className="text-gray-400 block text-[10px] uppercase">City / Territory</span>
                        <strong className="text-gray-800">{lead.city}</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px] uppercase">Investment Bracket</span>
                        <strong className="text-emerald-700">{lead.investmentCapacity}</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px] uppercase">Property Status</span>
                        <strong className="text-gray-800">{lead.propertyStatus}</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px] uppercase">Contact Phone</span>
                        <strong className="text-blue-700">{lead.phone}</strong>
                      </div>
                    </div>

                    {lead.experienceSummary && (
                      <div className="text-xs text-gray-600 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                        <strong>Experience:</strong> {lead.experienceSummary}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Branch Directory */}
        {activeTab === "locations" && (
          <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-6">
            <h3 className="text-base font-bold text-gray-900">
              Configured Branch Locations & Addresses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Marinozz Multicuisine Restaurant",
                  address: "Level 4, Mariners Commercial Center, Main Avenue, Dhaka",
                  phone: "+880 1711 000000",
                  hours: "12:00 PM - 11:00 PM Daily",
                },
                {
                  title: "Pantoa Sweets & Bakery Flagship",
                  address: "Plot 12, Food Processing & Retail Hub, Mariners Zone, Dhaka",
                  phone: "+880 1712 111111",
                  hours: "08:00 AM - 10:30 PM Daily",
                },
                {
                  title: "Marinozz Group Corporate HQ",
                  address: "Mariners Tower, Corporate Sector, Suite 901-904, Dhaka",
                  phone: "+880 2 9888888",
                  hours: "Sun - Thu, 09:00 AM - 06:00 PM",
                },
              ].map((loc, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-2">
                  <h4 className="text-sm font-bold text-[#0b3674]">{loc.title}</h4>
                  <p className="text-xs text-gray-600">{loc.address}</p>
                  <p className="text-xs text-gray-700 font-medium">Tel: {loc.phone}</p>
                  <p className="text-[11px] text-gray-500">{loc.hours}</p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-semibold mt-2">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Google Maps Linked
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
