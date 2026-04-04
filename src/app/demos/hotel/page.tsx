"use client";

import Reveal from "@/components/demos/Reveal";
import MagneticButton from "@/components/demos/MagneticButton";
import { DemoBanner } from "@/components/demos/demo-banner";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

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

/* ─── room preview data ─── */
const roomPreviews = [
  {
    name: "Grand Harbour Suite",
    price: 450,
    img: "photo-1590490360182-c33d57733427",
    beds: "1 King",
    size: "85 m\u00B2",
    view: "Harbour",
    desc: "Panoramic views of the Grand Harbour with a private terrace, marble bathroom and living area.",
  },
  {
    name: "Deluxe Sea View",
    price: 280,
    img: "photo-1582719478250-c89cae4dc85b",
    beds: "1 King",
    size: "45 m\u00B2",
    view: "Sea",
    desc: "Wake to the Mediterranean with floor-to-ceiling windows and a private balcony.",
  },
  {
    name: "Presidential Suite",
    price: 850,
    img: "photo-1578683010236-d716f9a3f461",
    beds: "1 King + Study",
    size: "140 m\u00B2",
    view: "Panoramic",
    desc: "Our signature suite with private pool, butler service, and wraparound terrace.",
  },
] as const;

/* ─── dining data ─── */
const restaurants = [
  {
    name: "Harbour Grill",
    desc: "Wood-fired steaks and the freshest catch, served with harbour views.",
    hours: "Dinner \u2014 Tue\u2013Sat 19:00\u201323:00",
    img: "photo-1559339352-11d035aa65de",
  },
  {
    name: "La Terrazza",
    desc: "Casual Mediterranean cuisine on our sunlit rooftop terrace.",
    hours: "Lunch & Dinner \u2014 Daily 12:00\u201322:00",
    img: "photo-1555396273-367ea4eb4db5",
  },
  {
    name: "Bar Azure",
    desc: "Signature cocktails and small plates with panoramic sunset views.",
    hours: "Daily 16:00\u201301:00",
    img: "photo-1470337458703-46ad1756a187",
  },
] as const;

/* ─── amenities data ─── */
const amenities = [
  {
    icon: "M2 15c6.667-6 13.333 0 20-6M2 19c6.667-6 13.333 0 20-6",
    title: "Infinity Pool",
    desc: "Rooftop infinity pool with panoramic harbour views",
  },
  {
    icon: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
    title: "Wellness Spa",
    desc: "Award-winning spa with thermal circuit and hammam",
  },
  {
    icon: "M3 2h18v3H3zM3 5v6.5a5.5 5.5 0 005.5 5.5h.5v3h6v-3h.5a5.5 5.5 0 005.5-5.5V5",
    title: "Fine Dining",
    desc: "Three restaurants featuring Mediterranean cuisine",
  },
  {
    icon: "M6.5 6.5h11M6.5 17.5h11M3 12h18M12 3v18",
    title: "Fitness Centre",
    desc: "State-of-the-art gym with personal trainers",
  },
  {
    icon: "M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M5 17H3v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2",
    title: "Valet Parking",
    desc: "Complimentary valet with electric charging",
  },
  {
    icon: "M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01",
    title: "High-Speed WiFi",
    desc: "Complimentary fibre throughout the property",
  },
  {
    icon: "M9 12h.01M12 12h.01M15 12h.01M3 7a4 4 0 014-4h10a4 4 0 014 4v5a4 4 0 01-4 4H7l-4 4V7z",
    title: "Family Programme",
    desc: "Kids club, babysitting and family experiences",
  },
  {
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Concierge",
    desc: "24-hour concierge for bespoke experiences",
  },
] as const;

/* ─── testimonial data ─── */
const testimonials = [
  {
    text: "An experience that transcends hospitality. Every detail curated to perfection.",
    author: "Helena Cortez",
    role: "Cond\u00E9 Nast Traveller",
  },
  {
    text: "The spa alone is worth the journey. Malta\u2019s finest hotel, without question.",
    author: "James Whitfield",
    role: "The Sunday Times",
  },
  {
    text: "Grand Harbour redefined what luxury means to us. We return every year.",
    author: "Sophia Laurent",
    role: "Michelin Guide",
  },
] as const;

/* ─── nav links ─── */
const NAV_LINKS = [
  { label: "Rooms", href: "/demos/hotel/rooms" },
  { label: "Dining", href: "/demos/hotel/dining" },
  { label: "Spa", href: "#spa" },
  { label: "Experiences", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
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
        {/* Logo */}
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

        {/* Desktop nav */}
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

        {/* Mobile hamburger */}
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
              transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
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
              transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }}
          />
        </button>
      </header>

      {/* Mobile overlay */}
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
        {/* Brand */}
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

        {/* Explore */}
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
            { label: "Spa & Wellness", href: "#spa" },
            { label: "Meetings & Events", href: "#events" },
            { label: "Gallery", href: "#gallery" },
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

        {/* Contact */}
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

        {/* Follow */}
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

      {/* bottom bar */}
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
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function HotelPage() {
  /* hero Ken Burns trigger */
  const [heroLoaded, setHeroLoaded] = useState(false);

  /* spa parallax offset */
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* testimonial rotation */
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: C.bg, color: C.cream, fontFamily: fontBody }}>
      <DemoBanner />
      <NavHeader />

      {/* ═══════════════════════════════════════
          SECTION 1 - HERO (100vh)
          ═══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ height: "100vh", paddingTop: 40 }}
      >
        {/* background image with Ken Burns */}
        <div
          className="absolute inset-0"
          style={{
            animation: heroLoaded
              ? "kenburns 25s ease-in-out infinite alternate"
              : "none",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85"
            alt="Grand Harbour Hotel aerial view"
            fill
            priority
            className="object-cover"
            onLoad={() => setHeroLoaded(true)}
          />
        </div>

        {/* gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(12,18,32,0.4) 0%, rgba(12,18,32,0.65) 55%, rgba(12,18,32,0.95) 100%)",
          }}
        />

        {/* hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <Reveal type="fade" delay={0.2}>
            <p
              style={{
                fontFamily: fontBody,
                color: C.gold,
                letterSpacing: "0.35em",
                fontSize: 13,
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              Valletta, Malta
            </p>
          </Reveal>

          <Reveal type="slide-up" delay={0.4}>
            <h1
              style={{
                fontFamily: fontDisplay,
                fontSize: "clamp(44px, 6vw, 72px)",
                fontWeight: 300,
                lineHeight: 1.05,
                color: C.cream,
                marginTop: 16,
                marginBottom: 0,
              }}
            >
              Grand Harbour
            </h1>
          </Reveal>

          <Reveal type="slide-up" delay={0.55}>
            <h2
              style={{
                fontFamily: fontDisplay,
                fontSize: "clamp(26px, 3.8vw, 46px)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: C.cream,
                marginTop: 0,
              }}
            >
              Hotel &amp; Spa
            </h2>
          </Reveal>

          {/* gold divider */}
          <Reveal type="scale" delay={0.65}>
            <div
              style={{
                width: 60,
                height: 1,
                background: C.gold,
                margin: "28px auto",
              }}
            />
          </Reveal>

          <Reveal type="fade" delay={0.75}>
            <p
              style={{
                fontFamily: fontBody,
                color: C.muted,
                fontSize: 15,
                maxWidth: 460,
                lineHeight: 1.75,
              }}
            >
              A sanctuary of timeless elegance perched above Malta&rsquo;s storied
              harbour. Where every sunset writes a new chapter.
            </p>
          </Reveal>

          <Reveal type="slide-up" delay={0.9}>
            <div className="flex gap-4 mt-8 flex-wrap justify-center">
              <MagneticButton href="/demos/hotel/contact">
                <span
                  style={{
                    display: "inline-block",
                    padding: "14px 38px",
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
                  Reserve a Stay
                </span>
              </MagneticButton>
              <MagneticButton href="/demos/hotel/rooms">
                <span
                  style={{
                    display: "inline-block",
                    padding: "14px 38px",
                    border: `1px solid ${C.gold}`,
                    color: C.gold,
                    fontFamily: fontBody,
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  Explore Suites
                </span>
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span
            style={{
              fontSize: 10,
              letterSpacing: "0.25em",
              color: C.muted,
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: 1,
              height: 36,
              background: `linear-gradient(to bottom, ${C.gold}, transparent)`,
            }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2 - WELCOME
          ═══════════════════════════════════════ */}
      <section
        style={{
          padding: "120px 24px",
          maxWidth: 820,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Reveal type="fade">
          <p
            style={{
              fontFamily: fontDisplay,
              fontStyle: "italic",
              fontSize: "clamp(24px, 3.4vw, 32px)",
              fontWeight: 300,
              lineHeight: 1.55,
              color: C.cream,
            }}
          >
            &ldquo;True luxury is not opulence for its own sake, but the quiet art
            of making every moment feel as though time has paused &mdash; just for
            you.&rdquo;
          </p>
        </Reveal>

        <Reveal type="scale" delay={0.2}>
          <div
            style={{
              width: 40,
              height: 1,
              background: C.gold,
              margin: "40px auto",
            }}
          />
        </Reveal>

        <Reveal type="slide-up" delay={0.3}>
          <p
            style={{
              color: C.muted,
              fontSize: 15,
              lineHeight: 1.85,
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            Nestled on the honey-coloured ramparts of Valletta, Grand Harbour Hotel
            &amp; Spa is a 120-room refuge where Baroque grandeur meets contemporary
            Mediterranean design. Since 1897, we have welcomed travellers seeking the
            extraordinary &mdash; from our Michelin-starred kitchens to our cliff-edge
            infinity pool, every detail is considered, every experience curated.
          </p>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3 - ROOMS PREVIEW
          ═══════════════════════════════════════ */}
      <section
        style={{ padding: "40px 24px 100px", maxWidth: 1200, margin: "0 auto" }}
      >
        <Reveal type="fade">
          <p
            style={{
              textAlign: "center",
              fontFamily: fontBody,
              color: C.gold,
              letterSpacing: "0.3em",
              fontSize: 12,
              fontWeight: 500,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Accommodations
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h2
            style={{
              textAlign: "center",
              fontFamily: fontDisplay,
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 300,
              color: C.cream,
              marginBottom: 56,
            }}
          >
            Rooms &amp; Suites
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="hotel-rooms-grid"
        >
          {roomPreviews.map((room, i) => (
            <Reveal key={room.name} type="slide-up" delay={i * 0.12}>
              <div
                className="group"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 4,
                  height: 480,
                  cursor: "pointer",
                }}
              >
                <Image
                  src={unsplash(room.img, 900)}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* glass overlay */}
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(12,18,32,0.92) 0%, rgba(12,18,32,0.3) 50%, rgba(12,18,32,0.08) 100%)",
                  }}
                />
                {/* price badge */}
                <div
                  className="absolute top-4 right-4"
                  style={{
                    background: "rgba(201,169,110,0.92)",
                    color: C.bg,
                    fontFamily: fontBody,
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "6px 14px",
                    letterSpacing: "0.05em",
                    borderRadius: 2,
                  }}
                >
                  from &euro;{room.price}/night
                </div>
                {/* room info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    style={{
                      fontFamily: fontDisplay,
                      fontSize: 28,
                      fontWeight: 400,
                      color: C.cream,
                      marginBottom: 8,
                    }}
                  >
                    {room.name}
                  </h3>
                  <div
                    className="flex gap-4 flex-wrap"
                    style={{
                      fontSize: 12,
                      color: C.muted,
                      marginBottom: 10,
                      letterSpacing: "0.04em",
                    }}
                  >
                    <span>{room.beds}</span>
                    <span>&bull;</span>
                    <span>{room.size}</span>
                    <span>&bull;</span>
                    <span>{room.view} View</span>
                  </div>
                  {/* hover-reveal description */}
                  <p
                    className="transition-all duration-500 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0"
                    style={{
                      color: C.muted,
                      fontSize: 13,
                      lineHeight: 1.65,
                      maxWidth: 400,
                    }}
                  >
                    {room.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal type="fade" delay={0.3}>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link
              href="/demos/hotel/rooms"
              style={{
                fontFamily: fontBody,
                fontSize: 13,
                fontWeight: 600,
                color: C.gold,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.opacity = "0.7")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.opacity = "1")
              }
            >
              View All Rooms &rarr;
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 4 - DINING
          ═══════════════════════════════════════ */}
      <section
        style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}
      >
        <Reveal type="fade">
          <p
            style={{
              textAlign: "center",
              fontFamily: fontBody,
              color: C.gold,
              letterSpacing: "0.3em",
              fontSize: 12,
              fontWeight: 500,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Gastronomy
          </p>
        </Reveal>
        <Reveal type="slide-up" delay={0.1}>
          <h2
            style={{
              textAlign: "center",
              fontFamily: fontDisplay,
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 300,
              color: C.cream,
              marginBottom: 64,
            }}
          >
            Dining &amp; Drinks
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {restaurants.map((r, i) => (
            <Reveal key={r.name} type="slide-up" delay={i * 0.15}>
              <div
                className="group"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 4,
                  height: 520,
                  cursor: "pointer",
                }}
              >
                <Image
                  src={unsplash(r.img, 800)}
                  alt={r.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(12,18,32,0.92) 0%, rgba(12,18,32,0.15) 60%)",
                  }}
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3
                    style={{
                      fontFamily: fontDisplay,
                      fontSize: 30,
                      fontWeight: 400,
                      color: C.cream,
                      marginBottom: 12,
                    }}
                  >
                    {r.name}
                  </h3>
                  <p
                    className="transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100"
                    style={{
                      color: C.muted,
                      fontSize: 14,
                      lineHeight: 1.75,
                      marginBottom: 16,
                      overflow: "hidden",
                    }}
                  >
                    {r.desc}
                  </p>
                  <p
                    style={{
                      color: C.gold,
                      fontSize: 12,
                      letterSpacing: "0.12em",
                      fontWeight: 500,
                    }}
                  >
                    {r.hours}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 5 - SPA CTA (full-width parallax)
          ═══════════════════════════════════════ */}
      <section
        id="spa"
        className="relative overflow-hidden"
        style={{ height: "clamp(520px, 70vh, 720px)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.12}px)`,
            willChange: "transform",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=85"
            alt="Spa treatment room"
            fill
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(12,18,32,0.88) 0%, rgba(12,18,32,0.45) 100%)",
          }}
        />
        <div
          className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20"
          style={{ maxWidth: 720 }}
        >
          <Reveal type="slide-left">
            <p
              style={{
                fontFamily: fontBody,
                color: C.gold,
                letterSpacing: "0.3em",
                fontSize: 12,
                fontWeight: 500,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              The Spa
            </p>
          </Reveal>
          <Reveal type="slide-left" delay={0.15}>
            <h2
              style={{
                fontFamily: fontDisplay,
                fontStyle: "italic",
                fontSize: "clamp(36px, 5vw, 48px)",
                fontWeight: 300,
                lineHeight: 1.15,
                color: C.cream,
                marginBottom: 24,
              }}
            >
              Serenity, Restored.
            </h2>
          </Reveal>
          <Reveal type="fade" delay={0.3}>
            <p
              style={{
                color: C.muted,
                fontSize: 15,
                lineHeight: 1.85,
                maxWidth: 540,
                marginBottom: 40,
              }}
            >
              Descend into our subterranean sanctuary &mdash; a 1,200 m&sup2; world
              of thermal pools, salt-stone hammams, and treatment rooms carved into
              the ancient bastions. Our therapists blend Mediterranean botanicals with
              time-honoured techniques to restore body and spirit.
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.45}>
            <MagneticButton>
              <span
                style={{
                  display: "inline-block",
                  padding: "14px 38px",
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
                View Treatments
              </span>
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 6 - AMENITIES
          ═══════════════════════════════════════ */}
      <section id="amenities" style={{ padding: "100px 24px", background: C.surface }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal type="fade">
            <p
              style={{
                textAlign: "center",
                fontFamily: fontBody,
                color: C.gold,
                letterSpacing: "0.3em",
                fontSize: 12,
                fontWeight: 500,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Services
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.1}>
            <h2
              style={{
                textAlign: "center",
                fontFamily: fontDisplay,
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 300,
                color: C.cream,
                marginBottom: 64,
              }}
            >
              Hotel Amenities
            </h2>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {amenities.map((a, i) => (
              <Reveal key={a.title} type="slide-up" delay={i * 0.07}>
                <div
                  style={{
                    padding: "36px 28px",
                    border: `1px solid rgba(201,169,110,0.15)`,
                    borderRadius: 4,
                    textAlign: "center",
                    transition: "border-color 0.4s, background 0.4s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(201,169,110,0.45)";
                    el.style.background = "rgba(201,169,110,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(201,169,110,0.15)";
                    el.style.background = "transparent";
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      margin: "0 auto 20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: `1px solid rgba(201,169,110,0.35)`,
                      borderRadius: "50%",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={C.gold}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={a.icon} />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: fontDisplay,
                      fontSize: 20,
                      fontWeight: 400,
                      color: C.cream,
                      marginBottom: 8,
                    }}
                  >
                    {a.title}
                  </h3>
                  <p style={{ color: C.muted, fontSize: 13, lineHeight: 1.65 }}>
                    {a.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 7 - TESTIMONIALS
          ═══════════════════════════════════════ */}
      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <Reveal type="fade">
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            {/* gold quote mark */}
            <div
              style={{
                fontFamily: fontDisplay,
                fontSize: 72,
                color: C.gold,
                lineHeight: 1,
                marginBottom: 8,
                opacity: 0.6,
              }}
            >
              &ldquo;
            </div>

            <div style={{ position: "relative", minHeight: 140 }}>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    position: i === activeTestimonial ? "relative" : "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    opacity: i === activeTestimonial ? 1 : 0,
                    transform:
                      i === activeTestimonial
                        ? "translateY(0)"
                        : "translateY(12px)",
                    transition: "opacity 0.8s ease, transform 0.8s ease",
                  }}
                >
                  <p
                    style={{
                      fontFamily: fontDisplay,
                      fontStyle: "italic",
                      fontSize: "clamp(20px, 2.8vw, 28px)",
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: C.cream,
                      marginBottom: 28,
                    }}
                  >
                    {t.text}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: C.cream,
                      marginBottom: 4,
                    }}
                  >
                    {t.author}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: C.gold,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              ))}
            </div>

            {/* dots */}
            <div
              style={{
                display: "flex",
                gap: 10,
                justifyContent: "center",
                marginTop: 36,
              }}
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  style={{
                    width: i === activeTestimonial ? 28 : 8,
                    height: 8,
                    borderRadius: 4,
                    background:
                      i === activeTestimonial
                        ? C.gold
                        : "rgba(201,169,110,0.3)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.4s ease",
                  }}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 8 - LOCATION
          ═══════════════════════════════════════ */}
      <section style={{ padding: "80px 24px", background: C.surface }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
          className="hotel-location-grid"
        >
          {/* Map placeholder */}
          <Reveal type="slide-left">
            <div
              style={{
                aspectRatio: "4/3",
                background: C.bg,
                borderRadius: 4,
                border: `1px solid ${C.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Decorative map pattern */}
              <div style={{ textAlign: "center" }}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={C.gold}
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ opacity: 0.6, marginBottom: 16 }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p
                  style={{
                    fontFamily: fontDisplay,
                    fontSize: 20,
                    color: C.cream,
                    marginBottom: 4,
                  }}
                >
                  Valletta, Malta
                </p>
                <p style={{ fontSize: 12, color: C.muted }}>
                  35.8989&deg; N, 14.5146&deg; E
                </p>
              </div>
            </div>
          </Reveal>

          {/* Travel info */}
          <Reveal type="slide-right">
            <div>
              <p
                style={{
                  fontFamily: fontBody,
                  color: C.gold,
                  letterSpacing: "0.3em",
                  fontSize: 12,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Getting Here
              </p>
              <h2
                style={{
                  fontFamily: fontDisplay,
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  fontWeight: 300,
                  color: C.cream,
                  marginBottom: 28,
                }}
              >
                Your Journey Begins
              </h2>
              {[
                {
                  label: "Malta International Airport",
                  detail: "20 minutes by private transfer",
                },
                {
                  label: "Valletta Cruise Port",
                  detail: "5 minutes by complimentary shuttle",
                },
                {
                  label: "Sliema Ferry Terminal",
                  detail: "10 minutes by water taxi",
                },
                {
                  label: "Mdina (Old Capital)",
                  detail: "25 minutes by chauffeur service",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "16px 0",
                    borderBottom: `1px solid ${C.border}`,
                  }}
                >
                  <p
                    style={{
                      fontSize: 15,
                      color: C.cream,
                      fontWeight: 500,
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ fontSize: 13, color: C.muted }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 9 - BOOKING CTA
          ═══════════════════════════════════════ */}
      <section
        id="events"
        className="relative overflow-hidden"
        style={{ padding: "120px 24px", textAlign: "center" }}
      >
        {/* background image */}
        <div className="absolute inset-0">
          <Image
            src={unsplash("photo-1566073771259-6a8506099945", 1920)}
            alt="Hotel exterior at dusk"
            fill
            className="object-cover"
            style={{ opacity: 0.2 }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${C.bg} 0%, rgba(12,18,32,0.85) 50%, ${C.bg} 100%)`,
          }}
        />

        <div className="relative z-10">
          <Reveal type="fade">
            <p
              style={{
                fontFamily: fontBody,
                color: C.gold,
                letterSpacing: "0.3em",
                fontSize: 12,
                fontWeight: 500,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Reservations
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.1}>
            <h2
              style={{
                fontFamily: fontDisplay,
                fontSize: "clamp(36px, 5vw, 48px)",
                fontWeight: 300,
                color: C.cream,
                marginBottom: 48,
              }}
            >
              Begin Your Story
            </h2>
          </Reveal>

          {/* mock booking bar */}
          <Reveal type="slide-up" delay={0.2}>
            <div
              style={{
                maxWidth: 920,
                margin: "0 auto",
                display: "flex",
                flexWrap: "wrap",
                gap: 0,
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              {[
                {
                  label: "Check-in",
                  type: "date" as const,
                  defaultVal: "2026-06-15",
                },
                {
                  label: "Check-out",
                  type: "date" as const,
                  defaultVal: "2026-06-20",
                },
                {
                  label: "Guests",
                  type: "select" as const,
                  defaultVal: "2",
                },
              ].map((field) => (
                <div
                  key={field.label}
                  style={{
                    flex: "1 1 200px",
                    padding: "22px 24px",
                    background: "rgba(201,169,110,0.06)",
                    borderRight: "1px solid rgba(201,169,110,0.1)",
                    textAlign: "left",
                  }}
                >
                  <label
                    style={{
                      display: "block",
                      fontSize: 11,
                      letterSpacing: "0.15em",
                      color: C.gold,
                      textTransform: "uppercase",
                      marginBottom: 8,
                      fontWeight: 500,
                    }}
                  >
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <select
                      defaultValue={field.defaultVal}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        color: C.cream,
                        fontSize: 15,
                        fontFamily: fontBody,
                        outline: "none",
                        cursor: "pointer",
                      }}
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option
                          key={n}
                          value={n}
                          style={{ background: C.surface, color: C.cream }}
                        >
                          {n} {n === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="date"
                      defaultValue={field.defaultVal}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        color: C.cream,
                        fontSize: 15,
                        fontFamily: fontBody,
                        outline: "none",
                        cursor: "pointer",
                      }}
                    />
                  )}
                </div>
              ))}
              <MagneticButton>
                <button
                  style={{
                    flex: "1 1 180px",
                    padding: "22px 40px",
                    background: C.gold,
                    color: C.bg,
                    border: "none",
                    fontFamily: fontBody,
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  Check Availability
                </button>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 10 - FOOTER
          ═══════════════════════════════════════ */}
      <SiteFooter />

      {/* ═══════════ GLOBAL STYLES ═══════════ */}
      <style jsx global>{`
        @keyframes kenburns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.12) translate(-1.5%, -1%);
          }
        }

        .hotel-rooms-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 900px) {
          .hotel-rooms-grid {
            grid-template-columns: 1fr !important;
          }
        }

        .hotel-location-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .hotel-location-grid {
            grid-template-columns: 1fr !important;
          }
        }

        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(0.7);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
