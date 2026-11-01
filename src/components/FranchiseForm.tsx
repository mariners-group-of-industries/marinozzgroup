"use client";

import { useState } from "react";
import { Send, CheckCircle2, Building, Store, MapPin, DollarSign } from "lucide-react";

interface FranchiseFormProps {
  initialBrand?: string;
}

export default function FranchiseForm({ initialBrand = "Pantoa Sweets & Bakery Boutique" }: FranchiseFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    brandModel: initialBrand,
    propertyStatus: "Own Commercial Property",
    propertySizeSqFt: "",
    investmentCapacity: "BDT 30 Lakhs - 50 Lakhs",
    experienceSummary: "",
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.honeypot) return;

    setIsSubmitting(true);

    try {
      const existing = JSON.parse(localStorage.getItem("marinozz_franchise_apps") || "[]");
      const newApp = {
        id: "franchise_" + Date.now(),
        date: new Date().toISOString(),
        ...formData,
      };
      localStorage.setItem("marinozz_franchise_apps", JSON.stringify([newApp, ...existing]));

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 700);
    } catch {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-gray-100">
      <div className="mb-8">
        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
          Partner With Marinozz Group
        </span>
        <h3 className="text-2xl font-bold text-[#0b3674] tracking-tight mt-3">
          Franchise Expression of Interest
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Join a robust culinary ecosystem backed by Mariners Group. Fill out this confidential
          form to review our turnkey financial prospectus and territorial exclusivity.
        </p>
      </div>

      {isSuccess ? (
        <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h4 className="text-xl font-bold text-emerald-950">Application Registered</h4>
          <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
            Thank you, {formData.fullName}. Our Franchise Development Director will review your
            territory requirements and contact you via phone and email within 1-2 business days.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                city: "",
                brandModel: initialBrand,
                propertyStatus: "Own Commercial Property",
                propertySizeSqFt: "",
                investmentCapacity: "BDT 30 Lakhs - 50 Lakhs",
                experienceSummary: "",
                honeypot: "",
              });
            }}
            className="mt-4 px-5 py-2.5 text-xs font-semibold rounded-lg bg-emerald-700 text-white hover:bg-emerald-800"
          >
            Submit Another Application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>

          {/* Franchise Format Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-gray-700">
              Select Franchise Model <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                {
                  id: "Pantoa Sweets & Bakery Boutique",
                  title: "Pantoa Sweet Boutique",
                  sqft: "600 – 1,200 sq.ft",
                  desc: "Signature sweets, bakery & gift boxes",
                  icon: Store,
                },
                {
                  id: "Pantoa Express Kiosk",
                  title: "Pantoa Express Kiosk",
                  sqft: "150 – 350 sq.ft",
                  desc: "Transit hub, metro or mall kiosk format",
                  icon: Building,
                },
                {
                  id: "Marinozz Multicuisine Restaurant",
                  title: "Marinozz Restaurant",
                  sqft: "2,500 – 5,000 sq.ft",
                  desc: "Full-service fine dining & banquet",
                  icon: Store,
                },
              ].map((model) => {
                const Icon = model.icon;
                const isSelected = formData.brandModel === model.id;
                return (
                  <button
                    type="button"
                    key={model.id}
                    onClick={() => setFormData((p) => ({ ...p, brandModel: model.id }))}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "border-[#c71b27] bg-red-50/50 ring-2 ring-[#c71b27]/20"
                        : "border-gray-200 hover:border-gray-300 bg-gray-50/40"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 mb-2 ${
                        isSelected ? "text-[#c71b27]" : "text-gray-400"
                      }`}
                    />
                    <div className="font-semibold text-sm text-gray-900">{model.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{model.desc}</div>
                    <div className="text-[11px] font-medium text-gray-400 mt-2">
                      Space: {model.sqft}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label htmlFor="fullName" className="block text-xs font-semibold text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                autoComplete="name"
                placeholder="Applicant Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674]"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="franchise_email" className="block text-xs font-semibold text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="franchise_email"
                name="email"
                required
                autoComplete="email"
                placeholder="name@domain.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674]"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="franchise_phone" className="block text-xs font-semibold text-gray-700">
                Mobile / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="franchise_phone"
                name="phone"
                required
                autoComplete="tel"
                placeholder="+880 1..."
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674]"
              />
            </div>
          </div>

          {/* Location & Investment Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label htmlFor="city" className="block text-xs font-semibold text-gray-700 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                Proposed City / District <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                placeholder="e.g. Dhaka (Uttara), Chittagong, Sylhet"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674]"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="investmentCapacity" className="block text-xs font-semibold text-gray-700 flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-gray-400" />
                Investment Capacity
              </label>
              <select
                id="investmentCapacity"
                name="investmentCapacity"
                value={formData.investmentCapacity}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674] bg-white"
              >
                <option value="BDT 15 Lakhs - 30 Lakhs (Express Kiosk)">
                  BDT 15 Lakhs - 30 Lakhs (Express Kiosk)
                </option>
                <option value="BDT 30 Lakhs - 50 Lakhs (Boutique)">
                  BDT 30 Lakhs - 50 Lakhs (Boutique)
                </option>
                <option value="BDT 50 Lakhs - 1 Crore (Flagship Boutique)">
                  BDT 50 Lakhs - 1 Crore (Flagship Boutique)
                </option>
                <option value="BDT 1 Crore+ (Full Restaurant / Multi-Unit)">
                  BDT 1 Crore+ (Full Restaurant / Multi-Unit)
                </option>
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="propertyStatus" className="block text-xs font-semibold text-gray-700">
                Property Status
              </label>
              <select
                id="propertyStatus"
                name="propertyStatus"
                value={formData.propertyStatus}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674] bg-white"
              >
                <option value="Own Commercial Property">Own Commercial Property</option>
                <option value="Rented / Leased Space Identified">
                  Rented / Leased Space Identified
                </option>
                <option value="Seeking Marinozz Scouting Assistance">
                  Seeking Marinozz Scouting Assistance
                </option>
              </select>
            </div>
          </div>

          {/* Business Experience */}
          <div className="space-y-1">
            <label htmlFor="experienceSummary" className="block text-xs font-semibold text-gray-700">
              Brief Business Experience & Profile
            </label>
            <textarea
              id="experienceSummary"
              name="experienceSummary"
              rows={3}
              placeholder="Tell us about your current business ventures, background, or commercial experience..."
              value={formData.experienceSummary}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674] resize-y"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-xl text-white bg-[#0b3674] hover:bg-[#072147] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all duration-200 shadow hover:shadow-md disabled:opacity-70"
          >
            {isSubmitting ? (
              <span>Processing Application...</span>
            ) : (
              <>
                <span>Submit Franchise Inquiry</span>
                <Send className="w-4 h-4 text-amber-300" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
