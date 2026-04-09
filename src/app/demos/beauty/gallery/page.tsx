"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { DemoBanner } from "@/components/demos/demo-banner";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  C, fHead, fBody, fMono, Reveal, Rule, Eyebrow,
  BeautyNav, BeautyFooter, IMG, galleryImages,
} from "../_shared";

const FILTERS = ["All", "Treatments", "Studio", "Products", "Behind the Scenes"] as const;

export default function GalleryPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryImages : galleryImages.filter((g) => g.category === filter);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((v) => (v === null ? v : (v + 1) % filtered.length));
      if (e.key === "ArrowLeft") setLightbox((v) => (v === null ? v : (v - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, filtered.length]);

  return (
    <div style={{ background: C.bg, color: C.textPrimary, fontFamily: fBody }}>
      <DemoBanner />
      <BeautyNav />

      {/* HERO */}
      <section className="relative w-full h-[55vh] min-h-[460px] overflow-hidden">
        <Image src={IMG.galleryHero} alt="" fill priority className="object-cover" sizes="100vw" quality={90} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(28,25,23,0.4), rgba(28,25,23,0.7))" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[11px] tracking-[0.45em] uppercase mb-6" style={{ color: C.goldLight, fontFamily: fMono }}>
              — Gallery
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45 }}
              style={{ fontFamily: fHead, fontSize: "clamp(44px, 7vw, 100px)", lineHeight: 0.95, fontWeight: 500, color: C.onDark }}>
              The art of <em style={{ fontStyle: "italic", color: C.goldLight }}>beauty</em>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-wrap gap-8 md:gap-12 justify-center pb-6" style={{ borderBottom: `1px solid ${C.border}` }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="relative text-[11px] tracking-[0.15em] uppercase transition-colors pb-2"
                style={{ color: filter === f ? C.gold : C.textSecondary, fontFamily: fBody, fontWeight: 500 }}
              >
                {f}
                {filter === f && (
                  <motion.span
                    layoutId="beauty-filter-underline"
                    className="absolute left-0 right-0 -bottom-[25px] h-[1.5px]"
                    style={{ background: C.gold }}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-12 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  layout
                  key={item.src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setLightbox(i)}
                  className="relative break-inside-avoid rounded-md overflow-hidden cursor-pointer group"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={1000}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.05]"
                    quality={90}
                  />
                  <div className="absolute inset-0 flex items-end p-5 transition-colors duration-500" style={{ background: "rgba(28,25,23,0)" }}>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-[10px] tracking-[0.15em] uppercase" style={{ color: C.goldLight, fontFamily: fMono }}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(28,25,23,0.6), transparent 50%)" }} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 text-center" style={{ background: C.highlight }}>
        <Reveal className="max-w-2xl mx-auto">
          <Eyebrow>Your Turn</Eyebrow>
          <Rule className="my-6" />
          <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, fontWeight: 500, color: C.dark }}>
            Book a treatment and <em style={{ fontStyle: "italic", color: C.gold }}>capture your glow</em>
          </h2>
          <Link
            href="/demos/beauty/contact"
            className="mt-10 inline-flex items-center gap-3 px-10 py-4 text-[11px] tracking-[0.15em] uppercase no-underline rounded-full"
            style={{ background: C.gold, color: C.warmWhite, fontFamily: fBody, fontWeight: 600 }}
          >
            Book Now <ArrowRight size={14} />
          </Link>
        </Reveal>
      </section>

      <BeautyFooter />

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            style={{ background: "rgba(28,25,23,0.96)" }}
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
              className="absolute top-6 right-6 transition-opacity hover:opacity-70"
              style={{ color: C.onDark }}
              aria-label="Close"
            >
              <X size={30} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((v) => v === null ? v : (v - 1 + filtered.length) % filtered.length); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-70"
              style={{ color: C.onDark }}
              aria-label="Previous"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((v) => v === null ? v : (v + 1) % filtered.length); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-70"
              style={{ color: C.onDark }}
              aria-label="Next"
            >
              <ChevronRight size={40} />
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                fill
                sizes="90vw"
                className="object-contain"
                quality={90}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
