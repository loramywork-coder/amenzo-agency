"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { MaisonNav, MaisonFooter, MaisonLangProvider, useMaisonLang, tri, Reveal, C, fHead, fBody, fMono } from "../_shared";

function Inner() {
  const { lang } = useMaisonLang();
  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <MaisonNav />

      {/* Full-bleed hero */}
      <section className="relative w-full h-screen min-h-[680px] overflow-hidden">
        <Image src="/images/maison/lookbook-1.jpg" alt="SS26 Lookbook" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(13,13,13,0.15) 0%, rgba(13,13,13,0.55) 100%)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-10 pb-20">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-[10px] tracking-[0.3em] uppercase mb-5 text-white/75" style={{ fontFamily: fMono }}>
              — SS26 / Lookbook
            </motion.p>
            <motion.h1
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.77, 0, 0.175, 1] }}
              className="text-white max-w-4xl"
              style={{ fontFamily: fHead, fontSize: "clamp(48px, 9vw, 140px)", lineHeight: 0.9, fontWeight: 400, letterSpacing: "-0.02em", fontStyle: "italic", color: "#F8F6F3" }}
            >
              {tri("The collection in motion.", "La collection en mouvement.", "Die Kollektion in Bewegung.", lang)}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Split image spread */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <Reveal className="md:pt-24">
            <div className="relative aspect-[3/4]">
              <Image src="/images/maison/lookbook-2.jpg" alt="" fill className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[3/4]">
              <Image src="/images/maison/lookbook-3.jpg" alt="" fill className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Full-bleed panel */}
      <section className="relative w-full h-[80vh] min-h-[580px] overflow-hidden my-12">
        <Image src="/images/maison/lookbook-4.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-10 pb-14">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-3 text-white/75" style={{ fontFamily: fMono }}>— Look 04</p>
            <p className="text-white max-w-xl text-xl md:text-2xl italic" style={{ fontFamily: fHead, color: "#F8F6F3" }}>
              {tri("Oversized blazer · wide-leg trouser · silk camisole.", "Blazer oversized · pantalon large · camisole en soie.", "Oversized-Blazer · weite Hose · Seidencamisole.", lang)}
            </p>
            <Link href="/demos/maison/shop" className="mt-6 inline-flex items-center px-6 py-3 text-[11px] tracking-wider uppercase no-underline" style={{ background: "#F8F6F3", color: C.dark, fontFamily: fBody }}>
              {tri("Shop this look", "Shopper ce look", "Look shoppen", lang)} →
            </Link>
          </div>
        </div>
      </section>

      {/* Horizontal scroll editorial strip */}
      <section className="py-16 overflow-hidden">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-5 px-6 md:px-10">
            {["lookbook-5.jpg", "lookbook-6.jpg", "lookbook-2.jpg", "lookbook-4.jpg"].map((src, i) => (
              <Reveal key={`${src}-${i}`} delay={i * 0.08} className="shrink-0 w-[75vw] md:w-[42vw] max-w-[600px]">
                <div className="relative aspect-[4/5]">
                  <Image src={`/images/maison/${src}`} alt="" fill className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing panel */}
      <section className="px-6 md:px-10 py-28 text-center">
        <Reveal>
          <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.muted, fontFamily: fMono }}>— SS26</p>
          <h2 className="max-w-3xl mx-auto mb-8" style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1.05, fontWeight: 400, fontStyle: "italic", color: C.dark }}>
            {tri("Photographed in Geneva, February 2026.", "Photographié à Genève, février 2026.", "Fotografiert in Genf, Februar 2026.", lang)}
          </h2>
          <Link href="/demos/maison/shop" className="inline-flex items-center px-8 py-4 text-[11px] tracking-wider uppercase no-underline" style={{ background: C.dark, color: C.bg, fontFamily: fBody }}>
            {tri("Shop the collection", "Shopper la collection", "Die Kollektion shoppen", lang)} →
          </Link>
        </Reveal>
      </section>

      <MaisonFooter />
    </div>
  );
}

export default function MaisonLookbookPage() {
  return <MaisonLangProvider><Inner /></MaisonLangProvider>;
}
