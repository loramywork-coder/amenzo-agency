"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { DemoBanner } from "@/components/demos/demo-banner";
import { ArrowRight, Heart, Shield, Leaf } from "lucide-react";
import {
  C, fHead, fBody, fMono, Reveal, Rule, Eyebrow,
  BeautyNav, BeautyFooter, IMG, team, galleryImages,
} from "../_shared";

const values = [
  { icon: Heart, title: "Personalised Care", desc: "No two skins are alike. Every treatment is tailored to your unique needs." },
  { icon: Shield, title: "Swiss Quality", desc: "Premium Swiss-sourced, cruelty-free products only." },
  { icon: Leaf, title: "Holistic Wellness", desc: "True beauty radiates from balance — skin, mind, and soul." },
];

const stats = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 5000, suffix: "+", label: "Happy Clients" },
  { value: 200, suffix: "+", label: "Five-Star Reviews" },
  { value: 15, suffix: "", label: "Signature Treatments" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());
  useEffect(() => {
    if (inView) {
      const c = animate(mv, value, { duration: 2, ease: [0.22, 1, 0.36, 1] });
      return c.stop;
    }
  }, [inView, mv, value]);
  return (
    <span style={{ fontFamily: fHead, fontSize: "clamp(52px, 6.5vw, 90px)", fontWeight: 500, color: C.gold, lineHeight: 1 }}>
      <motion.span ref={ref}>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  const studioImages = galleryImages.slice(6, 10).map((g) => g.src);
  return (
    <div style={{ background: C.bg, color: C.textPrimary, fontFamily: fBody }}>
      <DemoBanner />
      <BeautyNav />

      {/* HERO */}
      <section className="relative w-full h-[65vh] min-h-[520px] overflow-hidden">
        <Image src={IMG.aboutHero} alt="" fill priority className="object-cover" sizes="100vw" quality={90} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(28,25,23,0.4), rgba(28,25,23,0.7))" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[11px] tracking-[0.45em] uppercase mb-6" style={{ color: C.goldLight, fontFamily: fMono }}>
              — Our Story
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45 }}
              style={{ fontFamily: fHead, fontSize: "clamp(44px, 7vw, 100px)", lineHeight: 0.95, fontWeight: 500, color: C.onDark }}>
              Rooted in care,<br /><em style={{ fontStyle: "italic", color: C.goldLight }}>refined by craft</em>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal className="lg:col-span-6">
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="mt-6" style={{ fontFamily: fHead, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 1.05, fontWeight: 500, color: C.dark }}>
              A space <em style={{ fontStyle: "italic", color: C.gold }}>created for you</em>
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-[1.8]" style={{ color: C.textSecondary }}>
              <p>
                Aura Beauty Studio was founded in 2019 by Elena Moser, after a decade of working
                in high-end dermatology clinics in Paris and Zurich. She had a vision — a space
                where beauty treatments felt less like a transaction and more like a ritual.
              </p>
              <p>
                We believe beauty is a form of self-care, not vanity. Every corner of the studio,
                every product on the shelf, every treatment in our menu has been chosen with one
                question in mind: does this honour the people who walk through our door?
              </p>
              <p>
                Today, Aura is home to a team of passionate specialists, a curated selection of
                Swiss-sourced products, and hundreds of clients who return — not because they
                have to, but because they want to.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-6">
            <div className="relative aspect-[4/5] rounded-md overflow-hidden transform lg:rotate-1" style={{ boxShadow: "0 24px 60px rgba(26,26,26,0.18)" }}>
              <Image src={IMG.founder} alt="Elena Moser, founder" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={90} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-36 px-6 md:px-10" style={{ background: C.highlight }}>
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto">
            <Eyebrow>What Guides Us</Eyebrow>
            <Rule className="my-6" />
            <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 1.05, fontWeight: 500, color: C.dark }}>
              Our <em style={{ fontStyle: "italic", color: C.gold }}>values</em>
            </h2>
          </Reveal>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="h-full p-10 text-center rounded-md transition-transform duration-500 hover:-translate-y-1"
                  style={{ background: C.warmWhite, border: `1px solid ${C.border}`, boxShadow: "0 2px 8px rgba(26,26,26,0.04)" }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: "rgba(184,149,106,0.12)", color: C.gold }}>
                    <v.icon size={26} strokeWidth={1.4} />
                  </div>
                  <h3 style={{ fontFamily: fHead, fontSize: 30, fontWeight: 500, color: C.dark }}>{v.title}</h3>
                  <p className="mt-4 text-[14px] leading-relaxed" style={{ color: C.textSecondary }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO TOUR */}
      <section className="py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto">
            <Eyebrow>Studio Tour</Eyebrow>
            <Rule className="my-6" />
            <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 1.05, fontWeight: 500, color: C.dark }}>
              Step <em style={{ fontStyle: "italic", color: C.gold }}>inside Aura</em>
            </h2>
          </Reveal>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-5">
            {studioImages.map((src, i) => (
              <Reveal key={src} delay={i * 0.08}>
                <div className="relative aspect-[4/3] rounded-md overflow-hidden group">
                  <Image src={src} alt={`Studio view ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" sizes="(max-width: 768px) 100vw, 50vw" quality={90} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FULL TEAM */}
      <section className="py-24 md:py-36 px-6 md:px-10" style={{ background: C.dark, color: C.onDark }}>
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto">
            <Eyebrow light>The Team</Eyebrow>
            <Rule className="my-6" />
            <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 1.05, fontWeight: 500, color: C.onDark }}>
              The faces behind <em style={{ fontStyle: "italic", color: C.goldLight }}>the glow</em>
            </h2>
          </Reveal>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {team.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.1}>
                <article className="rounded-md overflow-hidden h-full" style={{ background: C.darkAccent, border: `1px solid ${C.borderDark}` }}>
                  <div className="relative aspect-[3/4]">
                    <Image src={m.image} alt={m.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" quality={90} />
                  </div>
                  <div className="p-8">
                    <h3 style={{ fontFamily: fHead, fontSize: 28, fontWeight: 500, color: C.onDark }}>{m.name}</h3>
                    <p className="text-[11px] tracking-[0.15em] uppercase mt-2" style={{ color: C.goldLight, fontFamily: fMono }}>
                      {m.title}
                    </p>
                    <p className="mt-5 text-[14px] leading-relaxed" style={{ color: C.onDarkSub }}>{m.fullBio}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {m.specialties.map((sp) => (
                        <span key={sp} className="text-[10px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-sm" style={{ background: "rgba(184,149,106,0.15)", color: C.goldLight, fontFamily: fMono }}>
                          {sp}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-4 text-[11px] tracking-[0.15em] uppercase" style={{ color: C.textSecondary, fontFamily: fMono }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 text-center" style={{ background: C.highlight }}>
        <Reveal className="max-w-2xl mx-auto">
          <h2 style={{ fontFamily: fHead, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, fontWeight: 500, color: C.dark }}>
            Experience the <em style={{ fontStyle: "italic", color: C.gold }}>Aura difference</em>
          </h2>
          <Link
            href="/demos/beauty/contact"
            className="mt-10 inline-flex items-center gap-3 px-10 py-4 text-[11px] tracking-[0.15em] uppercase no-underline rounded-full"
            style={{ background: C.gold, color: C.warmWhite, fontFamily: fBody, fontWeight: 600 }}
          >
            Book Your Experience <ArrowRight size={14} />
          </Link>
        </Reveal>
      </section>

      <BeautyFooter />
    </div>
  );
}
