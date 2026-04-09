"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/demos/Reveal";
import { DemoBanner } from "@/components/demos/demo-banner";
import { ChevronDown } from "lucide-react";

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

/* ─── FAQ data ─── */
const FAQS = [
  {
    q: "Does dental treatment hurt?",
    a: "We prioritise your comfort at every step. Most procedures are performed under local anaesthesia, so you won't feel pain during treatment. For patients with dental anxiety, we also offer conscious sedation options. Any post-treatment discomfort is typically mild and manageable with over-the-counter pain relief.",
  },
  {
    q: "How much do veneers cost?",
    a: "Veneer pricing depends on the material (composite vs porcelain) and the number of teeth being treated. Composite veneers start from around \u20AC250 per tooth, while porcelain veneers range from \u20AC600-\u20AC900 per tooth. We offer a free cosmetic consultation where we'll provide a personalised quote and discuss financing options.",
  },
  {
    q: "Do you accept dental insurance?",
    a: "Yes, we work with all major Maltese health insurance providers. We can submit claims directly on your behalf in most cases. If your plan requires pre-authorisation, we'll help you with the paperwork. We recommend bringing your insurance card to your first appointment so we can verify your coverage.",
  },
  {
    q: "How often should I visit the dentist?",
    a: "We generally recommend a check-up and professional cleaning every six months. However, some patients may need more frequent visits depending on their oral health. During your first visit, Dr. Vella will assess your needs and recommend a personalised schedule.",
  },
  {
    q: "What should I do in a dental emergency?",
    a: "Call our emergency line immediately at +356 2123 4567 — it's available 24/7. For a knocked-out tooth, keep it moist (in milk or saliva) and get to us within 30 minutes if possible. For severe pain or swelling, take ibuprofen and apply a cold compress while you wait for your appointment.",
  },
  {
    q: "Is Invisalign suitable for adults?",
    a: "Absolutely. In fact, the majority of our Invisalign patients are adults. Clear aligners are discreet, removable, and effective for most alignment issues including crowding, spacing, and bite problems. Treatment typically takes 6-18 months depending on complexity. We offer a free assessment to determine if you're a good candidate.",
  },
  {
    q: "How long do dental implants last?",
    a: "With proper care and regular check-ups, dental implants can last a lifetime. The implant itself (the titanium post) integrates with your jawbone and is extremely durable. The crown on top may need replacement after 10-15 years due to normal wear. Good oral hygiene and avoiding habits like teeth grinding help maximise longevity.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes, we understand that dental treatment can be a significant investment. We offer interest-free payment plans for treatments over \u20AC500, allowing you to spread the cost over 3-12 months. We also accept all major credit cards. Speak with our reception team to find a plan that works for your budget.",
  },
];

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
                color: link.href === "/demos/dental/faq" ? C.warmWhite : C.muted,
                textDecoration: "none", transition: "color 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.warmWhite; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = link.href === "/demos/dental/faq" ? C.warmWhite : C.muted; }}
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

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function DentalFaqPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ background: C.bg, color: C.warmWhite, fontFamily: FONT, minHeight: "100vh", paddingTop: 10 }}>
      <DemoBanner />
      <SiteHeader />

      {/* ═══════ HERO ═══════ */}
      <section style={{ paddingTop: 160, paddingBottom: 60, textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center top, ${C.teal}08 0%, transparent 60%)` }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto", padding: "0 24px" }}>
          <Reveal type="fade" delay={0.1}>
            <p style={{ fontFamily: FONT, color: C.teal, letterSpacing: "0.25em", fontSize: 13, fontWeight: 600, textTransform: "uppercase" as const, marginBottom: 16 }}>
              FAQ
            </p>
          </Reveal>
          <Reveal type="slide-up" delay={0.2}>
            <h1 style={{ fontFamily: FONT, fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.2, margin: 0 }}>
              Common Questions
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Hero Image */}
      <section style={{ padding: "0 24px 48px", maxWidth: 1000, margin: "0 auto" }}>
        <Reveal type="fade" delay={0.3}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "21 / 9", borderRadius: 20, overflow: "hidden", border: `1px solid ${C.border}` }}>
            <Image src="/images/dental/faq-hero.jpg" alt="" fill className="object-cover" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,16,21,0) 40%, rgba(10,16,21,0.65) 100%)" }} />
          </div>
        </Reveal>
      </section>

      {/* ═══════ ACCORDION LIST ═══════ */}
      <section style={{ padding: "20px 24px 100px", maxWidth: 760, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQS.map((faq, i) => (
            <Reveal key={i} type="fade" delay={0.05 * i}>
              <div
                style={{
                  background: C.surface,
                  border: `1px solid ${activeIndex === i ? `${C.teal}40` : C.border}`,
                  borderRadius: 12,
                  overflow: "hidden",
                  transition: "border-color 0.3s",
                }}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 600, color: C.warmWhite, fontFamily: FONT }}>
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: activeIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ flexShrink: 0, display: "flex" }}
                  >
                    <ChevronDown size={20} color={C.teal} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{ padding: "0 24px 20px" }}>
                        <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.8, margin: 0 }}>
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal type="fade" delay={0.2}>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <p style={{ fontSize: 16, color: C.muted, marginBottom: 20 }}>
              Still have questions?
            </p>
            <Link
              href="/demos/dental/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "16px 32px", background: C.teal, color: "#fff",
                borderRadius: 12, fontFamily: FONT, fontSize: 15, fontWeight: 600,
                textDecoration: "none", transition: "opacity 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
