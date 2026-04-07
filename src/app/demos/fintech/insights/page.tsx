"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Menu, X, ArrowRight } from "lucide-react";

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
type Article = {
  tag: string;
  tagColor: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
};

const ARTICLES: Article[] = [
  {
    tag: "Research",
    tagColor: P.accent,
    date: "Mar 2027",
    title: "T+0 Settlement and the Future of Capital Markets",
    excerpt: "Our analysis of how real-time settlement will reshape counterparty risk, margin requirements, and the role of central clearing in the next decade.",
    category: "Research",
  },
  {
    tag: "News",
    tagColor: P.emerald,
    date: "Feb 2027",
    title: "Meridian Secures MAS Major Payment Institution Licence",
    excerpt: "Expanding our regulated footprint in Asia-Pacific with a Major Payment Institution licence from the Monetary Authority of Singapore.",
    category: "News",
  },
  {
    tag: "Blog",
    tagColor: P.amber,
    date: "Feb 2027",
    title: "Building Compliance-Native Infrastructure from Day One",
    excerpt: "How we embed regulatory logic directly into our payment rails rather than bolting it on as an afterthought.",
    category: "Blog",
  },
  {
    tag: "Research",
    tagColor: P.accent,
    date: "Jan 2027",
    title: "Cross-Border Payment Corridors: A Cost Analysis",
    excerpt: "Benchmarking transaction costs across 140 corridors reveals where multi-rail routing delivers the biggest savings.",
    category: "Research",
  },
  {
    tag: "News",
    tagColor: P.emerald,
    date: "Dec 2026",
    title: "Digital Asset Custody Surpasses $4B in AUC",
    excerpt: "A milestone for our institutional custody platform, now securing over $4.2 billion in digital assets for 120+ clients worldwide.",
    category: "News",
  },
  {
    tag: "Blog",
    tagColor: P.amber,
    date: "Nov 2026",
    title: "Why We Built a GraphQL-First API for Financial Services",
    excerpt: "The engineering decisions behind our developer platform and how GraphQL solves common integration pain points.",
    category: "Blog",
  },
];

const TABS = ["All", "Research", "News", "Blog"];

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === activeTab);

  return (
    <div className="light-theme" style={{ background: P.bg, color: P.text, fontFamily: "var(--font-body)", minHeight: "100vh" }}>
      <DemoBanner />
      <Nav />

      {/* HERO */}
      <section className="relative pt-48 pb-28 px-6 md:px-10 overflow-hidden">
        <div aria-hidden className="absolute inset-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2400&q=85')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,12,16,0.2) 0%, rgba(10,12,16,0.4) 55%, rgba(10,12,16,0.85) 100%)" }} />
        <div className="relative max-w-5xl mx-auto text-center" style={{ color: "#FFFFFF" }}>
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium mb-6"
              style={{ background: `${P.accent}18`, color: P.accentLight, fontFamily: "var(--font-mono)", letterSpacing: "0.06em", border: `1px solid ${P.accent}30` }}>
              INSIGHTS
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6" style={{ letterSpacing: "-0.025em", lineHeight: 1.1, color: "#FFFFFF", textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}>
              Research &<br /><span style={{ color: P.accent }}>perspectives</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.7, textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}>
              Deep dives into settlement, custody, compliance, and the technology reshaping global finance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="pb-6 px-6 md:px-10">
        <div className="max-w-5xl mx-auto flex gap-2 justify-center">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className="px-4 py-2 rounded-lg text-[13px] font-medium transition-colors"
              style={{
                background: activeTab === t ? P.accent : P.surfaceAlt,
                color: activeTab === t ? "#fff" : P.textMuted,
                border: `1px solid ${activeTab === t ? P.accent : P.border}`,
                fontFamily: "var(--font-body)",
                cursor: "pointer",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <div
                className="rounded-2xl p-6 h-full flex flex-col transition-all duration-300"
                style={{ background: P.surface, border: `1px solid ${P.border}` }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${P.accent}50`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = P.border)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium"
                    style={{ background: `${a.tagColor}18`, color: a.tagColor, fontFamily: "var(--font-mono)" }}>{a.tag}</span>
                  <span style={{ color: P.textMuted, fontSize: 12, fontFamily: "var(--font-mono)" }}>{a.date}</span>
                </div>
                <h3 className="text-[16px] font-semibold mb-3 leading-snug" style={{ letterSpacing: "-0.01em" }}>{a.title}</h3>
                <p className="flex-1 mb-4" style={{ color: P.textSecondary, fontSize: 13, lineHeight: 1.6 }}>{a.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-[13px] font-medium" style={{ color: P.accent }}>
                  Read <ArrowRight size={13} />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
