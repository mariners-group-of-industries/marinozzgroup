"use client";

import { useState, useEffect, useRef } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Calendar,
  Users,
  Sparkles,
} from "lucide-react";

interface InquiryFormProps {
  defaultCategory?: string;
  sourceBrand?: string;
}

export default function InquiryForm({
  defaultCategory = "General Corporate Inquiry",
  sourceBrand = "Marinozz Group",
}: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    organization: "",
    category: defaultCategory,
    reservationDate: "",
    timeSlot: "Dinner (8:00 PM – 10:30 PM)",
    guestCount: "4 Guests (Family Table)",
    message: "",
    honeypot: "",
  });

  const [attachedSummary, setAttachedSummary] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [lastSubmitted, setLastSubmitted] = useState<typeof formData | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Sync aria-invalid with CSS :user-invalid state (Modern Web Guidance)
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const syncAria = (el: EventTarget | null) => {
      if (
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        el instanceof HTMLSelectElement
      ) {
        try {
          el.setAttribute("aria-invalid", el.matches(":user-invalid") ? "true" : "false");
        } catch {
          // fallback if :user-invalid is unsupported
          el.setAttribute("aria-invalid", !el.checkValidity() ? "true" : "false");
        }
      }
    };

    const onBlur = (e: Event) => syncAria(e.target);
    const onInput = (e: Event) => {
      if (e.target instanceof HTMLElement && e.target.hasAttribute("aria-invalid")) {
        syncAria(e.target);
      }
    };

    form.addEventListener("blur", onBlur, true);
    form.addEventListener("input", onInput);
    return () => {
      form.removeEventListener("blur", onBlur, true);
      form.removeEventListener("input", onInput);
    };
  }, [status]);

  // Listen for dish attachments from MenuSection or category changes from ContactPage
  useEffect(() => {
    const handleAttachDishes = (e: Event) => {
      const custom = e as CustomEvent<{ summary: string }>;
      if (custom.detail?.summary) {
        setAttachedSummary(custom.detail.summary);
        setFormData((prev) => ({
          ...prev,
          category: "Restaurant Dining & Reservation",
          message: prev.message
            ? `${prev.message}\n\n${custom.detail.summary}`
            : custom.detail.summary,
        }));
      }
    };

    const handleSelectCategory = (e: Event) => {
      const custom = e as CustomEvent<{ category: string }>;
      if (custom.detail?.category) {
        setFormData((prev) => ({
          ...prev,
          category: custom.detail.category,
        }));
      }
    };

    window.addEventListener("marinozz:attach-dishes", handleAttachDishes);
    window.addEventListener("marinozz:select-category", handleSelectCategory);
    return () => {
      window.removeEventListener("marinozz:attach-dishes", handleAttachDishes);
      window.removeEventListener("marinozz:select-category", handleSelectCategory);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isReservation = formData.category === "Restaurant Dining & Reservation";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.honeypot) return;

    setStatus("submitting");

    try {
      const existingInquiries = JSON.parse(
        localStorage.getItem("marinozz_inquiries") || "[]"
      );
      const compiledMessage = isReservation
        ? `[Table Reservation: ${formData.reservationDate || "Upcoming"} | ${formData.timeSlot} | ${formData.guestCount}] ${formData.message}`
        : formData.message;

      const newInquiry = {
        id: "inq_" + Date.now(),
        date: new Date().toISOString(),
        brand: sourceBrand,
        name: formData.name,
        phone: formData.phone,
        organization: formData.organization,
        category: formData.category,
        message: compiledMessage,
      };
      localStorage.setItem(
        "marinozz_inquiries",
        JSON.stringify([newInquiry, ...existingInquiries])
      );

      setLastSubmitted(formData);
      setTimeout(() => {
        setStatus("success");
        setFeedback(
          "Thank you! Your request has been logged with our corporate desk. Our representative will call you on your provided number shortly."
        );
        setAttachedSummary("");
        setFormData({
          name: "",
          phone: "",
          organization: "",
          category: defaultCategory,
          reservationDate: "",
          timeSlot: "Dinner (8:00 PM – 10:30 PM)",
          guestCount: "4 Guests (Family Table)",
          message: "",
          honeypot: "",
        });
      }, 500);
    } catch {
      setStatus("error");
      setFeedback("An error occurred while submitting. Please call +880 1335-149006 directly.");
    }
  };

  const buildWhatsAppLink = () => {
    const data = lastSubmitted || formData;
    const resLine =
      data.category === "Restaurant Dining & Reservation"
        ? `\nDate: ${data.reservationDate || "Flexible"}\nTime: ${data.timeSlot}\nGuests: ${data.guestCount}`
        : "";
    const text = `Hello ${sourceBrand},\nName: ${data.name}\nPhone: ${data.phone}\nTopic: ${data.category}${resLine}\nDetails: ${data.message}`;
    return `https://wa.me/8801335149006?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100">
      <div className="mb-6">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0b3674] tracking-tight">
            {isReservation ? "Reserve a Table or Banquet" : "Send a Direct Inquiry"}
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-50 text-[#c71b27]">
            Priority Desk
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Our front desk is ready to assist with table bookings, corporate bulk hampers, and partnerships.
        </p>
      </div>

      {attachedSummary && status !== "success" && (
        <div className="mb-5 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-2.5 text-xs text-emerald-900 animate-in fade-in">
          <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Menu Selection Attached!</p>
            <p className="text-[11px] text-emerald-800 mt-0.5">{attachedSummary}</p>
          </div>
        </div>
      )}

      {status === "success" ? (
        <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h4 className="text-lg font-extrabold text-emerald-950">Request Registered!</h4>
          <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">{feedback}</p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 shadow transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Instant Copy on WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold rounded-xl bg-white border border-emerald-200 text-emerald-900 hover:bg-emerald-100 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot hidden input */}
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

          {/* Inquiry Category */}
          <div className="space-y-1">
            <label htmlFor="category" className="block text-xs font-bold text-gray-700">
              Select Purpose / Inquiry Type
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm font-medium rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674] transition-colors bg-gray-50/60 focus:bg-white"
            >
              <option value="Restaurant Dining & Reservation">
                Restaurant Dining &amp; Table Reservation
              </option>
              <option value="Pantoa Sweets & Bulk Gifting">
                Pantoa Sweets &amp; Corporate Gift Hampers
              </option>
              <option value="Franchise Opportunity">Franchise &amp; Outlet Partnership</option>
              <option value="Commercial Supply / FMCG">
                Marinozz Confectionery Wholesale / FMCG
              </option>
              <option value="General Corporate Inquiry">General Corporate Inquiry</option>
              <option value="Vendor / Procurement">Vendor &amp; Supply Proposal</option>
            </select>
          </div>

          {/* Full Name & Phone Number Grid (No Email Field) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="name" className="block text-xs font-bold text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <span id="name-hint" className="block text-[11px] text-gray-400">
                Your name or executive contact person
              </span>
              <input
                type="text"
                id="name"
                name="name"
                required
                minLength={2}
                maxLength={100}
                autoComplete="name"
                aria-describedby="name-hint"
                placeholder="e.g. Captain Tanvir Ahmed"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674] transition-colors"
              />
              <div className="field-error-msg">Please enter your full name (at least 2 characters).</div>
            </div>

            <div className="space-y-1">
              <label htmlFor="phone" className="block text-xs font-bold text-gray-700">
                Mobile / WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <span id="phone-hint" className="block text-[11px] text-gray-400">
                Format: +880 1XXX-XXXXXX
              </span>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                minLength={7}
                autoComplete="tel"
                aria-describedby="phone-hint"
                placeholder="+880 1335-149006"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674] transition-colors"
              />
              <div className="field-error-msg">Please enter a valid contact phone number.</div>
            </div>
          </div>

          {/* Conditional Interactive Fields for Restaurant Table Reservation */}
          {isReservation ? (
            <div className="p-4 rounded-2xl bg-[#f7f6f2] border border-gray-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <label
                  htmlFor="reservationDate"
                  className="block text-[11px] font-bold text-[#0b3674] flex items-center gap-1"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#c71b27]" />
                  <span>Preferred Date</span>
                </label>
                <input
                  type="date"
                  id="reservationDate"
                  name="reservationDate"
                  value={formData.reservationDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="timeSlot" className="block text-[11px] font-bold text-[#0b3674]">
                  Dining Session
                </label>
                <select
                  id="timeSlot"
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30"
                >
                  <option value="Lunch (12:30 PM – 3:30 PM)">Lunch (12:30 PM – 3:30 PM)</option>
                  <option value="Evening High-Tea (4:00 PM – 7:00 PM)">
                    Evening (4:00 PM – 7:00 PM)
                  </option>
                  <option value="Dinner (8:00 PM – 10:30 PM)">Dinner (8:00 PM – 10:30 PM)</option>
                  <option value="Full Banquet Event">Full Banquet Event</option>
                </select>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="guestCount"
                  className="block text-[11px] font-bold text-[#0b3674] flex items-center gap-1"
                >
                  <Users className="w-3.5 h-3.5 text-[#c71b27]" />
                  <span>Guest &amp; Seating</span>
                </label>
                <select
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30"
                >
                  <option value="2 Guests (Intimate Table)">2 Guests (Intimate Table)</option>
                  <option value="4 Guests (Family Table)">4 Guests (Family Table)</option>
                  <option value="6–10 Guests (Private Family Booth)">
                    6–10 Guests (Private Booth)
                  </option>
                  <option value="12–25 Guests (VIP Executive Suite)">
                    12–25 Guests (VIP Suite)
                  </option>
                  <option value="50–150 Guests (Executive Banquet Hall)">
                    50–150 Guests (Banquet Hall)
                  </option>
                </select>
              </div>
            </div>
          ) : (
            <div className="space-y-1">
              <label htmlFor="organization" className="block text-xs font-bold text-gray-700">
                Company / Organization / Location (Optional)
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                autoComplete="organization"
                placeholder="e.g. Mariners Group / Mohakhali C/A"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674] transition-colors"
              />
            </div>
          )}

          {/* Message Content */}
          <div className="space-y-1">
            <label htmlFor="message" className="block text-xs font-bold text-gray-700">
              Special Instructions or Requirements <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={3}
              placeholder="Share any dietary preferences, dish selections, bulk order quantities, or inquiry details..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0b3674]/30 focus:border-[#0b3674] transition-colors resize-y"
            ></textarea>
            <div className="field-error-msg">Please enter your message or reservation note.</div>
          </div>

          {status === "error" && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2 text-xs text-red-700">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{feedback}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-1">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="sm:col-span-8 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold rounded-xl text-white bg-gradient-to-r from-[#c71b27] to-[#9e141d] hover:from-[#9e141d] hover:to-[#7f0f16] shadow-md transition-all duration-200 disabled:opacity-70"
            >
              {status === "submitting" ? (
                <span>Submitting Request...</span>
              ) : (
                <>
                  <span>{isReservation ? "Confirm Reservation Request" : "Submit Inquiry"}</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:col-span-4 inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-bold rounded-xl text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Desk</span>
            </a>
          </div>

          <p className="text-[11px] text-gray-400 text-center pt-1">
            Direct Helpline: <strong>+880 1335-149006</strong> • MG SAM Center, 12 Mohakhali C/A, Dhaka-1212
          </p>
        </form>
      )}
    </div>
  );
}
