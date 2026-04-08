"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import {
  C, fHead, fBody, fMono, Reveal, Rule,
  HaleNav, HaleFooter, HaleLangProvider, useHaleLang, tri,
} from "../_shared";

const team = [
  { img: "team-1.jpg", name: "Thomas Hale", role: { en: "Founding Partner", de: "Gründungspartner", fr: "Associé fondateur" } },
  { img: "team-2.jpg", name: "Sofia Mercier", role: { en: "Partner, Residential", de: "Partnerin, Wohnbau", fr: "Associée, Résidentiel" } },
  { img: "team-3.jpg", name: "Elena Roth", role: { en: "Senior Architect", de: "Senior-Architektin", fr: "Architecte senior" } },
  { img: "team-4.jpg", name: "Jonas Keller", role: { en: "Project Architect", de: "Projektarchitekt", fr: "Architecte de projet" } },
  { img: "team-5.jpg", name: "Mira Schulz", role: { en: "Interior Lead", de: "Innenarchitektin", fr: "Responsable intérieur" } },
  { img: "team-6.jpg", name: "David Rossi", role: { en: "Design Director", de: "Design-Direktor", fr: "Directeur de conception" } },
];

const timeline = [
  { year: "2011", en: "Thomas Hale founds the studio in a 40m² room on Zähringerstrasse.", de: "Thomas Hale gründet das Büro in einem 40m²-Raum an der Zähringerstrasse.", fr: "Thomas Hale fonde le studio dans un local de 40m² à la Zähringerstrasse." },
  { year: "2015", en: "First major residential commission: Haus am Hang, Uetliberg.", de: "Erster grosser Wohnbauauftrag: Haus am Hang, Uetliberg.", fr: "Première commande résidentielle majeure : Haus am Hang, Uetliberg." },
  { year: "2018", en: "Sofia Mercier joins as partner. The studio moves to Seefeld.", de: "Sofia Mercier wird Partnerin. Das Büro zieht ins Seefeld.", fr: "Sofia Mercier rejoint comme associée. Le studio déménage au Seefeld." },
  { year: "2021", en: "First international project completed (Atelier Blanc, Geneva).", de: "Erstes internationales Projekt abgeschlossen (Atelier Blanc, Genf).", fr: "Premier projet international achevé (Atelier Blanc, Genève)." },
  { year: "2024", en: "Team of six. Four projects shortlisted at Swiss Architecture Awards.", de: "Sechsköpfiges Team. Vier Projekte nominiert beim Swiss Architecture Award.", fr: "Équipe de six. Quatre projets nommés aux Swiss Architecture Awards." },
];

function Inner() {
  const { lang } = useHaleLang();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HaleNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.grey, fontFamily: fMono }}>
            — {tri("Studio", "Studio", "Studio", lang)}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="max-w-5xl" style={{ fontFamily: fHead, fontSize: "clamp(48px, 8vw, 130px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.02em", color: C.dark }}>
            {tri("Six people,", "Sechs Menschen,", "Six personnes,", lang)}<br />
            <em style={{ fontStyle: "italic" }}>{tri("one studio.", "ein Studio.", "un studio.", lang)}</em>
          </motion.h1>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5]">
              <Image src="/images/hale/studio-interior.jpg" alt="Hale studio" fill className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 md:pt-12">
            <div className="space-y-6 text-[16px] leading-[1.8]">
              <p className="text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: C.grey, fontFamily: fMono }}>
                — {tri("Philosophy", "Philosophie", "Philosophie", lang)}
              </p>
              <p className="text-[22px] md:text-[26px] leading-[1.4]" style={{ fontFamily: fHead, color: C.dark }}>
                {tri(
                  "We believe architecture is a craft of consequences, not gestures. Every decision should be defensible. Every detail should earn its place. Every room should work before it tries to impress.",
                  "Wir glauben, Architektur ist ein Handwerk der Konsequenzen, nicht der Gesten. Jede Entscheidung muss begründbar sein. Jedes Detail muss seinen Platz verdienen. Jeder Raum muss funktionieren, bevor er beeindrucken will.",
                  "Pour nous, l'architecture est un métier de conséquences, pas de gestes. Chaque décision doit être défendable. Chaque détail doit mériter sa place. Chaque pièce doit fonctionner avant de vouloir impressionner.",
                  lang
                )}
              </p>
              <p style={{ color: C.grey }}>
                {tri(
                  "We're a small practice by design. We take on a handful of projects each year because that is the number at which we can still draw every detail ourselves. The studio is six people: two partners, three architects, one designer. We do not franchise, we do not sub-contract the thinking.",
                  "Wir sind bewusst ein kleines Büro. Wir übernehmen jedes Jahr eine Handvoll Projekte — weil das die Zahl ist, bei der wir noch jedes Detail selbst zeichnen können. Das Studio besteht aus sechs Personen: zwei Partner, drei Architekten, eine Designerin. Keine Franchising, kein ausgelagertes Denken.",
                  "Nous sommes volontairement un petit cabinet. Nous acceptons quelques projets par an — le nombre auquel nous pouvons encore dessiner chaque détail nous-mêmes. Le studio compte six personnes : deux associés, trois architectes, une designer. Pas de franchise, pas de sous-traitance de la réflexion.",
                  lang
                )}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TEAM */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.grey, fontFamily: fMono }}>
              — {tri("Team", "Team", "Équipe", lang)}
            </p>
            <Rule className="opacity-25 mb-14" />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.05}>
                <div>
                  <div className="relative aspect-[4/5] mb-5">
                    <Image src={`/images/hale/${m.img}`} alt={m.name} fill className="object-cover" />
                  </div>
                  <p style={{ fontFamily: fHead, fontSize: 22, lineHeight: 1.1, color: C.dark }}>{m.name}</p>
                  <p className="text-[11px] tracking-wider uppercase mt-1.5" style={{ color: C.grey, fontFamily: fMono }}>
                    {tri(m.role.en, m.role.de, m.role.fr, lang)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-6 md:px-10 py-20 md:py-28" style={{ background: "#F0F0EE" }}>
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.grey, fontFamily: fMono }}>
              — {tri("Timeline", "Zeitstrahl", "Chronologie", lang)}
            </p>
            <h2 className="mb-14 max-w-3xl" style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 0.98, fontWeight: 400, letterSpacing: "-0.02em", color: C.dark }}>
              {tri("Fourteen years,", "Vierzehn Jahre,", "Quatorze ans,", lang)}<br />
              <em style={{ fontStyle: "italic", color: C.grey }}>{tri("one idea.", "eine Idee.", "une idée.", lang)}</em>
            </h2>
          </Reveal>
          <Rule className="opacity-25" />
          <div>
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06}>
                <div className="grid grid-cols-12 gap-4 py-6 text-[14px]" style={{ borderBottom: `1px solid ${C.border}` }}>
                  <span className="col-span-2 md:col-span-1" style={{ fontFamily: fMono, color: C.grey }}>— {t.year}</span>
                  <span className="col-span-10 md:col-span-11" style={{ fontFamily: fHead, fontSize: 20, lineHeight: 1.4, color: C.dark }}>
                    {tri(t.en, t.de, t.fr, lang)}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HaleFooter />
    </div>
  );
}

export default function HaleStudioPage() {
  return <HaleLangProvider><Inner /></HaleLangProvider>;
}
