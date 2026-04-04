"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/demos/Reveal";
import MagneticButton from "@/components/demos/MagneticButton";
import { DemoBanner } from "@/components/demos/demo-banner";

/* ─── palette ─── */
const C = {
  bg: "#0A0A08",
  surface: "#121210",
  gold: "#C9935A",
  cream: "#F5E6D3",
  muted: "#8A7E70",
  border: "#2A2620",
} as const;

/* ─── fonts ─── */
const fontDisplay =
  "var(--font-heading), 'Playfair Display', Georgia, serif";
const fontBody =
  "var(--font-body), 'DM Sans', system-ui, sans-serif";

/* ─── unsplash helper ─── */
const img = (id: string, w = 800, q = 80) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

/* ─── nav links ─── */
const NAV_LINKS = [
  { label: "Menu", href: "/demos/restaurant/menu" },
  { label: "Wine", href: "/demos/restaurant/wine" },
  { label: "Gallery", href: "/demos/restaurant/gallery" },
  { label: "Private Events", href: "/demos/restaurant/private" },
  { label: "About", href: "/demos/restaurant/about" },
];

/* ─── wine category cards ─── */
const CATEGORIES = [
  {
    title: "Old World",
    subtitle: "France, Italy, Spain & Beyond",
    labels: "120+ labels",
    desc: "From the grand crus of Burgundy to the sun-kissed slopes of Tuscany, our Old World selection celebrates centuries of winemaking tradition.",
    image: img("photo-1510812431401-41d2bd2722f3", 800, 80),
  },
  {
    title: "New World",
    subtitle: "Americas, Oceania & South Africa",
    labels: "80+ labels",
    desc: "Bold expressions from Napa to Mendoza, our New World wines showcase modern viticulture at its most adventurous.",
    image: img("photo-1506377247377-2a5b3b417ebb", 800, 80),
  },
  {
    title: "Maltese & Natural",
    subtitle: "Island Terroir & Minimal Intervention",
    labels: "40+ labels",
    desc: "Indigenous Gellewza and Girgentina grapes alongside natural wines that speak of place, time, and passion.",
    image: img("photo-1414235077428-338989a2e8c0", 800, 80),
  },
];

/* ─── featured wines ─── */
const FEATURED_WINES = [
  {
    name: "Chateau Margaux 2016",
    region: "Margaux, Bordeaux",
    grape: "Cabernet Sauvignon, Merlot",
    notes: "Layers of blackcurrant, violet, and cedar. Silky tannins with an extraordinary finish that lingers for minutes.",
    glass: null,
    bottle: "\u20AC480",
  },
  {
    name: "Barolo Monfortino 2014",
    region: "Piedmont, Italy",
    grape: "Nebbiolo",
    notes: "Tar, roses, and dried herbs. A monumental wine with structure that will reward patience over decades.",
    glass: null,
    bottle: "\u20AC320",
  },
  {
    name: "Cloudy Bay Sauvignon Blanc 2023",
    region: "Marlborough, New Zealand",
    grape: "Sauvignon Blanc",
    notes: "Tropical passion fruit, gooseberry, and citrus. Crisp acidity with a clean, refreshing finish.",
    glass: "\u20AC16",
    bottle: "\u20AC68",
  },
  {
    name: "Sassicaia 2019",
    region: "Bolgheri, Tuscany",
    grape: "Cabernet Sauvignon, Cabernet Franc",
    notes: "Elegant dark fruit, Mediterranean herbs, and a whisper of graphite. Beautifully balanced with fine-grained tannins.",
    glass: null,
    bottle: "\u20AC280",
  },
  {
    name: "Ta\u2019 Betta Gellewza 2021",
    region: "Siggiewi, Malta",
    grape: "Gellewza",
    notes: "Wild strawberry, dried thyme, and garrigue. A genuine expression of Maltese terroir, medium-bodied with bright acidity.",
    glass: "\u20AC14",
    bottle: "\u20AC52",
  },
  {
    name: "Opus One 2018",
    region: "Napa Valley, California",
    grape: "Cabernet Sauvignon blend",
    notes: "Cassis, blackberry, and espresso with velvety tannins. A harmonious marriage of Bordeaux and Napa traditions.",
    glass: null,
    bottle: "\u20AC420",
  },
];

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
          background: scrolled ? "rgba(10,10,8,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
          transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
        }}
      >
        <Link href="/demos/restaurant" style={{ textDecoration: "none" }}>
          <div style={{ lineHeight: 1.1 }}>
            <span style={{ display: "block", fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 600, fontSize: 20, color: C.cream }}>Porto</span>
            <span style={{ display: "block", fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 400, fontSize: 13, color: C.gold, letterSpacing: "0.08em" }}>Valletta</span>
          </div>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="rest-desktop-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: fontBody, fontSize: 11, letterSpacing: "0.18em",
                textTransform: "uppercase", color: link.href === "/demos/restaurant/wine" ? C.cream : "rgba(245,230,211,0.6)",
                textDecoration: "none", transition: "color 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.cream; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = link.href === "/demos/restaurant/wine" ? C.cream : "rgba(245,230,211,0.6)"; }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/demos/restaurant/contact"
            style={{
              fontFamily: fontBody, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
              textTransform: "uppercase", padding: "10px 22px", background: C.gold,
              color: C.bg, textDecoration: "none", transition: "opacity 0.25s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          >
            Reserve a Table
          </Link>
        </nav>

        <button
          className="rest-mobile-hamburger"
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
                <Link href={link.href} onClick={() => setMobileOpen(false)} style={{ fontFamily: fontDisplay, fontStyle: "italic", fontSize: 32, color: C.cream, textDecoration: "none" }}>
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
                href="/demos/restaurant/contact"
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: fontBody, fontSize: 14, fontWeight: 600, letterSpacing: "0.1em",
                  textTransform: "uppercase", padding: "14px 36px", background: C.gold,
                  color: C.bg, textDecoration: "none", display: "inline-block", marginTop: 16,
                }}
              >
                Reserve a Table
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .rest-desktop-nav{display:flex!important;}
        .rest-mobile-hamburger{display:none!important;}
        @media(max-width:899px){
          .rest-desktop-nav{display:none!important;}
          .rest-mobile-hamburger{display:flex!important;}
        }
      `}</style>
    </>
  );
}

/* ━━━ FOOTER ━━━ */
function SiteFooter() {
  return (
    <footer style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: "60px 24px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 48 }}>
        <div>
          <h3 style={{ fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 600, fontSize: 24, color: C.cream, margin: "0 0 12px" }}>Porto Valletta</h3>
          <p style={{ fontFamily: fontBody, fontSize: 14, lineHeight: 1.7, color: C.muted, margin: 0 }}>42 Strait Street<br />Valletta VLT 1432<br />Malta</p>
        </div>
        <div>
          <h4 style={{ fontFamily: fontBody, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold, margin: "0 0 16px" }}>Navigate</h4>
          {[
            { label: "The Menu", href: "/demos/restaurant/menu" },
            { label: "Wine List", href: "/demos/restaurant/wine" },
            { label: "Private Dining", href: "/demos/restaurant/private" },
            { label: "Gift Cards", href: "#" },
            { label: "Careers", href: "#" },
          ].map((link) => (
            <Link key={link.label} href={link.href} style={{ display: "block", fontFamily: fontBody, fontSize: 14, color: "rgba(245,230,211,0.5)", textDecoration: "none", padding: "4px 0", transition: "color 0.25s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.cream; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(245,230,211,0.5)"; }}
            >{link.label}</Link>
          ))}
        </div>
        <div>
          <h4 style={{ fontFamily: fontBody, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold, margin: "0 0 16px" }}>Hours</h4>
          <p style={{ fontFamily: fontBody, fontSize: 14, lineHeight: 1.8, color: "rgba(245,230,211,0.5)", margin: 0 }}>Tue &ndash; Sat: 12:00 &ndash; 23:00<br />Sunday Brunch: 11:00 &ndash; 15:00<br />Monday: Closed</p>
        </div>
        <div>
          <h4 style={{ fontFamily: fontBody, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold, margin: "0 0 16px" }}>Contact</h4>
          <p style={{ fontFamily: fontBody, fontSize: 14, lineHeight: 1.8, color: "rgba(245,230,211,0.5)", margin: 0 }}>+356 2124 5678<br />reservations@portovalletta.mt</p>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <p style={{ fontFamily: fontBody, fontSize: 13, color: "rgba(138,126,112,0.6)", margin: 0 }}>&copy; {new Date().getFullYear()} Porto Valletta. All rights reserved.</p>
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/demos/restaurant/privacy" style={{ fontFamily: fontBody, fontSize: 13, color: "rgba(138,126,112,0.4)", textDecoration: "none", transition: "color 0.25s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.muted; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(138,126,112,0.4)"; }}
          >Privacy</Link>
          <Link href="/demos/restaurant/impressum" style={{ fontFamily: fontBody, fontSize: 13, color: "rgba(138,126,112,0.4)", textDecoration: "none", transition: "color 0.25s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.muted; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(138,126,112,0.4)"; }}
          >Impressum</Link>
        </div>
      </div>
    </footer>
  );
}

/* ━━━ WINE PAGE ━━━ */
export default function WinePage() {
  return (
    <div
      style={{
        background: C.bg,
        color: C.cream,
        fontFamily: fontBody,
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      <DemoBanner />
      <NavHeader />

      {/* ════════ Hero ════════ */}
      <section
        style={{
          position: "relative",
          paddingTop: 40,
          height: "50vh",
          minHeight: 340,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${img("photo-1510812431401-41d2bd2722f3", 1920, 85)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(10,10,8,0.6) 0%, rgba(10,10,8,0.92) 100%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px" }}>
          <Reveal type="fade" delay={0.2}>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: 12,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: C.gold,
                marginBottom: 20,
              }}
            >
              The Cellar
            </p>
          </Reveal>
          <Reveal type="fade" delay={0.4}>
            <h1
              style={{
                fontFamily: fontDisplay,
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: "clamp(40px, 7vw, 64px)",
                color: C.cream,
                margin: "0 0 16px",
              }}
            >
              Wine Programme
            </h1>
          </Reveal>
          <Reveal type="fade" delay={0.6}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
              style={{ height: 2, background: C.gold, margin: "0 auto 20px" }}
            />
          </Reveal>
          <Reveal type="fade" delay={0.8}>
            <p
              style={{
                fontFamily: fontDisplay,
                fontStyle: "italic",
                fontSize: "clamp(14px, 2vw, 18px)",
                color: C.muted,
                maxWidth: 480,
                margin: "0 auto",
              }}
            >
              240+ labels curated from the world&apos;s finest vineyards
            </p>
          </Reveal>
        </div>
      </section>

      {/* ════════ Category Cards ════════ */}
      <section style={{ background: C.bg, padding: "120px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal type="slide-up">
            <p
              style={{
                fontFamily: fontBody,
                fontSize: 12,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: C.gold,
                marginBottom: 16,
                textAlign: "center",
              }}
            >
              Our Collection
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.1}>
            <h2
              style={{
                fontFamily: fontDisplay,
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: "clamp(32px, 5vw, 44px)",
                textAlign: "center",
                color: C.cream,
                margin: "0 0 60px",
              }}
            >
              Explore by Region
            </h2>
          </Reveal>

          <style>{`
            .rest-wine-cats{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
            @media(max-width:899px){.rest-wine-cats{grid-template-columns:1fr;}}
          `}</style>
          <div className="rest-wine-cats">
            {CATEGORIES.map((cat, i) => (
              <Reveal key={cat.title} type="scale" delay={i * 0.12}>
                <motion.div
                  whileHover="hovered"
                  initial="idle"
                  style={{
                    position: "relative",
                    height: 440,
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  {/* dark overlay, lightens on hover */}
                  <motion.div
                    variants={{
                      idle: { opacity: 0.75 },
                      hovered: { opacity: 0.4 },
                    }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: C.bg,
                    }}
                  />
                  {/* default content (centered) */}
                  <motion.div
                    variants={{
                      idle: { opacity: 1, y: 0 },
                      hovered: { opacity: 0, y: -20 },
                    }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: fontDisplay,
                        fontStyle: "italic",
                        fontWeight: 600,
                        fontSize: 28,
                        color: C.cream,
                        margin: "0 0 8px",
                      }}
                    >
                      {cat.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: fontBody,
                        fontSize: 14,
                        letterSpacing: "0.15em",
                        color: C.gold,
                        textTransform: "uppercase",
                      }}
                    >
                      {cat.labels}
                    </span>
                  </motion.div>
                  {/* hover reveal content */}
                  <motion.div
                    variants={{
                      idle: { opacity: 0, y: 20 },
                      hovered: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 3,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "40px 32px",
                      textAlign: "center",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: fontDisplay,
                        fontStyle: "italic",
                        fontWeight: 600,
                        fontSize: 24,
                        color: C.cream,
                        margin: "0 0 6px",
                      }}
                    >
                      {cat.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: fontBody,
                        fontSize: 12,
                        color: C.gold,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        margin: "0 0 20px",
                      }}
                    >
                      {cat.subtitle}
                    </p>
                    <div
                      style={{
                        width: 30,
                        height: 1,
                        background: C.gold,
                        margin: "0 auto 20px",
                      }}
                    />
                    <p
                      style={{
                        fontFamily: fontBody,
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: "rgba(245,230,211,0.7)",
                        margin: "0 0 16px",
                        maxWidth: 280,
                      }}
                    >
                      {cat.desc}
                    </p>
                    <span
                      style={{
                        fontFamily: fontBody,
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        color: C.gold,
                        textTransform: "uppercase",
                      }}
                    >
                      {cat.labels}
                    </span>
                  </motion.div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ Featured Wines ════════ */}
      <section style={{ background: C.surface, padding: "120px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal type="slide-up">
            <p
              style={{
                fontFamily: fontBody,
                fontSize: 12,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: C.gold,
                marginBottom: 16,
                textAlign: "center",
              }}
            >
              From the List
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.1}>
            <h2
              style={{
                fontFamily: fontDisplay,
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: "clamp(32px, 5vw, 44px)",
                textAlign: "center",
                color: C.cream,
                margin: "0 0 60px",
              }}
            >
              Featured Selections
            </h2>
          </Reveal>

          <div>
            {FEATURED_WINES.map((wine, i) => (
              <Reveal key={wine.name} type="fade" delay={i * 0.06}>
                <div
                  style={{
                    padding: "32px 0",
                    borderBottom: i < FEATURED_WINES.length - 1 ? `1px solid ${C.border}` : "none",
                  }}
                >
                  {/* Top row: name + prices */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 24,
                      marginBottom: 8,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: fontDisplay,
                        fontWeight: 500,
                        fontSize: 20,
                        color: C.cream,
                        margin: 0,
                      }}
                    >
                      {wine.name}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        gap: 20,
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {wine.glass && (
                        <div style={{ textAlign: "right" }}>
                          <span
                            style={{
                              fontFamily: fontBody,
                              fontSize: 10,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: C.muted,
                              display: "block",
                              marginBottom: 2,
                            }}
                          >
                            Glass
                          </span>
                          <span
                            style={{
                              fontFamily: fontDisplay,
                              fontSize: 16,
                              fontWeight: 500,
                              color: C.gold,
                            }}
                          >
                            {wine.glass}
                          </span>
                        </div>
                      )}
                      <div style={{ textAlign: "right" }}>
                        <span
                          style={{
                            fontFamily: fontBody,
                            fontSize: 10,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: C.muted,
                            display: "block",
                            marginBottom: 2,
                          }}
                        >
                          Bottle
                        </span>
                        <span
                          style={{
                            fontFamily: fontDisplay,
                            fontSize: 16,
                            fontWeight: 500,
                            color: C.gold,
                          }}
                        >
                          {wine.bottle}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Region + grape */}
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: 12,
                      color: C.gold,
                      letterSpacing: "0.05em",
                      margin: "0 0 8px",
                    }}
                  >
                    {wine.region} &ensp;&middot;&ensp; {wine.grape}
                  </p>

                  {/* Tasting notes */}
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: 13,
                      fontStyle: "italic",
                      lineHeight: 1.7,
                      color: "rgba(245,230,211,0.45)",
                      margin: 0,
                      maxWidth: 600,
                    }}
                  >
                    {wine.notes}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ Sommelier Note ════════ */}
      <section style={{ background: C.bg, padding: "120px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <Reveal type="fade">
            <div
              style={{
                fontFamily: fontDisplay,
                fontSize: 80,
                lineHeight: 1,
                color: "rgba(201,147,90,0.12)",
                userSelect: "none",
                marginBottom: -20,
              }}
            >
              &ldquo;
            </div>
          </Reveal>
          <Reveal type="slide-up" delay={0.1}>
            <p
              style={{
                fontFamily: fontDisplay,
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(20px, 3vw, 28px)",
                lineHeight: 1.5,
                color: C.cream,
                margin: "0 0 24px",
              }}
            >
              Wine is not just a companion to food &mdash; it is the silent narrator
              of every meal. Our cellar is built to tell stories, one glass at a time.
            </p>
          </Reveal>
          <Reveal type="fade" delay={0.3}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
              style={{ height: 2, background: C.gold, margin: "0 auto 24px" }}
            />
          </Reveal>
          <Reveal type="fade" delay={0.4}>
            <p style={{ fontFamily: fontBody, fontSize: 14, color: C.gold, margin: "0 0 4px", fontWeight: 500 }}>
              Antoine Delacroix
            </p>
            <p style={{ fontFamily: fontBody, fontSize: 13, color: C.muted, margin: "0 0 48px" }}>
              Head Sommelier
            </p>
          </Reveal>

          <Reveal type="fade" delay={0.5}>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: 14,
                lineHeight: 1.9,
                color: C.muted,
                margin: "0 auto 48px",
                maxWidth: 560,
              }}
            >
              Our sommelier team is available every evening to guide you through the cellar.
              Whether you prefer a bold Barolo or a crisp island white, we will find
              the perfect pairing for your evening.
            </p>
          </Reveal>

          <Reveal type="fade" delay={0.6}>
            <MagneticButton href="/demos/restaurant/contact">
              <span
                style={{
                  display: "inline-block",
                  padding: "14px 40px",
                  background: C.gold,
                  color: C.bg,
                  fontFamily: fontBody,
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Book a Wine Experience
              </span>
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
