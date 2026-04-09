"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { DemoBanner } from "@/components/demos/demo-banner";

/* ── palette ── */
const C = {
  bg: "#080808",
  surface: "#111111",
  green: "#22C55E",
  white: "#FFFFFF",
  muted: "#71717A",
  border: "#27272A",
} as const;

const fontBody = "Inter, system-ui, sans-serif";

/* ── nav links ── */
const NAV_LINKS = [
  { label: "Home", href: "/demos/fitness" },
  { label: "Schedule", href: "/demos/fitness/schedule" },
  { label: "Gallery", href: "/demos/fitness/gallery" },
  { label: "Membership", href: "/demos/fitness/membership" },
  { label: "Contact", href: "/demos/fitness/contact" },
];

/* ── form types ── */
const ENQUIRY_TYPES = ["Free Trial", "Join", "Book PT", "General"];
const REFERRAL_OPTIONS = ["Google", "Instagram", "Facebook", "Friend / Referral", "Walk-by", "Other"];

interface FormData {
  enquiry: string;
  name: string;
  email: string;
  phone: string;
  referral: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  enquiry: "Free Trial",
  name: "",
  email: "",
  phone: "",
  referral: "",
  message: "",
};

/* ── nav header ── */
function NavHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed", top: 40, left: 0, right: 0, zIndex: 50, height: 60,
          display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px",
          background: "transparent",
          borderBottom: "none",
          transition: "background 0.4s",
        }}
      >
        <Link href="/demos/fitness" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: fontBody, fontWeight: 700, fontSize: 18, color: C.white, letterSpacing: "0.15em" }}>FITZONE</span>
        </Link>
        <nav className="fz-desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href}
              style={{
                fontFamily: fontBody, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
                color: link.href === "/demos/fitness/contact" ? C.white : C.muted,
                textDecoration: "none", transition: "color 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.white; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = link.href === "/demos/fitness/contact" ? C.white : C.muted; }}
            >{link.label}</Link>
          ))}
        </nav>
        <button className="fz-mobile-hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5, padding: 8 }}>
          <span style={{ width: 22, height: 2, background: C.white, display: "block" }} />
          <span style={{ width: 22, height: 2, background: C.white, display: "block" }} />
          <span style={{ width: 14, height: 2, background: C.green, display: "block" }} />
        </button>
      </header>

      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, background: C.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28 }}>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu" style={{ position: "absolute", top: 52, right: 24, background: "none", border: "none", color: C.white, fontSize: 28, cursor: "pointer" }}>&times;</button>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} style={{ fontFamily: fontBody, fontSize: 24, fontWeight: 600, color: C.white, textDecoration: "none" }}>{link.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        .fz-desktop-nav{display:flex!important;}
        .fz-mobile-hamburger{display:none!important;}
        @media(max-width:799px){
          .fz-desktop-nav{display:none!important;}
          .fz-mobile-hamburger{display:flex!important;}
        }
      `}</style>
    </>
  );
}

/* ━━━ PAGE ━━━ */
export default function ContactPage() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({});

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const required: (keyof FormData)[] = ["name", "email"];
    const newErrors: Partial<Record<keyof FormData, boolean>> = {};
    let hasError = false;
    for (const field of required) {
      if (!form[field].trim()) {
        newErrors[field] = true;
        hasError = true;
      }
    }
    if (hasError) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm(INITIAL_FORM);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    background: C.surface,
    border: `1px solid ${C.border}`,
    color: C.white,
    fontFamily: fontBody,
    fontSize: 14,
    borderRadius: 8,
    outline: "none",
    transition: "border-color 0.25s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 11,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: C.muted,
    marginBottom: 6,
  };

  return (
    <div style={{ background: C.bg, color: C.white, fontFamily: fontBody, minHeight: "100vh", paddingTop: 40 }}>
      <DemoBanner />
      <NavHeader />

      {/* ════════ TOAST ════════ */}
      {submitted && (
        <div style={{
          position: "fixed", top: 120, left: "50%", transform: "translateX(-50%)", zIndex: 100,
          background: C.green, color: "#000", fontSize: 14, fontWeight: 600, padding: "12px 28px",
          borderRadius: 8, boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}>
          Thanks! We&apos;ll be in touch shortly.
        </div>
      )}

      {/* ════════ HERO ════════ */}
      <section style={{ paddingTop: 140, paddingBottom: 60, textAlign: "center" }}>
        <p style={{ fontSize: 12, letterSpacing: "0.35em", textTransform: "uppercase", color: C.green, marginBottom: 16 }}>CONTACT</p>
        <h1 style={{ fontSize: 36, fontWeight: 700, margin: 0 }}>Get in Touch</h1>
      </section>

      {/* Hero Banner */}
      <section style={{ padding: "0 24px 48px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "21 / 9", overflow: "hidden", border: "2px solid #22C55E" }}>
          <Image src="/images/fitness/contact-hero.jpg" alt="" fill priority className="object-cover" />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,8,8,0) 40%, rgba(8,8,8,0.8) 100%)" }} />
        </div>
      </section>


      {/* ════════ SPLIT LAYOUT ════════ */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 100px" }}>
        <style>{`
          .fz-contact-grid{display:grid;grid-template-columns:1fr;gap:60px;}
          @media(min-width:768px){.fz-contact-grid{grid-template-columns:55fr 45fr;gap:80px;}}
          .fz-contact-input::placeholder{color:rgba(255,255,255,0.2);}
          .fz-contact-input:focus{border-color:${C.green} !important;}
        `}</style>
        <div className="fz-contact-grid">
          {/* ── LEFT: FORM ── */}
          <form onSubmit={handleSubmit}>
            {/* Enquiry type radios */}
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>I&apos;m interested in</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {ENQUIRY_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => update("enquiry", type)}
                    style={{
                      padding: "8px 18px",
                      borderRadius: 9999,
                      border: `1px solid ${form.enquiry === type ? C.green : C.border}`,
                      background: form.enquiry === type ? `${C.green}15` : "transparent",
                      color: form.enquiry === type ? C.green : C.muted,
                      fontSize: 13,
                      fontFamily: fontBody,
                      cursor: "pointer",
                      transition: "all 0.25s",
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Name *</label>
              <input
                className="fz-contact-input"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                style={{ ...inputStyle, borderColor: errors.name ? C.green : C.border }}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Email *</label>
              <input
                className="fz-contact-input"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                style={{ ...inputStyle, borderColor: errors.email ? C.green : C.border }}
              />
            </div>

            {/* Phone */}
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Phone</label>
              <input
                className="fz-contact-input"
                type="tel"
                placeholder="+356 ..."
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                style={inputStyle}
              />
            </div>

            {/* How did you hear? */}
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>How did you hear about us?</label>
              <select
                className="fz-contact-input"
                value={form.referral}
                onChange={(e) => update("referral", e.target.value)}
                style={{ ...inputStyle, appearance: "none" as const, cursor: "pointer" }}
              >
                <option value="" style={{ background: C.surface }}>Select...</option>
                {REFERRAL_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} style={{ background: C.surface }}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>Message</label>
              <textarea
                className="fz-contact-input"
                rows={4}
                placeholder="Tell us more..."
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                style={{ ...inputStyle, resize: "vertical" as const }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: 9999,
                border: "none",
                background: C.green,
                color: "#000",
                fontSize: 15,
                fontWeight: 700,
                fontFamily: fontBody,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "opacity 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.9"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >
              Let&apos;s Go
            </button>
          </form>

          {/* ── RIGHT: CONTACT INFO ── */}
          <div>
            {/* Phone */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted, margin: "0 0 4px" }}>Phone</p>
              <a href="tel:+35621234567" style={{ fontSize: 18, color: C.green, textDecoration: "none", fontWeight: 600 }}>+356 2123 4567</a>
            </div>

            {/* Email */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted, margin: "0 0 4px" }}>Email</p>
              <a href="mailto:hello@fitzone.com" style={{ fontSize: 16, color: C.green, textDecoration: "none" }}>hello@fitzone.com</a>
            </div>

            {/* WhatsApp */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted, margin: "0 0 4px" }}>WhatsApp</p>
              <a href="https://wa.me/35679123456" target="_blank" rel="noopener noreferrer" style={{ fontSize: 16, color: C.green, textDecoration: "none" }}>+356 7912 3456</a>
            </div>

            {/* Address */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted, margin: "0 0 4px" }}>Address</p>
              <p style={{ fontSize: 16, color: C.white, lineHeight: 1.7, margin: 0 }}>
                23 Harbour Street<br />Downtown
              </p>
            </div>

            {/* Hours */}
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted, margin: "0 0 4px" }}>Opening Hours</p>
              <p style={{ fontSize: 14, color: C.green, lineHeight: 1.8, margin: 0 }}>
                Monday &ndash; Friday: 5:00 AM &ndash; 11:00 PM<br />
                Saturday: 6:00 AM &ndash; 10:00 PM<br />
                Sunday: 7:00 AM &ndash; 9:00 PM
              </p>
            </div>

            {/* Free trial callout */}
            <div style={{
              background: `${C.green}10`,
              border: `1px solid ${C.green}30`,
              borderRadius: 12,
              padding: "20px 24px",
              marginBottom: 28,
            }}>
              <p style={{ fontSize: 16, fontWeight: 700, color: C.green, margin: "0 0 4px" }}>First Week Free</p>
              <p style={{ fontSize: 13, color: C.muted, margin: 0, lineHeight: 1.6 }}>
                No commitment, no card required. Just walk in and start training.
              </p>
            </div>

            {/* Map placeholder */}
            <div
              style={{
                width: "100%",
                aspectRatio: "16/10",
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.green} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted }}>
                23 Harbour Street, Downtown
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: "48px 24px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, textAlign: "center" }}>
          <span style={{ fontWeight: 700, fontSize: 14, color: C.white, letterSpacing: "0.2em" }}>FITZONE</span>
          <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.8 }}>
            <span>23 Harbour Street, Downtown</span><br />
            <span>Daily 5:00 AM &ndash; 11:00 PM</span><br />
            <span>hello@fitzone.com</span>
          </div>
          <div style={{ display: "flex", gap: 20, marginTop: 8 }}>
            {["Privacy", "Impressum"].map((t) => (
              <Link key={t} href={`/demos/fitness/${t.toLowerCase()}`}
                style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", textDecoration: "none", transition: "color 0.25s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.white; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.25)"; }}
              >{t}</Link>
            ))}
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
              Site by <a href="https://amenzo.co" target="_blank" rel="noopener noreferrer" style={{ color: C.green, textDecoration: "none" }}>Amenzo</a>
            </span>
          </div>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>&copy; 2026 FitZone</span>
        </div>
      </footer>
    </div>
  );
}
