"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { C, fHead, fBody, fMono, Reveal, Rule, RestaurantNav, RestaurantFooter, RestaurantLangProvider, useRestaurantLang, tri } from "../_shared";

type Room = {
  name: { en: string; it: string; fr: string };
  seats: string;
  standing: string;
  blurb: { en: string; it: string; fr: string };
  image: string;
};

const rooms: Room[] = [
  {
    name: { en: "The Cellar", it: "La Cantina", fr: "La Cave" },
    seats: "14",
    standing: "22",
    blurb: {
      en: "Stone vaults below the dining room. Single table, one candle per guest. For the quietest occasions.",
      it: "Volte in pietra sotto la sala. Un unico tavolo, una candela per ospite. Per le occasioni più intime.",
      fr: "Voûtes en pierre sous la salle. Une seule table, une bougie par convive. Pour les moments les plus intimes.",
    },
    image: "/images/restaurant/wine-cellar.jpg",
  },
  {
    name: { en: "The Courtyard", it: "Il Cortile", fr: "La Cour" },
    seats: "32",
    standing: "55",
    blurb: {
      en: "Open to the sky in good weather, glass-covered in winter. Lemon trees along the walls.",
      it: "Aperto al cielo col bel tempo, coperto in vetro d'inverno. Limoni lungo le pareti.",
      fr: "Ouverte sur le ciel par beau temps, couverte en verre l'hiver. Citronniers le long des murs.",
    },
    image: "/images/restaurant/events-terrace.jpg",
  },
  {
    name: { en: "The Library", it: "La Biblioteca", fr: "La Bibliothèque" },
    seats: "20",
    standing: "30",
    blurb: {
      en: "Rocco's own cookbooks line the walls. A working fireplace from October through March.",
      it: "I libri di cucina di Rocco rivestono le pareti. Un camino funzionante da ottobre a marzo.",
      fr: "Les livres de cuisine de Rocco garnissent les murs. Cheminée allumée d'octobre à mars.",
    },
    image: "/images/restaurant/events-wedding.jpg",
  },
];

function Inner() {
  const { lang } = useRestaurantLang();
  return (
    <div style={{ background: C.bg, color: C.cream, fontFamily: fBody }}>
      <DemoBanner />
      <RestaurantNav />

      <section className="relative w-full h-[55vh] min-h-[440px] overflow-hidden">
        <Image src="/images/restaurant/events-private.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,9,8,0.4) 0%, rgba(11,9,8,0.85) 100%)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-10 pb-16">
            <div className="max-w-[1500px] mx-auto">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.25 }} className="text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color: C.copper, fontFamily: fMono }}>
                — {tri("Three rooms · one kitchen", "Tre sale · una cucina", "Trois salles · une cuisine", lang)}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35 }}
                className="max-w-4xl"
                style={{ fontFamily: fHead, fontSize: "clamp(52px, 9vw, 140px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.015em", color: C.cream, paddingBottom: "0.15em" }}
              >
                {tri("Private", "Eventi", "Privé", lang)}
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="italic text-[18px] md:text-[22px] leading-[1.5] mb-8" style={{ fontFamily: fHead, color: C.cream }}>
              {tri(
                "Weddings, birthdays, deals closed and deals mourned. The menu is written for your evening; the wine comes up from the cellar two days before.",
                "Matrimoni, compleanni, affari conclusi e affari piangíuti. Il menu è scritto per la vostra serata; il vino sale dalla cantina due giorni prima.",
                "Mariages, anniversaires, contrats signés et contrats enterrés. Le menu est écrit pour votre soirée ; le vin remonte de la cave deux jours avant.",
                lang
              )}
            </p>
            <Rule />
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-[1500px] mx-auto space-y-24">
          {rooms.map((r, i) => (
            <Reveal key={r.name.en}>
              <div className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="md:col-span-7">
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image src={r.image} alt="" fill className="object-cover" />
                  </div>
                </div>
                <div className="md:col-span-5">
                  <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: C.copper, fontFamily: fMono }}>
                    — 0{i + 1}
                  </p>
                  <h2 className="mb-6" style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1, fontWeight: 400, fontStyle: "italic", color: C.cream, paddingBottom: "0.1em" }}>
                    {tri(r.name.en, r.name.it, r.name.fr, lang)}
                  </h2>
                  <div className="flex gap-8 mb-6 text-[11px] tracking-wider uppercase" style={{ color: C.muted, fontFamily: fMono }}>
                    <div>
                      <p>{tri("Seated", "Seduti", "Assis", lang)}</p>
                      <p className="text-[24px] mt-1" style={{ color: C.copper, fontFamily: fHead, fontStyle: "italic" }}>{r.seats}</p>
                    </div>
                    <div>
                      <p>{tri("Standing", "In piedi", "Debout", lang)}</p>
                      <p className="text-[24px] mt-1" style={{ color: C.copper, fontFamily: fHead, fontStyle: "italic" }}>{r.standing}</p>
                    </div>
                  </div>
                  <p className="text-[15px] leading-[1.7]" style={{ color: "rgba(242,233,216,0.7)" }}>
                    {tri(r.blurb.en, r.blurb.it, r.blurb.fr, lang)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-24" style={{ background: C.surface }}>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: C.copper, fontFamily: fMono }}>
              — {tri("How it works", "Come funziona", "Comment ça marche", lang)}
            </p>
            <p className="italic text-[17px] md:text-[20px] leading-[1.6] mb-10" style={{ fontFamily: fHead, color: C.cream }}>
              {tri(
                "Write to Giulia. Tell her the occasion, the number, and anything you'd rather not eat. She'll send back a menu within two days.",
                "Scrivete a Giulia. Ditele l'occasione, il numero e ciò che preferite non mangiare. Vi risponderà con un menu entro due giorni.",
                "Écrivez à Giulia. Dites-lui l'occasion, le nombre, ce que vous préférez éviter. Elle vous renverra un menu sous deux jours.",
                lang
              )}
            </p>
            <a href="/demos/restaurant/contact" className="inline-block px-10 py-4 text-[11px] tracking-[0.3em] uppercase" style={{ background: C.copper, color: C.bg, fontFamily: fMono }}>
              {tri("Request a room", "Richiedi una sala", "Réserver une salle", lang)}
            </a>
          </Reveal>
        </div>
      </section>

      <RestaurantFooter />
    </div>
  );
}

export default function RestaurantPrivatePage() {
  return <RestaurantLangProvider><Inner /></RestaurantLangProvider>;
}
