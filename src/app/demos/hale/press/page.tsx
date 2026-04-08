"use client";

import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { C, fHead, fBody, fMono, Reveal, Rule, HaleNav, HaleFooter, HaleLangProvider, useHaleLang, tri } from "../_shared";
import { ArrowUpRight } from "lucide-react";

const awards = [
  { year: "2024", title: "Swiss Architecture Award", category: "Residential", project: "Haus Alpenblick" },
  { year: "2024", title: "AIT Award", category: "Shortlist — Interior", project: "Atelier Blanc" },
  { year: "2023", title: "Frame Award", category: "Adaptive Reuse", project: "Volta Office" },
  { year: "2023", title: "Wallpaper*", category: "Best New Practices", project: "—" },
  { year: "2022", title: "Architizer A+", category: "Jury Winner — Landscape", project: "Jardin Carouge" },
  { year: "2022", title: "Dezeen Awards", category: "Longlist — Housing", project: "Haus Alpenblick" },
  { year: "2021", title: "Hochparterre", category: "Best of Swiss Architecture", project: "—" },
  { year: "2020", title: "AIT Innovation Award", category: "Young Practices", project: "—" },
];

const features = [
  { pub: "Dezeen", titleEn: "Hale & Partners wraps Lucerne residence in raw concrete and oak", titleDe: "Hale & Partners hüllt Luzerner Wohnhaus in Sichtbeton und Eiche", titleFr: "Hale & Partners habille une résidence lucernoise de béton brut et de chêne", date: "2024" },
  { pub: "Wallpaper*", titleEn: "Inside the Basel office where warehouse meets wilderness", titleDe: "Im Basler Büro, wo Lagerhalle auf Wildnis trifft", titleFr: "Dans le bureau bâlois où entrepôt rencontre nature", date: "2024" },
  { pub: "Architectural Digest", titleEn: "A studio on the Zürichsee that refuses to franchise", titleDe: "Ein Studio am Zürichsee, das nicht franchisen will", titleFr: "Un studio au bord du Zürichsee qui refuse la franchise", date: "2023" },
  { pub: "Domus", titleEn: "Atelier Blanc: the art of subtraction", titleDe: "Atelier Blanc: Die Kunst der Subtraktion", titleFr: "Atelier Blanc : l'art de la soustraction", date: "2023" },
  { pub: "NZZ", titleEn: "Hale & Partners: an interview with the Swiss studio redefining quiet luxury", titleDe: "Hale & Partners: Interview mit dem Schweizer Büro, das leisen Luxus neu definiert", titleFr: "Hale & Partners : entretien avec le studio suisse qui redéfinit le luxe tranquille", date: "2022" },
];

function Inner() {
  const { lang } = useHaleLang();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HaleNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.grey, fontFamily: fMono }}>
            — {tri("Press & Awards", "Presse & Auszeichnungen", "Presse & Prix", lang)}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} style={{ fontFamily: fHead, fontSize: "clamp(48px, 8vw, 130px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.02em", color: C.dark }}>
            {tri("Recognition.", "Anerkennung.", "Reconnaissance.", lang)}
          </motion.h1>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="text-[11px] tracking-[0.25em] uppercase" style={{ color: C.grey, fontFamily: fMono }}>— {tri("Awards", "Auszeichnungen", "Prix", lang)}</h2>
              <span className="text-[11px]" style={{ color: C.grey, fontFamily: fMono }}>{String(awards.length).padStart(2, "0")}</span>
            </div>
          </Reveal>
          <Rule className="opacity-25" />
          <div>
            {awards.map((a, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="grid grid-cols-12 gap-4 py-5 items-baseline" style={{ borderBottom: `1px solid ${C.border}` }}>
                  <span className="col-span-2 md:col-span-1" style={{ fontFamily: fMono, color: C.grey, fontSize: 12 }}>— {a.year}</span>
                  <span className="col-span-10 md:col-span-5" style={{ fontFamily: fHead, fontSize: 22, lineHeight: 1.2, color: C.dark }}>{a.title}</span>
                  <span className="col-span-8 md:col-span-4 text-[11px] tracking-wider uppercase" style={{ color: C.grey, fontFamily: fMono }}>{a.category}</span>
                  <span className="col-span-4 md:col-span-2 text-right md:text-left text-[11px] tracking-wider uppercase" style={{ color: C.grey, fontFamily: fMono }}>{a.project}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="text-[11px] tracking-[0.25em] uppercase" style={{ color: C.grey, fontFamily: fMono }}>— {tri("Features", "Artikel", "Articles", lang)}</h2>
              <span className="text-[11px]" style={{ color: C.grey, fontFamily: fMono }}>{String(features.length).padStart(2, "0")}</span>
            </div>
          </Reveal>
          <Rule className="opacity-25" />
          <div>
            {features.map((f, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <a href="#" className="grid grid-cols-12 gap-4 py-8 items-baseline no-underline transition-opacity hover:opacity-60" style={{ borderBottom: `1px solid ${C.border}`, color: C.dark }}>
                  <span className="col-span-2" style={{ fontFamily: fHead, fontSize: 22, fontStyle: "italic", color: C.dark }}>{f.pub}</span>
                  <span className="col-span-9" style={{ fontFamily: fHead, fontSize: 20, lineHeight: 1.3, color: C.dark }}>
                    {tri(f.titleEn, f.titleDe, f.titleFr, lang)}
                  </span>
                  <span className="col-span-1 text-right" style={{ color: C.grey, fontFamily: fMono, fontSize: 11 }}>
                    <ArrowUpRight size={16} className="inline" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HaleFooter />
    </div>
  );
}

export default function HalePressPage() {
  return <HaleLangProvider><Inner /></HaleLangProvider>;
}
