"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { ArrowRight } from "lucide-react";
import {
  C, fHead, fBody, fMono, Reveal, ClipReveal, Rule,
  HaleNav, HaleFooter, HaleLangProvider, useHaleLang, tri, projects,
} from "./_shared";

const approach = [
  {
    num: "01",
    en: { title: "Read the site", body: "Every project begins with listening — to the land, to the brief, to what the client cannot quite articulate yet." },
    de: { title: "Den Ort lesen", body: "Jedes Projekt beginnt mit Zuhören — dem Grundstück, dem Auftrag, dem noch nicht Ausgesprochenen." },
    fr: { title: "Lire le site", body: "Chaque projet commence par l'écoute — du lieu, du brief, de ce que le client ne sait pas encore formuler." },
  },
  {
    num: "02",
    en: { title: "Draw in section", body: "We design in section before plan. It's how you understand how a building actually feels to move through." },
    de: { title: "In Schnitten zeichnen", body: "Wir entwerfen zuerst im Schnitt, dann im Grundriss. So versteht man, wie sich ein Gebäude im Durchschreiten anfühlt." },
    fr: { title: "Dessiner en coupe", body: "Nous concevons en coupe avant le plan. C'est ainsi qu'on comprend ce que traverser un bâtiment veut dire." },
  },
  {
    num: "03",
    en: { title: "Build once, well", body: "Every detail is drawn. Every sample is handled. No shortcuts, no value engineering at the expense of the brief." },
    de: { title: "Einmal richtig bauen", body: "Jedes Detail wird gezeichnet. Jedes Muster in die Hand genommen. Keine Abkürzungen, keine Einsparungen zulasten des Briefings." },
    fr: { title: "Construire une fois, bien", body: "Chaque détail est dessiné. Chaque échantillon est touché. Pas de raccourcis, pas d'économies au détriment du brief." },
  },
];

const awards = [
  "2024 — Swiss Architecture Award, Residential",
  "2024 — AIT Award, Interior of the Year (shortlist)",
  "2023 — Frame Award, Adaptive Reuse",
  "2023 — Wallpaper* Best New Practices",
  "2022 — Architizer A+ Jury Winner",
  "2022 — Dezeen Awards, Longlist",
];

const press = ["Dezeen", "Wallpaper*", "Architectural Digest", "Domus", "NZZ", "Hochparterre"];

function HaleHomeInner() {
  const { lang } = useHaleLang();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HaleNav />

      {/* HERO */}
      <section className="relative w-full h-screen min-h-[720px] overflow-hidden">
        <Image src="/images/hale/hero.jpg" alt="Hale & Partners" fill priority className="object-cover" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-10 pb-16 md:pb-20">
            <div className="max-w-[1400px] mx-auto">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[10px] tracking-[0.3em] uppercase mb-5"
                style={{ color: C.bg, fontFamily: fMono }}
              >
                — {tri("Est. 2011, Zürich", "Gegründet 2011, Zürich", "Fondé en 2011, Zurich", lang)}
              </motion.p>
              <ClipReveal delay={0.4}>
                <h1
                  className="max-w-5xl"
                  style={{
                    fontFamily: fHead,
                    fontSize: "clamp(48px, 9vw, 150px)",
                    lineHeight: 0.92,
                    color: C.bg,
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {tri("Architecture of", "Architektur der", "L'architecture", lang)}
                  <br />
                  <em style={{ fontStyle: "italic" }}>
                    {tri("quiet consequence.", "stillen Folge.", "de la juste mesure.", lang)}
                  </em>
                </h1>
              </ClipReveal>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT INDEX */}
      <section className="px-6 md:px-10 py-28 md:py-40">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-16 md:mb-24">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.grey, fontFamily: fMono }}>
                  — {tri("Selected Projects", "Ausgewählte Projekte", "Projets sélectionnés", lang)}
                </p>
                <h2 style={{ fontFamily: fHead, fontSize: "clamp(44px, 6vw, 88px)", lineHeight: 0.95, fontWeight: 400, letterSpacing: "-0.02em" }}>
                  {tri("Selected work,", "Ausgewählte Arbeiten,", "Travaux choisis,", lang)}<br />
                  <em style={{ fontStyle: "italic", color: C.grey }}>
                    {tri("2022 — 2025.", "2022 — 2025.", "2022 — 2025.", lang)}
                  </em>
                </h2>
              </div>
              <Link
                href="/demos/hale/projects"
                className="text-[11px] tracking-[0.15em] uppercase no-underline inline-flex items-center gap-2"
                style={{ color: C.dark, fontFamily: fMono }}
              >
                {tri("All projects", "Alle Projekte", "Tous les projets", lang)} <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="space-y-24 md:space-y-32">
            {projects.map((p, i) => {
              const flipped = i % 2 === 1;
              return (
                <Reveal key={p.slug}>
                  <Link href={`/demos/hale/projects/${p.slug}`} className="group block no-underline">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-end">
                      <div className={`md:col-span-8 ${flipped ? "md:col-start-5" : ""}`}>
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={`/images/hale/${p.heroImg}`}
                            alt={p.titleEn}
                            fill
                            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                          />
                        </div>
                      </div>
                      <div className={`md:col-span-4 ${flipped ? "md:col-start-1 md:row-start-1" : ""}`}>
                        <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: C.grey, fontFamily: fMono }}>
                          — {p.num} · {tri(p.type.en, p.type.de, p.type.fr, lang)}
                        </p>
                        <h3 style={{ fontFamily: fHead, fontSize: "clamp(32px, 3.5vw, 52px)", lineHeight: 1.02, fontWeight: 400, letterSpacing: "-0.015em", color: C.dark }}>
                          {tri(p.titleEn, p.titleDe, p.titleFr, lang)}
                        </h3>
                        <p className="mt-3 text-[12px] tracking-wider uppercase" style={{ color: C.grey, fontFamily: fMono }}>
                          {p.location} — {p.year} — {p.area}
                        </p>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="px-6 md:px-10 py-28 md:py-36" style={{ background: "#F0F0EE" }}>
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.grey, fontFamily: fMono }}>
              — {tri("Approach", "Ansatz", "Approche", lang)}
            </p>
            <h2 className="mb-16 max-w-4xl" style={{ fontFamily: fHead, fontSize: "clamp(38px, 5vw, 72px)", lineHeight: 0.98, fontWeight: 400, letterSpacing: "-0.02em" }}>
              {tri(
                "Three ideas at the heart of every project.",
                "Drei Ideen im Zentrum jedes Projekts.",
                "Trois idées au cœur de chaque projet.",
                lang
              )}
            </h2>
          </Reveal>
          <Rule className="mb-14 opacity-25" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            {approach.map((a, i) => (
              <Reveal key={a.num} delay={i * 0.1}>
                <div>
                  <p className="text-[11px] mb-5" style={{ color: C.dark, fontFamily: fMono }}>
                    — {a.num}
                  </p>
                  <h3 style={{ fontFamily: fHead, fontSize: 32, lineHeight: 1.05, fontWeight: 400 }}>
                    {tri(a.en.title, a.de.title, a.fr.title, lang)}
                  </h3>
                  <p className="mt-4 text-[14px] leading-[1.75]" style={{ color: C.grey }}>
                    {tri(a.en.body, a.de.body, a.fr.body, lang)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS TICKER */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.grey, fontFamily: fMono }}>
              — {tri("Recognition", "Anerkennung", "Reconnaissance", lang)}
            </p>
          </Reveal>
          <Rule className="opacity-25" />
          <div className="divide-y" style={{ borderColor: C.border }}>
            {awards.map((a, i) => (
              <Reveal key={a} delay={i * 0.05}>
                <div className="flex items-center justify-between py-6 text-[14px] md:text-[16px]" style={{ borderTop: `1px solid ${C.border}` }}>
                  <span style={{ fontFamily: fHead }}>{a}</span>
                  <span className="text-[11px] tracking-wider uppercase" style={{ color: C.grey, fontFamily: fMono }}>
                    — Award
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS STRIP */}
      <section className="px-6 md:px-10 py-20" style={{ background: C.dark, color: C.bg }}>
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-10" style={{ color: C.brass, fontFamily: fMono }}>
            — {tri("As Featured In", "Bekannt aus", "Présenté dans", lang)}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            {press.map((p) => (
              <span key={p} className="text-[20px] md:text-[28px] opacity-80" style={{ fontFamily: fHead, fontWeight: 400, fontStyle: "italic" }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <HaleFooter />
    </div>
  );
}

export default function HaleHomePage() {
  return (
    <HaleLangProvider>
      <HaleHomeInner />
    </HaleLangProvider>
  );
}
