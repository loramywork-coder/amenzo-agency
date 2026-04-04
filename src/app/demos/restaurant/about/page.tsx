"use client";

import { motion } from "framer-motion";
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

/* ─── font stacks ─── */
const fontDisplay = "var(--font-heading), 'Playfair Display', Georgia, serif";
const fontBody = "var(--font-body), 'DM Sans', system-ui, sans-serif";

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

/* ─── team members ─── */
const TEAM = [
  {
    name: "Elena Farrugia",
    role: "Pastry Chef",
    initials: "EF",
    bio: "Trained at Le Cordon Bleu, Elena brings Maltese citrus and Gozitan honey into desserts that surprise and delight.",
  },
  {
    name: "David Muscat",
    role: "Sommelier",
    initials: "DM",
    bio: "With a cellar spanning 240 labels, David curates pairings that elevate every course into a complete sensory journey.",
  },
  {
    name: "Sophie Camilleri",
    role: "Restaurant Manager",
    initials: "SC",
    bio: "Sophie orchestrates every evening with invisible precision, ensuring each guest feels like the only one in the room.",
  },
];

/* ━━━ PAGE COMPONENT ━━━ */
export default function AboutPage() {
  return (
    <div style={{ background: C.bg, color: C.cream, fontFamily: fontBody, overflowX: "hidden", paddingTop: 40 }}>
      <DemoBanner />

      {/* ─── Navigation Header ─── */}
      <header style={{
        position: "fixed", top: 40, left: 0, right: 0, zIndex: 50,
        background: "rgba(10,10,8,0.92)", backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${C.border}`,
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
                  color: link.href === "/demos/restaurant/about" ? C.gold : C.muted,
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.cream; }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    link.href === "/demos/restaurant/about" ? C.gold : C.muted;
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
        paddingTop: 160, paddingBottom: 80,
        textAlign: "center", padding: "160px 24px 80px",
      }}>
        <Reveal type="fade" delay={0.2}>
          <p style={{
            fontFamily: fontBody, fontSize: 12, letterSpacing: "0.35em",
            textTransform: "uppercase", color: C.gold, marginBottom: 20,
          }}>
            The People
          </p>
        </Reveal>
        <Reveal type="fade" delay={0.4}>
          <h1 style={{
            fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 500,
            fontSize: 48, lineHeight: 1.15, color: C.cream, margin: 0,
          }}>
            Behind Every Dish
          </h1>
        </Reveal>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 50 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ height: 2, background: C.gold, margin: "28px auto 0" }}
        />
      </section>

      {/* ─── Chef Bio ─── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px 120px" }}>
        <style>{`
          .rest-chef-grid{display:grid;grid-template-columns:1fr;gap:60px;align-items:center;}
          @media(min-width:768px){.rest-chef-grid{grid-template-columns:1fr 1fr;}}
        `}</style>
        <div className="rest-chef-grid">
          {/* portrait */}
          <Reveal type="fade" delay={0.2}>
            <div style={{
              position: "relative", overflow: "hidden",
              aspectRatio: "3/4", maxHeight: 560,
            }}>
              <motion.img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80&auto=format&fit=crop"
                alt="Chef Marco Azzopardi"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <div style={{
                position: "absolute", inset: 0,
                border: "1px solid rgba(201,147,90,0.15)",
                pointerEvents: "none",
              }} />
            </div>
          </Reveal>

          {/* bio text */}
          <div>
            <Reveal type="slide-up">
              <h2 style={{
                fontFamily: fontDisplay, fontWeight: 600,
                fontSize: 32, color: C.cream, margin: "0 0 8px",
              }}>
                Chef Marco Azzopardi
              </h2>
            </Reveal>
            <Reveal type="slide-up" delay={0.1}>
              <p style={{
                fontFamily: fontBody, fontSize: 14, letterSpacing: "0.1em",
                textTransform: "uppercase", color: C.gold, margin: "0 0 28px",
              }}>
                Head Chef &amp; Co-Founder
              </p>
            </Reveal>

            <Reveal type="slide-up" delay={0.2}>
              <p style={{
                fontFamily: fontBody, fontSize: 16, lineHeight: 1.8,
                color: C.muted, margin: "0 0 20px", maxWidth: 520,
              }}>
                Marco grew up in the fishing village of Marsaxlokk, where the rhythms of the
                sea dictated what appeared on his grandmother&apos;s table each evening. Those
                early years shaped an unshakable belief: the ingredient comes first, always.
              </p>
            </Reveal>

            <Reveal type="slide-up" delay={0.3}>
              <p style={{
                fontFamily: fontBody, fontSize: 16, lineHeight: 1.8,
                color: C.muted, margin: "0 0 20px", maxWidth: 520,
              }}>
                After training under Massimo Bottura in Modena and spending four years
                leading the pass at a Michelin-starred kitchen in London&apos;s Mayfair, Marco
                felt the pull of home. He returned to Malta with refined technique but the
                same deep reverence for the island&apos;s raw, sun-drenched produce.
              </p>
            </Reveal>

            <Reveal type="slide-up" delay={0.4}>
              <p style={{
                fontFamily: fontBody, fontSize: 16, lineHeight: 1.8,
                color: C.muted, margin: "0 0 36px", maxWidth: 520,
              }}>
                Porto Valletta is his answer to a simple question: what happens when you
                cook with the discipline of a European fine-dining kitchen but the soul of
                a Maltese fisherman? Every plate is a conversation between those two worlds.
              </p>
            </Reveal>

            {/* pull quote */}
            <Reveal type="fade" delay={0.5}>
              <div style={{
                borderLeft: `2px solid ${C.gold}`,
                paddingLeft: 24,
              }}>
                <p style={{
                  fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 400,
                  fontSize: 22, lineHeight: 1.5,
                  color: "rgba(245,230,211,0.7)", margin: 0,
                }}>
                  &ldquo;I cook what the island gives me.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Team Section ─── */}
      <section style={{ background: C.surface }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "100px 24px" }}>
          <Reveal type="slide-up">
            <p style={{
              fontFamily: fontBody, fontSize: 12, letterSpacing: "0.3em",
              textTransform: "uppercase", color: C.gold, marginBottom: 16, textAlign: "center",
            }}>
              The Team
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.1}>
            <h2 style={{
              fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 500,
              fontSize: "clamp(28px, 4vw, 36px)", textAlign: "center", color: C.cream,
              margin: "0 0 60px",
            }}>
              The People Who Make It Happen
            </h2>
          </Reveal>

          <style>{`
            .rest-team-grid{display:grid;grid-template-columns:1fr;gap:32px;}
            @media(min-width:640px){.rest-team-grid{grid-template-columns:repeat(3,1fr);}}
          `}</style>
          <div className="rest-team-grid">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} type="fade" delay={i * 0.15}>
                <div style={{ textAlign: "center" }}>
                  {/* initials circle */}
                  <div style={{
                    width: 100, height: 100, borderRadius: "50%",
                    border: `2px solid ${C.gold}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px",
                    background: "rgba(201,147,90,0.06)",
                  }}>
                    <span style={{
                      fontFamily: fontDisplay, fontSize: 28, fontWeight: 500,
                      color: C.gold, letterSpacing: "0.05em",
                    }}>
                      {member.initials}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: fontDisplay, fontWeight: 600, fontSize: 20,
                    color: C.cream, margin: "0 0 6px",
                  }}>
                    {member.name}
                  </h3>
                  <p style={{
                    fontFamily: fontBody, fontSize: 13, letterSpacing: "0.08em",
                    textTransform: "uppercase", color: C.gold, margin: "0 0 14px",
                  }}>
                    {member.role}
                  </p>
                  <p style={{
                    fontFamily: fontBody, fontSize: 14, lineHeight: 1.7,
                    color: C.muted, margin: 0, maxWidth: 280, marginLeft: "auto", marginRight: "auto",
                  }}>
                    {member.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Awards ─── */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px", textAlign: "center" }}>
        <Reveal type="fade">
          <p style={{
            fontFamily: fontBody, fontSize: 12, lineHeight: 1.8,
            color: "rgba(245,230,211,0.3)", letterSpacing: "0.1em",
            margin: 0,
          }}>
            Michelin Plate 2023 &middot; Wine Spectator Award of Excellence &middot; Malta Tourism Authority Best Restaurant 2024 &middot; Gault&amp;Millau 15/20
          </p>
        </Reveal>
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
