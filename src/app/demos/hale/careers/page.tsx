"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { C, fHead, fBody, fMono, Reveal, Rule, HaleNav, HaleFooter, HaleLangProvider, useHaleLang, tri } from "../_shared";

const positions = [
  {
    en: { title: "Senior Architect", type: "Full-time · Zürich", body: "5+ years of experience in residential and commercial architecture. Fluent in Revit and Vectorworks. You will lead two project teams from concept through to site." },
    de: { title: "Senior-Architekt:in", type: "Vollzeit · Zürich", body: "5+ Jahre Erfahrung in Wohn- und Gewerbebau. Sicher in Revit und Vectorworks. Sie leiten zwei Projektteams vom Konzept bis zur Baustelle." },
    fr: { title: "Architecte senior", type: "Temps plein · Zurich", body: "5+ ans d'expérience en architecture résidentielle et commerciale. Maîtrise de Revit et Vectorworks. Vous dirigerez deux équipes de projet, du concept au chantier." },
  },
  {
    en: { title: "Interior Designer", type: "Full-time · Zürich", body: "3+ years working on high-end residential and hospitality interiors. Drawing by hand is welcome. Rendering is not required." },
    de: { title: "Innenarchitekt:in", type: "Vollzeit · Zürich", body: "3+ Jahre in hochwertigen Wohn- und Hospitality-Innenräumen. Handzeichnung willkommen. Rendering nicht erforderlich." },
    fr: { title: "Architecte d'intérieur", type: "Temps plein · Zurich", body: "3+ ans en intérieurs résidentiels et hôteliers haut de gamme. Le dessin à main levée est bienvenu. Le rendu n'est pas requis." },
  },
];

function Inner() {
  const { lang } = useHaleLang();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HaleNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.grey, fontFamily: fMono }}>
            — {tri("Careers", "Karriere", "Carrières", lang)}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="max-w-4xl" style={{ fontFamily: fHead, fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.02em" }}>
            {tri("Join a small studio", "Mitarbeit in einem kleinen Büro", "Rejoindre un petit studio", lang)}<br />
            <em style={{ fontStyle: "italic" }}>{tri("drawing every detail.", "das jedes Detail zeichnet.", "qui dessine chaque détail.", lang)}</em>
          </motion.h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-7 md:col-start-6">
            <div className="space-y-5 text-[16px] leading-[1.8]" style={{ color: C.grey }}>
              <p>
                {tri(
                  "We hire rarely, and only when the next person will genuinely change the studio. Everyone here works across scales — from 1:5 details to master plans. There are no pure rendering roles, no junior-only positions, no 'you'll get there in five years' conversations.",
                  "Wir stellen selten ein — und nur, wenn die nächste Person das Büro wirklich verändert. Alle hier arbeiten massstabübergreifend — vom Detail 1:5 bis zum Masterplan. Keine reinen Rendering-Stellen, keine Junior-Positionen, keine 'In fünf Jahren bist du so weit'-Gespräche.",
                  "Nous recrutons rarement, et seulement quand la personne suivante changera vraiment le studio. Tout le monde ici travaille à toutes les échelles — du détail 1:5 au plan directeur. Pas de postes purement de rendu, pas de poste junior uniquement, pas de promesses à cinq ans.",
                  lang
                )}
              </p>
              <p>
                {tri(
                  "We offer proper mentorship, time to draw things twice when they're not right, and a studio that closes at 18:30 on Fridays. If that sounds like the wrong studio, it probably is.",
                  "Wir bieten echtes Mentoring, Zeit, Dinge zweimal zu zeichnen, wenn sie nicht stimmen, und ein Büro, das freitags um 18:30 Uhr schliesst. Wenn das nach dem falschen Büro klingt, ist es das wahrscheinlich auch.",
                  "Nous offrons un vrai mentorat, le temps de redessiner ce qui ne va pas, et un studio qui ferme à 18h30 le vendredi. Si ça sonne comme le mauvais studio, c'est probablement le cas.",
                  lang
                )}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.grey, fontFamily: fMono }}>
              — {tri("Open Positions", "Offene Stellen", "Postes ouverts", lang)} / {String(positions.length).padStart(2, "0")}
            </p>
            <Rule className="opacity-25 mb-10" />
          </Reveal>
          {positions.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="grid grid-cols-12 gap-4 md:gap-8 py-10 md:py-14" style={{ borderBottom: `1px solid ${C.border}` }}>
                <div className="col-span-12 md:col-span-5">
                  <p className="text-[11px] tracking-wider uppercase mb-3" style={{ color: C.grey, fontFamily: fMono }}>
                    — {tri(p.en.type, p.de.type, p.fr.type, lang)}
                  </p>
                  <h2 style={{ fontFamily: fHead, fontSize: "clamp(32px, 4vw, 54px)", lineHeight: 1, fontWeight: 400 }}>
                    {tri(p.en.title, p.de.title, p.fr.title, lang)}
                  </h2>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="text-[15px] leading-[1.8]" style={{ color: C.grey }}>
                    {tri(p.en.body, p.de.body, p.fr.body, lang)}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-2 md:text-right">
                  <Link href="/demos/hale/contact" className="inline-flex items-center gap-2 text-[11px] tracking-wider uppercase no-underline" style={{ color: C.dark, fontFamily: fMono }}>
                    {tri("Apply", "Bewerben", "Postuler", lang)} →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 pb-32" style={{ background: "#F0F0EE" }}>
        <div className="max-w-[1400px] mx-auto text-center">
          <Reveal>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.grey, fontFamily: fMono }}>
              — {tri("Spontaneous applications", "Initiativbewerbung", "Candidatures spontanées", lang)}
            </p>
            <h2 className="max-w-3xl mx-auto mb-8" style={{ fontFamily: fHead, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.05, fontWeight: 400 }}>
              {tri(
                "Don't see a role that fits? Write to us anyway.",
                "Keine passende Stelle? Schreiben Sie uns trotzdem.",
                "Pas de poste adapté ? Écrivez-nous quand même.",
                lang
              )}
            </h2>
            <Link href="/demos/hale/contact" className="inline-flex items-center px-8 py-4 text-[11px] tracking-wider uppercase no-underline" style={{ background: C.dark, color: C.bg, fontFamily: fBody }}>
              {tri("Get in touch", "Kontakt aufnehmen", "Nous contacter", lang)}
            </Link>
          </Reveal>
        </div>
      </section>

      <HaleFooter />
    </div>
  );
}

export default function HaleCareersPage() {
  return <HaleLangProvider><Inner /></HaleLangProvider>;
}
