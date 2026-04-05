"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";

/* ─── palette ─── */
const P = {
  bg: "#F5F2ED", bgDark: "#EDE9E3", surface: "#FFFFFF",
  dark: "#1A1816", darkSurface: "#242220",
  text: "#1A1816", textBody: "#6B6560", textMuted: "#9E9891",
  accent: "#8B7355", accentLight: "#A89070",
  border: "#E2DED8", borderDark: "#333028",
};

const NAV = [
  { label: "Projects", href: "/demos/interior/projects" },
  { label: "Studio", href: "/demos/interior/studio" },
  { label: "Approach", href: "/demos/interior/approach" },
  { label: "Contact", href: "/demos/interior/contact" },
];

/* ─── Nav ─── */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-10 left-0 right-0 z-50 mix-blend-difference">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <Link href="/demos/interior" className="text-white font-[family-name:var(--font-heading)] text-xl tracking-wide">
          Studio Ēlan
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV.map(l => (
            <Link key={l.href} href={l.href} className="text-white/80 hover:text-white text-[13px] font-[family-name:var(--font-body)] tracking-widest uppercase transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4">
          {NAV.map(l => (
            <Link key={l.href} href={l.href} className="text-white/80 hover:text-white text-sm font-[family-name:var(--font-body)] tracking-widest uppercase">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer style={{ background: P.dark, color: "#fff" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div>
          <p className="font-[family-name:var(--font-heading)] text-2xl mb-4">Studio Ēlan</p>
          <p className="text-sm text-white/40 font-[family-name:var(--font-body)] leading-relaxed">Refined interiors for<br />discerning spaces.</p>
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-white/30 mb-4 font-[family-name:var(--font-body)]">Navigation</p>
          {["Projects", "Studio", "Approach", "Journal"].map(l => (
            <Link key={l} href={`/demos/interior/${l.toLowerCase()}`} className="block text-sm text-white/60 hover:text-white transition-colors mb-2 font-[family-name:var(--font-body)]">{l}</Link>
          ))}
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-white/30 mb-4 font-[family-name:var(--font-body)]">Connect</p>
          {["Instagram", "Pinterest", "LinkedIn"].map(l => (
            <span key={l} className="block text-sm text-white/60 mb-2 font-[family-name:var(--font-body)]">{l}</span>
          ))}
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-white/30 mb-4 font-[family-name:var(--font-body)]">Contact</p>
          <p className="text-sm text-white/60 font-[family-name:var(--font-body)] leading-relaxed">L\u00F6wenstrasse 42<br />8001 Z\u00FCrich, Switzerland</p>
          <p className="text-sm text-white/60 font-[family-name:var(--font-body)] mt-2">hello@studioelan.ch</p>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: P.borderDark }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-[family-name:var(--font-body)]">&copy; 2026 Studio Ēlan. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/demos/interior/press" className="text-xs text-white/30 hover:text-white/60 transition-colors font-[family-name:var(--font-body)]">Press</Link>
            <Link href="/demos/interior/impressum" className="text-xs text-white/30 hover:text-white/60 transition-colors font-[family-name:var(--font-body)]">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── page ─── */
export default function ImpressumPage() {
  return (
    <div style={{ background: P.bg, color: P.text, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <DemoBanner />
      <Nav />

      <section className="pt-40 pb-24 md:pb-32 px-6 md:px-10 max-w-[1400px] mx-auto flex-1">
        <Reveal type="fade">
          <p className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)] mb-4" style={{ color: P.textMuted }}>
            Legal
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl font-light mt-2 mb-16 leading-[1.05]">
            Impressum
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-7 space-y-12">

            {/* Company */}
            <Reveal type="slide-up" delay={0.2}>
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light mb-4">Company</h2>
                <div className="font-[family-name:var(--font-body)] text-base leading-[1.9]" style={{ color: P.textBody }}>
                  <p>Studio Ēlan GmbH</p>
                  <p>L\u00F6wenstrasse 42</p>
                  <p>8001 Z\u00FCrich, Switzerland</p>
                  <p className="mt-3">CHE-123.456.789</p>
                  <p>hello@studioelan.ch</p>
                  <p>+41 44 512 30 80</p>
                </div>
              </div>
            </Reveal>

            {/* Management */}
            <Reveal type="slide-up" delay={0.3}>
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light mb-4">Management</h2>
                <p className="font-[family-name:var(--font-body)] text-base leading-[1.9]" style={{ color: P.textBody }}>
                  Isabelle Morel, Managing Director
                </p>
              </div>
            </Reveal>

            {/* Demo Disclaimer */}
            <Reveal type="slide-up" delay={0.4}>
              <div className="p-6 md:p-8" style={{ background: P.bgDark, border: `1px solid ${P.border}` }}>
                <h2 className="font-[family-name:var(--font-heading)] text-xl font-light mb-4" style={{ color: P.accent }}>
                  Demo Disclaimer
                </h2>
                <p className="font-[family-name:var(--font-body)] text-sm leading-[1.8]" style={{ color: P.textBody }}>
                  This website is a design demonstration created by Amenzo. Studio Ēlan is a fictional interior design studio. All content, including project descriptions, team members, and contact information, is entirely fictitious and intended solely to showcase web design and development capabilities. No real business, service, or persons are represented.
                </p>
              </div>
            </Reveal>

            {/* Copyright */}
            <Reveal type="slide-up" delay={0.5}>
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light mb-4">Copyright</h2>
                <p className="font-[family-name:var(--font-body)] text-sm leading-[1.8]" style={{ color: P.textBody }}>
                  &copy; 2026 Studio Ēlan GmbH. All rights reserved. Website design and development by{" "}
                  <a
                    href="https://amenzo.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-1 hover:opacity-70 transition-opacity"
                    style={{ color: P.accent }}
                  >
                    Amenzo
                  </a>
                  .
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
