"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/demos/Reveal";
import MagneticButton from "@/components/demos/MagneticButton";
import { DemoBanner } from "@/components/demos/demo-banner";

/* ─── palette ─── */
const C = {
  bg: "#0C1220",
  surface: "#141E30",
  gold: "#C9A96E",
  cream: "#F5F0E8",
  muted: "#8A9AB5",
  border: "#1E2D45",
} as const;

const fontDisplay = "'Cormorant Garamond', Georgia, serif";
const fontBody = "Inter, system-ui, sans-serif";

/* ─── nav links ─── */
const NAV_LINKS = [
  { label: "Rooms", href: "/demos/hotel" },
  { label: "Events", href: "/demos/hotel/events" },
  { label: "Contact", href: "/demos/hotel/contact" },
];

/* ─── room options ─── */
const ROOM_TYPES = [
  "Classic",
  "Deluxe",
  "Junior Suite",
  "Grand Harbour Suite",
  "Presidential",
];

/* ─── input style ─── */
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  background: C.surface,
  border: `1px solid ${C.border}`,
  borderRadius: 4,
  color: C.cream,
  fontFamily: fontBody,
  fontSize: 14,
  outline: "none",
  transition: "border-color 0.3s",
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
          background: scrolled ? "rgba(12,18,32,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
          transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
        }}
      >
        <Link href="/demos/hotel" style={{ textDecoration: "none" }}>
          <div style={{ lineHeight: 1.1 }}>
            <span style={{ display: "block", fontFamily: fontDisplay, fontWeight: 400, fontSize: 22, color: C.cream }}>Grand Harbour</span>
            <span style={{ display: "block", fontFamily: fontDisplay, fontWeight: 300, fontSize: 12, color: C.gold, letterSpacing: "0.12em" }}>Hotel &amp; Spa</span>
          </div>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hotel-desktop-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: fontBody, fontSize: 11, letterSpacing: "0.18em",
                textTransform: "uppercase" as const, color: link.href === "/demos/hotel/contact" ? C.cream : "rgba(245,240,232,0.6)",
                textDecoration: "none", transition: "color 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.cream; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = link.href === "/demos/hotel/contact" ? C.cream : "rgba(245,240,232,0.6)"; }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/demos/hotel/contact"
            style={{
              fontFamily: fontBody, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
              textTransform: "uppercase" as const, padding: "10px 22px", background: C.gold,
              color: C.bg, textDecoration: "none", transition: "opacity 0.25s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          >
            Book Your Stay
          </Link>
        </nav>

        <button
          className="hotel-mobile-hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column" as const, gap: 5, padding: 8 }}
        >
          <span style={{ width: 24, height: 1.5, background: C.cream, display: "block" }} />
          <span style={{ width: 24, height: 1.5, background: C.cream, display: "block" }} />
          <span style={{ width: 16, height: 1.5, background: C.gold, display: "block" }} />
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
              style={{ position: "absolute", top: 52, right: 24, background: "none", border: "none", color: C.cream, fontSize: 28, cursor: "pointer" }}
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
                <Link href={link.href} onClick={() => setMobileOpen(false)} style={{ fontFamily: fontDisplay, fontSize: 32, color: C.cream, textDecoration: "none" }}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
            >
              <Link
                href="/demos/hotel/contact"
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: fontBody, fontSize: 14, fontWeight: 600, letterSpacing: "0.1em",
                  textTransform: "uppercase" as const, padding: "14px 36px", background: C.gold,
                  color: C.bg, textDecoration: "none", display: "inline-block", marginTop: 16,
                }}
              >
                Book Your Stay
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .hotel-desktop-nav{display:flex!important;}
        .hotel-mobile-hamburger{display:none!important;}
        @media(max-width:899px){
          .hotel-desktop-nav{display:none!important;}
          .hotel-mobile-hamburger{display:flex!important;}
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
    <footer style={{ background: C.bg, borderTop: `1px solid rgba(201,169,110,0.12)`, padding: "64px 24px 48px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 40 }}>
        <div>
          <h4 style={{ fontFamily: fontDisplay, fontSize: 24, fontWeight: 400, color: C.cream, marginBottom: 16 }}>Grand Harbour</h4>
          <p style={{ color: C.muted, fontSize: 13, lineHeight: 1.8 }}>Valletta Waterfront<br />VLT 1971<br />Malta</p>
        </div>
        <div>
          <h5 style={{ fontFamily: fontBody, fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: C.gold, marginBottom: 16 }}>Quick Links</h5>
          {[
            { label: "Rooms & Suites", href: "/demos/hotel" },
            { label: "Events", href: "/demos/hotel/events" },
            { label: "Contact", href: "/demos/hotel/contact" },
          ].map((link) => (
            <Link key={link.label} href={link.href} style={{ display: "block", color: C.muted, fontSize: 13, marginBottom: 10, textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.cream)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.muted)}
            >{link.label}</Link>
          ))}
        </div>
        <div>
          <h5 style={{ fontFamily: fontBody, fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: C.gold, marginBottom: 16 }}>Contact</h5>
          <p style={{ color: C.muted, fontSize: 13, lineHeight: 2.1 }}>+356 2124 0000<br />reservations@grandharbour.mt<br />concierge@grandharbour.mt</p>
        </div>
        <div>
          <h5 style={{ fontFamily: fontBody, fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: C.gold, marginBottom: 16 }}>Follow</h5>
          {["Instagram", "Facebook", "Pinterest", "TripAdvisor"].map((s) => (
            <p key={s} style={{ color: C.muted, fontSize: 13, marginBottom: 10, cursor: "pointer", transition: "color 0.3s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = C.cream)}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = C.muted)}
            >{s}</p>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "48px auto 0", paddingTop: 24, borderTop: "1px solid rgba(201,169,110,0.08)", display: "flex", justifyContent: "space-between", flexWrap: "wrap" as const, gap: 12 }}>
        <p style={{ color: C.muted, fontSize: 12 }}>&copy; {new Date().getFullYear()} Grand Harbour Hotel &amp; Spa. All rights reserved.</p>
        <div className="flex gap-6">
          {[
            { label: "Privacy Policy", href: "/demos/hotel/privacy" },
            { label: "Impressum", href: "/demos/hotel/impressum" },
          ].map((t) => (
            <Link key={t.label} href={t.href} style={{ color: C.muted, fontSize: 12, textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.gold)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.muted)}
            >{t.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   TOAST
   ═══════════════════════════════════════════ */
function Toast({ message, visible, onClose }: { message: string; visible: boolean; onClose: () => void }) {
  useEffect(() => {
    if (visible) {
      const t = setTimeout(onClose, 5000);
      return () => clearTimeout(t);
    }
  }, [visible, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            position: "fixed",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 300,
            background: C.gold,
            color: C.bg,
            padding: "16px 32px",
            borderRadius: 6,
            fontFamily: fontBody,
            fontSize: 14,
            fontWeight: 600,
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            whiteSpace: "nowrap" as const,
          }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function HotelContactPage() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowToast(true);
  };

  return (
    <div style={{ background: C.bg, color: C.cream, fontFamily: fontBody, paddingTop: 10 }}>
      <DemoBanner />
      <SiteHeader />

      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section style={{ paddingTop: 160, paddingBottom: 60, textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, ${C.surface} 0%, ${C.bg} 100%)`, opacity: 0.5 }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto", padding: "0 24px" }}>
          <Reveal type="fade" delay={0.1}>
            <p style={{ fontFamily: fontBody, color: C.gold, letterSpacing: "0.35em", fontSize: 13, fontWeight: 500, textTransform: "uppercase" as const, marginBottom: 16 }}>
              Reservations
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.25}>
            <h1 style={{ fontFamily: fontDisplay, fontSize: 40, fontWeight: 300, lineHeight: 1.1, color: C.cream, margin: 0 }}>
              Book Your Stay
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SPLIT LAYOUT: FORM + CONTACT INFO
          ═══════════════════════════════════════ */}
      <section style={{ padding: "40px 24px 100px", maxWidth: 1100, margin: "0 auto" }}>
        <div className="hotel-contact-grid" style={{ display: "grid", gap: 48 }}>

          {/* ─── LEFT: BOOKING FORM (55%) ─── */}
          <Reveal type="slide-left" delay={0.1}>
            <form onSubmit={handleSubmit} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6, padding: "40px 36px" }}>
              <h2 style={{ fontFamily: fontDisplay, fontSize: 28, fontWeight: 400, color: C.cream, margin: "0 0 32px" }}>
                Reservation Details
              </h2>

              {/* dates row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                <div>
                  <label style={{ display: "block", fontFamily: fontBody, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: C.gold, marginBottom: 8, fontWeight: 500 }}>
                    Check-in
                  </label>
                  <input type="date" defaultValue="2026-06-15" style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.5)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = C.border; }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: fontBody, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: C.gold, marginBottom: 8, fontWeight: 500 }}>
                    Check-out
                  </label>
                  <input type="date" defaultValue="2026-06-20" style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.5)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = C.border; }}
                  />
                </div>
              </div>

              {/* room type */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontFamily: fontBody, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: C.gold, marginBottom: 8, fontWeight: 500 }}>
                  Room Type
                </label>
                <select defaultValue="Classic" style={{ ...inputStyle, cursor: "pointer", appearance: "none" as const, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238A9AB5' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.5)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = C.border; }}
                >
                  {ROOM_TYPES.map((r) => (
                    <option key={r} value={r} style={{ background: C.surface, color: C.cream }}>{r}</option>
                  ))}
                </select>
              </div>

              {/* adults + children */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                <div>
                  <label style={{ display: "block", fontFamily: fontBody, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: C.gold, marginBottom: 8, fontWeight: 500 }}>
                    Adults
                  </label>
                  <select defaultValue="2" style={{ ...inputStyle, cursor: "pointer", appearance: "none" as const, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238A9AB5' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.5)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = C.border; }}
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n} style={{ background: C.surface, color: C.cream }}>{n}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: fontBody, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: C.gold, marginBottom: 8, fontWeight: 500 }}>
                    Children
                  </label>
                  <select defaultValue="0" style={{ ...inputStyle, cursor: "pointer", appearance: "none" as const, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238A9AB5' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.5)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = C.border; }}
                  >
                    {[0, 1, 2, 3].map((n) => (
                      <option key={n} value={n} style={{ background: C.surface, color: C.cream }}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* divider */}
              <div style={{ height: 1, background: C.border, margin: "28px 0" }} />

              {/* name + email */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                <div>
                  <label style={{ display: "block", fontFamily: fontBody, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: C.gold, marginBottom: 8, fontWeight: 500 }}>
                    Name *
                  </label>
                  <input type="text" required placeholder="Your full name" style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.5)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = C.border; }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: fontBody, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: C.gold, marginBottom: 8, fontWeight: 500 }}>
                    Email *
                  </label>
                  <input type="email" required placeholder="your@email.com" style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.5)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = C.border; }}
                  />
                </div>
              </div>

              {/* phone */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontFamily: fontBody, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: C.gold, marginBottom: 8, fontWeight: 500 }}>
                  Phone *
                </label>
                <input type="tel" required placeholder="+356 ..." style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.5)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = C.border; }}
                />
              </div>

              {/* special requests */}
              <div style={{ marginBottom: 32 }}>
                <label style={{ display: "block", fontFamily: fontBody, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: C.gold, marginBottom: 8, fontWeight: 500 }}>
                  Special Requests
                </label>
                <textarea rows={4} placeholder="Dietary requirements, celebrations, accessibility needs..." style={{ ...inputStyle, resize: "vertical" as const }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.5)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = C.border; }}
                />
              </div>

              {/* submit */}
              <MagneticButton>
                <button
                  type="submit"
                  style={{
                    width: "100%", padding: "16px 0", background: C.gold,
                    color: C.bg, border: "none", borderRadius: 4,
                    fontFamily: fontBody, fontSize: 13, fontWeight: 700,
                    letterSpacing: "0.12em", textTransform: "uppercase" as const,
                    cursor: "pointer", transition: "opacity 0.25s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                >
                  Check Availability
                </button>
              </MagneticButton>
            </form>
          </Reveal>

          {/* ─── RIGHT: CONTACT INFO (45%) ─── */}
          <Reveal type="slide-right" delay={0.2}>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

              {/* contact details card */}
              <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6, padding: "36px 32px" }}>
                <h3 style={{ fontFamily: fontDisplay, fontSize: 24, fontWeight: 400, color: C.cream, margin: "0 0 28px" }}>
                  Contact Details
                </h3>

                {[
                  {
                    label: "Phone",
                    value: "+356 2124 0000",
                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  },
                  {
                    label: "Email",
                    value: "reservations@grandharbour.mt",
                    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  },
                  {
                    label: "Address",
                    value: "Valletta Waterfront, VLT 1971, Malta",
                    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(201,169,110,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width={18} height={18} fill="none" stroke={C.gold} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontFamily: fontBody, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: C.gold, margin: "0 0 4px", fontWeight: 500 }}>
                        {item.label}
                      </p>
                      <p style={{ color: C.cream, fontSize: 15, margin: 0, lineHeight: 1.5 }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* notes */}
              <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6, padding: "28px 32px" }}>
                {[
                  "Concierge available 24/7",
                  "Complimentary airport transfer for suite bookings",
                ].map((note, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: i === 0 ? 16 : 0 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.gold, marginTop: 7, flexShrink: 0 }} />
                    <p style={{ color: C.cream, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{note}</p>
                  </div>
                ))}
              </div>

              {/* map placeholder */}
              <div style={{
                background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6,
                height: 220, display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden",
              }}>
                {/* grid pattern */}
                <div style={{
                  position: "absolute", inset: 0, opacity: 0.06,
                  backgroundImage: `linear-gradient(${C.muted} 1px, transparent 1px), linear-gradient(90deg, ${C.muted} 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }} />
                <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                  <svg width={32} height={32} fill="none" stroke={C.gold} strokeWidth={1.2} viewBox="0 0 24 24" style={{ marginBottom: 12, opacity: 0.7 }}>
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p style={{ color: C.muted, fontSize: 13, margin: 0 }}>Valletta Waterfront, Malta</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />

      <Toast
        message="Thank you! We'll confirm availability within 24 hours."
        visible={showToast}
        onClose={() => setShowToast(false)}
      />

      <style>{`
        .hotel-contact-grid {
          grid-template-columns: 55fr 45fr;
        }
        @media (max-width: 768px) {
          .hotel-contact-grid {
            grid-template-columns: 1fr;
          }
        }
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(0.7);
          cursor: pointer;
        }
        input::placeholder, textarea::placeholder {
          color: rgba(138,154,181,0.5);
        }
      `}</style>
    </div>
  );
}
