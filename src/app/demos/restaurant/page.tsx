"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { ArrowRight } from "lucide-react";
import { C, fHead, fBody, fMono, Reveal, Rule, RestaurantNav, RestaurantFooter, RestaurantLangProvider, useRestaurantLang, tri } from "./_shared";

const courses = [
  { en: "Apertivo", it: "Aperitivo", fr: "Apéritif", desc: { en: "A glass of Gozo vermentino, olives from our supplier in Bajda Ridge, a single piece of raw fish." } },
  { en: "First", it: "Primo", fr: "Entrée", desc: { en: "Hand-rolled ravioli with sheep's ricotta, brown butter, toasted hazelnut." } },
  { en: "Sea", it: "Pesce", fr: "Poisson", desc: { en: "Whatever came in from Marsaxlokk this morning. Grilled, with lemon and oil." } },
  { en: "Land", it: "Carne", fr: "Viande", desc: { en: "Slow-braised rabbit, an old Maltese preparation with bay, garlic and local wine." } },
  { en: "Cheese", it: "Formaggi", fr: "Fromage", desc: { en: "A small board of three Gozitan sheep's cheeses with rock honey and carob syrup." } },
  { en: "Dessert", it: "Dolce", fr: "Dessert", desc: { en: "A changing dessert. Often almond. Always some form of honey." } },
];

function Inner() {
  const { lang } = useRestaurantLang();
  return (
    <div style={{ background: C.bg, color: C.cream, fontFamily: fBody }}>
      <DemoBanner />
      <RestaurantNav />

      {/* HERO — VIDEO BACKGROUND */}
      <section className="relative w-full h-screen min-h-[720px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/restaurant/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/restaurant-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,9,8,0.55) 0%, rgba(11,9,8,0.7) 60%, rgba(11,9,8,0.9) 100%)" }} />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-[11px] tracking-[0.5em] uppercase mb-10"
              style={{ color: C.copper, fontFamily: fMono }}
            >
              — {tri("Valletta · Since 2016", "Valletta · Dal 2016", "Valletta · Depuis 2016", lang)}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl mx-auto"
              style={{
                fontFamily: fHead,
                fontSize: "clamp(36px, 5.2vw, 78px)",
                lineHeight: 1.05,
                fontWeight: 500,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: C.cream,
                paddingBottom: "0.15em",
              }}
            >
              Porto <span style={{ color: C.copper, fontWeight: 400 }}>Valletta</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85 }}
              className="mt-10 max-w-lg mx-auto italic"
              style={{
                fontFamily: fHead,
                fontSize: "clamp(18px, 2.2vw, 24px)",
                lineHeight: 1.4,
                color: "rgba(242,233,216,0.85)",
              }}
            >
              {tri(
                "A sixteen-seat dining room. One chef. One tasting menu. Six nights a week.",
                "Una sala da sedici coperti. Un solo chef. Un solo menù degustazione. Sei sere a settimana.",
                "Une salle de seize couverts. Un chef. Un menu dégustation. Six soirs par semaine.",
                lang
              )}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="/demos/restaurant/contact"
                className="inline-flex items-center justify-center px-9 py-4 text-[11px] tracking-[0.2em] uppercase no-underline transition-opacity hover:opacity-90"
                style={{ background: C.burgundy, color: C.cream, fontFamily: fBody, fontWeight: 600 }}
              >
                {tri("Reserve a table", "Prenota un tavolo", "Réserver une table", lang)}
              </Link>
              <Link
                href="/demos/restaurant/menu"
                className="inline-flex items-center justify-center px-9 py-4 text-[11px] tracking-[0.2em] uppercase no-underline"
                style={{ border: `1px solid rgba(242,233,216,0.4)`, color: C.cream, fontFamily: fBody, fontWeight: 500 }}
              >
                {tri("Tonight's menu", "Il menù di stasera", "Le menu du soir", lang)}
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center" style={{ color: "rgba(242,233,216,0.5)" }}>
          <p className="text-[9px] tracking-[0.3em] uppercase mb-2" style={{ fontFamily: fMono }}>{tri("Scroll", "Scorri", "Défiler", lang)}</p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 mx-auto"
            style={{ background: "rgba(242,233,216,0.4)" }}
          />
        </div>
      </section>

      {/* INTRO STATEMENT */}
      <section className="px-6 md:px-10 py-28 md:py-40" style={{ background: C.surface }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <Rule className="mb-10" />
            <p className="text-[22px] md:text-[32px] leading-[1.4] italic" style={{ fontFamily: fHead, color: C.cream, fontWeight: 400 }}>
              {tri(
                "A menu you cannot order from. A wine list the chef chooses. A seating time that is not negotiable. This is how we cook.",
                "Un menù che non si ordina. Una carta dei vini scelta dallo chef. Un orario che non si negozia. Ecco come cuciniamo.",
                "Un menu que l'on ne commande pas. Une carte des vins choisie par le chef. Un horaire non négociable. C'est ainsi que nous cuisinons.",
                lang
              )}
            </p>
            <Rule className="mt-10" />
          </Reveal>
        </div>
      </section>

      {/* CHEF IMAGE + TEXT */}
      <section className="px-6 md:px-10 py-28 md:py-36">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <Reveal className="md:col-span-6">
            <div className="relative aspect-[4/5]">
              <Image src="/images/restaurant/story-chef.jpg" alt="Chef" fill className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5 md:col-start-8">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: C.copper, fontFamily: fMono }}>
              — {tri("The chef", "Lo chef", "Le chef", lang)}
            </p>
            <h2 className="mb-8" style={{ fontFamily: fHead, fontSize: "clamp(40px, 5.5vw, 80px)", lineHeight: 0.98, fontWeight: 400, letterSpacing: "-0.01em", color: C.cream, paddingBottom: "0.1em" }}>
              Rocco{" "}
              <em style={{ fontStyle: "italic", color: C.copper }}>Barbaro</em>
            </h2>
            <div className="space-y-5 text-[15px] leading-[1.9]" style={{ color: "rgba(242,233,216,0.75)" }}>
              <p>
                {tri(
                  "Rocco Barbaro trained at Le Calandre under Massimiliano Alajmo, then spent four years at Mugaritz in Spain. He opened Porto Valletta in 2016 with a single rule: he would cook only what he could source within forty kilometres of the restaurant.",
                  "Rocco Barbaro si è formato a Le Calandre con Massimiliano Alajmo, poi ha trascorso quattro anni a Mugaritz in Spagna. Ha aperto Porto Valletta nel 2016 con un'unica regola: cucinare solo ciò che trova entro quaranta chilometri dal ristorante.",
                  "Rocco Barbaro s'est formé au Calandre auprès de Massimiliano Alajmo, puis a passé quatre ans à Mugaritz en Espagne. Il a ouvert Porto Valletta en 2016 avec une seule règle : ne cuisiner que ce qu'il trouve à moins de quarante kilomètres du restaurant.",
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
            <Link href="/demos/restaurant/chef" className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase no-underline" style={{ color: C.cream, fontFamily: fMono, borderBottom: `1px solid ${C.copper}`, paddingBottom: 3 }}>
              {tri("More about Rocco", "Scopri di più su Rocco", "Plus sur Rocco", lang)} →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* MENU PREVIEW — six course list */}
      <section className="px-6 md:px-10 py-28 md:py-36" style={{ background: C.surface }}>
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color: C.copper, fontFamily: fMono }}>
                — {tri("Tonight's menu", "Il menù di stasera", "Le menu du soir", lang)}
              </p>
              <h2 style={{ fontFamily: fHead, fontSize: "clamp(42px, 6vw, 82px)", lineHeight: 0.98, fontWeight: 400, letterSpacing: "-0.01em", color: C.cream, paddingBottom: "0.1em" }}>
                {tri("Six courses,", "Sei portate,", "Six plats,", lang)}<br />
                <em style={{ fontStyle: "italic", color: C.copper }}>{tri("one story.", "una storia.", "une histoire.", lang)}</em>
              </h2>
              <p className="mt-6 text-[13px] tracking-wider uppercase" style={{ color: C.muted, fontFamily: fMono }}>
                € 145 · {tri("Wine pairing € 85", "Abbinamento vini € 85", "Accord mets & vins € 85", lang)}
              </p>
            </div>
          </Reveal>
          <ol className="space-y-8" style={{ counterReset: "course" }}>
            {courses.map((c, i) => (
              <Reveal key={c.en} delay={i * 0.05}>
                <li className="grid grid-cols-12 gap-5 pt-6" style={{ borderTop: `1px solid ${C.border}` }}>
                  <span className="col-span-1 text-[11px] pt-1" style={{ color: C.copper, fontFamily: fMono }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-11">
                    <h3 className="italic mb-2" style={{ fontFamily: fHead, fontSize: 26, fontStyle: "italic", color: C.cream }}>
                      {tri(c.en, c.it, c.fr, lang)}
                    </h3>
                    <p className="text-[13px] leading-[1.85] max-w-lg" style={{ color: C.muted }}>
                      {c.desc.en}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={0.3}>
            <p className="mt-14 text-center text-[11px] tracking-wider uppercase italic" style={{ color: C.muted, fontFamily: fMono }}>
              {tri("Menu changes daily.", "Il menù cambia ogni giorno.", "Le menu change chaque jour.", lang)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* PHOTO STRIP (three dishes) */}
      <section className="py-20">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {["dish-octopus.jpg", "dish-sea-bass.jpg", "dish-ravioli.jpg"].map((img, i) => (
            <Reveal key={img} delay={i * 0.08}>
              <div className="relative aspect-[4/5]">
                <Image src={`/images/restaurant/${img}`} alt="" fill className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRESS PULL-QUOTE */}
      <section className="px-6 md:px-10 py-32" style={{ background: C.burgundy, color: C.cream }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-[10px] tracking-[0.4em] uppercase mb-8" style={{ color: C.copper, fontFamily: fMono }}>
              — Financial Times
            </p>
            <p className="italic" style={{ fontFamily: fHead, fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.2, color: C.cream, paddingBottom: "0.1em" }}>
              &ldquo;{tri(
                "The only restaurant on the island that made me change my flight.",
                "L'unico ristorante dell'isola per cui ho cambiato il volo.",
                "Le seul restaurant de l'île qui m'a fait changer mon vol.",
                lang
              )}&rdquo;
            </p>
            <p className="mt-10 text-[11px] tracking-[0.25em] uppercase" style={{ color: C.copper, fontFamily: fMono }}>
              — Tim Hayward, FT Weekend
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-32" style={{ background: C.surface }}>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <Rule className="mb-10" />
            <h2 className="mb-8" style={{ fontFamily: fHead, fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 0.98, fontWeight: 400, letterSpacing: "-0.01em", color: C.cream, paddingBottom: "0.1em" }}>
              {tri("We would like", "Vorremmo", "Nous aimerions", lang)}<br />
              <em style={{ fontStyle: "italic", color: C.copper }}>{tri("to cook for you.", "cucinare per voi.", "cuisiner pour vous.", lang)}</em>
            </h2>
            <p className="max-w-md mx-auto text-[15px] leading-relaxed mb-10 opacity-80">
              {tri(
                "We take bookings sixty days in advance. Write to Giulia at the front of house — she reads every enquiry herself.",
                "Accettiamo prenotazioni con sessanta giorni di anticipo. Scrivete a Giulia, la nostra maître — legge ogni richiesta personalmente.",
                "Nous prenons les réservations soixante jours à l'avance. Écrivez à Giulia, notre maître d'hôtel — elle lit chaque demande elle-même.",
                lang
              )}
            </p>
            <Link
              href="/demos/restaurant/contact"
              className="inline-flex items-center gap-3 px-10 py-4 text-[11px] tracking-[0.2em] uppercase no-underline transition-opacity hover:opacity-90"
              style={{ background: C.burgundy, color: C.cream, fontFamily: fBody, fontWeight: 600 }}
            >
              {tri("Request a reservation", "Richiedi una prenotazione", "Demander une réservation", lang)} <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      <RestaurantFooter />
    </div>
  );
}

export default function RestaurantHomePage() {
  return <RestaurantLangProvider><Inner /></RestaurantLangProvider>;
}
