"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import {
  C, fHead, fBody, Reveal, GoldDivider,
  CasaNav, CasaFooter, CasaLocaleProvider, useCasaLocale, bi,
} from "../_shared";

const events = [
  {
    img: "/images/casa/events-private.jpg",
    kind: { en: "Private Dining", de: "Privates Dinner" },
    title: { en: "The Back Room", de: "Das Hinterzimmer" },
    desc: {
      en: "Our private room seats 12 at a single long table. Custom menu from CHF 125 per person. Perfect for birthdays, anniversaries, small corporate events.",
      de: "Unser privater Raum bietet Platz für 12 Personen an einem langen Tisch. Individuelles Menü ab CHF 125 pro Person. Ideal für Geburtstage, Jahrestage, kleine Firmenanlässe.",
    },
    details: { en: "Up to 12 guests · From CHF 125 pp", de: "Bis 12 Gäste · Ab CHF 125 p. P." },
  },
  {
    img: "/images/casa/wine-cellar.jpg",
    kind: { en: "Wine Tasting", de: "Weinverkostung" },
    title: { en: "Etna Nights", de: "Etna-Nächte" },
    desc: {
      en: "A guided tasting of 6 wines from Mount Etna paired with small plates. Hosted by sommelier Matteo once a month. CHF 95 per person.",
      de: "Eine geführte Verkostung von 6 Weinen vom Ätna mit kleinen Gängen. Geleitet von Sommelier Matteo, einmal im Monat. CHF 95 pro Person.",
    },
    details: { en: "Monthly · CHF 95 pp · 6 wines", de: "Monatlich · CHF 95 p. P. · 6 Weine" },
  },
  {
    img: "/images/casa/reservation.jpg",
    kind: { en: "Corporate", de: "Firmenanlass" },
    title: { en: "The Whole House", de: "Das ganze Haus" },
    desc: {
      en: "Buy out the entire restaurant for your team. 32 seats, bespoke menu, dedicated service. Monday nights only. From CHF 3,800.",
      de: "Mieten Sie das ganze Restaurant für Ihr Team. 32 Plätze, massgeschneidertes Menü, dedizierter Service. Nur Montagabende. Ab CHF 3.800.",
    },
    details: { en: "Mondays · 32 seats · From CHF 3,800", de: "Montags · 32 Plätze · Ab CHF 3.800" },
  },
];

function CasaEventsInner() {
  const { locale } = useCasaLocale();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <CasaNav />

      <section className="pt-40 pb-12 px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.4em] uppercase mb-5"
          style={{ color: C.terra }}
        >
          {bi("Private & Events", "Privat & Events", locale)}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-6"
          style={{ fontFamily: fHead, fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1, color: C.dark }}
        >
          {bi("For your", "Für Ihre", locale)}{" "}
          <em style={{ color: C.terra, fontStyle: "italic" }}>{bi("special nights", "besonderen Abende", locale)}</em>
        </motion.h1>
        <GoldDivider className="mb-4" />
        <p className="max-w-xl mx-auto text-[15px] leading-relaxed mt-6" style={{ color: C.muted }}>
          {bi(
            "Three ways to celebrate at Casa Luma. Write to us for custom proposals.",
            "Drei Arten, bei Casa Luma zu feiern. Schreiben Sie uns für individuelle Vorschläge.",
            locale
          )}
        </p>
      </section>

      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-6xl mx-auto space-y-8">
          {events.map((e, i) => (
            <Reveal key={e.title.en} delay={i * 0.1}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: 2 }}>
                  <Image src={e.img} alt={e.title.en} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: C.gold }}>
                    {bi(e.kind.en, e.kind.de, locale)}
                  </p>
                  <h2 className="italic mb-5" style={{ fontFamily: fHead, fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.1, fontStyle: "italic", color: C.dark }}>
                    {bi(e.title.en, e.title.de, locale)}
                  </h2>
                  <p className="text-[15px] leading-[1.8] mb-6" style={{ color: C.muted }}>
                    {bi(e.desc.en, e.desc.de, locale)}
                  </p>
                  <div
                    className="inline-flex items-center px-4 py-2 text-[11px] tracking-wider uppercase font-semibold mb-7"
                    style={{ background: "rgba(196,162,101,0.15)", color: C.gold, borderRadius: 2 }}
                  >
                    {bi(e.details.en, e.details.de, locale)}
                  </div>
                  <div>
                    <Link
                      href="/demos/casa/contact"
                      className="inline-flex items-center px-7 py-3.5 text-[12px] font-semibold tracking-wider uppercase no-underline transition-opacity hover:opacity-90"
                      style={{ background: C.terra, color: C.bg, borderRadius: 2, fontFamily: fBody }}
                    >
                      {bi("Enquire", "Anfragen", locale)} →
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CasaFooter />
    </div>
  );
}

export default function CasaEventsPage() {
  return (
    <CasaLocaleProvider>
      <CasaEventsInner />
    </CasaLocaleProvider>
  );
}
