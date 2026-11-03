import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  CheckCircle2,
  Car,
  Users,
  Wifi,
  Sparkles,
  Award,
  UtensilsCrossed,
  Calendar,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import MenuSection from "@/components/MenuSection";
import InquiryForm from "@/components/InquiryForm";
import RestaurantGallery from "@/components/RestaurantGallery";
import { LOCATIONS } from "@/data/locations";

export const metadata = {
  title: "Marinozz Multicuisine Restaurant | Fine Dining & Banquets",
  description:
    "Experience world-class Continental, Pan-Asian, and Mughlai culinary masterworks at Marinozz Multicuisine Restaurant. Discover our menu, private dining, and reserve a table.",
};

export default function MarinozzRestaurantPage() {
  const restaurantLocation = LOCATIONS[0];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      caption: "Master Chef Smoking Sizzlers",
    },
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      caption: "Main Dining Hall & Ambient Lighting",
    },
    {
      url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      caption: "VIP Executive Dining Suite",
    },
    {
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      caption: "Pan-Asian Wok Delicacies",
    },
    {
      url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
      caption: "Royal Dum Biryani Presentation",
    },
    {
      url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      caption: "Artisanal Mocktail Bar",
    },
  ];

  return (
    <div className="space-y-20 pb-24">
      <PageHeader
        badge="Multicuisine Gastronomy"
        title="Marinozz Multicuisine Restaurant"
        subtitle="A Symphony of Global Flavours, Served with Maritime Warmth. Fine dining, private banquets, and masterfully crafted international cuisines."
        breadcrumb={[
          { label: "Our Brands", href: "/brands" },
          { label: "Marinozz Restaurant" },
        ]}
      />

      {/* Brand Hero & Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="relative h-16 w-60">
              <Image
                src="/logos/marinozz-restaurant.png"
                alt="Marinozz Multicuisine Restaurant Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3674] tracking-tight">
              An Elevated Dining Destination Where Every Dish Tells a Story
            </h2>

            <p className="text-base text-gray-700 leading-relaxed">
              At Marinozz Multicuisine Restaurant, culinary excellence is treated with the rigor and
              refinement of maritime discipline. Conceived under the corporate umbrella of Marinozz
              Group, our restaurant offers an inclusive culinary sanctuary where authentic Continental
              steaks, sizzling delicacies, fragrant Pan-Asian wok classics, and royal Mughlai dum
              biryanis coexist in absolute harmony.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              We source directly from certified farms, use 100% Halal meats, maintain zero trans-fat
              cooking protocols, and conduct daily microbiological oil tests. Whether you are hosting
              a milestone family reunion, an executive corporate luncheon, or an intimate dinner, our
              captains and stewards ensure an unforgettable experience.
            </p>

            {/* Quick Action CTAs */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#reservation"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl text-white bg-[#c71b27] hover:bg-[#9e141d] shadow transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </a>

              <a
                href={`https://wa.me/${restaurantLocation.whatsapp.replace(/\+/g, "")}?text=Hello,%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation%20at%20Marinozz%20Restaurant.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Front Desk</span>
              </a>

              <a
                href={`tel:${restaurantLocation.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-xl text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>{restaurantLocation.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border border-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                alt="Marinozz Multicuisine Sizzler Dish"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Signature Specialty
                </span>
                <h4 className="text-lg font-bold">Marinozz Volcanic Mixed Sizzler</h4>
                <p className="text-xs text-gray-200 mt-1">
                  Smoked oakwood charcoal aroma, succulent tenderloin & tiger prawns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Dining Experience & Facilities */}
      <section className="bg-[#f7f6f2] py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0b3674] bg-blue-50 px-3 py-1 rounded-full">
              Hospitality Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b3674] tracking-tight mt-3">
              The Marinozz Dining Experience
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Thoughtfully architected to deliver tranquility, privacy, and exceptional service for every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "180+ Seating & Private Booths",
                desc: "Spacious, ergonomically designed seating with acoustic separation for comfortable family and executive dining.",
                icon: Users,
              },
              {
                title: "Executive Banquet Hall",
                desc: "Dedicated private event space accommodating up to 150 guests for corporate seminars, birthdays, and celebrations.",
                icon: Award,
              },
              {
                title: "Transparent Live Kitchen",
                desc: "Guests can observe food preparation, tandoor bakes, and wok tossing through hygienic observation glass.",
                icon: UtensilsCrossed,
              },
              {
                title: "Secured Valet Parking",
                desc: "Dedicated basement parking bay with professional valet attendants for a stress-free arrival.",
                icon: Car,
              },
              {
                title: "Dedicated Prayer Space",
                desc: "Clean, peaceful prayer room with separate ablution facilities for ladies and gentlemen.",
                icon: Sparkles,
              },
              {
                title: "High-Speed Wi-Fi & Lounge",
                desc: "Complimentary enterprise-grade connectivity for business dining and digital work lunches.",
                icon: Wifi,
              },
            ].map((facility, idx) => {
              const Icon = facility.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-3"
                >
                  <div className="p-3 rounded-xl bg-red-50 text-[#c71b27] w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{facility.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{facility.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Culinary Repertoire & Menu */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MenuSection />
      </section>

      {/* Restaurant Photo Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0b3674] bg-blue-50 px-3 py-1 rounded-full">
              Ambiance & Culinary Arts
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b3674] tracking-tight mt-2">
              Restaurant Gallery
            </h2>
          </div>
          <p className="text-xs text-gray-500 max-w-sm">
            A glimpse into the warm ambiance, master craftsmanship, and welcoming spaces of our flagship venue.
          </p>
        </div>

        <RestaurantGallery />
      </section>

      {/* Branch Location & Google Maps + Reservation Form */}
      <section id="reservation" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Location & Maps Info */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#c71b27] bg-red-50 px-3 py-1 rounded-full border border-red-200">
                Flagship Branch
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b3674] tracking-tight mt-3">
                Visit Marinozz Restaurant
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Centrally located with dedicated basement parking and easy main-road accessibility.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c71b27] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{restaurantLocation.name}</h4>
                  <p className="text-xs text-gray-600 mt-0.5">{restaurantLocation.address}</p>
                  <p className="text-xs text-gray-500">{restaurantLocation.city}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-gray-100 text-xs text-gray-700">
                <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>{restaurantLocation.hours}</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-700">
                <Phone className="w-4 h-4 text-[#0b3674] flex-shrink-0" />
                <span>Reservations: {restaurantLocation.phone}</span>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={restaurantLocation.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-[#0b3674] text-white hover:bg-[#072147] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>

                <a
                  href={`https://wa.me/${restaurantLocation.whatsapp.replace(/\+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps Frame */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-gray-200 shadow-sm">
              <iframe
                title="Marinozz Restaurant Location Map"
                src={restaurantLocation.mapEmbedUrl}
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

          {/* Right: Table Reservation / Event Form */}
          <div className="lg:col-span-6">
            <InquiryForm
              defaultCategory="Restaurant Dining & Reservation"
              sourceBrand="Marinozz Multicuisine Restaurant"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
