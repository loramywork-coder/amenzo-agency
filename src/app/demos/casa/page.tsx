"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Star } from "lucide-react";
import {
  C, fHead, fBody, Reveal, OliveBranch, GoldDivider,
  CasaNav, CasaFooter, CasaLocaleProvider, useCasaLocale, bi,
} from "./_shared";

const featuredDishes = [
  { en: "Burrata & Peach", de: "Burrata & Pfirsich", img: "/images/casa/dish-burrata.jpg", price: "CHF 19", type: "Antipasti" },
  { en: "Pappardelle al Ragù", de: "Pappardelle al Ragù", img: "/images/casa/dish-pasta.jpg", price: "CHF 28", type: "Primi" },
  { en: "Branzino al Sale", de: "Branzino in Salzkruste", img: "/images/casa/dish-fish.jpg", price: "CHF 42", type: "Secondi" },
  { en: "Tiramisu della Casa", de: "Tiramisu des Hauses", img: "/images/casa/dish-tiramisu.jpg", price: "CHF 14", type: "Dolci" },
];

const testimonials = [
  {
    en: "Luca and Anna have built something genuinely special in Bern. The pappardelle was the best I've had outside of Bologna.",
    de: "Luca und Anna haben in Bern etwas wirklich Besonderes geschaffen. Die Pappardelle war die beste, die ich ausserhalb Bolognas hatte.",
    author: "NZZ am Sonntag",
  },
  {
    en: "An understated, confident Mediterranean kitchen. Every dish shows restraint and clarity. A regular in our rotation.",
    de: "Eine zurückhaltende, souveräne mediterrane Küche. Jedes Gericht zeigt Klarheit und Mass. Ein Fixpunkt bei uns.",
    author: "Gault Millau",
  },
  {
    en: "The wine list alone is worth the visit. Thoughtful small producers, mostly Italian, all under CHF 90.",
    de: "Schon allein die Weinkarte ist den Besuch wert. Durchdachte kleine Produzenten, mehrheitlich italienisch, alle unter CHF 90.",
    author: "Vinum Magazine",
  },
];

function CasaHomeInner() {
  const { locale } = useCasaLocale();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <CasaNav />

      {/* HERO */}
      <section className="relative w-full h-screen min-h-[680px] overflow-hidden">
        <Image src="/images/casa/hero.jpg" alt="Casa Luma interior" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,22,18,0.35) 0%, rgba(26,22,18,0.65) 100%)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-[#E9D9B8]"
          >
            <OliveBranch width={140} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[11px] md:text-[12px] tracking-[0.4em] uppercase mb-6"
            style={{ color: C.gold }}
          >
            {bi("Mediterranean Kitchen · Bern", "Mediterrane Küche · Bern", locale)}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="text-white max-w-4xl"
            style={{ fontFamily: fHead, fontSize: "clamp(48px, 9vw, 110px)", lineHeight: 0.98, letterSpacing: "-0.01em" }}
          >
            Casa{" "}
            <em style={{ color: C.gold, fontStyle: "italic" }}>Luma</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-8 max-w-lg text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            {bi(
              "A seasonal Mediterranean kitchen in the heart of Bern. Simple food, deep flavour, warm rooms.",
              "Eine saisonale mediterrane Küche im Herzen von Bern. Schlichte Gerichte, tiefer Geschmack, warme Räume.",
              locale
            )}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/demos/casa/contact"
              className="inline-flex items-center justify-center px-9 py-4 text-[12px] font-semibold tracking-wider uppercase no-underline transition-opacity hover:opacity-90"
              style={{ background: C.terra, color: C.bg, borderRadius: 2, fontFamily: fBody }}
            >
              {bi("Reserve a Table", "Tisch reservieren", locale)}
            </Link>
            <Link
              href="/demos/casa/menu"
              className="inline-flex items-center justify-center px-9 py-4 text-[12px] font-semibold tracking-wider uppercase no-underline"
              style={{
                border: "1px solid rgba(255,255,255,0.35)",
                color: "#fff",
                borderRadius: 2,
                fontFamily: fBody,
              }}
            >
              {bi("View Menu", "Zur Karte", locale)}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden" style={{ borderRadius: 2 }}>
              <Image src="/images/casa/founders.jpg" alt="Luca & Anna" fill className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase mb-5" style={{ color: C.terra }}>
                {bi("Our Story", "Unsere Geschichte", locale)}
              </p>
              <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, color: C.dark }}>
                {bi("Two cooks,", "Zwei Köche,", locale)}<br />
                <em style={{ color: C.terra, fontStyle: "italic" }}>{bi("one table.", "ein Tisch.", locale)}</em>
              </h2>
              <div className="mt-8 space-y-5 text-[15px] leading-[1.85]" style={{ color: C.muted }}>
                <p>
                  {bi(
                    "Luca grew up in a kitchen in Puglia. Anna learned to cook in her grandmother's house in Sicily. They met at Café des Amis in Geneva, worked four years together, and opened Casa Luma in Bern in 2018.",
                    "Luca wuchs in einer Küche in Apulien auf. Anna lernte das Kochen im Haus ihrer Grossmutter auf Sizilien. Sie trafen sich im Café des Amis in Genf, arbeiteten vier Jahre zusammen und eröffneten Casa Luma 2018 in Bern.",
                    locale
                  )}
                </p>
                <p>
                  {bi(
                    "The menu changes with what comes in. Fish from Guillaume in Sète. Olive oil from Anna's uncle in Trapani. Vegetables from farmers we've known for years. Everything else is made in-house.",
                    "Die Karte ändert sich mit dem, was hereinkommt. Fisch von Guillaume aus Sète. Olivenöl von Annas Onkel in Trapani. Gemüse von Bauern, die wir seit Jahren kennen. Alles andere wird im Haus gemacht.",
                    locale
                  )}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="px-6 md:px-10 py-24" style={{ background: "#F7EFE2" }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: C.terra }}>
                {bi("This Season", "Diese Saison", locale)}
              </p>
              <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, color: C.dark }}>
                {bi("From the kitchen.", "Aus der Küche.", locale)}
              </h2>
              <GoldDivider className="mt-6" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDishes.map((d, i) => (
              <Reveal key={d.en} delay={i * 0.08}>
                <div className="group">
                  <div className="relative aspect-[4/5] overflow-hidden mb-5" style={{ borderRadius: 2 }}>
                    <Image src={d.img} alt={bi(d.en, d.de, locale)} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: C.gold }}>
                    {d.type}
                  </p>
                  <h3 className="italic mb-2" style={{ fontFamily: fHead, fontSize: 24, color: C.dark, fontStyle: "italic" }}>
                    {bi(d.en, d.de, locale)}
                  </h3>
                  <p className="text-sm font-semibold" style={{ color: C.terra }}>
                    {d.price}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-14 text-center">
              <Link
                href="/demos/casa/menu"
                className="inline-flex items-center px-8 py-3.5 text-[12px] font-semibold tracking-wider uppercase no-underline"
                style={{ background: C.dark, color: C.bg, borderRadius: 2, fontFamily: fBody }}
              >
                {bi("See the full menu", "Ganze Karte ansehen", locale)} →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESERVATION STRIP */}
      <section className="relative px-6 md:px-10 py-24 overflow-hidden" style={{ background: C.dark, color: C.bg }}>
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/casa/reservation.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: C.gold }}>
              {bi("Reservations", "Reservieren", locale)}
            </p>
            <h2 className="mb-8" style={{ fontFamily: fHead, fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1.05, color: C.bg }}>
              {bi("Come for dinner.", "Kommen Sie zum Abendessen.", locale)}
            </h2>
            <p className="mb-10 max-w-lg mx-auto text-[15px] leading-relaxed opacity-75">
              {bi(
                "We take bookings up to 30 days in advance. Walk-ins welcome at the bar counter.",
                "Wir nehmen Reservierungen bis 30 Tage im Voraus. Walk-ins willkommen am Bartresen.",
                locale
              )}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="p-5 text-left" style={{ background: "rgba(255,251,245,0.05)", border: "1px solid rgba(255,251,245,0.12)", borderRadius: 2 }}>
                <label className="text-[10px] tracking-wider uppercase block mb-2" style={{ color: C.gold }}>
                  {bi("Date", "Datum", locale)}
                </label>
                <input
                  type="date"
                  className="w-full bg-transparent outline-none text-sm"
                  style={{ color: C.bg, colorScheme: "dark" }}
                />
              </div>
              <div className="p-5 text-left" style={{ background: "rgba(255,251,245,0.05)", border: "1px solid rgba(255,251,245,0.12)", borderRadius: 2 }}>
                <label className="text-[10px] tracking-wider uppercase block mb-2" style={{ color: C.gold }}>
                  {bi("Time", "Uhrzeit", locale)}
                </label>
                <input
                  type="time"
                  defaultValue="19:00"
                  className="w-full bg-transparent outline-none text-sm"
                  style={{ color: C.bg, colorScheme: "dark" }}
                />
              </div>
              <div className="p-5 text-left" style={{ background: "rgba(255,251,245,0.05)", border: "1px solid rgba(255,251,245,0.12)", borderRadius: 2 }}>
                <label className="text-[10px] tracking-wider uppercase block mb-2" style={{ color: C.gold }}>
                  {bi("Guests", "Gäste", locale)}
                </label>
                <select className="w-full bg-transparent outline-none text-sm" style={{ color: C.bg }}>
                  {[2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n} style={{ background: C.dark }}>
                      {n} {bi("guests", "Gäste", locale)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <Link
              href="/demos/casa/contact"
              className="mt-8 inline-flex items-center px-10 py-4 text-[12px] font-semibold tracking-wider uppercase no-underline transition-opacity hover:opacity-90"
              style={{ background: C.terra, color: C.bg, borderRadius: 2, fontFamily: fBody }}
            >
              {bi("Check Availability", "Verfügbarkeit prüfen", locale)} →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: C.terra }}>
                {bi("Press", "Presse", locale)}
              </p>
              <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, color: C.dark }}>
                {bi("What they said.", "Was die Presse sagt.", locale)}
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 0.1}>
                <div className="p-8" style={{ background: "#F7EFE2", borderRadius: 2 }}>
                  <div className="flex gap-1 mb-5">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} size={14} fill={C.gold} color={C.gold} />
                    ))}
                  </div>
                  <p className="italic text-[15px] leading-[1.8] mb-6" style={{ color: C.dark, fontFamily: fHead }}>
                    &ldquo;{bi(t.en, t.de, locale)}&rdquo;
                  </p>
                  <p className="text-[11px] tracking-wider uppercase font-semibold" style={{ color: C.terra }}>
                    — {t.author}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM STRIP */}
      <section className="px-6 md:px-10 py-20" style={{ background: C.dark }}>
        <div className="max-w-6xl mx-auto text-center mb-10">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-3" style={{ color: C.gold }}>
            @casaluma.bern
          </p>
          <h2 style={{ fontFamily: fHead, fontSize: "clamp(28px, 4vw, 42px)", color: C.bg }}>
            {bi("From our kitchen.", "Aus unserer Küche.", locale)}
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="relative aspect-square overflow-hidden" style={{ borderRadius: 2 }}>
              <Image src={`/images/casa/insta-${n}.jpg`} alt={`Instagram ${n}`} fill className="object-cover transition-transform duration-700 hover:scale-110" />
            </div>
          ))}
        </div>
      </section>

      <CasaFooter />
    </div>
  );
}

export default function CasaHomePage() {
  return (
    <CasaLocaleProvider>
      <CasaHomeInner />
    </CasaLocaleProvider>
  );
}
