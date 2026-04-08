"use client";

import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { MaisonNav, MaisonFooter, MaisonLangProvider, useMaisonLang, tri, C, fHead, fBody, fMono } from "../_shared";

const tables = [
  {
    titleEn: "Women — Tops & Dresses",
    titleFr: "Femme — Hauts & robes",
    titleDe: "Damen — Oberteile & Kleider",
    cols: ["Size", "Bust", "Waist", "Hips"],
    rows: [
      ["XS", "82", "64", "89"],
      ["S", "86", "68", "93"],
      ["M", "90", "72", "97"],
      ["L", "94", "76", "101"],
      ["XL", "98", "80", "105"],
    ],
  },
  {
    titleEn: "Men",
    titleFr: "Homme",
    titleDe: "Herren",
    cols: ["Size", "Chest", "Waist", "Hips"],
    rows: [
      ["S", "94", "78", "96"],
      ["M", "100", "84", "102"],
      ["L", "106", "90", "108"],
      ["XL", "112", "96", "114"],
    ],
  },
];

const instructions = [
  {
    en: { title: "Bust / Chest", body: "Measure around the fullest part of your bust or chest, keeping the tape level." },
    fr: { title: "Poitrine", body: "Mesurez autour de la partie la plus large de votre poitrine, en gardant le mètre horizontal." },
    de: { title: "Brust", body: "Messen Sie um den vollsten Teil Ihrer Brust, halten Sie das Band horizontal." },
  },
  {
    en: { title: "Waist", body: "Measure around your natural waistline — the narrowest part of your torso." },
    fr: { title: "Taille", body: "Mesurez autour de votre taille naturelle — la partie la plus étroite de votre torse." },
    de: { title: "Taille", body: "Messen Sie um Ihre natürliche Taille — die schmalste Stelle Ihres Oberkörpers." },
  },
  {
    en: { title: "Hips", body: "Measure around the fullest part of your hips, usually 20 cm below your waist." },
    fr: { title: "Hanches", body: "Mesurez autour de la partie la plus large de vos hanches, environ 20 cm sous la taille." },
    de: { title: "Hüfte", body: "Messen Sie um den breitesten Teil Ihrer Hüfte, etwa 20 cm unterhalb der Taille." },
  },
];

function Inner() {
  const { lang } = useMaisonLang();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <MaisonNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10 pb-16">
        <div className="max-w-[1000px] mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.muted, fontFamily: fMono }}>
            — {tri("Size Guide", "Guide des tailles", "Grössentabelle", lang)}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} style={{ fontFamily: fHead, fontSize: "clamp(48px, 8vw, 130px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.02em", color: C.dark }}>
            {tri("Measurements.", "Mesures.", "Masse.", lang)}
          </motion.h1>
          <p className="mt-8 max-w-xl text-[15px] leading-[1.8]" style={{ color: C.muted }}>
            {tri("All measurements in centimetres. If you're between sizes, we recommend sizing up for tailored pieces and sizing down for knitwear.", "Toutes les mesures en centimètres. Entre deux tailles, nous recommandons la taille au-dessus pour les pièces ajustées et en dessous pour la maille.", "Alle Masse in Zentimetern. Zwischen Grössen empfehlen wir eine Nummer grösser für taillierte Stücke, eine Nummer kleiner für Strick.", lang)}
          </p>
        </div>
      </section>

      {/* Tables */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-[1000px] mx-auto space-y-16">
          {tables.map((t, i) => (
            <div key={i}>
              <h2 className="mb-6" style={{ fontFamily: fHead, fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1, fontWeight: 400, color: C.dark }}>
                {tri(t.titleEn, t.titleFr, t.titleDe, lang)}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-[13px]" style={{ fontFamily: fMono }}>
                  <thead>
                    <tr style={{ borderBottom: `1px solid ${C.dark}` }}>
                      {t.cols.map((c) => (
                        <th key={c} className="text-left py-4 pr-4 text-[11px] tracking-[0.2em] uppercase" style={{ color: C.muted }}>
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.rows.map((r, j) => (
                      <tr key={j} style={{ borderBottom: `1px solid ${C.border}` }}>
                        {r.map((cell, k) => (
                          <td key={k} className="py-4 pr-4" style={{ color: C.dark }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to measure */}
      <section className="px-6 md:px-10 py-20 pb-32" style={{ background: "#EEEAE3" }}>
        <div className="max-w-[1000px] mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.muted, fontFamily: fMono }}>
            — {tri("How to measure", "Comment mesurer", "So messen Sie", lang)}
          </p>
          <h2 className="mb-12" style={{ fontFamily: fHead, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1, fontWeight: 400, fontStyle: "italic", color: C.dark }}>
            {tri("Use a soft tape.", "Utilisez un mètre souple.", "Nutzen Sie ein weiches Band.", lang)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructions.map((inst, i) => (
              <div key={i}>
                <p className="text-[11px] tracking-[0.2em] uppercase mb-3" style={{ color: C.gold, fontFamily: fMono }}>— 0{i + 1}</p>
                <h3 className="mb-3" style={{ fontFamily: fHead, fontSize: 22, fontWeight: 400, color: C.dark }}>
                  {tri(inst.en.title, inst.fr.title, inst.de.title, lang)}
                </h3>
                <p className="text-[14px] leading-[1.75]" style={{ color: C.muted }}>
                  {tri(inst.en.body, inst.fr.body, inst.de.body, lang)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MaisonFooter />
    </div>
  );
}

export default function MaisonSizeGuidePage() {
  return <MaisonLangProvider><Inner /></MaisonLangProvider>;
}
