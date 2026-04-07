"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/demos/Reveal";

import { DemoBanner } from "@/components/demos/demo-banner";
import { VideoHeroBg } from "@/components/video-hero-bg";

/* ─── palette ─── */
const C = {
  bg: "#0A0A08",
  surface: "#121210",
  gold: "#C9935A",
  cream: "#F5E6D3",
  muted: "#8A7E70",
  border: "#2A2620",
} as const;

/* ─── font stacks ─── */
const fontDisplay =
  "var(--font-heading), 'Playfair Display', Georgia, serif";
const fontBody =
  "var(--font-body), 'DM Sans', system-ui, sans-serif";

/* ─── unsplash helper ─── */
const img = (id: string, w = 800, q = 80) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

/* ─── images ─── */
const IMAGES = {
  hero: img("photo-1517248135467-4c7edcad34c4", 1920, 85),
  chef: img("photo-1577219491135-ce391730fb2c", 800, 80),
  steak: img("photo-1544025162-d76694265947", 800, 80),
  seaBass: img("photo-1534604973900-c43ab4c2e0ab", 800, 80),
  beef: img("photo-1558030006-450675393462", 800, 80),
  lobster: img("photo-1563379926898-05f4575a45d8", 800, 80),
  risotto: img("photo-1476124369491-e7addf5db371", 800, 80),
  tiramisu: img("photo-1571877227200-a0d98ea607e9", 800, 80),
  wine: img("photo-1510812431401-41d2bd2722f3", 800, 80),
  interior: img("photo-1414235077428-338989a2e8c0", 1920, 85),
  entrance: img("photo-1552566626-52f8b828add9", 800, 80),
};

/* ─── signature dishes ─── */
const DISHES = [
  { name: "Seared Sea Bass", desc: "Fennel puree, saffron beurre blanc, micro herbs", price: "\u20AC38", image: IMAGES.seaBass, tags: ["GF"] },
  { name: "Wagyu Tartare", desc: "Truffle aioli, quail egg, sourdough crisps", price: "\u20AC42", image: IMAGES.beef, tags: ["GF"] },
  { name: "Lobster Thermidor", desc: "Cognac cream, gruyere gratin, baby spinach", price: "\u20AC56", image: IMAGES.lobster, tags: [] },
  { name: "Dry-Aged Ribeye", desc: "Bone marrow butter, charred leek, jus", price: "\u20AC52", image: IMAGES.steak, tags: ["GF"] },
  { name: "Black Truffle Risotto", desc: "Carnaroli rice, aged parmesan, truffle shavings", price: "\u20AC36", image: IMAGES.risotto, tags: ["V"] },
  { name: "Tiramisu Deconstructed", desc: "Espresso foam, mascarpone cloud, cocoa tuile", price: "\u20AC18", image: IMAGES.tiramisu, tags: ["V"] },
];

/* ─── reviews ─── */
const REVIEWS = [
  { text: "A meal at Porto Valletta isn’t dinner, it’s a memory etched in gold.", author: "Helena Cortez", role: "The Sunday Times", stars: 5 },
  { text: "Every course told a story. Impeccable technique, soul on every plate.", author: "James Whitfield", role: "Conde Nast Traveller", stars: 5 },
  { text: "The wine pairing alone is worth the journey. Malta’s finest table, without question.", author: "Sophia Laurent", role: "Michelin Guide", stars: 5 },
];

/* ─── instagram images ─── */
const INSTA = [
  IMAGES.seaBass, IMAGES.steak, IMAGES.tiramisu,
  IMAGES.wine, IMAGES.lobster, IMAGES.risotto,
];

/* ─── nav links ─── */
const NAV_LINKS = [
  { label: "Menu", href: "/demos/restaurant/menu" },
  { label: "Wine", href: "/demos/restaurant/wine" },
  { label: "Gallery", href: "/demos/restaurant/gallery" },
  { label: "Private Events", href: "/demos/restaurant/private" },
  { label: "About", href: "/demos/restaurant/about" },
];

/* ━━━ NAV HEADER ━━━ */
function NavHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
          padding: "10px 28px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "transparent",
          borderBottom: "none",
        }}
      >
        {/* Logo */}
        <Link href="/demos/restaurant" style={{ textDecoration: "none" }}>
          <div style={{ lineHeight: 1.1 }}>
            <span
              style={{
                display: "block",
                fontFamily: fontDisplay,
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: 20,
                color: C.cream,
              }}
            >
              Porto
            </span>
            <span
              style={{
                display: "block",
                fontFamily: fontDisplay,
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: 13,
                color: C.gold,
                letterSpacing: "0.08em",
              }}
            >
              Valletta
            </span>
          </div>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          style={{
            display: "flex",
            background: "none",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            gap: 5,
            padding: 8,
          }}
        >
          <span style={{ width: 24, height: 1.5, background: C.cream, display: "block" }} />
          <span style={{ width: 24, height: 1.5, background: C.cream, display: "block" }} />
          <span style={{ width: 16, height: 1.5, background: C.gold, display: "block" }} />
        </button>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              background: C.bg,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 32,
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{
                position: "absolute",
                top: 52,
                right: 24,
                background: "none",
                border: "none",
                color: C.cream,
                fontSize: 28,
                cursor: "pointer",
              }}
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
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: fontDisplay,
                    fontStyle: "italic",
                    fontSize: 32,
                    color: C.cream,
                    textDecoration: "none",
                  }}
                >
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
                  fontFamily: fontBody,
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "14px 36px",
                  background: C.gold,
                  color: C.bg,
                  textDecoration: "none",
                  display: "inline-block",
                  marginTop: 16,
                }}
              >
                Reserve a Table
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}

/* ━━━ FOOTER ━━━ */
function SiteFooter() {
  return (
    <footer
      style={{
        background: C.bg,
        borderTop: `1px solid ${C.border}`,
        padding: "60px 24px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 40,
          marginBottom: 48,
        }}
      >
        {/* Brand */}
        <div>
          <h3
            style={{
              fontFamily: fontDisplay,
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: 24,
              color: C.cream,
              margin: "0 0 12px",
            }}
          >
            Porto Valletta
          </h3>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: 14,
              lineHeight: 1.7,
              color: C.muted,
              margin: 0,
            }}
          >
            42 Strait Street
            <br />
            Valletta VLT 1432
            <br />
            Malta
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h4
            style={{
              fontFamily: fontBody,
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: C.gold,
              margin: "0 0 16px",
            }}
          >
            Navigate
          </h4>
          {[
            { label: "The Menu", href: "/demos/restaurant/menu" },
            { label: "Wine List", href: "/demos/restaurant/wine" },
            { label: "Private Dining", href: "/demos/restaurant/private" },
            { label: "Gift Cards", href: "#" },
            { label: "Careers", href: "#" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                display: "block",
                fontFamily: fontBody,
                fontSize: 14,
                color: "rgba(245,230,211,0.5)",
                textDecoration: "none",
                padding: "4px 0",
                transition: "color 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = C.cream;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "rgba(245,230,211,0.5)";
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hours */}
        <div>
          <h4
            style={{
              fontFamily: fontBody,
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: C.gold,
              margin: "0 0 16px",
            }}
          >
            Hours
          </h4>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: 14,
              lineHeight: 1.8,
              color: "rgba(245,230,211,0.5)",
              margin: 0,
            }}
          >
            Tue &ndash; Sat: 12:00 &ndash; 23:00
            <br />
            Sunday Brunch: 11:00 &ndash; 15:00
            <br />
            Monday: Closed
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontFamily: fontBody,
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: C.gold,
              margin: "0 0 16px",
            }}
          >
            Contact
          </h4>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: 14,
              lineHeight: 1.8,
              color: "rgba(245,230,211,0.5)",
              margin: 0,
            }}
          >
            +356 2124 5678
            <br />
            reservations@portovalletta.mt
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: `1px solid ${C.border}`,
          paddingTop: 24,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
        }}
      >
        <p
          style={{
            fontFamily: fontBody,
            fontSize: 13,
            color: "rgba(138,126,112,0.6)",
            margin: 0,
          }}
        >
          &copy; {new Date().getFullYear()} Porto Valletta. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: 20 }}>
          <Link
            href="/demos/restaurant/privacy"
            style={{
              fontFamily: fontBody,
              fontSize: 13,
              color: "rgba(138,126,112,0.4)",
              textDecoration: "none",
              transition: "color 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = C.muted;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "rgba(138,126,112,0.4)";
            }}
          >
            Privacy
          </Link>
          <Link
            href="/demos/restaurant/impressum"
            style={{
              fontFamily: fontBody,
              fontSize: 13,
              color: "rgba(138,126,112,0.4)",
              textDecoration: "none",
              transition: "color 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = C.muted;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "rgba(138,126,112,0.4)";
            }}
          >
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* ━━━ HOMEPAGE ━━━ */
export default function RestaurantPage() {
  const [reviewIdx, setReviewIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setReviewIdx((i) => (i + 1) % REVIEWS.length),
      6000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div
      style={{
        background: C.bg,
        color: C.cream,
        fontFamily: fontBody,
        overflowX: "hidden",
      }}
    >
      <DemoBanner />
      <NavHeader />

      {/* ════════ 1. HERO (100vh) ════════ */}
      <section
        style={{
          position: "relative",
          minHeight: "100svh",
          overflow: "hidden",
          paddingTop: 40,
        }}
      >
        <VideoHeroBg src="/videos/demo-restaurant.mp4" gradient="linear-gradient(to bottom, rgba(10,10,8,0.1) 0%, rgba(10,10,8,0.06) 35%, rgba(10,10,8,0.3) 65%, rgba(10,10,8,0.9) 92%)" startOpacity={0.75} />
        {/* content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "140px 24px 0",
          }}
        >
          <Reveal type="fade" delay={0.2}>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: 13,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: C.gold,
                marginBottom: 24,
              }}
            >
              Fine Dining &middot; Valletta
            </p>
          </Reveal>

          <Reveal type="fade" delay={0.5}>
            <h1
              style={{
                fontFamily: fontDisplay,
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: "clamp(48px, 8vw, 80px)",
                lineHeight: 1.05,
                color: C.cream,
                margin: 0,
              }}
            >
              Porto Valletta
            </h1>
          </Reveal>

          {/* gold divider animating */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{
              duration: 1.2,
              delay: 0.9,
              ease: [0.25, 0.1, 0.25, 1] as const,
            }}
            style={{
              height: 2,
              background: C.gold,
              margin: "28px auto",
            }}
          />

          <Reveal type="fade" delay={1.1}>
            <p
              style={{
                fontFamily: fontDisplay,
                fontStyle: "italic",
                fontSize: "clamp(16px, 2.5vw, 22px)",
                color: C.muted,
                maxWidth: 500,
                margin: "0 auto 40px",
              }}
            >
              Mediterranean soul. Maltese heart.
            </p>
          </Reveal>

          <Reveal type="fade" delay={1.4}>
            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Link href="/demos/restaurant/contact">
                <span
                  style={{
                    display: "inline-block",
                    padding: "14px 36px",
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
                  Reserve a Table
                </span>
              </Link>
              <Link href="/demos/restaurant/menu">
                <span
                  style={{
                    display: "inline-block",
                    padding: "14px 36px",
                    background: "transparent",
                    color: C.gold,
                    fontFamily: fontBody,
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    border: `1px solid ${C.gold}`,
                    cursor: "pointer",
                  }}
                >
                  Explore the Menu
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              color: C.muted,
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: 1,
              height: 40,
              background: `linear-gradient(to bottom, ${C.gold}, transparent)`,
            }}
          />
        </motion.div>
      </section>

      {/* ════════ 2. PHILOSOPHY ════════ */}
      <section style={{ background: C.bg }}>
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            padding: "120px 24px",
            textAlign: "center",
          }}
        >
          <Reveal type="slide-up">
            <p
              style={{
                fontFamily: fontBody,
                fontSize: 12,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: C.gold,
                marginBottom: 20,
              }}
            >
              Our Philosophy
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.15}>
            <h2
              style={{
                fontFamily: fontDisplay,
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: "clamp(24px, 3.5vw, 30px)",
                lineHeight: 1.5,
                color: C.cream,
                margin: "0 0 32px",
              }}
            >
              We don&apos;t just serve food. We compose experiences
              &mdash; weaving Mediterranean soul with Maltese tradition,
              one plate at a time.
            </h2>
          </Reveal>
          <Reveal type="fade" delay={0.3}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1] as const,
              }}
              style={{
                height: 2,
                background: C.gold,
                margin: "0 auto 32px",
              }}
            />
          </Reveal>
          <Reveal type="fade" delay={0.4}>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: 14,
                lineHeight: 1.9,
                color: C.muted,
                maxWidth: 560,
                margin: "0 auto",
              }}
            >
              Every ingredient is sourced with intention. From dawn-caught
              fish off the coast of Marsaxlokk to heritage grains from
              Gozo&apos;s sun-baked fields, we honour tradition while
              letting imagination lead.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ════════ 3. SIGNATURE DISHES ════════ */}
      <section style={{ background: C.surface, padding: "120px 0" }}>
        <div
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}
        >
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
              The Menu
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
              Signature Dishes
            </h2>
          </Reveal>
        </div>

        {/* horizontal scroll */}
        <style>{`
          .rest-dish-scroll::-webkit-scrollbar{display:none;}
        `}</style>
        <div
          className="rest-dish-scroll"
          style={{
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            display: "flex",
            gap: 24,
            padding: "0 max(24px, calc((100vw - 1200px) / 2))",
            scrollbarWidth: "none",
          }}
        >
          {DISHES.map((dish, i) => (
            <Reveal key={dish.name} type="fade" delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{
                  duration: 0.35,
                  ease: [0.25, 0.1, 0.25, 1] as const,
                }}
                style={{
                  scrollSnapAlign: "start",
                  minWidth: 300,
                  maxWidth: 320,
                  flex: "0 0 auto",
                  background: C.bg,
                  overflow: "hidden",
                  cursor: "pointer",
                  borderTop: "2px solid transparent",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    C.gold;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "transparent";
                }}
              >
                <div style={{ overflow: "hidden", height: 220 }}>
                  <img
                    src={dish.image}
                    alt={dish.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.5s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform =
                        "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform =
                        "scale(1)";
                    }}
                  />
                </div>
                <div style={{ padding: "24px 20px 28px" }}>
                  <h3
                    style={{
                      fontFamily: fontDisplay,
                      fontWeight: 600,
                      fontSize: 20,
                      color: C.cream,
                      margin: "0 0 8px",
                    }}
                  >
                    {dish.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: C.muted,
                      margin: "0 0 12px",
                    }}
                  >
                    {dish.desc}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: fontDisplay,
                        fontSize: 18,
                        fontWeight: 500,
                        color: C.gold,
                      }}
                    >
                      {dish.price}
                    </span>
                    <div style={{ display: "flex", gap: 6 }}>
                      {dish.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: fontBody,
                            fontSize: 10,
                            letterSpacing: "0.05em",
                            padding: "3px 8px",
                            border: `1px solid ${C.border}`,
                            color: C.muted,
                            borderRadius: 2,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════ 4. PARALLAX QUOTE ════════ */}
      <section
        style={{
          position: "relative",
          height: "60vh",
          minHeight: 400,
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
            backgroundImage: `url(${IMAGES.interior})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,10,8,0.75)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "0 24px",
            maxWidth: 700,
          }}
        >
          <Reveal type="fade">
            <div
              style={{
                fontFamily: fontDisplay,
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: "clamp(32px, 5vw, 48px)",
                lineHeight: 1.25,
                color: C.cream,
                marginBottom: 20,
              }}
            >
              Every plate is a canvas.
            </div>
          </Reveal>
          <Reveal type="fade" delay={0.3}>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: 16,
                letterSpacing: "0.1em",
                color: C.gold,
                margin: 0,
              }}
            >
              &mdash; Chef Marco Azzopardi
            </p>
          </Reveal>
        </div>
      </section>

      {/* ════════ 5. REVIEWS ════════ */}
      <section style={{ background: C.bg }}>
        <div
          style={{
            padding: "120px 24px",
            maxWidth: 1200,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Reveal type="slide-up">
            <p
              style={{
                fontFamily: fontBody,
                fontSize: 12,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: C.gold,
                marginBottom: 16,
              }}
            >
              Press &amp; Praise
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.1}>
            <h2
              style={{
                fontFamily: fontDisplay,
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: "clamp(32px, 5vw, 44px)",
                color: C.cream,
                margin: "0 0 60px",
              }}
            >
              What They Say
            </h2>
          </Reveal>

          <div
            style={{
              position: "relative",
              minHeight: 220,
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            {/* gold decorative quote mark */}
            <div
              style={{
                fontFamily: fontDisplay,
                fontSize: 120,
                lineHeight: 1,
                color: "rgba(201,147,90,0.12)",
                position: "absolute",
                top: -30,
                left: "50%",
                transform: "translateX(-50%)",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={reviewIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1] as const,
                }}
              >
                {/* stars */}
                <div style={{ marginBottom: 20 }}>
                  {Array.from({
                    length: REVIEWS[reviewIdx].stars,
                  }).map((_, s) => (
                    <span
                      key={s}
                      style={{
                        color: C.gold,
                        fontSize: 18,
                        margin: "0 2px",
                      }}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: fontDisplay,
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(20px, 3vw, 26px)",
                    lineHeight: 1.5,
                    color: C.cream,
                    margin: "0 0 28px",
                  }}
                >
                  &ldquo;{REVIEWS[reviewIdx].text}&rdquo;
                </p>
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: 14,
                    color: C.muted,
                    margin: 0,
                  }}
                >
                  <span style={{ color: C.cream, fontWeight: 500 }}>
                    {REVIEWS[reviewIdx].author}
                  </span>{" "}
                  &mdash; {REVIEWS[reviewIdx].role}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* dots */}
            <div
              style={{
                display: "flex",
                gap: 8,
                justifyContent: "center",
                marginTop: 40,
              }}
            >
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setReviewIdx(i)}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background:
                      i === reviewIdx
                        ? C.gold
                        : "rgba(201,147,90,0.25)",
                    border: "none",
                    cursor: "pointer",
                    transition: "background 0.3s",
                  }}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ 6. RESERVATION CTA ════════ */}
      <section style={{ background: C.surface }}>
        <style>{`
          .rest-reserve-grid{display:grid;grid-template-columns:1fr;gap:0;}
          @media(min-width:768px){.rest-reserve-grid{grid-template-columns:1fr 1fr;}}
        `}</style>
        <div className="rest-reserve-grid">
          {/* left: image */}
          <div
            style={{
              position: "relative",
              minHeight: 400,
              backgroundImage: `url(${IMAGES.entrance})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, transparent 60%, rgba(18,18,16,1) 100%)",
              }}
            />
          </div>

          {/* right: info */}
          <div
            style={{
              padding: "80px 48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Reveal type="slide-right">
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: 12,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: C.gold,
                  marginBottom: 16,
                }}
              >
                Reservations
              </p>
            </Reveal>
            <Reveal type="slide-right" delay={0.1}>
              <h2
                style={{
                  fontFamily: fontDisplay,
                  fontStyle: "italic",
                  fontWeight: 500,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  color: C.cream,
                  margin: "0 0 32px",
                }}
              >
                Join Us for an Evening
              </h2>
            </Reveal>

            <Reveal type="slide-right" delay={0.2}>
              <div style={{ marginBottom: 32 }}>
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: 15,
                    color: C.muted,
                    margin: "0 0 6px",
                  }}
                >
                  <span style={{ color: C.cream, fontWeight: 500 }}>
                    Tuesday &ndash; Saturday
                  </span>
                </p>
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: 14,
                    color: C.muted,
                    margin: "0 0 4px",
                  }}
                >
                  Lunch: 12:00 &ndash; 14:30
                </p>
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: 14,
                    color: C.muted,
                    margin: "0 0 20px",
                  }}
                >
                  Dinner: 19:00 &ndash; 23:00
                </p>
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: 15,
                    color: C.muted,
                    margin: "0 0 6px",
                  }}
                >
                  <span style={{ color: C.cream, fontWeight: 500 }}>
                    Sunday
                  </span>
                </p>
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: 14,
                    color: C.muted,
                    margin: "0 0 4px",
                  }}
                >
                  Brunch: 11:00 &ndash; 15:00
                </p>
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: 14,
                    color: C.muted,
                    margin: 0,
                  }}
                >
                  Closed Mondays
                </p>
              </div>
            </Reveal>

            <Reveal type="slide-right" delay={0.3}>
              <Link href="/demos/restaurant/contact">
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
                  Book a Table
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════ 7. INSTAGRAM ════════ */}
      <section style={{ background: C.bg, padding: "120px 0 0" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px 60px",
            textAlign: "center",
          }}
        >
          <Reveal type="slide-up">
            <p
              style={{
                fontFamily: fontBody,
                fontSize: 12,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: C.gold,
                marginBottom: 16,
              }}
            >
              Follow Us
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.1}>
            <h2
              style={{
                fontFamily: fontDisplay,
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: "clamp(28px, 4vw, 40px)",
                color: C.cream,
                margin: "0 0 8px",
              }}
            >
              @portovalletta
            </h2>
          </Reveal>
        </div>

        <style>{`
          .rest-insta-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:0;}
          @media(max-width:767px){.rest-insta-grid{grid-template-columns:repeat(3,1fr);}}
          @media(max-width:479px){.rest-insta-grid{grid-template-columns:repeat(2,1fr);}}
        `}</style>
        <div className="rest-insta-grid">
          {INSTA.map((src, i) => (
            <Reveal key={i} type="fade" delay={i * 0.06}>
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <img
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  style={{
                    width: "100%",
                    aspectRatio: "1/1",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "scale(1.05)";
                    const overlay = (e.currentTarget as HTMLElement)
                      .nextElementSibling as HTMLElement;
                    if (overlay) overlay.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "scale(1)";
                    const overlay = (e.currentTarget as HTMLElement)
                      .nextElementSibling as HTMLElement;
                    if (overlay) overlay.style.opacity = "0";
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(201,147,90,0.3)",
                    opacity: 0,
                    transition: "opacity 0.4s",
                    pointerEvents: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: fontBody,
                      fontSize: 20,
                      color: "#fff",
                    }}
                  >
                    &#9825;
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
