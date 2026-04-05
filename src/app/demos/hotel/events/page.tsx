"use client";

import { useState, useEffect } from "react";
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

/* ─── venue data ─── */
const venues = [
  {
    name: "The Grand Ballroom",
    capacity: 250,
    desc: "Our magnificent ballroom features Swarovski chandeliers, floor-to-ceiling harbour views, and a private pre-function foyer. Perfect for grand weddings, galas, and celebrations that demand an unforgettable setting.",
    highlight: "Chandeliers & harbour view",
    minSpend: 12000,
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  },
  {
    name: "The Terrace",
    capacity: 80,
    desc: "An enchanting open-air terrace overlooking the Mediterranean, bathed in golden sunset light. Ideal for intimate wedding ceremonies, cocktail receptions, and al fresco celebrations under the stars.",
    highlight: "Open-air sunset ceremonies",
    minSpend: 6000,
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    name: "The Boardroom",
    capacity: 20,
    desc: "An intimate, technology-equipped space for executive meetings, board retreats, and private dinners. Features state-of-the-art AV equipment, high-speed connectivity, and dedicated catering.",
    highlight: "Corporate & AV equipment",
    minSpend: 2000,
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
];

/* ─── wedding inclusions ─── */
const weddingInclusions = [
  { title: "Ceremony Coordination", desc: "Dedicated wedding planner from initial consultation to the final dance" },
  { title: "Bridal Suite", desc: "Complimentary bridal suite with champagne for the wedding night" },
  { title: "Tasting Menu", desc: "Bespoke multi-course menu designed with our executive chef" },
  { title: "Sommelier Service", desc: "Personal sommelier to curate wines paired to each course" },
  { title: "Photographer Referral", desc: "Exclusive list of vetted photographers who know our venues intimately" },
];

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
          transition: "background 0.4s, border-color 0.4s",
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
                textTransform: "uppercase" as const, color: link.href === "/demos/hotel/events" ? C.cream : "rgba(245,240,232,0.6)",
                textDecoration: "none", transition: "color 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.cream; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = link.href === "/demos/hotel/events" ? C.cream : "rgba(245,240,232,0.6)"; }}
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

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function HotelEventsPage() {
  return (
    <div style={{ background: C.bg, color: C.cream, fontFamily: fontBody, paddingTop: 10 }}>
      <DemoBanner />
      <SiteHeader />

      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section style={{ paddingTop: 160, paddingBottom: 80, textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, ${C.surface} 0%, ${C.bg} 100%)`, opacity: 0.5 }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <Reveal type="fade" delay={0.1}>
            <p style={{ fontFamily: fontBody, color: C.gold, letterSpacing: "0.35em", fontSize: 13, fontWeight: 500, textTransform: "uppercase" as const, marginBottom: 16 }}>
              Events
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.25}>
            <h1 style={{ fontFamily: fontDisplay, fontSize: 48, fontWeight: 300, lineHeight: 1.1, color: C.cream, margin: "0 0 20px" }}>
              Weddings &amp; Celebrations
            </h1>
          </Reveal>
          <Reveal type="fade" delay={0.4}>
            <p style={{ color: C.muted, fontSize: 16, lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
              From grand galas to intimate gatherings, every event at Grand Harbour is crafted with the same attention to detail that defines our hospitality.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          VENUE CARDS
          ═══════════════════════════════════════ */}
      <section style={{ padding: "40px 24px 100px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 28 }}>
          {venues.map((venue, i) => (
            <Reveal key={venue.name} type="slide-up" delay={i * 0.12}>
              <div
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 6,
                  padding: 36,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.3)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = C.border;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* icon + capacity badge */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(201,169,110,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width={22} height={22} fill="none" stroke={C.gold} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d={venue.icon} />
                    </svg>
                  </div>
                  <span style={{
                    fontFamily: fontBody, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
                    textTransform: "uppercase" as const, color: C.gold, background: "rgba(201,169,110,0.1)",
                    padding: "6px 14px", borderRadius: 20,
                  }}>
                    Up to {venue.capacity} guests
                  </span>
                </div>

                {/* name */}
                <h3 style={{ fontFamily: fontDisplay, fontSize: 28, fontWeight: 400, color: C.cream, margin: "0 0 8px" }}>
                  {venue.name}
                </h3>

                {/* highlight */}
                <p style={{ color: C.gold, fontSize: 13, fontWeight: 500, margin: "0 0 16px", letterSpacing: "0.02em" }}>
                  {venue.highlight}
                </p>

                {/* description */}
                <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.7, margin: "0 0 28px", flex: 1 }}>
                  {venue.desc}
                </p>

                {/* minimum spend */}
                <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 20, marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ color: C.muted, fontSize: 12, textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Minimum spend</span>
                  <span style={{ fontFamily: fontDisplay, fontSize: 26, fontWeight: 400, color: C.cream }}>
                    &euro;{venue.minSpend.toLocaleString()}
                  </span>
                </div>

                {/* enquire button */}
                <MagneticButton>
                  <Link
                    href="/demos/hotel/contact"
                    style={{
                      display: "block", textAlign: "center", padding: "14px 0", width: "100%",
                      background: "transparent", border: `1px solid ${C.gold}`, color: C.gold,
                      fontFamily: fontBody, fontSize: 12, fontWeight: 600, letterSpacing: "0.15em",
                      textTransform: "uppercase" as const, textDecoration: "none", borderRadius: 4,
                      transition: "background 0.3s, color 0.3s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = C.gold; (e.currentTarget as HTMLElement).style.color = C.bg; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = C.gold; }}
                  >
                    Enquire
                  </Link>
                </MagneticButton>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHAT'S INCLUDED — WEDDINGS
          ═══════════════════════════════════════ */}
      <section style={{ padding: "80px 24px 100px", background: C.surface }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal type="fade">
            <p style={{ fontFamily: fontBody, color: C.gold, letterSpacing: "0.3em", fontSize: 12, fontWeight: 500, textTransform: "uppercase" as const, textAlign: "center", marginBottom: 12 }}>
              Weddings
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.1}>
            <h2 style={{ fontFamily: fontDisplay, fontSize: "clamp(32px, 4vw, 42px)", fontWeight: 300, color: C.cream, textAlign: "center", marginBottom: 56 }}>
              What&rsquo;s Included
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24 }}>
            {weddingInclusions.map((item, i) => (
              <Reveal key={item.title} type="fade" delay={i * 0.08}>
                <div style={{
                  padding: "28px 24px",
                  background: "rgba(12,18,32,0.5)",
                  border: `1px solid ${C.border}`,
                  borderRadius: 6,
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.gold, marginBottom: 16 }} />
                  <h4 style={{ fontFamily: fontDisplay, fontSize: 20, fontWeight: 400, color: C.cream, margin: "0 0 8px" }}>
                    {item.title}
                  </h4>
                  <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ENQUIRY CTA
          ═══════════════════════════════════════ */}
      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <Reveal type="fade">
          <p style={{ fontFamily: fontBody, color: C.gold, letterSpacing: "0.3em", fontSize: 12, fontWeight: 500, textTransform: "uppercase" as const, marginBottom: 12 }}>
            Let&rsquo;s plan together
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h2 style={{ fontFamily: fontDisplay, fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 300, color: C.cream, marginBottom: 24 }}>
            Your celebration awaits
          </h2>
        </Reveal>
        <Reveal type="fade" delay={0.2}>
          <p style={{ color: C.muted, fontSize: 15, lineHeight: 1.7, maxWidth: 520, margin: "0 auto 40px" }}>
            Our events team will work with you to create a bespoke experience tailored to your vision.
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.3}>
          <MagneticButton>
            <Link
              href="/demos/hotel/contact"
              style={{
                display: "inline-block", padding: "16px 48px", background: C.gold,
                color: C.bg, fontFamily: fontBody, fontSize: 13, fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase" as const,
                textDecoration: "none", transition: "opacity 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >
              Start Your Enquiry
            </Link>
          </MagneticButton>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
