"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/demos/Reveal";
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

/* ─── nav links ─── */
const NAV_LINKS = [
  { label: "Menu", href: "/demos/restaurant/menu" },
  { label: "Wine", href: "/demos/restaurant/wine" },
  { label: "Gallery", href: "/demos/restaurant/gallery" },
  { label: "Private Events", href: "/demos/restaurant/private" },
  { label: "About", href: "/demos/restaurant/about" },
];

/* ─── menu tabs ─── */
const TABS = [
  "STARTERS",
  "MAINS",
  "PASTA & RISOTTO",
  "DESSERTS",
  "TASTING MENU",
] as const;
type Tab = (typeof TABS)[number];

/* ─── dish type ─── */
interface Dish {
  name: string;
  desc: string;
  price: string;
  tags?: string[];
}

/* ─── menu data ─── */
const MENU: Record<Tab, Dish[]> = {
  STARTERS: [
    { name: "Yellowfin Tuna Tartare", desc: "Avocado mousse, yuzu gel, sesame tuile, shiso leaf", price: "\u20AC24", tags: ["GF"] },
    { name: "Burrata & Heirloom Tomato", desc: "Aged balsamic reduction, basil oil, focaccia crisp", price: "\u20AC22", tags: ["V"] },
    { name: "Seared Foie Gras", desc: "Brioche toast, fig compote, port wine reduction", price: "\u20AC28" },
    { name: "Maltese Ftira Bruschetta", desc: "Sundried tomatoes, capers, fresh ricotta, kunserva", price: "\u20AC18", tags: ["V"] },
    { name: "Beef Carpaccio", desc: "Black truffle, rocket, parmesan shavings, lemon oil", price: "\u20AC26", tags: ["GF"] },
    { name: "Soup of the Day", desc: "Chef's seasonal selection, artisan bread", price: "\u20AC16", tags: ["V"] },
    { name: "Octopus a la Plancha", desc: "Romesco sauce, fingerling potatoes, smoked paprika", price: "\u20AC27", tags: ["GF"] },
    { name: "Crab & Prawn Bisque", desc: "Cognac cream, micro herbs, grissini", price: "\u20AC22", tags: ["GF"] },
  ],
  MAINS: [
    { name: "Seared Sea Bass", desc: "Fennel puree, saffron beurre blanc, micro herbs", price: "\u20AC38", tags: ["GF"] },
    { name: "Dry-Aged Ribeye 300g", desc: "Bone marrow butter, charred leek, red wine jus", price: "\u20AC52", tags: ["GF"] },
    { name: "Lobster Thermidor", desc: "Cognac cream, gruyere gratin, baby spinach", price: "\u20AC56" },
    { name: "Duck Breast", desc: "Cherry gastrique, fondant potato, root vegetables", price: "\u20AC42", tags: ["GF"] },
    { name: "Lamb Rack", desc: "Herb crust, ratatouille, rosemary jus", price: "\u20AC48", tags: ["GF"] },
    { name: "Pan-Roasted Monkfish", desc: "Saffron risotto, chorizo crumble, pea shoots", price: "\u20AC44" },
    { name: "Wagyu Burger", desc: "Truffle aioli, aged cheddar, brioche bun, hand-cut fries", price: "\u20AC34" },
    { name: "Vegan Mushroom Wellington", desc: "Wild mushroom duxelles, spinach, truffle cream", price: "\u20AC32", tags: ["V"] },
  ],
  "PASTA & RISOTTO": [
    { name: "Black Truffle Risotto", desc: "Carnaroli rice, aged parmesan, truffle shavings", price: "\u20AC36", tags: ["V"] },
    { name: "Lobster Linguine", desc: "Cherry tomato, chilli, garlic, white wine", price: "\u20AC42" },
    { name: "Cacio e Pepe", desc: "Handmade tonnarelli, Pecorino Romano, black pepper", price: "\u20AC24", tags: ["V"] },
    { name: "Squid Ink Tagliatelle", desc: "Seafood ragout, saffron emulsion, bottarga", price: "\u20AC34" },
    { name: "Porcini Ravioli", desc: "Sage brown butter, toasted pine nuts, parmesan", price: "\u20AC28", tags: ["V"] },
    { name: "Saffron Risotto ai Frutti di Mare", desc: "Prawns, mussels, clams, calamari, white wine", price: "\u20AC40" },
  ],
  DESSERTS: [
    { name: "Tiramisu Deconstructed", desc: "Espresso foam, mascarpone cloud, cocoa tuile", price: "\u20AC18", tags: ["V"] },
    { name: "Dark Chocolate Fondant", desc: "Salted caramel centre, vanilla bean gelato", price: "\u20AC20", tags: ["V"] },
    { name: "Pistachio Panna Cotta", desc: "Raspberry coulis, candied pistachios, micro basil", price: "\u20AC16", tags: ["V", "GF"] },
    { name: "Lemon Posset", desc: "Shortbread crumble, blueberry compote, meringue", price: "\u20AC15", tags: ["V"] },
    { name: "Selection of Artisan Cheeses", desc: "Quince paste, honeycomb, oat crackers", price: "\u20AC22" },
    { name: "Seasonal Sorbet Trio", desc: "Chef's selection of house-churned sorbets", price: "\u20AC14", tags: ["V", "GF"] },
  ],
  "TASTING MENU": [],
};

/* ─── unsplash helper ─── */
const img = (id: string, w = 800, q = 80) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

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
                textTransform: "uppercase", color: link.href === "/demos/restaurant/menu" ? C.cream : "rgba(245,230,211,0.6)",
                textDecoration: "none", transition: "color 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.cream; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = link.href === "/demos/restaurant/menu" ? C.cream : "rgba(245,230,211,0.6)"; }}
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

/* ━━━ DISH ROW COMPONENT ━━━ */
function DishRow({ dish, index }: { dish: Dish; index: number }) {
  return (
    <Reveal type="fade" delay={index * 0.05}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 24,
          padding: "24px 0",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <h3
              style={{
                fontFamily: fontDisplay,
                fontWeight: 500,
                fontSize: 18,
                color: C.cream,
                margin: 0,
              }}
            >
              {dish.name}
            </h3>
            {dish.tags?.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: fontBody,
                  fontSize: 10,
                  letterSpacing: "0.05em",
                  padding: "2px 8px",
                  border: `1px solid ${C.border}`,
                  color: C.muted,
                  borderRadius: 2,
                  lineHeight: "16px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: 12,
              fontStyle: "italic",
              lineHeight: 1.6,
              color: "rgba(245,230,211,0.4)",
              margin: 0,
            }}
          >
            {dish.desc}
          </p>
        </div>
        <span
          style={{
            fontFamily: fontDisplay,
            fontSize: 18,
            fontWeight: 500,
            color: C.gold,
            whiteSpace: "nowrap",
            paddingTop: 2,
          }}
        >
          {dish.price}
        </span>
      </div>
    </Reveal>
  );
}

/* ━━━ MENU PAGE ━━━ */
export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<Tab>("STARTERS");

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

      {/* Hero banner */}
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
            backgroundImage: `url(${img("photo-1414235077428-338989a2e8c0", 1920, 85)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(10,10,8,0.6) 0%, rgba(10,10,8,0.9) 100%)",
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
              Porto Valletta
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
              The Menu
            </h1>
          </Reveal>
          <Reveal type="fade" delay={0.6}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
              style={{ height: 2, background: C.gold, margin: "0 auto" }}
            />
          </Reveal>
        </div>
      </section>

      {/* Tabs + Content */}
      <section style={{ background: C.bg }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px 120px" }}>
          {/* Tab navigation */}
          <div
            style={{
              display: "flex",
              gap: 0,
              borderBottom: `1px solid ${C.border}`,
              marginBottom: 48,
              overflowX: "auto",
              scrollbarWidth: "none",
            }}
          >
            <style>{`.rest-tabs::-webkit-scrollbar{display:none;}`}</style>
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  fontFamily: fontBody,
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: activeTab === tab ? C.gold : C.muted,
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === tab ? `2px solid ${C.gold}` : "2px solid transparent",
                  padding: "16px 20px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "color 0.25s, border-color 0.25s",
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab) (e.currentTarget as HTMLElement).style.color = C.cream;
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab) (e.currentTarget as HTMLElement).style.color = C.muted;
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const }}
            >
              {activeTab === "TASTING MENU" ? (
                /* Tasting Menu Card */
                <div
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    padding: "48px 40px",
                    textAlign: "center",
                  }}
                >
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
                    Chef&apos;s Selection
                  </p>
                  <h2
                    style={{
                      fontFamily: fontDisplay,
                      fontStyle: "italic",
                      fontWeight: 600,
                      fontSize: "clamp(28px, 4vw, 40px)",
                      color: C.cream,
                      margin: "0 0 12px",
                    }}
                  >
                    THE JOURNEY
                  </h2>
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: 14,
                      color: C.muted,
                      margin: "0 0 40px",
                    }}
                  >
                    A seven-course odyssey through the Mediterranean
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
                    style={{ height: 2, background: C.gold, margin: "0 auto 40px" }}
                  />

                  {[
                    { course: "I", name: "Amuse-Bouche", desc: "Chef's daily inspiration" },
                    { course: "II", name: "Ocean", desc: "Yellowfin tuna, citrus, avocado" },
                    { course: "III", name: "Garden", desc: "Heirloom vegetables, black truffle" },
                    { course: "IV", name: "Intermezzo", desc: "Champagne & elderflower granita" },
                    { course: "V", name: "Land", desc: "Wagyu beef, seasonal accompaniment" },
                    { course: "VI", name: "Cheese", desc: "Selection of European artisan cheeses" },
                    { course: "VII", name: "Sweet", desc: "Chef's dessert creation" },
                  ].map((item, i) => (
                    <Reveal key={item.course} type="fade" delay={i * 0.08}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 20,
                          padding: "16px 0",
                          borderBottom: i < 6 ? `1px solid ${C.border}` : "none",
                          textAlign: "left",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: fontDisplay,
                            fontStyle: "italic",
                            fontSize: 14,
                            color: C.gold,
                            minWidth: 28,
                          }}
                        >
                          {item.course}
                        </span>
                        <div>
                          <h4
                            style={{
                              fontFamily: fontDisplay,
                              fontWeight: 500,
                              fontSize: 16,
                              color: C.cream,
                              margin: "0 0 4px",
                            }}
                          >
                            {item.name}
                          </h4>
                          <p
                            style={{
                              fontFamily: fontBody,
                              fontSize: 12,
                              fontStyle: "italic",
                              color: "rgba(245,230,211,0.4)",
                              margin: 0,
                            }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}

                  <div style={{ marginTop: 48, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32 }}>
                    <div>
                      <span style={{ fontFamily: fontDisplay, fontSize: 32, fontWeight: 600, color: C.gold }}>&euro;120</span>
                      <p style={{ fontFamily: fontBody, fontSize: 12, color: C.muted, margin: "4px 0 0" }}>per person</p>
                    </div>
                    <div>
                      <span style={{ fontFamily: fontDisplay, fontSize: 32, fontWeight: 600, color: C.gold }}>&euro;185</span>
                      <p style={{ fontFamily: fontBody, fontSize: 12, color: C.muted, margin: "4px 0 0" }}>with wine pairing</p>
                    </div>
                  </div>

                  <div style={{ marginTop: 40 }}>
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
                        Reserve the Journey
                      </span>
                    </Link>
                  </div>
                </div>
              ) : (
                /* Regular menu items */
                <div>
                  {MENU[activeTab].map((dish, i) => (
                    <DishRow key={dish.name} dish={dish} index={i} />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Note */}
          <Reveal type="fade" delay={0.2}>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: 12,
                fontStyle: "italic",
                color: "rgba(245,230,211,0.3)",
                textAlign: "center",
                marginTop: 60,
                lineHeight: 1.8,
              }}
            >
              V &mdash; Vegetarian &ensp; GF &mdash; Gluten Free
              <br />
              Please inform your server of any allergies or dietary requirements.
              <br />
              All prices include VAT. A discretionary 10% service charge applies to parties of 6+.
            </p>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
