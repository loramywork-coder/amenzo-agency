"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { ChevronDown } from "lucide-react";
import { MaisonNav, MaisonFooter, MaisonLangProvider, useMaisonLang, tri, C, fHead, fBody, fMono } from "../_shared";

const faqs = [
  {
    cat: { en: "Orders", fr: "Commandes", de: "Bestellungen" },
    items: [
      {
        qEn: "How long does shipping take?",
        qFr: "Quels sont les délais de livraison ?",
        qDe: "Wie lange dauert der Versand?",
        aEn: "Within Europe: 3-5 business days. Rest of world: 7-10 business days. We only use carbon-offset carriers.",
        aFr: "En Europe : 3 à 5 jours ouvrables. Reste du monde : 7 à 10 jours ouvrables. Uniquement avec des transporteurs compensés carbone.",
        aDe: "Innerhalb Europas: 3-5 Werktage. Weltweit: 7-10 Werktage. Nur klimakompensierte Spediteure.",
      },
      {
        qEn: "Can I track my order?",
        qFr: "Puis-je suivre ma commande ?",
        qDe: "Kann ich meine Bestellung verfolgen?",
        aEn: "Yes — you'll receive a tracking link within 48 hours of ordering. Email us if it doesn't arrive.",
        aFr: "Oui — vous recevrez un lien de suivi dans les 48 heures suivant votre commande.",
        aDe: "Ja — Sie erhalten innerhalb von 48 Stunden nach der Bestellung einen Tracking-Link.",
      },
      {
        qEn: "Do you ship outside Europe?",
        qFr: "Livrez-vous hors Europe ?",
        qDe: "Liefern Sie ausserhalb Europas?",
        aEn: "Yes — we ship worldwide. Customs duties may apply depending on destination.",
        aFr: "Oui — nous livrons dans le monde entier. Des droits de douane peuvent s'appliquer.",
        aDe: "Ja — wir liefern weltweit. Je nach Zielort können Zölle anfallen.",
      },
    ],
  },
  {
    cat: { en: "Returns & Repairs", fr: "Retours & réparations", de: "Rücksendungen & Reparaturen" },
    items: [
      {
        qEn: "What is your return policy?",
        qFr: "Quelle est votre politique de retour ?",
        qDe: "Wie lauten Ihre Rückgabebedingungen?",
        aEn: "30 days from delivery, on unworn items with tags and original packaging. Return shipping is free within Europe.",
        aFr: "30 jours à compter de la livraison, sur les articles non portés avec étiquettes et emballage d'origine. Retour gratuit en Europe.",
        aDe: "30 Tage ab Lieferung, für ungetragene Artikel mit Etikett und Originalverpackung. Rückversand innerhalb Europas kostenlos.",
      },
      {
        qEn: "Do you offer repairs?",
        qFr: "Proposez-vous des réparations ?",
        qDe: "Bieten Sie Reparaturen an?",
        aEn: "Yes — lifetime repairs on every Maison Noir piece. Ship it to our Geneva atelier and we'll fix it, free of charge, for as long as you own it.",
        aFr: "Oui — réparations à vie sur toutes les pièces Maison Noir. Envoyez-la à notre atelier de Genève et nous la réparons gratuitement.",
        aDe: "Ja — lebenslange Reparaturen auf jedes Maison-Noir-Stück. Senden Sie es an unser Atelier in Genf und wir reparieren es kostenlos.",
      },
      {
        qEn: "Can I trade in an old piece?",
        qFr: "Puis-je échanger une ancienne pièce ?",
        qDe: "Kann ich ein altes Stück zurückgeben?",
        aEn: "Yes — our Second Life programme takes back any Maison Noir piece and gives you 20% credit on your next order.",
        aFr: "Oui — notre programme Seconde Vie reprend toute pièce Maison Noir et vous offre 20% de crédit sur votre prochaine commande.",
        aDe: "Ja — unser Second-Life-Programm nimmt jedes Maison-Noir-Stück zurück und gewährt Ihnen 20% Guthaben auf die nächste Bestellung.",
      },
    ],
  },
  {
    cat: { en: "Sizing & Care", fr: "Taille & entretien", de: "Grösse & Pflege" },
    items: [
      {
        qEn: "How do I find the right size?",
        qFr: "Comment trouver la bonne taille ?",
        qDe: "Wie finde ich die richtige Grösse?",
        aEn: "Our size guide has exact measurements for every piece. If you're unsure, email us with your measurements and we'll recommend.",
        aFr: "Notre guide des tailles contient des mesures exactes pour chaque pièce. En cas de doute, envoyez-nous vos mesures.",
        aDe: "Unsere Grössentabelle enthält genaue Masse für jedes Stück. Bei Unsicherheit senden Sie uns Ihre Masse per E-Mail.",
      },
      {
        qEn: "How should I care for the pieces?",
        qFr: "Comment entretenir les pièces ?",
        qDe: "Wie pflege ich die Stücke?",
        aEn: "Care instructions are on every item. Most of our wool and cashmere is dry-clean only. Linen and cotton can be hand-washed cold.",
        aFr: "Les instructions d'entretien sont sur chaque article. Laine et cachemire à sec uniquement. Lin et coton lavables à la main à froid.",
        aDe: "Pflegehinweise auf jedem Artikel. Wolle und Kaschmir nur chemisch reinigen. Leinen und Baumwolle kalt handwaschen.",
      },
    ],
  },
];

function Inner() {
  const { lang } = useMaisonLang();
  const [open, setOpen] = useState<string | null>("0-0");
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <MaisonNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10 pb-16">
        <div className="max-w-[1000px] mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.muted, fontFamily: fMono }}>
            — FAQ
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} style={{ fontFamily: fHead, fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.02em", color: C.dark }}>
            {tri("Questions.", "Questions.", "Fragen.", lang)}
          </motion.h1>
        </div>
      </section>

      <section className="px-6 md:px-10 py-12 pb-32">
        <div className="max-w-[1000px] mx-auto space-y-14">
          {faqs.map((cat, ci) => (
            <div key={ci}>
              <p className="text-[11px] tracking-[0.25em] uppercase mb-6" style={{ color: C.gold, fontFamily: fMono }}>
                — {tri(cat.cat.en, cat.cat.fr, cat.cat.de, lang)}
              </p>
              <div style={{ borderTop: `1px solid ${C.border}` }}>
                {cat.items.map((item, ii) => {
                  const key = `${ci}-${ii}`;
                  const isOpen = open === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setOpen(isOpen ? null : key)}
                      className="w-full text-left py-6"
                      style={{ borderBottom: `1px solid ${C.border}` }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span style={{ fontFamily: fHead, fontSize: 22, lineHeight: 1.2, color: C.dark }}>
                          {tri(item.qEn, item.qFr, item.qDe, lang)}
                        </span>
                        <ChevronDown size={16} className="shrink-0" style={{ color: C.dark, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.3s" }} />
                      </div>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.p
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-[15px] leading-[1.8] overflow-hidden"
                            style={{ color: C.muted }}
                          >
                            {tri(item.aEn, item.aFr, item.aDe, lang)}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <MaisonFooter />
    </div>
  );
}

export default function MaisonFaqPage() {
  return <MaisonLangProvider><Inner /></MaisonLangProvider>;
}
