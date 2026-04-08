"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { MaisonNav, MaisonFooter, MaisonLangProvider, useMaisonLang, tri, Reveal, C, fHead, fBody, fMono } from "../_shared";

export const journalPosts = [
  {
    slug: "why-we-make-less",
    img: "journal-bts.jpg",
    date: "April 2026",
    tag: "Thoughts",
    titleEn: "Why we make less",
    titleFr: "Pourquoi nous fabriquons moins",
    titleDe: "Warum wir weniger produzieren",
    excerptEn: "Eight collections a year has become the industry standard. We do two. Here's why.",
    excerptFr: "Huit collections par an sont devenues la norme. Nous en faisons deux. Voici pourquoi.",
    excerptDe: "Acht Kollektionen pro Jahr sind zur Norm geworden. Wir machen zwei. Warum.",
  },
  {
    slug: "sicilian-cotton",
    img: "journal-swatches.jpg",
    date: "March 2026",
    tag: "Materials",
    titleEn: "A trip to our cotton farm in Sicily",
    titleFr: "Visite à notre ferme de coton en Sicile",
    titleDe: "Besuch auf unserer Baumwollfarm in Sizilien",
    excerptEn: "We spent three days at the farm that grows the cotton for our SS26 linens. Here's what we saw.",
    excerptFr: "Nous avons passé trois jours à la ferme qui cultive le coton de nos linges PE26.",
    excerptDe: "Drei Tage auf der Farm, die Baumwolle für unsere SS26-Leinen anbaut.",
  },
  {
    slug: "designing-an-oversized-blazer",
    img: "journal-sketch.jpg",
    date: "March 2026",
    tag: "Craft",
    titleEn: "The making of an oversized blazer",
    titleFr: "La fabrication d'un blazer oversized",
    titleDe: "Die Entstehung eines Oversized-Blazers",
    excerptEn: "Forty-two sketches, seven prototypes, eleven months. What goes into a single piece.",
    excerptFr: "Quarante-deux croquis, sept prototypes, onze mois. Ce qu'il y a dans une seule pièce.",
    excerptDe: "Zweiundvierzig Skizzen, sieben Prototypen, elf Monate. Was in einem einzigen Stück steckt.",
  },
  {
    slug: "the-problem-with-fast-fashion",
    img: "journal-vintage.jpg",
    date: "February 2026",
    tag: "Thoughts",
    titleEn: "The real problem with fast fashion",
    titleFr: "Le vrai problème de la fast fashion",
    titleDe: "Das eigentliche Problem mit Fast Fashion",
    excerptEn: "It's not just environmental. It's also deeply boring. We explain what we mean.",
    excerptFr: "Ce n'est pas seulement environnemental. C'est aussi profondément ennuyeux.",
    excerptDe: "Es ist nicht nur ökologisch. Es ist auch zutiefst langweilig. Was wir damit meinen.",
  },
  {
    slug: "repairs-not-replacements",
    img: "journal-magazine.jpg",
    date: "January 2026",
    tag: "Repairs",
    titleEn: "Every piece, repaired for life",
    titleFr: "Chaque pièce, réparée à vie",
    titleDe: "Jedes Stück, lebenslang reparierbar",
    excerptEn: "Our lifetime repair service is a business decision as much as an ethical one. Here's how it works.",
    excerptFr: "Notre service de réparation à vie est une décision commerciale autant qu'éthique.",
    excerptDe: "Unser lebenslanger Reparaturservice ist ebenso eine Geschäfts- wie eine Wertentscheidung.",
  },
];

function Inner() {
  const { lang } = useMaisonLang();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <MaisonNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10 pb-16">
        <div className="max-w-[1600px] mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.muted, fontFamily: fMono }}>
            — Journal / {String(journalPosts.length).padStart(2, "0")}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="max-w-4xl" style={{ fontFamily: fHead, fontSize: "clamp(52px, 9vw, 140px)", lineHeight: 0.9, fontWeight: 400, letterSpacing: "-0.02em", color: C.dark }}>
            {tri("Notes,", "Notes,", "Notizen,", lang)}<br />
            <em style={{ fontStyle: "italic", color: C.gold }}>{tri("not headlines.", "pas des titres.", "keine Schlagzeilen.", lang)}</em>
          </motion.h1>
        </div>
      </section>

      <section className="px-6 md:px-10 py-12 pb-32">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {journalPosts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 0.06}>
              <Link href={`/demos/maison/journal/${p.slug}`} className="group block no-underline">
                <div className="relative aspect-[16/10] mb-6 overflow-hidden">
                  <Image src={`/images/maison/${p.img}`} alt={p.titleEn} fill className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]" />
                </div>
                <p className="text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: C.muted, fontFamily: fMono }}>
                  — {p.tag} · {p.date}
                </p>
                <h2 className="mb-3" style={{ fontFamily: fHead, fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1.05, fontWeight: 400, color: C.dark }}>
                  {tri(p.titleEn, p.titleFr, p.titleDe, lang)}
                </h2>
                <p className="text-[14px] leading-[1.8]" style={{ color: C.muted }}>
                  {tri(p.excerptEn, p.excerptFr, p.excerptDe, lang)}
                </p>
                <p className="mt-4 text-[11px] tracking-wider uppercase" style={{ color: C.dark, fontFamily: fMono }}>
                  {tri("Read article", "Lire l'article", "Artikel lesen", lang)} →
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <MaisonFooter />
    </div>
  );
}

export default function MaisonJournalPage() {
  return <MaisonLangProvider><Inner /></MaisonLangProvider>;
}
