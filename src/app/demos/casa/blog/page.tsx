"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import {
  C, fHead, fBody, Reveal, GoldDivider,
  CasaNav, CasaFooter, CasaLocaleProvider, useCasaLocale, bi,
} from "../_shared";

export const posts = [
  {
    slug: "why-we-cook-with-sicilian-olive-oil",
    img: "/images/casa/gallery-oil.jpg",
    dateEn: "24 March 2026",
    dateDe: "24. März 2026",
    readEn: "5 min read",
    readDe: "5 Min. Lesezeit",
    tagEn: "Ingredients",
    tagDe: "Zutaten",
    titleEn: "Why we cook with Sicilian olive oil",
    titleDe: "Warum wir mit sizilianischem Olivenöl kochen",
    excerptEn:
      "Our house oil comes from a 60-year-old grove in Trapani. Here's how it gets from Anna's uncle's farm to our plates — and why we wouldn't cook with anything else.",
    excerptDe:
      "Unser Hausöl stammt aus einem 60 Jahre alten Hain in Trapani. So kommt es vom Hof von Annas Onkel auf unsere Teller — und warum wir mit nichts anderem kochen würden.",
  },
  {
    slug: "pasta-hand-vs-machine",
    img: "/images/casa/blog-cooking.jpg",
    dateEn: "14 March 2026",
    dateDe: "14. März 2026",
    readEn: "7 min read",
    readDe: "7 Min. Lesezeit",
    tagEn: "Technique",
    tagDe: "Technik",
    titleEn: "Hand-rolled pasta vs. extruded — what's the difference?",
    titleDe: "Handgerollte Pasta vs. Pressformen — wo liegt der Unterschied?",
    excerptEn:
      "The texture of pappardelle rolled by hand is simply different. Luca breaks down why — and when the machine is actually the right tool.",
    excerptDe:
      "Die Textur von handgerollter Pappardelle ist einfach anders. Luca erklärt, warum — und wann die Maschine tatsächlich das richtige Werkzeug ist.",
  },
  {
    slug: "etna-wines-explained",
    img: "/images/casa/blog-wine.jpg",
    dateEn: "2 March 2026",
    dateDe: "2. März 2026",
    readEn: "6 min read",
    readDe: "6 Min. Lesezeit",
    tagEn: "Wine",
    tagDe: "Wein",
    titleEn: "A short guide to the wines of Mount Etna",
    titleDe: "Ein kurzer Leitfaden zu den Weinen des Ätna",
    excerptEn:
      "Volcanic, briny, ancient vines. Sommelier Matteo explains why Etna is currently the most exciting wine region in Italy.",
    excerptDe:
      "Vulkanisch, salzig, alte Reben. Sommelier Matteo erklärt, warum der Ätna derzeit die spannendste Weinregion Italiens ist.",
  },
];

function CasaBlogInner() {
  const { locale } = useCasaLocale();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <CasaNav />

      <section className="pt-40 pb-16 px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.4em] uppercase mb-5"
          style={{ color: C.terra }}
        >
          {bi("The Journal", "Das Journal", locale)}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-6"
          style={{ fontFamily: fHead, fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1, color: C.dark }}
        >
          {bi("Notes from", "Notizen aus", locale)}{" "}
          <em style={{ color: C.terra, fontStyle: "italic" }}>{bi("the kitchen", "der Küche", locale)}</em>
        </motion.h1>
        <GoldDivider />
      </section>

      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <Link href={`/demos/casa/blog/${p.slug}`} className="group block no-underline">
                <div className="relative aspect-[4/3] overflow-hidden mb-5" style={{ borderRadius: 2 }}>
                  <Image
                    src={p.img}
                    alt={bi(p.titleEn, p.titleDe, locale)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-center gap-3 text-[11px] mb-3" style={{ color: C.muted }}>
                  <span className="tracking-wider uppercase" style={{ color: C.terra }}>
                    {bi(p.tagEn, p.tagDe, locale)}
                  </span>
                  <span>·</span>
                  <span>{bi(p.dateEn, p.dateDe, locale)}</span>
                  <span>·</span>
                  <span>{bi(p.readEn, p.readDe, locale)}</span>
                </div>
                <h2
                  className="italic mb-3 transition-colors"
                  style={{ fontFamily: fHead, fontSize: 24, lineHeight: 1.15, color: C.dark, fontStyle: "italic" }}
                >
                  {bi(p.titleEn, p.titleDe, locale)}
                </h2>
                <p className="text-[14px] leading-relaxed" style={{ color: C.muted }}>
                  {bi(p.excerptEn, p.excerptDe, locale)}
                </p>
                <p className="mt-4 text-[11px] tracking-wider uppercase font-semibold transition-colors" style={{ color: C.terra }}>
                  {bi("Read article", "Artikel lesen", locale)} →
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CasaFooter />
    </div>
  );
}

export default function CasaBlogPage() {
  return (
    <CasaLocaleProvider>
      <CasaBlogInner />
    </CasaLocaleProvider>
  );
}
