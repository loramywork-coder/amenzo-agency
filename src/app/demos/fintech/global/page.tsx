"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import {
  Menu,
  X,
  MapPin,
  Users,
  Target,
  Building2,
  ShieldCheck,
  Globe,
} from "lucide-react";

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
const OFFICES = [
  {
    city: "Zurich",
    tag: "HQ",
    address: "Bahnhofstrasse 42, 8001 Zurich, Switzerland",
    team: 120,
    focus: "Global operations, treasury, compliance",
    color: P.accent,
  },
  {
    city: "London",
    tag: "EMEA",
    address: "One Canada Square, Canary Wharf, London E14 5AB",
    team: 65,
    focus: "Institutional sales, FX desk, partnerships",
    color: P.emerald,
  },
  {
    city: "New York",
    tag: "Americas",
    address: "55 Hudson Yards, Suite 4200, New York, NY 10001",
    team: 55,
    focus: "US market expansion, digital asset strategy",
    color: P.amber,
  },
  {
    city: "Singapore",
    tag: "APAC",
    address: "One Raffles Quay, North Tower, Level 35, 048583",
    team: 40,
    focus: "APAC corridors, emerging markets, stablecoin ops",
    color: P.rose,
  },
];

const PARTNERS = [
  "Deutsche Bank",
  "Barclays",
  "JPMorgan Chase",
  "DBS Bank",
  "UBS",
  "HSBC",
  "Standard Chartered",
  "BNP Paribas",
];

const LICENCES = [
  { jurisdiction: "Switzerland", body: "FINMA", licence: "FinTech Licence (Art. 1b BA)", color: P.accent },
  { jurisdiction: "United Kingdom", body: "FCA", licence: "Electronic Money Institution (EMI)", color: P.emerald },
  { jurisdiction: "Singapore", body: "MAS", licence: "Major Payment Institution (MPI)", color: P.amber },
  { jurisdiction: "United States", body: "FinCEN", licence: "Money Services Business (MSB)", color: P.rose },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function GlobalPage() {
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
              GLOBAL NETWORK
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6" style={{ letterSpacing: "-0.025em", lineHeight: 1.1 }}>
              Four offices,<br /><span style={{ color: P.accent }}>one platform</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: P.textSecondary, lineHeight: 1.7 }}>
              280+ specialists across three continents, connected by a unified technology stack and a shared mission to rebuild financial infrastructure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DECORATIVE NETWORK */}
      <section className="pb-16 px-6 md:px-10">
        <Reveal>
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden relative" style={{ background: P.surface, border: `1px solid ${P.border}`, height: 280 }}>
            {/* Abstract network visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="100%" height="100%" viewBox="0 0 800 280" fill="none" style={{ opacity: 0.6 }}>
                {/* Connection lines */}
                <line x1="160" y1="140" x2="360" y2="100" stroke={P.accent} strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                <line x1="360" y1="100" x2="520" y2="160" stroke={P.accent} strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                <line x1="520" y1="160" x2="680" y2="120" stroke={P.accent} strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                <line x1="160" y1="140" x2="520" y2="160" stroke={P.accent} strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
                <line x1="360" y1="100" x2="680" y2="120" stroke={P.accent} strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
                <line x1="160" y1="140" x2="680" y2="120" stroke={P.accent} strokeWidth="1" strokeDasharray="4 4" opacity="0.15" />
                {/* Nodes */}
                <circle cx="160" cy="140" r="6" fill={P.accent} />
                <circle cx="160" cy="140" r="14" stroke={P.accent} strokeWidth="1" opacity="0.3" />
                <circle cx="360" cy="100" r="8" fill={P.emerald} />
                <circle cx="360" cy="100" r="16" stroke={P.emerald} strokeWidth="1" opacity="0.3" />
                <circle cx="520" cy="160" r="7" fill={P.amber} />
                <circle cx="520" cy="160" r="14" stroke={P.amber} strokeWidth="1" opacity="0.3" />
                <circle cx="680" cy="120" r="5" fill={P.rose} />
                <circle cx="680" cy="120" r="12" stroke={P.rose} strokeWidth="1" opacity="0.3" />
                {/* Labels */}
                <text x="160" y="175" fill={P.textSecondary} fontSize="11" fontFamily="var(--font-mono)" textAnchor="middle">ZRH</text>
                <text x="360" y="80" fill={P.textSecondary} fontSize="11" fontFamily="var(--font-mono)" textAnchor="middle">LHR</text>
                <text x="520" y="195" fill={P.textSecondary} fontSize="11" fontFamily="var(--font-mono)" textAnchor="middle">JFK</text>
                <text x="680" y="155" fill={P.textSecondary} fontSize="11" fontFamily="var(--font-mono)" textAnchor="middle">SIN</text>
              </svg>
            </div>
            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-12 py-5" style={{ background: `linear-gradient(transparent, ${P.surface})` }}>
              {[
                { val: "4", lbl: "Offices" },
                { val: "280+", lbl: "Team members" },
                { val: "140+", lbl: "Corridors" },
                { val: "24/7", lbl: "Operations" },
              ].map((s) => (
                <div key={s.lbl} className="text-center">
                  <div className="text-lg font-bold" style={{ color: P.accent, fontFamily: "var(--font-mono)" }}>{s.val}</div>
                  <div className="text-[11px]" style={{ color: P.textMuted, fontFamily: "var(--font-mono)" }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* OFFICE CARDS */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center" style={{ letterSpacing: "-0.02em" }}>Our Offices</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {OFFICES.map((o, i) => (
              <Reveal key={o.city} delay={i * 0.1}>
                <div className="rounded-2xl p-8" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full" style={{ background: o.color }} />
                    <h3 className="text-xl font-semibold">{o.city}</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium" style={{ background: `${o.color}18`, color: o.color, fontFamily: "var(--font-mono)" }}>{o.tag}</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={14} color={P.textMuted} className="mt-0.5 flex-shrink-0" />
                      <span style={{ color: P.textSecondary, fontSize: 13 }}>{o.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users size={14} color={P.textMuted} />
                      <span style={{ color: P.textSecondary, fontSize: 13 }}>{o.team} team members</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target size={14} color={P.textMuted} className="mt-0.5 flex-shrink-0" />
                      <span style={{ color: P.textSecondary, fontSize: 13 }}>{o.focus}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BANKING PARTNERS */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-center" style={{ letterSpacing: "-0.02em" }}>Banking Partners</h2>
            <p className="text-center mb-10" style={{ color: P.textMuted, fontSize: 14 }}>Direct integrations with tier-one financial institutions worldwide.</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PARTNERS.map((p, i) => (
              <Reveal key={p} delay={i * 0.05}>
                <div className="rounded-xl py-6 px-4 text-center" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
                  <Building2 size={20} color={P.textMuted} className="mx-auto mb-3" />
                  <span style={{ color: P.textSecondary, fontSize: 13, fontFamily: "var(--font-body)", fontWeight: 500 }}>{p}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REGULATORY LICENCES */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-center" style={{ letterSpacing: "-0.02em" }}>Regulatory Licences</h2>
            <p className="text-center mb-10" style={{ color: P.textMuted, fontSize: 14 }}>Fully licensed and regulated across key jurisdictions.</p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {LICENCES.map((lic, i) => (
              <Reveal key={lic.body} delay={i * 0.08}>
                <div className="rounded-xl p-6 flex items-start gap-4" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${lic.color}15` }}>
                    <ShieldCheck size={18} color={lic.color} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-[15px]">{lic.body}</span>
                      <span className="text-[11px] px-2 py-0.5 rounded" style={{ background: P.surfaceAlt, color: P.textMuted, fontFamily: "var(--font-mono)" }}>{lic.jurisdiction}</span>
                    </div>
                    <p style={{ color: P.textSecondary, fontSize: 13 }}>{lic.licence}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
