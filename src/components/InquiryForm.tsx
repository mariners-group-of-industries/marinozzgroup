"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface InquiryFormProps {
  defaultCategory?: string;
  sourceBrand?: string;
}

export default function InquiryForm({
  defaultCategory = "General Inquiry",
  sourceBrand = "Marinozz Group",
}: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: defaultCategory,
    message: "",
    honeypot: "", // anti-spam hidden field
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Spam honeypot detection
    if (formData.honeypot) {
      console.warn("Spam bot detected.");
      return;
    }

    setStatus("submitting");

    try {
      // Store inquiry in local storage so it can be viewed in the CMS Admin panel
      const existingInquiries = JSON.parse(
        localStorage.getItem("marinozz_inquiries") || "[]"
      );
      const newInquiry = {
        id: "inq_" + Date.now(),
        date: new Date().toISOString(),
        brand: sourceBrand,
        ...formData,
      };
      localStorage.setItem(
        "marinozz_inquiries",
        JSON.stringify([newInquiry, ...existingInquiries])
      );

      setTimeout(() => {
        setStatus("success");
        setFeedback(
          "Thank you! Your inquiry has been received. Our corporate representative will reach out to you within 24 hours."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          category: defaultCategory,
          message: "",
          honeypot: "",
        });
      }, 700);
    } catch {
      setStatus("error");
      setFeedback("An error occurred while submitting your message. Please try again or call us.");
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#0b3674] tracking-tight">
          Send a Direct Message
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Our team is available to assist with inquiries, reservations, partnerships, and group orders.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
          <h4 className="text-base font-semibold text-emerald-900">Message Delivered</h4>
          <p className="text-xs text-emerald-800 leading-relaxed">{feedback}</p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-3 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot hidden input for bot prevention */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>

          {/* Full Name */}
          <div className="space-y-1">
            <label htmlFor="name" className="block text-xs font-semibold text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              minLength={2}
              maxLength={100}
              autoComplete="name"
              placeholder="e.g. Captain Tanvir Ahmed"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674] transition-colors"
            />
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-xs font-semibold text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674] transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="phone" className="block text-xs font-semibold text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                autoComplete="tel"
                placeholder="+880 1700 000000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674] transition-colors"
              />
            </div>
          </div>

          {/* Inquiry Category */}
          <div className="space-y-1">
            <label htmlFor="category" className="block text-xs font-semibold text-gray-700">
              Inquiry Type
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674] transition-colors bg-white"
            >
              <option value="General Corporate Inquiry">General Corporate Inquiry</option>
              <option value="Restaurant Dining & Reservation">
                Restaurant Dining & Table Reservation
              </option>
              <option value="Pantoa Sweets & Bulk Gifting">
                Pantoa Sweets & Corporate Gift Hampers
              </option>
              <option value="Franchise Opportunity">Franchise & Outlet Partnership</option>
              <option value="Commercial Supply / FMCG">
                Marinozz Confectionery Wholesale / FMCG
              </option>
              <option value="Vendor / Procurement">Vendor & Supply Proposal</option>
            </select>
          </div>

          {/* Message Content */}
          <div className="space-y-1">
            <label htmlFor="message" className="block text-xs font-semibold text-gray-700">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Please provide details regarding your requirements, guest count, or partnership interest..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674] transition-colors resize-y"
            ></textarea>
          </div>

          {status === "error" && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2 text-xs text-red-700">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{feedback}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg text-white bg-[#c71b27] hover:bg-[#9e141d] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 shadow-sm disabled:opacity-70"
          >
            {status === "submitting" ? (
              <span>Submitting Inquiry...</span>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-[11px] text-gray-400 text-center pt-1">
            We value your privacy. Your information is strictly used to address your inquiry.
          </p>
        </form>
      )}
    </div>
  );
}
