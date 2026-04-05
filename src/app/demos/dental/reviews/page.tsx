"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import { Star, ExternalLink } from "lucide-react";

/* ─── palette ─── */
const C = {
  bg: "#0A1015",
  surface: "#111920",
  teal: "#0EA5E9",
  warmWhite: "#F8FAFC",
  muted: "#64748B",
  border: "#1E293B",
  gold: "#F59E0B",
} as const;

const FONT = "'Inter', system-ui, -apple-system, sans-serif";

/* ─── nav links ─── */
const NAV_LINKS = [
  { label: "Home", href: "/demos/dental" },
  { label: "Services", href: "/demos/dental/services" },
  { label: "Team", href: "/demos/dental/team" },
  { label: "Reviews", href: "/demos/dental/reviews" },
  { label: "FAQ", href: "/demos/dental/faq" },
  { label: "Contact", href: "/demos/dental/contact" },
];

/* ─── 12 reviews ─── */
const REVIEWS = [
  { initials: "M.C.", name: "Maria", date: "Mar 2026", quote: "Dr. Vella transformed my smile with veneers. The whole process was painless and the results are stunning. I finally feel confident smiling in photos." },
  { initials: "J.B.", name: "James", date: "Feb 2026", quote: "Best dental experience I've ever had. The clinic is spotless, the staff are warm, and Dr. Vella explains everything clearly before starting." },
  { initials: "A.S.", name: "Anna", date: "Feb 2026", quote: "I was terrified of dentists until I came here. The sedation options and gentle approach made my root canal completely stress-free." },
  { initials: "D.F.", name: "David", date: "Jan 2026", quote: "Got my implant done here after losing a tooth in an accident. It looks and feels completely natural. Highly recommend." },
  { initials: "S.M.", name: "Sophie", date: "Jan 2026", quote: "The Invisalign treatment was worth every penny. My teeth are perfectly aligned now and I didn't have to deal with metal braces." },
  { initials: "R.G.", name: "Robert", date: "Dec 2025", quote: "Emergency appointment on a Saturday and they still treated me with care and patience. Can't thank the team enough." },
  { initials: "L.T.", name: "Lisa", date: "Dec 2025", quote: "My children actually look forward to their check-ups here. The team is fantastic with kids and makes everything feel like an adventure." },
  { initials: "K.V.", name: "Karl", date: "Nov 2025", quote: "Professional whitening that actually lasts. Six months later and my teeth are still bright. Great value compared to other clinics." },
  { initials: "N.P.", name: "Nadine", date: "Nov 2025", quote: "The 3D scanning technology here is impressive. No more uncomfortable moulds. Everything is modern and efficient." },
  { initials: "P.Z.", name: "Paul", date: "Oct 2025", quote: "Been coming here for three years now. Consistent quality, fair pricing, and they always remember my name. That personal touch matters." },
  { initials: "C.A.", name: "Claire", date: "Oct 2025", quote: "Had a full smile makeover - whitening, bonding, and two crowns. The results exceeded my expectations. Life-changing." },
  { initials: "T.D.", name: "Thomas", date: "Sep 2025", quote: "The payment plans made it possible for me to get the treatment I needed without financial stress. Transparent pricing, no surprises." },
];

/* ═══════════════════════════════════════════
   STAR RATING
   ═══════════════════════════════════════════ */
function Stars({ size = 16 }: { size?: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={size} fill={C.gold} color={C.gold} strokeWidth={0} />
      ))}
    </div>
  );
}

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
          transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
        }}
      >
        <Link href="/demos/dental" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: FONT, fontWeight: 800, fontSize: 20, color: C.warmWhite, letterSpacing: "-0.02em" }}>
            Dr. Vella <span style={{ color: C.teal }}>Dental</span>
          </span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 28 }} className="dental-desktop-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: FONT, fontSize: 13, fontWeight: 500,
                color: link.href === "/demos/dental/reviews" ? C.warmWhite : C.muted,
                textDecoration: "none", transition: "color 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.warmWhite; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = link.href === "/demos/dental/reviews" ? C.warmWhite : C.muted; }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="dental-mobile-hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column" as const, gap: 5, padding: 8 }}
        >
          <span style={{ width: 24, height: 1.5, background: C.warmWhite, display: "block" }} />
          <span style={{ width: 24, height: 1.5, background: C.warmWhite, display: "block" }} />
          <span style={{ width: 16, height: 1.5, background: C.teal, display: "block" }} />
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
              style={{ position: "absolute", top: 52, right: 24, background: "none", border: "none", color: C.warmWhite, fontSize: 28, cursor: "pointer" }}
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
                <Link href={link.href} onClick={() => setMobileOpen(false)} style={{ fontFamily: FONT, fontSize: 24, fontWeight: 600, color: C.warmWhite, textDecoration: "none" }}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .dental-desktop-nav{display:flex!important;}
        .dental-mobile-hamburger{display:none!important;}
        @media(max-width:899px){
          .dental-desktop-nav{display:none!important;}
          .dental-mobile-hamburger{display:flex!important;}
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
    <footer style={{ background: C.surface, borderTop: `1px solid ${C.border}`, padding: "56px 24px 36px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 40, marginBottom: 40 }}>
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 800, fontFamily: FONT, color: C.warmWhite, marginBottom: 12, letterSpacing: "-0.02em" }}>
            Dr. Vella <span style={{ color: C.teal }}>Dental</span>
          </h3>
          <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7, maxWidth: 250 }}>
            Modern dental care in a calm, welcoming environment. Your comfort is our priority.
          </p>
        </div>
        <div>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: C.teal, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Contact</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14, color: C.muted }}>
            <span>78 Tower Road, Sliema</span>
            <span>+356 2123 4567</span>
            <span>hello@drvella.mt</span>
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: C.teal, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Hours</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14, color: C.muted }}>
            <span>Mon - Fri: 08:00 - 17:00</span>
            <span>Saturday: 09:00 - 13:00</span>
            <span>Sunday: Closed</span>
            <span style={{ color: C.teal, fontWeight: 600, fontSize: 13 }}>Emergency line 24/7</span>
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: C.teal, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Quick Links</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
            {[
              { label: "Services", href: "/demos/dental/services" },
              { label: "Reviews", href: "/demos/dental/reviews" },
              { label: "FAQ", href: "/demos/dental/faq" },
              { label: "Impressum", href: "/demos/dental/impressum" },
            ].map((l) => (
              <Link key={l.label} href={l.href} style={{ color: C.muted, textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.warmWhite)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.muted)}
              >{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, fontSize: 13, color: C.muted, maxWidth: 1200, margin: "0 auto" }}>
        <span>&copy; 2026 Dr. Vella Dental. All rights reserved.</span>
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/demos/dental/impressum" style={{ color: C.muted, textDecoration: "none", transition: "color 0.3s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.teal)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.muted)}
          >Impressum</Link>
          <span style={{ cursor: "pointer" }}>Privacy</span>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   REVIEW CARD
   ═══════════════════════════════════════════ */
function ReviewCard({ review, index }: { review: typeof REVIEWS[number]; index: number }) {
  return (
    <Reveal type="slide-up" delay={0.05 * (index % 4)}>
      <div
        style={{
          background: C.surface,
          border: `1px solid ${C.border}`,
          borderRadius: 16,
          padding: 28,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          transition: "border-color 0.3s, transform 0.3s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = `${C.teal}40`;
          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = C.border;
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        <Stars size={16} />
        <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.75, flex: 1, margin: 0 }}>
          &ldquo;{review.quote}&rdquo;
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 8, borderTop: `1px solid ${C.border}` }}>
          <div
            style={{
              width: 40, height: 40, borderRadius: "50%",
              background: `${C.teal}15`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 14, fontWeight: 700, color: C.teal,
            }}
          >
            {review.initials}
          </div>
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: C.warmWhite, margin: 0 }}>{review.name}</p>
            <p style={{ fontSize: 12, color: C.muted, margin: 0 }}>{review.date}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function DentalReviewsPage() {
  return (
    <div style={{ background: C.bg, color: C.warmWhite, fontFamily: FONT, minHeight: "100vh", paddingTop: 10 }}>
      <DemoBanner />
      <SiteHeader />

      {/* ═══════ HERO ═══════ */}
      <section style={{ paddingTop: 160, paddingBottom: 60, textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center top, ${C.teal}08 0%, transparent 60%)` }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto", padding: "0 24px" }}>
          <Reveal type="fade" delay={0.1}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
              <Stars size={32} />
            </div>
          </Reveal>
          <Reveal type="slide-up" delay={0.2}>
            <h1 style={{ fontFamily: FONT, fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 16px" }}>
              <span style={{ color: C.teal }}>4.9</span>{" "}
              <span style={{ color: C.gold }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </h1>
          </Reveal>
          <Reveal type="slide-up" delay={0.3}>
            <p style={{ fontSize: 20, color: C.muted, margin: "0 0 8px", fontWeight: 500 }}>
              from <span style={{ color: C.warmWhite, fontWeight: 700 }}>340 reviews</span> on Google
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════ REVIEW GRID ═══════ */}
      <section style={{ padding: "40px 24px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="dental-reviews-grid"
          style={{
            display: "grid",
            gap: 24,
          }}
        >
          {REVIEWS.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>

        {/* CTA */}
        <Reveal type="fade" delay={0.2}>
          <div style={{ textAlign: "center", marginTop: 64 }}>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "16px 32px", background: C.teal, color: "#fff",
                borderRadius: 12, fontFamily: FONT, fontSize: 15, fontWeight: 600,
                textDecoration: "none", transition: "opacity 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >
              Leave us a review on Google <ExternalLink size={16} />
            </a>
          </div>
        </Reveal>
      </section>

      <SiteFooter />

      <style>{`
        .dental-reviews-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 1023px) {
          .dental-reviews-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 639px) {
          .dental-reviews-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
