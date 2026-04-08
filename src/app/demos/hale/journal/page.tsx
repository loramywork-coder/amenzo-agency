"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { C, fHead, fBody, fMono, Reveal, Rule, HaleNav, HaleFooter, HaleLangProvider, useHaleLang, tri } from "../_shared";

export const articles = [
  {
    slug: "on-drawing-in-section",
    img: "journal-drafting.jpg",
    date: "March 2026",
    tag: { en: "Essay", de: "Essay", fr: "Essai" },
    titleEn: "On drawing in section",
    titleDe: "Vom Zeichnen im Schnitt",
    titleFr: "Sur le dessin en coupe",
    excerptEn: "Why we still design in section before plan — and what the drawing reveals that the perspective cannot.",
    excerptDe: "Warum wir immer noch zuerst im Schnitt entwerfen — und was die Zeichnung zeigt, was die Perspektive nicht kann.",
    excerptFr: "Pourquoi nous concevons encore en coupe avant le plan — et ce que le dessin révèle que la perspective ne peut pas.",
  },
  {
    slug: "the-case-for-small-practices",
    img: "journal-construction.jpg",
    date: "February 2026",
    tag: { en: "Studio", de: "Studio", fr: "Studio" },
    titleEn: "The case for small practices",
    titleDe: "Ein Plädoyer für kleine Büros",
    titleFr: "Le plaidoyer pour les petits cabinets",
    excerptEn: "Why we'll never grow past eight people — and why that's a feature, not a limitation.",
    excerptDe: "Warum wir nie über acht Personen hinauswachsen werden — und warum das ein Vorteil ist, keine Einschränkung.",
    excerptFr: "Pourquoi nous ne dépasserons jamais huit personnes — et pourquoi c'est un atout, pas une limite.",
  },
  {
    slug: "concrete-revisited",
    img: "journal-window.jpg",
    date: "January 2026",
    tag: { en: "Materials", de: "Materialien", fr: "Matériaux" },
    titleEn: "Concrete, revisited",
    titleDe: "Beton, neu betrachtet",
    titleFr: "Le béton revisité",
    excerptEn: "The material has a carbon problem. Here's how we specify it responsibly — and when we don't use it at all.",
    excerptDe: "Das Material hat ein CO2-Problem. So spezifizieren wir es verantwortungsvoll — und wann wir es gar nicht verwenden.",
    excerptFr: "Ce matériau a un problème de carbone. Voici comment nous le spécifions de manière responsable — et quand nous ne l'utilisons pas du tout.",
  },
  {
    slug: "what-we-learned-from-volta",
    img: "journal-book.jpg",
    date: "November 2025",
    tag: { en: "Project", de: "Projekt", fr: "Projet" },
    titleEn: "What we learned from Volta",
    titleDe: "Was wir aus Volta gelernt haben",
    titleFr: "Ce que nous avons appris de Volta",
    excerptEn: "Adaptive reuse taught us to look at old buildings not as problems to solve but as partners to listen to.",
    excerptDe: "Die Umnutzung hat uns gelehrt, alte Gebäude nicht als Probleme zu sehen, sondern als Partner.",
    excerptFr: "La réhabilitation nous a appris à regarder les vieux bâtiments non comme des problèmes, mais comme des partenaires.",
  },
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
            — {tri("Journal", "Journal", "Journal", lang)} / {String(articles.length).padStart(2, "0")}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="max-w-4xl" style={{ fontFamily: fHead, fontSize: "clamp(48px, 8vw, 130px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.02em" }}>
            {tri("Writing about", "Texte über", "Écrits sur", lang)}<br />
            <em style={{ fontStyle: "italic" }}>{tri("what we draw.", "das, was wir zeichnen.", "ce que nous dessinons.", lang)}</em>
          </motion.h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.08}>
              <Link href={`/demos/hale/journal/${a.slug}`} className="group block no-underline">
                <div className="relative aspect-[16/10] mb-6 overflow-hidden">
                  <Image src={`/images/hale/${a.img}`} alt={a.titleEn} fill className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]" />
                </div>
                <p className="text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: C.grey, fontFamily: fMono }}>
                  — {tri(a.tag.en, a.tag.de, a.tag.fr, lang)} · {a.date}
                </p>
                <h2 style={{ fontFamily: fHead, fontSize: "clamp(28px, 3vw, 42px)", lineHeight: 1.05, fontWeight: 400, color: C.dark }}>
                  {tri(a.titleEn, a.titleDe, a.titleFr, lang)}
                </h2>
                <p className="mt-4 text-[15px] leading-[1.8]" style={{ color: C.grey }}>
                  {tri(a.excerptEn, a.excerptDe, a.excerptFr, lang)}
                </p>
                <p className="mt-4 text-[11px] tracking-wider uppercase" style={{ color: C.dark, fontFamily: fMono }}>
                  {tri("Read article", "Artikel lesen", "Lire l'article", lang)} →
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <HaleFooter />
    </div>
  );
}

export default function HaleJournalPage() {
  return <HaleLangProvider><Inner /></HaleLangProvider>;
}
