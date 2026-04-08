"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { ArrowLeft } from "lucide-react";
import {
  C, fHead, fBody, Reveal, GoldDivider,
  CasaNav, CasaFooter, CasaLocaleProvider, useCasaLocale, bi,
} from "../../_shared";
import { posts } from "../page";

function CasaArticleInner({ slug }: { slug: string }) {
  const { locale } = useCasaLocale();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const bodyEn = [
    "We don't use a lot of ingredients. On a typical plate at Casa Luma there might be four — maybe five if you count salt. So when one of them is olive oil, it has to be the right oil.",
    "Our house oil comes from a 60-year-old grove of Nocellara del Belice trees just outside Trapani, on the western coast of Sicily. Anna's uncle, Giuseppe, has farmed these trees since he inherited the land from his father in 1984. Before that, his father farmed it since 1951. That's a lot of olives.",
    "The first thing you notice about Nocellara oil is the colour — bright, almost fluorescent green. The second is the flavour: grassy, peppery at the back of the throat, a hint of fresh tomato leaf. It's not subtle. Which is exactly why we want it.",
    "We use it in three ways. First, as a cooking fat — pasta water, shallow-frying vegetables, searing fish. Second, as a finishing oil — a drizzle over grilled octopus, on top of the burrata, swirled into white bean soup. Third, we eat it with bread at the start of every meal. A small glass dish, a tear of rosemary focaccia. That's it.",
    "Every year in October we fly down to Trapani for the harvest. Luca helps with the press. Anna brings home a suitcase of oil that never quite fits the weight limit. We've been doing this since 2016. The plan is to do it forever.",
  ];

  const bodyDe = [
    "Wir verwenden nicht viele Zutaten. Auf einem typischen Teller bei Casa Luma sind es vielleicht vier — fünf, wenn man Salz mitzählt. Wenn eine davon Olivenöl ist, muss es das richtige sein.",
    "Unser Hausöl stammt aus einem 60 Jahre alten Nocellara-del-Belice-Hain direkt ausserhalb von Trapani, an der Westküste Siziliens. Annas Onkel Giuseppe bewirtschaftet diese Bäume, seit er 1984 das Land von seinem Vater erbte. Davor bewirtschaftete es sein Vater seit 1951. Das sind viele Oliven.",
    "Das Erste, was man an Nocellara-Öl bemerkt, ist die Farbe — leuchtend, fast fluoreszierend grün. Das Zweite ist der Geschmack: grasig, pfeffrig im Abgang, ein Hauch von frischem Tomatenblatt. Es ist nicht subtil. Genau deshalb wollen wir es.",
    "Wir verwenden es auf drei Arten. Erstens als Kochfett — Pastawasser, kurzes Anbraten von Gemüse, Fisch scharf anbraten. Zweitens als Finishing-Öl — ein Spritzer über gegrillten Octopus, auf der Burrata, in weisse Bohnensuppe eingerührt. Drittens essen wir es mit Brot zu Beginn jeder Mahlzeit. Eine kleine Glasschale, ein Stück Rosmarin-Focaccia. Das ist alles.",
    "Jedes Jahr im Oktober fliegen wir nach Trapani zur Ernte. Luca hilft bei der Presse. Anna bringt einen Koffer Öl mit, der nie ganz ins Gewicht passt. Wir machen das seit 2016. Der Plan ist, es für immer zu tun.",
  ];

  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <CasaNav />

      {/* Hero image */}
      <section className="relative w-full h-[60vh] min-h-[420px] overflow-hidden">
        <Image src={post.img} alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,22,18,0.2) 0%, rgba(26,22,18,0.55) 100%)" }} />
      </section>

      {/* Article body */}
      <article className="px-6 md:px-10 py-20 md:py-28 -mt-32 relative">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div
              className="p-8 md:p-12 mb-12 text-center"
              style={{ background: C.bg, borderRadius: 2, boxShadow: "0 30px 80px -20px rgba(26,22,18,0.2)" }}
            >
              <p className="text-[11px] tracking-[0.3em] uppercase mb-5" style={{ color: C.terra }}>
                {bi(post.tagEn, post.tagDe, locale)}
              </p>
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="italic mb-6"
                style={{ fontFamily: fHead, fontSize: "clamp(32px, 5vw, 54px)", lineHeight: 1.1, fontStyle: "italic", color: C.dark }}
              >
                {bi(post.titleEn, post.titleDe, locale)}
              </motion.h1>
              <p className="text-[12px] tracking-wider uppercase" style={{ color: C.muted }}>
                {bi(post.dateEn, post.dateDe, locale)} · {bi(post.readEn, post.readDe, locale)}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-[17px] leading-[1.9]" style={{ color: C.dark, fontFamily: fBody }}>
              {(locale === "de" ? bodyDe : bodyEn).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <GoldDivider className="my-12" />
            <div className="flex items-center justify-between text-[12px]">
              <Link
                href="/demos/casa/blog"
                className="inline-flex items-center gap-2 tracking-wider uppercase font-semibold no-underline transition-opacity hover:opacity-70"
                style={{ color: C.terra }}
              >
                <ArrowLeft size={14} /> {bi("All articles", "Alle Artikel", locale)}
              </Link>
              <span className="italic" style={{ fontFamily: fHead, color: C.muted, fontSize: 16 }}>
                — {bi("Anna & Luca", "Anna & Luca", locale)}
              </span>
            </div>
          </Reveal>
        </div>
      </article>

      <CasaFooter />
    </div>
  );
}

export default function CasaArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  return (
    <CasaLocaleProvider>
      <CasaArticleInner slug={slug} />
    </CasaLocaleProvider>
  );
}
