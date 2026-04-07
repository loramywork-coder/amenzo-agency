"use client";

import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Globe } from "@/components/ui/cobe-globe";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

/* ─── palette ─── */
const P = {
  bg: "#FAFAFA",
  bgAlt: "#F4F4F5",
  surface: "#FFFFFF",
  dark: "#09090B",
  darkSurface: "#18181B",
  text: "#09090B",
  textBody: "#52525B",
  textMuted: "#A1A1AA",
  accent: "#0F766E",
  accentLight: "#14B8A6",
  accentBg: "#F0FDFA",
  emerald: "#059669",
  amber: "#D97706",
} as const;

const fontBody = "var(--font-body), system-ui, sans-serif";
const fontMono = "var(--font-mono), monospace";

/* ─── data ─── */
const NAV_LINKS = ["Services", "Global", "About", "Contact"];

const STATS = [
  { label: "Daily Volume", value: "$2.1B", delta: "+18%" },
  { label: "TPS", value: "12,847", delta: "+24%" },
  { label: "Countries", value: "67", delta: "+8" },
  { label: "Uptime", value: "99.997%", delta: "SLA" },
  { label: "People", value: "280+", delta: "+32" },
];

const GLOBE_MARKERS = [
  { id: "zurich", location: [47.3769, 8.5417] as [number, number], label: "Zurich" },
  { id: "london", location: [51.5074, -0.1278] as [number, number], label: "London" },
  { id: "nyc", location: [40.7128, -74.006] as [number, number], label: "New York" },
  { id: "singapore", location: [1.3521, 103.8198] as [number, number], label: "Singapore" },
  { id: "tokyo", location: [35.6762, 139.6503] as [number, number], label: "Tokyo" },
  { id: "dubai", location: [25.2048, 55.2708] as [number, number], label: "Dubai" },
  { id: "saopaulo", location: [-23.5505, -46.6333] as [number, number], label: "São Paulo" },
  { id: "sydney", location: [-33.8688, 151.2093] as [number, number], label: "Sydney" },
];

const GLOBE_ARCS = [
  { id: "zh-ld", from: [47.3769, 8.5417] as [number, number], to: [51.5074, -0.1278] as [number, number] },
  { id: "ld-ny", from: [51.5074, -0.1278] as [number, number], to: [40.7128, -74.006] as [number, number] },
  { id: "zh-du", from: [47.3769, 8.5417] as [number, number], to: [25.2048, 55.2708] as [number, number] },
  { id: "du-sg", from: [25.2048, 55.2708] as [number, number], to: [1.3521, 103.8198] as [number, number] },
  { id: "sg-tk", from: [1.3521, 103.8198] as [number, number], to: [35.6762, 139.6503] as [number, number] },
  { id: "sg-sy", from: [1.3521, 103.8198] as [number, number], to: [-33.8688, 151.2093] as [number, number] },
  { id: "ny-sp", from: [40.7128, -74.006] as [number, number], to: [-23.5505, -46.6333] as [number, number] },
];

const OFFICES = [
  { city: "Zurich", role: "Global HQ", detail: "Regulatory & compliance centre" },
  { city: "London", role: "EMEA Operations", detail: "FCA-regulated trading desk" },
  { city: "New York", role: "Americas", detail: "Institutional partnerships" },
  { city: "Singapore", role: "APAC Hub", detail: "MAS-licensed custody" },
  { city: "Tokyo", role: "Japan Desk", detail: "JFSA-registered operations" },
  { city: "Dubai", role: "MENA Gateway", detail: "DFSA-licensed treasury" },
  { city: "São Paulo", role: "LATAM Office", detail: "BCB-supervised partnerships" },
  { city: "Sydney", role: "Oceania", detail: "ASIC-registered custody" },
];

const SERVICES = [
  { num: "01", title: "Cross-Border Payments", stat: "$2.1B daily", desc: "Instant multi-currency settlement across 67 jurisdictions with real-time FX and compliance screening." },
  { num: "02", title: "Digital Asset Custody", stat: "$14B AUC", desc: "Institutional-grade cold and warm storage with multi-sig governance and insured reserves." },
  { num: "03", title: "Real-Time Settlement", stat: "1.2s avg", desc: "Atomic settlement finality across fiat and digital rails, eliminating counterparty exposure." },
  { num: "04", title: "Treasury Management", stat: "340+ clients", desc: "Unified liquidity management, yield optimization, and automated cash positioning." },
  { num: "05", title: "Compliance & KYC", stat: "4 licences", desc: "Automated screening, ongoing monitoring, and regulatory reporting across all operating jurisdictions." },
  { num: "06", title: "API & Integration", stat: "99.997%", desc: "RESTful and WebSocket APIs with sandbox environments, SDKs, and dedicated integration engineering." },
];

const CERTIFICATIONS = ["SOC 2", "ISO 27001", "FINMA", "FCA", "MAS", "$500M Insured", "HSM", "Pen Tested"];

const VOLUME_DATA = [
  { year: "2020", value: 12 },
  { year: "2021", value: 28 },
  { year: "2022", value: 45 },
  { year: "2023", value: 68 },
  { year: "2024", value: 89 },
  { year: "2025", value: 100 },
];

const FUNDING = [
  { round: "Seed", amount: "$4M", year: "2019", lead: "Lakestar" },
  { round: "Series A", amount: "$22M", year: "2020", lead: "Index Ventures" },
  { round: "Series B", amount: "$65M", year: "2022", lead: "Coatue" },
  { round: "Series C", amount: "$180M", year: "2024", lead: "Tiger Global" },
];

const LEADERS = [
  { name: "Elena Vorster", role: "Chief Executive Officer", note: "Ex-Goldman Sachs, 18 years in structured finance" },
  { name: "James Chen", role: "Chief Technology Officer", note: "Former Stripe infra lead, distributed systems PhD" },
  { name: "Amara Osei", role: "Chief Risk Officer", note: "Ex-BIS, regulatory policy architect" },
  { name: "Lukas Reinhardt", role: "Chief Financial Officer", note: "Former CFO at N26, IPO experience" },
];

const FOOTER_COLS = [
  { title: "Platform", links: ["Payments", "Custody", "Settlement", "Treasury", "API Docs"] },
  { title: "Company", links: ["About", "Careers", "Press", "Blog", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Compliance", "Cookie Policy", "Security"] },
];

/* ─── component ─── */
export default function FintechDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="light-theme" style={{ fontFamily: fontBody, color: P.text, background: P.bg }}>
      <DemoBanner />

      {/* ═══════ NAV ═══════ */}
      <nav
        style={{
          position: "fixed",
          top: 40,
          left: 0,
          right: 0,
          zIndex: 90,
          background: "transparent",
          borderBottom: "none",
          padding: "0 clamp(20px, 4vw, 48px)",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 56,
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          {/* brand */}
          <Link href="/demos/fintech" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <rect x="1" y="1" width="30" height="30" rx="8" stroke={P.accent} strokeWidth="1.5" fill="none"/>
              <path d="M9 22V10l7 6 7-6v12" stroke={P.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.02em", color: "#FFFFFF", textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}>
              Meridian Capital
            </span>
          </Link>

          {/* links — hidden on mobile */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: 28 }}>
            {NAV_LINKS.map((l) => (
              <Link
                key={l}
                href={`/demos/fintech/${l.toLowerCase()}`}
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  color: P.textMuted,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = P.text)}
                onMouseLeave={(e) => (e.currentTarget.style.color = P.textMuted)}
              >
                {l}
              </Link>
            ))}
            <Link
              href="/demos/fintech/contact"
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "#fff",
                background: P.accent,
                padding: "8px 18px",
                borderRadius: 8,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Contact
            </Link>
          </div>

          {/* hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#FFFFFF", padding: 4 }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ═══════ MOBILE MENU ═══════ */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 80,
            background: "rgba(250,250,250,0.97)",
            backdropFilter: "blur(24px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
          }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l}
              href={`/demos/fintech/${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 24, fontWeight: 400, color: P.text, textDecoration: "none" }}
            >
              {l}
            </Link>
          ))}
          <Link
            href="/demos/fintech/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#fff",
              background: P.accent,
              padding: "12px 28px",
              borderRadius: 8,
              textDecoration: "none",
              marginTop: 16,
            }}
          >
            Contact
          </Link>
        </div>
      )}

      {/* ═══════ HERO ═══════ */}
      <section ref={heroRef} style={{ position: "relative", height: "110vh", overflow: "hidden" }}>
        <motion.div style={{ position: "absolute", inset: 0, scale: heroScale }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="/videos/demo-fintech.mp4"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(9,9,11,0.15) 0%, rgba(9,9,11,0.1) 30%, rgba(9,9,11,0.5) 70%, rgba(9,9,11,0.85) 100%)",
            }}
          />
        </motion.div>

        <motion.div
          style={{
            position: "absolute",
            bottom: "clamp(48px, 8vh, 120px)",
            left: "clamp(20px, 4vw, 64px)",
            right: "clamp(20px, 4vw, 64px)",
            maxWidth: 1440,
            opacity: heroOpacity,
          }}
        >
          {/* live indicator */}
          <Reveal type="fade" delay={0.2}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: P.emerald,
                  display: "inline-block",
                  boxShadow: `0 0 8px ${P.emerald}`,
                }}
              />
              <span
                style={{
                  fontFamily: fontMono,
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                LIVE &middot; $2.1B processed today
              </span>
            </div>
          </Reveal>

          {/* heading */}
          <Reveal type="slide-up" delay={0.3}>
            <h1
              style={{
                fontSize: "clamp(44px, 7vw, 88px)",
                fontWeight: 300,
                lineHeight: 0.95,
                color: "#fff",
                margin: 0,
                letterSpacing: "-0.03em",
              }}
            >
              Global Financial
              <br />
              <span style={{ color: P.accentLight }}>Infrastructure</span>
            </h1>
          </Reveal>

          {/* subtitle */}
          <Reveal type="fade" delay={0.5}>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.7)",
                maxWidth: 380,
                marginTop: 20,
                marginBottom: 0,
              }}
            >
              Cross-border payments, digital asset custody, and real-time settlement.
            </p>
          </Reveal>

          {/* trust logos */}
          <Reveal type="fade" delay={0.7}>
            <div
              style={{
                display: "flex",
                gap: 32,
                marginTop: 64,
                fontFamily: fontMono,
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: "rgba(255,255,255,0.35)",
              }}
            >
              {["Goldman Sachs", "Temasek", "BlackRock", "Andreessen Horowitz", "Sequoia"].map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>
          </Reveal>
        </motion.div>
      </section>

      {/* ═══════ STATS STRIP ═══════ */}
      <section style={{ background: P.dark, padding: "64px clamp(20px, 4vw, 64px)" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 0,
          }}
        >
          {STATS.map((s, i) => (
            <Reveal key={s.label} type="fade" delay={i * 0.08}>
              <div
                style={{
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  paddingLeft: i > 0 ? 32 : 0,
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <span
                    style={{
                      fontFamily: fontMono,
                      fontSize: "clamp(28px, 3vw, 40px)",
                      fontWeight: 400,
                      color: "#fff",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    style={{
                      fontFamily: fontMono,
                      fontSize: 10,
                      color: P.emerald,
                      background: "rgba(5,150,105,0.1)",
                      padding: "2px 6px",
                      borderRadius: 3,
                    }}
                  >
                    {s.delta}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase" as const,
                    color: P.textMuted,
                    marginTop: 6,
                    display: "block",
                  }}
                >
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════ GLOBE ═══════ */}
      <section style={{ background: P.bgAlt, padding: "140px clamp(20px, 4vw, 64px) 140px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Reveal type="slide-up">
            <h2
              style={{
                fontSize: "clamp(32px, 4.5vw, 60px)",
                fontWeight: 300,
                letterSpacing: "-0.03em",
                color: P.text,
                margin: 0,
                textAlign: "center",
                lineHeight: 1.05,
              }}
            >
              Connected Across
              <br />
              <span style={{ color: P.textMuted }}>67 Countries</span>
            </h2>
          </Reveal>

          <div style={{ maxWidth: 520, margin: "48px auto 0" }}>
            <Globe
              markers={GLOBE_MARKERS}
              arcs={GLOBE_ARCS}
              markerColor={[0.06, 0.47, 0.43]}
              arcColor={[0.08, 0.72, 0.65]}
              baseColor={[0.92, 0.92, 0.93]}
              glowColor={[0.96, 0.96, 0.96]}
              dark={0}
              mapBrightness={8}
              markerSize={0.03}
              arcHeight={0.6}
              arcWidth={0.7}
              speed={0.002}
              className="w-full"
            />
          </div>

          {/* offices */}
          <Reveal type="fade" delay={0.2}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 24,
                marginTop: 64,
                maxWidth: 1200,
                margin: "80px auto 0",
              }}
            >
              {OFFICES.map((o) => (
                <div
                  key={o.city}
                  style={{
                    paddingLeft: 16,
                    borderLeft: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 500, color: P.text, display: "block" }}>{o.city}</span>
                  <span style={{ fontSize: 11, color: P.accent, fontFamily: fontMono, letterSpacing: "0.04em", textTransform: "uppercase" as const, display: "block", marginTop: 4 }}>
                    {o.role}
                  </span>
                  <span style={{ fontSize: 12, color: P.textMuted, display: "block", marginTop: 4 }}>{o.detail}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section style={{ background: P.bg, padding: "120px clamp(20px, 4vw, 64px)" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "4fr 8fr",
            gap: "clamp(40px, 6vw, 120px)",
            alignItems: "start",
          }}
        >
          {/* left: heading */}
          <Reveal type="slide-up">
            <div style={{ position: "sticky", top: 120 }}>
              <span
                style={{
                  fontFamily: fontMono,
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: P.textMuted,
                  display: "block",
                  marginBottom: 16,
                }}
              >
                What we do
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  fontWeight: 300,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  color: P.text,
                  margin: 0,
                }}
              >
                Infrastructure
                <br />
                for modern
                <br />
                finance
              </h2>
            </div>
          </Reveal>

          {/* right: numbered list */}
          <div>
            {SERVICES.map((s, i) => (
              <Reveal key={s.num} type="fade" delay={i * 0.06}>
                <div
                  style={{
                    borderBottom: `1px solid rgba(0,0,0,0.06)`,
                    padding: "32px 0",
                    display: "grid",
                    gridTemplateColumns: "40px 1fr auto",
                    gap: 20,
                    alignItems: "start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: fontMono,
                      fontSize: 12,
                      color: P.textMuted,
                      paddingTop: 2,
                    }}
                  >
                    {s.num}
                  </span>
                  <div>
                    <span style={{ fontSize: 18, fontWeight: 500, color: P.text, display: "block" }}>{s.title}</span>
                    <span
                      style={{
                        fontSize: 13,
                        color: P.textBody,
                        lineHeight: 1.6,
                        display: "block",
                        marginTop: 6,
                        maxWidth: 480,
                      }}
                    >
                      {s.desc}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: fontMono,
                      fontSize: 12,
                      color: P.accent,
                      whiteSpace: "nowrap",
                      paddingTop: 2,
                    }}
                  >
                    {s.stat}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECURITY ═══════ */}
      <section style={{ background: P.bgAlt, padding: "64px clamp(20px, 4vw, 64px)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Reveal type="fade">
            <h3
              style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
                color: P.text,
                margin: "0 0 24px 0",
              }}
            >
              Enterprise Security
            </h3>
          </Reveal>
          <Reveal type="fade" delay={0.1}>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: P.textMuted,
                margin: 0,
                lineHeight: 2.4,
              }}
            >
              {CERTIFICATIONS.join("  \u00B7  ")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════ NUMBERS ═══════ */}
      <section style={{ background: P.dark, padding: "120px clamp(20px, 4vw, 64px)" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "7fr 5fr",
            gap: "clamp(40px, 6vw, 120px)",
            alignItems: "end",
          }}
        >
          {/* left: volume chart */}
          <Reveal type="slide-up">
            <div>
              <span
                style={{
                  fontFamily: fontMono,
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: P.textMuted,
                  display: "block",
                  marginBottom: 32,
                }}
              >
                Transaction Volume Growth
              </span>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 12, height: 220 }}>
                {VOLUME_DATA.map((d, i) => (
                  <motion.div
                    key={d.year}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${d.value * 2.2}px` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                      flex: 1,
                      background: `linear-gradient(to top, ${P.accent}, ${P.accentLight})`,
                      borderRadius: "3px 3px 0 0",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        bottom: -24,
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontFamily: fontMono,
                        fontSize: 10,
                        color: P.textMuted,
                      }}
                    >
                      {d.year}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* right: funding timeline */}
          <Reveal type="fade" delay={0.2}>
            <div>
              <span
                style={{
                  fontFamily: fontMono,
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: P.textMuted,
                  display: "block",
                  marginBottom: 32,
                }}
              >
                Funding History
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {FUNDING.map((f, i) => (
                  <div
                    key={f.round}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "20px 1fr",
                      gap: 16,
                      paddingBottom: i < FUNDING.length - 1 ? 28 : 0,
                    }}
                  >
                    {/* dot + line */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: P.accentLight,
                          flexShrink: 0,
                          marginTop: 4,
                        }}
                      />
                      {i < FUNDING.length - 1 && (
                        <div
                          style={{
                            width: 1,
                            flex: 1,
                            background: "rgba(255,255,255,0.06)",
                            marginTop: 4,
                          }}
                        />
                      )}
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                        <span style={{ fontFamily: fontMono, fontSize: 20, fontWeight: 400, color: "#fff" }}>
                          {f.amount}
                        </span>
                        <span style={{ fontSize: 11, color: P.textMuted }}>{f.round}</span>
                      </div>
                      <span style={{ fontSize: 11, color: P.textMuted, display: "block", marginTop: 2 }}>
                        {f.year} &middot; {f.lead}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ LEADERSHIP ═══════ */}
      <section style={{ background: P.bg, padding: "100px clamp(20px, 4vw, 64px)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Reveal type="fade">
            <span
              style={{
                fontFamily: fontMono,
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: P.textMuted,
                display: "block",
                marginBottom: 48,
              }}
            >
              Leadership
            </span>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
            }}
          >
            {LEADERS.map((l, i) => (
              <Reveal key={l.name} type="fade" delay={i * 0.08}>
                <div
                  style={{
                    borderLeft: i > 0 ? "1px solid rgba(0,0,0,0.06)" : "none",
                    paddingLeft: i > 0 ? 28 : 0,
                    paddingRight: 28,
                  }}
                >
                  <span style={{ fontSize: 20, fontWeight: 400, color: P.text, display: "block", letterSpacing: "-0.01em" }}>
                    {l.name}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      color: P.accent,
                      fontFamily: fontMono,
                      letterSpacing: "0.02em",
                      display: "block",
                      marginTop: 6,
                    }}
                  >
                    {l.role}
                  </span>
                  <span style={{ fontSize: 12, color: P.textMuted, display: "block", marginTop: 6, lineHeight: 1.5 }}>
                    {l.note}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section style={{ background: P.dark, padding: "140px clamp(20px, 4vw, 64px)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Reveal type="slide-up">
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 64px)",
                fontWeight: 300,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "#fff",
                margin: 0,
                maxWidth: 700,
              }}
            >
              Ready to move capital at the speed of light?
            </h2>
          </Reveal>
          <Reveal type="fade" delay={0.2}>
            <div style={{ display: "flex", gap: 12, marginTop: 48 }}>
              <Link
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  background: "#fff",
                  color: P.dark,
                  fontSize: 13,
                  fontWeight: 500,
                  textDecoration: "none",
                  borderRadius: 0,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Schedule a Demo
                <ArrowRight size={14} />
              </Link>
              <Link
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  background: "transparent",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 400,
                  textDecoration: "none",
                  borderRadius: 0,
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              >
                View Documentation
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer style={{ background: P.dark, borderTop: "1px solid rgba(255,255,255,0.04)", padding: "64px clamp(20px, 4vw, 64px) 40px" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 40,
          }}
        >
          {/* brand col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="6" fill={P.accent} />
                <text x="7" y="20" fill="#fff" fontSize="16" fontWeight="600" fontFamily={fontMono}>M</text>
              </svg>
              <span style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>Meridian Capital</span>
            </div>
            <p style={{ fontSize: 12, lineHeight: 1.7, color: P.textMuted, maxWidth: 260, margin: 0 }}>
              Global financial infrastructure for the next generation of capital markets.
            </p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase" as const,
                  color: "rgba(255,255,255,0.4)",
                  display: "block",
                  marginBottom: 16,
                }}
              >
                {col.title}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((l) => (
                  <Link
                    key={l}
                    href="#"
                    style={{ fontSize: 12, color: P.textMuted, textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = P.textMuted)}
                  >
                    {l}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div
          style={{
            maxWidth: 1440,
            margin: "48px auto 0",
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.04)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
            &copy; 2025 Meridian Capital AG. All rights reserved.
          </span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
            Website by{" "}
            <Link href="https://amenzo.co" target="_blank" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>
              Amenzo
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
