"use client";

import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Globe } from "@/components/ui/cobe-globe";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";

/* ─── palette ─── */
const P = {
  bg: "#FAFAF8",
  bgAlt: "#F3F2EF",
  surface: "#FFFFFF",
  dark: "#0C0C0E",
  darkSurface: "#161618",
  text: "#0C0C0E",
  textBody: "#52525B",
  textMuted: "#71717A",
  blue: "#1D4ED8",
  blueLight: "#3B82F6",
  blueBg: "#EFF6FF",
  green: "#059669",
  amber: "#D97706",
};

const fBody = "var(--font-body), 'Satoshi', system-ui, sans-serif";
const fMono = "var(--font-mono), 'JetBrains Mono', monospace";

/* ─── data ─── */
const navLinks = ["Technology", "Launches", "Team", "Contact"];

const stats = [
  { value: "3", label: "Missions Completed" },
  { value: "CHF 12M", label: "Series A Raised" },
  { value: "847", label: "Days in Orbit" },
  { value: "99.7%", label: "System Efficiency" },
];

const specs = [
  { num: "01", label: "Thrust", value: "200 mN" },
  { num: "02", label: "Specific Impulse", value: "1,850 s" },
  { num: "03", label: "Mass", value: "4.2 kg" },
  { num: "04", label: "Volume", value: "3U" },
  { num: "05", label: "Power", value: "300 W" },
  { num: "06", label: "Lifetime", value: "15,000 hrs" },
];

const globeMarkers = [
  { id: "zurich", location: [47.37, 8.54] as [number, number], label: "Zurich HQ" },
  { id: "estec", location: [52.22, 4.42] as [number, number], label: "ESA/ESTEC" },
  { id: "kourou", location: [5.16, -52.65] as [number, number], label: "Kourou" },
];

const globeArcs = [
  { id: "arc1", from: [47.37, 8.54] as [number, number], to: [52.22, 4.42] as [number, number] },
  { id: "arc2", from: [47.37, 8.54] as [number, number], to: [5.16, -52.65] as [number, number] },
];

const timeline = [
  { mission: "NOVA-1", date: "Q2 2023", desc: "Technology demonstration — first ignition in LEO, 200-day primary mission.", status: "complete" },
  { mission: "NOVA-2", date: "Q4 2023", desc: "Orbit-raising campaign for ESA SmallSat, exceeded delta-v targets by 12%.", status: "complete" },
  { mission: "NOVA-3", date: "Q1 2025", desc: "Constellation deployment — active station-keeping for 6-satellite cluster.", status: "active" },
  { mission: "NOVA-4", date: "Q3 2026", desc: "Deep-space transfer demonstration, lunar gateway resupply pathfinder.", status: "upcoming" },
];

const team = [
  { name: "Dr. Lena Hartmann", role: "CEO & Co-Founder", bio: "Former ESA propulsion lead. 14 years in electric thruster R&D, 23 peer-reviewed publications." },
  { name: "Marco Zeller", role: "CTO & Co-Founder", bio: "ETH Zurich plasma physics. Built the original NOVA prototype in a university clean room." },
  { name: "Aisha Patel", role: "VP Engineering", bio: "Ex-Airbus Defence. Delivered flight hardware for 4 ESA missions on schedule and under budget." },
];

const press = [
  { pub: "TechCrunch", headline: "Nova Space closes CHF 12M to scale satellite propulsion", date: "Mar 2025" },
  { pub: "SpaceNews", headline: "Swiss startup achieves record specific impulse in orbit test", date: "Jan 2025" },
  { pub: "Handelszeitung", headline: "Zurich's Nova Space joins ESA's ARTES programme", date: "Nov 2024" },
  { pub: "Wired", headline: "The tiny thruster that could reshape the satellite economy", date: "Sep 2024" },
];

/* ─── page ─── */
export default function StartupPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.05]);

  return (
    <div style={{ background: P.bg, color: P.text, fontFamily: fBody }}>

      {/* ═══ DEMO BANNER ═══ */}
      <DemoBanner />

      {/* ═══ NAV ═══ */}
      <nav
        className="fixed top-10 left-0 right-0 z-[90] flex items-center justify-between px-6 md:px-12 py-5"
        style={{ mixBlendMode: "difference" }}
      >
        <Link href="/demos/startup" className="text-white no-underline flex items-center gap-3">
          {/* Logo mark */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="1" />
            <path d="M14 4 L18 14 L14 12 L10 14 Z" fill="white" opacity="0.9" />
            <path d="M10 14 L14 12 L18 14 L14 24 Z" fill="white" opacity="0.5" />
          </svg>
          <span
            className="text-[15px] md:text-[17px] font-medium tracking-[0.25em] uppercase text-white"
            style={{ fontFamily: fBody }}
          >
            Nova Space
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link
              key={l}
              href={`/demos/startup/${l.toLowerCase()}`}
              className="text-white no-underline text-[13px] tracking-[0.12em] uppercase font-light transition-opacity hover:opacity-60"
              style={{ fontFamily: fBody }}
            >
              {l}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-[110] w-10 h-10 flex flex-col items-end justify-center gap-[6px] bg-transparent border-none cursor-pointer"
          aria-label="Menu"
        >
          <span
            className="block h-[1px] bg-white transition-all duration-500"
            style={{
              width: 28,
              transform: menuOpen ? "rotate(45deg) translate(2.5px, 2.5px)" : "none",
            }}
          />
          <span
            className="block h-[1px] bg-white transition-all duration-500"
            style={{
              width: menuOpen ? 28 : 20,
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-[1px] bg-white transition-all duration-500"
            style={{
              width: 28,
              transform: menuOpen ? "rotate(-45deg) translate(2.5px, -2.5px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-[95] flex flex-col items-center justify-center transition-all duration-700"
        style={{
          background: P.dark,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {navLinks.map((l, i) => (
          <motion.div
            key={l}
            initial={{ opacity: 0, y: 30 }}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: menuOpen ? 0.15 + i * 0.08 : 0, duration: 0.5 }}
          >
            <Link
              href={`/demos/startup/${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-[clamp(36px,6vw,64px)] font-light no-underline mb-6 transition-opacity hover:opacity-50"
              style={{ fontFamily: fBody, color: P.bgAlt, letterSpacing: "0.04em" }}
            >
              {l}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ═══ 1. HERO ═══ */}
      <section ref={heroRef} className="relative w-full overflow-hidden" style={{ height: "110vh" }}>
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/demo-startup.mp4"
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(12,12,14,0.06) 0%, rgba(12,12,14,0.04) 30%, rgba(12,12,14,0.25) 65%, rgba(12,12,14,0.85) 95%)",
          }}
        />

        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-20">
          <Reveal type="fade" delay={0.3}>
            <div className="flex items-center gap-2 mb-6">
              <span
                className="w-[6px] h-[6px] rounded-full"
                style={{ background: P.green }}
              />
              <p
                className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase m-0"
                style={{ fontFamily: fMono, color: "rgba(255,255,255,0.3)" }}
              >
                NOVA-3 Mission Active
              </p>
            </div>
          </Reveal>

          <Reveal type="slide-up" delay={0.5}>
            <h1
              className="text-[clamp(44px,8vw,96px)] leading-[0.95] font-light mb-8"
              style={{ color: "#FFFFFF" }}
            >
              Propulsion for the
              <br />
              <span style={{ color: P.blueLight, fontStyle: "italic" }}>New Space Era</span>
            </h1>
          </Reveal>

          <div className="flex items-end justify-between">
            <Reveal type="fade" delay={0.8}>
              <p
                className="text-[13px] font-light max-w-[340px] leading-[1.7]"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                High-efficiency electric propulsion systems engineered in Zurich.
                Enabling the next generation of satellite constellations and deep-space missions.
              </p>
            </Reveal>

            <Reveal type="fade" delay={1}>
              <div className="hidden md:flex flex-col items-center gap-3">
                <span
                  className="text-[11px] tracking-[0.2em] uppercase"
                  style={{ color: "rgba(255,255,255,0.3)", fontFamily: fMono }}
                >
                  Scroll
                </span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[1px] h-12"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 2. STATS STRIP ═══ */}
      <section
        className="py-16 md:py-20 px-6 md:px-12"
        style={{ background: P.dark }}
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <p
                  className="text-[clamp(28px,4vw,48px)] font-light mb-2"
                  style={{ fontFamily: fMono, color: "#FFFFFF" }}
                >
                  {s.value}
                </p>
                <p
                  className="text-[11px] tracking-[0.15em] uppercase"
                  style={{ fontFamily: fBody, color: "rgba(255,255,255,0.35)" }}
                >
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ 3. PRODUCT — ASYMMETRIC SPLIT ═══ */}
      <section className="py-24 md:py-40 px-6 md:px-12" style={{ background: P.bg }}>
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="flex items-baseline justify-between mb-16 md:mb-24">
              <h2
                className="text-[clamp(32px,4vw,56px)] font-light"
                style={{ color: P.text }}
              >
                The NOVA Thruster
              </h2>
              <span
                className="text-[11px] tracking-[0.2em] uppercase hidden md:block"
                style={{ color: P.textMuted, fontFamily: fMono }}
              >
                Electric Propulsion
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            {/* Left: engineering visual */}
            <Reveal className="md:col-span-7">
              <div
                className="relative w-full overflow-hidden"
                style={{
                  aspectRatio: "4/3",
                  background: P.bgAlt,
                  border: `1px solid ${P.bgAlt}`,
                }}
              >
                {/* Engineering grid */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="eng-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke={P.textMuted} strokeWidth="0.3" opacity="0.2" />
                    </pattern>
                    <pattern id="eng-grid-lg" width="200" height="200" patternUnits="userSpaceOnUse">
                      <path d="M 200 0 L 0 0 0 200" fill="none" stroke={P.textMuted} strokeWidth="0.5" opacity="0.15" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#eng-grid)" />
                  <rect width="100%" height="100%" fill="url(#eng-grid-lg)" />
                </svg>

                {/* Thruster schematic */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                    <rect x="60" y="80" width="160" height="120" rx="4" stroke={P.blue} strokeWidth="1.5" fill="none" />
                    <path d="M220 100 L260 80 L260 200 L220 180" stroke={P.blue} strokeWidth="1.5" fill="none" />
                    <rect x="80" y="110" width="80" height="60" rx="2" stroke={P.textMuted} strokeWidth="0.75" fill="none" strokeDasharray="4 4" />
                    {[100, 120, 140, 160, 180].map((y) => (
                      <line key={y} x1="260" y1={y} x2="278" y2={y} stroke={P.blueLight} strokeWidth="1" opacity="0.5" />
                    ))}
                    <line x1="60" y1="220" x2="220" y2="220" stroke={P.textMuted} strokeWidth="0.5" />
                    <text x="140" y="236" textAnchor="middle" fill={P.textMuted} fontSize="10" fontFamily={fMono}>340 mm</text>
                    <line x1="40" y1="80" x2="40" y2="200" stroke={P.textMuted} strokeWidth="0.5" />
                    <text x="30" y="145" textAnchor="middle" fill={P.textMuted} fontSize="10" fontFamily={fMono} transform="rotate(-90 30 145)">220 mm</text>
                  </svg>
                </div>

                <div className="absolute bottom-4 left-4">
                  <p
                    className="text-[10px] tracking-[0.15em] uppercase m-0"
                    style={{ fontFamily: fMono, color: P.textMuted }}
                  >
                    NOVA-HET200 / Rev. 4.2
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right: specs as numbered list */}
            <div className="md:col-span-5 flex flex-col justify-center">
              <Reveal delay={0.1}>
                <p
                  className="text-[14px] leading-[1.8] mb-10"
                  style={{ color: P.textBody }}
                >
                  Hall-effect thruster optimized for constellation deployment and deep-space transfer.
                  Flight-proven across three missions with zero anomalies.
                </p>
              </Reveal>

              {specs.map((s, i) => (
                <Reveal key={s.num} delay={0.15 + i * 0.06}>
                  <div
                    className="flex items-baseline justify-between py-4"
                    style={{ borderBottom: `1px solid ${P.bgAlt}` }}
                  >
                    <div className="flex items-baseline gap-4">
                      <span
                        className="text-[11px]"
                        style={{ fontFamily: fMono, color: P.textMuted }}
                      >
                        {s.num}
                      </span>
                      <span className="text-[14px]" style={{ color: P.text }}>
                        {s.label}
                      </span>
                    </div>
                    <span
                      className="text-[14px]"
                      style={{ fontFamily: fMono, color: P.blue }}
                    >
                      {s.value}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. GLOBE ═══ */}
      <section className="py-24 md:py-36 px-6 md:px-12" style={{ background: P.bgAlt }}>
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="text-center mb-4">
              <h2
                className="text-[clamp(32px,4vw,56px)] font-light"
                style={{ color: P.text }}
              >
                Zurich Engineering,
                <br />
                Global Reach
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="text-[14px] text-center max-w-md mx-auto mb-16 leading-[1.8]"
              style={{ color: P.textBody }}
            >
              Designed at our headquarters in Zurich, tested at ESA facilities,
              and launched from three continents.
            </p>
          </Reveal>

          <Reveal type="scale" delay={0.2}>
            <div className="max-w-lg mx-auto">
              <Globe
                markers={globeMarkers}
                arcs={globeArcs}
                markerColor={[0.11, 0.31, 0.85]}
                baseColor={[0.93, 0.92, 0.9]}
                glowColor={[0.95, 0.95, 0.93]}
                arcColor={[0.23, 0.51, 0.96]}
                dark={0}
                mapBrightness={8}
                speed={0.002}
                theta={0.3}
              />
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-12">
              {[
                { city: "Zurich", label: "Headquarters" },
                { city: "Noordwijk", label: "ESA / ESTEC" },
                { city: "Kourou", label: "Launch Site" },
              ].map((loc) => (
                <div key={loc.city} className="flex items-center gap-3">
                  <span
                    className="w-[5px] h-[5px] rounded-full"
                    style={{ background: P.blue }}
                  />
                  <span className="text-[13px]" style={{ color: P.text }}>
                    {loc.city}
                  </span>
                  <span
                    className="text-[11px]"
                    style={{ fontFamily: fMono, color: P.textMuted }}
                  >
                    {loc.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 5. TRACTION — ASYMMETRIC TWO CARDS ═══ */}
      <section className="py-24 md:py-36 px-6 md:px-12" style={{ background: P.dark }}>
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <p
              className="text-[11px] tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: fMono, color: "rgba(255,255,255,0.3)" }}
            >
              Traction
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            {/* Left card — taller, pipeline */}
            <Reveal className="md:col-span-7">
              <div
                className="p-8 md:p-10"
                style={{ background: P.darkSurface, border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p
                  className="text-[11px] tracking-[0.2em] uppercase mb-2"
                  style={{ fontFamily: fMono, color: "rgba(255,255,255,0.35)" }}
                >
                  Contract Pipeline
                </p>
                <p
                  className="text-[clamp(36px,5vw,56px)] font-light mb-10"
                  style={{ fontFamily: fMono, color: "#FFFFFF" }}
                >
                  CHF 28M
                </p>

                {[
                  { label: "Signed", value: 14, color: P.blue },
                  { label: "Negotiating", value: 8, color: P.blueLight },
                  { label: "Qualified", value: 6, color: "rgba(255,255,255,0.15)" },
                ].map((bar) => (
                  <div key={bar.label} className="mb-5 last:mb-0">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-[12px]"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        {bar.label}
                      </span>
                      <span
                        className="text-[12px]"
                        style={{ fontFamily: fMono, color: "rgba(255,255,255,0.5)" }}
                      >
                        CHF {bar.value}M
                      </span>
                    </div>
                    <div
                      className="h-[3px] w-full"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <motion.div
                        className="h-full"
                        style={{ background: bar.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(bar.value / 14) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right card — shorter, funding */}
            <Reveal delay={0.15} className="md:col-span-5">
              <div
                className="p-8 md:p-10"
                style={{ background: P.darkSurface, border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p
                  className="text-[11px] tracking-[0.2em] uppercase mb-8"
                  style={{ fontFamily: fMono, color: "rgba(255,255,255,0.35)" }}
                >
                  Funding
                </p>

                {[
                  { round: "Seed", amount: "CHF 2.4M", date: "2022", done: true },
                  { round: "Series A", amount: "CHF 12M", date: "2024", done: true },
                  { round: "Series B", amount: "Upcoming", date: "2026", done: false },
                ].map((r, i) => (
                  <div
                    key={r.round}
                    className="flex items-center justify-between py-4"
                    style={{
                      borderBottom:
                        i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-[6px] h-[6px] rounded-full"
                        style={{
                          background: r.done ? P.green : "rgba(255,255,255,0.2)",
                        }}
                      />
                      <span className="text-[14px]" style={{ color: "#FFFFFF" }}>
                        {r.round}
                      </span>
                    </div>
                    <div className="flex items-center gap-6">
                      <span
                        className="text-[13px]"
                        style={{ fontFamily: fMono, color: r.done ? P.blueLight : "rgba(255,255,255,0.3)" }}
                      >
                        {r.amount}
                      </span>
                      <span
                        className="text-[11px]"
                        style={{ fontFamily: fMono, color: "rgba(255,255,255,0.25)" }}
                      >
                        {r.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 6. TIMELINE ═══ */}
      <section className="py-24 md:py-40 px-6 md:px-12" style={{ background: P.bg }}>
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <p
              className="text-[11px] tracking-[0.3em] uppercase mb-16"
              style={{ fontFamily: fMono, color: P.textMuted }}
            >
              Mission History
            </p>
          </Reveal>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-[1px]"
              style={{ background: "#E2DED8" }}
            />

            {timeline.map((m, i) => (
              <Reveal key={m.mission} delay={i * 0.1}>
                <div className="relative flex gap-8 md:gap-12 pb-12 md:pb-16 last:pb-0">
                  {/* Dot */}
                  <div className="relative z-10 mt-1.5 flex-shrink-0">
                    <span
                      className="block w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full border-2"
                      style={{
                        background:
                          m.status === "active"
                            ? P.green
                            : m.status === "complete"
                              ? P.blue
                              : "transparent",
                        borderColor:
                          m.status === "upcoming" ? "#E2DED8" : "transparent",
                      }}
                    />
                    {m.status === "active" && (
                      <motion.span
                        className="absolute inset-0 rounded-full"
                        style={{ border: `2px solid ${P.green}` }}
                        animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-4 mb-2">
                      <span
                        className="text-[15px] font-medium"
                        style={{ fontFamily: fMono, color: P.text }}
                      >
                        {m.mission}
                      </span>
                      <span
                        className="text-[12px]"
                        style={{ fontFamily: fMono, color: P.textMuted }}
                      >
                        {m.date}
                      </span>
                      {m.status === "active" && (
                        <span
                          className="text-[9px] tracking-[0.15em] uppercase px-2 py-0.5"
                          style={{
                            fontFamily: fMono,
                            color: P.green,
                            background: `${P.green}12`,
                            border: `1px solid ${P.green}30`,
                          }}
                        >
                          Active
                        </span>
                      )}
                    </div>
                    <p
                      className="text-[14px] leading-[1.7] max-w-md"
                      style={{ color: P.textBody }}
                    >
                      {m.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. TEAM — HORIZONTAL, NOT CARDS ═══ */}
      <section className="py-24 md:py-36 px-6 md:px-12" style={{ background: P.bgAlt }}>
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <p
              className="text-[11px] tracking-[0.3em] uppercase mb-16 md:mb-24"
              style={{ fontFamily: fMono, color: P.textMuted }}
            >
              Leadership
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.12}>
                <div
                  className="md:px-10 first:md:pl-0 last:md:pr-0"
                  style={{
                    borderLeft: i > 0 ? "1px solid #E2DED8" : "none",
                  }}
                >
                  <h3
                    className="text-[clamp(24px,2.5vw,36px)] font-light mb-2"
                    style={{ color: P.text }}
                  >
                    {t.name}
                  </h3>
                  <p
                    className="text-[11px] tracking-[0.15em] uppercase mb-4"
                    style={{ fontFamily: fMono, color: P.textMuted }}
                  >
                    {t.role}
                  </p>
                  <p
                    className="text-[13px] leading-[1.8]"
                    style={{ color: P.textBody }}
                  >
                    {t.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8. PRESS — SIMPLE LIST ═══ */}
      <section className="py-24 md:py-32 px-6 md:px-12" style={{ background: P.bg }}>
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <h2
              className="text-[clamp(28px,3.5vw,44px)] font-light mb-14"
              style={{ color: P.text }}
            >
              In the News
            </h2>
          </Reveal>

          {press.map((p, i) => (
            <Reveal key={p.headline} delay={i * 0.08}>
              <div
                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0 py-5"
                style={{ borderBottom: `1px solid ${P.bgAlt}` }}
              >
                <span
                  className="text-[11px] tracking-[0.1em] uppercase md:w-[140px] flex-shrink-0"
                  style={{ fontFamily: fMono, color: P.textMuted }}
                >
                  {p.pub}
                </span>
                <span
                  className="text-[15px] font-light flex-1"
                  style={{ color: P.text }}
                >
                  {p.headline}
                </span>
                <span
                  className="text-[12px] md:text-right md:w-[100px] flex-shrink-0"
                  style={{ fontFamily: fMono, color: P.textMuted }}
                >
                  {p.date}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ 9. CTA ═══ */}
      <section className="py-28 md:py-40 px-6 md:px-12" style={{ background: P.dark }}>
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <h2
              className="text-[clamp(32px,5vw,64px)] font-light leading-[1.1] mb-10"
              style={{ color: "#FFFFFF" }}
            >
              The future of satellite
              <br />
              propulsion starts here.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/demos/startup/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-[13px] tracking-[0.1em] uppercase no-underline transition-opacity hover:opacity-80"
                style={{
                  background: "#FFFFFF",
                  color: P.dark,
                  fontFamily: fBody,
                  fontWeight: 500,
                }}
              >
                Get in Touch
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </Link>
              <Link
                href="/demos/startup/specs"
                className="inline-flex items-center gap-2 px-8 py-4 text-[13px] tracking-[0.1em] uppercase no-underline transition-opacity hover:opacity-80"
                style={{
                  background: "transparent",
                  color: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  fontFamily: fBody,
                }}
              >
                Technical Specs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 10. FOOTER ═══ */}
      <footer className="py-16 md:py-20 px-6 md:px-12" style={{ background: P.dark, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-5">
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="13" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                  <path d="M14 4 L18 14 L14 12 L10 14 Z" fill="rgba(255,255,255,0.6)" />
                  <path d="M10 14 L14 12 L18 14 L14 24 Z" fill="rgba(255,255,255,0.3)" />
                </svg>
                <span
                  className="text-[13px] tracking-[0.2em] uppercase"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Nova Space
                </span>
              </div>
              <p
                className="text-[12px] leading-[1.7] max-w-[220px]"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                High-efficiency electric propulsion for the new space economy.
              </p>
            </div>

            {/* Company */}
            <div>
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-5"
                style={{ fontFamily: fMono, color: "rgba(255,255,255,0.3)" }}
              >
                Company
              </p>
              {["About", "Careers", "Press", "Contact"].map((l) => (
                <Link
                  key={l}
                  href={`/demos/startup/${l.toLowerCase()}`}
                  className="block text-[13px] mb-3 no-underline transition-opacity hover:opacity-60"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {l}
                </Link>
              ))}
            </div>

            {/* Resources */}
            <div>
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-5"
                style={{ fontFamily: fMono, color: "rgba(255,255,255,0.3)" }}
              >
                Resources
              </p>
              {["Documentation", "Data Sheets", "Publications", "FAQ"].map((l) => (
                <Link
                  key={l}
                  href={`/demos/startup/${l.toLowerCase().replace(/\s/g, "-")}`}
                  className="block text-[13px] mb-3 no-underline transition-opacity hover:opacity-60"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {l}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div>
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-5"
                style={{ fontFamily: fMono, color: "rgba(255,255,255,0.3)" }}
              >
                Contact
              </p>
              <p className="text-[13px] mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                hello@novaspace.ch
              </p>
              <p className="text-[13px] mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                +41 44 123 45 67
              </p>
              <p className="text-[13px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.35)" }}>
                Technoparkstrasse 1<br />
                8005 Zurich, Switzerland
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>
              &copy; {new Date().getFullYear()} Nova Space AG. All rights reserved.
            </p>
            <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>
              Website by{" "}
              <a
                href="https://amenzo.co"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline transition-opacity hover:opacity-60"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Amenzo
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
