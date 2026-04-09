"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { ArrowRight } from "lucide-react";
import {
  C, fHead, fBody, fMono, Reveal, Rule, Ornament,
  HotelNav, HotelFooter, HotelLangProvider, useHotelLang, tri, rooms,
} from "./_shared";

const pillars = [
  {
    num: "I.",
    en: { title: "Two kitchens", body: "A harbourside fine-dining room and a rooftop bar that opens for sunset. Both led by chef Stefano Busuttil, formerly of Noma." },
    de: { title: "Zwei Küchen", body: "Ein Feinschmeckerlokal am Hafen und eine Rooftop-Bar, die zum Sonnenuntergang öffnet. Beide geleitet von Chef Stefano Busuttil, ehemals Noma." },
    fr: { title: "Deux cuisines", body: "Un restaurant gastronomique face au port et un bar panoramique ouvrant au coucher du soleil. Tous deux dirigés par le chef Stefano Busuttil, ancien Noma." },
    img: "dining-restaurant.jpg",
  },
  {
    num: "II.",
    en: { title: "Rooftop spa", body: "Hammam, steam room, cold plunge, and a 14-metre rooftop pool facing the Three Cities. Open from 7am to midnight." },
    de: { title: "Dach-Spa", body: "Hammam, Dampfbad, Kaltbecken und ein 14-Meter-Dachpool mit Blick auf die Drei Städte. Geöffnet von 7 bis Mitternacht." },
    fr: { title: "Spa panoramique", body: "Hammam, sauna, bain froid et piscine de 14 mètres face aux Trois Cités. Ouvert de 7h à minuit." },
    img: "spa-pool.jpg",
  },
  {
    num: "III.",
    en: { title: "Curated experiences", body: "Private yacht charters, dawn dives, vineyard visits, and cooking classes with our chef. All arranged through your personal concierge." },
    de: { title: "Kuratierte Erlebnisse", body: "Private Yachtcharter, Morgentauchgänge, Weingutsbesuche und Kochkurse mit unserem Chef. Alles über Ihren persönlichen Concierge." },
    fr: { title: "Expériences sur mesure", body: "Charter de yacht privé, plongées à l'aube, visites de vignobles et cours de cuisine avec notre chef. Arrangés par votre concierge personnel." },
    img: "exp-yacht.jpg",
  },
];

function Inner() {
  const { lang } = useHotelLang();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HotelNav />

      {/* HERO */}
      <section className="relative w-full h-screen min-h-[720px] overflow-hidden">
        <Image src="/images/hotel/hero.jpg" alt="Grand Harbour Hotel" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(14,26,43,0.25) 0%, rgba(14,26,43,0.5) 60%, rgba(14,26,43,0.8) 100%)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mb-8 flex justify-center"
              style={{ color: C.goldLight }}
            >
              <Ornament size={52} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-[11px] tracking-[0.5em] uppercase mb-8"
              style={{ color: C.goldLight, fontFamily: fMono }}
            >
              — {tri("Valletta, Malta · Est. 1897", "Valletta, Malta · Seit 1897", "Valletta, Malte · Depuis 1897", lang)}
            </motion.p>
            <motion.h1
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1.1, delay: 0.55, ease: [0.77, 0, 0.175, 1] }}
              className="text-white max-w-5xl mx-auto"
              style={{
                fontFamily: fHead,
                fontSize: "clamp(56px, 10vw, 160px)",
                lineHeight: 0.9,
                fontWeight: 400,
                letterSpacing: "-0.01em",
                color: "#F7F1E8",
                paddingBottom: "0.15em",
              }}
            >
              Grand{" "}
              <em style={{ fontStyle: "italic", color: "#D4B878" }}>Harbour</em>
              <br />
              Hotel
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mt-10 max-w-xl mx-auto text-base md:text-lg leading-relaxed italic"
              style={{ color: "rgba(247,241,232,0.85)", fontFamily: fHead, fontSize: "clamp(18px, 2vw, 22px)" }}
            >
              {tri(
                "A small hotel on a small island with a very large view.",
                "Ein kleines Hotel auf einer kleinen Insel — mit sehr grosser Aussicht.",
                "Un petit hôtel sur une petite île, avec une très grande vue.",
                lang
              )}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="/demos/hotel/rooms"
                className="inline-flex items-center justify-center px-9 py-4 text-[11px] tracking-[0.2em] uppercase no-underline transition-opacity hover:opacity-90"
                style={{ background: C.gold, color: C.bg, fontFamily: fBody, fontWeight: 600 }}
              >
                {tri("Discover Rooms", "Zimmer entdecken", "Découvrir les chambres", lang)}
              </Link>
              <Link
                href="/demos/hotel/contact"
                className="inline-flex items-center justify-center px-9 py-4 text-[11px] tracking-[0.2em] uppercase no-underline transition-all"
                style={{ border: "1px solid rgba(247,241,232,0.4)", color: "#F7F1E8", fontFamily: fBody, fontWeight: 500 }}
              >
                {tri("Reserve a Stay", "Aufenthalt reservieren", "Réserver un séjour", lang)}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center" style={{ color: "rgba(247,241,232,0.6)" }}>
          <p className="text-[9px] tracking-[0.3em] uppercase mb-2" style={{ fontFamily: fMono }}>{tri("Scroll", "Scrollen", "Défiler", lang)}</p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 mx-auto"
            style={{ background: "rgba(247,241,232,0.35)" }}
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 md:px-10 py-28 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: C.gold, fontFamily: fMono }}>
              — {tri("A house of thirty-eight rooms", "Ein Haus mit achtunddreissig Zimmern", "Une maison de trente-huit chambres", lang)}
            </p>
            <h2
              className="mb-10"
              style={{
                fontFamily: fHead,
                fontSize: "clamp(36px, 5vw, 68px)",
                lineHeight: 1.06,
                fontWeight: 400,
                color: C.dark,
                letterSpacing: "-0.01em",
              }}
            >
              {tri(
                "We opened in 1897 as a traveller's inn on the harbour. We have kept the rooms small, the view large, and the staff on first-name terms ever since.",
                "Wir eröffneten 1897 als Reisenden-Gasthof am Hafen. Seitdem halten wir die Zimmer klein, die Aussicht gross und das Personal per Du.",
                "Nous avons ouvert en 1897 comme auberge de voyageurs sur le port. Depuis, nous gardons les chambres petites, la vue grande, et le personnel sur un pied d'égalité.",
                lang
              )}
            </h2>
            <Rule />
          </Reveal>
        </div>
      </section>

      {/* FEATURED ROOMS */}
      <section className="px-6 md:px-10 py-20 md:py-28" style={{ background: "#EFE6D6" }}>
        <div className="max-w-[1500px] mx-auto">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: C.gold, fontFamily: fMono }}>
                  — {tri("Rooms & Suites", "Zimmer & Suiten", "Chambres & Suites", lang)}
                </p>
                <h2 style={{ fontFamily: fHead, fontSize: "clamp(40px, 5.5vw, 80px)", lineHeight: 0.98, fontWeight: 400, letterSpacing: "-0.01em", color: C.dark , paddingBottom: "0.15em" }}>
                  {tri("Four rooms,", "Vier Zimmer,", "Quatre chambres,", lang)}<br />
                  <em style={{ fontStyle: "italic", color: C.gold }}>{tri("one harbour.", "ein Hafen.", "un port.", lang)}</em>
                </h2>
              </div>
              <Link href="/demos/hotel/rooms" className="text-[11px] tracking-[0.15em] uppercase inline-flex items-center gap-2 no-underline" style={{ color: C.dark, fontFamily: fMono }}>
                {tri("All rooms", "Alle Zimmer", "Toutes les chambres", lang)} <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {rooms.map((r, i) => (
              <Reveal key={r.slug} delay={(i % 2) * 0.1}>
                <Link href={`/demos/hotel/rooms/${r.slug}`} className="group block no-underline">
                  <div className="relative aspect-[4/3] overflow-hidden mb-5">
                    <Image
                      src={`/images/hotel/${r.images[0]}`}
                      alt={r.nameEn}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: C.gold, fontFamily: fMono }}>
                        — {r.num} · {r.view}
                      </p>
                      <h3 style={{ fontFamily: fHead, fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.05, fontWeight: 400, color: C.dark }}>
                        {tri(r.nameEn, r.nameDe, r.nameFr, lang)}
                      </h3>
                      <p className="mt-2 text-[14px] italic" style={{ color: C.muted, fontFamily: fHead }}>
                        {tri(r.shortEn, r.shortDe, r.shortFr, lang)}
                      </p>
                    </div>
                    <div className="text-right whitespace-nowrap">
                      <p className="text-[10px] tracking-wider uppercase" style={{ color: C.muted, fontFamily: fMono }}>
                        {tri("From", "Ab", "Dès", lang)}
                      </p>
                      <p style={{ fontFamily: fHead, fontSize: 22, color: C.gold, lineHeight: 1 }}>€ {r.price}</p>
                      <p className="text-[9px] mt-1" style={{ color: C.muted, fontFamily: fMono }}>/ {tri("night", "Nacht", "nuit", lang)}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS — alternating image/text */}
      <section className="py-28 md:py-36">
        <div className="max-w-[1500px] mx-auto">
          {pillars.map((p, i) => {
            const flipped = i % 2 === 1;
            return (
              <div key={p.num} className="px-6 md:px-10 py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
                  <Reveal className={`md:col-span-7 ${flipped ? "md:col-start-6 md:row-start-1" : ""}`}>
                    <div className="relative aspect-[4/3]">
                      <Image src={`/images/hotel/${p.img}`} alt={p.en.title} fill className="object-cover" />
                    </div>
                  </Reveal>
                  <Reveal delay={0.1} className={`md:col-span-4 ${flipped ? "md:col-start-2 md:row-start-1" : "md:col-start-9"}`}>
                    <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: C.gold, fontFamily: fMono }}>
                      — {p.num}
                    </p>
                    <h3 className="mb-5" style={{ fontFamily: fHead, fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1, fontWeight: 400, letterSpacing: "-0.01em", color: C.dark }}>
                      {tri(p.en.title, p.de.title, p.fr.title, lang)}
                    </h3>
                    <p className="text-[15px] leading-[1.85]" style={{ color: C.muted }}>
                      {tri(p.en.body, p.de.body, p.fr.body, lang)}
                    </p>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HARBOUR STRIP */}
      <section className="relative w-full h-[75vh] min-h-[520px] overflow-hidden">
        <Image src="/images/hotel/harbour-view.jpg" alt="Grand Harbour view" fill className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(14,26,43,0.2) 0%, rgba(14,26,43,0.55) 100%)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-10 pb-16 md:pb-24">
            <div className="max-w-[1500px] mx-auto text-center">
              <Reveal>
                <p className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: "#D4B878", fontFamily: fMono }}>
                  — {tri("The location", "Der Ort", "L'emplacement", lang)}
                </p>
                <p className="max-w-3xl mx-auto italic" style={{ fontFamily: fHead, fontSize: "clamp(26px, 3.5vw, 44px)", lineHeight: 1.25, color: "#F7F1E8" }}>
                  &ldquo;{tri(
                    "Triq San Pawl is the oldest street in Valletta. Our front door has been on it since 1897 — and the view from the back has been there for a lot longer.",
                    "Die Triq San Pawl ist die älteste Strasse Vallettas. Unsere Eingangstür ist seit 1897 dort — und der Blick von hinten schon deutlich länger.",
                    "La Triq San Pawl est la plus ancienne rue de Valletta. Notre porte d'entrée y est depuis 1897 — et la vue à l'arrière depuis bien plus longtemps.",
                    lang
                  )}&rdquo;
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PRESS / RECOGNITION */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1500px] mx-auto">
          <Reveal>
            <p className="text-[10px] tracking-[0.4em] uppercase mb-10 text-center" style={{ color: C.gold, fontFamily: fMono }}>
              — {tri("Recognition", "Anerkennung", "Reconnaissance", lang)}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6 text-center">
              {[
                { pub: "Condé Nast Traveler", note: tri("Gold List · 2024", "Gold List · 2024", "Gold List · 2024", lang) },
                { pub: "Travel + Leisure", note: tri("World's Best · 2023", "Worlds Best · 2023", "World's Best · 2023", lang) },
                { pub: "Monocle", note: tri("Top 50 Europe · 2024", "Top 50 Europa · 2024", "Top 50 Europe · 2024", lang) },
                { pub: "Financial Times", note: tri("Hotel of the Year · 2022", "Hotel des Jahres · 2022", "Hôtel de l'année · 2022", lang) },
              ].map((p) => (
                <div key={p.pub}>
                  <p style={{ fontFamily: fHead, fontSize: "clamp(22px, 2.4vw, 32px)", fontStyle: "italic", color: C.dark, fontWeight: 400 }}>
                    {p.pub}
                  </p>
                  <p className="text-[10px] tracking-wider uppercase mt-1" style={{ color: C.muted, fontFamily: fMono }}>
                    {p.note}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-32" style={{ background: C.navy, color: "#F7F1E8" }}>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="mb-8 flex justify-center" style={{ color: "#D4B878" }}>
              <Ornament size={48} />
            </div>
            <h2 className="mb-8" style={{ fontFamily: fHead, fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1, fontWeight: 400, letterSpacing: "-0.01em", color: "#F7F1E8" }}>
              {tri("Your room", "Ihr Zimmer", "Votre chambre", lang)}{" "}
              <em style={{ fontStyle: "italic", color: "#D4B878" }}>
                {tri("is waiting.", "wartet.", "vous attend.", lang)}
              </em>
            </h2>
            <p className="max-w-md mx-auto text-[15px] leading-relaxed mb-10 opacity-80">
              {tri(
                "We reply to every enquiry within the hour. No booking platforms, no bots, no automated upsells.",
                "Wir beantworten jede Anfrage innerhalb einer Stunde. Keine Plattformen, keine Bots, keine automatisierten Upsells.",
                "Nous répondons à chaque demande dans l'heure. Pas de plateformes, pas de bots, pas d'automatismes.",
                lang
              )}
            </p>
            <Link
              href="/demos/hotel/contact"
              className="inline-flex items-center gap-3 px-10 py-4 text-[11px] tracking-[0.2em] uppercase no-underline transition-opacity hover:opacity-90"
              style={{ background: "#D4B878", color: C.navy, fontFamily: fBody, fontWeight: 600 }}
            >
              {tri("Begin your stay", "Aufenthalt beginnen", "Commencer le séjour", lang)} →
            </Link>
          </Reveal>
        </div>
      </section>

      <HotelFooter />
    </div>
  );
}

export default function HotelHomePage() {
  return <HotelLangProvider><Inner /></HotelLangProvider>;
}
