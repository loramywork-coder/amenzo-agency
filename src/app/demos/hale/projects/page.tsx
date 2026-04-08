"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Grid3x3, List } from "lucide-react";
import {
  C, fHead, fBody, fMono, Reveal, Rule,
  HaleNav, HaleFooter, HaleLangProvider, useHaleLang, tri, projects,
} from "../_shared";

function HaleProjectsInner() {
  const { lang } = useHaleLang();
  const [view, setView] = useState<"grid" | "list">("grid");
  const [filter, setFilter] = useState<"all" | "Residential" | "Commercial" | "Interior" | "Landscape">("all");

  const filters = [
    { id: "all" as const, en: "All", de: "Alle", fr: "Tous" },
    { id: "Residential" as const, en: "Residential", de: "Wohnbau", fr: "Résidentiel" },
    { id: "Commercial" as const, en: "Commercial", de: "Gewerbebau", fr: "Commercial" },
    { id: "Interior" as const, en: "Interior", de: "Innenarchitektur", fr: "Intérieur" },
    { id: "Landscape" as const, en: "Landscape", de: "Landschaftsbau", fr: "Paysage" },
  ];

  const filtered = projects.filter((p) => filter === "all" || p.type.en === filter);

  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
      <DemoBanner />
      <HaleNav />

      <section className="pt-40 md:pt-48 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[10px] tracking-[0.3em] uppercase mb-6"
            style={{ color: C.grey, fontFamily: fMono }}
          >
            — {tri("Index", "Index", "Index", lang)} / {String(filtered.length).padStart(2, "0")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{ fontFamily: fHead, fontSize: "clamp(52px, 9vw, 140px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.02em", color: C.dark }}
          >
            {tri("Projects.", "Projekte.", "Projets.", lang)}
          </motion.h1>
        </div>
      </section>

      <section className="px-6 md:px-10 mt-20">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between flex-wrap gap-4 pb-6" style={{ borderBottom: `1px solid ${C.border}` }}>
          <div className="flex items-center gap-6 text-[11px] tracking-wider uppercase" style={{ fontFamily: fMono }}>
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className="transition-opacity"
                style={{ color: filter === f.id ? C.dark : C.grey, fontWeight: filter === f.id ? 700 : 400 }}
              >
                {tri(f.en, f.de, f.fr, lang)}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setView("grid")} aria-label="Grid view" className="p-2" style={{ color: view === "grid" ? C.dark : C.grey }}>
              <Grid3x3 size={16} />
            </button>
            <button onClick={() => setView("list")} aria-label="List view" className="p-2" style={{ color: view === "list" ? C.dark : C.grey }}>
              <List size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 md:px-10 py-14 pb-32">
        <div className="max-w-[1400px] mx-auto">
          {view === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <Link href={`/demos/hale/projects/${p.slug}`} className="group block no-underline">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={`/images/hale/${p.heroImg}`} alt={p.titleEn} fill className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]" />
                    </div>
                    <div className="flex items-start justify-between mt-5 gap-6">
                      <div>
                        <p className="text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: C.grey, fontFamily: fMono }}>
                          — {p.num} · {tri(p.type.en, p.type.de, p.type.fr, lang)}
                        </p>
                        <h2 style={{ fontFamily: fHead, fontSize: 30, lineHeight: 1.05, fontWeight: 400, color: C.dark }}>
                          {tri(p.titleEn, p.titleDe, p.titleFr, lang)}
                        </h2>
                      </div>
                      <span className="text-[11px] tracking-wider uppercase whitespace-nowrap pt-1" style={{ color: C.grey, fontFamily: fMono }}>
                        {p.location} — {p.year}
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <div>
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.05}>
                  <Link
                    href={`/demos/hale/projects/${p.slug}`}
                    className="grid grid-cols-12 gap-4 py-8 items-baseline no-underline transition-opacity hover:opacity-70"
                    style={{ borderBottom: `1px solid ${C.border}`, color: C.dark }}
                  >
                    <span className="col-span-1 text-[12px]" style={{ color: C.grey, fontFamily: fMono }}>— {p.num}</span>
                    <span className="col-span-5" style={{ fontFamily: fHead, fontSize: 26, lineHeight: 1.1, color: C.dark }}>
                      {tri(p.titleEn, p.titleDe, p.titleFr, lang)}
                    </span>
                    <span className="col-span-3 text-[11px] tracking-wider uppercase" style={{ color: C.grey, fontFamily: fMono }}>
                      {tri(p.type.en, p.type.de, p.type.fr, lang)}
                    </span>
                    <span className="col-span-2 text-[11px] tracking-wider uppercase" style={{ color: C.grey, fontFamily: fMono }}>{p.location}</span>
                    <span className="col-span-1 text-[11px] tracking-wider uppercase text-right" style={{ color: C.grey, fontFamily: fMono }}>{p.year}</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <HaleFooter />
    </div>
  );
}

export default function HaleProjectsPage() {
  return (
    <HaleLangProvider>
      <HaleProjectsInner />
    </HaleLangProvider>
  );
}
