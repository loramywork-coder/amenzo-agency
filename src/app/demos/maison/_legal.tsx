"use client";

import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { MaisonNav, MaisonFooter, MaisonLangProvider, C, fHead, fBody, fMono } from "./_shared";

export type LegalSection = { title: string; body: string[] };

export function LegalPage({ eyebrow, title, sections }: { eyebrow: string; title: string; sections: LegalSection[] }) {
  return (
    <MaisonLangProvider>
      <div style={{ background: C.bg, color: C.dark, fontFamily: fBody }}>
        <DemoBanner />
        <MaisonNav />

        <section className="pt-40 md:pt-48 px-6 md:px-10 pb-16">
          <div className="max-w-[900px] mx-auto">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: C.muted, fontFamily: fMono }}>
              — {eyebrow}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} style={{ fontFamily: fHead, fontSize: "clamp(44px, 7vw, 110px)", lineHeight: 0.92, fontWeight: 400, letterSpacing: "-0.02em", color: C.dark }}>
              {title}
            </motion.h1>
          </div>
        </section>

        <section className="px-6 md:px-10 pb-32">
          <div className="max-w-[760px] mx-auto" style={{ borderTop: `1px solid ${C.border}`, paddingTop: 48 }}>
            {sections.map((s) => (
              <section key={s.title} className="mb-14">
                <h2 className="text-[11px] tracking-[0.25em] uppercase mb-5" style={{ color: C.gold, fontFamily: fMono }}>
                  — {s.title}
                </h2>
                <div className="space-y-5 text-[15px] leading-[1.85]" style={{ color: C.dark }}>
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <MaisonFooter />
      </div>
    </MaisonLangProvider>
  );
}
