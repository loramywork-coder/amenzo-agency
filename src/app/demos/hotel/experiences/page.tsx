"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { C, fHead, fBody, fMono, Reveal, Rule, HotelNav, HotelFooter, HotelLangProvider, useHotelLang, tri } from "../_shared";

const experiences = [
  {
    nameEn: "A day on the water",
    nameDe: "Ein Tag auf dem Wasser",
    nameFr: "Une journée en mer",
    typeEn: "Private yacht charter · 8 hours",
    typeDe: "Private Yachtcharter · 8 Stunden",
    typeFr: "Charter yacht privé · 8 heures",
    descEn: "We arrange a skipper, a hand-built wooden boat, lunch from Porto Nero, and a route around Gozo's hidden coves. Half- and full-day options.",
    descDe: "Wir organisieren Skipper, ein handgebautes Holzboot, Lunch aus dem Porto Nero und eine Route um Gozos versteckte Buchten. Halb- und Ganztagesoptionen.",
    descFr: "Nous organisons un skipper, un bateau en bois artisanal, un déjeuner de Porto Nero et un itinéraire autour des criques cachées de Gozo. Demi-journée ou journée complète.",
    priceEn: "From CHF 1,400",
    priceDe: "Ab CHF 1.400",
    priceFr: "Dès CHF 1 400",
    img: "exp-yacht.jpg",
  },
  {
    nameEn: "Valletta, slowly",
    nameDe: "Valletta, in Ruhe",
    nameFr: "Valletta, lentement",
    typeEn: "Private city walk · 3 hours",
    typeDe: "Private Stadtführung · 3 Stunden",
    typeFr: "Visite privée de la ville · 3 heures",
    descEn: "A three-hour walking tour of old Valletta with a historian who has written three books on the city. You will see corners most guides never reach.",
    descDe: "Ein dreistündiger Spaziergang durch das alte Valletta mit einem Historiker, der drei Bücher über die Stadt geschrieben hat. Sie sehen Ecken, die den meisten Führern entgehen.",
    descFr: "Une promenade de trois heures dans la vieille Valletta avec un historien qui a écrit trois livres sur la ville. Vous découvrirez des coins que la plupart des guides ignorent.",
    priceEn: "CHF 320 · 1–4 people",
    priceDe: "CHF 320 · 1–4 Personen",
    priceFr: "CHF 320 · 1 à 4 personnes",
    img: "exp-city.jpg",
  },
  {
    nameEn: "Meridiana estate",
    nameDe: "Meridiana-Weingut",
    nameFr: "Domaine Meridiana",
    typeEn: "Vineyard visit & tasting · Afternoon",
    typeDe: "Weingutsbesuch & Verkostung · Nachmittag",
    typeFr: "Visite du vignoble & dégustation · Après-midi",
    descEn: "A private visit to Malta's best-known winery, forty minutes from the hotel. Eight wines, a tour of the cellars, cheese from a local farm.",
    descDe: "Ein privater Besuch des bekanntesten Weinguts Maltas, vierzig Minuten vom Hotel entfernt. Acht Weine, eine Kellerführung, Käse von einem lokalen Hof.",
    descFr: "Une visite privée du domaine le plus réputé de Malte, à quarante minutes de l'hôtel. Huit vins, visite des caves, fromages d'une ferme locale.",
    priceEn: "CHF 220 per person",
    priceDe: "CHF 220 pro Person",
    priceFr: "CHF 220 par personne",
    img: "exp-vineyard.jpg",
  },
  {
    nameEn: "Blue Hole diving",
    nameDe: "Blue Hole Tauchen",
    nameFr: "Plongée au Blue Hole",
    typeEn: "Guided dive · Gozo",
    typeDe: "Geführter Tauchgang · Gozo",
    typeFr: "Plongée guidée · Gozo",
    descEn: "A guided dive at the Blue Hole in Dwejra, one of the Mediterranean's most photographed dive sites. PADI certification required.",
    descDe: "Ein geführter Tauchgang am Blue Hole in Dwejra, einer der meistfotografierten Tauchstellen des Mittelmeers. PADI-Zertifikat erforderlich.",
    descFr: "Une plongée guidée au Blue Hole de Dwejra, l'un des sites de plongée les plus photographiés de Méditerranée. Certification PADI requise.",
    priceEn: "CHF 180 · equipment included",
    priceDe: "CHF 180 · Ausrüstung inklusive",
    priceFr: "CHF 180 · équipement inclus",
    img: "exp-diving.jpg",
  },
  {
    nameEn: "In the kitchen with Stefano",
    nameDe: "In der Küche mit Stefano",
    nameFr: "En cuisine avec Stefano",
    typeEn: "Cooking class · 4 hours",
    typeDe: "Kochkurs · 4 Stunden",
    typeFr: "Cours de cuisine · 4 heures",
    descEn: "Chef Stefano takes four guests into the Porto Nero kitchen for a four-hour class. Market visit, three-course cook-along, wine, and you eat what you make.",
    descDe: "Chef Stefano nimmt vier Gäste für einen vierstündigen Kurs in die Porto-Nero-Küche. Marktbesuch, dreigängiges Cook-along, Wein — Sie essen, was Sie kochen.",
    descFr: "Le chef Stefano accueille quatre invités dans la cuisine de Porto Nero pour un cours de quatre heures. Visite du marché, cours en trois services, vin — vous mangez ce que vous préparez.",
    priceEn: "CHF 280 per person",
    priceDe: "CHF 280 pro Person",
    priceFr: "CHF 280 par personne",
    img: "exp-cooking.jpg",
  },
];

function Inner() {
  const { lang } = useHotelLang();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HotelNav />

      <section className="relative w-full h-[60vh] min-h-[480px] overflow-hidden">
        <Image src="/images/hotel/exp-yacht.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(14,26,43,0.3) 0%, rgba(14,26,43,0.6) 100%)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-10 pb-16">
            <div className="max-w-[1500px] mx-auto">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.25 }} className="text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color: "#D4B878", fontFamily: fMono }}>
                — {tri("Curated by the concierge", "Vom Concierge kuratiert", "Sélectionnées par la conciergerie", lang)}
              </motion.p>
              <motion.h1
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 1, delay: 0.35, ease: [0.77, 0, 0.175, 1] }}
                className="max-w-4xl"
                style={{ fontFamily: fHead, fontSize: "clamp(48px, 8vw, 140px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.015em", color: "#F7F1E8" , paddingBottom: "0.15em" }}
              >
                <em style={{ fontStyle: "italic", color: "#D4B878" }}>{tri("Experiences", "Erlebnisse", "Expériences", lang)}</em>
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
                "We have spent the past thirty years finding the people on this island worth knowing. When you stay with us, you meet them.",
                "Wir haben die letzten dreissig Jahre damit verbracht, die Menschen auf dieser Insel zu finden, die man kennen muss. Wenn Sie bei uns wohnen, lernen Sie sie kennen.",
                "Nous avons passé les trente dernières années à rencontrer les gens qui valent la peine sur cette île. Quand vous séjournez chez nous, vous les rencontrez.",
                lang
              )}
            </p>
            <Rule className="mt-10" />
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1500px] mx-auto space-y-24 md:space-y-32">
          {experiences.map((e, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={e.nameEn}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
                  <div className={`md:col-span-7 ${flipped ? "md:col-start-6" : ""}`}>
                    <div className="relative aspect-[4/3]">
                      <Image src={`/images/hotel/${e.img}`} alt={e.nameEn} fill className="object-cover" />
                    </div>
                  </div>
                  <div className={`md:col-span-5 ${flipped ? "md:col-start-1 md:row-start-1" : ""}`}>
                    <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: C.gold, fontFamily: fMono }}>
                      — {tri(e.typeEn, e.typeDe, e.typeFr, lang)}
                    </p>
                    <h3 className="mb-5" style={{ fontFamily: fHead, fontSize: "clamp(32px, 4vw, 54px)", lineHeight: 1.02, fontWeight: 400, letterSpacing: "-0.01em", color: C.dark }}>
                      {tri(e.nameEn, e.nameDe, e.nameFr, lang)}
                    </h3>
                    <p className="text-[15px] leading-[1.85] mb-6" style={{ color: C.muted }}>
                      {tri(e.descEn, e.descDe, e.descFr, lang)}
                    </p>
                    <p className="text-[11px] tracking-wider uppercase mb-6" style={{ color: C.gold, fontFamily: fMono }}>
                      {tri(e.priceEn, e.priceDe, e.priceFr, lang)}
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

export default function HotelExperiencesPage() {
  return <HotelLangProvider><Inner /></HotelLangProvider>;
}
