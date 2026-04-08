"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { MaisonNav, MaisonFooter, MaisonLangProvider, useMaisonLang, tri, Reveal, C, fHead, fBody, fMono } from "../_shared";

const timeline = [
  { year: "2019", en: "Marie-Claire Dufour leaves LVMH after 12 years.", fr: "Marie-Claire Dufour quitte LVMH après 12 ans.", de: "Marie-Claire Dufour verlässt LVMH nach 12 Jahren." },
  { year: "2020", en: "Maison Noir is founded in a Geneva atelier with three employees.", fr: "Maison Noir est fondée dans un atelier genevois avec trois employés.", de: "Maison Noir wird in einem Genfer Atelier mit drei Mitarbeitern gegründet." },
  { year: "2021", en: "First capsule collection sells out in six days.", fr: "Première collection capsule, vendue en six jours.", de: "Erste Capsule-Kollektion ist in sechs Tagen ausverkauft." },
  { year: "2023", en: "Certified B Corporation. All production moves to Portugal and Italy.", fr: "Certifiée B Corporation. Toute la production est relocalisée au Portugal et en Italie.", de: "B-Corp-zertifiziert. Produktion vollständig nach Portugal und Italien verlagert." },
  { year: "2025", en: "Flagship store opens on Rue du Rhône, Geneva.", fr: "Ouverture du magasin principal rue du Rhône, Genève.", de: "Flagship-Store an der Rue du Rhône in Genf eröffnet." },
];

function Inner() {
  const { lang } = useMaisonLang();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <MaisonNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10 pb-16">
        <div className="max-w-[1600px] mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.muted, fontFamily: fMono }}>
            — {tri("About the House", "À propos", "Über das Haus", lang)}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="max-w-4xl" style={{ fontFamily: fHead, fontSize: "clamp(52px, 8vw, 140px)", lineHeight: 0.9, fontWeight: 400, letterSpacing: "-0.02em", color: C.dark }}>
            {tri("A small house,", "Une petite maison,", "Ein kleines Haus,", lang)}<br />
            <em style={{ fontStyle: "italic", color: C.gold }}>{tri("with patience.", "avec patience.", "mit Geduld.", lang)}</em>
          </motion.h1>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5]">
              <Image src="/images/maison/founder.jpg" alt="Marie-Claire Dufour" fill className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7 md:pt-12">
            <p className="text-[10px] tracking-[0.25em] uppercase mb-5" style={{ color: C.muted, fontFamily: fMono }}>
              — {tri("Founder", "Fondatrice", "Gründerin", lang)}
            </p>
            <h2 className="mb-6" style={{ fontFamily: fHead, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.05, fontWeight: 400, letterSpacing: "-0.015em", color: C.dark }}>
              Marie-Claire <em style={{ fontStyle: "italic" }}>Dufour.</em>
            </h2>
            <div className="space-y-5 text-[16px] leading-[1.85]" style={{ color: C.muted }}>
              <p>
                {tri(
                  "I spent twelve years designing handbags at a large French house. I made beautiful things for people who only wore them once. At some point, that stopped making sense to me.",
                  "J'ai passé douze ans à dessiner des sacs pour une grande maison française. Je créais de belles choses pour des personnes qui ne les portaient qu'une fois. À un moment, cela a cessé d'avoir du sens.",
                  "Zwölf Jahre habe ich Taschen für ein grosses französisches Haus entworfen. Ich machte schöne Dinge für Menschen, die sie nur einmal trugen. Irgendwann ergab das für mich keinen Sinn mehr.",
                  lang
                )}
              </p>
              <p>
                {tri(
                  "Maison Noir started because I wanted to make clothing I would still wear in ten years — and charge a price that reflected what it actually cost to make properly. We are small on purpose. We will always be small.",
                  "Maison Noir est né du désir de créer des vêtements que je porterais encore dans dix ans — et de les vendre à un prix reflétant leur coût réel. Nous sommes petits à dessein. Nous le resterons toujours.",
                  "Maison Noir entstand aus dem Wunsch, Kleidung zu machen, die ich in zehn Jahren noch tragen würde — und zu einem Preis anzubieten, der die tatsächlichen Herstellungskosten widerspiegelt. Wir sind bewusst klein. Wir bleiben klein.",
                  lang
                )}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Atelier photos */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <Reveal>
            <div className="relative aspect-[16/11]"><Image src="/images/maison/about-atelier.jpg" alt="Atelier" fill className="object-cover" /></div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[16/11]"><Image src="/images/maison/about-designer.jpg" alt="Designer" fill className="object-cover" /></div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 md:px-10 py-24" style={{ background: "#EEEAE3" }}>
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.muted, fontFamily: fMono }}>
              — {tri("Timeline", "Chronologie", "Zeitstrahl", lang)}
            </p>
            <h2 className="mb-14" style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1, fontWeight: 400, fontStyle: "italic", color: C.dark }}>
              {tri("Six years of intent.", "Six années d'intention.", "Sechs Jahre Absicht.", lang)}
            </h2>
          </Reveal>
          <div style={{ borderTop: `1px solid ${C.border}` }}>
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06}>
                <div className="grid grid-cols-12 gap-4 py-6" style={{ borderBottom: `1px solid ${C.border}` }}>
                  <span className="col-span-2 md:col-span-1" style={{ fontFamily: fMono, color: C.muted, fontSize: 12 }}>— {t.year}</span>
                  <span className="col-span-10 md:col-span-11" style={{ fontFamily: fHead, fontSize: 20, lineHeight: 1.3, color: C.dark }}>
                    {tri(t.en, t.fr, t.de, lang)}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MaisonFooter />
    </div>
  );
}

export default function MaisonAboutPage() {
  return <MaisonLangProvider><Inner /></MaisonLangProvider>;
}
