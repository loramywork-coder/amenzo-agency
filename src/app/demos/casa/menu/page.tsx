"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import {
  C, fHead, fBody, Reveal, GoldDivider,
  CasaNav, CasaFooter, CasaLocaleProvider, useCasaLocale, bi,
} from "../_shared";

type Dish = { en: string; de: string; descEn: string; descDe: string; price: string; tags?: string[] };

const antipasti: Dish[] = [
  { en: "Burrata & Peach", de: "Burrata & Pfirsich", descEn: "Puglian burrata, white peach, basil oil, aged balsamico", descDe: "Apulische Burrata, weisser Pfirsich, Basilikumöl, Aceto Balsamico", price: "19", tags: ["V", "GF"] },
  { en: "Vitello Tonnato", de: "Vitello Tonnato", descEn: "Veal, tuna-caper mayonnaise, lemon, rocket", descDe: "Kalbfleisch, Thunfisch-Kapern-Mayo, Zitrone, Rucola", price: "22", tags: ["GF"] },
  { en: "Grilled Octopus", de: "Gegrillter Octopus", descEn: "Octopus, chickpea purée, smoked paprika, lemon", descDe: "Octopus, Kichererbsenpüree, geräuchertes Paprika, Zitrone", price: "24", tags: ["GF"] },
  { en: "Tomato & Mozzarella", de: "Tomate & Mozzarella", descEn: "Heirloom tomatoes, fior di latte, basil, olive oil", descDe: "Alte Tomatensorten, Fior di Latte, Basilikum, Olivenöl", price: "18", tags: ["V", "GF"] },
];

const pasta: Dish[] = [
  { en: "Pappardelle al Ragù", de: "Pappardelle al Ragù", descEn: "Hand-cut pappardelle, 6-hour veal ragù, parmigiano", descDe: "Hausgemachte Pappardelle, 6-Stunden Kalbsragù, Parmigiano", price: "28" },
  { en: "Spaghetti alle Vongole", de: "Spaghetti alle Vongole", descEn: "Clams, white wine, garlic, chili, parsley", descDe: "Venusmuscheln, Weisswein, Knoblauch, Chili, Petersilie", price: "29" },
  { en: "Ricotta Ravioli", de: "Ricotta Ravioli", descEn: "Sheep's ricotta, sage brown butter, toasted hazelnut", descDe: "Schafsricotta, braune Salbeibutter, geröstete Haselnüsse", price: "26", tags: ["V"] },
  { en: "Risotto alla Milanese", de: "Risotto alla Milanese", descEn: "Carnaroli rice, saffron, bone marrow, parmigiano", descDe: "Carnaroli-Reis, Safran, Markknochen, Parmigiano", price: "27", tags: ["GF"] },
];

const mains: Dish[] = [
  { en: "Branzino al Sale", de: "Branzino in Salzkruste", descEn: "Whole sea bass, sea salt crust, lemon, olive oil", descDe: "Ganzer Wolfsbarsch, Salzkruste, Zitrone, Olivenöl", price: "42", tags: ["GF"] },
  { en: "Ossobuco", de: "Ossobuco", descEn: "Braised veal shank, gremolata, saffron risotto", descDe: "Geschmorte Kalbshaxe, Gremolata, Safranrisotto", price: "48", tags: ["GF"] },
  { en: "Tagliata di Manzo", de: "Tagliata di Manzo", descEn: "Swiss beef tenderloin, rocket, parmigiano, aceto", descDe: "Schweizer Rinderfilet, Rucola, Parmigiano, Aceto", price: "46", tags: ["GF"] },
  { en: "Melanzane alla Parmigiana", de: "Melanzane alla Parmigiana", descEn: "Aubergine, tomato, mozzarella, basil — baked", descDe: "Aubergine, Tomate, Mozzarella, Basilikum — gebacken", price: "28", tags: ["V", "GF"] },
];

const sides: Dish[] = [
  { en: "Roasted Potatoes", de: "Bratkartoffeln", descEn: "Rosemary, garlic, sea salt", descDe: "Rosmarin, Knoblauch, Meersalz", price: "9", tags: ["V", "VG", "GF"] },
  { en: "Grilled Vegetables", de: "Grillgemüse", descEn: "Whatever's in season, olive oil, lemon", descDe: "Saisonales Gemüse, Olivenöl, Zitrone", price: "11", tags: ["V", "VG", "GF"] },
  { en: "Mixed Leaves", de: "Blattsalate", descEn: "Seasonal greens, shallot vinaigrette", descDe: "Saisonale Blätter, Schalotten-Vinaigrette", price: "9", tags: ["V", "VG", "GF"] },
];

const dolci: Dish[] = [
  { en: "Tiramisu della Casa", de: "Tiramisu des Hauses", descEn: "Mascarpone, espresso, marsala, cocoa", descDe: "Mascarpone, Espresso, Marsala, Kakao", price: "14", tags: ["V"] },
  { en: "Panna Cotta", de: "Panna Cotta", descEn: "Vanilla, seasonal berries, honey", descDe: "Vanille, saisonale Beeren, Honig", price: "13", tags: ["V", "GF"] },
  { en: "Affogato", de: "Affogato", descEn: "Vanilla gelato drowned in espresso", descDe: "Vanille-Gelato im Espresso ertränkt", price: "11", tags: ["V", "GF"] },
];

function Section({ titleEn, titleDe, items }: { titleEn: string; titleDe: string; items: Dish[] }) {
  const { locale } = useCasaLocale();
  return (
    <Reveal>
      <div className="mb-16">
        <div className="flex items-baseline gap-5 mb-10">
          <h2 className="italic" style={{ fontFamily: fHead, fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1, color: C.dark, fontStyle: "italic" }}>
            {bi(titleEn, titleDe, locale)}
          </h2>
          <span className="flex-1 h-px" style={{ background: C.gold }} />
        </div>
        <ul className="space-y-8">
          {items.map((d) => (
            <li key={d.en}>
              <div className="flex items-baseline gap-4">
                <h3 className="italic" style={{ fontFamily: fHead, fontSize: 22, color: C.dark, fontStyle: "italic" }}>
                  {bi(d.en, d.de, locale)}
                </h3>
                <span className="flex-1 border-b border-dotted" style={{ borderColor: C.border, marginBottom: 7 }} />
                <span className="font-semibold whitespace-nowrap" style={{ color: C.terra }}>
                  CHF {d.price}
                </span>
              </div>
              <p className="mt-2 text-[14px] leading-relaxed" style={{ color: C.muted }}>
                {bi(d.descEn, d.descDe, locale)}
                {d.tags && (
                  <span className="ml-3 inline-flex gap-1.5">
                    {d.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] tracking-wider px-1.5 py-0.5 font-semibold"
                        style={{ background: "rgba(196,162,101,0.15)", color: C.gold, borderRadius: 2 }}
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

function CasaMenuInner() {
  const { locale } = useCasaLocale();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <CasaNav />

      {/* HERO */}
      <section className="relative w-full h-[55vh] min-h-[400px] overflow-hidden">
        <Image src="/images/casa/menu-hero.jpg" alt="Casa Luma menu" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,22,18,0.4) 0%, rgba(26,22,18,0.65) 100%)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[11px] md:text-[12px] tracking-[0.4em] uppercase mb-6"
            style={{ color: C.gold }}
          >
            {bi("Seasonal · Made Daily", "Saisonal · Täglich frisch", locale)}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white"
            style={{ fontFamily: fHead, fontSize: "clamp(54px, 9vw, 110px)", lineHeight: 1, letterSpacing: "-0.01em" }}
          >
            {bi("The Menu", "Die Karte", locale)}
          </motion.h1>
          <GoldDivider className="mt-8" />
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <Section titleEn="Antipasti" titleDe="Antipasti" items={antipasti} />
          <Section titleEn="Pasta & Risotto" titleDe="Pasta & Risotto" items={pasta} />
          <Section titleEn="Pesce & Carne" titleDe="Fisch & Fleisch" items={mains} />
          <Section titleEn="Contorni" titleDe="Beilagen" items={sides} />
          <Section titleEn="Dolci" titleDe="Desserts" items={dolci} />
          <Reveal>
            <p className="text-[11px] text-center opacity-60 pt-6" style={{ color: C.muted }}>
              {bi(
                "V = Vegetarian  ·  VG = Vegan  ·  GF = Gluten-free",
                "V = Vegetarisch  ·  VG = Vegan  ·  GF = Glutenfrei",
                locale
              )}
            </p>
          </Reveal>
        </div>
      </section>

      <CasaFooter />
    </div>
  );
}

export default function CasaMenuPage() {
  return (
    <CasaLocaleProvider>
      <CasaMenuInner />
    </CasaLocaleProvider>
  );
}
