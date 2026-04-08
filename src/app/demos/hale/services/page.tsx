"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { C, fHead, fBody, fMono, Reveal, Rule, HaleNav, HaleFooter, HaleLangProvider, useHaleLang, tri, projects } from "../_shared";

const services = [
  {
    num: "01",
    en: { title: "Residential Architecture", body: "Private homes, renovations, and multi-family buildings. From villa commissions to alpine retreats. Full RIBA Plan of Work 0–7 delivery." },
    de: { title: "Wohnbau", body: "Einzelhäuser, Renovationen, Mehrfamilienhäuser. Von Villen bis zu alpinen Refugien. Komplette SIA-Leistungsphasen 0–7." },
    fr: { title: "Architecture résidentielle", body: "Maisons privées, rénovations, immeubles résidentiels. Des villas aux refuges alpins. Prestations SIA 0–7 complètes." },
    example: "haus-alpenblick",
  },
  {
    num: "02",
    en: { title: "Commercial & Adaptive Reuse", body: "Offices, retail, and restoration of historic fabric. We specialise in bringing industrial buildings back to life." },
    de: { title: "Gewerbe & Umnutzung", body: "Büros, Verkauf, Umnutzung historischer Substanz. Wir sind auf die Reanimation von Industriebauten spezialisiert." },
    fr: { title: "Commercial & réhabilitation", body: "Bureaux, commerces, restauration du patrimoine industriel. Nous sommes spécialisés dans la réanimation de bâtiments industriels." },
    example: "volta-office",
  },
  {
    num: "03",
    en: { title: "Interior Architecture", body: "Full interior design from spatial planning to custom joinery. Hospitality, retail, and residential." },
    de: { title: "Innenarchitektur", body: "Innenausbau von der Raumplanung bis zum Massmöbel. Hotellerie, Retail, Privat." },
    fr: { title: "Architecture d'intérieur", body: "Aménagement intérieur complet, de la planification spatiale au mobilier sur mesure. Hôtellerie, retail, résidentiel." },
    example: "atelier-blanc",
  },
  {
    num: "04",
    en: { title: "Landscape & Urban Design", body: "Gardens, courtyards, and public realm. Always in dialogue with the buildings they surround." },
    de: { title: "Landschaft & Freiraum", body: "Gärten, Höfe, öffentlicher Raum. Immer im Dialog mit den Bauten, die sie umgeben." },
    fr: { title: "Paysage & espaces publics", body: "Jardins, cours, espaces publics. Toujours en dialogue avec les bâtiments qu'ils entourent." },
    example: "jardin-carouge",
  },
  {
    num: "05",
    en: { title: "Strategy & Consulting", body: "Feasibility studies, site analysis, briefing support. For clients who need architectural thinking before they know what they're building." },
    de: { title: "Strategie & Beratung", body: "Machbarkeitsstudien, Standortanalysen, Bedarfsplanung. Für Auftraggeber, die architektonisches Denken brauchen, bevor sie wissen, was gebaut wird." },
    fr: { title: "Stratégie & conseil", body: "Études de faisabilité, analyses de site, soutien au brief. Pour les clients qui ont besoin d'une réflexion architecturale avant de savoir ce qu'ils construisent." },
    example: null,
  },
];

function Inner() {
  const { lang } = useHaleLang();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HaleNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10 pb-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.grey, fontFamily: fMono }}>
            — {tri("Services", "Leistungen", "Services", lang)} / 05
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} style={{ fontFamily: fHead, fontSize: "clamp(48px, 8vw, 130px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.02em", color: C.dark }}>
            {tri("What we do.", "Was wir tun.", "Ce que nous faisons.", lang)}
          </motion.h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <Rule className="opacity-25" />
          {services.map((s, i) => {
            const example = s.example ? projects.find((p) => p.slug === s.example) : null;
            return (
              <Reveal key={s.num} delay={i * 0.04}>
                <div className="grid grid-cols-12 gap-4 md:gap-8 py-12 md:py-16" style={{ borderBottom: `1px solid ${C.border}` }}>
                  <div className="col-span-12 md:col-span-1">
                    <p style={{ fontFamily: fMono, color: C.grey, fontSize: 12 }}>— {s.num}</p>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <h2 style={{ fontFamily: fHead, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.02, fontWeight: 400, letterSpacing: "-0.015em", color: C.dark }}>
                      {tri(s.en.title, s.de.title, s.fr.title, lang)}
                    </h2>
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <p className="text-[15px] leading-[1.8]" style={{ color: C.grey }}>
                      {tri(s.en.body, s.de.body, s.fr.body, lang)}
                    </p>
                    {example && (
                      <Link
                        href={`/demos/hale/projects/${example.slug}`}
                        className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-wider uppercase no-underline"
                        style={{ color: C.dark, fontFamily: fMono }}
                      >
                        {tri("See example", "Beispiel ansehen", "Voir exemple", lang)} → {tri(example.titleEn, example.titleDe, example.titleFr, lang)}
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <HaleFooter />
    </div>
  );
}

export default function HaleServicesPage() {
  return <HaleLangProvider><Inner /></HaleLangProvider>;
}
