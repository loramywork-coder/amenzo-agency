"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Menu, X, ShieldCheck, Zap, Lock, Eye } from "lucide-react";

const P = {
  bg: "#FFFFFF",
  surface: "#F8F9FA",
  surfaceAlt: "#F1F3F5",
  text: "#111827",
  textSecondary: "#6B7280",
  textMuted: "#9CA3AF",
  border: "#E5E7EB",
  borderLight: "#F3F4F6",
  accent: "#0F766E",
  accentLight: "#14B8A6",
  accentBg: "#F0FDFA",
  emerald: "#059669",
  emeraldBg: "#ECFDF5",
  amber: "#D97706",
  rose: "#DC2626",
};

const NAV_LINKS = [
  { label: "Services", href: "/demos/fintech/services" },
  { label: "Global", href: "/demos/fintech/global" },
  { label: "Insights", href: "/demos/fintech/insights" },
  { label: "About", href: "/demos/fintech/about" },
  { label: "Leadership", href: "/demos/fintech/team" },
  { label: "Careers", href: "/demos/fintech/careers" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-10 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4"
        style={{ background: "transparent", borderBottom: "none" }}>
        <Link href="/demos/fintech" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="30" height="30" rx="8" stroke="#0F766E" strokeWidth="1.5" fill="none"/>
            <path d="M9 22V10l7 6 7-6v12" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          <span style={{ color: P.text, fontWeight: 600, fontSize: 15, fontFamily: "var(--font-body)", letterSpacing: "-0.01em" }}>Meridian Capital</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} style={{ color: P.textMuted, fontSize: 13, fontFamily: "var(--font-body)", textDecoration: "none", transition: "color .2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = P.text)} onMouseLeave={(e) => (e.currentTarget.style.color = P.textMuted)}>
              {l.label}
            </Link>
          ))}
          <Link href="/demos/fintech/contact" className="px-4 py-2 rounded-lg text-[13px] font-medium"
            style={{ background: P.accent, color: "#fff", fontFamily: "var(--font-body)", textDecoration: "none" }}>Contact</Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} color={P.text} /> : <Menu size={20} color={P.text} />}
        </button>
      </nav>
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6" style={{ background: `${P.bg}f7` }}>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ color: P.text, fontSize: 22, fontFamily: "var(--font-body)", textDecoration: "none", fontWeight: 500 }}>{l.label}</Link>
          ))}
          <Link href="/demos/fintech/contact" onClick={() => setOpen(false)} className="px-6 py-3 rounded-lg mt-4"
            style={{ background: P.accent, color: "#fff", fontFamily: "var(--font-body)", fontSize: 16, textDecoration: "none" }}>Contact</Link>
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer className="py-16 px-6 md:px-10" style={{ background: P.surface, borderTop: `1px solid ${P.border}` }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="30" height="30" rx="8" stroke="#0F766E" strokeWidth="1.5" fill="none"/>
                <path d="M9 22V10l7 6 7-6v12" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <span style={{ color: P.text, fontWeight: 600, fontSize: 14, fontFamily: "var(--font-body)" }}>Meridian Capital</span>
            </div>
            <p style={{ color: P.textMuted, fontSize: 13, fontFamily: "var(--font-body)", lineHeight: 1.6 }}>Global financial infrastructure for the digital economy.</p>
          </div>
          <div>
            <h4 style={{ color: P.textSecondary, fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", marginBottom: 16, textTransform: "uppercase" }}>Platform</h4>
            {["Services", "Global", "Insights"].map((l) => (
              <Link key={l} href={`/demos/fintech/${l.toLowerCase()}`} className="block mb-2" style={{ color: P.textMuted, fontSize: 13, fontFamily: "var(--font-body)", textDecoration: "none" }}>{l}</Link>
            ))}
          </div>
          <div>
            <h4 style={{ color: P.textSecondary, fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", marginBottom: 16, textTransform: "uppercase" }}>Company</h4>
            {[{ l: "About", h: "about" }, { l: "Leadership", h: "team" }, { l: "Careers", h: "careers" }].map((i) => (
              <Link key={i.h} href={`/demos/fintech/${i.h}`} className="block mb-2" style={{ color: P.textMuted, fontSize: 13, fontFamily: "var(--font-body)", textDecoration: "none" }}>{i.l}</Link>
            ))}
          </div>
          <div>
            <h4 style={{ color: P.textSecondary, fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", marginBottom: 16, textTransform: "uppercase" }}>Legal</h4>
            {[{ l: "Contact", h: "contact" }, { l: "Impressum", h: "impressum" }].map((i) => (
              <Link key={i.h} href={`/demos/fintech/${i.h}`} className="block mb-2" style={{ color: P.textMuted, fontSize: 13, fontFamily: "var(--font-body)", textDecoration: "none" }}>{i.l}</Link>
            ))}
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: `1px solid ${P.border}` }}>
          <span style={{ color: P.textMuted, fontSize: 12, fontFamily: "var(--font-body)" }}>&copy; 2027 Meridian Capital AG. This is a design demo.</span>
          <span style={{ color: P.textMuted, fontSize: 12, fontFamily: "var(--font-mono)" }}>Zurich &middot; London &middot; New York &middot; Singapore</span>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */
const VALUES = [
  { icon: ShieldCheck, title: "Integrity", desc: "We operate with full transparency. Every transaction is auditable, every fee is disclosed, and every process is documented." },
  { icon: Zap, title: "Speed", desc: "Financial infrastructure should move at the speed of the internet. We engineer for sub-second latency and real-time settlement." },
  { icon: Lock, title: "Security", desc: "SOC 2 Type II certified. Multi-signature governance. Insurance-backed custody. Zero-trust architecture from the ground up." },
  { icon: Eye, title: "Transparency", desc: "Open API documentation, public status pages, and proactive communication. Our clients always know exactly where they stand." },
];

const MILESTONES = [
  { year: "2018", event: "Founded in Zurich by former UBS and Credit Suisse technologists", color: P.accent },
  { year: "2019", event: "Secured FINMA FinTech licence; first cross-border payment processed", color: P.accent },
  { year: "2020", event: "Series A ($18M) led by Lakestar; launched digital asset custody", color: P.emerald },
  { year: "2021", event: "Opened London office; obtained FCA EMI authorisation", color: P.emerald },
  { year: "2022", event: "Series B ($52M); real-time settlement engine goes live", color: P.amber },
  { year: "2023", event: "New York office opens; FinCEN MSB registration", color: P.amber },
  { year: "2024", event: "Singapore office; MAS MPI licence; 100+ corridors", color: P.rose },
  { year: "2025", event: "Series C ($120M) at $1.2B valuation; 200+ team members", color: P.rose },
  { year: "2026", event: "Custody AUC surpasses $4B; GraphQL developer platform launch", color: P.accent },
  { year: "2027", event: "280+ team members across 4 offices; 140+ payment corridors", color: P.accent },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <div style={{ background: P.bg, color: P.text, fontFamily: "var(--font-body)", minHeight: "100vh" }}>
      <DemoBanner />
      <Nav />

      {/* HERO */}
      <section className="pt-40 pb-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium mb-6"
              style={{ background: `${P.accent}18`, color: P.accentLight, fontFamily: "var(--font-mono)", letterSpacing: "0.06em", border: `1px solid ${P.accent}30` }}>
              ABOUT
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6" style={{ letterSpacing: "-0.025em", lineHeight: 1.1 }}>
              Rebuilding finance<br /><span style={{ color: P.accent }}>from first principles</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: P.textSecondary, lineHeight: 1.7 }}>
              Founded in 2018 by a team of banking technologists who saw that legacy financial infrastructure was holding the industry back.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="pb-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="rounded-2xl p-8 md:p-10" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
              <h2 className="text-xl font-semibold mb-4" style={{ letterSpacing: "-0.01em" }}>Our Story</h2>
              <div className="space-y-4" style={{ color: P.textSecondary, fontSize: 15, lineHeight: 1.7 }}>
                <p>
                  Meridian Capital was born from a simple frustration: why does it take days to move money across borders when data crosses the globe in milliseconds? In 2018, three former UBS and Credit Suisse engineers set out to answer that question.
                </p>
                <p>
                  Starting from a co-working space on Bahnhofstrasse, we built an API-first platform that connects directly to local payment rails, banking partners, and blockchain networks. By 2020, we had our first institutional clients. By 2025, we had crossed $1 billion in daily transaction volume.
                </p>
                <p>
                  Today, 280+ people across Zurich, London, New York, and Singapore are building the financial infrastructure that the digital economy demands: fast, transparent, compliant, and always on.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION */}
      <section className="pb-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="rounded-2xl py-14 px-8" style={{ background: `linear-gradient(135deg, ${P.accent}10, ${P.surface})`, border: `1px solid ${P.accent}20` }}>
              <span className="text-[11px] font-medium mb-4 block" style={{ color: P.accent, fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>OUR MISSION</span>
              <p className="text-xl md:text-2xl font-medium leading-relaxed" style={{ letterSpacing: "-0.01em" }}>
                To make global financial infrastructure as fast, transparent, and reliable as the internet itself.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center" style={{ letterSpacing: "-0.02em" }}>Our Values</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.1}>
                  <div className="rounded-2xl p-8" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${P.accent}15` }}>
                      <Icon size={20} color={P.accent} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                    <p style={{ color: P.textSecondary, fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center" style={{ letterSpacing: "-0.02em" }}>Key Milestones</h2>
          </Reveal>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-0 bottom-0 w-px" style={{ background: P.border }} />
            <div className="space-y-6">
              {MILESTONES.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.06}>
                  <div className="flex gap-6 items-start pl-0">
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center" style={{ background: P.surface, border: `2px solid ${m.color}` }}>
                        <span style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: m.color, fontWeight: 600 }}>{m.year.slice(2)}</span>
                      </div>
                    </div>
                    <div className="pt-1.5">
                      <span className="text-[12px] font-medium block mb-1" style={{ color: m.color, fontFamily: "var(--font-mono)" }}>{m.year}</span>
                      <p style={{ color: P.textSecondary, fontSize: 14, lineHeight: 1.6 }}>{m.event}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
