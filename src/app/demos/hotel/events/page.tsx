"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { C, fHead, fBody, fMono, Reveal, Rule, HotelNav, HotelFooter, HotelLangProvider, useHotelLang, tri } from "../_shared";

const spaces = [
  {
    nameEn: "The Grand Ballroom",
    nameDe: "Der Grosse Ballsaal",
    nameFr: "La Grande Salle",
    kindEn: "Weddings · Up to 120 seated",
    kindDe: "Hochzeiten · Bis 120 sitzend",
    kindFr: "Mariages · Jusqu'à 120 assis",
    descEn: "The original 1897 ballroom, fully restored in 2019. Vaulted stone ceilings, floor-to-ceiling windows overlooking the harbour, dance floor of Maltese limestone. Your wedding, your way — we host one wedding at a time.",
    descDe: "Der originale Ballsaal von 1897, 2019 vollständig restauriert. Gewölbte Steindecken, raumhohe Fenster zum Hafen, eine Tanzfläche aus maltesischem Kalkstein. Ihre Hochzeit, Ihr Weg — wir richten nur eine Hochzeit pro Tag aus.",
    descFr: "La salle de bal originale de 1897, entièrement restaurée en 2019. Plafonds voûtés en pierre, fenêtres du sol au plafond donnant sur le port, piste de danse en calcaire maltais. Votre mariage, votre façon — nous ne célébrons qu'un mariage à la fois.",
    img: "events-ballroom.jpg",
    statEn: "120 seated · 180 cocktail",
    statDe: "120 sitzend · 180 Cocktail",
    statFr: "120 assis · 180 cocktail",
  },
  {
    nameEn: "The Harbour Terrace",
    nameDe: "Die Hafenterrasse",
    nameFr: "La Terrasse du Port",
    kindEn: "Intimate gatherings · Up to 40 seated",
    kindDe: "Intime Anlässe · Bis 40 sitzend",
    kindFr: "Réceptions intimes · Jusqu'à 40 assis",
    descEn: "Our private rooftop terrace, reserved for small weddings, milestone birthdays, and intimate celebrations. Open-air dining under the stars, with the Grand Harbour as a backdrop.",
    descDe: "Unsere private Dachterrasse, reserviert für kleine Hochzeiten, runde Geburtstage und intime Feiern. Speisen unter freiem Himmel, mit dem Grand Harbour als Kulisse.",
    descFr: "Notre terrasse privée sur le toit, réservée aux petits mariages, anniversaires importants et célébrations intimes. Dîner en plein air sous les étoiles, avec le Grand Harbour en toile de fond.",
    img: "events-wedding.jpg",
    statEn: "40 seated · 60 cocktail",
    statDe: "40 sitzend · 60 Cocktail",
    statFr: "40 assis · 60 cocktail",
  },
  {
    nameEn: "The Library",
    nameDe: "Die Bibliothek",
    nameFr: "La Bibliothèque",
    kindEn: "Corporate meetings · Up to 24",
    kindDe: "Firmenanlässe · Bis 24",
    kindFr: "Réunions d'entreprise · Jusqu'à 24",
    descEn: "A wood-panelled library on the second floor with a single long table, natural light, and complete privacy. Perfect for executive retreats and intimate board meetings.",
    descDe: "Eine holzgetäfelte Bibliothek im zweiten Stock mit einem einzigen langen Tisch, natürlichem Licht und absoluter Privatsphäre. Ideal für Executive Retreats und kleine Vorstandssitzungen.",
    descFr: "Une bibliothèque lambrissée au deuxième étage avec une seule longue table, lumière naturelle et intimité totale. Parfait pour les retraites d'équipe dirigeante et les conseils d'administration.",
    img: "events-conference.jpg",
    statEn: "24 boardroom",
    statDe: "24 Boardroom",
    statFr: "24 salle de conseil",
  },
];

function Inner() {
  const { lang } = useHotelLang();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HotelNav />

      <section className="relative w-full h-[60vh] min-h-[480px] overflow-hidden">
        <Image src="/images/hotel/events-ballroom.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(14,26,43,0.35) 0%, rgba(14,26,43,0.65) 100%)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-10 pb-16">
            <div className="max-w-[1500px] mx-auto">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.25 }} className="text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color: "#D4B878", fontFamily: fMono }}>
                — {tri("Weddings & private events", "Hochzeiten & private Events", "Mariages & événements privés", lang)}
              </motion.p>
              <motion.h1
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 1, delay: 0.35, ease: [0.77, 0, 0.175, 1] }}
                className="max-w-4xl"
                style={{ fontFamily: fHead, fontSize: "clamp(48px, 8vw, 140px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.015em", color: "#F7F1E8" , paddingBottom: "0.15em" }}
              >
                {tri("Your day,", "Ihr Tag,", "Votre journée,", lang)}<br />
                <em style={{ fontStyle: "italic", color: "#D4B878" }}>{tri("here.", "hier.", "ici.", lang)}</em>
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[18px] md:text-[22px] leading-[1.7] italic" style={{ fontFamily: fHead, color: C.dark }}>
              {tri(
                "We host one wedding per weekend. One corporate retreat at a time. One milestone at a time. We are not an event factory — we are a house that opens its rooms to the right people.",
                "Wir richten eine Hochzeit pro Wochenende aus. Einen Firmenanlass zur gleichen Zeit. Einen Meilenstein nach dem anderen. Wir sind keine Event-Fabrik — wir sind ein Haus, das seine Räume für die richtigen Menschen öffnet.",
                "Nous accueillons un mariage par week-end. Une retraite d'entreprise à la fois. Un événement marquant à la fois. Nous ne sommes pas une usine à événements — nous sommes une maison qui ouvre ses pièces aux bonnes personnes.",
                lang
              )}
            </p>
            <Rule className="mt-10" />
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1500px] mx-auto space-y-24 md:space-y-32">
          {spaces.map((s, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={s.nameEn}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
                  <div className={`md:col-span-7 ${flipped ? "md:col-start-6" : ""}`}>
                    <div className="relative aspect-[4/3]">
                      <Image src={`/images/hotel/${s.img}`} alt={s.nameEn} fill className="object-cover" />
                    </div>
                  </div>
                  <div className={`md:col-span-5 ${flipped ? "md:col-start-1 md:row-start-1" : ""}`}>
                    <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: C.gold, fontFamily: fMono }}>
                      — {tri(s.kindEn, s.kindDe, s.kindFr, lang)}
                    </p>
                    <h3 className="mb-5" style={{ fontFamily: fHead, fontSize: "clamp(32px, 4vw, 54px)", lineHeight: 1.02, fontWeight: 400, letterSpacing: "-0.01em", color: C.dark }}>
                      {tri(s.nameEn, s.nameDe, s.nameFr, lang)}
                    </h3>
                    <p className="text-[15px] leading-[1.85] mb-6" style={{ color: C.muted }}>
                      {tri(s.descEn, s.descDe, s.descFr, lang)}
                    </p>
                    <p className="text-[11px] tracking-wider uppercase mb-6" style={{ color: C.gold, fontFamily: fMono }}>
                      {tri(s.statEn, s.statDe, s.statFr, lang)}
                    </p>
                    <Link
                      href="/demos/hotel/contact"
                      className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase no-underline"
                      style={{ color: C.dark, fontFamily: fMono, borderBottom: `1px solid ${C.gold}`, paddingBottom: 3 }}
                    >
                      {tri("Enquire", "Anfragen", "Se renseigner", lang)} →
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <HotelFooter />
    </div>
  );
}

export default function HotelEventsPage() {
  return <HotelLangProvider><Inner /></HotelLangProvider>;
}
