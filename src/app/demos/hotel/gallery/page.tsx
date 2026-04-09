"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { X } from "lucide-react";
import { C, fHead, fBody, fMono, Reveal, Rule, HotelNav, HotelFooter, HotelLangProvider, useHotelLang, tri } from "../_shared";

type Tag = "all" | "rooms" | "dining" | "spa" | "views";
type Item = { src: string; tag: Exclude<Tag, "all">; span?: "wide" | "tall" };

const items: Item[] = [
  { src: "gal-courtyard.jpg", tag: "views", span: "wide" },
  { src: "gal-bedroom.jpg", tag: "rooms", span: "tall" },
  { src: "room-suite-2.jpg", tag: "rooms" },
  { src: "dining-restaurant.jpg", tag: "dining", span: "wide" },
  { src: "spa-pool.jpg", tag: "spa", span: "wide" },
  { src: "gal-bar.jpg", tag: "dining" },
  { src: "gal-pool.jpg", tag: "spa", span: "tall" },
  { src: "gal-staircase.jpg", tag: "views", span: "tall" },
  { src: "gal-terrace.jpg", tag: "views", span: "wide" },
  { src: "dining-dish.jpg", tag: "dining" },
  { src: "dining-wine.jpg", tag: "dining" },
  { src: "spa-treatment.jpg", tag: "spa" },
  { src: "spa-hero.jpg", tag: "spa" },
  { src: "gal-garden.jpg", tag: "views", span: "wide" },
  { src: "gal-library.jpg", tag: "views" },
  { src: "room-deluxe-3.jpg", tag: "rooms" },
  { src: "room-penthouse-1.jpg", tag: "rooms", span: "wide" },
];

function Inner() {
  const { lang } = useHotelLang();
  const [tag, setTag] = useState<Tag>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = items.filter((i) => tag === "all" || i.tag === tag);

  const tabs = [
    { id: "all" as const, en: "All", de: "Alle", fr: "Tous" },
    { id: "rooms" as const, en: "Rooms", de: "Zimmer", fr: "Chambres" },
    { id: "dining" as const, en: "Dining", de: "Restaurant", fr: "Restaurant" },
    { id: "spa" as const, en: "Spa", de: "Spa", fr: "Spa" },
    { id: "views" as const, en: "Views", de: "Aussichten", fr: "Vues" },
  ];

  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HotelNav />

      <section className="pt-40 md:pt-48 pb-12 px-6 md:px-10 text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color: C.gold, fontFamily: fMono }}>
          — {tri("The rooms & the grounds", "Die Räume & das Haus", "Les pièces & les lieux", lang)}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="mb-6" style={{ fontFamily: fHead, fontSize: "clamp(52px, 9vw, 140px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.015em", color: C.dark , paddingBottom: "0.15em" }}>
          {tri("Gallery", "Galerie", "Galerie", lang)}
        </motion.h1>
        <Rule className="mb-10" />
        <div className="flex justify-center flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTag(t.id)}
              className="px-5 py-2 text-[11px] tracking-wider uppercase transition-all"
              style={{
                background: tag === t.id ? C.dark : "transparent",
                color: tag === t.id ? C.bg : C.dark,
                border: `1px solid ${tag === t.id ? C.dark : C.border}`,
                fontFamily: fMono,
              }}
            >
              {tri(t.en, t.de, t.fr, lang)}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[1500px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[240px] md:auto-rows-[280px]">
          {filtered.map((item, i) => {
            const col = item.span === "wide" ? "md:col-span-2" : "";
            const row = item.span === "tall" ? "row-span-2" : "";
            return (
              <Reveal key={item.src + i} delay={(i % 6) * 0.04}>
                <button
                  onClick={() => setLightbox(item.src)}
                  className={`relative w-full h-full overflow-hidden group ${col} ${row}`}
                >
                  <Image
                    src={`/images/hotel/${item.src}`}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                </button>
              </Reveal>
            );
          })}
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            style={{ background: "rgba(14,26,43,0.92)", backdropFilter: "blur(10px)" }}
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 p-2"
              style={{ color: "#F7F1E8" }}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={`/images/hotel/${lightbox}`} alt="" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <HotelFooter />
    </div>
  );
}

export default function HotelGalleryPage() {
  return <HotelLangProvider><Inner /></HotelLangProvider>;
}
