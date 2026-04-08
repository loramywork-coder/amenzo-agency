"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import {
  C, fHead, fBody, Reveal, GoldDivider,
  CasaNav, CasaFooter, CasaLocaleProvider, useCasaLocale, bi,
} from "../_shared";

type Wine = { name: string; producer: string; region: string; glass?: string; bottle: string };

const whites: Wine[] = [
  { name: "Vermentino 'Spargi'", producer: "Capichera", region: "Sardegna, IT", glass: "14", bottle: "82" },
  { name: "Greco di Tufo", producer: "Pietracupa", region: "Campania, IT", glass: "13", bottle: "76" },
  { name: "Trebbiano d'Abruzzo", producer: "Valentini", region: "Abruzzo, IT", bottle: "165" },
  { name: "Riesling 'Klus'", producer: "Donatsch", region: "Graubünden, CH", glass: "15", bottle: "88" },
];

const reds: Wine[] = [
  { name: "Chianti Classico", producer: "Isole e Olena", region: "Toscana, IT", glass: "16", bottle: "92" },
  { name: "Nerello Mascalese", producer: "Cornelissen", region: "Sicilia, IT", glass: "18", bottle: "98" },
  { name: "Barolo 'Rocche'", producer: "Brovia", region: "Piemonte, IT", bottle: "148" },
  { name: "Valpolicella Classico", producer: "Quintarelli", region: "Veneto, IT", bottle: "185" },
];

const rose: Wine[] = [
  { name: "Rosato di Etna", producer: "Benanti", region: "Sicilia, IT", glass: "13", bottle: "74" },
  { name: "Bandol Rosé", producer: "Domaine Tempier", region: "Provence, FR", glass: "15", bottle: "88" },
];

const sparkling: Wine[] = [
  { name: "Franciacorta Brut", producer: "Ca' del Bosco", region: "Lombardia, IT", glass: "17", bottle: "96" },
  { name: "Champagne 'Cuvée de Réserve'", producer: "Egly-Ouriet", region: "Champagne, FR", bottle: "145" },
];

const featured = [
  {
    nameEn: "Nerello Mascalese",
    nameDe: "Nerello Mascalese",
    producer: "Cornelissen, 'Munjebel'",
    noteEn:
      "Frank Cornelissen farms biodynamically on the slopes of Mount Etna. Volcanic soil, old vines, no added sulphur. Expect wild red fruit, smoke, and a saline finish that tastes like the island itself.",
    noteDe:
      "Frank Cornelissen arbeitet biodynamisch an den Hängen des Ätna. Vulkanische Böden, alte Reben, ohne Schwefelzusatz. Wilde rote Frucht, Rauch, und ein salziges Finale, das nach der Insel selbst schmeckt.",
    glass: "18",
    bottle: "98",
    img: "/images/casa/wine-cellar.jpg",
  },
  {
    nameEn: "Riesling 'Klus'",
    nameDe: "Riesling 'Klus'",
    producer: "Donatsch, Malans",
    noteEn:
      "Our Swiss house pour. The Donatsch family has farmed in Malans since 1897. Bone-dry, laser-sharp acidity, green apple and slate. A perfect match for the branzino.",
    noteDe:
      "Unser Schweizer Hausgetränk. Die Familie Donatsch bewirtschaftet Malans seit 1897. Knochentrocken, laserscharfe Säure, grüner Apfel und Schiefer. Perfekt zum Branzino.",
    glass: "15",
    bottle: "88",
    img: "/images/casa/wine-glass.jpg",
  },
];

function WineList({ items }: { items: Wine[] }) {
  return (
    <ul className="space-y-6">
      {items.map((w) => (
        <li key={w.name}>
          <div className="flex items-baseline gap-4">
            <div className="flex-1 min-w-0">
              <p className="italic" style={{ fontFamily: fHead, fontSize: 20, color: C.dark, fontStyle: "italic" }}>
                {w.name}
              </p>
              <p className="text-[12px] mt-0.5" style={{ color: C.muted }}>
                {w.producer} · {w.region}
              </p>
            </div>
            <div className="text-right whitespace-nowrap" style={{ color: C.terra, fontWeight: 600 }}>
              {w.glass && <span className="text-sm mr-4 font-normal" style={{ color: C.muted }}>CHF {w.glass} <span className="text-[10px] opacity-60">/glass</span></span>}
              <span className="text-sm">CHF {w.bottle}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function CasaWinesInner() {
  const { locale } = useCasaLocale();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <CasaNav />

      {/* HERO */}
      <section className="relative w-full h-[55vh] min-h-[400px] overflow-hidden">
        <Image src="/images/casa/wine-sommelier.jpg" alt="Casa Luma wine list" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,22,18,0.4) 0%, rgba(26,22,18,0.65) 100%)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[11px] md:text-[12px] tracking-[0.4em] uppercase mb-6"
            style={{ color: C.gold }}
          >
            {bi("Small Producers · Mostly Italian", "Kleine Produzenten · Meist italienisch", locale)}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white"
            style={{ fontFamily: fHead, fontSize: "clamp(54px, 9vw, 110px)", lineHeight: 1, letterSpacing: "-0.01em" }}
          >
            {bi("Wine List", "Weinkarte", locale)}
          </motion.h1>
          <GoldDivider className="mt-8" />
        </div>
      </section>

      {/* Featured */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((f, i) => (
            <Reveal key={f.nameEn} delay={i * 0.1}>
              <div className="overflow-hidden h-full flex flex-col" style={{ background: "#F7EFE2", borderRadius: 2 }}>
                <div className="relative aspect-[5/3]">
                  <Image src={f.img} alt={f.nameEn} fill className="object-cover" />
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: C.gold }}>
                    {bi("Sommelier's Pick", "Empfehlung des Sommeliers", locale)}
                  </p>
                  <h3 className="italic mb-1" style={{ fontFamily: fHead, fontSize: 28, color: C.dark, fontStyle: "italic" }}>
                    {bi(f.nameEn, f.nameDe, locale)}
                  </h3>
                  <p className="text-[12px] mb-5" style={{ color: C.muted }}>
                    {f.producer}
                  </p>
                  <p className="text-[14px] leading-relaxed flex-1" style={{ color: C.muted }}>
                    {bi(f.noteEn, f.noteDe, locale)}
                  </p>
                  <div className="mt-6 pt-5 flex items-center justify-between" style={{ borderTop: `1px solid ${C.border}` }}>
                    <span className="text-sm" style={{ color: C.muted }}>
                      {bi("Glass", "Glas", locale)} · <span style={{ color: C.dark, fontWeight: 600 }}>CHF {f.glass}</span>
                    </span>
                    <span className="text-sm" style={{ color: C.muted }}>
                      {bi("Bottle", "Flasche", locale)} · <span style={{ color: C.dark, fontWeight: 600 }}>CHF {f.bottle}</span>
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Full list */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-3xl mx-auto space-y-16">
          {[
            { titleEn: "Sparkling", titleDe: "Schaumweine", items: sparkling },
            { titleEn: "White", titleDe: "Weisswein", items: whites },
            { titleEn: "Rosé", titleDe: "Rosé", items: rose },
            { titleEn: "Red", titleDe: "Rotwein", items: reds },
          ].map((group) => (
            <Reveal key={group.titleEn}>
              <div>
                <div className="flex items-baseline gap-5 mb-8">
                  <h2 className="italic" style={{ fontFamily: fHead, fontSize: "clamp(28px, 3.5vw, 42px)", fontStyle: "italic", color: C.dark }}>
                    {bi(group.titleEn, group.titleDe, locale)}
                  </h2>
                  <span className="flex-1 h-px" style={{ background: C.gold }} />
                </div>
                <WineList items={group.items} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CasaFooter />
    </div>
  );
}

export default function CasaWinesPage() {
  return (
    <CasaLocaleProvider>
      <CasaWinesInner />
    </CasaLocaleProvider>
  );
}
