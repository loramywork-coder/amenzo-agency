"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { C, fHead, fBody, fMono, Reveal, Rule, RestaurantNav, RestaurantFooter, RestaurantLangProvider, useRestaurantLang, tri } from "../_shared";

type Wine = { name: string; producer: string; region: string; note: { en: string; it: string; fr: string }; glass?: string; bottle: string };

const whites: Wine[] = [
  { name: "Vermentino 'Bidilica'", producer: "Emidio Pepe", region: "Abruzzo", note: { en: "Saline, unfiltered, with a whisper of apricot.", it: "Sapido, non filtrato, con un accenno di albicocca.", fr: "Salin, non filtré, avec une touche d'abricot." }, glass: "15", bottle: "88" },
  { name: "Greco di Tufo", producer: "Pietracupa", region: "Campania", note: { en: "Volcanic, lemon skin, white pepper.", it: "Vulcanico, buccia di limone, pepe bianco.", fr: "Volcanique, zeste de citron, poivre blanc." }, glass: "14", bottle: "82" },
  { name: "Carricante", producer: "Benanti", region: "Etna, Sicilia", bottle: "74", note: { en: "From Mount Etna's northern slopes. Ash, grapefruit, sea salt.", it: "Dalle pendici nord dell'Etna. Cenere, pompelmo, sale marino.", fr: "Versant nord de l'Etna. Cendre, pamplemousse, sel marin." } },
];

const reds: Wine[] = [
  { name: "Nerello Mascalese", producer: "Cornelissen, 'Munjebel'", region: "Etna, Sicilia", note: { en: "Wild red fruit, smoke, and a saline finish.", it: "Frutti rossi selvatici, fumo e un finale sapido.", fr: "Fruits rouges sauvages, fumée, finale saline." }, glass: "18", bottle: "102" },
  { name: "Chianti Classico", producer: "Isole e Olena", region: "Toscana", note: { en: "The grower we've used since day one.", it: "Il produttore che usiamo dal primo giorno.", fr: "Le vigneron avec qui nous travaillons depuis le premier jour." }, glass: "16", bottle: "94" },
  { name: "Barolo 'Monfalletto'", producer: "Cordero di Montezemolo", region: "Piemonte", bottle: "155", note: { en: "A serious wine for a serious table.", it: "Un vino importante per una tavola importante.", fr: "Un vin sérieux pour une table sérieuse." } },
];

const local: Wine[] = [
  { name: "Girgentina", producer: "Meridiana", region: "Mġarr, Malta", note: { en: "The only local white on our list. A single grower, forty minutes away.", it: "L'unico bianco locale nella nostra carta. Un solo produttore, a quaranta minuti.", fr: "Le seul blanc local de notre carte. Un seul vigneron, à quarante minutes." }, glass: "12", bottle: "64" },
  { name: "Ġellewża Rosé", producer: "Marsovin", region: "Marsa, Malta", note: { en: "Our rosé. Strawberry, rosewater, stone.", it: "Il nostro rosé. Fragola, acqua di rose, pietra.", fr: "Notre rosé. Fraise, eau de rose, pierre." }, glass: "13", bottle: "72" },
];

function WineList({ items }: { items: Wine[] }) {
  const { lang } = useRestaurantLang();
  return (
    <ul className="space-y-8">
      {items.map((w) => (
        <li key={w.name} style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 24 }}>
          <div className="flex items-baseline gap-4 mb-2">
            <div className="flex-1 min-w-0">
              <p className="italic" style={{ fontFamily: fHead, fontSize: 24, fontStyle: "italic", color: C.cream }}>{w.name}</p>
              <p className="text-[11px] tracking-wider uppercase mt-1" style={{ color: C.muted, fontFamily: fMono }}>
                {w.producer} · {w.region}
              </p>
            </div>
            <div className="text-right whitespace-nowrap text-[13px]" style={{ fontFamily: fMono }}>
              {w.glass && <p style={{ color: C.muted }}>{tri("Glass", "Calice", "Verre", lang)} <span style={{ color: C.cream }}>€{w.glass}</span></p>}
              <p style={{ color: C.muted }}>{tri("Bottle", "Bottiglia", "Bouteille", lang)} <span style={{ color: C.copper }}>€{w.bottle}</span></p>
            </div>
          </div>
          <p className="text-[13px] italic max-w-lg" style={{ color: "rgba(242,233,216,0.55)", fontFamily: fHead }}>
            {tri(w.note.en, w.note.it, w.note.fr, lang)}
          </p>
        </li>
      ))}
    </ul>
  );
}

function Inner() {
  const { lang } = useRestaurantLang();
  return (
    <div style={{ background: C.bg, color: C.cream, fontFamily: fBody }}>
      <DemoBanner />
      <RestaurantNav />

      <section className="relative w-full h-[55vh] min-h-[440px] overflow-hidden">
        <Image src="/images/restaurant/wine-cellar.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,9,8,0.4) 0%, rgba(11,9,8,0.8) 100%)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-10 pb-16">
            <div className="max-w-[1500px] mx-auto">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.25 }} className="text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color: C.copper, fontFamily: fMono }}>
                — {tri("Small producers · mostly Italian", "Piccoli produttori · soprattutto italiani", "Petits vignerons · mostly italiens", lang)}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35 }}
                className="max-w-4xl"
                style={{ fontFamily: fHead, fontSize: "clamp(52px, 9vw, 140px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.015em", color: C.cream, paddingBottom: "0.15em" }}
              >
                {tri("Wine", "Vini", "Cave", lang)}
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-center italic text-[18px] md:text-[22px] leading-[1.5] mb-16" style={{ fontFamily: fHead, color: C.cream }}>
              {tri(
                "Giulia picks every bottle. If it is on the list, she has visited the vineyard. If it is not on the list, she had a reason.",
                "Giulia sceglie ogni bottiglia. Se è in carta, ha visitato la vigna. Se non c'è, aveva un motivo.",
                "Giulia choisit chaque bouteille. Si elle est sur la carte, elle a visité le vignoble. Si elle n'y est pas, elle avait une raison.",
                lang
              )}
            </p>
            <Rule className="mb-16" />
          </Reveal>

          <div className="space-y-20">
            <div>
              <Reveal>
                <h2 className="mb-8" style={{ fontFamily: fHead, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1, fontWeight: 400, fontStyle: "italic", color: C.cream }}>
                  {tri("White", "Bianchi", "Blancs", lang)}
                </h2>
              </Reveal>
              <WineList items={whites} />
            </div>

            <div>
              <Reveal>
                <h2 className="mb-8" style={{ fontFamily: fHead, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1, fontWeight: 400, fontStyle: "italic", color: C.cream }}>
                  {tri("Red", "Rossi", "Rouges", lang)}
                </h2>
              </Reveal>
              <WineList items={reds} />
            </div>

            <div>
              <Reveal>
                <h2 className="mb-8" style={{ fontFamily: fHead, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1, fontWeight: 400, fontStyle: "italic", color: C.cream }}>
                  {tri("Local", "Locali", "Locaux", lang)}
                </h2>
              </Reveal>
              <WineList items={local} />
            </div>
          </div>
        </div>
      </section>

      <RestaurantFooter />
    </div>
  );
}

export default function RestaurantWinePage() {
  return <RestaurantLangProvider><Inner /></RestaurantLangProvider>;
}
