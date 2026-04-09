"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import {
  Shield,
  Sparkles,
  HeartPulse,
  ScanLine,
  Siren,
  Baby,
  SmilePlus,
  Phone,
  MapPin,
  Clock,
  Mail,
  Star,
  ChevronRight,
  CalendarCheck,
  Menu,
  X,
  Check,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   PALETTE & TOKENS
   ═══════════════════════════════════════════════════════════ */
const C = {
  bg: "#0A1015",
  surface: "#111920",
  teal: "#0EA5E9",
  tealDark: "#0284C7",
  white: "#F8FAFC",
  muted: "#64748B",
  mutedLight: "#94A3B8",
  border: "#1E293B",
  gold: "#F59E0B",
};

const FONT =
  "var(--font-display), 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";

/* ═══════════════════════════════════════════════════════════
   REVEAL
   ═══════════════════════════════════════════════════════════ */
function useReveal(threshold = 0.15) {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold }
    );
    io.observe(ref);
    return () => io.disconnect();
  }, [ref, threshold]);
  return { ref: setRef, visible };
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════════════════════ */
const NAV_LINKS = [
  { label: "Services", href: "/demos/dental/services" },
  { label: "Team", href: "/demos/dental/team" },
  { label: "Technology", href: "/demos/dental/technology" },
  { label: "Reviews", href: "/demos/dental/reviews" },
  { label: "FAQ", href: "/demos/dental/faq" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{ position: "fixed", top: 40, left: 0, right: 0, zIndex: 90, background: "transparent", borderBottom: "none", transition: "all 0.3s ease", fontFamily: FONT }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/demos/dental" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <span style={{ fontSize: 18, fontWeight: 300, color: C.white, letterSpacing: "0.05em", textTransform: "uppercase" as const }}>Dr. Vella <span style={{ fontWeight: 600 }}>Dental</span></span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="dental-nav-desktop">
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href} style={{ fontSize: 14, fontWeight: 500, color: C.mutedLight, textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = C.white)} onMouseLeave={(e) => (e.currentTarget.style.color = C.mutedLight)}>{l.label}</Link>
          ))}
          <Link href="/demos/dental/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 22px", borderRadius: 10, background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            <Phone size={15} />Book Appointment
          </Link>
        </div>
        <button className="dental-nav-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} style={{ display: "none", background: "none", border: "none", color: C.white, cursor: "pointer", padding: 4 }}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="dental-nav-mobile-menu" style={{ background: C.surface, borderTop: `1px solid ${C.border}`, padding: "16px 24px 24px" }}>
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)} style={{ display: "block", padding: "12px 0", fontSize: 15, fontWeight: 500, color: C.mutedLight, textDecoration: "none", borderBottom: `1px solid ${C.border}` }}>{l.label}</Link>
          ))}
          <Link href="/demos/dental/contact" onClick={() => setMobileOpen(false)} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16, padding: "12px 24px", borderRadius: 10, background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            <Phone size={15} />Book Appointment
          </Link>
        </div>
      )}
      <style>{`
        @media (max-width: 768px) { .dental-nav-desktop { display: none !important; } .dental-nav-mobile-toggle { display: block !important; } }
        @media (min-width: 769px) { .dental-nav-mobile-menu { display: none !important; } }
      `}</style>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer style={{ background: C.surface, borderTop: `1px solid ${C.border}`, padding: "64px 24px 40px", fontFamily: FONT }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ fontSize: 18, fontWeight: 300, color: C.white, letterSpacing: "0.05em", textTransform: "uppercase" as const }}>Dr. Vella <span style={{ fontWeight: 600 }}>Dental</span></span>
          </div>
          <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
            {[1, 2, 3, 4, 5].map((i) => (<Star key={i} size={16} fill={C.gold} color={C.gold} />))}
          </div>
          <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>Modern dental care in a warm, welcoming environment. Your smile is our passion.</p>
        </div>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: C.white, marginBottom: 16, letterSpacing: "0.05em", textTransform: "uppercase" }}>Services</h4>
          {["General Dentistry", "Cosmetic Dentistry", "Dental Implants", "Orthodontics", "Emergency Care", "Children's Dentistry"].map((s) => (
            <Link key={s} href="/demos/dental/services" style={{ display: "block", fontSize: 14, color: C.muted, textDecoration: "none", padding: "4px 0", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = C.teal)} onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}>{s}</Link>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: C.white, marginBottom: 16, letterSpacing: "0.05em", textTransform: "uppercase" }}>Opening Hours</h4>
          {[["Mon - Fri", "8:00 AM - 7:00 PM"], ["Saturday", "9:00 AM - 2:00 PM"], ["Sunday", "Closed"]].map(([day, hours]) => (
            <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 14 }}>
              <span style={{ color: C.muted }}>{day}</span><span style={{ color: C.mutedLight }}>{hours}</span>
            </div>
          ))}
          <div style={{ marginTop: 12, padding: "8px 12px", borderRadius: 8, background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.15)", fontSize: 13, color: C.teal }}>
            <Siren size={14} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />Emergency: Available 24/7
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: C.white, marginBottom: 16, letterSpacing: "0.05em", textTransform: "uppercase" }}>Contact</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[{ icon: <Phone size={15} />, text: "+356 2123 4567" }, { icon: <Mail size={15} />, text: "hello@drvella.mt" }, { icon: <MapPin size={15} />, text: "45 Republic Street, Valletta" }].map((item) => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: C.muted }}>
                <span style={{ color: C.teal }}>{item.icon}</span>{item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "40px auto 0", paddingTop: 24, borderTop: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, fontSize: 13, color: C.muted }}>
        <span>&copy; 2025 Dr. Vella Dental. All rights reserved.</span>
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/demos/dental/impressum" style={{ color: C.muted, textDecoration: "none" }}>Impressum</Link>
          <Link href="/demos/dental/faq" style={{ color: C.muted, textDecoration: "none" }}>FAQ</Link>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════
   SERVICE DATA
   ═══════════════════════════════════════════════════════════ */
type ServiceCategory = {
  id: string;
  icon: React.ElementType;
  name: string;
  description: string;
  image: string;
  included: string[];
  treatments: { name: string; duration: string; price: string }[];
};

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "general",
    icon: Shield,
    name: "General Dentistry",
    image: "/images/dental/service-cleaning.jpg",
    description:
      "Your oral health is the foundation of a great smile. Our general dentistry services focus on prevention, early detection, and gentle treatment. From routine check-ups to more complex procedures, we take the time to explain everything and make sure you feel comfortable throughout your visit.",
    included: [
      "Comprehensive oral examination",
      "Professional teeth cleaning & polishing",
      "Digital X-rays with minimal radiation",
      "Gum health assessment",
      "Personalised treatment planning",
      "Oral cancer screening",
    ],
    treatments: [
      { name: "Check-up & Clean", duration: "45 min", price: "\u20AC60" },
      { name: "Dental Filling (composite)", duration: "30–60 min", price: "\u20AC80–\u20AC150" },
      { name: "Root Canal Treatment", duration: "60–90 min", price: "\u20AC350–\u20AC600" },
      { name: "Tooth Extraction (simple)", duration: "30 min", price: "\u20AC80–\u20AC120" },
      { name: "Dental Crown", duration: "2 visits", price: "\u20AC450–\u20AC700" },
      { name: "Night Guard / Splint", duration: "2 visits", price: "\u20AC200–\u20AC350" },
    ],
  },
  {
    id: "cosmetic",
    icon: Sparkles,
    name: "Cosmetic Dentistry",
    image: "/images/dental/service-whitening.jpg",
    description:
      "Transform your smile with treatments designed to enhance the natural beauty of your teeth. Whether you are looking for a subtle improvement or a complete smile makeover, Dr. Vella combines artistry with precision to deliver results that look and feel completely natural.",
    included: [
      "Smile design consultation",
      "Digital smile preview",
      "Custom shade matching",
      "Minimally invasive techniques",
      "Premium materials and labs",
      "Aftercare support programme",
    ],
    treatments: [
      { name: "Teeth Whitening (in-office)", duration: "60 min", price: "\u20AC250–\u20AC400" },
      { name: "Take-Home Whitening Kit", duration: "2 weeks", price: "\u20AC150–\u20AC200" },
      { name: "Porcelain Veneers (per tooth)", duration: "2–3 visits", price: "\u20AC600–\u20AC900" },
      { name: "Composite Bonding (per tooth)", duration: "30–60 min", price: "\u20AC150–\u20AC300" },
      { name: "Smile Makeover Package", duration: "Multiple visits", price: "From \u20AC3,000" },
      { name: "Gum Contouring", duration: "60 min", price: "\u20AC300–\u20AC500" },
    ],
  },
  {
    id: "implants",
    icon: HeartPulse,
    name: "Dental Implants",
    image: "/images/dental/service-implant.jpg",
    description:
      "Missing teeth can affect your confidence and quality of life. Our implant solutions are designed to look, feel, and function just like your natural teeth. Dr. Camilleri brings over a decade of specialist experience to every implant case, using the latest guided surgery techniques for precision and comfort.",
    included: [
      "3D CBCT scan and planning",
      "Guided implant surgery",
      "Premium titanium implants",
      "Custom abutment and crown",
      "Sedation options available",
      "5-year implant warranty",
    ],
    treatments: [
      { name: "Single Tooth Implant", duration: "2–4 months", price: "\u20AC1,200–\u20AC1,800" },
      { name: "Implant-Supported Bridge", duration: "3–6 months", price: "\u20AC3,500–\u20AC5,500" },
      { name: "All-on-4 (full arch)", duration: "3–6 months", price: "From \u20AC8,000" },
      { name: "Bone Grafting", duration: "60–90 min", price: "\u20AC400–\u20AC800" },
      { name: "Sinus Lift", duration: "90 min", price: "\u20AC600–\u20AC1,000" },
      { name: "Implant Consultation", duration: "30 min", price: "Complimentary" },
    ],
  },
  {
    id: "orthodontics",
    icon: ScanLine,
    name: "Orthodontics",
    image: "/images/dental/service-ortho.jpg",
    description:
      "Straighter teeth are healthier teeth. Our orthodontic options cater to all ages and lifestyles, from nearly invisible aligners to traditional braces. We create custom treatment plans using digital scanning technology, so you can see your predicted results before treatment even begins.",
    included: [
      "Digital iTero scan",
      "3D treatment simulation",
      "Custom aligner fabrication",
      "Regular progress check-ups",
      "Retainers included in treatment",
      "Flexible payment options",
    ],
    treatments: [
      { name: "Invisalign Full", duration: "12–18 months", price: "\u20AC3,500–\u20AC5,000" },
      { name: "Invisalign Lite", duration: "6–9 months", price: "\u20AC2,500–\u20AC3,500" },
      { name: "Fixed Braces (metal)", duration: "12–24 months", price: "\u20AC2,000–\u20AC3,500" },
      { name: "Ceramic Braces", duration: "12–24 months", price: "\u20AC2,500–\u20AC4,000" },
      { name: "Retainers (set)", duration: "1 visit", price: "\u20AC200–\u20AC400" },
    ],
  },
  {
    id: "emergency",
    icon: Siren,
    name: "Emergency Dentistry",
    image: "/images/dental/service-emergency.jpg",
    description:
      "Dental emergencies do not wait, and neither do we. We offer same-day emergency appointments for toothaches, broken teeth, lost fillings, and other urgent dental issues. Our team is here to relieve your pain quickly and get you back to feeling yourself.",
    included: [
      "Same-day appointments",
      "Pain relief priority",
      "Emergency X-rays",
      "Temporary and permanent solutions",
      "After-hours phone support",
      "Follow-up care included",
    ],
    treatments: [
      { name: "Emergency Consultation", duration: "20–30 min", price: "\u20AC80" },
      { name: "Toothache / Infection Treatment", duration: "30–60 min", price: "\u20AC80–\u20AC200" },
      { name: "Broken Tooth Repair", duration: "30–60 min", price: "\u20AC100–\u20AC300" },
      { name: "Lost Filling / Crown Recement", duration: "20–30 min", price: "\u20AC60–\u20AC120" },
      { name: "Emergency Extraction", duration: "30–45 min", price: "\u20AC100–\u20AC200" },
    ],
  },
  {
    id: "children",
    icon: Baby,
    name: "Children's Dentistry",
    image: "/images/dental/service-kids.jpg",
    description:
      "We believe every child deserves a positive experience at the dentist. Our gentle, patient approach helps your little ones feel safe and even excited about their dental visits. We focus on prevention, education, and building healthy habits that will last a lifetime.",
    included: [
      "Child-friendly environment",
      "Gentle and patient approach",
      "Fluoride treatments",
      "Fissure sealants",
      "Dietary advice for healthy teeth",
      "Fun reward programme",
    ],
    treatments: [
      { name: "Children's Check-up & Clean", duration: "30 min", price: "\u20AC45" },
      { name: "Fluoride Treatment", duration: "15 min", price: "\u20AC30–\u20AC50" },
      { name: "Fissure Sealants (per tooth)", duration: "15 min", price: "\u20AC35–\u20AC50" },
      { name: "Children's Filling", duration: "30 min", price: "\u20AC60–\u20AC100" },
      { name: "Space Maintainer", duration: "2 visits", price: "\u20AC150–\u20AC250" },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function ServicesPage() {
  return (
    <div style={{ background: C.bg, color: C.white, fontFamily: FONT, minHeight: "100vh" }}>
      <DemoBanner />
      <Nav />

      {/* Hero */}
      <section style={{ paddingTop: 152, paddingBottom: 48, maxWidth: 1200, margin: "0 auto", padding: "152px 24px 48px", textAlign: "center" }}>
        <Reveal>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: C.teal }}>
            Comprehensive Care
          </span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginTop: 12, marginBottom: 16 }}>
            Our <span style={{ color: C.teal }}>Services</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: C.mutedLight, maxWidth: 560, margin: "0 auto" }}>
            From routine care to complete smile transformations, we offer a full range of dental treatments in a warm, welcoming environment.
          </p>
        </Reveal>
      </section>

      {/* Hero Banner */}
      <section style={{ padding: "0 24px 48px", maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ position: "relative", width: "100%", aspectRatio: "21 / 9", borderRadius: 20, overflow: "hidden", border: `1px solid ${C.border}` }}>
            <Image src="/images/dental/services-hero.jpg" alt="" fill priority className="object-cover" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,16,21,0) 40%, rgba(10,16,21,0.7) 100%)" }} />
          </div>
        </Reveal>
      </section>

      {/* Service Sections */}
      {SERVICE_CATEGORIES.map((cat, idx) => {
        const Icon = cat.icon;
        const isAlt = idx % 2 === 1;
        return (
          <section
            key={cat.id}
            id={cat.id}
            style={{
              padding: "80px 24px",
              background: isAlt ? C.surface : C.bg,
            }}
          >
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>
              <Reveal>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      background: "rgba(14,165,233,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={28} color={C.teal} strokeWidth={1.5} />
                  </div>
                  <h2 style={{ fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                    {cat.name}
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: C.mutedLight, marginBottom: 32, maxWidth: 720 }}>
                  {cat.description}
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: 16, overflow: "hidden", marginBottom: 32, border: `1px solid ${C.border}` }}>
                  <Image src={cat.image} alt={cat.name} fill className="object-cover" />
                </div>
              </Reveal>

              {/* What's included */}
              <Reveal delay={0.15}>
                <div
                  style={{
                    background: isAlt ? C.bg : C.surface,
                    borderRadius: 16,
                    padding: 28,
                    border: `1px solid ${C.border}`,
                    marginBottom: 32,
                  }}
                >
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.white, marginBottom: 16, letterSpacing: "-0.01em" }}>
                    What&apos;s Included
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                      gap: 10,
                    }}
                  >
                    {cat.included.map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: C.mutedLight }}>
                        <Check size={16} color={C.teal} style={{ flexShrink: 0 }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Pricing table */}
              <Reveal delay={0.2}>
                <div
                  style={{
                    background: isAlt ? C.bg : C.surface,
                    borderRadius: 16,
                    border: `1px solid ${C.border}`,
                    overflow: "hidden",
                    marginBottom: 32,
                  }}
                >
                  {/* Table header */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 140px 160px",
                      padding: "14px 24px",
                      borderBottom: `1px solid ${C.border}`,
                      fontSize: 12,
                      fontWeight: 700,
                      color: C.muted,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                    className="dental-price-header"
                  >
                    <span>Treatment</span>
                    <span>Duration</span>
                    <span style={{ textAlign: "right" }}>Price</span>
                  </div>
                  {/* Rows */}
                  {cat.treatments.map((t, i) => (
                    <div
                      key={t.name}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 140px 160px",
                        padding: "16px 24px",
                        borderBottom: i < cat.treatments.length - 1 ? `1px solid ${C.border}` : "none",
                        fontSize: 14,
                        transition: "background 0.2s",
                      }}
                      className="dental-price-row"
                    >
                      <span style={{ fontWeight: 600, color: C.white }}>{t.name}</span>
                      <span style={{ color: C.muted }}>{t.duration}</span>
                      <span style={{ textAlign: "right", fontWeight: 600, color: C.teal }}>{t.price}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <Link
                  href="/demos/dental/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "14px 28px",
                    borderRadius: 12,
                    background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`,
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                >
                  <CalendarCheck size={17} />
                  Book This Treatment
                </Link>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* Booking CTA */}
      <section style={{ padding: "80px 24px" }}>
        <Reveal>
          <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Not Sure Which Treatment <span style={{ color: C.teal }}>Is Right for You</span>?
            </h2>
            <p style={{ fontSize: 17, color: C.mutedLight, lineHeight: 1.7, marginBottom: 32 }}>
              Book a complimentary consultation and we will create a personalised treatment plan just for you.
            </p>
            <Link href="/demos/dental/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 32px", borderRadius: 12, background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: "#fff", fontSize: 16, fontWeight: 600, textDecoration: "none" }}>
              <CalendarCheck size={18} />
              Book Free Consultation
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />

      <style>{`
        .dental-price-row:hover { background: rgba(14,165,233,0.03); }
        @media (max-width: 600px) {
          .dental-price-header, .dental-price-row {
            grid-template-columns: 1fr 100px !important;
          }
          .dental-price-header span:nth-child(2),
          .dental-price-row span:nth-child(2) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
