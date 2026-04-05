"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Menu, X } from "lucide-react";

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
        style={{ background: `${P.bg}ee`, backdropFilter: "blur(16px)", borderBottom: `1px solid ${P.border}` }}>
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
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function ImpressumPage() {
  const sectionStyle: React.CSSProperties = {
    background: P.surface,
    border: `1px solid ${P.border}`,
    borderRadius: 16,
    padding: "32px",
    marginBottom: 24,
  };

  const labelStyle: React.CSSProperties = {
    color: P.textMuted,
    fontSize: 11,
    fontFamily: "var(--font-mono)",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    marginBottom: 12,
    display: "block",
  };

  return (
    <div style={{ background: P.bg, color: P.text, fontFamily: "var(--font-body)", minHeight: "100vh" }}>
      <DemoBanner />
      <Nav />

      {/* HERO */}
      <section className="pt-40 pb-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium mb-6"
              style={{ background: `${P.accent}18`, color: P.accentLight, fontFamily: "var(--font-mono)", letterSpacing: "0.06em", border: `1px solid ${P.accent}30` }}>
              LEGAL
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl font-semibold mb-6" style={{ letterSpacing: "-0.025em", lineHeight: 1.1 }}>
              Impressum
            </h1>
          </Reveal>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          {/* Company Info */}
          <Reveal>
            <div style={sectionStyle}>
              <span style={labelStyle}>Company</span>
              <h2 className="text-xl font-semibold mb-4">Meridian Capital AG</h2>
              <div className="space-y-2" style={{ color: P.textSecondary, fontSize: 14, lineHeight: 1.7 }}>
                <p>Bahnhofstrasse 42</p>
                <p>8001 Zurich</p>
                <p>Switzerland</p>
              </div>
            </div>
          </Reveal>

          {/* Registration */}
          <Reveal delay={0.1}>
            <div style={sectionStyle}>
              <span style={labelStyle}>Registration</span>
              <div className="space-y-3" style={{ color: P.textSecondary, fontSize: 14, lineHeight: 1.7 }}>
                <div className="flex flex-col sm:flex-row sm:gap-8">
                  <span style={{ color: P.textMuted, fontFamily: "var(--font-mono)", fontSize: 12, minWidth: 160 }}>Company ID (UID)</span>
                  <span>CHE-123.456.789</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-8">
                  <span style={{ color: P.textMuted, fontFamily: "var(--font-mono)", fontSize: 12, minWidth: 160 }}>Commercial Register</span>
                  <span>Canton of Zurich</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-8">
                  <span style={{ color: P.textMuted, fontFamily: "var(--font-mono)", fontSize: 12, minWidth: 160 }}>Legal Form</span>
                  <span>Aktiengesellschaft (AG)</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-8">
                  <span style={{ color: P.textMuted, fontFamily: "var(--font-mono)", fontSize: 12, minWidth: 160 }}>VAT Number</span>
                  <span>CHE-123.456.789 MWST</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Regulatory */}
          <Reveal delay={0.15}>
            <div style={sectionStyle}>
              <span style={labelStyle}>Regulatory Supervision</span>
              <div className="space-y-2" style={{ color: P.textSecondary, fontSize: 14, lineHeight: 1.7 }}>
                <p>Meridian Capital AG is authorised and supervised by the Swiss Financial Market Supervisory Authority (FINMA) under a FinTech licence pursuant to Art. 1b of the Banking Act.</p>
                <p className="mt-3">
                  <span style={{ color: P.textMuted, fontFamily: "var(--font-mono)", fontSize: 12 }}>FINMA Licence No.&nbsp;</span>
                  FT-2019-0042
                </p>
              </div>
            </div>
          </Reveal>

          {/* Demo Disclaimer */}
          <Reveal delay={0.2}>
            <div style={{ ...sectionStyle, borderColor: `${P.amber}30` }}>
              <span style={{ ...labelStyle, color: P.amber }}>Demo Disclaimer</span>
              <div className="space-y-3" style={{ color: P.textSecondary, fontSize: 14, lineHeight: 1.7 }}>
                <p>
                  This website is a <strong style={{ color: P.text }}>design demonstration</strong> created by Amenzo to showcase web design and development capabilities. Meridian Capital AG is a fictitious company. No financial services, products, or advice are offered through this website.
                </p>
                <p>
                  All company names, addresses, registration numbers, licence references, team members, financial figures, and other details presented on this website are entirely fictional and used solely for illustrative purposes.
                </p>
                <p>
                  This website does not collect personal data, process payments, or facilitate any financial transactions. No cookies are set beyond those necessary for basic site functionality.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Copyright */}
          <Reveal delay={0.25}>
            <div style={sectionStyle}>
              <span style={labelStyle}>Copyright</span>
              <div className="space-y-2" style={{ color: P.textSecondary, fontSize: 14, lineHeight: 1.7 }}>
                <p>&copy; 2027 Meridian Capital AG (fictitious). All rights reserved.</p>
                <p>
                  Design and development by{" "}
                  <a href="https://amenzo.co" target="_blank" rel="noopener noreferrer" style={{ color: P.accent, textDecoration: "none" }}>
                    Amenzo
                  </a>
                  . All visual design, code, and content are proprietary and may not be reproduced without written permission.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
