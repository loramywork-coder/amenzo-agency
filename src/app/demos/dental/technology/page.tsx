"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import {
  SmilePlus,
  Phone,
  MapPin,
  Mail,
  Star,
  Siren,
  CalendarCheck,
  Menu,
  X,
  ScanLine,
  Scan,
  Crown,
  Microscope,
  Camera,
  Sofa,
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
    <nav style={{ position: "fixed", top: 40, left: 0, right: 0, zIndex: 90, background: scrolled ? "rgba(10,16,21,0.95)" : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", borderBottom: scrolled ? `1px solid ${C.border}` : "none", transition: "all 0.3s ease", fontFamily: FONT }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/demos/dental" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <SmilePlus size={20} color="#fff" strokeWidth={2} />
          </div>
          <span style={{ fontSize: 18, fontWeight: 700, color: C.white, letterSpacing: "-0.02em" }}>Dr. Vella Dental</span>
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
            <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <SmilePlus size={20} color="#fff" strokeWidth={2} />
            </div>
            <span style={{ fontSize: 18, fontWeight: 700, color: C.white }}>Dr. Vella Dental</span>
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
   TECHNOLOGY DATA
   ═══════════════════════════════════════════════════════════ */
const TECHNOLOGIES = [
  {
    icon: ScanLine,
    title: "CBCT 3D Scanner",
    description:
      "Our Cone Beam Computed Tomography scanner produces detailed 3D images of your teeth, jawbone, and surrounding structures in just 14 seconds. This technology allows us to plan implant placements with sub-millimetre precision, diagnose hidden infections, and identify issues that traditional X-rays simply cannot reveal. The radiation dose is a fraction of a hospital CT scan, making it both incredibly informative and reassuringly safe.",
    features: [
      "Full 3D jaw and tooth mapping",
      "Implant planning with guided surgery",
      "Airway and sinus assessment",
      "Ultra-low radiation dose",
    ],
  },
  {
    icon: Scan,
    title: "iTero Digital Scanner",
    description:
      "Say goodbye to uncomfortable impression trays and gag-inducing paste. Our iTero Element scanner captures a precise 3D model of your teeth using a small wand that gently glides over your teeth. The scan takes just a few minutes and is displayed in real-time on screen, so you can see your teeth in incredible detail. For Invisalign patients, the scanner can even show you a simulation of your predicted results before treatment begins.",
    features: [
      "No more messy impressions",
      "Real-time 3D visualisation",
      "Invisalign Outcome Simulator",
      "Accurate to 10 microns",
    ],
  },
  {
    icon: Crown,
    title: "CEREC Same-Day Crowns",
    description:
      "With CEREC technology, we can design, mill, and fit a custom porcelain crown in a single appointment. The system uses CAD/CAM software to digitally design your restoration based on a scan of your tooth, then mills it from a solid block of high-quality ceramic right in our clinic. No temporary crowns, no second visits, no waiting for a lab. You walk in with a damaged tooth and walk out with a permanent, natural-looking restoration.",
    features: [
      "Crown ready in approximately 90 minutes",
      "No temporary crown needed",
      "Premium ceramic materials",
      "Precise digital fit",
    ],
  },
  {
    icon: Microscope,
    title: "Dental Microscope",
    description:
      "Our surgical microscope provides up to 25x magnification, giving our dentists an extraordinary level of detail during complex procedures. This is particularly valuable for root canal treatments, where we need to locate and clean tiny canals that are invisible to the naked eye. The microscope illuminates the treatment area with bright, shadow-free LED light, enabling us to work with a precision that significantly improves outcomes and preserves more of your natural tooth structure.",
    features: [
      "Up to 25x magnification",
      "Enhanced root canal precision",
      "Shadow-free LED illumination",
      "Preserves more natural tooth",
    ],
  },
  {
    icon: Camera,
    title: "Intraoral Camera",
    description:
      "Our high-definition intraoral cameras let you see exactly what we see. These tiny cameras capture detailed images of individual teeth and gum areas, which we display on a chairside monitor in real time. This helps us explain our findings clearly and involves you in every decision about your treatment. You will understand why we recommend what we do, because you will see the evidence with your own eyes.",
    features: [
      "Live chairside image display",
      "High-definition close-up photos",
      "Before and after documentation",
      "Better patient understanding",
    ],
  },
  {
    icon: Sofa,
    title: "Comfort Suite",
    description:
      "We believe that your comfort is just as important as clinical excellence. Our Comfort Suite is designed to help nervous patients relax and feel at ease throughout their treatment. Every treatment room is equipped with noise-cancelling headphones and a curated selection of calming music. Weighted blankets are available for those who find gentle pressure soothing, and our aromatherapy diffusers fill the air with subtle, calming scents. For patients with dental anxiety, we also offer conscious sedation options.",
    features: [
      "Noise-cancelling headphones",
      "Weighted blankets available",
      "Calming aromatherapy",
      "Conscious sedation options",
    ],
  },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function TechnologyPage() {
  return (
    <div style={{ background: C.bg, color: C.white, fontFamily: FONT, minHeight: "100vh" }}>
      <DemoBanner />
      <Nav />

      {/* Hero */}
      <section style={{ paddingTop: 152, paddingBottom: 48, maxWidth: 1200, margin: "0 auto", padding: "152px 24px 48px", textAlign: "center" }}>
        <Reveal>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: C.teal }}>
            Innovation Meets Care
          </span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginTop: 12, marginBottom: 16 }}>
            Our <span style={{ color: C.teal }}>Technology</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: C.mutedLight, maxWidth: 600, margin: "0 auto" }}>
            We invest in the best dental technology so you get faster, more comfortable treatments with better results. Here is what sets our practice apart.
          </p>
        </Reveal>
      </section>

      {/* Technology Sections - Alternating layout */}
      {TECHNOLOGIES.map((tech, idx) => {
        const Icon = tech.icon;
        const isAlt = idx % 2 === 1;
        const isReversed = idx % 2 === 1;

        return (
          <section
            key={tech.title}
            style={{
              padding: "80px 24px",
              background: isAlt ? C.surface : C.bg,
            }}
          >
            <div
              style={{
                maxWidth: 1100,
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                gap: 48,
                flexWrap: "wrap",
                flexDirection: isReversed ? "row-reverse" : "row",
              }}
              className="dental-tech-section"
            >
              {/* Text side */}
              <div style={{ flex: "1 1 480px", minWidth: 280 }}>
                <Reveal>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 14,
                        background: "rgba(14,165,233,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={26} color={C.teal} strokeWidth={1.5} />
                    </div>
                    <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                      {tech.title}
                    </h2>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <p style={{ fontSize: 15, lineHeight: 1.8, color: C.mutedLight, marginBottom: 28 }}>
                    {tech.description}
                  </p>
                </Reveal>

                <Reveal delay={0.2}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {tech.features.map((f) => (
                      <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: C.mutedLight }}>
                        <div
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: C.teal,
                            flexShrink: 0,
                          }}
                        />
                        {f}
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              {/* Image placeholder side */}
              <Reveal delay={0.15}>
                <div
                  style={{
                    flex: "1 1 400px",
                    minWidth: 280,
                    height: 320,
                    borderRadius: 20,
                    background: `linear-gradient(135deg, ${isAlt ? C.bg : C.surface}, rgba(14,165,233,0.05))`,
                    border: `1px solid ${C.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <Icon size={56} color={C.teal} strokeWidth={1} style={{ opacity: 0.3 }} />
                  <span style={{ fontSize: 13, color: C.muted, fontWeight: 500 }}>{tech.title}</span>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section style={{ padding: "80px 24px" }}>
        <Reveal>
          <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Experience the <span style={{ color: C.teal }}>Difference</span>
            </h2>
            <p style={{ fontSize: 17, color: C.mutedLight, lineHeight: 1.7, marginBottom: 32 }}>
              See our technology in action during your next visit. We love showing patients around our clinic and explaining how these tools benefit their care.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/demos/dental/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 32px", borderRadius: 12, background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: "#fff", fontSize: 16, fontWeight: 600, textDecoration: "none" }}>
                <CalendarCheck size={18} />
                Book a Tour
              </Link>
              <Link href="/demos/dental/services" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 32px", borderRadius: 12, background: "transparent", color: C.teal, fontSize: 16, fontWeight: 600, textDecoration: "none", border: `1.5px solid ${C.teal}` }}>
                View Our Services
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .dental-tech-section { flex-direction: column !important; }
        }
      `}</style>
    </div>
  );
}
