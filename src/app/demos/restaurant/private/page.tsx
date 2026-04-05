"use client";

import { motion } from "framer-motion";
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

/* ─── font stacks ─── */
const fontDisplay = "var(--font-heading), 'Playfair Display', Georgia, serif";
const fontBody = "var(--font-body), 'DM Sans', system-ui, sans-serif";

/* ─── unsplash helper ─── */
const img = (id: string, w = 800, q = 80) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

/* ─── nav links ─── */
const NAV_LINKS = [
  { label: "Home", href: "/demos/restaurant" },
  { label: "Menu", href: "/demos/restaurant/menu" },
  { label: "Wine", href: "/demos/restaurant/wine" },
  { label: "Gallery", href: "/demos/restaurant/gallery" },
  { label: "Private Dining", href: "/demos/restaurant/private" },
  { label: "About", href: "/demos/restaurant/about" },
  { label: "Contact", href: "/demos/restaurant/contact" },
];

/* ─── spaces ─── */
const SPACES = [
  {
    name: "The Vault",
    capacity: "8\u201312 guests",
    minSpend: "\u20AC600",
    description: "An intimate stone-walled cellar beneath Strait Street, ideal for private celebrations and tastings. Candlelit ambience with a curated wine wall.",
    image: img("photo-1559329007-40df8a9345d8", 800, 80),
  },
  {
    name: "The Terrace",
    capacity: "20\u201330 guests",
    minSpend: "\u20AC1,200",
    description: "Our open-air rooftop terrace overlooking the Grand Harbour. Lantern-lit evenings with panoramic views of the Three Cities and Fort St Angelo.",
    image: img("photo-1517248135467-4c7edcad34c4", 800, 80),
  },
  {
    name: "Full Buyout",
    capacity: "Up to 60 guests",
    minSpend: "\u20AC3,000",
    description: "Exclusive use of the entire restaurant for the evening. Your event, your rules. Complete creative control over menu, music, and flow.",
    image: img("photo-1414235077428-338989a2e8c0", 800, 80),
  },
];

/* ─── included items ─── */
const INCLUDED = [
  "Custom tasting menu designed with your chef",
  "Dedicated sommelier for wine pairing",
  "Private service team for the evening",
  "Bespoke table settings and floral arrangements",
  "Curated playlist or live acoustic set",
];

/* ─── event types ─── */
const EVENT_TYPES = "Celebrations \u00b7 Corporate \u00b7 Wine tastings \u00b7 Weddings \u00b7 Birthdays \u00b7 Anniversaries";

/* ━━━ PAGE COMPONENT ━━━ */
export default function PrivateDiningPage() {
  return (
    <div style={{ background: C.bg, color: C.cream, fontFamily: fontBody, overflowX: "hidden", paddingTop: 40 }}>
      <DemoBanner />

      {/* ─── Navigation Header ─── */}
      <header style={{
        position: "fixed", top: 40, left: 0, right: 0, zIndex: 50,
        background: "transparent",
        borderBottom: "none",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 64,
        }}>
          <a href="/demos/restaurant" style={{ textDecoration: "none" }}>
            <span style={{
              fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 600,
              fontSize: 22, color: C.cream,
            }}>
              Porto Valletta
            </span>
          </a>
          <style>{`
            .rest-nav-links{display:none;gap:28px;align-items:center;}
            @media(min-width:768px){.rest-nav-links{display:flex;}}
          `}</style>
          <nav className="rest-nav-links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: fontBody, fontSize: 13, letterSpacing: "0.06em",
                  textTransform: "uppercase", textDecoration: "none",
                  color: link.href === "/demos/restaurant/private" ? C.gold : C.muted,
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.cream; }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    link.href === "/demos/restaurant/private" ? C.gold : C.muted;
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ─── Hero Section ─── */}
      <section style={{
        position: "relative", minHeight: "70vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        {/* background image */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          style={{
            position: "absolute", inset: 0,
            backgroundImage: `url(https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?w=1920&q=85&auto=format&fit=crop)`,
            backgroundSize: "cover", backgroundPosition: "center",
          }}
        />
        {/* dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(10,10,8,0.6) 0%, rgba(10,10,8,0.8) 60%, rgba(10,10,8,0.98) 100%)",
        }} />
        {/* content */}
        <div style={{
          position: "relative", zIndex: 2, textAlign: "center",
          padding: "160px 24px 100px",
        }}>
          <Reveal type="fade" delay={0.2}>
            <p style={{
              fontFamily: fontBody, fontSize: 12, letterSpacing: "0.35em",
              textTransform: "uppercase", color: C.gold, marginBottom: 20,
            }}>
              Private Events
            </p>
          </Reveal>
          <Reveal type="fade" delay={0.4}>
            <h1 style={{
              fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 500,
              fontSize: 48, lineHeight: 1.15, color: C.cream, margin: "0 0 24px",
            }}>
              Your Occasion. Our Stage.
            </h1>
          </Reveal>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 50 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ height: 2, background: C.gold, margin: "0 auto" }}
          />
        </div>
      </section>

      {/* ─── Spaces Section ─── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
        <Reveal type="slide-up">
          <p style={{
            fontFamily: fontBody, fontSize: 12, letterSpacing: "0.3em",
            textTransform: "uppercase", color: C.gold, marginBottom: 16, textAlign: "center",
          }}>
            Our Spaces
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h2 style={{
            fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 500,
            fontSize: "clamp(28px, 4vw, 40px)", textAlign: "center", color: C.cream,
            margin: "0 0 60px",
          }}>
            Three Settings, Endless Possibilities
          </h2>
        </Reveal>

        <style>{`
          .rest-spaces-grid{display:grid;grid-template-columns:1fr;gap:32px;}
          @media(min-width:768px){.rest-spaces-grid{grid-template-columns:repeat(3,1fr);}}
        `}</style>
        <div className="rest-spaces-grid">
          {SPACES.map((space, i) => (
            <Reveal key={space.name} type="fade" delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  position: "relative", overflow: "hidden",
                  background: C.surface, height: "100%",
                  display: "flex", flexDirection: "column",
                }}
              >
                {/* image with overlay */}
                <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                  <img
                    src={space.image}
                    alt={space.name}
                    style={{
                      width: "100%", height: "100%", objectFit: "cover", display: "block",
                      transition: "transform 0.5s cubic-bezier(0.25,0.1,0.25,1)",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(10,10,8,0.7) 0%, transparent 60%)",
                  }} />
                  {/* capacity badge */}
                  <span style={{
                    position: "absolute", bottom: 16, left: 20,
                    fontFamily: fontBody, fontSize: 12, letterSpacing: "0.1em",
                    color: C.gold, textTransform: "uppercase",
                  }}>
                    {space.capacity}
                  </span>
                </div>

                {/* text content */}
                <div style={{ padding: "24px 20px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{
                    fontFamily: fontDisplay, fontWeight: 600, fontSize: 24,
                    color: C.cream, margin: "0 0 12px",
                  }}>
                    {space.name}
                  </h3>
                  <p style={{
                    fontFamily: fontBody, fontSize: 14, lineHeight: 1.7,
                    color: C.muted, margin: "0 0 20px", flex: 1,
                  }}>
                    {space.description}
                  </p>
                  <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    borderTop: `1px solid ${C.border}`, paddingTop: 16,
                  }}>
                    <span style={{
                      fontFamily: fontBody, fontSize: 13, color: C.muted,
                    }}>
                      Min. spend: <span style={{ color: C.gold, fontWeight: 500 }}>{space.minSpend}</span>
                    </span>
                    <a
                      href="/demos/restaurant/contact"
                      style={{
                        fontFamily: fontBody, fontSize: 13, letterSpacing: "0.08em",
                        textTransform: "uppercase", textDecoration: "none",
                        color: C.gold, transition: "color 0.25s",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.cream; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = C.gold; }}
                    >
                      Enquire &rarr;
                    </a>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── What's Included ─── */}
      <section style={{ background: C.surface }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "100px 24px", textAlign: "center" }}>
          <Reveal type="slide-up">
            <p style={{
              fontFamily: fontBody, fontSize: 12, letterSpacing: "0.3em",
              textTransform: "uppercase", color: C.gold, marginBottom: 16,
            }}>
              Every Event Includes
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.1}>
            <h2 style={{
              fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 500,
              fontSize: "clamp(28px, 4vw, 36px)", color: C.cream,
              margin: "0 0 48px",
            }}>
              What&apos;s Included
            </h2>
          </Reveal>

          <div style={{ textAlign: "left", maxWidth: 520, margin: "0 auto" }}>
            {INCLUDED.map((item, i) => (
              <Reveal key={item} type="slide-up" delay={0.15 + i * 0.08}>
                <div style={{
                  display: "flex", alignItems: "flex-start", gap: 16,
                  padding: "14px 0",
                  borderBottom: i < INCLUDED.length - 1 ? `1px solid ${C.border}` : "none",
                }}>
                  <span style={{
                    flexShrink: 0, width: 8, height: 8, marginTop: 6,
                    background: C.gold, borderRadius: "50%",
                  }} />
                  <p style={{
                    fontFamily: fontBody, fontSize: 15, lineHeight: 1.6,
                    color: C.cream, margin: 0, opacity: 0.85,
                  }}>
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Event Types ─── */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <Reveal type="fade">
          <p style={{
            fontFamily: fontBody, fontSize: 12, letterSpacing: "0.3em",
            textTransform: "uppercase", color: C.gold, marginBottom: 20,
          }}>
            We Host
          </p>
        </Reveal>
        <Reveal type="fade" delay={0.15}>
          <p style={{
            fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 400,
            fontSize: "clamp(18px, 3vw, 24px)", lineHeight: 1.6,
            color: C.muted, margin: 0,
          }}>
            {EVENT_TYPES}
          </p>
        </Reveal>
      </section>

      {/* ─── CTA Section ─── */}
      <section style={{
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{
          maxWidth: 700, margin: "0 auto", padding: "100px 24px",
          textAlign: "center",
        }}>
          <Reveal type="slide-up">
            <h2 style={{
              fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 500,
              fontSize: "clamp(28px, 4vw, 40px)", color: C.cream,
              margin: "0 0 16px",
            }}>
              Tell Us About Your Event
            </h2>
          </Reveal>
          <Reveal type="slide-up" delay={0.15}>
            <p style={{
              fontFamily: fontBody, fontSize: 16, lineHeight: 1.7,
              color: C.muted, margin: "0 0 36px", maxWidth: 480, marginLeft: "auto", marginRight: "auto",
            }}>
              Share a few details and our events team will craft a bespoke proposal within 48 hours.
            </p>
          </Reveal>
          <Reveal type="fade" delay={0.3}>
            <MagneticButton href="/demos/restaurant/contact">
              <span style={{
                display: "inline-block", padding: "14px 40px",
                background: C.gold, color: C.bg, fontFamily: fontBody,
                fontSize: 14, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                border: "none", cursor: "pointer",
              }}>
                Get in Touch
              </span>
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer style={{
        background: C.bg,
        borderTop: "1px solid rgba(201,147,90,0.1)",
        padding: "60px 24px 40px",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 40, marginBottom: 48,
        }}>
          {/* brand */}
          <div>
            <h3 style={{
              fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 600,
              fontSize: 24, color: C.cream, margin: "0 0 12px",
            }}>
              Porto Valletta
            </h3>
            <p style={{ fontFamily: fontBody, fontSize: 14, lineHeight: 1.7, color: C.muted, margin: 0 }}>
              42 Strait Street<br />
              Valletta VLT 1432<br />
              Malta
            </p>
          </div>

          {/* nav */}
          <div>
            <h4 style={{
              fontFamily: fontBody, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase",
              color: C.gold, margin: "0 0 16px",
            }}>
              Navigate
            </h4>
            {["The Menu", "Wine List", "Private Dining", "Gift Cards", "Careers"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  display: "block", fontFamily: fontBody, fontSize: 14,
                  color: C.muted, textDecoration: "none", padding: "4px 0",
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.cream; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = C.muted; }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* hours */}
          <div>
            <h4 style={{
              fontFamily: fontBody, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase",
              color: C.gold, margin: "0 0 16px",
            }}>
              Hours
            </h4>
            <p style={{ fontFamily: fontBody, fontSize: 14, lineHeight: 1.8, color: C.muted, margin: 0 }}>
              Tue &ndash; Sat: 12:00 &ndash; 23:00<br />
              Sunday Brunch: 11:00 &ndash; 15:00<br />
              Monday: Closed
            </p>
          </div>

          {/* contact */}
          <div>
            <h4 style={{
              fontFamily: fontBody, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase",
              color: C.gold, margin: "0 0 16px",
            }}>
              Contact
            </h4>
            <p style={{ fontFamily: fontBody, fontSize: 14, lineHeight: 1.8, color: C.muted, margin: 0 }}>
              +356 2124 5678<br />
              reservations@portovalletta.mt
            </p>
          </div>
        </div>

        {/* bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(201,147,90,0.08)",
          paddingTop: 24,
          display: "flex", flexWrap: "wrap", justifyContent: "space-between",
          alignItems: "center", gap: 12,
        }}>
          <p style={{
            fontFamily: fontBody, fontSize: 13, color: "rgba(138,126,112,0.6)", margin: 0,
          }}>
            &copy; {new Date().getFullYear()} Porto Valletta. All rights reserved.
          </p>
          <p style={{
            fontFamily: fontBody, fontSize: 13, color: "rgba(138,126,112,0.4)", margin: 0,
          }}>
            Site by <a href="https://amenzo.co" target="_blank" rel="noopener noreferrer" style={{ color: C.gold, textDecoration: "none" }}>Amenzo</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
