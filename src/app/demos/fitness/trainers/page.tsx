"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import Reveal from "@/components/demos/Reveal";

/* ------------------------------------------------------------------ */
/*  PALETTE                                                           */
/* ------------------------------------------------------------------ */
const BG      = "#080808";
const SURFACE = "#111111";
const GREEN   = "#22C55E";
const WHITE   = "#FFFFFF";
const MUTED   = "#71717A";
const BORDER  = "#27272A";

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/* ------------------------------------------------------------------ */
interface Trainer {
  name: string;
  initials: string;
  credential: string;
  specialty: string;
  experience: string;
  bio: string[];
  highlights: string[];
}

const TRAINERS: Trainer[] = [
  {
    name: "ALEX BORG",
    initials: "AB",
    credential: "NSCA-CSCS",
    specialty: "HIIT & CONDITIONING",
    experience: "12 YEARS",
    bio: [
      "Alex spent six years as a military fitness instructor before transitioning to civilian coaching, bringing unmatched discipline and precision to every session.",
      "His signature HIIT Burn class has become the most-requested program at FitZone, known for pushing athletes past perceived limits with methodical intensity.",
      "With over 300 body transformations to his name, Alex specializes in metabolic conditioning and periodized strength programming for maximum results.",
    ],
    highlights: ["300+ Transformations", "Military Background", "Metabolic Conditioning Specialist"],
  },
  {
    name: "MIA GRECH",
    initials: "MG",
    credential: "RYT-500",
    specialty: "YOGA & WELLNESS",
    experience: "8 YEARS",
    bio: [
      "Mia completed her advanced 500-hour yoga teacher training in Ubud, Bali, studying under master practitioners of Ashtanga and Hatha traditions.",
      "Her Yoga Flow class seamlessly blends breathwork, dynamic vinyasa sequences, and meditative stillness to create a transformative mind-body experience.",
      "Beyond the mat, Mia leads FitZone\u2019s wellness program, integrating nutrition counseling and mindfulness practices into every member\u2019s journey.",
    ],
    highlights: ["Bali Trained", "Breathwork Certified", "Wellness Program Director"],
  },
  {
    name: "DANNY VELLA",
    initials: "DV",
    credential: "FORMER NATIONAL TEAM",
    specialty: "BOXING & COMBAT",
    experience: "15 YEARS",
    bio: [
      "Danny competed on the national boxing team for seven years, competing across Europe and bringing elite-level fight knowledge to his coaching.",
      "His Boxing Fit class breaks down professional techniques into accessible drills, making combat fitness available to beginners while challenging seasoned fighters.",
      "With 15 years of combined competition and coaching experience, Danny has developed a reputation for building confidence as much as physical power.",
    ],
    highlights: ["National Team Athlete", "7 Years Competitive", "Combat Fitness Pioneer"],
  },
  {
    name: "LISA CAMILLERI",
    initials: "LC",
    credential: "ACE CERTIFIED",
    specialty: "SPIN & CARDIO",
    experience: "6 YEARS",
    bio: [
      "Lisa\u2019s Spin Cycle classes are legendary at FitZone, known for killer playlists that perfectly sync with interval structures to maximize performance and motivation.",
      "ACE certified with additional specializations in indoor cycling and group fitness, she brings infectious energy that fills every class to capacity.",
      "Her approach combines rhythm-based cycling with science-backed heart rate training zones, ensuring every rider leaves having given their absolute best.",
    ],
    highlights: ["Legendary Playlists", "Heart Rate Zone Training", "Always Sold Out"],
  },
];

const NAV_LINKS = [
  { label: "Classes",    href: "/demos/fitness/classes" },
  { label: "Trainers",   href: "/demos/fitness/trainers" },
  { label: "Membership", href: "/demos/fitness#membership" },
  { label: "Schedule",   href: "/demos/fitness#schedule" },
  { label: "Gallery",    href: "/demos/fitness#gallery" },
];

/* ------------------------------------------------------------------ */
/*  INLINE NAV                                                        */
/* ------------------------------------------------------------------ */
function FitNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-10 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "transparent",
        borderBottom: "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/demos/fitness" className="flex items-center gap-0 text-xl font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-gym-display), sans-serif" }}>
          <span style={{ color: WHITE }}>FIT</span>
          <span style={{ color: GREEN }}>ZONE</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] uppercase tracking-wider transition-colors hover:text-white"
              style={{ color: MUTED, letterSpacing: "0.08em" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/demos/fitness#cta"
          className="hidden rounded-full px-6 py-2.5 text-[13px] font-medium uppercase tracking-wider transition-all hover:brightness-110 md:inline-block"
          style={{ background: GREEN, color: "#000" }}
        >
          Start Free Trial
        </Link>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  INLINE FOOTER                                                     */
/* ------------------------------------------------------------------ */
function FitFooter() {
  return (
    <footer style={{ background: "#000000", borderTop: `1px solid ${BORDER}` }} className="px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-0 text-2xl font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-gym-display), sans-serif" }}>
              <span style={{ color: WHITE }}>FIT</span>
              <span style={{ color: GREEN }}>ZONE</span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed" style={{ color: MUTED }}>
              Premium fitness facility. Transforming bodies and lives since 2018.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: WHITE }}>LOCATION</h4>
            <div className="mt-4 space-y-2 text-[13px]" style={{ color: MUTED }}>
              <p>23 Harbour Street</p>
              <p>Downtown</p>
            </div>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: WHITE }}>HOURS</h4>
            <div className="mt-4 space-y-2 text-[13px]" style={{ color: MUTED }}>
              <p>Mon &ndash; Fri: 5:00 AM &ndash; 11:00 PM</p>
              <p>Sat &ndash; Sun: 6:00 AM &ndash; 10:00 PM</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row" style={{ borderColor: BORDER }}>
          <div className="flex gap-6">
            {["Instagram", "Facebook", "YouTube", "TikTok"].map((s) => (
              <span key={s} className="cursor-pointer text-[12px] uppercase tracking-wider transition-colors hover:text-white" style={{ color: MUTED }}>
                {s}
              </span>
            ))}
          </div>
          <span className="text-[12px]" style={{ color: MUTED }}>&copy; 2026 FitZone. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */
export default function TrainersPage() {
  return (
    <main style={{ background: BG, color: WHITE, fontFamily: "var(--font-gym-display), Inter, system-ui, sans-serif" }}>
      <DemoBanner />
      <FitNav />

      {/* ════════════ HERO ════════════ */}
      <section className="px-6 pb-10 pt-32 md:px-12 lg:px-20" style={{ background: BG }}>
        <Reveal>
          <div className="mx-auto max-w-6xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-semibold uppercase"
              style={{ color: GREEN, letterSpacing: "0.35em" }}
            >
              OUR TEAM
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-[44px] font-black uppercase tracking-tight md:text-[60px]"
              style={{ fontFamily: "var(--font-gym-display), sans-serif" }}
            >
              MEET YOUR <span style={{ color: GREEN }}>COACHES</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 max-w-lg text-[15px] leading-relaxed"
              style={{ color: MUTED }}
            >
              Four certified professionals who live and breathe fitness. Each with a unique
              specialty, all sharing one mission: your transformation.
            </motion.p>
          </div>
        </Reveal>
      </section>

      {/* ════════════ TRAINER PROFILES ════════════ */}
      {TRAINERS.map((trainer, i) => (
        <section
          key={trainer.name}
          className="px-6 py-24 md:px-12 lg:px-20"
          style={{ background: i % 2 === 0 ? SURFACE : BG }}
        >
          <div className="mx-auto max-w-5xl">
            <Reveal type={i % 2 === 0 ? "slide-left" : "slide-right"}>
              <div className={`flex flex-col items-center gap-12 md:flex-row ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Initials circle */}
                <div className="flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.2 }}
                    className="flex items-center justify-center rounded-full text-[40px] font-black"
                    style={{
                      width: 100,
                      height: 100,
                      border: `3px solid ${GREEN}`,
                      color: GREEN,
                      fontFamily: "var(--font-gym-display), sans-serif",
                    }}
                  >
                    {trainer.initials}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Name & credential */}
                  <div className="flex flex-col items-center gap-3 md:flex-row md:items-baseline">
                    <h2 className="text-[32px] font-black uppercase tracking-tight md:text-[40px]" style={{ fontFamily: "var(--font-gym-display), sans-serif", color: WHITE }}>
                      {trainer.name}
                    </h2>
                    <span
                      className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                      style={{ background: "rgba(34,197,94,0.12)", color: GREEN, border: `1px solid rgba(34,197,94,0.2)` }}
                    >
                      {trainer.credential}
                    </span>
                  </div>

                  {/* Specialty + Experience */}
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                    <span className="text-[14px] font-semibold uppercase tracking-wider" style={{ color: GREEN }}>
                      {trainer.specialty}
                    </span>
                    <span className="text-[13px] uppercase tracking-wider" style={{ color: MUTED }}>
                      {trainer.experience} EXPERIENCE
                    </span>
                  </div>

                  {/* Bio paragraphs */}
                  <div className="mt-6 space-y-3">
                    {trainer.bio.map((paragraph, pi) => (
                      <p key={pi} className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Highlight tags */}
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-2 md:justify-start">
                    {trainer.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider"
                        style={{ background: "rgba(255,255,255,0.05)", color: MUTED, border: `1px solid ${BORDER}` }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Book Session button */}
                  <div className="mt-8">
                    <Link href="#">
                      <span
                        className="inline-block rounded-full px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wider transition-all hover:brightness-110"
                        style={{ background: GREEN, color: "#000" }}
                      >
                        BOOK SESSION
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* ════════════ CTA ════════════ */}
      <section className="relative overflow-hidden px-6 py-28 text-center md:px-12" style={{ background: BG }}>
        {/* Floating dots */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 4 + (i % 3) * 2,
              height: 4 + (i % 3) * 2,
              background: GREEN,
              opacity: 0.12 + (i % 4) * 0.04,
              left: `${10 + (i * 11) % 80}%`,
              top: `${15 + ((i * 17) % 70)}%`,
            }}
            animate={{
              y: [0, -15 - (i % 3) * 8, 0],
              opacity: [0.12 + (i % 4) * 0.04, 0.25, 0.12 + (i % 4) * 0.04],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + (i % 3),
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}

        <Reveal>
          <div className="relative z-10">
            <h2 className="mx-auto max-w-xl text-[32px] font-black uppercase leading-tight tracking-tight md:text-[44px]" style={{ fontFamily: "var(--font-gym-display), sans-serif" }}>
              <span style={{ color: WHITE }}>TRAIN WITH </span>
              <span style={{ color: GREEN }}>THE BEST</span>
            </h2>
            <p className="mt-4 text-[15px]" style={{ color: MUTED }}>
              Book a free consultation with any of our coaches.
            </p>
            <div className="mt-8">
              <Link href="#">
                <span
                  className="inline-block rounded-full px-10 py-4 text-[14px] font-bold uppercase tracking-wider transition-all hover:brightness-110"
                  style={{ background: GREEN, color: "#000" }}
                >
                  START FREE TRIAL
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <FitFooter />
    </main>
  );
}
