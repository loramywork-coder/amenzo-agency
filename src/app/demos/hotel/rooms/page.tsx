"use client";

import Reveal from "@/components/demos/Reveal";
import MagneticButton from "@/components/demos/MagneticButton";
import { DemoBanner } from "@/components/demos/demo-banner";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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

/* ─── unsplash helper ─── */
const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

/* ─── room data ─── */
const rooms = [
  {
    name: "Classic Room",
    price: 180,
    size: "28 m\u00B2",
    feature: "City View",
    img: "photo-1631049307264-da0ec9d70304",
    desc: "Elegantly appointed with hand-selected furnishings, the Classic Room offers a tranquil retreat with views over Valletta\u2019s historic streets. Limestone floors, bespoke textiles, and a luxurious rain shower complete the experience.",
    amenities: ["King Bed", "Rain Shower", "City View", "Minibar"],
  },
  {
    name: "Deluxe Sea View",
    price: 280,
    size: "45 m\u00B2",
    feature: "Balcony",
    img: "photo-1582719478250-c89cae4dc85b",
    desc: "Wake to the Mediterranean through floor-to-ceiling windows that open onto a private balcony. Marble bathroom with soaking tub, premium linens, and a curated minibar make every moment indulgent.",
    amenities: ["King Bed", "Balcony", "Sea View", "Soaking Tub"],
  },
  {
    name: "Junior Suite",
    price: 380,
    size: "55 m\u00B2",
    feature: "Sitting Area",
    img: "photo-1595576508898-0ad5c879a061",
    desc: "A generous living space with separate sitting area, perfect for unwinding after a day exploring Malta. The Junior Suite blends contemporary comfort with Baroque-inspired details and harbour glimpses.",
    amenities: ["King Bed", "Sitting Area", "Harbour Glimpse", "Walk-in Closet"],
  },
  {
    name: "Grand Harbour Suite",
    price: 450,
    size: "85 m\u00B2",
    feature: "Terrace \u2022 Butler",
    img: "photo-1590490360182-c33d57733427",
    desc: "Our signature suite commands panoramic views of the Grand Harbour from a wraparound private terrace. A marble bathroom, separate living room, and dedicated butler service ensure an unforgettable stay.",
    amenities: ["King Bed", "Private Terrace", "Butler Service", "Living Room"],
  },
  {
    name: "Presidential Suite",
    price: 850,
    size: "140 m\u00B2",
    feature: "Pool \u2022 Concierge",
    img: "photo-1578683010236-d716f9a3f461",
    desc: "The pinnacle of Grand Harbour luxury. A private plunge pool, dining room for eight, study, and wraparound terrace with unrivalled views. Personal concierge and chauffeur service included throughout your stay.",
    amenities: ["King Bed + Study", "Private Pool", "Dining Room", "24h Concierge"],
  },
] as const;

/* ─── all rooms include ─── */
const included = [
  { icon: "M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01", label: "WiFi" },
  { icon: "M17 8h1a4 4 0 110 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3", label: "Nespresso" },
  { icon: "M3 2h18v3H3zM3 5v6.5a5.5 5.5 0 005.5 5.5h.5v3h6v-3h.5a5.5 5.5 0 005.5-5.5V5", label: "Room Service" },
  { icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z", label: "Premium Linens" },
  { icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", label: "L'Occitane" },
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "In-Room Safe" },
  { icon: "M2 7l10-4 10 4M4 9v8a2 2 0 002 2h12a2 2 0 002-2V9", label: "Smart TV" },
  { icon: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z", label: "Climate Control" },
] as const;

/* ─── nav links ─── */
const NAV_LINKS = [
  { label: "Rooms", href: "/demos/hotel/rooms" },
  { label: "Dining", href: "/demos/hotel/dining" },
  { label: "Spa", href: "/demos/hotel#spa" },
  { label: "Experiences", href: "/demos/hotel#amenities" },
  { label: "Gallery", href: "/demos/hotel#gallery" },
  { label: "Events", href: "/demos/hotel#events" },
] as const;

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   NAV HEADER
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
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
    return () => {
      document.body.style.overflow = "";
    };
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
          borderBottom: scrolled
            ? `1px solid ${C.border}`
            : "1px solid transparent",
          transition:
            "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
        }}
      >
        <Link href="/demos/hotel" style={{ textDecoration: "none" }}>
          <div style={{ lineHeight: 1.1 }}>
            <span
              style={{
                display: "block",
                fontFamily: fontDisplay,
                fontWeight: 400,
                fontSize: 20,
                color: C.cream,
              }}
            >
              Grand Harbour
            </span>
            <span
              style={{
                display: "block",
                fontFamily: fontDisplay,
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: 13,
                color: C.gold,
                letterSpacing: "0.08em",
              }}
            >
              Hotel &amp; Spa
            </span>
          </div>
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: fontBody,
                fontSize: 12,
                fontWeight: 500,
                color: C.muted,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = C.cream)
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = C.muted)
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/demos/hotel/contact"
            style={{
              fontFamily: fontBody,
              fontSize: 12,
              fontWeight: 600,
              color: C.bg,
              background: C.gold,
              padding: "10px 24px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.opacity = "1")
            }
          >
            Book Your Stay
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            padding: 6,
          }}
        >
          <span
            style={{
              width: 24,
              height: 1.5,
              background: C.cream,
              transition: "transform 0.3s, opacity 0.3s",
              transform: mobileOpen
                ? "rotate(45deg) translate(4px, 4px)"
                : "none",
            }}
          />
          <span
            style={{
              width: 24,
              height: 1.5,
              background: C.cream,
              opacity: mobileOpen ? 0 : 1,
              transition: "opacity 0.3s",
            }}
          />
          <span
            style={{
              width: 24,
              height: 1.5,
              background: C.cream,
              transition: "transform 0.3s, opacity 0.3s",
              transform: mobileOpen
                ? "rotate(-45deg) translate(4px, -4px)"
                : "none",
            }}
          />
        </button>
      </header>

      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 49,
            background: "rgba(12,18,32,0.98)",
            paddingTop: 140,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: fontDisplay,
                fontSize: 28,
                fontWeight: 300,
                color: C.cream,
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/demos/hotel/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: 20,
              fontFamily: fontBody,
              fontSize: 13,
              fontWeight: 600,
              color: C.bg,
              background: C.gold,
              padding: "14px 40px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Book Your Stay
          </Link>
        </div>
      )}
    </>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FOOTER
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function SiteFooter() {
  return (
    <footer
      style={{
        background: C.bg,
        borderTop: `1px solid ${C.border}`,
        padding: "64px 24px 48px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 40,
        }}
      >
        <div>
          <h4
            style={{
              fontFamily: fontDisplay,
              fontSize: 24,
              fontWeight: 400,
              color: C.cream,
              marginBottom: 12,
            }}
          >
            Grand Harbour
          </h4>
          <div style={{ display: "flex", gap: 4, marginBottom: 14 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill={C.gold}
                stroke="none"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
              </svg>
            ))}
          </div>
          <p style={{ color: C.muted, fontSize: 13, lineHeight: 1.8 }}>
            St. Barbara Bastion
            <br />
            Valletta VLT 1960, Malta
          </p>
        </div>

        <div>
          <h5
            style={{
              fontFamily: fontBody,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: C.gold,
              marginBottom: 16,
            }}
          >
            Explore
          </h5>
          {[
            { label: "Rooms & Suites", href: "/demos/hotel/rooms" },
            { label: "Dining", href: "/demos/hotel/dining" },
            { label: "Spa & Wellness", href: "/demos/hotel#spa" },
            { label: "Meetings & Events", href: "/demos/hotel#events" },
            { label: "Gallery", href: "/demos/hotel#gallery" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                display: "block",
                color: C.muted,
                fontSize: 13,
                marginBottom: 10,
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = C.cream)
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = C.muted)
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <h5
            style={{
              fontFamily: fontBody,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: C.gold,
              marginBottom: 16,
            }}
          >
            Contact
          </h5>
          <p style={{ color: C.muted, fontSize: 13, lineHeight: 2.1 }}>
            +356 2124 0000
            <br />
            reservations@grandharbour.mt
            <br />
            concierge@grandharbour.mt
          </p>
        </div>

        <div>
          <h5
            style={{
              fontFamily: fontBody,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: C.gold,
              marginBottom: 16,
            }}
          >
            Follow
          </h5>
          {["Instagram", "Facebook", "Pinterest", "TripAdvisor"].map((s) => (
            <p
              key={s}
              style={{
                color: C.muted,
                fontSize: 13,
                marginBottom: 10,
                cursor: "pointer",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = C.cream)
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = C.muted)
              }
            >
              {s}
            </p>
          ))}
        </div>
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: "48px auto 0",
          paddingTop: 24,
          borderTop: `1px solid ${C.border}`,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p style={{ color: C.muted, fontSize: 12 }}>
          &copy; {new Date().getFullYear()} Grand Harbour Hotel &amp; Spa. All
          rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms", "Accessibility"].map((t) => (
            <span
              key={t}
              style={{
                color: C.muted,
                fontSize: 12,
                cursor: "pointer",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = C.gold)
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = C.muted)
              }
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════
   ROOMS PAGE
   ═══════════════════════════════════════════════════════ */
export default function RoomsPage() {
  return (
    <div
      style={{
        background: C.bg,
        color: C.cream,
        fontFamily: fontBody,
        paddingTop: 40,
      }}
    >
      <DemoBanner />
      <NavHeader />

      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section
        style={{
          padding: "160px 24px 80px",
          textAlign: "center",
        }}
      >
        <Reveal type="fade">
          <p
            style={{
              fontFamily: fontBody,
              color: C.gold,
              letterSpacing: "0.35em",
              fontSize: 13,
              fontWeight: 500,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Accommodation
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.15}>
          <h1
            style={{
              fontFamily: fontDisplay,
              fontSize: "clamp(36px, 5vw, 48px)",
              fontWeight: 300,
              color: C.cream,
              marginBottom: 16,
            }}
          >
            Rooms &amp; Suites
          </h1>
        </Reveal>
        <Reveal type="fade" delay={0.3}>
          <div
            style={{
              width: 50,
              height: 1,
              background: C.gold,
              margin: "0 auto 24px",
            }}
          />
          <p
            style={{
              color: C.muted,
              fontSize: 15,
              lineHeight: 1.75,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Each of our 120 rooms and suites is a study in refined Mediterranean
            living, where heritage architecture meets contemporary luxury.
          </p>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          ROOM SECTIONS — alternating layout
          ═══════════════════════════════════════ */}
      {rooms.map((room, i) => {
        const imageLeft = i % 2 === 0;
        return (
          <section
            key={room.name}
            style={{
              padding: "60px 24px",
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            <div
              className="hotel-room-row"
              style={{
                display: "grid",
                gridTemplateColumns: "3fr 2fr",
                gap: 48,
                alignItems: "center",
                direction: imageLeft ? "ltr" : "rtl",
              }}
            >
              {/* Image (60%) */}
              <Reveal type={imageLeft ? "slide-left" : "slide-right"}>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    borderRadius: 4,
                    overflow: "hidden",
                    direction: "ltr",
                  }}
                >
                  <Image
                    src={unsplash(room.img, 1200)}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>

              {/* Details (40%) */}
              <Reveal
                type={imageLeft ? "slide-right" : "slide-left"}
                delay={0.15}
              >
                <div style={{ direction: "ltr" }}>
                  {/* Room name */}
                  <h2
                    style={{
                      fontFamily: fontDisplay,
                      fontSize: "clamp(28px, 3.5vw, 38px)",
                      fontWeight: 300,
                      color: C.cream,
                      marginBottom: 16,
                    }}
                  >
                    {room.name}
                  </h2>

                  {/* Price badge */}
                  <div
                    style={{
                      display: "inline-block",
                      background: C.gold,
                      color: C.bg,
                      fontFamily: fontBody,
                      fontSize: 14,
                      fontWeight: 700,
                      padding: "8px 20px",
                      letterSpacing: "0.04em",
                      borderRadius: 2,
                      marginBottom: 20,
                    }}
                  >
                    &euro;{room.price} / night
                  </div>

                  {/* Specs */}
                  <div
                    style={{
                      display: "flex",
                      gap: 20,
                      flexWrap: "wrap",
                      marginBottom: 20,
                    }}
                  >
                    <div
                      style={{
                        padding: "10px 16px",
                        border: `1px solid ${C.border}`,
                        borderRadius: 4,
                        fontSize: 13,
                        color: C.muted,
                      }}
                    >
                      {room.size}
                    </div>
                    <div
                      style={{
                        padding: "10px 16px",
                        border: `1px solid ${C.border}`,
                        borderRadius: 4,
                        fontSize: 13,
                        color: C.muted,
                      }}
                    >
                      {room.feature}
                    </div>
                  </div>

                  {/* Amenity icons */}
                  <div
                    style={{
                      display: "flex",
                      gap: 12,
                      flexWrap: "wrap",
                      marginBottom: 20,
                    }}
                  >
                    {room.amenities.map((a) => (
                      <span
                        key={a}
                        style={{
                          fontSize: 12,
                          color: C.gold,
                          letterSpacing: "0.04em",
                          padding: "6px 12px",
                          background: "rgba(201,169,110,0.08)",
                          borderRadius: 2,
                        }}
                      >
                        {a}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      color: C.muted,
                      fontSize: 14,
                      lineHeight: 1.8,
                      marginBottom: 28,
                    }}
                  >
                    {room.desc}
                  </p>

                  {/* Reserve button */}
                  <MagneticButton href="/demos/hotel/contact">
                    <span
                      style={{
                        display: "inline-block",
                        padding: "14px 36px",
                        background: C.gold,
                        color: C.bg,
                        fontFamily: fontBody,
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                      }}
                    >
                      Reserve
                    </span>
                  </MagneticButton>
                </div>
              </Reveal>
            </div>

            {/* Separator */}
            {i < rooms.length - 1 && (
              <div
                style={{
                  width: 40,
                  height: 1,
                  background: C.gold,
                  margin: "60px auto 0",
                  opacity: 0.4,
                }}
              />
            )}
          </section>
        );
      })}

      {/* ═══════════════════════════════════════
          ALL ROOMS INCLUDE
          ═══════════════════════════════════════ */}
      <section style={{ padding: "80px 24px", background: C.surface }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal type="fade">
            <h3
              style={{
                textAlign: "center",
                fontFamily: fontDisplay,
                fontSize: "clamp(24px, 3vw, 32px)",
                fontWeight: 300,
                color: C.cream,
                marginBottom: 48,
              }}
            >
              All Rooms Include
            </h3>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              gap: 20,
            }}
          >
            {included.map((item, i) => (
              <Reveal key={item.label} type="scale" delay={i * 0.05}>
                <div
                  style={{
                    textAlign: "center",
                    padding: "24px 12px",
                    border: `1px solid ${C.border}`,
                    borderRadius: 4,
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(201,169,110,0.4)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = C.border)
                  }
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={C.gold}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ margin: "0 auto 12px", display: "block" }}
                  >
                    <path d={item.icon} />
                  </svg>
                  <p
                    style={{
                      fontSize: 12,
                      color: C.muted,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════ */}
      <SiteFooter />

      {/* responsive overrides */}
      <style jsx global>{`
        .hotel-room-row {
          grid-template-columns: 3fr 2fr;
        }
        @media (max-width: 768px) {
          .hotel-room-row {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
          }
        }
      `}</style>
    </div>
  );
}
