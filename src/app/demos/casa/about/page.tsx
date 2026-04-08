"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import {
  C, fHead, fBody, Reveal, GoldDivider,
  CasaNav, CasaFooter, CasaLocaleProvider, useCasaLocale, bi,
} from "../_shared";

const values = [
  {
    en: { title: "Seasonal, always", body: "Our menu changes with what's available. If it's not in season, it's not on the plate." },
    de: { title: "Immer saisonal", body: "Unsere Karte richtet sich nach dem, was gerade verfügbar ist. Was nicht Saison hat, kommt nicht auf den Teller." },
  },
  {
    en: { title: "Real producers", body: "We know our fish supplier by name. Our olive oil comes from a farm in Trapani we visit every year." },
    de: { title: "Echte Produzenten", body: "Wir kennen unseren Fischlieferanten beim Namen. Unser Olivenöl kommt von einem Hof in Trapani, den wir jedes Jahr besuchen." },
  },
  {
    en: { title: "Unhurried rooms", body: "Tables are yours for the evening. There is no second seating. Stay as long as you like." },
    de: { title: "Zeit zum Bleiben", body: "Der Tisch gehört Ihnen für den ganzen Abend. Es gibt keinen zweiten Seating-Slot. Bleiben Sie so lange Sie mögen." },
  },
];

const team = [
  {
    name: "Luca Ferrara",
    img: "/images/casa/team-1.jpg",
    roleEn: "Head Chef & Co-owner",
    roleDe: "Küchenchef & Mitinhaber",
    bioEn: "Born in Bari. Previously Locanda Locatelli, London.",
    bioDe: "Geboren in Bari. Zuvor Locanda Locatelli, London.",
  },
  {
    name: "Anna Moretti",
    img: "/images/casa/team-2.jpg",
    roleEn: "Pastry & Co-owner",
    roleDe: "Patisserie & Mitinhaberin",
    bioEn: "From Palermo. Trained at Corso Italia, Milan.",
    bioDe: "Aus Palermo. Ausgebildet am Corso Italia, Mailand.",
  },
  {
    name: "Matteo Ricci",
    img: "/images/casa/team-3.jpg",
    roleEn: "Head Sommelier",
    roleDe: "Chef-Sommelier",
    bioEn: "10 years at Ristorante Cracco. Loves Etna reds.",
    bioDe: "10 Jahre bei Ristorante Cracco. Liebt Etna-Rotweine.",
  },
];

function CasaAboutInner() {
  const { locale } = useCasaLocale();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <CasaNav />

      {/* HERO */}
      <section className="relative w-full h-[55vh] min-h-[400px] overflow-hidden">
        <Image src="/images/casa/about-kitchen.jpg" alt="Casa Luma kitchen" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,22,18,0.4) 0%, rgba(26,22,18,0.65) 100%)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[11px] md:text-[12px] tracking-[0.4em] uppercase mb-6"
            style={{ color: C.gold }}
          >
            {bi("Since 2018", "Seit 2018", locale)}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white"
            style={{ fontFamily: fHead, fontSize: "clamp(54px, 9vw, 110px)", lineHeight: 1 }}
          >
            {bi("About Us", "Über uns", locale)}
          </motion.h1>
          <GoldDivider className="mt-8" />
        </div>
      </section>

      {/* Founders story */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden" style={{ borderRadius: 2 }}>
              <Image src="/images/casa/founders.jpg" alt="Luca & Anna" fill className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase mb-5" style={{ color: C.terra }}>
                {bi("Luca & Anna", "Luca & Anna", locale)}
              </p>
              <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, color: C.dark }}>
                {bi("A kitchen", "Eine Küche", locale)}{" "}
                <em style={{ color: C.terra, fontStyle: "italic" }}>{bi("for the long evenings.", "für lange Abende.", locale)}</em>
              </h2>
              <div className="mt-8 space-y-5 text-[15px] leading-[1.85]" style={{ color: C.muted }}>
                <p>
                  {bi(
                    "We met in Geneva in 2012, working opposite each other on the line at Café des Amis. Luca was running the pasta station, Anna was on pastry. We burned dinner for four years before we figured out we wanted to do this together — our own room, our own rules.",
                    "Wir trafen uns 2012 in Genf, arbeiteten gegenüber am Herd im Café des Amis. Luca machte die Pasta, Anna die Patisserie. Wir haben vier Jahre lang das Abendessen verbrannt, bevor wir merkten, dass wir das gemeinsam machen wollten — unser eigener Raum, unsere eigenen Regeln.",
                    locale
                  )}
                </p>
                <p>
                  {bi(
                    "Casa Luma opened in the old Gerechtigkeitsgasse in 2018 with 32 seats. We kept it small on purpose. Small means you can actually cook — not just plate. Small means we remember regulars. Small means we can still serve our mothers' recipes on the menu.",
                    "Casa Luma eröffnete 2018 in der alten Gerechtigkeitsgasse mit 32 Plätzen. Wir haben es bewusst klein gehalten. Klein heisst, man kann noch wirklich kochen — nicht nur anrichten. Klein heisst, wir erinnern uns an Stammgäste. Klein heisst, wir können immer noch die Rezepte unserer Mütter servieren.",
                    locale
                  )}
                </p>
                <p>
                  {bi(
                    "Seven years in, we're still behind the pass almost every night. It's still our favourite room in Bern.",
                    "Sieben Jahre später stehen wir fast jeden Abend am Pass. Es ist immer noch unser Lieblingsraum in Bern.",
                    locale
                  )}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-10 py-20" style={{ background: "#F7EFE2" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: C.terra }}>
                {bi("What we believe", "Woran wir glauben", locale)}
              </p>
              <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, color: C.dark }}>
                {bi("Three things.", "Drei Dinge.", locale)}
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <Reveal key={v.en.title} delay={i * 0.1}>
                <div className="p-8 h-full" style={{ background: C.bg, borderRadius: 2 }}>
                  <p className="mb-4 text-2xl" style={{ color: C.gold, fontFamily: fHead }}>
                    0{i + 1}
                  </p>
                  <h3 className="italic mb-4" style={{ fontFamily: fHead, fontSize: 26, color: C.dark, fontStyle: "italic" }}>
                    {bi(v.en.title, v.de.title, locale)}
                  </h3>
                  <p className="text-[14px] leading-[1.8]" style={{ color: C.muted }}>
                    {bi(v.en.body, v.de.body, locale)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: C.terra }}>
                {bi("The Kitchen", "Die Küche", locale)}
              </p>
              <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, color: C.dark }}>
                {bi("Meet the team.", "Das Team.", locale)}
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1}>
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden mb-5" style={{ borderRadius: 2 }}>
                    <Image src={m.img} alt={m.name} fill className="object-cover" />
                  </div>
                  <h3 className="italic mb-1" style={{ fontFamily: fHead, fontSize: 24, color: C.dark, fontStyle: "italic" }}>
                    {m.name}
                  </h3>
                  <p className="text-[11px] tracking-wider uppercase mb-2" style={{ color: C.terra }}>
                    {bi(m.roleEn, m.roleDe, locale)}
                  </p>
                  <p className="text-[13px] leading-relaxed" style={{ color: C.muted }}>
                    {bi(m.bioEn, m.bioDe, locale)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interior gallery */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {["about-kitchen.jpg", "about-bar.jpg", "gallery-table.jpg", "gallery-candle.jpg"].map((src, i) => (
            <Reveal key={src} delay={i * 0.08}>
              <div className="relative aspect-[3/4] overflow-hidden" style={{ borderRadius: 2 }}>
                <Image src={`/images/casa/${src}`} alt={`Casa Luma interior ${i + 1}`} fill className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CasaFooter />
    </div>
  );
}

export default function CasaAboutPage() {
  return (
    <CasaLocaleProvider>
      <CasaAboutInner />
    </CasaLocaleProvider>
  );
}
