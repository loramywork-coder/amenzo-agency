"use client";

import Reveal from "@/components/demos/Reveal";
import MagneticButton from "@/components/demos/MagneticButton";
import { DemoBanner } from "@/components/demos/demo-banner";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  { label: "Dining", href: "/demos/hotel" },
  { label: "Spa", href: "/demos/hotel/spa" },
  { label: "Experiences", href: "/demos/hotel/experiences" },
  { label: "Gallery", href: "/demos/hotel/gallery" },
];

/* ─── experience data ─── */
const EXPERIENCES = [
  {
    title: "Harbour Cruise",
    desc: "Set sail at golden hour aboard a private yacht through the Grand Harbour. Champagne, canapes and unforgettable views included.",
    price: "from \u20AC150 / person",
    img: "photo-1544551763-46a013bb70d5",
  },
  {
    title: "Valletta Walking Tour",
    desc: "Explore the Baroque capital with our resident historian. Discover hidden courtyards, the Co-Cathedral and centuries of story woven into stone.",
    price: "Complimentary",
    img: "photo-1568538001655-0d85c0e0f1b3",
  },
  {
    title: "Wine Tasting",
    desc: "Journey through Malta\u2019s native grape varieties with our sommelier. Five-wine flight paired with local cheeses and sundried tomatoes.",
    price: "\u20AC65 / person",
    img: "photo-1510812431401-41d2bd2722f3",
  },
  {
    title: "Cooking Class",
    desc: "Master the art of Maltese cuisine alongside our executive chef. From ftira to rabbit stew, take home recipes and memories.",
    price: "\u20AC120 / person",
    img: "photo-1556910103-1c02745aae4d",
  },
  {
    title: "Temple Visit",
    desc: "Exclusive early-morning access to \u0126a\u0121ar Qim, one of the world\u2019s oldest free-standing structures, before the crowds arrive.",
    price: "\u20AC90 / person",
    img: "photo-1585208798174-6cedd86e019a",
  },
  {
    title: "Island Hopping",
    desc: "A full day aboard a private yacht visiting Gozo\u2019s Citadel, Comino\u2019s Blue Lagoon, and hidden sea caves. Lunch on board included.",
    price: "\u20AC250 / person",
    img: "photo-1507525428034-b723cf961d3e",
  },
];

/* ─── unsplash helper ─── */
const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

/* ━━━ NAV HEADER ━━━ */
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
            <span style={{ display: "block", fontFamily: fontDisplay, fontWeight: 400, fontSize: 20, color: C.cream }}>Grand Harbour</span>
            <span style={{ display: "block", fontFamily: fontBody, fontWeight: 400, fontSize: 10, color: C.gold, letterSpacing: "0.2em", textTransform: "uppercase" }}>Hotel &amp; Spa</span>
          </div>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hotel-desktop-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: fontBody, fontSize: 11, letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: link.href === "/demos/hotel/experiences" ? C.cream : "rgba(245,240,232,0.5)",
                textDecoration: "none", transition: "color 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.cream; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = link.href === "/demos/hotel/experiences" ? C.cream : "rgba(245,240,232,0.5)"; }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/demos/hotel"
            style={{
              fontFamily: fontBody, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
              textTransform: "uppercase", padding: "10px 22px", background: C.gold,
              color: C.bg, textDecoration: "none", transition: "opacity 0.25s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          >
            Reserve a Stay
          </Link>
        </nav>

        <button
          className="hotel-mobile-hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5, padding: 8 }}
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

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MAIN COMPONENT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function ExperiencesPage() {
  return (
    <div style={{ background: C.bg, color: C.cream, fontFamily: fontBody, paddingTop: 40 }}>
      <DemoBanner />
      <NavHeader />

      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section style={{ padding: "140px 24px 80px", textAlign: "center" }}>
        <Reveal type="fade" delay={0.2}>
          <p style={{
            fontFamily: fontBody, color: C.gold, letterSpacing: "0.35em",
            fontSize: 13, fontWeight: 500, textTransform: "uppercase",
          }}>
            EXPERIENCES
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.4}>
          <h1 style={{
            fontFamily: fontDisplay,
            fontSize: 44, fontWeight: 300, lineHeight: 1.15,
            color: C.cream, marginTop: 16,
          }}>
            Discover Malta
          </h1>
        </Reveal>
        <Reveal type="scale" delay={0.6}>
          <div style={{ width: 60, height: 1, background: C.gold, margin: "28px auto" }} />
        </Reveal>
        <Reveal type="fade" delay={0.7}>
          <p style={{
            color: C.muted, fontSize: 15, lineHeight: 1.85,
            maxWidth: 560, margin: "0 auto",
          }}>
            Curated by our concierge team, each experience reveals a different
            facet of Malta&rsquo;s rich culture, natural beauty and culinary heritage.
          </p>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          EXPERIENCE GRID
          ═══════════════════════════════════════ */}
      <section style={{ padding: "0 24px 100px", maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
          className="exp-grid"
        >
          {EXPERIENCES.map((exp, i) => (
            <Reveal key={exp.title} type="slide-up" delay={i * 0.1}>
              <div
                className="exp-card"
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  overflow: "hidden",
                  transition: "transform 0.4s cubic-bezier(0.25,0.1,0.25,1), box-shadow 0.4s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* image */}
                <div style={{ position: "relative", width: "100%", paddingTop: "66%", overflow: "hidden" }}>
                  <Image
                    src={unsplash(exp.img, 800)}
                    alt={exp.title}
                    fill
                    className="object-cover"
                    style={{ transition: "transform 0.6s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                  />
                </div>

                {/* content */}
                <div style={{ padding: "28px 24px 24px" }}>
                  <h3 style={{
                    fontFamily: fontDisplay, fontSize: 24, fontWeight: 400,
                    color: C.cream, marginBottom: 12,
                  }}>
                    {exp.title}
                  </h3>
                  <p style={{
                    color: C.muted, fontSize: 13, lineHeight: 1.75,
                    marginBottom: 20, minHeight: 66,
                  }}>
                    {exp.desc}
                  </p>
                  <div style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center", paddingTop: 16,
                    borderTop: `1px solid ${C.border}`,
                  }}>
                    <span style={{
                      fontFamily: fontDisplay, fontSize: 18,
                      color: C.gold,
                    }}>
                      {exp.price}
                    </span>
                    <span
                      style={{
                        fontFamily: fontBody, fontSize: 11, fontWeight: 600,
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        padding: "10px 20px", border: `1px solid ${C.gold}`,
                        color: C.gold, transition: "background 0.3s, color 0.3s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = C.gold;
                        (e.currentTarget as HTMLElement).style.color = C.bg;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.color = C.gold;
                      }}
                    >
                      Book
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════ */}
      <footer style={{
        background: C.bg,
        borderTop: "1px solid rgba(201,169,110,0.12)",
        padding: "64px 24px 48px",
      }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 40,
        }}>
          <div>
            <h4 style={{ fontFamily: fontDisplay, fontSize: 24, fontWeight: 400, color: C.cream, marginBottom: 16 }}>
              Grand Harbour
            </h4>
            <p style={{ color: C.muted, fontSize: 13, lineHeight: 1.8 }}>
              St. Barbara Bastion<br />Valletta VLT 1960<br />Malta
            </p>
          </div>
          <div>
            <h5 style={{
              fontFamily: fontBody, fontSize: 12, fontWeight: 600,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: C.gold, marginBottom: 16,
            }}>
              Quick Links
            </h5>
            {["Rooms & Suites", "Dining", "Spa & Wellness", "Experiences", "Gallery"].map((link) => (
              <p key={link} style={{ color: C.muted, fontSize: 13, marginBottom: 10, cursor: "pointer", transition: "color 0.3s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = C.cream)}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = C.muted)}
              >
                {link}
              </p>
            ))}
          </div>
          <div>
            <h5 style={{
              fontFamily: fontBody, fontSize: 12, fontWeight: 600,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: C.gold, marginBottom: 16,
            }}>
              Contact
            </h5>
            <p style={{ color: C.muted, fontSize: 13, lineHeight: 2.1 }}>
              +356 2124 0000<br />reservations@grandharbour.mt<br />concierge@grandharbour.mt
            </p>
          </div>
          <div>
            <h5 style={{
              fontFamily: fontBody, fontSize: 12, fontWeight: 600,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: C.gold, marginBottom: 16,
            }}>
              Follow
            </h5>
            {["Instagram", "Facebook", "Pinterest", "TripAdvisor"].map((s) => (
              <p key={s} style={{ color: C.muted, fontSize: 13, marginBottom: 10, cursor: "pointer", transition: "color 0.3s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = C.cream)}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = C.muted)}
              >
                {s}
              </p>
            ))}
          </div>
        </div>
        <div style={{
          maxWidth: 1100, margin: "48px auto 0", paddingTop: 24,
          borderTop: "1px solid rgba(201,169,110,0.08)",
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ color: C.muted, fontSize: 12 }}>
            &copy; {new Date().getFullYear()} Grand Harbour Hotel &amp; Spa. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Accessibility"].map((t) => (
              <span key={t} style={{ color: C.muted, fontSize: 12, cursor: "pointer", transition: "color 0.3s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = C.gold)}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = C.muted)}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </footer>

      {/* ─── responsive grid ─── */}
      <style>{`
        .exp-grid{grid-template-columns:repeat(3,1fr);}
        @media(max-width:899px){.exp-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:599px){.exp-grid{grid-template-columns:1fr;}}
        .hotel-desktop-nav{display:flex!important;}
        .hotel-mobile-hamburger{display:none!important;}
        @media(max-width:899px){
          .hotel-desktop-nav{display:none!important;}
          .hotel-mobile-hamburger{display:flex!important;}
        }
      `}</style>
    </div>
  );
}
