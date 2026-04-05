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

const FEATURES = [
  { pub: "Architectural Digest", title: "The AD100: Designers Shaping the Future of Living", year: "2026" },
  { pub: "Wallpaper*", title: "Studio Ēlan and the New Swiss Restraint", year: "2025" },
  { pub: "Elle Decoration", title: "10 Interiors That Redefine Alpine Luxury", year: "2025" },
  { pub: "Frame Magazine", title: "H\u00F4tel Noire: Where Darkness Becomes Warmth", year: "2024" },
  { pub: "Dezeen", title: "Z\u00FCrich Penthouse by Studio Ēlan Embraces Raw Materiality", year: "2024" },
  { pub: "Interior Design Magazine", title: "Best of Year: Hospitality Shortlist", year: "2023" },
  { pub: "Monocle", title: "The Quiet Studios: Six Practices Redefining European Design", year: "2023" },
  { pub: "The New York Times Style", title: "Swiss Design Goes Warm: A New Generation of Interiors", year: "2022" },
];

const AWARDS_LIST = [
  { award: "AD100 \u2014 Architectural Digest", year: "2020\u20132026" },
  { award: "Frame Awards \u2014 Residential Interior of the Year", year: "2021" },
  { award: "Interior Design Best of Year \u2014 Hospitality", year: "2022" },
  { award: "Frame Awards \u2014 Hospitality Interior", year: "2023" },
  { award: "Swiss Design Award \u2014 Interior Practice", year: "2024" },
  { award: "Wallpaper* Design Awards \u2014 Best Domestic Interior", year: "2025" },
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
export default function PressPage() {
  return (
    <div style={{ background: P.bg, color: P.text }}>
      <DemoBanner />
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 md:px-10 max-w-[1400px] mx-auto">
        <Reveal type="fade">
          <p className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)]" style={{ color: P.textMuted }}>
            Press
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl font-light mt-4 leading-[1.05]">
            Publications &amp; Awards
          </h1>
        </Reveal>
      </section>

      {/* Features */}
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto pb-24">
        <Reveal type="fade">
          <p className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)] mb-12" style={{ color: P.textMuted }}>
            Selected Features
          </p>
        </Reveal>
        <div className="space-y-0">
          {FEATURES.map((item, i) => (
            <Reveal key={i} type="slide-up" delay={i * 0.06}>
              <div className="grid grid-cols-12 gap-4 py-6 border-b items-baseline" style={{ borderColor: P.border }}>
                <div className="col-span-12 md:col-span-3">
                  <span className="font-[family-name:var(--font-heading)] text-lg md:text-xl font-light italic" style={{ color: P.accent }}>
                    {item.pub}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-8">
                  <p className="font-[family-name:var(--font-body)] text-base md:text-lg" style={{ color: P.textBody }}>
                    {item.title}
                  </p>
                </div>
                <div className="col-span-2 md:col-span-1 text-right">
                  <span className="font-[family-name:var(--font-body)] text-sm" style={{ color: P.textMuted }}>
                    {item.year}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="h-px w-full" style={{ background: P.border }} />
      </div>

      {/* Awards */}
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto py-24">
        <Reveal type="fade">
          <p className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)] mb-12" style={{ color: P.textMuted }}>
            Awards &amp; Recognition
          </p>
        </Reveal>
        <div className="space-y-0">
          {AWARDS_LIST.map((item, i) => (
            <Reveal key={i} type="fade" delay={i * 0.06}>
              <div className="flex items-baseline justify-between py-5 border-b" style={{ borderColor: P.border }}>
                <p className="font-[family-name:var(--font-body)] text-base md:text-lg" style={{ color: P.textBody }}>
                  {item.award}
                </p>
                <span className="font-[family-name:var(--font-body)] text-sm ml-4 shrink-0" style={{ color: P.textMuted }}>
                  {item.year}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="h-px w-full" style={{ background: P.border }} />
      </div>

      {/* Press Contact */}
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto py-24 md:py-32">
        <Reveal type="slide-up">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)] mb-6" style={{ color: P.textMuted }}>
              Press Inquiries
            </p>
            <p className="font-[family-name:var(--font-body)] text-base leading-relaxed mb-6" style={{ color: P.textBody }}>
              For press kits, high-resolution imagery, or interview requests, please contact our press office.
            </p>
            <a
              href="mailto:press@studioelan.ch"
              className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-light underline underline-offset-8 decoration-1 hover:opacity-70 transition-opacity"
              style={{ color: P.accent, textDecorationColor: P.border }}
            >
              press@studioelan.ch
            </a>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
