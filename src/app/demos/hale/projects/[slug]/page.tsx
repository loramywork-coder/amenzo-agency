"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  C, fHead, fBody, fMono, Reveal, Rule,
  HaleNav, HaleFooter, HaleLangProvider, useHaleLang, tri, projects,
} from "../../_shared";

function HaleProjectDetailInner({ slug }: { slug: string }) {
  const { lang } = useHaleLang();
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx < 0) return notFound();
  const p = projects[idx];
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HaleNav />

      {/* Hero full-bleed */}
      <section className="relative w-full h-screen min-h-[640px] overflow-hidden">
        <Image src={`/images/hale/${p.heroImg}`} alt={p.titleEn} fill priority className="object-cover" />
      </section>

      {/* Info bar */}
      <section className="px-6 md:px-10 py-10" style={{ borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: tri("Type", "Typ", "Type", lang), value: tri(p.type.en, p.type.de, p.type.fr, lang) },
            { label: tri("Location", "Standort", "Lieu", lang), value: p.location },
            { label: tri("Year", "Jahr", "Année", lang), value: p.year },
            { label: tri("Area", "Fläche", "Surface", lang), value: p.area },
          ].map((row) => (
            <div key={row.label}>
              <p className="text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: C.grey, fontFamily: fMono }}>
                — {row.label}
              </p>
              <p style={{ fontFamily: fHead, fontSize: 20, lineHeight: 1.1, color: C.dark }}>{row.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Title + narrative */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-5">
            <p className="text-[10px] tracking-[0.25em] uppercase mb-5" style={{ color: C.grey, fontFamily: fMono }}>
              — {p.num}
            </p>
            <h1 style={{ fontFamily: fHead, fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.02em", color: C.dark }}>
              {tri(p.titleEn, p.titleDe, p.titleFr, lang)}
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
            <p className="text-[17px] md:text-[19px] leading-[1.7]" style={{ color: C.dark }}>
              {tri(p.descEn, p.descDe, p.descFr, lang)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Photo layouts — full-bleed, split, single */}
      <section className="pb-20">
        {p.images.slice(1).map((img, i) => {
          const isFullBleed = i % 3 === 0;
          const isSplit = i % 3 === 1;
          if (isFullBleed) {
            return (
              <Reveal key={img}>
                <div className="relative w-full aspect-[16/9] mb-10 md:mb-16">
                  <Image src={`/images/hale/${img}`} alt="" fill className="object-cover" />
                </div>
              </Reveal>
            );
          }
          if (isSplit) {
            const nextImg = p.images.slice(1)[i + 1];
            if (!nextImg) {
              return (
                <Reveal key={img}>
                  <div className="px-6 md:px-10 mb-10 md:mb-16">
                    <div className="max-w-[1100px] mx-auto relative aspect-[4/3]">
                      <Image src={`/images/hale/${img}`} alt="" fill className="object-cover" />
                    </div>
                  </div>
                </Reveal>
              );
            }
            return (
              <Reveal key={img}>
                <div className="px-6 md:px-10 mb-10 md:mb-16">
                  <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="relative aspect-[4/5]"><Image src={`/images/hale/${img}`} alt="" fill className="object-cover" /></div>
                    <div className="relative aspect-[4/5] md:mt-16"><Image src={`/images/hale/${nextImg}`} alt="" fill className="object-cover" /></div>
                  </div>
                </div>
              </Reveal>
            );
          }
          return null;
        })}
      </section>

      {/* Prev / next */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <Rule className="opacity-25 mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <Link href={`/demos/hale/projects/${prev.slug}`} className="no-underline transition-opacity hover:opacity-60 flex items-center gap-3" style={{ color: C.dark }}>
              <ArrowLeft size={16} />
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: C.grey, fontFamily: fMono }}>
                  — {tri("Previous", "Vorheriges", "Précédent", lang)}
                </p>
                <p style={{ fontFamily: fHead, fontSize: 22, lineHeight: 1.1, color: C.dark }}>
                  {tri(prev.titleEn, prev.titleDe, prev.titleFr, lang)}
                </p>
              </div>
            </Link>
            <div className="text-center">
              <Link href="/demos/hale/projects" className="text-[11px] tracking-wider uppercase no-underline" style={{ color: C.grey, fontFamily: fMono }}>
                {tri("Index", "Index", "Index", lang)} →
              </Link>
            </div>
            <Link href={`/demos/hale/projects/${next.slug}`} className="no-underline transition-opacity hover:opacity-60 flex items-center justify-end gap-3 text-right" style={{ color: C.dark }}>
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: C.grey, fontFamily: fMono }}>
                  — {tri("Next", "Nächstes", "Suivant", lang)}
                </p>
                <p style={{ fontFamily: fHead, fontSize: 22, lineHeight: 1.1, color: C.dark }}>
                  {tri(next.titleEn, next.titleDe, next.titleFr, lang)}
                </p>
              </div>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <HaleFooter />
    </div>
  );
}

export default function HaleProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  return (
    <HaleLangProvider>
      <HaleProjectDetailInner slug={slug} />
    </HaleLangProvider>
  );
}
