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
   DATA
   ═══════════════════════════════════════════════════════════ */
function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
      <span style={{ color, fontSize: 18, fontWeight: 700, fontFamily: "var(--font-mono)" }}>{initials}</span>
    </div>
  );
}

const CSUITE = [
  {
    initials: "LM",
    name: "Lukas Meier",
    role: "Chief Executive Officer",
    bio: "Co-founder. Former Head of Digital Strategy at UBS. 15 years in banking technology. Led Meridian from a 3-person Zurich startup to a global team of 280+.",
    color: P.accent,
  },
  {
    initials: "SH",
    name: "Sophie Hartmann",
    role: "Chief Technology Officer",
    bio: "Co-founder. Ex-Credit Suisse principal engineer. Architected Meridian's real-time settlement engine and multi-rail payment platform from the ground up.",
    color: P.emerald,
  },
  {
    initials: "JC",
    name: "James Chen",
    role: "Chief Financial Officer",
    bio: "Previously CFO at a Series D fintech in London. Led Meridian's Series B and C rounds. Oversees treasury operations, financial planning, and investor relations.",
    color: P.amber,
  },
  {
    initials: "AN",
    name: "Anika Nair",
    role: "Chief Compliance Officer",
    bio: "Former VP of Financial Crime at Barclays. Built Meridian's multi-jurisdictional compliance framework spanning FINMA, FCA, MAS, and FinCEN requirements.",
    color: P.rose,
  },
];

const VPS = [
  { initials: "DK", name: "Daniel Kim", role: "VP Engineering", bio: "Leads 80+ engineers. Previously at Stripe and Square. Owns platform reliability and the developer experience.", color: P.accent },
  { initials: "ER", name: "Elena Rodriguez", role: "VP Product", bio: "Drives product strategy across all six service lines. Previously led payments product at Revolut.", color: P.emerald },
  { initials: "TW", name: "Thomas Weber", role: "VP Sales, EMEA", bio: "Manages institutional relationships across Europe and Middle East. 12 years in banking sales at Deutsche Bank.", color: P.amber },
  { initials: "ML", name: "Ming Li", role: "VP Sales, APAC", bio: "Leads the Singapore office and APAC expansion. Previously regional director at a global custody provider.", color: P.rose },
];

const BOARD = [
  { initials: "PZ", name: "Dr. Peter Zeller", role: "Board Chair", bio: "Former CEO of a Swiss private bank. Chairs the board and leads governance and audit committees.", color: P.accent },
  { initials: "RB", name: "Rebecca Barnes", role: "Board Member", bio: "General partner at Lakestar. Led the Series A investment. Brings deep European fintech ecosystem expertise.", color: P.emerald },
  { initials: "HT", name: "Hiroshi Tanaka", role: "Board Member", bio: "Former Managing Director at SoftBank Vision Fund. Advises on growth strategy and APAC market entry.", color: P.amber },
];

const ADVISORS = [
  { initials: "CF", name: "Prof. Clara Fischer", role: "Regulatory Advisor", bio: "Professor of Financial Regulation at ETH Zurich. Advises on Swiss and EU regulatory developments.", color: P.accent },
  { initials: "MO", name: "Michael O'Brien", role: "Technology Advisor", bio: "Former CTO of Coinbase. Advises on digital asset infrastructure, custody architecture, and blockchain strategy.", color: P.emerald },
  { initials: "SK", name: "Samira Khan", role: "Strategy Advisor", bio: "Former McKinsey partner, financial services practice. Advises on corporate strategy and M&A opportunities.", color: P.amber },
];

function PersonCard({ initials, name, role, bio, color }: { initials: string; name: string; role: string; bio: string; color: string }) {
  return (
    <div className="rounded-2xl p-6" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
      <Avatar initials={initials} color={color} />
      <h3 className="text-[16px] font-semibold mb-1">{name}</h3>
      <span className="text-[12px] block mb-3" style={{ color, fontFamily: "var(--font-mono)" }}>{role}</span>
      <p style={{ color: P.textSecondary, fontSize: 13, lineHeight: 1.6 }}>{bio}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function TeamPage() {
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
              LEADERSHIP
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6" style={{ letterSpacing: "-0.025em", lineHeight: 1.1 }}>
              The team behind<br /><span style={{ color: P.accent }}>Meridian</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: P.textSecondary, lineHeight: 1.7 }}>
              Banking veterans, infrastructure engineers, and regulatory experts building the next generation of financial infrastructure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* C-SUITE */}
      <section className="pb-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-xl font-semibold mb-8" style={{ color: P.textSecondary, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>Executive Team</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {CSUITE.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <PersonCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VPs */}
      <section className="pb-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-xl font-semibold mb-8" style={{ color: P.textSecondary, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>Vice Presidents</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VPS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <PersonCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOARD */}
      <section className="pb-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-xl font-semibold mb-8" style={{ color: P.textSecondary, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>Board of Directors</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {BOARD.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <PersonCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ADVISORS */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-xl font-semibold mb-8" style={{ color: P.textSecondary, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>Advisors</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {ADVISORS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <PersonCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
