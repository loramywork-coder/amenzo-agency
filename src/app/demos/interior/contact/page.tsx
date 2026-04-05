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

const PROJECT_TYPES = ["Residential", "Hospitality", "Commercial", "Consultation"];

/* ─── shared input style ─── */
const inputStyle: React.CSSProperties = {
  background: "transparent",
  borderBottom: `1px solid ${P.border}`,
  color: P.text,
  fontFamily: "var(--font-body)",
  fontSize: "15px",
  padding: "12px 0",
  width: "100%",
  outline: "none",
  borderRadius: 0,
  WebkitAppearance: "none",
};

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
export default function ContactPage() {
  return (
    <div style={{ background: P.bg, color: P.text }}>
      <DemoBanner />
      <Nav />

      {/* Main */}
      <section className="pt-40 pb-24 md:pb-32 px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <div className="flex flex-col justify-center">
            <Reveal type="fade">
              <p className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-body)] mb-6" style={{ color: P.textMuted }}>
                Get in Touch
              </p>
            </Reveal>
            <Reveal type="slide-up" delay={0.1}>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-light leading-[1.1] mb-8">
                Every project begins with a conversation
              </h1>
            </Reveal>
            <Reveal type="slide-up" delay={0.2}>
              <p className="font-[family-name:var(--font-body)] text-base leading-[1.8] mb-10" style={{ color: P.textBody }}>
                Whether you have a clear brief or simply the beginning of an idea, we welcome the opportunity to listen. Tell us about your space, your vision, and how you hope to feel within it.
              </p>
            </Reveal>
            <Reveal type="slide-up" delay={0.3}>
              <div className="space-y-6">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] mb-2" style={{ color: P.textMuted }}>Address</p>
                  <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed" style={{ color: P.textBody }}>
                    L\u00F6wenstrasse 42<br />8001 Z\u00FCrich, Switzerland
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] mb-2" style={{ color: P.textMuted }}>Email</p>
                  <p className="font-[family-name:var(--font-body)] text-sm" style={{ color: P.textBody }}>
                    hello@studioelan.ch
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] mb-2" style={{ color: P.textMuted }}>Phone</p>
                  <p className="font-[family-name:var(--font-body)] text-sm" style={{ color: P.textBody }}>
                    +41 44 512 30 80
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right \u2014 Form */}
          <div>
            <Reveal type="slide-up" delay={0.2}>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-8 pt-4 lg:pt-16">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] block mb-1" style={{ color: P.textMuted }}>
                      Name
                    </label>
                    <input type="text" placeholder="Your full name" style={inputStyle} className="placeholder:text-[#C5C0B8] focus:border-b-[#8B7355] transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] block mb-1" style={{ color: P.textMuted }}>
                      Email
                    </label>
                    <input type="email" placeholder="your@email.com" style={inputStyle} className="placeholder:text-[#C5C0B8] focus:border-b-[#8B7355] transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] block mb-1" style={{ color: P.textMuted }}>
                      Phone
                    </label>
                    <input type="tel" placeholder="+41 ..." style={inputStyle} className="placeholder:text-[#C5C0B8] focus:border-b-[#8B7355] transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] block mb-1" style={{ color: P.textMuted }}>
                      Project Type
                    </label>
                    <select
                      style={{ ...inputStyle, cursor: "pointer" }}
                      defaultValue=""
                      className="focus:border-b-[#8B7355] transition-colors"
                    >
                      <option value="" disabled>Select type</option>
                      {PROJECT_TYPES.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] block mb-1" style={{ color: P.textMuted }}>
                      Location
                    </label>
                    <input type="text" placeholder="City, Country" style={inputStyle} className="placeholder:text-[#C5C0B8] focus:border-b-[#8B7355] transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] block mb-1" style={{ color: P.textMuted }}>
                      Approximate Area
                    </label>
                    <input type="text" placeholder="e.g. 250 m\u00B2" style={inputStyle} className="placeholder:text-[#C5C0B8] focus:border-b-[#8B7355] transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] block mb-1" style={{ color: P.textMuted }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project and vision..."
                    style={{ ...inputStyle, resize: "vertical" }}
                    className="placeholder:text-[#C5C0B8] focus:border-b-[#8B7355] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-none px-10 py-4 text-xs tracking-widest uppercase font-[family-name:var(--font-body)] transition-all duration-300 hover:opacity-80 mt-4"
                  style={{ background: P.dark, color: "#fff", border: "none" }}
                >
                  Send Inquiry
                </button>

              </form>
            </Reveal>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
