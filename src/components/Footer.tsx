import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck, HeartHandshake } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#072147] text-white pt-16 pb-10 border-t border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-blue-900/60">
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white inline-block p-2 rounded-xl shadow-sm">
              <div className="relative h-10 w-44">
                <Image
                  src="/logos/marinozz-group.png"
                  alt="Marinozz Group Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="text-sm text-blue-100/80 leading-relaxed pr-4">
              Marinozz Group is an integrated Food, Restaurant, Confectionery, Retail and Hospitality
              business ecosystem associated with Mariners Group. Committed to culinary excellence,
              uncompromising food hygiene, and scalable franchise partnerships.
            </p>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-900/40 border border-blue-800/60 text-xs text-blue-200">
              <ShieldCheck className="w-5 h-5 text-red-400 flex-shrink-0" />
              <span>
                Operating with the governance discipline and trustworthiness of{" "}
                <strong className="text-white font-medium">Mariners Group</strong>.
              </span>
            </div>

            <div className="pt-1 flex items-center gap-4 text-xs text-blue-300">
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-amber-400" />
                100% Halal Assured
              </span>
              <span>•</span>
              <span>HACCP Principles</span>
              <span>•</span>
              <span>ISO 22000 Aligned</span>
            </div>
          </div>

          {/* Col 3: Brand Portfolio */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4">
              Our Brands
            </h3>
            <ul className="space-y-2.5 text-sm text-blue-100/80">
              <li>
                <Link
                  href="/marinozz-restaurant"
                  className="hover:text-white hover:underline flex items-center justify-between group"
                >
                  <span>Marinozz Restaurant</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-red-400 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/pantoa-sweets-bakery"
                  className="hover:text-white hover:underline flex items-center justify-between group"
                >
                  <span>Pantoa Sweets & Bakery</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-amber-400 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/brands#confectionery"
                  className="hover:text-white hover:underline flex items-center justify-between group"
                >
                  <span>Marinozz Confectionery PLC</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-red-400 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/brands#marinozz-plc"
                  className="hover:text-white hover:underline flex items-center justify-between group"
                >
                  <span>Marinozz PLC</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-blue-300 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/brands"
                  className="text-amber-300 text-xs hover:text-white pt-2 inline-block font-medium"
                >
                  View Complete Portfolio →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-200 mb-4">
              Corporate
            </h3>
            <ul className="space-y-2.5 text-sm text-blue-100/80">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Marinozz Group
                </Link>
              </li>
              <li>
                <Link href="/ecosystem" className="hover:text-white transition-colors">
                  Our Business Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="hover:text-white transition-colors">
                  Franchise & Partnerships
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  News & Media Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Corporate Contacts
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white text-xs text-blue-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Connect & Headquarters */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-200 mb-4">
              Headquarters
            </h3>
            <ul className="space-y-3 text-xs text-blue-100/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Mariners Tower, Corporate Sector, Suite 901-904, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-400 flex-shrink-0" />
                <a href="tel:+8801711000000" className="hover:text-white">
                  +880 1711 000000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-400 flex-shrink-0" />
                <a href="mailto:info@marinozzgroup.com" className="hover:text-white">
                  info@marinozzgroup.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Office: Sun - Thu, 9 AM - 6 PM</span>
              </li>
              <li className="pt-2">
                <Link
                  href="/admin"
                  className="inline-block text-[11px] px-2.5 py-1 rounded bg-blue-900/80 border border-blue-700/60 text-blue-200 hover:text-white"
                >
                  Manage Site Content (Admin CMS)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300/80">
          <p>© {currentYear} Marinozz Group. All rights reserved. Associated with Mariners Group.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Location Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
