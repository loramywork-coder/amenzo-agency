"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { ArrowLeft } from "lucide-react";
import { MaisonNav, MaisonFooter, MaisonLangProvider, useMaisonLang, tri, C, fHead, fBody, fMono } from "../../_shared";
import { journalPosts } from "../page";

function Inner({ slug }: { slug: string }) {
  const { lang } = useMaisonLang();
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const body = [
    "Eight collections a year is a number that exists only because the industry decided it should exist. It came from a place of marketing — not of craft, and certainly not of customers who needed that much stuff.",
    "We make two collections a year. Spring / Summer and Autumn / Winter. Each one has maybe fifteen pieces. Most are replenished from the previous season. We introduce around six genuinely new styles per year.",
    "That's not a constraint. It's a feature. A small collection means every single piece has to earn its place. It means we can spend six months on a single blazer without losing the studio. It means when you buy a Maison Noir piece, you are buying something that has been worried over.",
    "It also means we carry almost no inventory risk. We know what sells. We make it again. We don't chase trends because we don't exist in the trend cycle.",
    "The real argument for making less isn't environmental — although that's a happy side-effect. The real argument is that it's the only way to make things properly.",
  ];

  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <MaisonNav />

      <section className="relative w-full h-[65vh] min-h-[480px] overflow-hidden">
        <Image src={`/images/maison/${post.img}`} alt="" fill priority className="object-cover" />
      </section>

      <article className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: C.muted, fontFamily: fMono }}>
            — {post.tag} · {post.date}
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-12"
            style={{ fontFamily: fHead, fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1.02, fontWeight: 400, letterSpacing: "-0.015em", color: C.dark }}
          >
            {tri(post.titleEn, post.titleFr, post.titleDe, lang)}
          </motion.h1>
          <div className="space-y-7 text-[18px] leading-[1.85]" style={{ color: C.dark }}>
            {body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-14 flex items-center justify-between text-[11px] tracking-wider uppercase" style={{ fontFamily: fMono, borderTop: `1px solid ${C.border}`, paddingTop: 24 }}>
            <Link href="/demos/maison/journal" className="inline-flex items-center gap-2 no-underline" style={{ color: C.dark }}>
              <ArrowLeft size={14} /> {tri("All articles", "Tous les articles", "Alle Artikel", lang)}
            </Link>
            <span style={{ color: C.muted }}>— Marie-Claire Dufour</span>
          </div>
        </div>
      </article>

      <MaisonFooter />
    </div>
  );
}

export default function MaisonArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  return <MaisonLangProvider><Inner slug={slug} /></MaisonLangProvider>;
}
