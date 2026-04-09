"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import { DemoToast, useDemoToast } from "@/components/demos/demo-toast";
import { Phone, Mail, MessageCircle, MapPin, Car, Clock, AlertTriangle } from "lucide-react";

/* ─── palette ─── */
const C = {
  bg: "#0A1015",
  surface: "#111920",
  teal: "#0EA5E9",
  warmWhite: "#F8FAFC",
  muted: "#64748B",
  border: "#1E293B",
  gold: "#F59E0B",
} as const;

const FONT = "'Inter', system-ui, -apple-system, sans-serif";

/* ─── nav links ─── */
const NAV_LINKS = [
  { label: "Home", href: "/demos/dental" },
  { label: "Services", href: "/demos/dental/services" },
  { label: "Team", href: "/demos/dental/team" },
  { label: "Reviews", href: "/demos/dental/reviews" },
  { label: "FAQ", href: "/demos/dental/faq" },
  { label: "Contact", href: "/demos/dental/contact" },
];

/* ─── appointment types ─── */
const APPT_TYPES = [
  "Check-up",
  "Cosmetic Consultation (Free)",
  "Implant Consultation (Free)",
  "Emergency",
  "Other",
];

/* ─── time slots ─── */
const TIME_SLOTS = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
];

/* ─── input style ─── */
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  background: C.surface,
  border: `1px solid ${C.border}`,
  borderRadius: 8,
  color: C.warmWhite,
  fontFamily: FONT,
  fontSize: 14,
  outline: "none",
  transition: "border-color 0.3s",
  boxSizing: "border-box",
};

/* ─── label style ─── */
const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: FONT,
  fontSize: 13,
  fontWeight: 600,
  color: C.warmWhite,
  marginBottom: 8,
};

/* ═══════════════════════════════════════════
   NAV HEADER
   ═══════════════════════════════════════════ */
function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
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
          position: "fixed",
          top: 40,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "transparent",
          borderBottom: "none",
          transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
        }}
      >
        <Link href="/demos/dental" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: FONT, fontWeight: 800, fontSize: 20, color: C.warmWhite, letterSpacing: "-0.02em" }}>
            Dr. Vella <span style={{ color: C.teal }}>Dental</span>
          </span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 28 }} className="dental-desktop-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: FONT, fontSize: 13, fontWeight: 500,
                color: link.href === "/demos/dental/contact" ? C.warmWhite : C.muted,
                textDecoration: "none", transition: "color 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.warmWhite; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = link.href === "/demos/dental/contact" ? C.warmWhite : C.muted; }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="dental-mobile-hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column" as const, gap: 5, padding: 8 }}
        >
          <span style={{ width: 24, height: 1.5, background: C.warmWhite, display: "block" }} />
          <span style={{ width: 24, height: 1.5, background: C.warmWhite, display: "block" }} />
          <span style={{ width: 16, height: 1.5, background: C.teal, display: "block" }} />
        </button>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed", inset: 0, zIndex: 200, background: C.bg,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32,
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{ position: "absolute", top: 52, right: 24, background: "none", border: "none", color: C.warmWhite, fontSize: 28, cursor: "pointer" }}
            >
              &times;
            </button>
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
              >
                <Link href={link.href} onClick={() => setMobileOpen(false)} style={{ fontFamily: FONT, fontSize: 24, fontWeight: 600, color: C.warmWhite, textDecoration: "none" }}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .dental-desktop-nav{display:flex!important;}
        .dental-mobile-hamburger{display:none!important;}
        @media(max-width:899px){
          .dental-desktop-nav{display:none!important;}
          .dental-mobile-hamburger{display:flex!important;}
        }
      `}</style>
    </>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */
function SiteFooter() {
  return (
    <footer style={{ background: C.surface, borderTop: `1px solid ${C.border}`, padding: "56px 24px 36px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 40, marginBottom: 40 }}>
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 800, fontFamily: FONT, color: C.warmWhite, marginBottom: 12, letterSpacing: "-0.02em" }}>
            Dr. Vella <span style={{ color: C.teal }}>Dental</span>
          </h3>
          <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7, maxWidth: 250 }}>
            Modern dental care in a calm, welcoming environment. Your comfort is our priority.
          </p>
        </div>
        <div>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: C.teal, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Contact</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14, color: C.muted }}>
            <span>78 Tower Road, Sliema</span>
            <span>+356 2123 4567</span>
            <span>hello@drvella.mt</span>
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: C.teal, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Hours</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14, color: C.muted }}>
            <span>Mon - Fri: 08:00 - 17:00</span>
            <span>Saturday: 09:00 - 13:00</span>
            <span>Sunday: Closed</span>
            <span style={{ color: C.teal, fontWeight: 600, fontSize: 13 }}>Emergency line 24/7</span>
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: C.teal, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Quick Links</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
            {[
              { label: "Services", href: "/demos/dental/services" },
              { label: "Reviews", href: "/demos/dental/reviews" },
              { label: "FAQ", href: "/demos/dental/faq" },
              { label: "Impressum", href: "/demos/dental/impressum" },
            ].map((l) => (
              <Link key={l.label} href={l.href} style={{ color: C.muted, textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.warmWhite)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.muted)}
              >{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, fontSize: 13, color: C.muted, maxWidth: 1200, margin: "0 auto" }}>
        <span>&copy; 2026 Dr. Vella Dental. All rights reserved.</span>
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/demos/dental/impressum" style={{ color: C.muted, textDecoration: "none", transition: "color 0.3s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.teal)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.muted)}
          >Impressum</Link>
          <span style={{ cursor: "pointer" }}>Privacy</span>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function DentalContactPage() {
  const { toast, showToast } = useDemoToast();
  const [selectedType, setSelectedType] = useState("Check-up");
  const [visitedBefore, setVisitedBefore] = useState<"yes" | "no">("no");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    showToast();
  };

  return (
    <div style={{ background: C.bg, color: C.warmWhite, fontFamily: FONT, minHeight: "100vh", paddingTop: 10 }}>
      <DemoBanner />
      <SiteHeader />
      <DemoToast message={toast} />

      {/* ═══════ HERO ═══════ */}
      <section style={{ paddingTop: 160, paddingBottom: 60, textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center top, ${C.teal}08 0%, transparent 60%)` }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto", padding: "0 24px" }}>
          <Reveal type="fade" delay={0.1}>
            <p style={{ fontFamily: FONT, color: C.teal, letterSpacing: "0.25em", fontSize: 13, fontWeight: 600, textTransform: "uppercase" as const, marginBottom: 16 }}>
              BOOK
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.2}>
            <h1 style={{ fontFamily: FONT, fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.2, margin: 0 }}>
              Schedule Your Visit
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Hero Banner */}
      <section style={{ padding: "0 24px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <Reveal type="fade" delay={0.3}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "21 / 9", borderRadius: 20, overflow: "hidden", border: `1px solid ${C.border}` }}>
            <Image src="/images/dental/contact-hero.jpg" alt="" fill className="object-cover" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,16,21,0) 40%, rgba(10,16,21,0.7) 100%)" }} />
          </div>
        </Reveal>
      </section>

      {/* ═══════ SPLIT: FORM + INFO ═══════ */}
      <section style={{ padding: "20px 24px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="dental-contact-grid" style={{ display: "grid", gap: 48 }}>

          {/* ─── LEFT: FORM (55%) ─── */}
          <Reveal type="slide-left" delay={0.1}>
            <form onSubmit={handleSubmit} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, padding: "36px 32px" }}>

              {/* Appointment type radios */}
              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>Appointment Type</label>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {APPT_TYPES.map((type) => (
                    <label
                      key={type}
                      style={{
                        display: "flex", alignItems: "center", gap: 10, cursor: "pointer",
                        padding: "10px 14px", borderRadius: 8,
                        background: selectedType === type ? `${C.teal}10` : "transparent",
                        border: `1px solid ${selectedType === type ? `${C.teal}40` : "transparent"}`,
                        transition: "all 0.2s",
                      }}
                    >
                      <div style={{
                        width: 18, height: 18, borderRadius: "50%",
                        border: `2px solid ${selectedType === type ? C.teal : C.muted}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "border-color 0.2s",
                      }}>
                        {selectedType === type && (
                          <div style={{ width: 10, height: 10, borderRadius: "50%", background: C.teal }} />
                        )}
                      </div>
                      <span style={{ fontSize: 14, color: selectedType === type ? C.warmWhite : C.muted, fontWeight: selectedType === type ? 500 : 400, transition: "color 0.2s" }}>
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: C.border, margin: "24px 0" }} />

              {/* Name + Email */}
              <div className="dental-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input type="text" required placeholder="Your full name" style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = C.teal; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = C.border; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input type="email" required placeholder="your@email.com" style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = C.teal; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = C.border; }}
                  />
                </div>
              </div>

              {/* Phone */}
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Phone *</label>
                <input type="tel" required placeholder="+356 ..." style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = C.teal; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = C.border; }}
                />
              </div>

              {/* Date + Time */}
              <div className="dental-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>Preferred Date *</label>
                  <input type="date" required style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = C.teal; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = C.border; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Preferred Time *</label>
                  <select required style={{ ...inputStyle, cursor: "pointer", appearance: "none" as const, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = C.teal; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = C.border; }}
                  >
                    <option value="" style={{ background: C.surface, color: C.muted }}>Select a time</option>
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t} style={{ background: C.surface, color: C.warmWhite }}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Visited before? */}
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Visited before?</label>
                <div style={{ display: "flex", gap: 16 }}>
                  {(["yes", "no"] as const).map((val) => (
                    <label
                      key={val}
                      style={{
                        display: "flex", alignItems: "center", gap: 8, cursor: "pointer",
                        padding: "8px 16px", borderRadius: 8,
                        background: visitedBefore === val ? `${C.teal}10` : "transparent",
                        border: `1px solid ${visitedBefore === val ? `${C.teal}40` : C.border}`,
                        transition: "all 0.2s",
                      }}
                    >
                      <div style={{
                        width: 16, height: 16, borderRadius: "50%",
                        border: `2px solid ${visitedBefore === val ? C.teal : C.muted}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        {visitedBefore === val && (
                          <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.teal }} />
                        )}
                      </div>
                      <span style={{ fontSize: 14, color: visitedBefore === val ? C.warmWhite : C.muted, textTransform: "capitalize" }}>
                        {val}
                      </span>
                      <input
                        type="radio"
                        name="visitedBefore"
                        value={val}
                        checked={visitedBefore === val}
                        onChange={() => setVisitedBefore(val)}
                        style={{ display: "none" }}
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional notes */}
              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>Additional Notes</label>
                <textarea
                  rows={4}
                  placeholder="Any concerns, allergies, or special requirements..."
                  style={{ ...inputStyle, resize: "vertical" as const }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = C.teal; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = C.border; }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: "100%", padding: "16px 0",
                  background: C.teal, color: "#fff", border: "none", borderRadius: 12,
                  fontFamily: FONT, fontSize: 15, fontWeight: 700,
                  cursor: "pointer", transition: "opacity 0.25s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              >
                Request Appointment
              </button>
            </form>
          </Reveal>

          {/* ─── RIGHT: CONTACT INFO (45%) ─── */}
          <Reveal type="slide-right" delay={0.2}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

              {/* Phone (large) */}
              <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, padding: "28px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: `${C.teal}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Phone size={24} color={C.teal} />
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: C.muted, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>Call Us</p>
                    <p style={{ fontSize: 22, fontWeight: 700, color: C.teal, margin: 0, letterSpacing: "-0.01em" }}>+356 2123 4567</p>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { icon: Mail, label: "Email", value: "hello@drvella.mt" },
                    { icon: MessageCircle, label: "WhatsApp", value: "+356 7923 4567" },
                    { icon: MapPin, label: "Address", value: "78 Tower Road, Sliema" },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <item.icon size={18} color={C.teal} style={{ flexShrink: 0 }} />
                      <div>
                        <p style={{ fontSize: 11, color: C.muted, margin: 0, textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.label}</p>
                        <p style={{ fontSize: 14, color: C.warmWhite, margin: 0 }}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parking + Hours */}
              <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <Car size={18} color={C.teal} />
                  <span style={{ fontSize: 14, fontWeight: 600, color: C.warmWhite }}>Free parking available</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <Clock size={18} color={C.teal} style={{ flexShrink: 0, marginTop: 2 }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 14, color: C.muted }}>
                    <span>Mon - Fri: 08:00 - 17:00</span>
                    <span>Saturday: 09:00 - 13:00</span>
                    <span>Sunday: Closed</span>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  height: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <MapPin size={32} color={C.muted} strokeWidth={1.5} />
                <p style={{ fontSize: 14, color: C.muted, margin: 0 }}>Map placeholder</p>
                <p style={{ fontSize: 12, color: `${C.muted}80`, margin: 0 }}>78 Tower Road, Sliema</p>
              </div>

              {/* Emergency callout */}
              <div
                style={{
                  background: `${C.teal}08`,
                  borderLeft: `4px solid ${C.teal}`,
                  borderRadius: "0 12px 12px 0",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                }}
              >
                <AlertTriangle size={22} color={C.teal} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontSize: 16, fontWeight: 700, color: C.warmWhite, margin: "0 0 6px" }}>
                    Dental Emergency?
                  </p>
                  <p style={{ fontSize: 14, color: C.muted, margin: "0 0 4px", lineHeight: 1.6 }}>
                    Call us immediately at{" "}
                    <span style={{ color: C.teal, fontWeight: 600 }}>+356 2123 4567</span>
                  </p>
                  <p style={{ fontSize: 13, color: C.muted, margin: 0 }}>
                    Available 24/7 for emergencies
                  </p>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />

      <style>{`
        .dental-contact-grid {
          grid-template-columns: 55fr 45fr;
        }
        @media (max-width: 899px) {
          .dental-contact-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 639px) {
          .dental-form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
