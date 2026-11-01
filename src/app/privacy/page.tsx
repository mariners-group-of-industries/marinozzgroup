import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Privacy Policy | Marinozz Group Corporate Governance",
  description: "Official Privacy Policy and data protection commitments of Marinozz Group.",
};

export default function PrivacyPage() {
  return (
    <div className="space-y-12 pb-24">
      <PageHeader
        badge="Legal & Transparency"
        title="Privacy Policy"
        subtitle="How Marinozz Group and its operating brands collect, process, and protect your personal and corporate information."
        breadcrumb={[{ label: "Privacy Policy" }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-gray-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0b3674]">1. Commitment to Privacy</h2>
          <p>
            Marinozz Group, along with its associated parent organization Mariners Group and operating
            subsidiaries (including Marinozz Multicuisine Restaurant, Pantoa Sweets & Bakery,
            Marinozz Confectionery PLC, and Marinozz PLC), is committed to safeguarding the privacy of
            our dining guests, franchise applicants, website visitors, and corporate clients.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0b3674]">2. Information We Collect</h2>
          <p>We collect information voluntarily submitted to us through our digital touchpoints:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-600">
            <li>Contact details: Name, email address, telephone/WhatsApp number, and postal city.</li>
            <li>Dining reservations: Guest headcount, dietary preferences, and event dates.</li>
            <li>
              Franchise applications: Real estate commercial status, square footage, and investment
              readiness.
            </li>
            <li>Technical telemetry: Standard web server logs for website performance and security.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0b3674]">3. Use of Information</h2>
          <p>Your data is used strictly for legitimate business purposes:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-600">
            <li>Facilitating table bookings and customer concierge communications.</li>
            <li>Evaluating franchise eligibility and sending official partnership prospectus materials.</li>
            <li>Fulfilling corporate bulk confectionery gifting and wholesale orders.</li>
            <li>Ensuring website integrity, spam defense, and statutory legal compliance.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0b3674]">4. Data Protection & Non-Disclosure</h2>
          <p>
            Marinozz Group does not sell, rent, or lease personal information to third-party data brokers
            or advertisers. Data is stored on secure, encrypted infrastructure with role-based access
            controls restricted strictly to authorized corporate personnel.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0b3674]">5. Contact Our Privacy Officer</h2>
          <p>
            If you have questions regarding our privacy practices or wish to update or delete your
            submitted information, please contact:
          </p>
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-700">
            <p><strong>Email:</strong> privacy@marinozzgroup.com</p>
            <p><strong>Corporate Office:</strong> Mariners Tower, Suite 901-904, Dhaka, Bangladesh</p>
          </div>
        </section>
      </div>
    </div>
  );
}
