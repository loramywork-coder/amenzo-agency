"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { ArrowLeft } from "lucide-react";
import { C, fHead, fBody, fMono, Reveal, Rule, HaleNav, HaleFooter, HaleLangProvider, useHaleLang, tri } from "../../_shared";
import { articles } from "../page";

function Inner({ slug }: { slug: string }) {
  const { lang } = useHaleLang();
  const a = articles.find((x) => x.slug === slug);
  if (!a) return notFound();

  const bodyEn = [
    "In an age of one-click renders, the section drawing can feel almost anachronistic. You put a knife through the building, look at what you've sliced, and try to understand it from the inside. It is slow, demanding, and almost impossible to fake.",
    "We begin every project with a section. Not a plan. The plan tells you what goes where. The section tells you what it feels like to move through. It shows you the ceiling heights that matter, the staircase that takes forever, the moment where the light finally hits the floor.",
    "You cannot hide behind a section drawing. If the proportion is wrong, you see it immediately. If the floor-to-ceiling height is vanity rather than function, the section exposes it. A plan can lie. A section tells the truth.",
    "Most of the buildings we love — the ones we come back to, the ones that won't let us leave — are buildings that were designed in section. Carlo Scarpa drew sections. Sigurd Lewerentz drew sections. Peter Zumthor draws sections still.",
    "There's a reason. Architecture is fundamentally a three-dimensional craft, and no drawing communicates the third dimension more honestly than a cut through the middle of it.",
  ];
  const bodyDe = [
    "In einer Zeit der Ein-Klick-Renderings kann der Schnitt fast anachronistisch wirken. Man legt das Messer durch das Gebäude, schaut an, was man zerschnitten hat, und versucht es von innen zu verstehen. Es ist langsam, fordernd, und fast unmöglich zu fälschen.",
    "Wir beginnen jedes Projekt mit einem Schnitt. Nicht mit dem Grundriss. Der Grundriss sagt, was wohin gehört. Der Schnitt sagt, wie es sich anfühlt, sich hindurchzubewegen.",
    "Man kann sich nicht hinter einem Schnitt verstecken. Wenn die Proportion nicht stimmt, sieht man es sofort. Wenn die Raumhöhe Eitelkeit statt Funktion ist, entlarvt sie der Schnitt. Ein Plan kann lügen. Ein Schnitt sagt die Wahrheit.",
    "Die meisten Gebäude, die wir lieben — jene, zu denen wir zurückkehren, die uns nicht loslassen — sind im Schnitt entworfen worden. Carlo Scarpa zeichnete Schnitte. Sigurd Lewerentz zeichnete Schnitte. Peter Zumthor zeichnet noch heute Schnitte.",
    "Es gibt einen Grund. Architektur ist ein dreidimensionales Handwerk, und keine Zeichnung vermittelt die dritte Dimension ehrlicher als ein Schnitt durch die Mitte.",
  ];
  const bodyFr = [
    "À l'ère des rendus en un clic, le dessin en coupe peut sembler presque anachronique. On passe une lame à travers le bâtiment, on regarde ce qu'on a tranché, et on essaie de le comprendre de l'intérieur. C'est lent, exigeant, et presque impossible à truquer.",
    "Nous commençons chaque projet par une coupe. Pas par un plan. Le plan vous dit ce qui va où. La coupe vous dit ce que l'on ressent en se déplaçant à l'intérieur.",
    "On ne peut pas se cacher derrière une coupe. Si la proportion est mauvaise, on le voit immédiatement. Si la hauteur sous plafond est de la vanité plutôt que de la fonction, la coupe la révèle. Un plan peut mentir. Une coupe dit la vérité.",
    "La plupart des bâtiments que nous aimons — ceux vers lesquels on revient, ceux qui ne nous lâchent pas — sont des bâtiments dessinés en coupe. Carlo Scarpa dessinait des coupes. Sigurd Lewerentz dessinait des coupes. Peter Zumthor en dessine encore.",
    "Il y a une raison. L'architecture est un art fondamentalement tridimensionnel, et aucun dessin ne communique la troisième dimension plus honnêtement qu'une coupe faite en son cœur.",
  ];

  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HaleNav />

      {/* Hero image */}
      <section className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
        <Image src={`/images/hale/${a.img}`} alt="" fill priority className="object-cover" />
      </section>

      <article className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-[760px] mx-auto">
          <Reveal>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: C.grey, fontFamily: fMono }}>
              — {tri(a.tag.en, a.tag.de, a.tag.fr, lang)} · {a.date}
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-12"
              style={{ fontFamily: fHead, fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1, fontWeight: 400, letterSpacing: "-0.02em" }}
            >
              {tri(a.titleEn, a.titleDe, a.titleFr, lang)}
            </motion.h1>
          </Reveal>
          <Rule className="opacity-25 mb-10" />
          <Reveal delay={0.1}>
            <div className="space-y-7 text-[18px] leading-[1.85]" style={{ color: C.dark }}>
              {(lang === "de" ? bodyDe : lang === "fr" ? bodyFr : bodyEn).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Rule className="opacity-25 my-12" />
          <div className="flex items-center justify-between text-[11px] tracking-wider uppercase" style={{ fontFamily: fMono }}>
            <Link href="/demos/hale/journal" className="inline-flex items-center gap-2 no-underline" style={{ color: C.dark }}>
              <ArrowLeft size={14} /> {tri("All articles", "Alle Artikel", "Tous les articles", lang)}
            </Link>
            <span style={{ color: C.grey }}>— Thomas Hale</span>
          </div>
        </div>
      </article>

      <HaleFooter />
    </div>
  );
}

export default function HaleArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  return <HaleLangProvider><Inner slug={slug} /></HaleLangProvider>;
}
