"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { C, fHead, fBody, fMono, Reveal, Rule, RestaurantNav, RestaurantFooter, RestaurantLangProvider, useRestaurantLang, tri } from "../_shared";

const shots: { src: string; caption: { en: string; it: string; fr: string }; span?: string }[] = [
  { src: "/images/restaurant/kitchen-pass.jpg", caption: { en: "The pass at eight.", it: "Il passe alle otto.", fr: "Le passe à huit heures." }, span: "md:col-span-8 md:row-span-2" },
  { src: "/images/restaurant/gal-caprese.jpg", caption: { en: "Caprese, cured that morning.", it: "Caprese, preparata la mattina.", fr: "Caprese, préparée le matin." }, span: "md:col-span-4" },
  { src: "/images/restaurant/chef-portrait.jpg", caption: { en: "Rocco, between services.", it: "Rocco, tra un servizio e l'altro.", fr: "Rocco, entre deux services." }, span: "md:col-span-4" },
  { src: "/images/restaurant/wine-cellar.jpg", caption: { en: "The cellar door.", it: "La porta della cantina.", fr: "La porte de la cave." }, span: "md:col-span-5" },
  { src: "/images/restaurant/gal-bread.jpg", caption: { en: "Bread, before.", it: "Il pane, prima.", fr: "Le pain, avant." }, span: "md:col-span-7" },
  { src: "/images/restaurant/events-terrace.jpg", caption: { en: "Courtyard at dusk.", it: "Il cortile all'imbrunire.", fr: "La cour au crépuscule." }, span: "md:col-span-8" },
  { src: "/images/restaurant/gal-tiramisu.jpg", caption: { en: "The sixth course, plated.", it: "La sesta portata, impiattata.", fr: "Le sixième service, dressé." }, span: "md:col-span-4" },
  { src: "/images/restaurant/gal-oil.jpg", caption: { en: "Olive oil from Giulia's father.", it: "Olio dal padre di Giulia.", fr: "Huile d'olive du père de Giulia." }, span: "md:col-span-6" },
  { src: "/images/restaurant/table-candle.jpg", caption: { en: "After close.", it: "Dopo la chiusura.", fr: "Après la fermeture." }, span: "md:col-span-6" },
];

function Inner() {
  const { lang } = useRestaurantLang();
  return (
    <div style={{ background: C.bg, color: C.cream, fontFamily: fBody }}>
      <DemoBanner />
      <RestaurantNav />

      <section className="px-6 md:px-10 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1500px] mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: C.copper, fontFamily: fMono }}>
            — {tri("Photographs by Luca Cristaldi", "Fotografie di Luca Cristaldi", "Photographies de Luca Cristaldi", lang)}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="max-w-4xl"
            style={{ fontFamily: fHead, fontSize: "clamp(52px, 9vw, 140px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.015em", color: C.cream, paddingBottom: "0.15em" }}
          >
            {tri("Gallery", "Galleria", "Galerie", lang)}
          </motion.h1>
          <div className="mt-8 max-w-xl">
            <Rule />
            <p className="mt-8 text-[15px] leading-[1.7]" style={{ color: "rgba(242,233,216,0.7)" }}>
              {tri(
                "A year of service, in one evening's worth of frames.",
                "Un anno di servizio, in una serata di scatti.",
                "Une année de service, en une soirée de clichés.",
                lang
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid md:grid-cols-12 gap-4 md:gap-6 auto-rows-[220px] md:auto-rows-[280px]">
            {shots.map((s, i) => (
              <Reveal key={i} className={`${s.span || "md:col-span-4"} group relative overflow-hidden`}>
                <Image src={s.src} alt="" fill className="object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(180deg, rgba(11,9,8,0) 50%, rgba(11,9,8,0.85) 100%)" }} />
                <p className="absolute bottom-4 left-4 right-4 text-[11px] tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ color: C.cream, fontFamily: fMono }}>
                  {tri(s.caption.en, s.caption.it, s.caption.fr, lang)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <RestaurantFooter />
    </div>
  );
}

export default function RestaurantGalleryPage() {
  return <RestaurantLangProvider><Inner /></RestaurantLangProvider>;
}
