"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { ArrowRight } from "lucide-react";
import { FluxNav, FluxFooter, Reveal, C, fHead, fBody } from "../_shared";

const creds = [
  { label: "NSCA-CSCS", sub: "Certified Strength & Conditioning Specialist" },
  { label: "ETH Zürich", sub: "MSc, Sports Science & Human Movement" },
  { label: "PN L2", sub: "Precision Nutrition, Level 2 Certified" },
  { label: "8 Years", sub: "Coaching strength athletes and general population" },
];

const philosophy = [
  {
    num: "01",
    title: "Evidence over fads",
    body:
      "If it isn't backed by published research or measured in the gym, it doesn't end up in your program. No gimmicks, no detox, no 'secret protocols'.",
  },
  {
    num: "02",
    title: "Progress over perfection",
    body:
      "Your best week is the one you actually finished. We build programs around your real life, not an idealised version of it.",
  },
  {
    num: "03",
    title: "Strength is a skill",
    body:
      "Technique first. Always. Loading bad movement is how people get hurt. Loading good movement is how people get strong.",
  },
  {
    num: "04",
    title: "Long-term thinking",
    body:
      "90% of my clients have been with Flux for more than a year. The goal is not a 12-week transformation. It is a lifetime of training you actually enjoy.",
  },
];

export default function FluxAboutPage() {
  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: fBody }}>
      <DemoBanner />
      <FluxNav />

      {/* HERO */}
      <section className="relative w-full h-[60vh] min-h-[420px] overflow-hidden">
        <Image src="/images/flux/gym-interior.jpg" alt="Flux studio" fill priority className="object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(12,12,12,0.9) 0%, rgba(12,12,12,0.55) 60%, rgba(12,12,12,0.2) 100%)" }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl w-full mx-auto px-6 md:px-12 pt-20">
            <motion.p
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase mb-6"
              style={{ color: C.lime }}
            >
              <span className="w-8 h-[2px]" style={{ background: C.lime }} /> About the Coach
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-black tracking-[-0.02em] max-w-3xl"
              style={{ fontFamily: fHead, fontSize: "clamp(52px, 8vw, 112px)", lineHeight: 0.92, color: C.text }}
            >
              MARC<br /><span style={{ color: C.lime }}>ALDER.</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <Reveal>
            <div className="md:col-span-5">
              <div className="relative aspect-[3/4] overflow-hidden" style={{ borderRadius: 8 }}>
                <Image src="/images/flux/trainer-portrait.jpg" alt="Marc Alder" fill className="object-cover" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="md:col-span-7">
              <p className="text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: C.lime }}>
                Bio
              </p>
              <h2
                className="font-black tracking-tight mb-8"
                style={{ fontFamily: fHead, fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1, color: C.text }}
              >
                FORMER COMPETITIVE<br />ATHLETE. FULL-TIME COACH.
              </h2>
              <div className="space-y-5 text-[15px] leading-[1.85]" style={{ color: C.muted }}>
                <p>
                  I started lifting at 16, competed in powerlifting through university, and blew out a disc at 24. That
                  injury made me obsessed with why some athletes break and others don&apos;t. I went back to school at ETH
                  Zürich, got an MSc in sports science, and started coaching full-time in 2017.
                </p>
                <p>
                  Flux opened in 2018 in a 40m² room. Today it&apos;s a 300m² private studio with barbells, rigs, and exactly
                  one coach. I don&apos;t franchise, I don&apos;t hire assistants, and I don&apos;t take more than 40 clients at a time.
                  That&apos;s the whole business model.
                </p>
                <p>
                  If we work together, you get me — not a junior coach reading from a template. We&apos;ll plan your training
                  around your life, measure what matters, and adjust every week until the numbers move in the right direction.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5 mt-10">
                {creds.map((c) => (
                  <div
                    key={c.label}
                    className="p-5"
                    style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8 }}
                  >
                    <p className="text-[11px] tracking-wider uppercase font-bold mb-1" style={{ color: C.lime }}>
                      {c.label}
                    </p>
                    <p className="text-[12px]" style={{ color: C.muted }}>
                      {c.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-6 md:px-12 py-24" style={{ background: C.surface }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: C.lime }}>
              Philosophy
            </p>
            <h2
              className="font-black tracking-tight mb-16"
              style={{ fontFamily: fHead, fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1, color: C.text }}
            >
              HOW I COACH.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12">
            {philosophy.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.08}>
                <div>
                  <p
                    className="font-black tracking-tight mb-3"
                    style={{ fontFamily: fHead, fontSize: 42, color: C.lime, lineHeight: 1 }}
                  >
                    {p.num}
                  </p>
                  <h3
                    className="font-bold tracking-tight mb-3"
                    style={{ fontFamily: fHead, fontSize: 22, color: C.text }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-[14px] leading-[1.8]" style={{ color: C.muted }}>
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO PHOTOS */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: C.lime }}>
              The Space
            </p>
            <h2
              className="font-black tracking-tight mb-12"
              style={{ fontFamily: fHead, fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1, color: C.text }}
            >
              INSIDE THE STUDIO.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {["/images/flux/studio-1.jpg", "/images/flux/studio-2.jpg", "/images/flux/studio-3.jpg"].map((src, i) => (
              <Reveal key={src} delay={i * 0.1}>
                <div className="relative aspect-[4/5] overflow-hidden" style={{ borderRadius: 8 }}>
                  <Image src={src} alt={`Flux studio ${i + 1}`} fill className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-24" style={{ background: C.surface }}>
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2
              className="font-black tracking-tight"
              style={{ fontFamily: fHead, fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1, color: C.text }}
            >
              LET&apos;S <span style={{ color: C.lime }}>TRAIN.</span>
            </h2>
            <p className="mt-6 max-w-md mx-auto text-base" style={{ color: C.muted }}>
              Free 30-minute consultation. We&apos;ll talk training, goals, and whether Flux is the right fit.
            </p>
            <Link
              href="/demos/flux/contact"
              className="mt-10 inline-flex items-center gap-3 px-10 py-5 text-sm font-bold tracking-wider uppercase no-underline transition-all"
              style={{ background: C.lime, color: C.bg, borderRadius: 8, fontFamily: fBody }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 40px 0 rgba(200,255,0,0.55)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(200,255,0,0)")}
            >
              Book Your Consult <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <FluxFooter />
    </div>
  );
}
