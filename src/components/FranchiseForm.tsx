"use client";

import { useState, useEffect } from "react";
import {
  Send,
  CheckCircle2,
  Building,
  Store,
  MapPin,
  DollarSign,
  MessageCircle,
  Clock,
  Users,
  Truck,
} from "lucide-react";

interface FranchiseFormProps {
  initialBrand?: string;
}

const MODEL_SPECS: Record<
  string,
  {
    title: string;
    sqft: string;
    investment: string;
    staff: string;
    launchTime: string;
    supply: string;
    desc: string;
  }
> = {
  "Pantoa Sweets & Bakery Boutique": {
    title: "Pantoa Sweet Boutique",
    sqft: "600 – 1,200 sq.ft",
    investment: "BDT 30 Lakhs - 50 Lakhs (Boutique)",
    staff: "5 – 8 Trained Staff",
    launchTime: "45 – 60 Days Fit-Out",
    supply: "2x Daily Refrigerated Van",
    desc: "Signature sweets, European bakery & corporate gift boxes",
  },
  "Pantoa Express Kiosk": {
    title: "Pantoa Express Kiosk",
    sqft: "150 – 350 sq.ft",
    investment: "BDT 15 Lakhs - 30 Lakhs (Express Kiosk)",
    staff: "2 – 3 Attendants",
    launchTime: "25 – 35 Days Rapid Setup",
    supply: "Daily Morning Cold-Chain",
    desc: "Transit hub, metro station, commercial tower or mall kiosk",
  },
  "Marinozz Multicuisine Restaurant": {
    title: "Marinozz Restaurant",
    sqft: "2,500 – 5,000 sq.ft",
    investment: "BDT 1 Crore+ (Full Restaurant / Multi-Unit)",
    staff: "22 – 35 Chefs & Stewards",
    launchTime: "75 – 90 Days Turnkey Build",
    supply: "Central Prep + Live Kitchen",
    desc: "Full-service multicuisine fine dining & private banquet hall",
  },
};

export default function FranchiseForm({
  initialBrand = "Pantoa Sweets & Bakery Boutique",
}: FranchiseFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    brandModel: initialBrand,
    propertyStatus: "Own Commercial Property",
    propertySizeSqFt: "800 sq. ft.",
    investmentCapacity:
      MODEL_SPECS[initialBrand]?.investment || "BDT 30 Lakhs - 50 Lakhs (Boutique)",
    experienceSummary: "",
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Listen for external franchise model selection buttons on the Franchise page
  useEffect(() => {
    const handleModelSelect = (e: Event) => {
      const custom = e as CustomEvent<{ modelId: string }>;
      const modelId = custom.detail?.modelId;
      if (modelId && MODEL_SPECS[modelId]) {
        setFormData((prev) => ({
          ...prev,
          brandModel: modelId,
          investmentCapacity: MODEL_SPECS[modelId].investment,
        }));
      }
    };
    window.addEventListener("marinozz:select-franchise-model", handleModelSelect);
    return () =>
      window.removeEventListener("marinozz:select-franchise-model", handleModelSelect);
  }, []);

  const selectModel = (modelId: string) => {
    const spec = MODEL_SPECS[modelId];
    setFormData((prev) => ({
      ...prev,
      brandModel: modelId,
      investmentCapacity: spec ? spec.investment : prev.investmentCapacity,
    }));
  };

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
      const existing = JSON.parse(
        localStorage.getItem("marinozz_franchise_apps") || "[]"
      );
      const newApp = {
        id: "franchise_" + Date.now(),
        date: new Date().toISOString(),
        ...formData,
      };
      localStorage.setItem(
        "marinozz_franchise_apps",
        JSON.stringify([newApp, ...existing])
      );

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 500);
    } catch {
      setIsSubmitting(false);
    }
  };

  const currentSpec =
    MODEL_SPECS[formData.brandModel] ||
    MODEL_SPECS["Pantoa Sweets & Bakery Boutique"];

  const buildFranchiseWhatsAppUrl = () => {
    const msg = `Hello Marinozz Group Franchise Desk,\nI am interested in a Franchise Partnership:\n\n• Applicant: ${
      formData.fullName || "Prospective Partner"
    }\n• Phone: ${formData.phone || "+880..."}\n• Format: ${
      formData.brandModel
    }\n• Territory/City: ${formData.city || "Dhaka"}\n• Property: ${
      formData.propertyStatus
    } (${formData.propertySizeSqFt})\n• Investment Bracket: ${
      formData.investmentCapacity
    }\n• Profile: ${formData.experienceSummary || "Ready for discussion"}`;
    return `https://wa.me/8801335149006?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
            Partner With Marinozz Group
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b3674] tracking-tight mt-3">
            Franchise Expression of Interest
          </h3>
          <p className="text-sm text-gray-600 mt-1 max-w-2xl">
            Join a structured culinary ecosystem backed by Mariners Group. Select a format below to view operational metrics and register your territory.
          </p>
        </div>
        <a
          href="tel:+8801335149006"
          className="text-xs font-bold text-[#0b3674] bg-blue-50 px-4 py-2.5 rounded-xl border border-blue-100 whitespace-nowrap"
        >
          Franchise Desk: +880 1335-149006
        </a>
      </div>

      {isSuccess ? (
        <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h4 className="text-xl font-extrabold text-emerald-950">
            Application Registered!
          </h4>
          <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
            Thank you, <strong>{formData.fullName}</strong>. Our Franchise Development Director will review your{" "}
            <strong>{formData.city}</strong> territory profile and contact you via phone or WhatsApp within 24–48 hours.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={buildFranchiseWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 shadow transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Application to Franchise WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setIsSuccess(false);
                setFormData({
                  fullName: "",
                  phone: "",
                  city: "",
                  brandModel: initialBrand,
                  propertyStatus: "Own Commercial Property",
                  propertySizeSqFt: "800 sq. ft.",
                  investmentCapacity: "BDT 30 Lakhs - 50 Lakhs (Boutique)",
                  experienceSummary: "",
                  honeypot: "",
                });
              }}
              className="px-5 py-2.5 text-xs font-bold rounded-xl bg-white border border-emerald-200 text-emerald-900 hover:bg-emerald-100"
            >
              Submit Another Application
            </button>
          </div>
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

          {/* 1. Interactive Franchise Format Selection */}
          <div className="space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
              Step 1: Select Franchise Model <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {[
                {
                  id: "Pantoa Sweets & Bakery Boutique",
                  icon: Store,
                },
                {
                  id: "Pantoa Express Kiosk",
                  icon: Building,
                },
                {
                  id: "Marinozz Multicuisine Restaurant",
                  icon: Store,
                },
              ].map((model) => {
                const Icon = model.icon;
                const spec = MODEL_SPECS[model.id];
                const isSelected = formData.brandModel === model.id;
                return (
                  <button
                    type="button"
                    key={model.id}
                    onClick={() => selectModel(model.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? "border-[#c71b27] bg-red-50/50 ring-2 ring-[#c71b27]/20 shadow-sm"
                        : "border-gray-200 hover:border-gray-300 bg-gray-50/40"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon
                        className={`w-5 h-5 ${
                          isSelected ? "text-[#c71b27]" : "text-gray-400"
                        }`}
                      />
                      {isSelected && (
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#c71b27] text-white">
                          Selected
                        </span>
                      )}
                    </div>
                    <div className="font-extrabold text-sm text-gray-900">
                      {spec.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{spec.desc}</div>
                    <div className="text-[11px] font-bold text-[#0b3674] mt-2.5">
                      Space: {spec.sqft}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Live Blueprint Estimator Bar for Selected Model */}
            <div className="p-4 rounded-2xl bg-[#f7f6f2] border border-gray-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="flex items-start gap-2">
                <Store className="w-4 h-4 text-[#c71b27] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase text-gray-400 font-bold block">
                    Floor Area
                  </span>
                  <strong className="text-gray-900">{currentSpec.sqft}</strong>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Users className="w-4 h-4 text-[#0b3674] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase text-gray-400 font-bold block">
                    Staffing Team
                  </span>
                  <strong className="text-gray-900">{currentSpec.staff}</strong>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase text-gray-400 font-bold block">
                    Central Supply
                  </span>
                  <strong className="text-gray-900">{currentSpec.supply}</strong>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase text-gray-400 font-bold block">
                    Launch Timeline
                  </span>
                  <strong className="text-gray-900">{currentSpec.launchTime}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Applicant & Contact Details (No Email Field) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label htmlFor="fullName" className="block text-xs font-bold text-gray-700">
                Applicant Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                minLength={2}
                autoComplete="name"
                placeholder="e.g. Mohammedarman Chowdhury"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674]"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="franchise_phone"
                className="block text-xs font-bold text-gray-700"
              >
                Mobile / WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="franchise_phone"
                name="phone"
                required
                minLength={7}
                autoComplete="tel"
                placeholder="+880 1335-149006"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674]"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="city"
                className="block text-xs font-bold text-gray-700 flex items-center gap-1"
              >
                <MapPin className="w-3.5 h-3.5 text-[#c71b27]" />
                Proposed City / Area <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                placeholder="e.g. Gulshan, Uttara, Dhanmondi, Chittagong"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674]"
              />
            </div>
          </div>

          {/* 3. Property & Investment Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label
                htmlFor="investmentCapacity"
                className="block text-xs font-bold text-gray-700 flex items-center gap-1"
              >
                <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                Investment Capacity
              </label>
              <select
                id="investmentCapacity"
                name="investmentCapacity"
                value={formData.investmentCapacity}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674] bg-white"
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
              <label
                htmlFor="propertyStatus"
                className="block text-xs font-bold text-gray-700"
              >
                Commercial Property Status
              </label>
              <select
                id="propertyStatus"
                name="propertyStatus"
                value={formData.propertyStatus}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674] bg-white"
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

            <div className="space-y-1">
              <label
                htmlFor="propertySizeSqFt"
                className="block text-xs font-bold text-gray-700"
              >
                Available Space (Approx. Sq. Ft.)
              </label>
              <input
                type="text"
                id="propertySizeSqFt"
                name="propertySizeSqFt"
                placeholder="e.g. 900 sq. ft. Ground Floor"
                value={formData.propertySizeSqFt}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674]"
              />
            </div>
          </div>

          {/* Business Experience */}
          <div className="space-y-1">
            <label
              htmlFor="experienceSummary"
              className="block text-xs font-bold text-gray-700"
            >
              Brief Business Experience &amp; Site Notes
            </label>
            <textarea
              id="experienceSummary"
              name="experienceSummary"
              rows={3}
              placeholder="Tell us about your current business background, proposed road/avenue frontage, or timeline..."
              value={formData.experienceSummary}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674] resize-y"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="sm:col-span-8 inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold rounded-xl text-white bg-gradient-to-r from-[#0b3674] to-[#072147] hover:from-[#072147] hover:to-[#0b3674] shadow-lg transition-all duration-200 disabled:opacity-70"
            >
              {isSubmitting ? (
                <span>Processing Application...</span>
              ) : (
                <>
                  <span>Submit Franchise Application</span>
                  <Send className="w-4 h-4 text-amber-300" />
                </>
              )}
            </button>

            <a
              href={buildFranchiseWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:col-span-4 inline-flex items-center justify-center gap-2 px-4 py-4 text-xs font-bold rounded-xl text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Apply via WhatsApp</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
