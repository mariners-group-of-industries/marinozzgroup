"use client";

import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0b3674]">
                Marinozz Group Concierge
              </p>
              <p className="text-sm font-medium text-gray-800">How can we assist you?</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1 rounded-full"
              aria-label="Close chat concierge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 space-y-2 text-xs">
            <a
              href="https://wa.me/8801711000000?text=Hello%20Marinozz%20Group,%20I%20would%20like%20to%20inquire%20about%20Marinozz%20Restaurant%20table%20reservation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100/70 text-emerald-900 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-emerald-800">Restaurant Reservations</p>
                <p className="text-[11px] text-emerald-700">Chat with dining front desk</p>
              </div>
            </a>

            <a
              href="https://wa.me/8801712111111?text=Hello%20Marinozz%20Group,%20I%20am%20interested%20in%20Pantoa%20Sweets%20Bakery%20or%20Franchise%20partnership."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 rounded-lg bg-amber-50 hover:bg-amber-100/70 text-amber-900 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-amber-800">Franchise & Pantoa Sweets</p>
                <p className="text-[11px] text-amber-700">Inquire about partnership</p>
              </div>
            </a>

            <a
              href="tel:+8801711000000"
              className="flex items-center gap-2.5 p-2 rounded-lg bg-blue-50 hover:bg-blue-100/70 text-blue-900 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#0b3674] flex-shrink-0" />
              <div>
                <p className="font-semibold text-[#0b3674]">Direct Helpline</p>
                <p className="text-[11px] text-blue-700">+880 1711 000000</p>
              </div>
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open contact options"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#c71b27] hover:bg-[#9e141d] text-white shadow-lg hover:shadow-xl transition-all duration-200 group"
      >
        <MessageCircle className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
        <span className="text-xs font-semibold hidden sm:inline">Direct Assistance</span>
      </button>
    </div>
  );
}
