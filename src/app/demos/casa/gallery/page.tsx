"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { X } from "lucide-react";
import {
  C, fHead, fBody, Reveal, GoldDivider,
  CasaNav, CasaFooter, CasaLocaleProvider, useCasaLocale, bi,
} from "../_shared";

type Item = { src: string; tag: "food" | "interior" | "drinks"; span?: "wide" | "tall" };

const items: Item[] = [
  { src: "dish-burrata.jpg", tag: "food" },
  { src: "gallery-table.jpg", tag: "interior", span: "wide" },
  { src: "dish-pasta.jpg", tag: "food" },
  { src: "wine-glass.jpg", tag: "drinks", span: "tall" },
  { src: "dish-fish.jpg", tag: "food" },
  { src: "gallery-bread.jpg", tag: "food" },
  { src: "about-bar.jpg", tag: "interior", span: "wide" },
  { src: "gallery-overhead.jpg", tag: "interior", span: "wide" },
  { src: "dish-tiramisu.jpg", tag: "food" },
  { src: "gallery-oil.jpg", tag: "food" },
  { src: "gallery-cheers.jpg", tag: "drinks", span: "wide" },
  { src: "gallery-carbonara.jpg", tag: "food" },
  { src: "gallery-seafood.jpg", tag: "food" },
  { src: "gallery-dessert.jpg", tag: "food" },
  { src: "gallery-candle.jpg", tag: "interior", span: "tall" },
  { src: "wine-cellar.jpg", tag: "drinks", span: "wide" },
];

function CasaGalleryInner() {
  const { locale } = useCasaLocale();
  const [filter, setFilter] = useState<"all" | "food" | "interior" | "drinks">("all");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = items.filter((i) => filter === "all" || i.tag === filter);

  const tabs = [
    { id: "all" as const, en: "All", de: "Alle" },
    { id: "food" as const, en: "Food", de: "Speisen" },
    { id: "interior" as const, en: "Interior", de: "Innenraum" },
    { id: "drinks" as const, en: "Drinks", de: "Getränke" },
  ];

  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <CasaNav />

      <section className="pt-40 pb-12 px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.4em] uppercase mb-5"
          style={{ color: C.terra }}
        >
          {bi("Gallery", "Galerie", locale)}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-6"
          style={{ fontFamily: fHead, fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1, color: C.dark }}
        >
          {bi("The rooms", "Die Räume", locale)}{" "}
          <em style={{ color: C.terra, fontStyle: "italic" }}>{bi("& the plates", "& die Teller", locale)}</em>
        </motion.h1>
        <GoldDivider className="mb-10" />
        <div className="flex justify-center flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setFilter(t.id)}
              className="px-5 py-2 text-[11px] tracking-wider uppercase font-semibold transition-all"
              style={{
                background: filter === t.id ? C.dark : "transparent",
                color: filter === t.id ? C.bg : C.dark,
                border: `1px solid ${filter === t.id ? C.dark : C.border}`,
                borderRadius: 2,
                fontFamily: fBody,
              }}
            >
              {bi(t.en, t.de, locale)}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry grid */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[220px] md:auto-rows-[260px]">
          {filtered.map((item, i) => {
            const col = item.span === "wide" ? "md:col-span-2" : "";
            const row = item.span === "tall" ? "row-span-2" : "";
            return (
              <Reveal key={item.src + i} delay={(i % 6) * 0.04}>
                <button
                  onClick={() => setLightbox(item.src)}
                  className={`relative w-full h-full overflow-hidden group ${col} ${row}`}
                  style={{ borderRadius: 2 }}
                >
                  <Image
                    src={`/images/casa/${item.src}`}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{ background: "rgba(26,22,18,0.25)", opacity: 0 }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                  />
                </button>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            style={{ background: "rgba(26,22,18,0.92)", backdropFilter: "blur(8px)" }}
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 p-2 text-white"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={`/images/casa/${lightbox}`} alt="" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CasaFooter />
    </div>
  );
}

export default function CasaGalleryPage() {
  return (
    <CasaLocaleProvider>
      <CasaGalleryInner />
    </CasaLocaleProvider>
  );
}
