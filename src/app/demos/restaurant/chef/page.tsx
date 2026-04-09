"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { C, fHead, fBody, fMono, Reveal, Rule, RestaurantNav, RestaurantFooter, RestaurantLangProvider, useRestaurantLang, tri } from "../_shared";

const timeline = [
  { year: "2003", en: "Starts as a dishwasher at Le Calandre, Rubano.", it: "Inizia come lavapiatti a Le Calandre, Rubano.", fr: "Commence comme plongeur au Calandre, Rubano." },
  { year: "2008", en: "Becomes chef de partie under Massimiliano Alajmo.", it: "Diventa chef de partie sotto Massimiliano Alajmo.", fr: "Devient chef de partie sous Massimiliano Alajmo." },
  { year: "2012", en: "Joins Mugaritz in Spain under Andoni Luis Aduriz.", it: "Entra a Mugaritz in Spagna con Andoni Luis Aduriz.", fr: "Rejoint Mugaritz en Espagne auprès d'Andoni Luis Aduriz." },
  { year: "2016", en: "Returns to Malta. Opens Porto Valletta with sixteen seats.", it: "Torna a Malta. Apre Porto Valletta con sedici coperti.", fr: "Rentre à Malte. Ouvre Porto Valletta avec seize couverts." },
  { year: "2019", en: "One Michelin star. Refuses to expand.", it: "Una stella Michelin. Rifiuta di ingrandirsi.", fr: "Une étoile Michelin. Refuse de s'agrandir." },
  { year: "2023", en: "Joined by sous-chef Elena Busuttil.", it: "Si unisce la sous-chef Elena Busuttil.", fr: "Rejoint par la sous-cheffe Elena Busuttil." },
];

function Inner() {
  const { lang } = useRestaurantLang();
  return (
    <div style={{ background: C.bg, color: C.cream, fontFamily: fBody }}>
      <DemoBanner />
      <RestaurantNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10 pb-16">
        <div className="max-w-[1500px] mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: C.copper, fontFamily: fMono }}>
            — {tri("The chef", "Lo chef", "Le chef", lang)}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="max-w-5xl" style={{ fontFamily: fHead, fontSize: "clamp(52px, 9vw, 150px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.02em", color: C.cream, paddingBottom: "0.15em" }}>
            Rocco<br /><em style={{ fontStyle: "italic", color: C.copper }}>Barbaro.</em>
          </motion.h1>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5]">
              <Image src="/images/restaurant/chef-portrait.jpg" alt="Rocco Barbaro" fill className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7 md:pt-12">
            <div className="space-y-6 text-[16px] leading-[1.9]" style={{ color: "rgba(242,233,216,0.8)" }}>
              <p className="text-[22px] md:text-[26px] leading-[1.4] italic" style={{ fontFamily: fHead, color: C.cream }}>
                {tri(
                  "I do not cook for critics. I cook for the sixteen people in this room.",
                  "Non cucino per i critici. Cucino per le sedici persone in questa sala.",
                  "Je ne cuisine pas pour les critiques. Je cuisine pour les seize personnes dans cette salle.",
                  lang
                )}
              </p>
              <p>
                {tri(
                  "Rocco grew up in Puglia, in a village with four thousand people, at a kitchen table where his grandmother cooked for eleven. He left at seventeen to work at Le Calandre in Rubano, spent five years there, then joined Mugaritz under Andoni Luis Aduriz for four more. By the time he came back to the Mediterranean, he had worked twenty-three straight summers without a day off.",
                  "Rocco è cresciuto in Puglia, in un paese di quattromila abitanti, a un tavolo da cucina dove sua nonna cucinava per undici. A diciassette anni parte per Le Calandre a Rubano, ci resta cinque anni, poi quattro anni a Mugaritz con Andoni Luis Aduriz. Quando tornò nel Mediterraneo aveva lavorato ventitré estati di fila senza un giorno libero.",
                  "Rocco a grandi dans les Pouilles, dans un village de quatre mille habitants, à une table de cuisine où sa grand-mère cuisinait pour onze. Il est parti à dix-sept ans travailler au Calandre à Rubano, y est resté cinq ans, puis quatre ans à Mugaritz auprès d'Andoni Luis Aduriz. En revenant en Méditerranée, il avait travaillé vingt-trois étés d'affilée sans un jour de congé.",
                  lang
                )}
              </p>
              <p>
                {tri(
                  "Porto Valletta opened in a sixteen-seat room in 2016. The original rule — cook only what you can source within forty kilometres — has not changed. Neither has the menu structure: six courses, one seating, six nights a week.",
                  "Porto Valletta ha aperto in una sala da sedici coperti nel 2016. La regola originale — cucinare solo ciò che trovi entro quaranta chilometri — non è cambiata. Né la struttura del menù: sei portate, un solo turno, sei sere a settimana.",
                  "Porto Valletta a ouvert dans une salle de seize couverts en 2016. La règle originale — ne cuisiner que ce qu'on trouve à moins de quarante kilomètres — n'a pas changé. Ni la structure du menu : six plats, un seul service, six soirs par semaine.",
                  lang
                )}
              </p>
              <p>
                {tri(
                  "He still cooks every service himself. When he takes a night off, the restaurant closes.",
                  "Ancora oggi cucina ogni servizio in prima persona. Quando si prende una sera libera, il ristorante chiude.",
                  "Il cuisine encore chaque service lui-même. Quand il prend une soirée, le restaurant ferme.",
                  lang
                )}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team strip */}
      <section className="px-6 md:px-10 py-28" style={{ background: C.surface }}>
        <div className="max-w-[1500px] mx-auto">
          <Reveal>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-6 text-center" style={{ color: C.copper, fontFamily: fMono }}>
              — {tri("The team", "La squadra", "L'équipe", lang)}
            </p>
            <h2 className="mb-14 text-center" style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1, fontWeight: 400, color: C.cream, paddingBottom: "0.1em" }}>
              {tri("Just two hands,", "Solo due paia di mani,", "Juste deux paires de mains,", lang)}<br />
              <em style={{ fontStyle: "italic", color: C.copper }}>{tri("one at the front.", "una in sala.", "une en salle.", lang)}</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { img: "sous-chef.jpg", name: "Elena Busuttil", roleEn: "Sous-chef", roleIt: "Sous-chef", roleFr: "Sous-cheffe" },
              { img: "chef-portrait.jpg", name: "Rocco Barbaro", roleEn: "Chef & Owner", roleIt: "Chef e Proprietario", roleFr: "Chef & Propriétaire" },
              { img: "sommelier.jpg", name: "Giulia Ferrara", roleEn: "Sommelier & Maître d'Hôtel", roleIt: "Sommelier e Maître", roleFr: "Sommelière & Maître d'Hôtel" },
            ].map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div>
                  <div className="relative aspect-[4/5] mb-5">
                    <Image src={`/images/restaurant/${m.img}`} alt={m.name} fill className="object-cover" />
                  </div>
                  <p style={{ fontFamily: fHead, fontSize: 22, color: C.cream, fontWeight: 400 }}>{m.name}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color: C.copper, fontFamily: fMono }}>
                    {tri(m.roleEn, m.roleIt, m.roleFr, lang)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 md:px-10 py-28">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-6 text-center" style={{ color: C.copper, fontFamily: fMono }}>
              — {tri("Timeline", "Cronologia", "Chronologie", lang)}
            </p>
            <h2 className="mb-14 text-center" style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1, fontWeight: 400, color: C.cream, paddingBottom: "0.1em" }}>
              {tri("Twenty years of", "Venti anni di", "Vingt ans de", lang)}{" "}
              <em style={{ fontStyle: "italic", color: C.copper }}>{tri("kitchen.", "cucina.", "cuisine.", lang)}</em>
            </h2>
            <Rule className="mb-10" />
          </Reveal>
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.05}>
              <div className="grid grid-cols-12 gap-5 py-5" style={{ borderBottom: `1px solid ${C.border}` }}>
                <span className="col-span-2 md:col-span-1" style={{ color: C.copper, fontFamily: fMono, fontSize: 12 }}>— {t.year}</span>
                <span className="col-span-10 md:col-span-11" style={{ fontFamily: fHead, fontSize: 20, lineHeight: 1.3, color: C.cream }}>
                  {tri(t.en, t.it, t.fr, lang)}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <RestaurantFooter />
    </div>
  );
}

export default function RestaurantChefPage() {
  return <RestaurantLangProvider><Inner /></RestaurantLangProvider>;
}
