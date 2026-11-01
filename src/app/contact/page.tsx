"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Building2,
  Utensils,
  Cake,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import InquiryForm from "@/components/InquiryForm";
import { LOCATIONS } from "@/data/locations";

export default function ContactPage() {
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(0);
  const activeLoc = LOCATIONS[selectedLocationIndex];

  return (
    <div className="space-y-20 pb-24">
      <PageHeader
        badge="Connect With Us"
        title="Contact Marinozz Group"
        subtitle="We welcome reservations, corporate bulk orders, franchise applications, and partnership inquiries across our brand portfolio."
        breadcrumb={[{ label: "Contact Us" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Contact Information & Interactive Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Inquiries Form */}
          <div className="lg:col-span-7">
            <InquiryForm
              defaultCategory="General Corporate Inquiry"
              sourceBrand="Marinozz Group Corporate Office"
            />
          </div>

          {/* Right Column: Key Contacts Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0b3674]">
                <ShieldCheck className="w-4 h-4 text-red-600" />
                <span>Executive Office & Helplines</span>
              </div>

              <div className="space-y-4 text-xs text-gray-700">
                <div className="p-4 rounded-xl bg-gray-50 space-y-2">
                  <h4 className="font-bold text-sm text-[#0b3674]">General Inquiries & Reception</h4>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-red-600" />
                    <span>+880 1335-149006</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 space-y-2">
                  <h4 className="font-bold text-sm text-amber-800">Franchise & Institutional Sales</h4>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-600" />
                    <span>+880 1335-149006</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 space-y-2">
                  <h4 className="font-bold text-sm text-[#0b3674]">Marinozz Multicuisine Restaurant Desk</h4>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#0b3674]" />
                    <span>+880 1335-149006</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>12:00 PM – 11:00 PM Daily</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href="https://wa.me/8801335149006?text=Hello%20Marinozz%20Group,%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold rounded-xl text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Branch Directory & Google Maps Section */}
        <div className="bg-[#f7f6f2] p-6 sm:p-10 rounded-3xl border border-gray-200 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#c71b27]">
                Branch & Facility Directory
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
                  onClick={() => setSelectedLocationIndex(idx)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    selectedLocationIndex === idx
                      ? "bg-[#0b3674] text-white shadow-xs"
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

              <h3 className="text-lg font-bold text-gray-900 leading-snug">{activeLoc.name}</h3>

              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#c71b27] flex-shrink-0 mt-0.5" />
                  <span>{activeLoc.address}, {activeLoc.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{activeLoc.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0b3674] flex-shrink-0" />
                  <span>{activeLoc.phone}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <h5 className="text-[11px] font-bold uppercase text-gray-400 mb-2">Amenities</h5>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] text-gray-600">
                  {activeLoc.features.map((f, i) => (
                    <div key={i}>• {f}</div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={activeLoc.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b3674] hover:text-[#c71b27] transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
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
