"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { MaisonNav, MaisonFooter, MaisonLangProvider, useMaisonLang, tri, Reveal, C, fHead, fBody, fMono } from "./_shared";
import { products, categories } from "./_data";

const sustainStats = [
  { num: "100%", en: "Organic or recycled fibres", fr: "Fibres bio ou recyclées", de: "Bio- oder recycelte Fasern" },
  { num: "0 km", en: "Air freight on any garment", fr: "Aucun fret aérien", de: "Keine Luftfracht" },
  { num: "28 yr", en: "Average expected lifespan", fr: "Durée de vie moyenne", de: "Durchschnittliche Lebensdauer" },
  { num: "EU", en: "Production radius", fr: "Rayon de production", de: "Produktionsradius" },
];

function Inner() {
  const { lang } = useMaisonLang();
  const featured = products.slice(0, 6);
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <MaisonNav />

      {/* Hero */}
      <section className="relative w-full h-screen min-h-[720px] overflow-hidden">
        <Image src="/images/maison/hero.jpg" alt="Maison Noir SS26" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(13,13,13,0.1) 0%, rgba(13,13,13,0.5) 100%)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-10 pb-20">
            <div className="max-w-[1600px] mx-auto flex items-end justify-between flex-wrap gap-6">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="text-[10px] tracking-[0.3em] uppercase mb-5 text-white/80"
                  style={{ fontFamily: fMono }}
                >
                  — {tri("Spring / Summer 2026", "Printemps / Été 2026", "Frühling / Sommer 2026", lang)}
                </motion.p>
                <motion.h1
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={{ clipPath: "inset(0% 0 0 0)" }}
                  transition={{ duration: 1.1, delay: 0.35, ease: [0.77, 0, 0.175, 1] }}
                  className="text-white max-w-5xl"
                  style={{
                    fontFamily: fHead,
                    fontSize: "clamp(52px, 10vw, 170px)",
                    lineHeight: 0.88,
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Quiet,<br />
                  <em style={{ fontStyle: "italic", color: C.gold }}>made to last.</em>
                </motion.h1>
              </div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.8 }}>
                <Link
                  href="/demos/maison/shop"
                  className="inline-flex items-center px-8 py-4 text-[11px] tracking-wider uppercase no-underline transition-colors"
                  style={{ background: "#F8F6F3", color: C.dark, fontFamily: fBody }}
                >
                  {tri("Shop SS26", "Acheter PE26", "SS26 shoppen", lang)} →
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products — horizontal scroll */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 mb-10 flex items-end justify-between flex-wrap gap-4">
          <Reveal>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: C.muted, fontFamily: fMono }}>
                — {tri("Featured", "À la une", "Highlights", lang)}
              </p>
              <h2 style={{ fontFamily: fHead, fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 0.98, fontWeight: 400, letterSpacing: "-0.02em", color: C.dark }}>
                {tri("Six pieces,", "Six pièces,", "Sechs Stücke,", lang)}<br />
                <em style={{ fontStyle: "italic", color: C.gold }}>{tri("one collection.", "une collection.", "eine Kollektion.", lang)}</em>
              </h2>
            </div>
          </Reveal>
          <Link href="/demos/maison/shop" className="text-[11px] tracking-wider uppercase no-underline" style={{ color: C.dark, fontFamily: fMono }}>
            {tri("View all", "Tout voir", "Alle ansehen", lang)} →
          </Link>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-5 px-6 md:px-10 pb-6">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06} className="shrink-0 w-[280px] md:w-[340px]">
                <Link href={`/demos/maison/shop/${p.slug}`} className="group block no-underline">
                  <div className="relative aspect-[3/4] overflow-hidden mb-4" style={{ background: C.border }}>
                    <Image src={`/images/maison/${p.images[0]}`} alt={p.name} fill className="object-cover transition-opacity duration-500 group-hover:opacity-0" />
                    <Image src={`/images/maison/${p.images[1]}`} alt="" fill className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                    {p.tag === "new" && (
                      <span className="absolute top-3 left-3 px-2 py-1 text-[9px] tracking-wider uppercase" style={{ background: C.gold, color: C.dark, fontFamily: fMono }}>New</span>
                    )}
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 style={{ fontFamily: fHead, fontSize: 18, color: C.dark, fontWeight: 400 }}>{p.name}</h3>
                    <span className="text-[13px] whitespace-nowrap" style={{ fontFamily: fMono, color: C.dark }}>€ {p.price}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brand statement */}
      <section className="px-6 md:px-10 py-28 md:py-40" style={{ background: "#EEEAE3" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-8" style={{ color: C.muted, fontFamily: fMono }}>
              — {tri("The House", "La maison", "Das Haus", lang)}
            </p>
            <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1.08, fontWeight: 400, letterSpacing: "-0.01em", color: C.dark }}>
              {tri(
                "Maison Noir is a small house of clothing built on one rule: if it cannot be worn for a decade, it does not belong in the collection.",
                "Maison Noir est une petite maison de vêtements fondée sur une règle : si une pièce ne peut être portée pendant une décennie, elle n'a pas sa place dans la collection.",
                "Maison Noir ist ein kleines Modehaus, gegründet auf einer Regel: Wer ein Stück nicht zehn Jahre tragen kann, gehört nicht in die Kollektion.",
                lang
              )}
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Category tiles */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <Link href={`/demos/maison/shop/${c.slug}`} className="group block no-underline">
                <div className="relative aspect-[3/4] overflow-hidden mb-5">
                  <Image
                    src={`/images/maison/cat-${c.slug}.jpg`}
                    alt={c.label}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-baseline justify-between">
                  <h3 style={{ fontFamily: fHead, fontSize: 32, fontWeight: 400, color: C.dark }}>
                    {tri(c.label, c.slug === "women" ? "Femme" : c.slug === "men" ? "Homme" : "Accessoires", c.slug === "women" ? "Damen" : c.slug === "men" ? "Herren" : "Accessoires", lang)}
                  </h3>
                  <span className="text-[11px] tracking-wider uppercase" style={{ color: C.muted, fontFamily: fMono }}>
                    {tri("Shop", "Boutique", "Shop", lang)} →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lookbook teaser */}
      <section className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
        <Image src="/images/maison/lookbook-1.jpg" alt="Lookbook" fill className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(13,13,13,0.55) 100%)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-10 pb-16">
            <div className="max-w-[1600px] mx-auto">
              <p className="text-[10px] tracking-[0.3em] uppercase mb-4 text-white/75" style={{ fontFamily: fMono }}>
                — Lookbook SS26
              </p>
              <h2 className="text-white max-w-2xl" style={{ fontFamily: fHead, fontSize: "clamp(40px, 6vw, 88px)", lineHeight: 0.95, fontWeight: 400, fontStyle: "italic", color: "#F8F6F3" }}>
                {tri("The collection in motion.", "La collection en mouvement.", "Die Kollektion in Bewegung.", lang)}
              </h2>
              <Link
                href="/demos/maison/lookbook"
                className="mt-8 inline-flex items-center px-7 py-3.5 text-[11px] tracking-wider uppercase no-underline"
                style={{ background: "#F8F6F3", color: C.dark, fontFamily: fBody }}
              >
                {tri("View Lookbook", "Voir le lookbook", "Lookbook ansehen", lang)} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability stats */}
      <section className="px-6 md:px-10 py-24" style={{ background: C.dark, color: "#E4DDD0" }}>
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.gold, fontFamily: fMono }}>
              — {tri("By the numbers", "En chiffres", "In Zahlen", lang)}
            </p>
            <h2 className="mb-16 max-w-2xl" style={{ fontFamily: fHead, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 1, fontWeight: 400, fontStyle: "italic", color: "#E4DDD0" }}>
              {tri("Our commitments.", "Nos engagements.", "Unser Versprechen.", lang)}
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {sustainStats.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.08}>
                <div>
                  <p style={{ fontFamily: fHead, fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1, color: C.gold, fontWeight: 400 }}>
                    {s.num}
                  </p>
                  <p className="mt-3 text-[11px] tracking-wider uppercase opacity-80" style={{ fontFamily: fMono }}>
                    {tri(s.en, s.fr, s.de, lang)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-16">
            <Link href="/demos/maison/sustainability" className="text-[11px] tracking-wider uppercase no-underline" style={{ color: C.gold, fontFamily: fMono }}>
              {tri("Read more →", "En savoir plus →", "Mehr erfahren →", lang)}
            </Link>
          </div>
        </div>
      </section>

      <MaisonFooter />
    </div>
  );
}

export default function MaisonHomePage() {
  return <MaisonLangProvider><Inner /></MaisonLangProvider>;
}
