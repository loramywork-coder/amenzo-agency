"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { ArrowRight, Check } from "lucide-react";
import { FluxNav, FluxFooter, Reveal, C, fHead, fBody } from "../_shared";

const details = [
  {
    tag: "Flagship",
    title: "1:1 Personal Coaching",
    price: "CHF 120",
    unit: "per session",
    img: "/images/flux/program-detail-1.jpg",
    desc:
      "The gold standard. 60 minutes, one coach, one athlete. Programs are built around your body, your goals, and your schedule. Every rep, every rest interval, every nutrition choice — dialled in and tracked.",
    includes: [
      "Full movement + posture assessment",
      "Custom programming, updated weekly",
      "Nutrition strategy + check-ins",
      "Unlimited WhatsApp support between sessions",
      "Quarterly strength + body-comp testing",
    ],
  },
  {
    tag: "Best Value",
    title: "Small Group Training",
    price: "CHF 45",
    unit: "per session",
    img: "/images/flux/program-detail-2.jpg",
    desc:
      "Six people. One coach. No hiding in the back row. Same programming principles as 1:1, delivered in a high-accountability group that pushes each other harder than any algorithm could.",
    includes: [
      "Maximum 6 athletes per session",
      "Strength, conditioning, hybrid formats",
      "Monday / Wednesday / Friday at 6pm",
      "Monthly body-comp + strength benchmarks",
      "Community Slack channel",
    ],
  },
  {
    tag: "Online",
    title: "Remote Performance Program",
    price: "CHF 250",
    unit: "per month",
    img: "/images/flux/program-detail-3.jpg",
    desc:
      "Coach-designed programming delivered through our app. Video demos, tempo, RPE, and load tracking. Built for people who already know how to train but want a coach in their corner.",
    includes: [
      "Weekly programmed sessions",
      "Video form check + feedback",
      "Monthly 30-min video call",
      "Nutrition protocols included",
      "Cancel anytime",
    ],
  },
  {
    tag: "Specialised",
    title: "Hypertrophy Block (12 weeks)",
    price: "CHF 1,800",
    unit: "12-week package",
    img: "/images/flux/program-detail-4.jpg",
    desc:
      "A focused 12-week block for people who want visible size and strength. Periodised programming, calibrated nutrition, bi-weekly check-ins. Not a bootcamp. A proper hypertrophy protocol.",
    includes: [
      "24 x 1:1 coaching sessions",
      "Structured 12-week periodisation",
      "Macro tracking + adjustments",
      "Bi-weekly measurements + photos",
      "Supplement protocol",
    ],
  },
  {
    tag: "Endurance",
    title: "Hybrid Athlete Program",
    price: "CHF 1,400",
    unit: "8-week package",
    img: "/images/flux/program-detail-5.jpg",
    desc:
      "Strength athletes who want to run. Runners who want to lift. 8 weeks of concurrent training designed to make you genuinely good at both without burning out.",
    includes: [
      "16 x 1:1 coaching sessions",
      "Concurrent strength + conditioning",
      "Zone-2 + VO2 max protocols",
      "Recovery + sleep programming",
      "Final testing battery",
    ],
  },
];

export default function FluxProgramsPage() {
  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: fBody }}>
      <DemoBanner />
      <FluxNav />

      {/* HERO */}
      <section className="relative w-full h-[60vh] min-h-[440px] overflow-hidden">
        <Image src="/images/flux/programs-hero.jpg" alt="Flux programs" fill priority className="object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(12,12,12,0.9) 0%, rgba(12,12,12,0.55) 60%, rgba(12,12,12,0.25) 100%)" }}
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
              <span className="w-8 h-[2px]" style={{ background: C.lime }} />
              Programs
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-black tracking-[-0.02em] max-w-3xl"
              style={{ fontFamily: fHead, fontSize: "clamp(52px, 8vw, 112px)", lineHeight: 0.92, color: C.text }}
            >
              BUILT FOR<br /><span style={{ color: C.lime }}>RESULTS.</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Program details */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-6xl mx-auto space-y-20 md:space-y-28">
          {details.map((p, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={p.title}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                    flipped ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: 8 }}>
                    <Image src={p.img} alt={p.title} fill className="object-cover" />
                  </div>
                  <div>
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase mb-5"
                      style={{
                        background: "rgba(200,255,0,0.08)",
                        color: C.lime,
                        borderRadius: 4,
                        border: `1px solid rgba(200,255,0,0.25)`,
                      }}
                    >
                      {p.tag}
                    </div>
                    <h2
                      className="font-black tracking-tight mb-5"
                      style={{ fontFamily: fHead, fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1, color: C.text }}
                    >
                      {p.title.toUpperCase()}
                    </h2>
                    <p className="text-[15px] leading-[1.8] mb-7" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="font-black" style={{ fontSize: 36, color: C.lime, fontFamily: fHead }}>
                        {p.price}
                      </span>
                      <span className="text-sm" style={{ color: C.muted }}>
                        {p.unit}
                      </span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {p.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-3 text-[14px]" style={{ color: C.text }}>
                          <Check size={16} className="mt-[3px] shrink-0" style={{ color: C.lime }} />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/demos/flux/contact"
                      className="inline-flex items-center gap-3 px-7 py-4 text-[12px] font-bold tracking-wider uppercase no-underline transition-all"
                      style={{ background: C.lime, color: C.bg, borderRadius: 8, fontFamily: fBody }}
                      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 28px 0 rgba(200,255,0,0.5)")}
                      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(200,255,0,0)")}
                    >
                      Start This Program <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <FluxFooter />
    </div>
  );
}
