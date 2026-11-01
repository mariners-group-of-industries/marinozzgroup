import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Terms of Service | Marinozz Group Corporate Governance",
  description: "Terms and conditions governing the use of Marinozz Group digital assets and services.",
};

export default function TermsPage() {
  return (
    <div className="space-y-12 pb-24">
      <PageHeader
        badge="Governance & Terms"
        title="Terms of Service"
        subtitle="The terms, standards, and conditions governing the use of Marinozz Group digital channels and brand services."
        breadcrumb={[{ label: "Terms of Service" }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-gray-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0b3674]">1. Acceptance of Terms</h2>
          <p>
            By accessing or browsing this website (marinozzgroup.com) and associated digital brand
            portals, you agree to be bound by these Terms of Service, applicable laws, and regulations.
            If you do not agree, please discontinue using this website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0b3674]">2. Intellectual Property & Brand Trademarks</h2>
          <p>
            The brand names, logos, emblems, photographs, culinary menus, text, graphics, and software
            displayed on this site are the exclusive intellectual property of Marinozz Group and
            Mariners Group. Any unauthorized reproduction, scraping, modification, or commercial
            distribution without express written consent is strictly prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0b3674]">3. Reservations & Dining Policy</h2>
          <p>
            Table bookings submitted through this platform are subject to availability and explicit
            confirmation by Marinozz Multicuisine Restaurant. In order to accommodate all patrons,
            reserved tables are held for a maximum of 15 minutes past the booking schedule before
            reallocation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0b3674]">4. Franchise Inquiries & Disclaimer</h2>
          <p>
            Submitting a franchise expression of interest does not constitute a legally binding
            partnership or franchise award. Official franchise partnerships are executed exclusively
            via formal legal contracts reviewed and signed by the Board of Marinozz PLC.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#0b3674]">5. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the People&apos;s
            Republic of Bangladesh. Any dispute arising in connection with these terms shall fall
            under the exclusive jurisdiction of the competent courts of Dhaka.
          </p>
        </section>
      </div>
    </div>
  );
}
