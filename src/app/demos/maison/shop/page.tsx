"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Heart } from "lucide-react";
import { MaisonNav, MaisonFooter, MaisonLangProvider, useMaisonLang, tri, Reveal, C, fHead, fBody, fMono } from "../_shared";
import { products } from "../_data";
import { useMaisonStore } from "../_store";

function Inner() {
  const { lang } = useMaisonLang();
  const wishlist = useMaisonStore((s) => s.wishlist);
  const toggleWishlist = useMaisonStore((s) => s.toggleWishlist);
  const [cat, setCat] = useState<"all" | "women" | "men" | "accessories">("all");
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc">("featured");

  let filtered = cat === "all" ? products : products.filter((p) => p.category === cat);
  if (sort === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);

  const filters = [
    { id: "all" as const, en: "All", fr: "Tout", de: "Alle" },
    { id: "women" as const, en: "Women", fr: "Femme", de: "Damen" },
    { id: "men" as const, en: "Men", fr: "Homme", de: "Herren" },
    { id: "accessories" as const, en: "Accessories", fr: "Accessoires", de: "Accessoires" },
  ];

  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <MaisonNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10 pb-8">
        <div className="max-w-[1600px] mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.muted, fontFamily: fMono }}>
            — Shop / {String(filtered.length).padStart(2, "0")}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} style={{ fontFamily: fHead, fontSize: "clamp(52px, 9vw, 140px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.02em", color: C.dark }}>
            {tri("The Collection", "La collection", "Die Kollektion", lang)}
          </motion.h1>
        </div>
      </section>

      {/* Filters bar */}
      <section className="px-6 md:px-10 sticky top-0 z-30" style={{ background: C.bg }}>
        <div className="max-w-[1600px] mx-auto flex items-center justify-between flex-wrap gap-4 py-5" style={{ borderBottom: `1px solid ${C.border}`, borderTop: `1px solid ${C.border}` }}>
          <div className="flex items-center gap-6 text-[11px] tracking-wider uppercase" style={{ fontFamily: fMono }}>
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setCat(f.id)}
                className="transition-opacity"
                style={{ color: cat === f.id ? C.dark : C.muted, fontWeight: cat === f.id ? 700 : 400 }}
              >
                {tri(f.en, f.fr, f.de, lang)}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 text-[11px] tracking-wider uppercase" style={{ fontFamily: fMono, color: C.muted }}>
            <span>{tri("Sort", "Trier", "Sortieren", lang)}:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="bg-transparent outline-none"
              style={{ color: C.dark }}
            >
              <option value="featured">{tri("Featured", "En vedette", "Empfohlen", lang)}</option>
              <option value="price-asc">{tri("Price: Low to High", "Prix : croissant", "Preis: aufsteigend", lang)}</option>
              <option value="price-desc">{tri("Price: High to Low", "Prix : décroissant", "Preis: absteigend", lang)}</option>
            </select>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-10 py-12 pb-32">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {filtered.map((p, i) => {
            const isWished = wishlist.includes(p.slug);
            return (
              <Reveal key={p.slug} delay={(i % 6) * 0.05}>
                <div className="group">
                  <Link href={`/demos/maison/shop/${p.slug}`} className="block no-underline">
                    <div className="relative aspect-[3/4] overflow-hidden mb-4" style={{ background: C.border }}>
                      <Image src={`/images/maison/${p.images[0]}`} alt={p.name} fill className="object-cover transition-opacity duration-500 group-hover:opacity-0" />
                      <Image src={`/images/maison/${p.images[1]}`} alt="" fill className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                      {p.tag && (
                        <span
                          className="absolute top-3 left-3 px-2 py-1 text-[9px] tracking-wider uppercase"
                          style={{ background: C.gold, color: C.dark, fontFamily: fMono }}
                        >
                          {p.tag === "new" ? tri("New", "Nouveau", "Neu", lang) : tri("Low Stock", "Stock bas", "Wenig Vorrat", lang)}
                        </span>
                      )}
                    </div>
                  </Link>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <Link href={`/demos/maison/shop/${p.slug}`} className="no-underline" style={{ color: C.dark }}>
                        <h2 style={{ fontFamily: fHead, fontSize: 18, fontWeight: 400, color: C.dark }}>{p.name}</h2>
                      </Link>
                      <p className="text-[11px] tracking-wider uppercase mt-1" style={{ color: C.muted, fontFamily: fMono }}>
                        € {p.price}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleWishlist(p.slug)}
                      aria-label="Wishlist"
                      className="p-1 transition-colors"
                      style={{ color: isWished ? C.gold : C.muted }}
                    >
                      <Heart size={16} fill={isWished ? C.gold : "none"} />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <MaisonFooter />
    </div>
  );
}

export default function MaisonShopPage() {
  return <MaisonLangProvider><Inner /></MaisonLangProvider>;
}
