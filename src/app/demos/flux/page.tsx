"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { ArrowRight, Check } from "lucide-react";
import { FluxNav, FluxFooter, Reveal, C, fHead, fBody } from "./_shared";

function Counter({ target, suffix = "", decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, target]);
  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "Clients Trained" },
  { value: 8, suffix: "", label: "Years Coaching" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 4.9, suffix: "", label: "Google Rating", decimals: 1 },
];

const programs = [
  {
    title: "1:1 Coaching",
    price: "CHF 120",
    unit: "/session",
    img: "/images/flux/programs-pt.jpg",
    features: ["60-min personal session", "Custom nutrition plan", "Weekly progress tracking"],
    href: "/demos/flux/programs",
  },
  {
    title: "Group Training",
    price: "CHF 45",
    unit: "/session",
    img: "/images/flux/programs-group.jpg",
    features: ["Max 6 people", "Strength + conditioning", "Mon / Wed / Fri 6pm"],
    href: "/demos/flux/programs",
  },
  {
    title: "Online Program",
    price: "CHF 250",
    unit: "/month",
    img: "/images/flux/programs-online.jpg",
    features: ["App-based training", "Monthly video call", "Form check & feedback"],
    href: "/demos/flux/programs",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    result: "-14 kg in 6 months",
    quote: "I tried every program in Zug. Flux was the one that actually worked. Marc knows how to push without breaking you.",
    img: "/images/flux/testimonial-1.jpg",
  },
  {
    name: "David K.",
    result: "+22 kg deadlift PR",
    quote: "I came back from injury and Marc rebuilt me stronger than before. The programming is serious, the vibe is human.",
    img: "/images/flux/testimonial-2.jpg",
  },
  {
    name: "Elena R.",
    result: "First marathon in 3:48",
    quote: "Three months out from my race I was stuck. The online program fixed my gait and my mental game. I finished with gas left.",
    img: "/images/flux/testimonial-3.jpg",
  },
];

export default function FluxHomePage() {
  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: fBody }}>
      <DemoBanner />
      <FluxNav />

      {/* HERO */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <Image
          src="/images/flux/hero.jpg"
          alt="Flux Performance gym"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(12,12,12,0.92) 0%, rgba(12,12,12,0.75) 40%, rgba(12,12,12,0.3) 70%, rgba(12,12,12,0.15) 100%)",
          }}
        />
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-6xl w-full mx-auto px-6 md:px-12 pt-32 pb-20">
            <motion.p
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase mb-8"
              style={{ color: C.lime }}
            >
              <span className="w-8 h-[2px]" style={{ background: C.lime }} />
              Performance Coaching · Zug
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="max-w-4xl font-black tracking-[-0.02em]"
              style={{
                fontFamily: fHead,
                fontSize: "clamp(52px, 9vw, 120px)",
                lineHeight: 0.92,
                color: C.text,
              }}
            >
              STRENGTH.
              <br />
              BUILT ON
              <br />
              <span style={{ color: C.lime }}>PURPOSE.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 max-w-lg text-base md:text-lg leading-relaxed"
              style={{ color: C.muted }}
            >
              Evidence-based personal training for people who want real results, not a new gym selfie.
              NSCA-certified coaching. Zero fluff.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/demos/flux/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-wider uppercase no-underline transition-all"
                style={{ background: C.lime, color: C.bg, borderRadius: 8, fontFamily: fBody }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 32px 0 rgba(200,255,0,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(200,255,0,0)")}
              >
                Book Free Consult <ArrowRight size={16} />
              </Link>
              <Link
                href="/demos/flux/programs"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-wider uppercase no-underline"
                style={{
                  border: `1px solid ${C.border}`,
                  color: C.text,
                  borderRadius: 8,
                  fontFamily: fBody,
                }}
              >
                View Programs
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-12 py-20" style={{ background: C.surface, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div>
                <p
                  className="font-black tracking-tight"
                  style={{
                    fontFamily: fHead,
                    fontSize: "clamp(44px, 6vw, 72px)",
                    lineHeight: 1,
                    color: C.lime,
                  }}
                >
                  <Counter target={s.value} suffix={s.suffix} decimals={(s as { decimals?: number }).decimals ?? 0} />
                </p>
                <p
                  className="mt-3 text-[11px] tracking-[0.2em] uppercase"
                  style={{ color: C.muted, fontFamily: fBody }}
                >
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: C.lime }}>
                  Programs
                </p>
                <h2
                  className="font-black tracking-tight"
                  style={{ fontFamily: fHead, fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1, color: C.text }}
                >
                  CHOOSE YOUR PATH.
                </h2>
              </div>
              <Link
                href="/demos/flux/programs"
                className="text-[12px] font-bold tracking-wider uppercase no-underline transition-colors"
                style={{ color: C.lime, fontFamily: fBody }}
              >
                All programs →
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <Link href={p.href} className="group block no-underline h-full">
                  <div
                    className="h-full flex flex-col transition-all duration-300"
                    style={{
                      background: C.surface,
                      border: `1px solid ${C.border}`,
                      borderRadius: 8,
                      overflow: "hidden",
                    }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={p.img}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(180deg, rgba(12,12,12,0) 50%, rgba(12,12,12,0.75) 100%)" }}
                      />
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <h3
                        className="font-black tracking-tight mb-3"
                        style={{ fontFamily: fHead, fontSize: 26, color: C.text }}
                      >
                        {p.title.toUpperCase()}
                      </h3>
                      <div className="flex items-baseline gap-1 mb-5">
                        <span className="font-bold" style={{ fontSize: 28, color: C.lime, fontFamily: fHead }}>
                          {p.price}
                        </span>
                        <span className="text-sm" style={{ color: C.muted }}>
                          {p.unit}
                        </span>
                      </div>
                      <ul className="space-y-2.5 mb-6 flex-1">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-sm" style={{ color: C.muted }}>
                            <Check size={14} className="mt-1 shrink-0" style={{ color: C.lime }} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div
                        className="pt-5 flex items-center justify-between text-[11px] font-bold tracking-wider uppercase transition-colors"
                        style={{ borderTop: `1px solid ${C.border}`, color: C.text }}
                      >
                        <span>Learn more</span>
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" style={{ color: C.lime }} />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 md:px-12 py-24" style={{ background: C.surface }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: C.lime }}>
              Results
            </p>
            <h2
              className="font-black tracking-tight mb-14"
              style={{ fontFamily: fHead, fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1, color: C.text }}
            >
              REAL PEOPLE.<br />REAL NUMBERS.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div
                  className="p-8 h-full flex flex-col"
                  style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 8 }}
                >
                  <div
                    className="inline-flex items-center self-start gap-2 px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase mb-6"
                    style={{ background: "rgba(200,255,0,0.08)", color: C.lime, borderRadius: 4, border: `1px solid rgba(200,255,0,0.25)` }}
                  >
                    {t.result}
                  </div>
                  <p className="text-[15px] leading-relaxed flex-1" style={{ color: C.text, fontFamily: fBody }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 pt-6 flex items-center gap-4" style={{ borderTop: `1px solid ${C.border}` }}>
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                      <Image src={t.img} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-bold" style={{ color: C.text }}>
                        {t.name}
                      </p>
                      <p className="text-[11px] tracking-wider uppercase" style={{ color: C.muted }}>
                        Flux Athlete
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2
              className="font-black tracking-tight"
              style={{ fontFamily: fHead, fontSize: "clamp(44px, 6vw, 80px)", lineHeight: 0.95, color: C.text }}
            >
              READY TO<br />
              <span style={{ color: C.lime }}>STOP GUESSING?</span>
            </h2>
            <p className="mt-8 max-w-lg mx-auto text-base md:text-lg" style={{ color: C.muted }}>
              30-minute free consultation. No sales pitch. Just a conversation about where you are and where you want to go.
            </p>
            <Link
              href="/demos/flux/contact"
              className="mt-10 inline-flex items-center gap-3 px-10 py-5 text-sm font-bold tracking-wider uppercase no-underline transition-all"
              style={{ background: C.lime, color: C.bg, borderRadius: 8, fontFamily: fBody }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 40px 0 rgba(200,255,0,0.55)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(200,255,0,0)")}
            >
              Book Your Free Consult <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <FluxFooter />
    </div>
  );
}
