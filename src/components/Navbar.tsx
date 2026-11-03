"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowRight,
  ShieldCheck,
  Search,
  MessageCircle,
  UtensilsCrossed,
  Cake,
  Sparkles,
  MapPin,
} from "lucide-react";
import { RESTAURANT_MENU, PANTOA_CATEGORIES } from "@/data/menu";

interface SearchResultItem {
  title: string;
  subtitle: string;
  category: "Brand" | "Restaurant Dish" | "Pantoa Sweet & Bakery" | "Page";
  href: string;
  price?: number;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [brandsDropdown, setBrandsDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchDialogRef = useRef<HTMLDialogElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setBrandsDropdown(false);
    if (searchDialogRef.current?.open) {
      searchDialogRef.current.close();
    }
  }, [pathname]);

  // Keyboard shortcut Ctrl+K / Cmd+K and light-dismiss fallback for <dialog closedby="any">
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearchModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    const dialog = searchDialogRef.current;
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
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        dialog.removeEventListener("click", handleBackdropClick);
      };
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openSearchModal = () => {
    const dialog = searchDialogRef.current;
    if (!dialog) return;
    if (!dialog.open) {
      dialog.showModal();
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  };

  const closeSearchModal = () => {
    searchDialogRef.current?.close();
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Our Brands",
      href: "/brands",
      hasDropdown: true,
    },
    { name: "Ecosystem", href: "/ecosystem" },
    { name: "Franchise & Growth", href: "/franchise" },
    { name: "News & Media", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const brandItems = [
    {
      title: "Marinozz Restaurant",
      desc: "Multicuisine Fine Dining & Family Banquets",
      href: "/marinozz-restaurant",
      logo: "/logos/marinozz-restaurant.png",
      badge: "Dine-In & Menu",
    },
    {
      title: "Pantoa Sweets & Bakery",
      desc: "Authentic Bengali Sweets & European Bakery",
      href: "/pantoa-sweets-bakery",
      logo: "/logos/pantoa-sweets.jpg",
      badge: "Pure Cow Milk",
    },
    {
      title: "Marinozz Confectionery PLC",
      desc: "Packaged Commercial Baking & FMCG Goods",
      href: "/brands#confectionery",
      logo: "/logos/marinozz-confectionery.png",
      badge: "FMCG Factory",
    },
    {
      title: "Marinozz PLC",
      desc: "Supply Chain & Corporate Management Backbone",
      href: "/brands#marinozz-plc",
      logo: "/logos/marinozz-plc.png",
      badge: "Corporate HQ",
    },
  ];

  // Build searchable catalog
  const allSearchItems: SearchResultItem[] = [
    ...brandItems.map((b) => ({
      title: b.title,
      subtitle: b.desc,
      category: "Brand" as const,
      href: b.href,
    })),
    ...RESTAURANT_MENU.flatMap((cat) =>
      cat.items.map((item) => ({
        title: item.name,
        subtitle: `${cat.category} • ${item.serving}`,
        category: "Restaurant Dish" as const,
        href: "/marinozz-restaurant#menu-repertoire",
        price: item.price,
      }))
    ),
    ...PANTOA_CATEGORIES.flatMap((cat) =>
      cat.products.map((prod) => ({
        title: prod.name,
        subtitle: `${cat.title} • ${prod.unit}`,
        category: "Pantoa Sweet & Bakery" as const,
        href: "/pantoa-sweets-bakery#sweet-catalog",
        price: prod.price,
      }))
    ),
    {
      title: "Table Reservation & Banquet Booking",
      subtitle: "Book a table or VIP suite at Marinozz Multicuisine Restaurant",
      category: "Page",
      href: "/marinozz-restaurant#reservation",
    },
    {
      title: "Franchise Expression of Interest",
      subtitle: "Apply for Pantoa Boutique, Express Kiosk, or Marinozz Restaurant",
      category: "Page",
      href: "/franchise#application-form",
    },
    {
      title: "Corporate Head Office & Map",
      subtitle: "MG SAM Center, 12 Mohakhali C/A, Dhaka-1212",
      category: "Page",
      href: "/contact",
    },
  ];

  const filteredSearch = searchQuery.trim()
    ? allSearchItems
        .filter(
          (i) =>
            i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            i.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            i.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 8)
    : allSearchItems.slice(0, 6);

  return (
    <>
      {/* Top Maintenance Notice Strip */}
      <div className="bg-[#fff7ed] text-[#9a3412] text-xs py-2 px-4 font-semibold text-center flex items-center justify-center gap-2 border-b border-orange-200">
        <span className="flex items-center justify-center gap-1.5">
          <span className="text-sm">⚠️</span>
          <span>Notice: This website is currently under development &amp; maintenance</span>
        </span>
      </div>

      {/* Top Corporate Strip */}
      <div className="bg-[#0b3674] text-white text-xs py-2 px-4 border-b border-[#072147] hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-blue-100 font-medium tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
              Marinozz Group — A Venture Associated with Mariners Group
            </span>
            <span className="text-blue-300/50">|</span>
            <span className="flex items-center gap-1 text-blue-200">
              <MapPin className="w-3 h-3 text-amber-300" />
              MG SAM Center, 12 Mohakhali C/A, Dhaka-1212
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="/franchise"
              className="text-amber-300 hover:text-white font-semibold transition-colors"
            >
              Franchise Opportunities 2026 →
            </Link>
            <a
              href="tel:+8801335149006"
              className="flex items-center gap-1.5 text-blue-100 hover:text-white font-semibold transition-colors"
            >
              <Phone className="w-3 h-3 text-red-400" />
              +880 1335-149006
            </a>
            <Link
              href="/admin"
              className="text-blue-200 hover:text-white text-[11px] px-2.5 py-0.5 rounded-md bg-blue-900/60 border border-blue-700/50 transition-colors"
            >
              CMS Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md shadow-blue-950/5 border-b border-gray-100 py-2.5"
            : "bg-white border-b border-gray-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative h-11 w-44 sm:h-12 sm:w-48 transition-transform group-hover:scale-[1.02]">
                <Image
                  src="/logos/marinozz-group.png"
                  alt="Marinozz Group"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.hasDropdown) {
                  const isBrandActive =
                    pathname.startsWith("/marinozz-restaurant") ||
                    pathname.startsWith("/pantoa-sweets-bakery") ||
                    pathname === "/brands";

                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setBrandsDropdown(true)}
                      onMouseLeave={() => setBrandsDropdown(false)}
                    >
                      <button
                        type="button"
                        onClick={() => setBrandsDropdown(!brandsDropdown)}
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-xl transition-all ${
                          isBrandActive
                            ? "text-[#c71b27] bg-red-50/80"
                            : "text-gray-700 hover:text-[#0b3674] hover:bg-gray-50"
                        }`}
                        aria-expanded={brandsDropdown}
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            brandsDropdown ? "rotate-180 text-[#c71b27]" : "text-gray-400"
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {brandsDropdown && (
                        <div className="absolute top-full left-0 w-96 pt-2 z-50">
                          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="px-3 py-2 border-b border-gray-100 mb-1 flex items-center justify-between">
                              <p className="text-[11px] font-bold uppercase tracking-wider text-[#0b3674]">
                                Marinozz Brand Ecosystem
                              </p>
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-[#c71b27]">
                                4 Entities
                              </span>
                            </div>
                            {brandItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-center justify-between gap-3 p-2.5 rounded-xl hover:bg-[#f7f6f2] transition-colors group/item"
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <div className="relative w-12 h-10 rounded-lg border border-gray-100 bg-white p-1 flex-shrink-0 flex items-center justify-center shadow-xs overflow-hidden group-hover/item:border-red-200 group-hover/item:scale-105 transition-transform">
                                    <Image
                                      src={item.logo}
                                      alt={item.title}
                                      fill
                                      className="object-contain p-0.5"
                                    />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-sm font-bold text-gray-900 group-hover/item:text-[#c71b27] transition-colors leading-tight">
                                      {item.title}
                                    </div>
                                    <div className="text-[11px] text-gray-500 truncate mt-0.5">
                                      {item.desc}
                                    </div>
                                  </div>
                                </div>
                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 group-hover/item:bg-red-50 group-hover/item:text-[#c71b27] whitespace-nowrap">
                                  {item.badge}
                                </span>
                              </Link>
                            ))}
                            <div className="pt-2 border-t border-gray-100 px-3 py-1.5 flex justify-between items-center text-xs">
                              <Link
                                href="/brands"
                                className="text-[#0b3674] font-bold hover:text-[#c71b27] flex items-center gap-1"
                              >
                                Compare All 4 Entities <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                              <Link
                                href="/marinozz-restaurant#reservation"
                                className="text-[#c71b27] font-semibold hover:underline"
                              >
                                Book Table →
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-semibold rounded-xl transition-all ${
                      isActive
                        ? "text-[#c71b27] bg-red-50/80"
                        : "text-gray-700 hover:text-[#0b3674] hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Action CTA + Search */}
            <div className="hidden lg:flex items-center gap-2.5">
              <button
                type="button"
                onClick={openSearchModal}
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0b3674] bg-gray-50 hover:bg-gray-100 border border-gray-200/80 rounded-xl transition-all"
                aria-label="Search dishes, sweets and brands"
              >
                <Search className="w-3.5 h-3.5 text-[#c71b27]" />
                <span>Quick Find</span>
                <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-white border border-gray-200 text-gray-400">
                  ⌘K
                </kbd>
              </button>

              <Link
                href="/franchise"
                className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold rounded-xl text-white bg-gradient-to-r from-[#c71b27] to-[#9e141d] hover:from-[#9e141d] hover:to-[#7f0f16] shadow-sm hover:shadow-md transition-all duration-200"
              >
                Franchise Inquiry
              </Link>
            </div>

            {/* Mobile Hamburger & Search Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={openSearchModal}
                className="p-2 rounded-xl text-gray-700 bg-gray-50 border border-gray-200 hover:bg-gray-100"
                aria-label="Search dishes and brands"
              >
                <Search className="w-4 h-4 text-[#c71b27]" />
              </button>
              <Link
                href="/franchise"
                className="px-3 py-1.5 text-xs font-bold rounded-lg text-white bg-[#c71b27]"
              >
                Franchise
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white shadow-xl animate-in fade-in duration-200">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              <div className="p-2.5 mb-2 bg-blue-50/70 rounded-xl flex items-center justify-between text-xs text-[#0b3674] font-semibold">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>Associated with Mariners Group</span>
                </div>
                <a href="tel:+8801335149006" className="text-[#c71b27] font-bold">
                  Call Now
                </a>
              </div>

              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className={`block px-3 py-2.5 rounded-xl text-sm font-semibold ${
                      pathname === link.href
                        ? "text-[#c71b27] bg-red-50"
                        : "text-gray-700 hover:bg-gray-50 hover:text-[#0b3674]"
                    }`}
                  >
                    {link.name}
                  </Link>

                  {link.hasDropdown && (
                    <div className="pl-3 pr-2 py-1.5 my-1 space-y-2 border-l-2 border-red-200 ml-3">
                      {brandItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-center justify-between gap-2.5 py-1 text-xs text-gray-700 hover:text-[#c71b27]"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="relative w-7 h-6 rounded border border-gray-100 bg-white flex-shrink-0 overflow-hidden">
                              <Image
                                src={item.logo}
                                alt={item.title}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <span className="font-medium">{item.title}</span>
                          </div>
                          <span className="text-[10px] text-gray-400">{item.badge}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-gray-100 mt-2 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/marinozz-restaurant#reservation"
                    className="inline-flex items-center justify-center px-3 py-2.5 text-xs font-bold rounded-xl text-white bg-[#c71b27]"
                  >
                    Reserve Table
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-3 py-2.5 text-xs font-bold rounded-xl text-white bg-[#0b3674]"
                  >
                    Corporate Office
                  </Link>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-500 pt-2 px-1">
                  <span>Helpline: +880 1335-149006</span>
                  <Link href="/admin" className="text-[#0b3674] font-semibold underline">
                    Admin CMS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Native Modal Dialog for Quick Search & Instant Order/Navigation */}
      <dialog
        ref={searchDialogRef}
        {...({ closedby: "any" } as any)}
        aria-labelledby="quick-search-title"
        className="m-auto w-full max-w-2xl rounded-3xl bg-white p-0 shadow-2xl border border-gray-200 text-gray-900 open:animate-in open:fade-in open:zoom-in-95 duration-150"
      >
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#c71b27]" />
              <h2 id="quick-search-title" className="text-sm font-extrabold text-[#0b3674]">
                Quick Find — Dishes, Sweets, Brands &amp; Services
              </h2>
            </div>
            <button
              type="button"
              onClick={closeSearchModal}
              className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
              aria-label="Close search dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="relative mt-4">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              ref={searchInputRef}
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 'Sizzler', 'Biryani', 'Pantoa', 'Rasmalai', 'Franchise'..."
              className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674]"
            />
          </div>

          {/* Quick Filter Chips */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {["Sizzler", "Biryani", "Pantoa", "Rasmalai", "Cheesecake", "Franchise"].map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setSearchQuery(term)}
                className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-gray-100 hover:bg-red-50 hover:text-[#c71b27] text-gray-600 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div className="mt-4 max-h-80 overflow-y-auto divide-y divide-gray-100">
            {filteredSearch.length === 0 ? (
              <div className="py-8 text-center text-xs text-gray-500">
                No matching items found. Try searching for a dish, sweet, or brand name.
              </div>
            ) : (
              filteredSearch.map((item, idx) => (
                <div
                  key={idx}
                  className="py-2.5 px-2 flex items-center justify-between gap-3 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => {
                      closeSearchModal();
                      router.push(item.href);
                    }}
                    className="flex items-start gap-3 text-left flex-1 min-w-0"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 text-[#0b3674] mt-0.5 flex-shrink-0">
                      {item.category === "Restaurant Dish" ? (
                        <UtensilsCrossed className="w-4 h-4 text-[#c71b27]" />
                      ) : item.category === "Pantoa Sweet & Bakery" ? (
                        <Cake className="w-4 h-4 text-amber-600" />
                      ) : (
                        <ArrowRight className="w-4 h-4 text-[#0b3674]" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-gray-900 truncate">{item.title}</div>
                      <div className="text-[11px] text-gray-500 truncate">{item.subtitle}</div>
                    </div>
                  </button>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {item.price && (
                      <span className="text-xs font-extrabold text-[#0b3674] bg-blue-50 px-2.5 py-1 rounded-lg">
                        ৳{item.price}
                      </span>
                    )}
                    {item.price && (
                      <a
                        href={`https://wa.me/8801335149006?text=${encodeURIComponent(
                          `Hello Marinozz Group, I would like to order / inquire about: ${item.title} (BDT ${item.price}).`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors"
                        title="Order directly on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
            <span>Direct Helpline: +880 1335-149006</span>
            <span>Press Esc or click outside to close</span>
          </div>
        </div>
      </dialog>
    </>
  );
}
