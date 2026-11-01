"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Utensils,
  Cake,
  Factory,
  Building2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [brandsDropdown, setBrandsDropdown] = useState(false);
  const pathname = usePathname();

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
  }, [pathname]);

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
      icon: Utensils,
      color: "text-red-700 bg-red-50",
    },
    {
      title: "Pantoa Sweets & Bakery",
      desc: "Authentic Bengali Sweets & European Bakery",
      href: "/pantoa-sweets-bakery",
      icon: Cake,
      color: "text-amber-700 bg-amber-50",
    },
    {
      title: "Marinozz Confectionery PLC",
      desc: "Packaged Commercial Baking & FMCG Goods",
      href: "/brands#confectionery",
      icon: Factory,
      color: "text-red-800 bg-red-50",
    },
    {
      title: "Marinozz PLC",
      desc: "Supply Chain & Corporate Management Backbone",
      href: "/brands#marinozz-plc",
      icon: Building2,
      color: "text-blue-900 bg-blue-50",
    },
  ];

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
            <span className="text-blue-300">|</span>
            <span className="text-blue-200">Excellence in Food, Hospitality & Confectionery</span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/franchise"
              className="text-amber-300 hover:text-white font-medium transition-colors"
            >
              Franchise Opportunities 2026 →
            </Link>
            <a
              href="tel:+8801335149006"
              className="flex items-center gap-1 text-blue-100 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-red-400" />
              +880 1335-149006
            </a>
            <Link
              href="/admin"
              className="text-blue-200 hover:text-white text-[11px] px-2 py-0.5 rounded bg-blue-900/60 border border-blue-700/50"
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
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
            : "bg-white border-b border-gray-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
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
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setBrandsDropdown(true)}
                      onMouseLeave={() => setBrandsDropdown(false)}
                    >
                      <button
                        onClick={() => setBrandsDropdown(!brandsDropdown)}
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          pathname.startsWith("/marinozz-restaurant") ||
                          pathname.startsWith("/pantoa-sweets-bakery") ||
                          pathname === "/brands"
                            ? "text-[#c71b27] font-semibold bg-red-50/60"
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
                        <div className="absolute top-full left-0 w-80 pt-2 z-50">
                          <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2.5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="px-3 py-2 border-b border-gray-100 mb-1">
                              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                Marinozz Brand Ecosystem
                              </p>
                            </div>
                            {brandItems.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors group/item"
                                >
                                  <div
                                    className={`p-2 rounded-lg ${item.color} mt-0.5 group-hover/item:scale-105 transition-transform`}
                                  >
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-gray-900 group-hover/item:text-[#c71b27] transition-colors flex items-center gap-1">
                                      {item.title}
                                    </div>
                                    <div className="text-xs text-gray-500 line-clamp-1">
                                      {item.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                            <div className="pt-2 border-t border-gray-100 px-3 py-1.5 flex justify-between items-center text-xs">
                              <Link
                                href="/brands"
                                className="text-[#0b3674] font-medium hover:text-[#c71b27] flex items-center gap-1"
                              >
                                View All Brands <ArrowRight className="w-3 h-3" />
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
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-[#c71b27] font-semibold bg-red-50/60"
                        : "text-gray-700 hover:text-[#0b3674] hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Action CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/franchise"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-[#c71b27] hover:bg-[#9e141d] shadow-sm hover:shadow transition-all duration-200"
              >
                Franchise Inquiry
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/franchise"
                className="px-3 py-1.5 text-xs font-semibold rounded-md text-white bg-[#c71b27]"
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
              <div className="p-2 mb-2 bg-blue-50/70 rounded-lg flex items-center gap-2 text-xs text-[#0b3674] font-medium">
                <ShieldCheck className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>Associated with Mariners Group</span>
              </div>

              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                      pathname === link.href
                        ? "text-[#c71b27] font-semibold bg-red-50"
                        : "text-gray-700 hover:bg-gray-50 hover:text-[#0b3674]"
                    }`}
                  >
                    {link.name}
                  </Link>

                  {link.hasDropdown && (
                    <div className="pl-4 pr-2 py-1 my-1 space-y-1 border-l-2 border-red-100 ml-3">
                      {brandItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block py-1.5 text-xs text-gray-600 hover:text-[#c71b27]"
                        >
                          • {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-gray-100 mt-2 space-y-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium rounded-lg text-white bg-[#0b3674] hover:bg-[#072147]"
                >
                  Contact Our Corporate Office
                </Link>
                <div className="flex justify-between items-center text-xs text-gray-500 pt-2 px-1">
                  <span>Helpline: +880 1335-149006</span>
                  <Link href="/admin" className="text-blue-700 underline">
                    Admin CMS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
