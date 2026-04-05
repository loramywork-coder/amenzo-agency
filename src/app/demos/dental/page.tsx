"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import { VideoHeroBg } from "@/components/video-hero-bg";
import {
  Sparkles,
  Shield,
  HeartPulse,
  Baby,
  Siren,
  ScanLine,
  SmilePlus,
  Camera,
  SprayCan,
  Sofa,
  Phone,
  MapPin,
  Clock,
  Mail,
  Star,
  ChevronRight,
  ArrowRight,
  CalendarCheck,
  Menu,
  X,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   PALETTE & TOKENS
   ═══════════════════════════════════════════════════════════ */
const C = {
  bg: "#0A1015",
  surface: "#111920",
  teal: "#94B8A0",
  tealDark: "#7DA08A",
  white: "#F8FAFC",
  muted: "#64748B",
  mutedLight: "#94A3B8",
  border: "#1E293B",
  gold: "#94B8A0",
};

const FONT =
  "var(--font-display), 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";

/* ═══════════════════════════════════════════════════════════
   REVEAL ON SCROLL
   ═══════════════════════════════════════════════════════════ */
function useReveal(threshold = 0.15) {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(ref);
    return () => io.disconnect();
  }, [ref, threshold]);
  return { ref: setRef, visible };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   INLINE NAV
   ═══════════════════════════════════════════════════════════ */
const NAV_LINKS = [
  { label: "Services", href: "/demos/dental/services" },
  { label: "Team", href: "/demos/dental/team" },
  { label: "Technology", href: "/demos/dental/technology" },
  { label: "Reviews", href: "/demos/dental/reviews" },
  { label: "FAQ", href: "/demos/dental/faq" },
];

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 40,
        left: 0,
        right: 0,
        zIndex: 90,
        background: "rgba(10,16,21,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand */}
        <Link
          href="/demos/dental"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 300,
              color: C.white,
              letterSpacing: "0.05em",
              textTransform: "uppercase" as const,
            }}
          >
            Dr. Vella <span style={{ fontWeight: 600 }}>Dental</span>
          </span>
        </Link>

        {/* Hamburger toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            color: C.white,
            cursor: "pointer",
            padding: 4,
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="dental-nav-mobile-menu"
          style={{
            background: C.surface,
            borderTop: `1px solid ${C.border}`,
            padding: "16px 24px 24px",
          }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: 15,
                fontWeight: 500,
                color: C.mutedLight,
                textDecoration: "none",
                borderBottom: `1px solid ${C.border}`,
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/demos/dental/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 16,
              padding: "12px 24px",
              borderRadius: 10,
              background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`,
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <Phone size={15} />
            Book Appointment
          </Link>
        </div>
      )}

    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════
   INLINE FOOTER
   ═══════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer
      style={{
        background: C.surface,
        borderTop: `1px solid ${C.border}`,
        padding: "64px 24px 40px",
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 48,
        }}
      >
        {/* Brand col */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SmilePlus size={20} color="#fff" strokeWidth={2} />
            </div>
            <span style={{ fontSize: 18, fontWeight: 700, color: C.white }}>
              Dr. Vella Dental
            </span>
          </div>
          <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={16} fill={C.gold} color={C.gold} />
            ))}
          </div>
          <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>
            Modern dental care in a warm, welcoming environment. Your smile is our passion.
          </p>
        </div>

        {/* Services col */}
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: C.white, marginBottom: 16, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Services
          </h4>
          {["General Dentistry", "Cosmetic Dentistry", "Dental Implants", "Orthodontics", "Emergency Care", "Children's Dentistry"].map((s) => (
            <Link
              key={s}
              href="/demos/dental/services"
              style={{ display: "block", fontSize: 14, color: C.muted, textDecoration: "none", padding: "4px 0", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.teal)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {s}
            </Link>
          ))}
        </div>

        {/* Hours col */}
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: C.white, marginBottom: 16, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Opening Hours
          </h4>
          {[
            ["Mon - Fri", "8:00 AM - 7:00 PM"],
            ["Saturday", "9:00 AM - 2:00 PM"],
            ["Sunday", "Closed"],
          ].map(([day, hours]) => (
            <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 14 }}>
              <span style={{ color: C.muted }}>{day}</span>
              <span style={{ color: C.mutedLight }}>{hours}</span>
            </div>
          ))}
          <div
            style={{
              marginTop: 12,
              padding: "8px 12px",
              borderRadius: 8,
              background: "rgba(14,165,233,0.08)",
              border: `1px solid rgba(14,165,233,0.15)`,
              fontSize: 13,
              color: C.teal,
            }}
          >
            <Siren size={14} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />
            Emergency: Available 24/7
          </div>
        </div>

        {/* Contact col */}
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: C.white, marginBottom: 16, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Contact
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { icon: <Phone size={15} />, text: "+356 2123 4567" },
              { icon: <Mail size={15} />, text: "hello@drvella.mt" },
              { icon: <MapPin size={15} />, text: "45 Republic Street, Valletta" },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: C.muted }}>
                <span style={{ color: C.teal }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          maxWidth: 1200,
          margin: "40px auto 0",
          paddingTop: 24,
          borderTop: `1px solid ${C.border}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          fontSize: 13,
          color: C.muted,
        }}
      >
        <span>&copy; 2025 Dr. Vella Dental. All rights reserved.</span>
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/demos/dental/impressum" style={{ color: C.muted, textDecoration: "none" }}>
            Impressum
          </Link>
          <Link href="/demos/dental/faq" style={{ color: C.muted, textDecoration: "none" }}>
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    desc: "Veneers, whitening, bonding and smile makeovers designed to give you the confidence you deserve.",
    price: "From \u20AC250",
    span: true,
  },
  {
    icon: Shield,
    title: "General Dentistry",
    desc: "Comprehensive check-ups, fillings, and preventive care to keep your smile healthy.",
    price: "From \u20AC60",
    span: false,
  },
  {
    icon: HeartPulse,
    title: "Dental Implants",
    desc: "Permanent, natural-looking tooth replacements that feel just like your own.",
    price: "From \u20AC1,200",
    span: false,
  },
  {
    icon: ScanLine,
    title: "Orthodontics",
    desc: "Invisalign and modern braces for a straighter, more confident smile at any age.",
    price: "From \u20AC2,500",
    span: false,
  },
  {
    icon: Siren,
    title: "Emergency Care",
    desc: "Same-day appointments for dental emergencies. We are here when you need us most.",
    price: "From \u20AC80",
    span: false,
  },
  {
    icon: Baby,
    title: "Children's Dentistry",
    desc: "Gentle, fun visits that help your little ones build healthy habits for life.",
    price: "From \u20AC45",
    span: false,
  },
];

const REVIEWS = [
  {
    name: "Maria C.",
    text: "Dr. Vella completely transformed my smile. The whole team made me feel so comfortable and at ease.",
    rating: 5,
  },
  {
    name: "James T.",
    text: "Best dental experience I have ever had. The technology here is incredible and the results speak for themselves.",
    rating: 5,
  },
  {
    name: "Sofia L.",
    text: "My children actually look forward to their visits now. The staff are so warm and patient with kids.",
    rating: 5,
  },
];

const TEAM = [
  {
    name: "Dr. Sarah Vella",
    role: "Founder & Cosmetic Dentist",
    initials: "SV",
    bio: "15 years of experience creating beautiful smiles. Passionate about combining art and science.",
  },
  {
    name: "Dr. Mark Camilleri",
    role: "Implant Specialist",
    initials: "MC",
    bio: "10 years focused on dental implants and restorative dentistry. Precision is everything.",
  },
  {
    name: "Jessica Borg",
    role: "Dental Hygienist",
    initials: "JB",
    bio: "8 years keeping smiles healthy and bright. Your comfort and care are my top priority.",
  },
];

const TECH = [
  {
    icon: ScanLine,
    title: "3D Digital Scanning",
    desc: "Precise, comfortable digital impressions replacing traditional moulds.",
  },
  {
    icon: Camera,
    title: "Intraoral Cameras",
    desc: "See exactly what we see with high-definition imaging of your teeth.",
  },
  {
    icon: SprayCan,
    title: "Advanced Sterilisation",
    desc: "Hospital-grade sterilisation protocols for your complete peace of mind.",
  },
  {
    icon: Sofa,
    title: "Comfort Suite",
    desc: "Noise-cancelling headphones, weighted blankets, and calming aromatherapy.",
  },
];

const INSURANCE = ["Bupa", "AXA", "Mapfre", "Atlas", "Laferla"];

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function DentalHomePage() {
  return (
    <div style={{ background: C.bg, color: C.white, fontFamily: FONT, minHeight: "100vh" }}>
      <DemoBanner />
      <Nav />

      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <VideoHeroBg src="/videos/demo-dental.mp4" gradient="linear-gradient(to bottom, rgba(10,16,21,0.45) 0%, rgba(10,16,21,0.3) 40%, rgba(10,16,21,0.7) 75%, rgba(10,16,21,0.95) 95%)" startOpacity={0.65} />
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "152px 24px 80px",
            display: "flex",
            alignItems: "center",
            gap: 48,
            flexWrap: "wrap",
          }}
        >
        {/* Left 55% */}
        <div style={{ flex: "1 1 520px", minWidth: 300 }}>
          <Reveal>
            <span
              style={{
                display: "inline-block",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: C.teal,
                marginBottom: 20,
              }}
            >
              DR. VELLA DENTAL
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: 24,
              }}
            >
              Your Smile,{" "}
              <span style={{ color: C.teal }}>Perfected.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: C.mutedLight,
                maxWidth: 480,
                marginBottom: 36,
              }}
            >
              Experience dental care that feels different. We combine warmth, expertise,
              and the latest technology to give you a smile you will love showing off.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
              <Link
                href="/demos/dental/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: 999,
                  background: "#fff",
                  color: C.bg,
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "0.03em",
                  transition: "opacity 0.2s",
                }}
              >
                <CalendarCheck size={16} />
                Book Your Visit
              </Link>
              <Link
                href="/demos/dental/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: 999,
                  background: "transparent",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  letterSpacing: "0.03em",
                  border: "1px solid rgba(255,255,255,0.2)",
                  transition: "all 0.2s",
                }}
              >
                Our Services
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[
                { label: "Google Rating", value: "4.9", icon: <Star size={16} fill={C.gold} color={C.gold} /> },
                { label: "Experience", value: "15 Years" },
                { label: "Happy Patients", value: "2,500+" },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "center" }}>
                    {stat.icon}
                    <span style={{ fontSize: 22, fontWeight: 800, color: C.white }}>{stat.value}</span>
                  </div>
                  <span style={{ fontSize: 12, color: C.muted, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right 45% - Hero image */}
        <Reveal delay={0.2} className="dental-hero-image-wrap">
          <div
            style={{
              flex: "1 1 400px",
              minWidth: 300,
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              border: `2px solid rgba(14,165,233,0.2)`,
              boxShadow: `0 0 80px rgba(14,165,233,0.12), 0 32px 64px rgba(0,0,0,0.4)`,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80&auto=format&fit=crop"
              alt="Modern dental care"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>
        </Reveal>
        </div>
      </section>

      {/* ── SERVICES BENTO ── */}
      <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: C.teal,
              }}
            >
              What We Offer
            </span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginTop: 12,
              }}
            >
              Our Services
            </h2>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <Link
                  href="/demos/dental/services"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    gridColumn: s.span ? "span 2" : "span 1",
                  }}
                  className={s.span ? "dental-service-wide" : ""}
                >
                  <div
                    style={{
                      background: C.surface,
                      borderRadius: 16,
                      padding: 28,
                      border: `1px solid ${C.border}`,
                      borderLeft: `3px solid transparent`,
                      transition: "border-color 0.3s, transform 0.3s",
                      height: "100%",
                      cursor: "pointer",
                    }}
                    className="dental-service-card"
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: "rgba(14,165,233,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 16,
                      }}
                    >
                      <Icon size={24} color={C.teal} strokeWidth={1.5} />
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: C.white, marginBottom: 8, letterSpacing: "-0.01em" }}>
                      {s.title}
                    </h3>
                    <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.6, marginBottom: 16 }}>
                      {s.desc}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: C.teal }}>{s.price}</span>
                      <ChevronRight size={16} color={C.muted} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <style>{`
          .dental-service-card:hover {
            border-left-color: ${C.teal} !important;
            transform: translateY(-2px);
          }
          @media (max-width: 640px) {
            .dental-service-wide { grid-column: span 1 !important; }
          }
        `}</style>
      </section>

      {/* ── TRUST / GOOGLE REVIEWS ── */}
      <section style={{ padding: "80px 24px", background: C.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: C.teal,
                }}
              >
                Patient Love
              </span>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 16, flexWrap: "wrap" }}>
                <span style={{ fontSize: 64, fontWeight: 800, color: C.white, lineHeight: 1 }}>4.9</span>
                <div>
                  <div style={{ display: "flex", gap: 3, marginBottom: 4 }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={22} fill={C.gold} color={C.gold} />
                    ))}
                  </div>
                  <span style={{ fontSize: 14, color: C.muted }}>Based on 340 Google reviews</span>
                </div>
              </div>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.1}>
                <div
                  style={{
                    background: C.bg,
                    borderRadius: 16,
                    padding: 28,
                    border: `1px solid ${C.border}`,
                    height: "100%",
                  }}
                >
                  <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} size={14} fill={C.gold} color={C.gold} />
                    ))}
                  </div>
                  <p style={{ fontSize: 15, color: C.mutedLight, lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "rgba(14,165,233,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 13,
                        fontWeight: 700,
                        color: C.teal,
                      }}
                    >
                      {r.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 600, color: C.white }}>{r.name}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM PREVIEW ── */}
      <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: C.teal }}>
              Meet Our Team
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em", marginTop: 12 }}>
              People Who Care
            </h2>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {TEAM.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <Link href="/demos/dental/team" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    background: C.surface,
                    borderRadius: 16,
                    padding: 32,
                    border: `1px solid ${C.border}`,
                    textAlign: "center",
                    transition: "transform 0.3s, border-color 0.3s",
                    cursor: "pointer",
                  }}
                  className="dental-team-card"
                >
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, rgba(14,165,233,0.15), rgba(14,165,233,0.05))`,
                      border: `2px solid rgba(14,165,233,0.2)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      fontSize: 24,
                      fontWeight: 800,
                      color: C.teal,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {t.initials}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: C.white, marginBottom: 4 }}>{t.name}</h3>
                  <p style={{ fontSize: 13, color: C.teal, fontWeight: 500, marginBottom: 12 }}>{t.role}</p>
                  <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.6 }}>{t.bio}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <style>{`
          .dental-team-card:hover { transform: translateY(-4px); border-color: rgba(14,165,233,0.3) !important; }
        `}</style>
      </section>

      {/* ── TECHNOLOGY ── */}
      <section style={{ padding: "80px 24px", background: C.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: C.teal }}>
                Modern Equipment
              </span>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em", marginTop: 12 }}>
                Technology You Can Trust
              </h2>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {TECH.map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal key={t.title} delay={i * 0.1}>
                  <div
                    style={{
                      background: C.bg,
                      borderRadius: 16,
                      padding: 28,
                      border: `1px solid ${C.border}`,
                      textAlign: "center",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 14,
                        background: "rgba(14,165,233,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 20px",
                      }}
                    >
                      <Icon size={28} color={C.teal} strokeWidth={1.5} />
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: C.white, marginBottom: 8 }}>{t.title}</h3>
                    <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.6 }}>{t.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── INSURANCE STRIP ── */}
      <section style={{ padding: "40px 24px", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <Reveal>
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 32,
              flexWrap: "wrap",
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: 13, color: C.muted, fontWeight: 500 }}>Accepted Insurance:</span>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
              {INSURANCE.map((name) => (
                <span key={name} style={{ fontSize: 15, fontWeight: 600, color: C.mutedLight, letterSpacing: "-0.01em" }}>
                  {name}
                </span>
              ))}
            </div>
            <div
              style={{
                padding: "6px 16px",
                borderRadius: 20,
                background: "rgba(14,165,233,0.08)",
                border: `1px solid rgba(14,165,233,0.15)`,
                fontSize: 13,
                fontWeight: 600,
                color: C.teal,
              }}
            >
              0% interest payment plans available
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── BOOKING CTA ── */}
      <section style={{ padding: "80px 24px" }}>
        <Reveal>
          <div
            style={{
              maxWidth: 680,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Ready for Your <span style={{ color: C.teal }}>Best Smile</span>?
            </h2>
            <p style={{ fontSize: 17, color: C.mutedLight, lineHeight: 1.7, marginBottom: 32 }}>
              Book your appointment today and take the first step towards the smile you have always wanted.
              New patients receive a complimentary consultation.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/demos/dental/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "16px 32px",
                  borderRadius: 12,
                  background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`,
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
              >
                <CalendarCheck size={18} />
                Book Appointment
              </Link>
              <a
                href="tel:+35621234567"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "16px 32px",
                  borderRadius: 12,
                  background: "transparent",
                  color: C.teal,
                  fontSize: 16,
                  fontWeight: 600,
                  textDecoration: "none",
                  border: `1.5px solid ${C.teal}`,
                }}
              >
                <Phone size={17} />
                +356 2123 4567
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
