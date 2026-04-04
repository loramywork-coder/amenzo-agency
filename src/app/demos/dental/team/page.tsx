"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import {
  SmilePlus,
  Phone,
  MapPin,
  Clock,
  Mail,
  Star,
  Siren,
  CalendarCheck,
  Menu,
  X,
  GraduationCap,
  Award,
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
   TEAM DATA
   ═══════════════════════════════════════════════════════════ */
const TEAM_MEMBERS = [
  {
    name: "Dr. Sarah Vella",
    role: "Founder & Cosmetic Dentist",
    initials: "SV",
    experience: "15 years",
    bio: [
      "Dr. Sarah Vella founded our practice with a simple belief: that every person deserves to feel confident about their smile. With over 15 years of experience in cosmetic and general dentistry, she has helped thousands of patients transform not just their teeth, but their self-confidence.",
      "After completing her BDS at the University of Malta, Sarah pursued advanced training in cosmetic dentistry at the prestigious Eastman Dental Institute in London. She is a certified Invisalign provider and regularly attends international conferences to stay at the forefront of smile design techniques.",
      "When she is not in the clinic, Sarah enjoys painting, hiking along the Maltese coastline, and spending time with her family. Her patients often describe her as warm, reassuring, and genuinely invested in their wellbeing.",
    ],
    qualifications: [
      "BDS, University of Malta",
      "Postgraduate Diploma in Cosmetic Dentistry, Eastman Dental Institute, London",
      "Certified Invisalign Provider",
      "Member, European Academy of Cosmetic Dentistry",
      "Member, Dental Association of Malta",
    ],
  },
  {
    name: "Dr. Mark Camilleri",
    role: "Implant Specialist",
    initials: "MC",
    experience: "10 years",
    bio: [
      "Dr. Mark Camilleri is our implant specialist, bringing over a decade of focused experience in dental implant surgery and restorative dentistry. His meticulous approach and gentle manner have made him one of the most respected implant dentists in Malta.",
      "Mark earned his MSc in Implant Dentistry from King's College London, one of the top dental schools in the world. He is a Fellow of the International Team for Implantology (ITI) and has placed over 2,000 implants throughout his career, using the latest guided surgery technology for precision and patient comfort.",
      "Outside the practice, Mark is passionate about continuing education and mentoring younger dentists. He regularly lectures at the University of Malta and is an avid sailor, often found at the Royal Malta Yacht Club on weekends.",
    ],
    qualifications: [
      "BDS, University of Malta",
      "MSc Implant Dentistry, King's College London",
      "Fellow, International Team for Implantology (ITI)",
      "Certified in Guided Implant Surgery",
      "Member, European Association for Osseointegration",
    ],
  },
  {
    name: "Jessica Borg",
    role: "Dental Hygienist",
    initials: "JB",
    experience: "8 years",
    bio: [
      "Jessica Borg is our dedicated dental hygienist, and she is the person who will help you maintain that beautiful, healthy smile between visits. With 8 years of experience, Jessica combines thoroughness with a gentle touch that puts even the most anxious patients at ease.",
      "Jessica graduated with a BSc in Dental Hygiene from the University of Malta and has since completed additional certifications in periodontal therapy and teeth whitening. She is passionate about preventive care and patient education, believing that a well-informed patient is a healthier patient.",
      "Jessica is known for her warm, friendly personality and her ability to make every patient feel genuinely cared for. When she is not helping patients smile brighter, she enjoys yoga, cooking Mediterranean cuisine, and volunteering at local community health events.",
    ],
    qualifications: [
      "BSc Dental Hygiene, University of Malta",
      "Certificate in Advanced Periodontal Therapy",
      "Certified Teeth Whitening Specialist",
      "Member, Dental Hygienists Association of Malta",
      "Paediatric Dental Care Certification",
    ],
  },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function TeamPage() {
  return (
    <div style={{ background: C.bg, color: C.white, fontFamily: FONT, minHeight: "100vh" }}>
      <DemoBanner />
      <Nav />

      {/* Hero */}
      <section style={{ paddingTop: 152, paddingBottom: 48, maxWidth: 1200, margin: "0 auto", padding: "152px 24px 48px", textAlign: "center" }}>
        <Reveal>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: C.teal }}>
            The People Behind Your Smile
          </span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginTop: 12, marginBottom: 16 }}>
            Meet Our <span style={{ color: C.teal }}>Team</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: C.mutedLight, maxWidth: 560, margin: "0 auto" }}>
            A passionate team of dental professionals dedicated to making every visit comfortable, caring, and focused entirely on you.
          </p>
        </Reveal>
      </section>

      {/* Team Profiles */}
      {TEAM_MEMBERS.map((member, idx) => {
        const isAlt = idx % 2 === 1;
        return (
          <section
            key={member.name}
            style={{
              padding: "80px 24px",
              background: isAlt ? C.surface : C.bg,
            }}
          >
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              {/* Top: Avatar + Name + Role */}
              <Reveal>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 24,
                    marginBottom: 40,
                    flexWrap: "wrap",
                  }}
                >
                  {/* Large initials circle */}
                  <div
                    style={{
                      width: 110,
                      height: 110,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, rgba(14,165,233,0.18), rgba(14,165,233,0.06))`,
                      border: `3px solid rgba(14,165,233,0.25)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 36,
                      fontWeight: 800,
                      color: C.teal,
                      letterSpacing: "-0.02em",
                      flexShrink: 0,
                    }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h2 style={{ fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 4 }}>
                      {member.name}
                    </h2>
                    <p style={{ fontSize: 16, color: C.teal, fontWeight: 600, marginBottom: 4 }}>{member.role}</p>
                    <p style={{ fontSize: 14, color: C.muted }}>{member.experience} of experience</p>
                  </div>
                </div>
              </Reveal>

              {/* Bio paragraphs */}
              {member.bio.map((para, i) => (
                <Reveal key={i} delay={0.1 + i * 0.08}>
                  <p style={{ fontSize: 16, lineHeight: 1.8, color: C.mutedLight, marginBottom: 20, maxWidth: 760 }}>
                    {para}
                  </p>
                </Reveal>
              ))}

              {/* Qualifications */}
              <Reveal delay={0.3}>
                <div
                  style={{
                    background: isAlt ? C.bg : C.surface,
                    borderRadius: 16,
                    padding: 28,
                    border: `1px solid ${C.border}`,
                    marginTop: 32,
                    marginBottom: 32,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                    <GraduationCap size={20} color={C.teal} />
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: C.white }}>Qualifications & Memberships</h3>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {member.qualifications.map((q) => (
                      <div key={q} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: C.mutedLight }}>
                        <Award size={15} color={C.teal} style={{ flexShrink: 0, marginTop: 2 }} />
                        {q}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Book CTA */}
              <Reveal delay={0.35}>
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
                  Book with {member.name.split(" ")[0]} {member.name.split(" ").slice(-1)[0]}
                </Link>
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
              Ready to Meet <span style={{ color: C.teal }}>Your Team</span>?
            </h2>
            <p style={{ fontSize: 17, color: C.mutedLight, lineHeight: 1.7, marginBottom: 32 }}>
              We would love to welcome you to our practice. Book a visit and experience the difference that genuine care makes.
            </p>
            <Link href="/demos/dental/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 32px", borderRadius: 12, background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: "#fff", fontSize: 16, fontWeight: 600, textDecoration: "none" }}>
              <CalendarCheck size={18} />
              Book Appointment
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
