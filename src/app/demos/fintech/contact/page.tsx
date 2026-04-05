"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Menu, X, Mail, MapPin, Phone } from "lucide-react";

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
const EMAILS = [
  { label: "Partnerships & Sales", email: "partnerships@meridian-capital.demo" },
  { label: "Press & Media", email: "press@meridian-capital.demo" },
  { label: "Careers", email: "careers@meridian-capital.demo" },
];

const OFFICES = [
  { city: "Zurich (HQ)", address: "Bahnhofstrasse 42, 8001 Zurich, Switzerland" },
  { city: "London", address: "One Canada Square, Canary Wharf, London E14 5AB, UK" },
  { city: "New York", address: "55 Hudson Yards, Suite 4200, New York, NY 10001, USA" },
  { city: "Singapore", address: "One Raffles Quay, North Tower, Level 35, 048583, Singapore" },
];

const ROLES = [
  "CEO / Founder",
  "CTO / VP Engineering",
  "CFO / Finance",
  "Head of Compliance",
  "Product Manager",
  "Software Engineer",
  "Other",
];

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", role: "", message: "" });

  const inputStyle: React.CSSProperties = {
    background: P.surfaceAlt,
    border: `1px solid ${P.border}`,
    borderRadius: 10,
    padding: "12px 16px",
    color: P.text,
    fontSize: 14,
    fontFamily: "var(--font-body)",
    outline: "none",
    width: "100%",
    transition: "border-color .2s",
  };

  return (
    <div style={{ background: P.bg, color: P.text, fontFamily: "var(--font-body)", minHeight: "100vh" }}>
      <DemoBanner />
      <Nav />

      {/* HERO */}
      <section className="pt-40 pb-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium mb-6"
              style={{ background: `${P.accent}18`, color: P.accentLight, fontFamily: "var(--font-mono)", letterSpacing: "0.06em", border: `1px solid ${P.accent}30` }}>
              CONTACT
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6" style={{ letterSpacing: "-0.025em", lineHeight: 1.1 }}>
              Get in <span style={{ color: P.accent }}>touch</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: P.textSecondary, lineHeight: 1.7 }}>
              Whether you&apos;re exploring a partnership, have a press inquiry, or want to join the team, we&apos;d love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* LEFT: FORM */}
            <Reveal className="lg:col-span-3">
              <div className="rounded-2xl p-8" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
                <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1.5 text-[12px]" style={{ color: P.textMuted, fontFamily: "var(--font-mono)" }}>Name</label>
                      <input type="text" placeholder="Your name" style={inputStyle}
                        value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={(e) => (e.target.style.borderColor = P.accent)} onBlur={(e) => (e.target.style.borderColor = P.border)} />
                    </div>
                    <div>
                      <label className="block mb-1.5 text-[12px]" style={{ color: P.textMuted, fontFamily: "var(--font-mono)" }}>Email</label>
                      <input type="email" placeholder="you@company.com" style={inputStyle}
                        value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={(e) => (e.target.style.borderColor = P.accent)} onBlur={(e) => (e.target.style.borderColor = P.border)} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1.5 text-[12px]" style={{ color: P.textMuted, fontFamily: "var(--font-mono)" }}>Company</label>
                      <input type="text" placeholder="Company name" style={inputStyle}
                        value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        onFocus={(e) => (e.target.style.borderColor = P.accent)} onBlur={(e) => (e.target.style.borderColor = P.border)} />
                    </div>
                    <div>
                      <label className="block mb-1.5 text-[12px]" style={{ color: P.textMuted, fontFamily: "var(--font-mono)" }}>Role</label>
                      <select style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                        value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        onFocus={(e) => (e.target.style.borderColor = P.accent)} onBlur={(e) => (e.target.style.borderColor = P.border)}>
                        <option value="" style={{ background: P.surfaceAlt }}>Select your role</option>
                        {ROLES.map((r) => (
                          <option key={r} value={r} style={{ background: P.surfaceAlt }}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1.5 text-[12px]" style={{ color: P.textMuted, fontFamily: "var(--font-mono)" }}>Message</label>
                    <textarea rows={5} placeholder="How can we help?" style={{ ...inputStyle, resize: "vertical" }}
                      value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = P.accent)} onBlur={(e) => (e.target.style.borderColor = P.border)} />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg font-medium text-[14px] transition-opacity hover:opacity-90"
                    style={{ background: P.accent, color: "#fff", cursor: "pointer", border: "none" }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </Reveal>

            {/* RIGHT: INFO */}
            <Reveal delay={0.15} className="lg:col-span-2">
              <div className="space-y-6">
                {/* Emails */}
                <div className="rounded-2xl p-6" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
                  <h3 className="text-[15px] font-semibold mb-4">Contact Emails</h3>
                  <div className="space-y-3">
                    {EMAILS.map((e) => (
                      <div key={e.email} className="flex items-start gap-3">
                        <Mail size={14} color={P.accent} className="mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="block text-[12px] mb-0.5" style={{ color: P.textMuted }}>{e.label}</span>
                          <span className="text-[13px]" style={{ color: P.textSecondary }}>{e.email}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Offices */}
                <div className="rounded-2xl p-6" style={{ background: P.surface, border: `1px solid ${P.border}` }}>
                  <h3 className="text-[15px] font-semibold mb-4">Our Offices</h3>
                  <div className="space-y-4">
                    {OFFICES.map((o) => (
                      <div key={o.city} className="flex items-start gap-3">
                        <MapPin size={14} color={P.accent} className="mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="block text-[13px] font-medium mb-0.5">{o.city}</span>
                          <span className="text-[12px]" style={{ color: P.textMuted }}>{o.address}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
