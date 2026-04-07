"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import {
  ArrowRightLeft,
  ShieldCheck,
  Zap,
  Landmark,
  FileCheck2,
  Code2,
  Menu,
  X,
  ArrowRight,
  Globe,
  ChevronRight,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   PALETTE
   ═══════════════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════════════════════ */
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
      <nav
        className="fixed top-10 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4"
        style={{ background: "transparent", borderBottom: "none" }}
      >
        <Link href="/demos/fintech" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="30" height="30" rx="8" stroke="#0F766E" strokeWidth="1.5" fill="none"/>
            <path d="M9 22V10l7 6 7-6v12" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          <span style={{ color: P.text, fontWeight: 600, fontSize: 15, fontFamily: "var(--font-body)", letterSpacing: "-0.01em" }}>
            Meridian Capital
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} style={{ color: P.textMuted, fontSize: 13, fontFamily: "var(--font-body)", textDecoration: "none", transition: "color .2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = P.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = P.textMuted)}>
              {l.label}
            </Link>
          ))}
          <Link href="/demos/fintech/contact"
            className="px-4 py-2 rounded-lg text-[13px] font-medium"
            style={{ background: P.accent, color: "#fff", fontFamily: "var(--font-body)", textDecoration: "none" }}>
            Contact
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} color={P.text} /> : <Menu size={20} color={P.text} />}
        </button>
      </nav>
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6" style={{ background: `${P.bg}f7` }}>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ color: P.text, fontSize: 22, fontFamily: "var(--font-body)", textDecoration: "none", fontWeight: 500 }}>
              {l.label}
            </Link>
          ))}
          <Link href="/demos/fintech/contact" onClick={() => setOpen(false)}
            className="px-6 py-3 rounded-lg mt-4"
            style={{ background: P.accent, color: "#fff", fontFamily: "var(--font-body)", fontSize: 16, textDecoration: "none" }}>
            Contact
          </Link>
        </div>
      )}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════ */
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
            <p style={{ color: P.textMuted, fontSize: 13, fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
              Global financial infrastructure for the digital economy.
            </p>
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
          <span style={{ color: P.textMuted, fontSize: 12, fontFamily: "var(--font-body)" }}>
            &copy; 2027 Meridian Capital AG. This is a design demo.
          </span>
          <span style={{ color: P.textMuted, fontSize: 12, fontFamily: "var(--font-mono)" }}>Zurich &middot; London &middot; New York &middot; Singapore</span>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════
   SERVICES DATA
   ═══════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    icon: ArrowRightLeft,
    title: "Cross-Border Payments",
    desc: "Move funds across 140+ corridors with transparent FX pricing and real-time tracking. Our multi-rail architecture routes each transaction through the optimal path for speed, cost, and compliance.",
    stat: "140+",
    statLabel: "payment corridors",
    useCases: ["Corporate treasury disbursements", "Marketplace seller payouts", "International payroll"],
  },
  {
    icon: ShieldCheck,
    title: "Digital Asset Custody",
    desc: "Institutional-grade cold and warm storage with multi-signature governance, insurance coverage, and SOC 2 Type II certification. Support for 80+ digital assets across major blockchains.",
    stat: "$4.2B",
    statLabel: "assets under custody",
    useCases: ["Fund administration", "Token treasury management", "Staking & yield"],
  },
  {
    icon: Zap,
    title: "Real-Time Settlement",
    desc: "Atomic settlement across fiat and digital asset rails, reducing counterparty risk and freeing up capital. Average settlement in under 90 seconds with full auditability.",
    stat: "<90s",
    statLabel: "average settlement",
    useCases: ["OTC desk settlement", "Exchange liquidity provision", "DVP for tokenised securities"],
  },
  {
    icon: Landmark,
    title: "Treasury Management",
    desc: "Unified dashboard for multi-currency cash positions, automated sweeping, and liquidity forecasting. Integrate with your ERP and banking partners through a single API.",
    stat: "24/7",
    statLabel: "real-time visibility",
    useCases: ["Cash pooling & concentration", "FX hedging automation", "Working capital optimisation"],
  },
  {
    icon: FileCheck2,
    title: "Compliance & KYC",
    desc: "End-to-end identity verification, transaction monitoring, and regulatory reporting. Stay ahead of evolving AML/CFT requirements across jurisdictions with ML-powered risk scoring.",
    stat: "99.7%",
    statLabel: "screening accuracy",
    useCases: ["Client onboarding", "Ongoing due diligence", "Sanctions screening"],
  },
  {
    icon: Code2,
    title: "API & Developer Platform",
    desc: "RESTful and GraphQL APIs with comprehensive SDKs, webhooks, and sandbox environments. Go from integration to production in days, not months.",
    stat: "99.99%",
    statLabel: "API uptime SLA",
    useCases: ["Embedded finance", "White-label payment flows", "Custom reporting pipelines"],
  },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function ServicesPage() {
  return (
    <div className="light-theme" style={{ background: P.bg, color: P.text, fontFamily: "var(--font-body)", minHeight: "100vh" }}>
      <DemoBanner />
      <Nav />

      {/* HERO */}
      <section className="relative pt-48 pb-28 px-6 md:px-10 overflow-hidden">
        <div aria-hidden className="absolute inset-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=2400&q=85')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,12,16,0.2) 0%, rgba(10,12,16,0.4) 55%, rgba(10,12,16,0.85) 100%)" }} />
        <div className="relative max-w-5xl mx-auto text-center" style={{ color: "#FFFFFF" }}>
          <Reveal>
            <span
              className="inline-block px-3 py-1 rounded-full text-[11px] font-medium mb-6"
              style={{ background: `${P.accent}18`, color: P.accentLight, fontFamily: "var(--font-mono)", letterSpacing: "0.06em", border: `1px solid ${P.accent}30` }}
            >
              PLATFORM
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6" style={{ letterSpacing: "-0.025em", lineHeight: 1.1, color: "#FFFFFF", textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}>
              Financial infrastructure,<br />
              <span style={{ color: P.accent }}>built for scale</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.7, textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}>
              Six core services powering the world&apos;s most ambitious financial institutions. Every component is API-first, compliance-native, and designed for 24/7 operation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <div
                  className="rounded-2xl p-8 md:p-10 transition-all duration-300"
                  style={{ background: P.surface, border: `1px solid ${P.border}` }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${P.accent}50`)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = P.border)}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Left */}
                    <div className="md:w-2/3">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${P.accent}15` }}>
                          <Icon size={20} color={P.accent} />
                        </div>
                        <h2 className="text-xl md:text-2xl font-semibold" style={{ letterSpacing: "-0.01em" }}>{s.title}</h2>
                      </div>
                      <p className="mb-6" style={{ color: P.textSecondary, fontSize: 15, lineHeight: 1.7 }}>{s.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {s.useCases.map((uc) => (
                          <span key={uc} className="px-3 py-1.5 rounded-lg text-[12px]"
                            style={{ background: P.surfaceAlt, color: P.textMuted, fontFamily: "var(--font-mono)" }}>
                            {uc}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Right - Stat */}
                    <div className="md:w-1/3 flex flex-col items-center justify-center text-center md:border-l md:pl-8" style={{ borderColor: P.border }}>
                      <span className="text-4xl md:text-5xl font-bold" style={{ color: P.accent, fontFamily: "var(--font-mono)", letterSpacing: "-0.02em" }}>
                        {s.stat}
                      </span>
                      <span className="mt-2 text-[13px]" style={{ color: P.textMuted, fontFamily: "var(--font-mono)" }}>{s.statLabel}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6 md:px-10">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center rounded-2xl py-16 px-8" style={{ background: `linear-gradient(135deg, ${P.accent}12, ${P.surface})`, border: `1px solid ${P.accent}25` }}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ letterSpacing: "-0.02em" }}>
              Ready to build on Meridian?
            </h2>
            <p className="mb-8" style={{ color: P.textSecondary, fontSize: 15 }}>
              Talk to our solutions team or explore the developer documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demos/fintech/contact" className="px-6 py-3 rounded-lg font-medium text-[14px]"
                style={{ background: P.accent, color: "#fff", textDecoration: "none" }}>
                Contact Sales <ArrowRight size={14} className="inline ml-1" />
              </Link>
              <Link href="/demos/fintech/services" className="px-6 py-3 rounded-lg font-medium text-[14px]"
                style={{ background: P.surfaceAlt, color: P.text, textDecoration: "none", border: `1px solid ${P.border}` }}>
                API Documentation
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
