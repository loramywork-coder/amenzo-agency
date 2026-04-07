"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import {
  Menu,
  X,
  ArrowRight,
  TrendingUp,
  Plane,
  Heart,
  BookOpen,
  MapPin,
  Clock,
  Building2,
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
const BENEFITS = [
  { icon: TrendingUp, title: "Equity Package", desc: "Meaningful equity in every offer. We want everyone to share in the upside as we scale.", color: P.accent },
  { icon: Plane, title: "30 Days PTO", desc: "Generous paid time off plus public holidays in your local jurisdiction. We trust you to manage your time.", color: P.emerald },
  { icon: Heart, title: "Health & Wellness", desc: "Premium health, dental, and vision coverage for you and your dependents in every office location.", color: P.rose },
  { icon: BookOpen, title: "Conference Budget", desc: "CHF 5,000 annual budget for conferences, courses, and certifications. Invest in your growth.", color: P.amber },
];

const POSITIONS = [
  { title: "Senior Backend Engineer", location: "Zurich", type: "Full-time", dept: "Engineering" },
  { title: "Staff Platform Engineer", location: "Zurich", type: "Full-time", dept: "Engineering" },
  { title: "Product Manager, Payments", location: "London", type: "Full-time", dept: "Product" },
  { title: "Compliance Analyst", location: "London", type: "Full-time", dept: "Compliance" },
  { title: "Solutions Architect", location: "New York", type: "Full-time", dept: "Engineering" },
  { title: "Senior Account Executive", location: "New York", type: "Full-time", dept: "Sales" },
  { title: "Frontend Engineer", location: "Singapore", type: "Full-time", dept: "Engineering" },
  { title: "DevOps Engineer", location: "Singapore", type: "Full-time", dept: "Engineering" },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function CareersPage() {
  return (
    <div className="light-theme" style={{ background: P.bg, color: P.text, fontFamily: "var(--font-body)", minHeight: "100vh" }}>
      <DemoBanner />
      <Nav />

      {/* HERO */}
      <section className="relative pt-48 pb-28 px-6 md:px-10 overflow-hidden">
        <div aria-hidden className="absolute inset-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,12,16,0.2) 0%, rgba(10,12,16,0.4) 55%, rgba(10,12,16,0.85) 100%)" }} />
        <div className="relative max-w-5xl mx-auto text-center" style={{ color: "#FFFFFF" }}>
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium mb-6"
              style={{ background: `${P.accent}18`, color: P.accentLight, fontFamily: "var(--font-mono)", letterSpacing: "0.06em", border: `1px solid ${P.accent}30` }}>
              CAREERS
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6" style={{ letterSpacing: "-0.025em", lineHeight: 1.1, color: "#FFFFFF", textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}>
              Join <span style={{ color: P.accent }}>280+ people</span><br />rebuilding finance
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.7, textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}>
              We&apos;re hiring across engineering, product, compliance, and sales in Zurich, London, New York, and Singapore.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center" style={{ letterSpacing: "-0.02em" }}>Why Meridian</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={i * 0.1}>
                  <div className="rounded-2xl p-6 h-full" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${b.color}15` }}>
                      <Icon size={20} color={b.color} />
                    </div>
                    <h3 className="text-[15px] font-semibold mb-2">{b.title}</h3>
                    <p style={{ color: P.textSecondary, fontSize: 13, lineHeight: 1.6 }}>{b.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-center" style={{ letterSpacing: "-0.02em" }}>Open Positions</h2>
            <p className="text-center mb-10" style={{ color: P.textMuted, fontSize: 14 }}>{POSITIONS.length} roles across {4} offices</p>
          </Reveal>
          <div className="space-y-3">
            {POSITIONS.map((p, i) => (
              <Reveal key={`${p.title}-${p.location}`} delay={i * 0.06}>
                <div
                  className="rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 cursor-pointer"
                  style={{ background: P.surface, border: `1px solid ${P.border}` }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${P.accent}50`)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = P.border)}
                >
                  <div>
                    <h3 className="text-[15px] font-semibold mb-1.5">{p.title}</h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex items-center gap-1.5 text-[12px]" style={{ color: P.textMuted }}>
                        <MapPin size={12} /> {p.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-[12px]" style={{ color: P.textMuted }}>
                        <Clock size={12} /> {p.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-[12px]" style={{ color: P.textMuted }}>
                        <Building2 size={12} /> {p.dept}
                      </span>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-[13px] font-medium flex-shrink-0" style={{ color: P.accent }}>
                    Apply <ArrowRight size={14} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6 md:px-10">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center rounded-2xl py-14 px-8" style={{ background: `linear-gradient(135deg, ${P.accent}12, ${P.surface})`, border: `1px solid ${P.accent}25` }}>
            <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ letterSpacing: "-0.01em" }}>
              Don&apos;t see your role?
            </h2>
            <p className="mb-6" style={{ color: P.textSecondary, fontSize: 14 }}>
              We&apos;re always interested in exceptional people. Send us your CV and we&apos;ll be in touch.
            </p>
            <Link href="/demos/fintech/contact" className="inline-block px-6 py-3 rounded-lg font-medium text-[14px]"
              style={{ background: P.accent, color: "#fff", textDecoration: "none" }}>
              Get in Touch <ArrowRight size={14} className="inline ml-1" />
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
