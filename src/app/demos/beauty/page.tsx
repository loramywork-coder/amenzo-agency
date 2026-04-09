"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { ArrowRight, Star } from "lucide-react";
import {
  C, fHead, fBody, fMono, Reveal, Rule, Eyebrow, Ornament,
  BeautyNav, BeautyFooter, IMG, services, team, testimonials,
} from "./_shared";

const featuredSlugs = ["signature-facial", "hydra-glow", "brow-architecture", "lash-lift-tint", "body-sculpt-massage", "bridal-luxe"];

const trustItems = [
  "4.9 ★ — 200+ Reviews",
  "Swiss Premium Products",
  "10+ Years of Expertise",
  "Zurich's #1 Rated Studio",
];

export default function BeautyHomePage() {
  const featured = featuredSlugs.map((s) => services.find((x) => x.slug === s)!);

  return (
    <div style={{ background: C.bg, color: C.textPrimary, fontFamily: fBody }}>
      <DemoBanner />
      <BeautyNav />

      {/* HERO */}
      <section className="relative w-full h-screen min-h-[720px] overflow-hidden">
        <Image src={IMG.hero} alt="Luxury facial treatment at Aura Beauty Studio" fill priority className="object-cover" sizes="100vw" quality={90} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(28,25,23,0.25) 0%, rgba(28,25,23,0.45) 55%, rgba(28,25,23,0.75) 100%)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mb-8 flex justify-center"
              style={{ color: C.goldLight }}
            >
              <Ornament size={48} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-[11px] tracking-[0.45em] uppercase mb-8"
              style={{ color: C.goldLight, fontFamily: fMono }}
            >
              — Zürich's Premier Beauty Destination
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: fHead,
                fontSize: "clamp(52px, 9vw, 140px)",
                lineHeight: 0.95,
                fontWeight: 500,
                letterSpacing: "-0.01em",
                color: C.onDark,
              }}
            >
              Where Beauty<br /><em style={{ fontStyle: "italic", color: C.goldLight }}>Meets Intention</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9 }}
              className="mt-10 text-[15px] md:text-[17px] max-w-xl mx-auto leading-relaxed"
              style={{ color: "rgba(250,247,242,0.85)" }}
            >
              Bespoke treatments crafted around your skin, your story, your glow.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.05 }}
              className="mt-10"
            >
              <Link
                href="/demos/beauty/contact"
                className="inline-flex items-center gap-3 px-9 py-4 text-[11px] tracking-[0.15em] uppercase no-underline rounded-full transition-transform hover:scale-[1.03]"
                style={{ background: C.gold, color: C.warmWhite, fontFamily: fBody, fontWeight: 600 }}
              >
                Book Your Experience <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(250,247,242,0.7)", fontFamily: fMono }}>Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="block w-[1px] h-10"
            style={{ background: "rgba(250,247,242,0.6)" }}
          />
        </motion.div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-7 border-y" style={{ background: C.highlight, borderColor: C.border }}>
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {trustItems.map((t, i) => (
            <div key={t} className="flex items-center gap-8">
              <span className="text-[11px] tracking-[0.12em] uppercase font-medium" style={{ color: C.textSecondary }}>{t}</span>
              {i < trustItems.length - 1 && <span className="hidden md:inline-block w-1 h-1 rounded-full" style={{ background: C.gold }} />}
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-[5/6] rounded-md overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(26,26,26,0.14)" }}>
              <Image src={IMG.philosophy} alt="Serum with eucalyptus on wooden tray" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 58vw" quality={90} />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <Eyebrow>Our Philosophy</Eyebrow>
            <h2 className="mt-6" style={{ fontFamily: fHead, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 1.05, fontWeight: 500, color: C.dark }}>
              Beauty, <em style={{ fontStyle: "italic", color: C.gold }}>elevated</em>.
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-[1.8]" style={{ color: C.textSecondary }}>
              <p>
                At Aura, beauty is a form of self-care, not vanity. Every treatment is a quiet
                ritual — a moment to pause, breathe, and return to yourself. Our approach is
                holistic: we consider your skin, your lifestyle, your rhythms.
              </p>
              <p>
                We work exclusively with Swiss-sourced, cruelty-free products from the finest
                European laboratories. Every serum, every tool, every detail — chosen with
                intention.
              </p>
            </div>
            <Link
              href="/demos/beauty/about"
              className="mt-10 inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase no-underline transition-opacity hover:opacity-70"
              style={{ color: C.gold, fontFamily: fBody, fontWeight: 600, borderBottom: `1px solid ${C.gold}`, paddingBottom: 4 }}
            >
              Discover Our Story <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 md:py-36 px-6 md:px-10" style={{ background: C.highlight }}>
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto">
            <Eyebrow>What We Offer</Eyebrow>
            <Rule className="my-6" />
            <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 1.05, fontWeight: 500, color: C.dark }}>
              Our Signature <em style={{ fontStyle: "italic", color: C.gold }}>Treatments</em>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed" style={{ color: C.textSecondary }}>
              Each treatment is tailored to your unique skin and wellness needs.
            </p>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featured.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <article className="group h-full flex flex-col rounded-md overflow-hidden transition-all duration-500 hover:-translate-y-1" style={{ background: C.warmWhite, border: `1px solid ${C.border}`, boxShadow: "0 2px 8px rgba(26,26,26,0.05)" }}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image src={s.image} alt={s.name} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" quality={90} />
                    <span className="absolute top-5 left-5 text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full" style={{ background: "rgba(250,247,242,0.9)", color: C.textPrimary, fontFamily: fMono, backdropFilter: "blur(6px)" }}>
                      {s.num}
                    </span>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 style={{ fontFamily: fHead, fontSize: 28, lineHeight: 1.15, fontWeight: 500, color: C.dark }}>{s.name}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed" style={{ color: C.textSecondary }}>{s.shortDesc}</p>
                    <div className="mt-6 pt-5 flex items-center justify-between" style={{ borderTop: `1px solid ${C.border}` }}>
                      <span className="text-[11px] tracking-[0.12em] uppercase" style={{ color: C.textTertiary, fontFamily: fMono }}>{s.duration}</span>
                      <span className="text-[16px] font-semibold tracking-wide" style={{ color: C.gold, fontFamily: fBody }}>CHF {s.price}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/demos/beauty/treatments"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase no-underline"
              style={{ color: C.gold, fontFamily: fBody, fontWeight: 600, borderBottom: `1px solid ${C.gold}`, paddingBottom: 4 }}
            >
              View All Treatments <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto text-center">
          <Reveal>
            <Eyebrow>Client Love</Eyebrow>
            <Rule className="my-6" />
            <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 1.05, fontWeight: 500, color: C.dark }}>
              Words that <em style={{ fontStyle: "italic", color: C.gold }}>warm us</em>
            </h2>
          </Reveal>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="h-full p-10 text-left rounded-md" style={{ background: C.warmWhite, border: `1px solid ${C.border}` }}>
                  <div className="flex gap-0.5 mb-5" style={{ color: C.gold }}>
                    {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-[17px] leading-[1.6] italic" style={{ fontFamily: fHead, color: C.textPrimary }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-8 pt-5" style={{ borderTop: `1px solid ${C.border}` }}>
                    <p className="text-[13px] font-semibold">{t.name}</p>
                    <p className="text-[11px] tracking-[0.12em] uppercase mt-1" style={{ color: C.gold, fontFamily: fMono }}>{t.treatment}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 md:py-36 px-6 md:px-10" style={{ background: C.dark, color: C.onDark }}>
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto">
            <Eyebrow light>The Team</Eyebrow>
            <Rule className="my-6" />
            <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 1.05, fontWeight: 500, color: C.onDark }}>
              Meet your <em style={{ fontStyle: "italic", color: C.goldLight }}>specialists</em>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed" style={{ color: C.onDarkSub }}>
              Passionate experts dedicated to your glow.
            </p>
          </Reveal>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.1}>
                <article className="text-center p-10 rounded-md" style={{ background: C.darkAccent, border: `1px solid ${C.borderDark}` }}>
                  <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden" style={{ boxShadow: `0 0 0 3px ${C.gold}, 0 0 0 8px ${C.darkAccent}` }}>
                    <Image src={m.image} alt={m.name} fill className="object-cover" sizes="160px" quality={90} />
                  </div>
                  <h3 className="mt-8" style={{ fontFamily: fHead, fontSize: 28, fontWeight: 500, color: C.onDark }}>{m.name}</h3>
                  <p className="text-[11px] tracking-[0.15em] uppercase mt-2" style={{ color: C.goldLight, fontFamily: fMono }}>
                    {m.title}
                  </p>
                  <p className="mt-5 text-[14px] leading-relaxed" style={{ color: C.onDarkSub }}>{m.shortBio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="relative py-32 md:py-48 px-6 overflow-hidden">
        <Image src={IMG.ctaBg} alt="" fill className="object-cover" sizes="100vw" quality={90} />
        <div className="absolute inset-0" style={{ background: "rgba(28,25,23,0.7)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <Eyebrow light>Ready?</Eyebrow>
            <h2 className="mt-6" style={{ fontFamily: fHead, fontSize: "clamp(44px, 6vw, 84px)", lineHeight: 1.0, fontWeight: 500, color: C.onDark }}>
              Your glow <em style={{ fontStyle: "italic", color: C.goldLight }}>awaits</em>
            </h2>
            <p className="mt-8 text-[16px] leading-relaxed" style={{ color: "rgba(250,247,242,0.85)" }}>
              Book your personalised treatment and let us take care of the rest.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/demos/beauty/contact"
                className="inline-flex items-center gap-3 px-10 py-4 text-[11px] tracking-[0.15em] uppercase no-underline rounded-full transition-transform hover:scale-[1.03]"
                style={{ background: C.gold, color: C.warmWhite, fontFamily: fBody, fontWeight: 600 }}
              >
                Reserve Your Spot <ArrowRight size={14} />
              </Link>
              <a href="tel:+41445208890" className="text-[13px] no-underline hover:text-white transition-colors" style={{ color: "rgba(250,247,242,0.85)" }}>
                Or call us: +41 44 520 88 90
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <BeautyFooter />
    </div>
  );
}
