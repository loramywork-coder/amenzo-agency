"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { C, fHead, fBody, fMono, Reveal, Rule, HotelNav, HotelFooter, HotelLangProvider, useHotelLang, tri } from "../_shared";

const venues = [
  {
    num: "I.",
    nameEn: "Porto Nero",
    nameDe: "Porto Nero",
    nameFr: "Porto Nero",
    typeEn: "Fine Dining · Ground Floor",
    typeDe: "Feinschmeckerlokal · Erdgeschoss",
    typeFr: "Gastronomique · Rez-de-chaussée",
    descEn: "Our signature restaurant, set in the original 1897 dining hall with vaulted stone ceilings. A six-course tasting menu built around the morning's catch from Marsaxlokk. Chef Stefano Busuttil (ex-Noma).",
    descDe: "Unser Flaggschiff-Restaurant im originalen Speisesaal von 1897 mit Gewölbedecken. Ein Sechs-Gang-Degustationsmenü rund um den morgendlichen Fang aus Marsaxlokk. Chef Stefano Busuttil (ex-Noma).",
    descFr: "Notre restaurant signature, dans la salle d'origine de 1897 aux voûtes de pierre. Un menu dégustation en six services autour de la pêche matinale de Marsaxlokk. Chef Stefano Busuttil (ex-Noma).",
    hoursEn: "Dinner only · 19:00 – 23:00 · Closed Sunday",
    hoursDe: "Nur Abendessen · 19:00 – 23:00 · Sonntags geschlossen",
    hoursFr: "Dîner uniquement · 19h00 – 23h00 · Fermé le dimanche",
    priceEn: "Tasting menu CHF 165 · Wine pairing CHF 95",
    priceDe: "Degustationsmenü CHF 165 · Weinbegleitung CHF 95",
    priceFr: "Menu dégustation CHF 165 · Accords mets & vins CHF 95",
    img: "dining-restaurant.jpg",
  },
  {
    num: "II.",
    nameEn: "The Lookout",
    nameDe: "The Lookout",
    nameFr: "The Lookout",
    typeEn: "Rooftop Bar & Grill · Seventh Floor",
    typeDe: "Dachbar & Grill · Siebtes Stockwerk",
    typeFr: "Bar panoramique & grill · Septième étage",
    descEn: "A casual all-day terrace on the roof. Grilled fish, good wine, negronis, and a sunset over the Three Cities that is genuinely hard to beat. Walk-ins welcome at the bar.",
    descDe: "Eine entspannte Ganztagesterrasse auf dem Dach. Gegrillter Fisch, guter Wein, Negronis und ein Sonnenuntergang über den Drei Städten, der schwer zu überbieten ist. Walk-ins an der Bar willkommen.",
    descFr: "Une terrasse décontractée ouverte toute la journée sur le toit. Poisson grillé, bons vins, negronis, et un coucher de soleil sur les Trois Cités difficile à égaler. Walk-ins bienvenus au bar.",
    hoursEn: "All day · 11:00 – 01:00",
    hoursDe: "Den ganzen Tag · 11:00 – 01:00",
    hoursFr: "Toute la journée · 11h00 – 01h00",
    priceEn: "À la carte · Mains from CHF 28",
    priceDe: "À la carte · Hauptgerichte ab CHF 28",
    priceFr: "À la carte · Plats dès CHF 28",
    img: "dining-rooftop.jpg",
  },
];

const dishes = [
  { en: "Lampuki & aged tomato", de: "Lampuki & gereifte Tomate", fr: "Lampuki & tomate confite", price: "—" },
  { en: "Hand-rolled ravjul with ricotta", de: "Handgemachte Ravjul mit Ricotta", fr: "Ravjul maison à la ricotta", price: "—" },
  { en: "Fenek stew, Maltese style", de: "Fenek-Eintopf nach maltesischer Art", fr: "Ragoût de lapin à la maltaise", price: "—" },
  { en: "Whole branzino in sea salt", de: "Ganzer Wolfsbarsch in Meersalz", fr: "Loup de mer entier en croûte de sel", price: "—" },
  { en: "Figolla with almond paste", de: "Figolla mit Mandelpaste", fr: "Figolla à la pâte d'amande", price: "—" },
  { en: "Gbejniet — Gozo sheep's cheese", de: "Gbejniet — Schafskäse aus Gozo", fr: "Gbejniet — fromage de brebis de Gozo", price: "—" },
];

function Inner() {
  const { lang } = useHotelLang();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HotelNav />

      {/* Hero */}
      <section className="relative w-full h-[60vh] min-h-[480px] overflow-hidden">
        <Image src="/images/hotel/dining-dish.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(14,26,43,0.3) 0%, rgba(14,26,43,0.6) 100%)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-10 pb-16">
            <div className="max-w-[1500px] mx-auto">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.25 }} className="text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color: "#D4B878", fontFamily: fMono }}>
                — {tri("Two kitchens", "Zwei Küchen", "Deux cuisines", lang)}
              </motion.p>
              <motion.h1
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 1, delay: 0.35, ease: [0.77, 0, 0.175, 1] }}
                className="max-w-4xl"
                style={{ fontFamily: fHead, fontSize: "clamp(48px, 8vw, 140px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.015em", color: "#F7F1E8" , paddingBottom: "0.15em" }}
              >
                {tri("Dining", "Restaurant", "Restaurant", lang)}
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 md:px-10 py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[18px] md:text-[22px] leading-[1.7] italic" style={{ fontFamily: fHead, color: C.dark }}>
              {tri(
                "Two rooms, one kitchen team, one idea: Mediterranean food that tastes like the place it came from. We buy from four farms and three fishermen. We cook what they bring us.",
                "Zwei Räume, ein Küchenteam, eine Idee: mediterrane Küche, die nach dem Ort schmeckt, aus dem sie kommt. Wir beziehen von vier Bauernhöfen und drei Fischern. Wir kochen, was sie uns bringen.",
                "Deux salles, une équipe de cuisine, une idée : une cuisine méditerranéenne qui a le goût du lieu dont elle est issue. Nous achetons auprès de quatre fermes et trois pêcheurs. Nous cuisinons ce qu'ils nous apportent.",
                lang
              )}
            </p>
            <Rule className="mt-10" />
          </Reveal>
        </div>
      </section>

      {/* Venues */}
      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1500px] mx-auto space-y-28 md:space-y-36">
          {venues.map((v, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={v.nameEn}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
                  <div className={`md:col-span-7 ${flipped ? "md:col-start-6" : ""}`}>
                    <div className="relative aspect-[4/3]">
                      <Image src={`/images/hotel/${v.img}`} alt={v.nameEn} fill className="object-cover" />
                    </div>
                  </div>
                  <div className={`md:col-span-5 ${flipped ? "md:col-start-1 md:row-start-1" : ""}`}>
                    <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: C.gold, fontFamily: fMono }}>
                      — {v.num} · {tri(v.typeEn, v.typeDe, v.typeFr, lang)}
                    </p>
                    <h2 className="mb-6" style={{ fontFamily: fHead, fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1, fontWeight: 400, letterSpacing: "-0.01em", color: C.dark }}>
                      {tri(v.nameEn, v.nameDe, v.nameFr, lang)}
                    </h2>
                    <p className="text-[15px] leading-[1.85] mb-8" style={{ color: C.muted }}>
                      {tri(v.descEn, v.descDe, v.descFr, lang)}
                    </p>
                    <div className="space-y-3 text-[12px] tracking-wider uppercase" style={{ fontFamily: fMono }}>
                      <div className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rotate-45 mt-1.5 shrink-0" style={{ background: C.gold }} />
                        <span style={{ color: C.dark }}>{tri(v.hoursEn, v.hoursDe, v.hoursFr, lang)}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rotate-45 mt-1.5 shrink-0" style={{ background: C.gold }} />
                        <span style={{ color: C.dark }}>{tri(v.priceEn, v.priceDe, v.priceFr, lang)}</span>
                      </div>
                    </div>
                    <Link
                      href="/demos/hotel/contact"
                      className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase no-underline"
                      style={{ color: C.dark, fontFamily: fMono, borderBottom: `1px solid ${C.gold}`, paddingBottom: 3 }}
                    >
                      {tri("Book a table", "Tisch reservieren", "Réserver une table", lang)} →
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Sample menu */}
      <section className="px-6 md:px-10 py-24" style={{ background: "#EFE6D6" }}>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: C.gold, fontFamily: fMono }}>
              — {tri("From our kitchen", "Aus unserer Küche", "De notre cuisine", lang)}
            </p>
            <h2 className="mb-14" style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1, fontWeight: 400, fontStyle: "italic", color: C.dark }}>
              {tri("What we might be cooking.", "Was wir vielleicht kochen.", "Ce que nous pourrions cuisiner.", lang)}
            </h2>
          </Reveal>
          <ul className="space-y-5 text-left">
            {dishes.map((d, i) => (
              <Reveal key={d.en} delay={i * 0.05}>
                <li className="flex items-baseline gap-4" style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 14 }}>
                  <span className="italic" style={{ fontFamily: fHead, fontSize: 22, color: C.dark }}>
                    {tri(d.en, d.de, d.fr, lang)}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
          <p className="mt-10 text-[12px] tracking-wider uppercase italic" style={{ color: C.muted, fontFamily: fMono }}>
            {tri(
              "Menu changes daily. Always ask your waiter what came in this morning.",
              "Die Karte wechselt täglich. Fragen Sie den Service, was heute Morgen hereinkam.",
              "La carte change chaque jour. Demandez au serveur ce qui est arrivé ce matin.",
              lang
            )}
          </p>
        </div>
      </section>

      <HotelFooter />
    </div>
  );
}

export default function HotelDiningPage() {
  return <HotelLangProvider><Inner /></HotelLangProvider>;
}
