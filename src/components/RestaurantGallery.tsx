"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface GalleryImage {
  url: string;
  caption: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    caption: "Master Chef Smoking Sizzlers",
  },
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    caption: "Main Dining Hall & Ambient Lighting",
  },
  {
    url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    caption: "VIP Executive Dining Suite",
  },
  {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    caption: "Pan-Asian Wok Delicacies",
  },
  {
    url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80",
    caption: "Royal Dum Biryani Presentation",
  },
  {
    url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
    caption: "Artisanal Mocktail Bar",
  },
];

export default function RestaurantGallery() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (
      dialog &&
      typeof HTMLDialogElement !== "undefined" &&
      !("closedBy" in HTMLDialogElement.prototype)
    ) {
      const handleBackdropClick = (event: MouseEvent) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (isDialogContent) return;
        dialog.close();
      };
      dialog.addEventListener("click", handleBackdropClick);
      return () => dialog.removeEventListener("click", handleBackdropClick);
    }
  }, []);

  const openPhoto = (idx: number) => {
    setActiveIndex(idx);
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  };

  const prevPhoto = () => {
    setActiveIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const nextPhoto = () => {
    setActiveIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const activePhoto = GALLERY_IMAGES[activeIndex];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {GALLERY_IMAGES.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => openPhoto(idx)}
            className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-sm hover:shadow-xl transition-all text-left cursor-pointer"
          >
            <Image
              src={img.url}
              alt={img.caption}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-[#0b3674] opacity-0 group-hover:opacity-100 transition-opacity shadow">
              <ZoomIn className="w-4 h-4" />
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold">
              {img.caption}
            </div>
          </button>
        ))}
      </div>

      {/* Native Lightbox Dialog */}
      <dialog
        ref={dialogRef}
        {...({ closedby: "any" } as any)}
        aria-labelledby="gallery-lightbox-title"
        className="m-auto w-full max-w-4xl rounded-3xl bg-[#072147] text-white p-0 shadow-2xl border border-white/15 overflow-hidden"
      >
        <div className="relative">
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
            <div>
              <h3 id="gallery-lightbox-title" className="text-sm font-bold text-white">
                {activePhoto.caption}
              </h3>
              <span className="text-[11px] text-blue-200">
                Photo {activeIndex + 1} of {GALLERY_IMAGES.length} • Marinozz Multicuisine Restaurant
              </span>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close gallery viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="relative aspect-[16/10] w-full bg-black">
            <Image
              src={activePhoto.url}
              alt={activePhoto.caption}
              fill
              className="object-cover"
            />

            <button
              type="button"
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
