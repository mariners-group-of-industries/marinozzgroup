"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Copy,
  Check,
  ArrowLeft,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import InquiryForm from "@/components/InquiryForm";
import { LOCATIONS } from "@/data/locations";

export default function ContactPage() {
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(0);
  const [activeDept, setActiveDept] = useState("General Corporate Inquiry");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const activeLoc = LOCATIONS[selectedLocationIndex];

  const handleSelectDept = (category: string) => {
    setActiveDept(category);
    window.dispatchEvent(
      new CustomEvent("marinozz:select-category", {
        detail: { category },
      })
    );
  };

  const copyText = (text: string, key: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedField(key);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const departments = [
    {
      title: "Marinozz Multicuisine Restaurant Desk",
      category: "Restaurant Dining & Reservation",
      subtitle: "Table bookings, VIP suites & banquet hall events",
      hours: "12:00 PM – 11:00 PM Daily",
      badge: "Load Table Booking Form",
    },
    {
      title: "Pantoa Sweets & Corporate Gifting",
      category: "Pantoa Sweets & Bulk Gifting",
      subtitle: "Custom sweet hampers, celebration cakes & bulk orders",
      hours: "08:00 AM – 10:30 PM Daily",
      badge: "Load Bulk Order Form",
    },
    {
      title: "Franchise & Institutional Sales",
      category: "Franchise Opportunity",
      subtitle: "Boutique, express kiosk & restaurant territory inquiries",
      hours: "Sun – Thu: 09:00 AM – 06:00 PM",
      badge: "Load Franchise Desk",
    },
    {
      title: "General Corporate & Reception (Marinozz PLC)",
      category: "General Corporate Inquiry",
      subtitle: "MG SAM Center, 12 Mohakhali C/A, Dhaka-1212",
      hours: "Sun – Thu: 09:00 AM – 06:00 PM",
      badge: "Load Corporate Form",
    },
  ];

  return (
    <div className="space-y-20 pb-24">
      <PageHeader
        title="Contact Marinozz Group"
        subtitle="We welcome reservations, corporate bulk orders, franchise applications, and partnership inquiries across our brand portfolio."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Contact Information & Interactive Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries Form */}
          <div className="lg:col-span-7">
            <InquiryForm
              defaultCategory="General Corporate Inquiry"
              sourceBrand="Marinozz Group Corporate Office"
            />
          </div>

          {/* Right Column: Interactive Department Selector & Key Contacts Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0b3674]">
                  <ShieldCheck className="w-4 h-4 text-red-600" />
                  <span>Select a Desk to Pre-Fill Form</span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-gray-700">
                {departments.map((dept) => {
                  const isSelected = activeDept === dept.category;
                  return (
                    <button
                      key={dept.category}
                      type="button"
                      onClick={() => handleSelectDept(dept.category)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all space-y-1.5 ${
                        isSelected
                          ? "border-[#c71b27] bg-red-50/40 ring-2 ring-[#c71b27]/15"
                          : "border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-200"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-extrabold text-sm text-[#0b3674]">
                          {dept.title}
                        </h4>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 ${
                            isSelected
                              ? "bg-[#c71b27] text-white"
                              : "bg-white text-gray-600 border border-gray-200"
                          }`}
                        >
                          <ArrowLeft className="w-2.5 h-2.5" />
                          {isSelected ? "Active in Form" : "Select"}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-500">{dept.subtitle}</p>
                      <div className="flex items-center justify-between pt-1 text-[11px] text-gray-600">
                        <span className="flex items-center gap-1.5 font-semibold text-gray-800">
                          <Phone className="w-3.5 h-3.5 text-red-600" />
                          +880 1335-149006
                        </span>
                        <span className="text-gray-400">{dept.hours}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Quick Copy Corporate Address & Helpline */}
              <div className="p-4 rounded-2xl bg-[#f7f6f2] border border-gray-200 space-y-2.5 text-xs">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-[#0b3674]">
                    MG SAM Center, 12 Mohakhali C/A, Dhaka-1212
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      copyText("MG SAM Center, 12 Mohakhali C/A, Dhaka-1212", "address")
                    }
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-[11px] font-semibold text-gray-700 hover:bg-gray-100"
                  >
                    {copiedField === "address" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-2 pt-2 border-t border-gray-200/70">
                  <span className="font-bold text-gray-800">Helpline: +880 1335-149006</span>
                  <button
                    type="button"
                    onClick={() => copyText("+880 1335-149006", "phone")}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-[11px] font-semibold text-gray-700 hover:bg-gray-100"
                  >
                    {copiedField === "phone" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href="https://wa.me/8801335149006?text=Hello%20Marinozz%20Group,%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold rounded-xl text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat Instantly on WhatsApp (+880 1335-149006)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Branch Directory & Google Maps Section */}
        <div className="bg-[#f7f6f2] p-6 sm:p-10 rounded-3xl border border-gray-200 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#c71b27]">
                Branch &amp; Facility Directory
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b3674] tracking-tight mt-1">
                Find Our Locations
              </h2>
            </div>

            {/* Location Switcher Tabs */}
            <div className="flex flex-wrap gap-2">
              {LOCATIONS.map((loc, idx) => (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => setSelectedLocationIndex(idx)}
                  className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all ${
                    selectedLocationIndex === idx
                      ? "bg-[#0b3674] text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {loc.brand.split("—")[0].trim()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Location Card Info */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 space-y-4">
              <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-red-50 text-red-700">
                {activeLoc.type}
              </span>

              <h3 className="text-lg font-extrabold text-gray-900 leading-snug">
                {activeLoc.name}
              </h3>

              <div className="space-y-2.5 text-xs text-gray-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#c71b27] flex-shrink-0 mt-0.5" />
                  <span>
                    {activeLoc.address}, {activeLoc.city}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{activeLoc.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0b3674] flex-shrink-0" />
                  <a href={`tel:${activeLoc.phone}`} className="font-bold hover:underline">
                    {activeLoc.phone}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <h5 className="text-[11px] font-bold uppercase text-gray-400 mb-2">
                  Amenities &amp; Highlights
                </h5>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] text-gray-600">
                  {activeLoc.features.map((f, i) => (
                    <div key={i}>• {f}</div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={activeLoc.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-[#0b3674] text-white hover:bg-[#072147] transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`https://wa.me/${activeLoc.whatsapp.replace(/\+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Branch</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps Frame */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] border border-gray-200 shadow-sm bg-white">
              <iframe
                key={activeLoc.id}
                title={`Google Map for ${activeLoc.name}`}
                src={activeLoc.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
