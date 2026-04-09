"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { C, fHead, fBody, fMono, Reveal, Rule, HotelNav, HotelFooter, HotelLangProvider, useHotelLang, tri } from "../_shared";

const features = [
  {
    num: "I.",
    nameEn: "Rooftop Pool",
    nameDe: "Dachpool",
    nameFr: "Piscine sur le toit",
    descEn: "A fourteen-metre lap pool on the roof, facing the Three Cities. Open sunrise to midnight. Towels and fruit delivered poolside.",
    descDe: "Ein vierzehn Meter langer Pool auf dem Dach mit Blick auf die Drei Städte. Geöffnet vom Sonnenaufgang bis Mitternacht. Handtücher und Früchte am Beckenrand.",
    descFr: "Une piscine de quatorze mètres sur le toit, face aux Trois Cités. Ouverte du lever du jour à minuit. Serviettes et fruits servis au bord du bassin.",
    img: "spa-pool.jpg",
  },
  {
    num: "II.",
    nameEn: "Hammam & Steam",
    nameDe: "Hammam & Dampfbad",
    nameFr: "Hammam & bain de vapeur",
    descEn: "A traditional Turkish-style hammam, carved entirely from local limestone. Open to all guests. Treatments available on request.",
    descDe: "Ein traditioneller Hammam im türkischen Stil, vollständig aus lokalem Kalkstein gehauen. Für alle Gäste zugänglich. Behandlungen auf Anfrage.",
    descFr: "Un hammam traditionnel à la turque, entièrement taillé dans le calcaire local. Ouvert à tous les clients. Soins disponibles sur demande.",
    img: "spa-steam.jpg",
  },
  {
    num: "III.",
    nameEn: "Treatment Rooms",
    nameDe: "Behandlungsräume",
    nameFr: "Salles de soins",
    descEn: "Three treatment rooms on the sixth floor. Massages, facials, and body treatments by therapists trained in Lisbon and Istanbul.",
    descDe: "Drei Behandlungsräume im sechsten Stock. Massagen, Gesichts- und Körperbehandlungen von in Lissabon und Istanbul ausgebildeten Therapeuten.",
    descFr: "Trois salles de soins au sixième étage. Massages, soins du visage et du corps par des thérapeutes formées à Lisbonne et Istanbul.",
    img: "spa-treatment.jpg",
  },
  {
    num: "IV.",
    nameEn: "Fitness Room",
    nameDe: "Fitnessraum",
    nameFr: "Salle de sport",
    descEn: "A compact but fully equipped gym overlooking the harbour. Personal training sessions bookable at reception.",
    descDe: "Ein kompakter, aber vollständig ausgestatteter Fitnessraum mit Blick auf den Hafen. Personal Training an der Rezeption buchbar.",
    descFr: "Une salle de sport compacte mais complètement équipée avec vue sur le port. Séances de coaching réservables à la réception.",
    img: "spa-gym.jpg",
  },
];

const treatments = [
  { en: "Harbour Massage — 60min", de: "Hafen-Massage — 60min", fr: "Massage Port — 60min", price: "CHF 180" },
  { en: "Mediterranean Ritual — 90min", de: "Mittelmeer-Ritual — 90min", fr: "Rituel méditerranéen — 90min", price: "CHF 260" },
  { en: "Hammam Experience — 45min", de: "Hammam-Erlebnis — 45min", fr: "Expérience hammam — 45min", price: "CHF 140" },
  { en: "Facial Intensif — 75min", de: "Facial Intensif — 75min", fr: "Facial Intensif — 75min", price: "CHF 220" },
  { en: "Couples Retreat — 120min", de: "Paar-Retreat — 120min", fr: "Retraite couple — 120min", price: "CHF 480" },
];

function Inner() {
  const { lang } = useHotelLang();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HotelNav />

      <section className="relative w-full h-[60vh] min-h-[480px] overflow-hidden">
        <Image src="/images/hotel/spa-hero.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(14,26,43,0.3) 0%, rgba(14,26,43,0.6) 100%)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-10 pb-16">
            <div className="max-w-[1500px] mx-auto">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.25 }} className="text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color: "#D4B878", fontFamily: fMono }}>
                — {tri("Seventh Floor", "Siebtes Stockwerk", "Septième étage", lang)}
              </motion.p>
              <motion.h1
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 1, delay: 0.35, ease: [0.77, 0, 0.175, 1] }}
                className="max-w-4xl"
                style={{ fontFamily: fHead, fontSize: "clamp(48px, 8vw, 140px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.015em", color: "#F7F1E8" , paddingBottom: "0.15em" }}
              >
                {tri("Spa &", "Spa &", "Spa &", lang)}<br />
                <em style={{ fontStyle: "italic", color: "#D4B878" }}>{tri("Wellness", "Wellness", "Bien-être", lang)}</em>
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
                "Our spa occupies the entire seventh floor. Four rooms, one pool, one hammam, and a view that does most of the work.",
                "Unser Spa nimmt das gesamte siebte Stockwerk ein. Vier Räume, ein Pool, ein Hammam — und eine Aussicht, die den Grossteil der Arbeit erledigt.",
                "Notre spa occupe tout le septième étage. Quatre salles, une piscine, un hammam — et une vue qui fait la majeure partie du travail.",
                lang
              )}
            </p>
            <Rule className="mt-10" />
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[1500px] mx-auto space-y-24">
          {features.map((f, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={f.num}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
                  <div className={`md:col-span-7 ${flipped ? "md:col-start-6" : ""}`}>
                    <div className="relative aspect-[4/3]">
                      <Image src={`/images/hotel/${f.img}`} alt={f.nameEn} fill className="object-cover" />
                    </div>
                  </div>
                  <div className={`md:col-span-5 ${flipped ? "md:col-start-1 md:row-start-1" : ""}`}>
                    <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: C.gold, fontFamily: fMono }}>— {f.num}</p>
                    <h3 className="mb-5" style={{ fontFamily: fHead, fontSize: "clamp(32px, 4.5vw, 60px)", lineHeight: 1, fontWeight: 400, letterSpacing: "-0.01em", color: C.dark }}>
                      {tri(f.nameEn, f.nameDe, f.nameFr, lang)}
                    </h3>
                    <p className="text-[15px] leading-[1.85]" style={{ color: C.muted }}>
                      {tri(f.descEn, f.descDe, f.descFr, lang)}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Treatments menu */}
      <section className="px-6 md:px-10 py-24" style={{ background: "#EFE6D6" }}>
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: C.gold, fontFamily: fMono }}>
                — {tri("Signature treatments", "Signature-Behandlungen", "Soins signature", lang)}
              </p>
              <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1, fontWeight: 400, fontStyle: "italic", color: C.dark }}>
                {tri("The treatments.", "Die Behandlungen.", "Les soins.", lang)}
              </h2>
            </div>
          </Reveal>
          <ul className="space-y-5">
            {treatments.map((t, i) => (
              <Reveal key={t.en} delay={i * 0.04}>
                <li className="flex items-baseline gap-4" style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 14 }}>
                  <span className="italic flex-1" style={{ fontFamily: fHead, fontSize: 22, color: C.dark }}>
                    {tri(t.en, t.de, t.fr, lang)}
                  </span>
                  <span className="whitespace-nowrap" style={{ fontFamily: fMono, color: C.gold, fontSize: 14 }}>
                    {t.price}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
          <div className="text-center mt-14">
            <Link
              href="/demos/hotel/contact"
              className="inline-flex items-center px-9 py-4 text-[11px] tracking-[0.2em] uppercase no-underline"
              style={{ background: C.dark, color: C.bg, fontFamily: fBody, fontWeight: 600 }}
            >
              {tri("Book a treatment", "Behandlung buchen", "Réserver un soin", lang)}
            </Link>
          </div>
        </div>
      </section>

      <HotelFooter />
    </div>
  );
}

export default function HotelSpaPage() {
  return <HotelLangProvider><Inner /></HotelLangProvider>;
}
