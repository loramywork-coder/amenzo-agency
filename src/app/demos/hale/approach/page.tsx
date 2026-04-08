"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { C, fHead, fBody, fMono, Reveal, Rule, HaleNav, HaleFooter, HaleLangProvider, useHaleLang, tri } from "../_shared";

const phases = [
  {
    num: "01",
    en: { title: "Discovery", body: "We listen before we draw. Two to four weeks of site visits, client conversations, and research. We come back with questions, not proposals." },
    de: { title: "Entdeckung", body: "Wir hören zu, bevor wir zeichnen. Zwei bis vier Wochen Ortsbegehungen, Gespräche, Recherche. Wir kommen mit Fragen zurück, nicht mit Vorschlägen." },
    fr: { title: "Découverte", body: "Nous écoutons avant de dessiner. Deux à quatre semaines de visites, conversations, recherches. Nous revenons avec des questions, pas des propositions." },
    img: "detail-concrete.jpg",
  },
  {
    num: "02",
    en: { title: "Concept", body: "A single dominant idea per project. We present in section and model. No renderings until the geometry is earned. This phase takes as long as it needs to." },
    de: { title: "Konzept", body: "Eine dominante Idee pro Projekt. Präsentation in Schnitt und Modell. Keine Renderings, bevor die Geometrie es verdient. Diese Phase dauert, solange sie muss." },
    fr: { title: "Concept", body: "Une seule idée dominante par projet. Présentation en coupe et en maquette. Pas de rendus avant que la géométrie ne le mérite. Cette phase prend le temps nécessaire." },
    img: "studio-model.jpg",
  },
  {
    num: "03",
    en: { title: "Development", body: "Every detail drawn 1:5 where it matters. Material samples on the wall, mocked-up in full scale where possible. Engineers and consultants in the room from the start." },
    de: { title: "Ausarbeitung", body: "Jedes Detail im Massstab 1:5, wo es zählt. Materialmuster an der Wand, wenn möglich 1:1 gebaut. Ingenieure und Fachplaner von Beginn an dabei." },
    fr: { title: "Développement", body: "Chaque détail dessiné au 1:5 là où il compte. Échantillons de matériaux affichés, maquettes grandeur nature si possible. Ingénieurs et consultants dans la pièce dès le début." },
    img: "studio-work.jpg",
  },
  {
    num: "04",
    en: { title: "Realisation", body: "On site weekly. We handle tenders, supervise construction, review every submittal. The studio stays involved until the keys are handed over — and usually well beyond." },
    de: { title: "Umsetzung", body: "Wöchentlich auf der Baustelle. Wir übernehmen Ausschreibungen, begleiten den Bau, prüfen jeden Nachweis. Das Büro bleibt involviert bis zur Schlüsselübergabe — und meistens darüber hinaus." },
    fr: { title: "Réalisation", body: "Sur site chaque semaine. Nous gérons les appels d'offres, supervisons la construction, contrôlons chaque soumission. Le studio reste impliqué jusqu'à la remise des clés — et généralement au-delà." },
    img: "journal-construction.jpg",
  },
];

function Inner() {
  const { lang } = useHaleLang();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HaleNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10 pb-20">
        <div className="max-w-[1400px] mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.grey, fontFamily: fMono }}>
            — {tri("Approach", "Ansatz", "Approche", lang)}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="max-w-4xl" style={{ fontFamily: fHead, fontSize: "clamp(48px, 7vw, 120px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.02em" }}>
            {tri("Four phases,", "Vier Phasen,", "Quatre phases,", lang)}<br />
            <em style={{ fontStyle: "italic" }}>{tri("one continuous thought.", "ein fortlaufender Gedanke.", "une pensée continue.", lang)}</em>
          </motion.h1>
        </div>
      </section>

      {phases.map((p, i) => {
        const flipped = i % 2 === 1;
        return (
          <section key={p.num} className="px-6 md:px-10 py-16 md:py-24" style={{ borderTop: `1px solid ${C.border}` }}>
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
              <Reveal className={`md:col-span-6 ${flipped ? "md:col-start-7 md:row-start-1" : ""}`}>
                <div className="relative aspect-[4/3]">
                  <Image src={`/images/hale/${p.img}`} alt="" fill className="object-cover" />
                </div>
              </Reveal>
              <Reveal delay={0.1} className={`md:col-span-5 md:pt-10 ${flipped ? "md:col-start-1 md:row-start-1" : "md:col-start-8"}`}>
                <p className="text-[96px] md:text-[160px] leading-[0.85] mb-4" style={{ fontFamily: fHead, fontWeight: 400, color: C.grey, opacity: 0.35 }}>
                  {p.num}
                </p>
                <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1, fontWeight: 400, letterSpacing: "-0.015em" }}>
                  {tri(p.en.title, p.de.title, p.fr.title, lang)}
                </h2>
                <p className="mt-6 text-[17px] leading-[1.75]" style={{ color: C.grey }}>
                  {tri(p.en.body, p.de.body, p.fr.body, lang)}
                </p>
              </Reveal>
            </div>
          </section>
        );
      })}

      <HaleFooter />
    </div>
  );
}

export default function HaleApproachPage() {
  return <HaleLangProvider><Inner /></HaleLangProvider>;
}
