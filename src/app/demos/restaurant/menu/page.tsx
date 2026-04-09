"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { C, fHead, fBody, fMono, Reveal, Rule, RestaurantNav, RestaurantFooter, RestaurantLangProvider, useRestaurantLang, tri } from "../_shared";

type Course = { num: string; title: { en: string; it: string; fr: string }; dish: { en: string; it: string; fr: string }; desc: { en: string; it: string; fr: string } };

const courses: Course[] = [
  {
    num: "I.",
    title: { en: "Aperitivo", it: "Aperitivo", fr: "Apéritif" },
    dish: { en: "Gozo vermentino · olives · tuna belly", it: "Vermentino di Gozo · olive · ventresca di tonno", fr: "Vermentino de Gozo · olives · ventrèche de thon" },
    desc: {
      en: "A glass of vermentino from a single grower in Gozo, one hour off the vine when we bottle. A piece of ventresca from this morning. Olives cured in our kitchen.",
      it: "Un bicchiere di vermentino da un solo produttore di Gozo, imbottigliato un'ora dopo la vendemmia. Un pezzo di ventresca di stamattina. Olive curate nella nostra cucina.",
      fr: "Un verre de vermentino d'un seul vigneron de Gozo, embouteillé une heure après la récolte. Un morceau de ventrèche du matin. Olives confites dans notre cuisine.",
    },
  },
  {
    num: "II.",
    title: { en: "First", it: "Primo", fr: "Entrée" },
    dish: { en: "Hand-rolled ravioli · sheep's ricotta · brown butter", it: "Ravioli fatti a mano · ricotta di pecora · burro nocciola", fr: "Ravioli maison · ricotta de brebis · beurre noisette" },
    desc: {
      en: "The pasta is rolled by Rocco every afternoon at four. The ricotta comes from a farm in Għarb. The butter is browned to the edge of burning.",
      it: "La pasta viene stesa da Rocco ogni pomeriggio alle quattro. La ricotta arriva da una fattoria di Għarb. Il burro viene fuso fino quasi a bruciare.",
      fr: "Les pâtes sont étalées par Rocco chaque après-midi à quatre heures. La ricotta vient d'une ferme de Għarb. Le beurre est coloré presque jusqu'à brûler.",
    },
  },
  {
    num: "III.",
    title: { en: "Sea", it: "Pesce", fr: "Poisson" },
    dish: { en: "The catch, grilled over olive wood", it: "Pesce del giorno, alla griglia sul legno d'olivo", fr: "La pêche du jour, grillée au bois d'olivier" },
    desc: {
      en: "Whatever came in from Marsaxlokk this morning. Usually branzino, sometimes dentex, occasionally John Dory. One fish, salt, lemon, our oil. Nothing else.",
      it: "Qualunque cosa arrivi stamattina da Marsaxlokk. Di solito branzino, talvolta dentice, a volte pesce San Pietro. Un pesce, sale, limone, il nostro olio. Niente altro.",
      fr: "Ce qui est arrivé ce matin de Marsaxlokk. Souvent du loup, parfois du denti, occasionnellement de la saint-pierre. Un poisson, du sel, du citron, notre huile. Rien d'autre.",
    },
  },
  {
    num: "IV.",
    title: { en: "Land", it: "Carne", fr: "Viande" },
    dish: { en: "Braised rabbit · wild bay · local red", it: "Coniglio brasato · alloro · vino rosso locale", fr: "Lapin braisé · laurier · vin rouge local" },
    desc: {
      en: "Fenek — a traditional Maltese rabbit preparation — cooked slowly in clay with bay leaves, garlic, and a bottle of red from Meridiana.",
      it: "Fenek — una preparazione tradizionale maltese — cotto lentamente in argilla con alloro, aglio e una bottiglia di rosso di Meridiana.",
      fr: "Fenek — une préparation maltaise traditionnelle — cuit lentement dans l'argile avec laurier, ail et une bouteille de rouge de Meridiana.",
    },
  },
  {
    num: "V.",
    title: { en: "Cheese", it: "Formaggi", fr: "Fromage" },
    dish: { en: "Three Gozitan sheep's cheeses · carob · honey", it: "Tre formaggi di pecora gozitani · carrube · miele", fr: "Trois fromages de brebis gozitains · caroube · miel" },
    desc: {
      en: "A small board with three ages of gbejniet, our local sheep's cheese. With carob syrup made down the road and rock honey from Dingli.",
      it: "Un piccolo tagliere con tre stagionature di gbejniet, il nostro formaggio di pecora locale. Con sciroppo di carruba fatto a pochi passi e miele roccioso di Dingli.",
      fr: "Un petit plateau de trois âges de gbejniet, notre fromage de brebis local. Avec du sirop de caroube fait à deux pas et du miel de Dingli.",
    },
  },
  {
    num: "VI.",
    title: { en: "Dessert", it: "Dolce", fr: "Dessert" },
    dish: { en: "Almond semifreddo · rock honey", it: "Semifreddo alle mandorle · miele roccioso", fr: "Semifreddo aux amandes · miel de roche" },
    desc: {
      en: "Often almond. Always some form of honey. Sometimes a roasted fig. The dessert changes more than anything else on the menu.",
      it: "Spesso mandorla. Sempre qualche forma di miele. A volte un fico arrostito. Il dolce è ciò che cambia più spesso.",
      fr: "Souvent l'amande. Toujours du miel. Parfois une figue rôtie. Le dessert change plus que tout le reste du menu.",
    },
  },
];

function Inner() {
  const { lang } = useRestaurantLang();
  return (
    <div style={{ background: C.bg, color: C.cream, fontFamily: fBody }}>
      <DemoBanner />
      <RestaurantNav />

      <section className="relative w-full h-[55vh] min-h-[440px] overflow-hidden">
        <Image src="/images/restaurant/menu-book.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,9,8,0.35) 0%, rgba(11,9,8,0.75) 100%)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-10 pb-16">
            <div className="max-w-[1500px] mx-auto">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.25 }} className="text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color: C.copper, fontFamily: fMono }}>
                — {tri("Six courses · changes daily", "Sei portate · cambia ogni giorno", "Six plats · change chaque jour", lang)}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35 }}
                className="max-w-4xl"
                style={{ fontFamily: fHead, fontSize: "clamp(52px, 9vw, 140px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.015em", color: C.cream, paddingBottom: "0.15em" }}
              >
                {tri("The", "Il", "Le", lang)} <em style={{ fontStyle: "italic", color: C.copper }}>{tri("Menu", "Menù", "Menu", lang)}</em>
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-[13px] leading-[1.8] italic mb-6" style={{ fontFamily: fHead, color: C.cream }}>
                {tri(
                  "We do not take orders. Everyone eats the same six courses, prepared the same way, delivered at the same pace.",
                  "Non prendiamo ordinazioni. Tutti mangiano le stesse sei portate, preparate nello stesso modo, servite con lo stesso ritmo.",
                  "Nous ne prenons pas de commandes. Tous mangent les six mêmes plats, préparés de la même manière, servis au même rythme.",
                  lang
                )}
              </p>
              <p className="text-[11px] tracking-[0.25em] uppercase" style={{ color: C.copper, fontFamily: fMono }}>
                € 145 · {tri("Pairing", "Abbinamento", "Accord", lang)} € 85
              </p>
              <Rule className="mt-10" />
            </div>
          </Reveal>

          <ol className="space-y-14">
            {courses.map((c, i) => (
              <Reveal key={c.num} delay={i * 0.05}>
                <li className="grid grid-cols-12 gap-5" style={{ borderTop: `1px solid ${C.border}`, paddingTop: 28 }}>
                  <span className="col-span-2 md:col-span-1 text-[20px] pt-1" style={{ color: C.copper, fontFamily: fHead }}>
                    {c.num}
                  </span>
                  <div className="col-span-10 md:col-span-11">
                    <p className="text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: C.copper, fontFamily: fMono }}>
                      — {tri(c.title.en, c.title.it, c.title.fr, lang)}
                    </p>
                    <h3 className="italic mb-5" style={{ fontFamily: fHead, fontSize: "clamp(26px, 3.5vw, 42px)", lineHeight: 1.15, fontStyle: "italic", color: C.cream, paddingBottom: "0.1em" }}>
                      {tri(c.dish.en, c.dish.it, c.dish.fr, lang)}
                    </h3>
                    <p className="text-[14px] leading-[1.85] max-w-xl" style={{ color: C.muted }}>
                      {tri(c.desc.en, c.desc.it, c.desc.fr, lang)}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.3}>
            <div className="mt-20 text-center text-[12px] tracking-wider uppercase italic" style={{ color: C.muted, fontFamily: fMono }}>
              {tri(
                "Vegetarian menu available on 48 hours' notice. Allergies & intolerances — please tell us on booking.",
                "Menù vegetariano disponibile con 48 ore di preavviso. Allergie e intolleranze — diteci alla prenotazione.",
                "Menu végétarien disponible avec 48 heures de préavis. Allergies et intolérances — signalez-les à la réservation.",
                lang
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <RestaurantFooter />
    </div>
  );
}

export default function RestaurantMenuPage() {
  return <RestaurantLangProvider><Inner /></RestaurantLangProvider>;
}
