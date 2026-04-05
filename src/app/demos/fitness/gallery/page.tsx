"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { DemoBanner } from "@/components/demos/demo-banner";

/* ── palette ── */
const C = {
  bg: "#080808",
  surface: "#111111",
  green: "#22C55E",
  white: "#FFFFFF",
  muted: "#71717A",
  border: "#27272A",
} as const;

const fontBody = "Inter, system-ui, sans-serif";

/* ── nav links ── */
const NAV_LINKS = [
  { label: "Home", href: "/demos/fitness" },
  { label: "Schedule", href: "/demos/fitness/schedule" },
  { label: "Gallery", href: "/demos/fitness/gallery" },
  { label: "Membership", href: "/demos/fitness/membership" },
  { label: "Contact", href: "/demos/fitness/contact" },
];

/* ── gallery images (10 Unsplash gym images) ── */
const IMAGES = [
  { id: "photo-1534438327276-14e5300c3a48", alt: "Main gym floor with weights" },
  { id: "photo-1540497077202-7c8a3999166f", alt: "Group fitness class in action" },
  { id: "photo-1571902943202-507ec2618e8f", alt: "Cardio zone with treadmills" },
  { id: "photo-1593079831268-3381b0db4a77", alt: "Free weights and dumbbell rack" },
  { id: "photo-1558611848-73f7eb4001a1", alt: "Boxing ring and heavy bags" },
  { id: "photo-1576678927484-cc907957088c", alt: "Athlete training with ropes" },
  { id: "photo-1574680096145-d05b474e2155", alt: "Yoga studio with natural light" },
  { id: "photo-1596357395217-80de13130e92", alt: "Functional training zone" },
  { id: "photo-1517836357463-d25dfeac3438", alt: "Spin studio setup" },
  { id: "photo-1549060279-7e168fcee0c2", alt: "Recovery and stretching area" },
];

const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

/* ── nav header ── */
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
          position: "fixed", top: 40, left: 0, right: 0, zIndex: 50, height: 60,
          display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px",
          background: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
          transition: "background 0.4s, border-color 0.4s",
        }}
      >
        <Link href="/demos/fitness" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: fontBody, fontWeight: 700, fontSize: 18, color: C.white, letterSpacing: "0.15em" }}>FITZONE</span>
        </Link>
        <nav className="fz-desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href}
              style={{
                fontFamily: fontBody, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
                color: link.href === "/demos/fitness/gallery" ? C.white : C.muted,
                textDecoration: "none", transition: "color 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.white; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = link.href === "/demos/fitness/gallery" ? C.white : C.muted; }}
            >{link.label}</Link>
          ))}
        </nav>
        <button className="fz-mobile-hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5, padding: 8 }}>
          <span style={{ width: 22, height: 2, background: C.white, display: "block" }} />
          <span style={{ width: 22, height: 2, background: C.white, display: "block" }} />
          <span style={{ width: 14, height: 2, background: C.green, display: "block" }} />
        </button>
      </header>

      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, background: C.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28 }}>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu" style={{ position: "absolute", top: 52, right: 24, background: "none", border: "none", color: C.white, fontSize: 28, cursor: "pointer" }}>&times;</button>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} style={{ fontFamily: fontBody, fontSize: 24, fontWeight: 600, color: C.white, textDecoration: "none" }}>{link.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        .fz-desktop-nav{display:flex!important;}
        .fz-mobile-hamburger{display:none!important;}
        @media(max-width:799px){
          .fz-desktop-nav{display:none!important;}
          .fz-mobile-hamburger{display:flex!important;}
        }
      `}</style>
    </>
  );
}

/* ━━━ PAGE ━━━ */
export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const nextImage = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev + 1) % IMAGES.length : null));
  }, []);
  const prevImage = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev - 1 + IMAGES.length) % IMAGES.length : null));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox, nextImage, prevImage]);

  useEffect(() => {
    if (lightbox !== null) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <div style={{ background: C.bg, color: C.white, fontFamily: fontBody, minHeight: "100vh", paddingTop: 40 }}>
      <DemoBanner />
      <NavHeader />

      {/* ════════ HERO ════════ */}
      <section style={{ paddingTop: 140, paddingBottom: 60, textAlign: "center" }}>
        <p style={{ fontSize: 12, letterSpacing: "0.35em", textTransform: "uppercase", color: C.green, marginBottom: 16 }}>THE GYM</p>
        <h1 style={{ fontSize: 36, fontWeight: 700, margin: 0 }}>2,000 sqm of Pure Performance</h1>
      </section>

      {/* ════════ MASONRY GRID ════════ */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 100px" }}>
        <div className="fz-gallery-masonry" style={{ columnGap: 16 }}>
          {IMAGES.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setLightbox(idx)}
              style={{
                breakInside: "avoid",
                marginBottom: 16,
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: 8,
                position: "relative",
              }}
              className="fz-gallery-item"
            >
              <Image
                src={unsplash(img.id, 800)}
                alt={img.alt}
                width={600}
                height={idx % 3 === 0 ? 450 : idx % 3 === 1 ? 360 : 400}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  transition: "transform 0.5s cubic-bezier(0.25,0.1,0.25,1)",
                }}
                className="fz-gallery-img"
              />
              <div
                className="fz-gallery-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 50%)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                  pointerEvents: "none",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: 16,
                }}
              >
                <p style={{ fontSize: 13, color: C.white, margin: 0, letterSpacing: "0.05em" }}>{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ LIGHTBOX ════════ */}
      {lightbox !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed", inset: 0, zIndex: 300,
            background: "rgba(8,8,8,0.96)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <button onClick={closeLightbox} aria-label="Close lightbox"
            style={{ position: "absolute", top: 24, right: 24, zIndex: 310, background: "none", border: "none", color: C.white, fontSize: 32, cursor: "pointer" }}>
            &times;
          </button>

          <p style={{ position: "absolute", top: 28, left: "50%", transform: "translateX(-50%)", fontSize: 13, color: C.muted, zIndex: 310 }}>
            {lightbox + 1} / {IMAGES.length}
          </p>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous image"
            style={{
              position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)", zIndex: 310,
              background: "rgba(255,255,255,0.08)", border: "none", color: C.white, fontSize: 24,
              width: 48, height: 48, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: 8, transition: "background 0.3s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
          >&#8249;</button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next image"
            style={{
              position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", zIndex: 310,
              background: "rgba(255,255,255,0.08)", border: "none", color: C.white, fontSize: 24,
              width: 48, height: 48, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: 8, transition: "background 0.3s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
          >&#8250;</button>

          <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", maxWidth: "85vw", maxHeight: "80vh" }}>
            <Image
              src={unsplash(IMAGES[lightbox].id, 1600)}
              alt={IMAGES[lightbox].alt}
              width={1400}
              height={900}
              style={{ maxWidth: "85vw", maxHeight: "80vh", width: "auto", height: "auto", objectFit: "contain", borderRadius: 4 }}
            />
            <p style={{ textAlign: "center", marginTop: 16, fontSize: 13, color: C.muted }}>{IMAGES[lightbox].alt}</p>
          </div>
        </div>
      )}

      {/* ════════ FOOTER ════════ */}
      <footer style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: "48px 24px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, textAlign: "center" }}>
          <span style={{ fontWeight: 700, fontSize: 14, color: C.white, letterSpacing: "0.2em" }}>FITZONE</span>
          <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.8 }}>
            <span>23 Harbour Street, Downtown</span><br />
            <span>Daily 5:00 AM &ndash; 11:00 PM</span><br />
            <span>hello@fitzone.com</span>
          </div>
          <div style={{ display: "flex", gap: 20, marginTop: 8 }}>
            {["Privacy", "Impressum"].map((t) => (
              <Link key={t} href={`/demos/fitness/${t.toLowerCase()}`}
                style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", textDecoration: "none", transition: "color 0.25s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.white; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.25)"; }}
              >{t}</Link>
            ))}
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
              Site by <a href="https://amenzo.co" target="_blank" rel="noopener noreferrer" style={{ color: C.green, textDecoration: "none" }}>Amenzo</a>
            </span>
          </div>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>&copy; 2026 FitZone</span>
        </div>
      </footer>

      <style>{`
        .fz-gallery-masonry{columns:3;}
        @media(max-width:899px){.fz-gallery-masonry{columns:2;}}
        @media(max-width:499px){.fz-gallery-masonry{columns:1;}}
        .fz-gallery-item:hover .fz-gallery-overlay{opacity:1!important;}
        .fz-gallery-item:hover .fz-gallery-img{transform:scale(1.04);}
      `}</style>
    </div>
  );
}
