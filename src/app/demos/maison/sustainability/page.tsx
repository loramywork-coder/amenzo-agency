"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { MaisonNav, MaisonFooter, MaisonLangProvider, useMaisonLang, tri, Reveal, C, fHead, fBody, fMono } from "../_shared";

const pillars = [
  {
    num: "01",
    en: { title: "Materials", body: "Only organic, recycled, or regeneratively farmed fibres. Every supplier certified GOTS, OEKO-TEX, or equivalent." },
    fr: { title: "Matériaux", body: "Uniquement des fibres biologiques, recyclées ou issues de l'agriculture régénératrice. Chaque fournisseur certifié GOTS, OEKO-TEX ou équivalent." },
    de: { title: "Materialien", body: "Nur biologische, recycelte oder regenerativ angebaute Fasern. Alle Lieferanten GOTS-, OEKO-TEX- oder gleichwertig zertifiziert." },
    img: "sustain-fabric.jpg",
  },
  {
    num: "02",
    en: { title: "Production", body: "All made in family-run ateliers in Portugal, Italy, and Scotland. Fair wages, short supply chains, no subcontracting." },
    fr: { title: "Production", body: "Fabriqué dans des ateliers familiaux au Portugal, en Italie et en Écosse. Salaires équitables, circuits courts, aucune sous-traitance." },
    de: { title: "Produktion", body: "Fertigung in familiengeführten Ateliers in Portugal, Italien und Schottland. Faire Löhne, kurze Lieferketten, keine Subunternehmen." },
    img: "sustain-production.jpg",
  },
  {
    num: "03",
    en: { title: "Packaging", body: "100% recycled cardboard, unbleached tissue, mushroom-based tape. No plastic anywhere." },
    fr: { title: "Emballage", body: "Carton 100% recyclé, papier de soie non blanchi, ruban à base de champignons. Aucun plastique nulle part." },
    de: { title: "Verpackung", body: "100% recycelter Karton, ungebleichtes Seidenpapier, Klebeband auf Pilzbasis. Kein Plastik." },
    img: "sustain-packaging.jpg",
  },
  {
    num: "04",
    en: { title: "Shipping", body: "Sea freight only. Carbon-offset ground delivery across Europe. We accept longer delivery times in exchange for cleaner logistics." },
    fr: { title: "Livraison", body: "Fret maritime uniquement. Livraison terrestre compensée en carbone dans toute l'Europe. Nous acceptons des délais plus longs pour une logistique plus propre." },
    de: { title: "Versand", body: "Nur Seefracht. CO2-kompensierte Landzustellung in ganz Europa. Wir akzeptieren längere Lieferzeiten für sauberere Logistik." },
    img: "sustain-dye.jpg",
  },
  {
    num: "05",
    en: { title: "Circularity", body: "Lifetime repairs on everything we make. Bring back a piece you no longer want and receive a 20% credit on your next order." },
    fr: { title: "Circularité", body: "Réparations à vie sur tout ce que nous fabriquons. Retournez une pièce et recevez un crédit de 20% sur votre prochaine commande." },
    de: { title: "Kreislaufwirtschaft", body: "Lebenslange Reparaturen auf alles, was wir machen. Geben Sie ein Stück zurück und erhalten Sie 20% Guthaben auf Ihre nächste Bestellung." },
    img: "sustain-cotton.jpg",
  },
];

const certs = ["B Corp", "GOTS", "OEKO-TEX", "PETA Approved", "Fair Trade"];

function Inner() {
  const { lang } = useMaisonLang();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <MaisonNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10 pb-16">
        <div className="max-w-[1600px] mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.muted, fontFamily: fMono }}>
            — {tri("Our Commitments", "Nos engagements", "Unser Versprechen", lang)}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="max-w-5xl" style={{ fontFamily: fHead, fontSize: "clamp(52px, 8vw, 140px)", lineHeight: 0.9, fontWeight: 400, letterSpacing: "-0.02em", color: C.dark }}>
            {tri("Made slowly,", "Fabriqué lentement,", "Langsam gemacht,", lang)}<br />
            <em style={{ fontStyle: "italic", color: C.gold }}>{tri("made honestly.", "fabriqué honnêtement.", "ehrlich gemacht.", lang)}</em>
          </motion.h1>
        </div>
      </section>

      {pillars.map((p, i) => {
        const flipped = i % 2 === 1;
        return (
          <section key={p.num} className="px-6 md:px-10 py-14 md:py-20">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
              <Reveal className={`md:col-span-7 ${flipped ? "md:col-start-6 md:row-start-1" : ""}`}>
                <div className="relative aspect-[4/3]">
                  <Image src={`/images/maison/${p.img}`} alt={p.en.title} fill className="object-cover" />
                </div>
              </Reveal>
              <Reveal delay={0.1} className={`md:col-span-4 ${flipped ? "md:col-start-2 md:row-start-1" : "md:col-start-9"}`}>
                <p className="text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: C.gold, fontFamily: fMono }}>— {p.num}</p>
                <h2 className="mb-5" style={{ fontFamily: fHead, fontSize: "clamp(30px, 3.8vw, 48px)", lineHeight: 1, fontWeight: 400, letterSpacing: "-0.015em", color: C.dark }}>
                  {tri(p.en.title, p.fr.title, p.de.title, lang)}
                </h2>
                <p className="text-[15px] leading-[1.8]" style={{ color: C.muted }}>
                  {tri(p.en.body, p.fr.body, p.de.body, lang)}
                </p>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* Certifications */}
      <section className="px-6 md:px-10 py-28" style={{ background: C.dark, color: "#E4DDD0" }}>
        <div className="max-w-[1600px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-8" style={{ color: C.gold, fontFamily: fMono }}>
            — {tri("Certified by", "Certifié par", "Zertifiziert durch", lang)}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            {certs.map((c) => (
              <span key={c} className="text-[22px] md:text-[28px] opacity-80" style={{ fontFamily: fHead, fontStyle: "italic", color: "#E4DDD0" }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <MaisonFooter />
    </div>
  );
}

export default function MaisonSustainabilityPage() {
  return <MaisonLangProvider><Inner /></MaisonLangProvider>;
}
