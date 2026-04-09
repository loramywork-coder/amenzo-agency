"use client";

import { useState, useEffect } from "react";
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
  yellow: "#EAB308",
  red: "#EF4444",
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

/* ── class colours ── */
const CLASS_COLORS: Record<string, string> = {
  hiit: "#22C55E",
  cardio: "#22C55E",
  yoga: "#3B82F6",
  pilates: "#3B82F6",
  boxing: "#F97316",
  strength: "#A855F7",
  crossfit: "#EF4444",
  functional: "#EF4444",
};

/* ── schedule data ── */
interface ScheduleEntry {
  day: number;
  start: string;
  end: string;
  name: string;
  instructor: string;
  category: string;
  level: string;
}

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const HOURS = ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];

const SCHEDULE: ScheduleEntry[] = [
  { day: 0, start: "06:00", end: "06:45", name: "HIIT Burn", instructor: "Alex Borg", category: "hiit", level: "Advanced" },
  { day: 0, start: "07:00", end: "08:00", name: "Power Yoga", instructor: "Mia Grech", category: "yoga", level: "All Levels" },
  { day: 0, start: "09:00", end: "10:00", name: "Spin Cycle", instructor: "Lisa Camilleri", category: "cardio", level: "All Levels" },
  { day: 0, start: "12:00", end: "13:00", name: "Strength Lab", instructor: "Mark Zammit", category: "strength", level: "Intermediate" },
  { day: 0, start: "17:00", end: "18:00", name: "CrossFit WOD", instructor: "Alex Borg", category: "crossfit", level: "Advanced" },
  { day: 0, start: "18:00", end: "18:50", name: "Boxing Fundamentals", instructor: "Danny Vella", category: "boxing", level: "All Levels" },
  { day: 0, start: "19:00", end: "20:00", name: "Pilates Flow", instructor: "Mia Grech", category: "pilates", level: "Beginner" },
  { day: 1, start: "06:00", end: "06:45", name: "Functional Flow", instructor: "Alex Borg", category: "functional", level: "Beginner" },
  { day: 1, start: "07:00", end: "08:00", name: "Vinyasa Yoga", instructor: "Mia Grech", category: "yoga", level: "Intermediate" },
  { day: 1, start: "10:00", end: "11:00", name: "Strength Lab", instructor: "Mark Zammit", category: "strength", level: "Intermediate" },
  { day: 1, start: "12:00", end: "13:00", name: "Spin Cycle", instructor: "Lisa Camilleri", category: "cardio", level: "All Levels" },
  { day: 1, start: "17:00", end: "17:45", name: "HIIT Burn", instructor: "Alex Borg", category: "hiit", level: "Advanced" },
  { day: 1, start: "18:00", end: "19:00", name: "Pilates Core", instructor: "Mia Grech", category: "pilates", level: "All Levels" },
  { day: 1, start: "19:00", end: "20:00", name: "Boxing Sparring", instructor: "Danny Vella", category: "boxing", level: "Advanced" },
  { day: 2, start: "06:00", end: "06:45", name: "HIIT Burn", instructor: "Alex Borg", category: "hiit", level: "Advanced" },
  { day: 2, start: "07:00", end: "08:00", name: "Yin Yoga", instructor: "Mia Grech", category: "yoga", level: "All Levels" },
  { day: 2, start: "09:00", end: "10:00", name: "Spin Cycle", instructor: "Lisa Camilleri", category: "cardio", level: "All Levels" },
  { day: 2, start: "12:00", end: "13:00", name: "Strength Lab", instructor: "Mark Zammit", category: "strength", level: "Intermediate" },
  { day: 2, start: "17:00", end: "18:00", name: "CrossFit WOD", instructor: "Alex Borg", category: "crossfit", level: "Advanced" },
  { day: 2, start: "18:00", end: "18:50", name: "Boxing Fundamentals", instructor: "Danny Vella", category: "boxing", level: "All Levels" },
  { day: 2, start: "19:30", end: "20:30", name: "Functional Strength", instructor: "Mark Zammit", category: "functional", level: "Intermediate" },
  { day: 3, start: "06:00", end: "06:45", name: "Functional Flow", instructor: "Alex Borg", category: "functional", level: "Beginner" },
  { day: 3, start: "07:00", end: "08:00", name: "Power Yoga", instructor: "Mia Grech", category: "yoga", level: "All Levels" },
  { day: 3, start: "10:00", end: "11:00", name: "Strength Lab", instructor: "Mark Zammit", category: "strength", level: "Intermediate" },
  { day: 3, start: "12:00", end: "13:00", name: "Spin Cycle", instructor: "Lisa Camilleri", category: "cardio", level: "All Levels" },
  { day: 3, start: "17:00", end: "17:45", name: "HIIT Burn", instructor: "Alex Borg", category: "hiit", level: "Advanced" },
  { day: 3, start: "18:00", end: "19:00", name: "Pilates Flow", instructor: "Mia Grech", category: "pilates", level: "All Levels" },
  { day: 3, start: "19:00", end: "20:00", name: "Boxing Cardio", instructor: "Danny Vella", category: "boxing", level: "Intermediate" },
  { day: 4, start: "06:00", end: "06:45", name: "HIIT Burn", instructor: "Alex Borg", category: "hiit", level: "Advanced" },
  { day: 4, start: "07:00", end: "08:00", name: "Vinyasa Yoga", instructor: "Mia Grech", category: "yoga", level: "Intermediate" },
  { day: 4, start: "09:00", end: "10:00", name: "Spin Cycle", instructor: "Lisa Camilleri", category: "cardio", level: "All Levels" },
  { day: 4, start: "12:00", end: "13:00", name: "Strength Lab", instructor: "Mark Zammit", category: "strength", level: "Intermediate" },
  { day: 4, start: "17:00", end: "18:00", name: "CrossFit WOD", instructor: "Alex Borg", category: "crossfit", level: "Advanced" },
  { day: 4, start: "18:00", end: "18:50", name: "Boxing Fundamentals", instructor: "Danny Vella", category: "boxing", level: "All Levels" },
  { day: 4, start: "19:00", end: "20:00", name: "Pilates Core", instructor: "Mia Grech", category: "pilates", level: "All Levels" },
  { day: 5, start: "07:00", end: "08:00", name: "Yoga & Breathwork", instructor: "Mia Grech", category: "yoga", level: "All Levels" },
  { day: 5, start: "09:00", end: "09:45", name: "Functional Flow", instructor: "Alex Borg", category: "functional", level: "Beginner" },
  { day: 5, start: "10:00", end: "11:00", name: "CrossFit WOD", instructor: "Mark Zammit", category: "crossfit", level: "Intermediate" },
  { day: 5, start: "11:00", end: "12:00", name: "Boxing Sparring", instructor: "Danny Vella", category: "boxing", level: "Advanced" },
  { day: 5, start: "14:00", end: "15:00", name: "Spin Cycle", instructor: "Lisa Camilleri", category: "cardio", level: "All Levels" },
  { day: 6, start: "08:00", end: "09:00", name: "Yin Yoga", instructor: "Mia Grech", category: "yoga", level: "All Levels" },
  { day: 6, start: "09:00", end: "10:00", name: "Spin Cycle", instructor: "Lisa Camilleri", category: "cardio", level: "All Levels" },
  { day: 6, start: "10:00", end: "11:00", name: "Strength Lab", instructor: "Mark Zammit", category: "strength", level: "Intermediate" },
  { day: 6, start: "11:00", end: "11:45", name: "HIIT Burn", instructor: "Alex Borg", category: "hiit", level: "Intermediate" },
];

/* ── helpers ── */
function timeToRow(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return (h - 6) * 4 + Math.floor(m / 15);
}

function getColor(category: string): string {
  return CLASS_COLORS[category] || C.green;
}

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
          position: "fixed",
          top: 40,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          background: "transparent",
          borderBottom: "none",
          transition: "background 0.4s, border-color 0.4s",
        }}
      >
        <Link href="/demos/fitness" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: fontBody, fontWeight: 700, fontSize: 18, color: C.white, letterSpacing: "0.15em" }}>FITZONE</span>
        </Link>
        <nav className="fz-desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: fontBody, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
                color: link.href === "/demos/fitness/schedule" ? C.white : C.muted,
                textDecoration: "none", transition: "color 0.25s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.white; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = link.href === "/demos/fitness/schedule" ? C.white : C.muted; }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className="fz-mobile-hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5, padding: 8 }}
        >
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
export default function SchedulePage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [toast, setToast] = useState(false);

  const handleDownload = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  /* legend items */
  const LEGEND = [
    { label: "HIIT / Cardio", color: "#22C55E" },
    { label: "Yoga / Pilates", color: "#3B82F6" },
    { label: "Boxing", color: "#F97316" },
    { label: "Strength", color: "#A855F7" },
    { label: "CrossFit / Functional", color: "#EF4444" },
  ];

  return (
    <div style={{ background: C.bg, color: C.white, fontFamily: fontBody, minHeight: "100vh", paddingTop: 40 }}>
      <DemoBanner />
      <NavHeader />

      {/* ════════ TOAST ════════ */}
      {toast && (
        <div style={{
          position: "fixed", top: 120, left: "50%", transform: "translateX(-50%)", zIndex: 100,
          background: C.green, color: "#000", fontSize: 14, fontWeight: 600, padding: "12px 28px",
          borderRadius: 8, boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}>
          Coming soon
        </div>
      )}

      {/* ════════ HERO ════════ */}
      <section style={{ paddingTop: 140, paddingBottom: 40, textAlign: "center" }}>
        <p style={{ fontSize: 12, letterSpacing: "0.35em", textTransform: "uppercase", color: C.green, marginBottom: 16 }}>SCHEDULE</p>
        <h1 style={{ fontSize: 36, fontWeight: 700, margin: 0 }}>This Week at FitZone</h1>
      </section>

      {/* Hero Banner */}
      <section style={{ padding: "0 24px 48px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "21 / 9", overflow: "hidden", border: "2px solid #22C55E" }}>
          <Image src="/images/fitness/schedule-hero.jpg" alt="" fill priority className="object-cover" />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,8,8,0) 40%, rgba(8,8,8,0.8) 100%)" }} />
        </div>
      </section>


      {/* ════════ LEGEND + DOWNLOAD ════════ */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          {LEGEND.map((l) => (
            <span key={l.label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: C.muted }}>
              <span style={{ width: 10, height: 10, borderRadius: 3, background: l.color }} />
              {l.label}
            </span>
          ))}
        </div>
        <button
          onClick={handleDownload}
          style={{
            padding: "10px 24px", borderRadius: 9999, border: `1px solid ${C.border}`,
            background: "transparent", color: C.white, fontSize: 12, fontWeight: 600,
            fontFamily: fontBody, letterSpacing: "0.08em", textTransform: "uppercase",
            cursor: "pointer", transition: "background 0.25s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
        >
          Download PDF
        </button>
      </section>

      {/* ════════ TIMETABLE (desktop) ════════ */}
      <section className="fz-schedule-desktop" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px", overflowX: "auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "60px repeat(7, 1fr)", minWidth: 900 }}>
          {/* header row */}
          <div style={{ borderBottom: `1px solid ${C.border}`, padding: "12px 0" }} />
          {DAYS.map((day) => (
            <div key={day} style={{
              borderBottom: `1px solid ${C.border}`, padding: "12px 0", textAlign: "center",
              fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted,
            }}>
              {day}
            </div>
          ))}

          {/* time grid */}
          {HOURS.map((hour) => (
            <div key={hour} style={{ display: "contents" }}>
              <div style={{
                borderBottom: `1px solid ${C.border}`, padding: "8px 0",
                fontSize: 11, color: C.muted, textAlign: "right", paddingRight: 12,
                height: 60, display: "flex", alignItems: "flex-start", justifyContent: "flex-end",
              }}>
                {hour}
              </div>
              {DAYS.map((_, dayIdx) => {
                const entries = SCHEDULE.filter((e) => e.day === dayIdx && e.start === hour);
                return (
                  <div
                    key={`${hour}-${dayIdx}`}
                    style={{
                      borderBottom: `1px solid ${C.border}`,
                      borderLeft: `1px solid ${C.border}`,
                      height: 60,
                      position: "relative",
                      padding: 2,
                    }}
                  >
                    {entries.map((entry) => {
                      const startRow = timeToRow(entry.start);
                      const endRow = timeToRow(entry.end);
                      const spans = endRow - startRow;
                      const color = getColor(entry.category);
                      const entryKey = `${entry.day}-${entry.start}-${entry.name}`;
                      const isExpanded = expanded === entryKey;

                      return (
                        <div
                          key={entryKey}
                          onClick={() => setExpanded(isExpanded ? null : entryKey)}
                          style={{
                            position: "absolute",
                            top: 2,
                            left: 2,
                            right: 2,
                            height: `${spans * 15}px`,
                            minHeight: 40,
                            background: `${color}15`,
                            borderLeft: `3px solid ${color}`,
                            borderRadius: 4,
                            padding: "4px 6px",
                            cursor: "pointer",
                            overflow: "hidden",
                            transition: "all 0.2s",
                            zIndex: isExpanded ? 10 : 1,
                            ...(isExpanded ? {
                              height: "auto",
                              minHeight: 80,
                              background: `${color}25`,
                              boxShadow: `0 4px 20px ${color}30`,
                            } : {}),
                          }}
                        >
                          <p style={{ fontSize: 11, fontWeight: 600, color, margin: 0, lineHeight: 1.3 }}>{entry.name}</p>
                          <p style={{ fontSize: 9, color: C.muted, margin: "2px 0 0" }}>{entry.instructor}</p>
                          {isExpanded && (
                            <div style={{ marginTop: 6 }}>
                              <p style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", margin: 0 }}>{entry.start} &ndash; {entry.end}</p>
                              <p style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", margin: "2px 0 0" }}>Level: {entry.level}</p>
                              <p style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", margin: "2px 0 0", textTransform: "capitalize" }}>Type: {entry.category}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* ════════ TIMETABLE (mobile - card list) ════════ */}
      <section className="fz-schedule-mobile" style={{ display: "none", maxWidth: 600, margin: "0 auto", padding: "0 24px 80px" }}>
        {DAYS.map((day, dayIdx) => {
          const dayClasses = SCHEDULE.filter((e) => e.day === dayIdx).sort((a, b) => a.start.localeCompare(b.start));
          if (dayClasses.length === 0) return null;
          return (
            <div key={day} style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: C.white, marginBottom: 12, borderBottom: `1px solid ${C.border}`, paddingBottom: 8 }}>
                {day}
              </h3>
              {dayClasses.map((entry) => {
                const color = getColor(entry.category);
                return (
                  <div
                    key={`${entry.day}-${entry.start}-${entry.name}`}
                    style={{
                      background: C.surface,
                      borderLeft: `3px solid ${color}`,
                      borderRadius: 6,
                      padding: "12px 14px",
                      marginBottom: 8,
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color }}>{entry.name}</span>
                      <span style={{ fontSize: 11, color: C.muted }}>{entry.start} &ndash; {entry.end}</span>
                    </div>
                    <p style={{ fontSize: 12, color: C.muted, margin: "4px 0 0" }}>{entry.instructor} &middot; {entry.level}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </section>

      <style>{`
        @media(max-width:799px){
          .fz-schedule-desktop{display:none!important;}
          .fz-schedule-mobile{display:block!important;}
        }
      `}</style>

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
              <Link key={t} href={`/demos/fitness/${t.toLowerCase()}`} style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", textDecoration: "none", transition: "color 0.25s" }}
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
    </div>
  );
}
