"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { ArrowRight, Check } from "lucide-react";
import {
  C, fHead, fBody, fMono, Reveal, Rule, Eyebrow,
  BeautyNav, BeautyFooter, IMG, services,
} from "../_shared";

const CATEGORIES = ["Facials", "Eyes & Brows", "Body", "Packages"] as const;

export default function TreatmentsPage() {
  return (
    <div style={{ background: C.bg, color: C.textPrimary, fontFamily: fBody }}>
      <DemoBanner />
      <BeautyNav />

      {/* HERO */}
      <section className="relative w-full h-[65vh] min-h-[520px] overflow-hidden">
        <Image src={IMG.treatmentsHero} alt="" fill priority className="object-cover" sizes="100vw" quality={90} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(28,25,23,0.4), rgba(28,25,23,0.7))" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[11px] tracking-[0.45em] uppercase mb-6"
              style={{ color: C.goldLight, fontFamily: fMono }}>
              — Our Treatments
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45 }}
              style={{ fontFamily: fHead, fontSize: "clamp(44px, 7vw, 100px)", lineHeight: 0.95, fontWeight: 500, color: C.onDark }}>
              Crafted for <em style={{ fontStyle: "italic", color: C.goldLight }}>your skin</em>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 text-[15px] max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(250,247,242,0.85)" }}>
              Every treatment is a personalised experience, designed to bring out your natural radiance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CATEGORY NAV */}
      <div className="sticky top-[88px] md:top-[96px] z-30 py-5 px-6 md:px-10" style={{ background: "rgba(250,247,242,0.95)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-[1400px] mx-auto overflow-x-auto">
          <ul className="flex gap-8 md:gap-12 whitespace-nowrap justify-center">
            {CATEGORIES.map((c) => (
              <li key={c}>
                <a href={`#${c.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-[11px] tracking-[0.15em] uppercase no-underline transition-opacity hover:opacity-70"
                  style={{ color: C.textSecondary, fontFamily: fBody, fontWeight: 500 }}>
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* TREATMENTS BY CATEGORY */}
      {CATEGORIES.map((cat, catIdx) => {
        const list = services.filter((s) => s.category === cat);
        const bg = catIdx % 2 === 0 ? C.bg : C.highlight;
        return (
          <section
            key={cat}
            id={cat.replace(/\s+/g, "-").toLowerCase()}
            className="py-24 md:py-36 px-6 md:px-10 scroll-mt-32"
            style={{ background: bg }}
          >
            <div className="max-w-[1400px] mx-auto">
              <Reveal className="text-center max-w-2xl mx-auto">
                <Eyebrow>{cat}</Eyebrow>
                <Rule className="my-6" />
                <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 1.05, fontWeight: 500, color: C.dark }}>
                  {cat === "Facials" ? <>Our <em style={{ fontStyle: "italic", color: C.gold }}>facial</em> menu</> :
                   cat === "Eyes & Brows" ? <>Eyes & <em style={{ fontStyle: "italic", color: C.gold }}>brows</em></> :
                   cat === "Body" ? <>Body <em style={{ fontStyle: "italic", color: C.gold }}>treatments</em></> :
                   <>Signature <em style={{ fontStyle: "italic", color: C.gold }}>packages</em></>}
                </h2>
              </Reveal>

              <div className="mt-20 space-y-24 md:space-y-32">
                {list.map((s, i) => {
                  const reverse = i % 2 === 1;
                  return (
                    <Reveal key={s.slug}>
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                        <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
                          <div className="relative aspect-[5/4] rounded-md overflow-hidden" style={{ boxShadow: "0 16px 50px rgba(26,26,26,0.12)" }}>
                            <Image src={s.image} alt={s.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={90} />
                            <span className="absolute top-6 left-6 text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full" style={{ background: "rgba(250,247,242,0.9)", color: C.textPrimary, fontFamily: fMono, backdropFilter: "blur(6px)" }}>
                              {s.num}
                            </span>
                          </div>
                        </div>
                        <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
                          <h3 style={{ fontFamily: fHead, fontSize: "clamp(32px, 3.6vw, 52px)", lineHeight: 1.05, fontWeight: 500, color: C.dark }}>
                            {s.name}
                          </h3>
                          <div className="mt-4 flex items-center gap-5 text-[12px] tracking-[0.1em] uppercase" style={{ fontFamily: fMono }}>
                            <span style={{ color: C.textTertiary }}>{s.duration}</span>
                            <span className="w-1 h-1 rounded-full" style={{ background: C.gold }} />
                            <span style={{ color: C.gold, fontWeight: 600 }}>CHF {s.price}</span>
                          </div>
                          <p className="mt-7 text-[15px] leading-[1.8]" style={{ color: C.textSecondary }}>
                            {s.fullDesc}
                          </p>
                          <ul className="mt-7 space-y-3">
                            {s.expect.map((e) => (
                              <li key={e} className="flex items-start gap-3 text-[14px]" style={{ color: C.textSecondary }}>
                                <Check size={16} style={{ color: C.gold, marginTop: 3, flexShrink: 0 }} />
                                {e}
                              </li>
                            ))}
                          </ul>
                          <Link
                            href="/demos/beauty/contact"
                            className="mt-10 inline-flex items-center gap-3 px-7 py-3 text-[11px] tracking-[0.15em] uppercase no-underline rounded-full transition-colors"
                            style={{ background: "transparent", border: `1.5px solid ${C.gold}`, color: C.gold, fontFamily: fBody, fontWeight: 600 }}
                          >
                            Book This Treatment <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-24 md:py-36 px-6 md:px-10 text-center" style={{ background: C.dark, color: C.onDark }}>
        <Reveal className="max-w-2xl mx-auto">
          <Eyebrow light>Not Sure?</Eyebrow>
          <h2 className="mt-6" style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1.05, fontWeight: 500, color: C.onDark }}>
            Book a <em style={{ fontStyle: "italic", color: C.goldLight }}>free consultation</em>
          </h2>
          <p className="mt-8 text-[15px]" style={{ color: C.onDarkSub }}>
            A complimentary 15-minute skin consultation to help us guide you to the right treatment.
          </p>
          <Link
            href="/demos/beauty/contact"
            className="mt-10 inline-flex items-center gap-3 px-10 py-4 text-[11px] tracking-[0.15em] uppercase no-underline rounded-full"
            style={{ background: C.gold, color: C.warmWhite, fontFamily: fBody, fontWeight: 600 }}
          >
            Book a Consultation <ArrowRight size={14} />
          </Link>
        </Reveal>
      </section>

      <BeautyFooter />
    </div>
  );
}
