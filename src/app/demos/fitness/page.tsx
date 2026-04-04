"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import Reveal from "@/components/demos/Reveal";
import MagneticButton from "@/components/demos/MagneticButton";

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
const MARQUEE_TEXT = "500+ MEMBERS \u00B7 40+ CLASSES \u00B7 15 TRAINERS \u00B7 2,000 SQM \u00B7 5AM\u201311PM";

interface GymClass {
  name: string;
  instructor: string;
  duration: string;
  difficulty: "Beginner" | "All Levels" | "Intermediate" | "Advanced";
  schedule: string;
  image: string;
}

const CLASSES: GymClass[] = [
  {
    name: "HIIT BURN",
    instructor: "Alex Borg",
    duration: "45 min",
    difficulty: "Advanced",
    schedule: "Mon / Wed / Fri  6:00 AM",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&q=80",
  },
  {
    name: "YOGA FLOW",
    instructor: "Mia Grech",
    duration: "60 min",
    difficulty: "All Levels",
    schedule: "Tue / Thu  8:00 AM",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
  },
  {
    name: "BOXING FIT",
    instructor: "Danny Vella",
    duration: "50 min",
    difficulty: "Intermediate",
    schedule: "Mon / Wed  6:00 PM",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80",
  },
  {
    name: "STRENGTH LAB",
    instructor: "Mark Zammit",
    duration: "55 min",
    difficulty: "Intermediate",
    schedule: "Tue / Thu  10:00 AM",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
  },
];

const DIFFICULTY_COLOR: Record<string, string> = {
  Beginner: GREEN,
  "All Levels": GREEN,
  Intermediate: "#EAB308",
  Advanced: "#EF4444",
};

interface Plan {
  name: string;
  price: number;
  recommended: boolean;
  features: string[];
}

const PLANS: Plan[] = [
  {
    name: "BASIC",
    price: 49,
    recommended: false,
    features: ["Gym floor access", "Locker & shower", "1 class per week", "Basic app access"],
  },
  {
    name: "PRO",
    price: 79,
    recommended: true,
    features: ["Unlimited classes", "Sauna & steam", "Nutrition plan", "Personal dashboard", "1 guest pass / mo"],
  },
  {
    name: "ELITE",
    price: 119,
    recommended: false,
    features: ["Everything in Pro", "4x personal training", "Recovery suite", "Priority booking", "VIP events"],
  },
];

interface Trainer {
  name: string;
  initials: string;
  specialty: string;
}

const TRAINERS: Trainer[] = [
  { name: "ALEX BORG",      initials: "AB", specialty: "HIIT & Conditioning" },
  { name: "MIA GRECH",      initials: "MG", specialty: "Yoga & Wellness" },
  { name: "DANNY VELLA",    initials: "DV", specialty: "Boxing & Combat" },
  { name: "LISA CAMILLERI", initials: "LC", specialty: "Spin & Cardio" },
];

interface Testimonial {
  quote: string;
  name: string;
  stars: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "FitZone completely changed my approach to fitness. The trainers actually care about your progress and push you beyond what you thought possible.",
    name: "Sarah M.",
    stars: 5,
  },
  {
    quote: "Best gym in Malta, hands down. The HIIT classes with Alex are absolutely brutal in the best way. Lost 12kg in 3 months.",
    name: "James K.",
    stars: 5,
  },
  {
    quote: "I was intimidated at first, but the community here is incredible. Everyone supports each other. The yoga sessions with Mia are life-changing.",
    name: "Elena R.",
    stars: 5,
  },
];

const NAV_LINKS = [
  { label: "Classes",    href: "/demos/fitness/classes" },
  { label: "Trainers",   href: "/demos/fitness/trainers" },
  { label: "Membership", href: "#membership" },
  { label: "Schedule",   href: "#schedule" },
  { label: "Gallery",    href: "#gallery" },
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
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid ${BORDER}` : "1px solid transparent",
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
          href="#cta"
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
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-0 text-2xl font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-gym-display), sans-serif" }}>
              <span style={{ color: WHITE }}>FIT</span>
              <span style={{ color: GREEN }}>ZONE</span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed" style={{ color: MUTED }}>
              Malta&apos;s premier fitness facility. Transforming bodies and lives since 2018.
            </p>
          </div>
          {/* Address & Hours */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: WHITE }}>LOCATION</h4>
            <div className="mt-4 space-y-2 text-[13px]" style={{ color: MUTED }}>
              <p>23 Strand Street</p>
              <p>Sliema, Malta</p>
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
        {/* Social + Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row" style={{ borderColor: BORDER }}>
          <div className="flex gap-6">
            {["Instagram", "Facebook", "YouTube", "TikTok"].map((s) => (
              <span key={s} className="cursor-pointer text-[12px] uppercase tracking-wider transition-colors hover:text-white" style={{ color: MUTED }}>
                {s}
              </span>
            ))}
          </div>
          <span className="text-[12px]" style={{ color: MUTED }}>&copy; 2026 FitZone Malta. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */
export default function FitnessHomePage() {
  return (
    <main style={{ background: BG, color: WHITE, fontFamily: "var(--font-gym-display), Inter, system-ui, sans-serif" }}>
      <DemoBanner />
      <FitNav />

      {/* ════════════ 1. HERO (100vh) ════════════ */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden pt-10">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85"
          alt="Premium gym interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.88), rgba(0,0,0,0.82))" }} />

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          {/* Green label */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-[12px] font-semibold uppercase"
            style={{ color: GREEN, letterSpacing: "0.45em" }}
          >
            FITZONE
          </motion.span>

          {/* SLAM line 1 */}
          <motion.h1
            initial={{ opacity: 0, scale: 1.3, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.2 }}
            className="text-[48px] font-black leading-[1.05] tracking-tight uppercase md:text-[72px]"
            style={{ fontFamily: "var(--font-gym-display), sans-serif", color: WHITE }}
          >
            TRANSFORM YOUR BODY.
          </motion.h1>

          {/* SLAM line 2 */}
          <motion.h1
            initial={{ opacity: 0, scale: 1.3, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.55 }}
            className="mt-2 text-[48px] font-black leading-[1.05] tracking-tight uppercase md:text-[72px]"
            style={{ fontFamily: "var(--font-gym-display), sans-serif", color: GREEN }}
          >
            TRANSFORM YOUR LIFE.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 max-w-lg text-[16px] leading-relaxed"
            style={{ color: MUTED }}
          >
            Malta&apos;s premier fitness experience. 40+ classes, 15 certified trainers,
            and a community that pushes you further.
          </motion.p>

          {/* Two pill buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton>
              <span
                className="inline-block rounded-full px-9 py-4 text-[14px] font-semibold uppercase tracking-wider transition-all hover:brightness-110"
                style={{ background: GREEN, color: "#000" }}
              >
                Start Free Trial
              </span>
            </MagneticButton>
            <MagneticButton>
              <span
                className="inline-block rounded-full border-2 px-9 py-4 text-[14px] font-semibold uppercase tracking-wider transition-all hover:bg-white/5"
                style={{ borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)" }}
              >
                View Classes
              </span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Bouncing arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </section>

      {/* ════════════ 2. STATS MARQUEE ════════════ */}
      <section className="overflow-hidden py-4" style={{ background: "rgba(34,197,94,0.05)" }}>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[0, 1].map((idx) => (
              <span
                key={idx}
                className="whitespace-nowrap text-[13px] font-bold uppercase tracking-[0.25em]"
                style={{ color: GREEN }}
              >
                {MARQUEE_TEXT}&nbsp;&nbsp;&nbsp;\u00B7&nbsp;&nbsp;&nbsp;{MARQUEE_TEXT}&nbsp;&nbsp;&nbsp;\u00B7&nbsp;&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>
        <style jsx>{`
          .marquee-wrapper {
            display: flex;
            width: 100%;
          }
          .marquee-track {
            display: flex;
            animation: marquee-scroll 30s linear infinite;
          }
          @keyframes marquee-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ════════════ 3. CLASSES (4 cards) ════════════ */}
      <section className="px-6 py-28 md:px-12 lg:px-20" style={{ background: BG }}>
        <Reveal>
          <div className="mx-auto max-w-6xl text-center">
            <span className="text-[11px] font-semibold uppercase" style={{ color: GREEN, letterSpacing: "0.35em" }}>CLASSES</span>
            <h2 className="mt-4 text-[40px] font-black uppercase tracking-tight md:text-[48px]" style={{ fontFamily: "var(--font-gym-display), sans-serif" }}>
              FIND YOUR FIRE
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed" style={{ color: MUTED }}>
              From high-intensity intervals to mindful yoga flows.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CLASSES.map((cls, i) => (
            <Reveal key={cls.name} delay={i * 0.08}>
              <div
                className="group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
                onMouseEnter={(e) => (e.currentTarget.style.borderTopColor = GREEN)}
                onMouseLeave={(e) => (e.currentTarget.style.borderTopColor = BORDER)}
              >
                <div className="relative h-[200px] w-full overflow-hidden">
                  <Image src={cls.image} alt={cls.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />
                </div>
                <div className="p-5">
                  <h3 className="text-[15px] font-bold uppercase tracking-wide" style={{ color: WHITE }}>{cls.name}</h3>
                  <p className="mt-1 text-[13px]" style={{ color: GREEN }}>{cls.instructor}</p>
                  <p className="mt-2 text-[12px]" style={{ color: MUTED }}>{cls.schedule}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="rounded-full px-3 py-1 text-[11px]" style={{ background: "rgba(255,255,255,0.05)", color: MUTED }}>
                      {cls.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px]" style={{ color: MUTED }}>
                      <span className="inline-block h-2 w-2 rounded-full" style={{ background: DIFFICULTY_COLOR[cls.difficulty] }} />
                      {cls.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link href="/demos/fitness/classes" className="inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-wider transition-colors hover:text-white" style={{ color: GREEN }}>
              View All Classes <span>&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ════════════ 4. MEMBERSHIP (3 tiers) ════════════ */}
      <section id="membership" className="px-6 py-28 md:px-12 lg:px-20" style={{ background: SURFACE }}>
        <Reveal>
          <div className="mx-auto max-w-6xl text-center">
            <span className="text-[11px] font-semibold uppercase" style={{ color: GREEN, letterSpacing: "0.35em" }}>MEMBERSHIP</span>
            <h2 className="mt-4 text-[40px] font-black uppercase tracking-tight md:text-[48px]" style={{ fontFamily: "var(--font-gym-display), sans-serif" }}>
              INVEST IN YOURSELF
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <div
                className="relative flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: BG,
                  border: plan.recommended ? `2px solid ${GREEN}` : `1px solid ${BORDER}`,
                }}
              >
                {plan.recommended && (
                  <span
                    className="mb-4 inline-block self-start rounded-full px-3 py-1 text-[10px] font-bold uppercase"
                    style={{ background: GREEN, color: "#000", letterSpacing: "0.1em" }}
                  >
                    MOST POPULAR
                  </span>
                )}
                <span className="text-[13px] font-semibold uppercase" style={{ color: MUTED, letterSpacing: "0.15em" }}>
                  {plan.name}
                </span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-[48px] font-black" style={{ color: WHITE, fontVariantNumeric: "tabular-nums" }}>
                    &euro;{plan.price}
                  </span>
                  <span className="text-[14px]" style={{ color: MUTED }}>/mo</span>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[13px]" style={{ color: MUTED }}>
                      <span className="inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: GREEN }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <MagneticButton>
                    <span
                      className="block w-full rounded-full py-3.5 text-center text-[13px] font-semibold uppercase tracking-wider transition-all"
                      style={{
                        background: plan.recommended ? GREEN : "transparent",
                        color: plan.recommended ? "#000" : MUTED,
                        border: plan.recommended ? "none" : `1px solid ${BORDER}`,
                      }}
                    >
                      GET STARTED
                    </span>
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link href="#membership" className="inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-wider transition-colors hover:text-white" style={{ color: GREEN }}>
              View Plans <span>&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ════════════ 5. TRAINERS (4 mini cards) ════════════ */}
      <section className="px-6 py-28 md:px-12 lg:px-20" style={{ background: BG }}>
        <Reveal>
          <div className="mx-auto max-w-6xl text-center">
            <span className="text-[11px] font-semibold uppercase" style={{ color: GREEN, letterSpacing: "0.35em" }}>TEAM</span>
            <h2 className="mt-4 text-[40px] font-black uppercase tracking-tight md:text-[48px]" style={{ fontFamily: "var(--font-gym-display), sans-serif" }}>
              MEET YOUR COACHES
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINERS.map((trainer, i) => (
            <Reveal key={trainer.name} delay={i * 0.08}>
              <div
                className="rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
                style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
              >
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold"
                  style={{ border: `2px solid ${GREEN}`, color: GREEN }}
                >
                  {trainer.initials}
                </div>
                <h3 className="mt-4 text-[15px] font-bold uppercase tracking-wide" style={{ color: WHITE }}>{trainer.name}</h3>
                <p className="mt-1 text-[13px]" style={{ color: GREEN }}>{trainer.specialty}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link href="/demos/fitness/trainers" className="inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-wider transition-colors hover:text-white" style={{ color: GREEN }}>
              Meet Coaches <span>&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ════════════ 6. TESTIMONIALS (3) ════════════ */}
      <section className="px-6 py-28 md:px-12 lg:px-20" style={{ background: SURFACE }}>
        <Reveal>
          <div className="mx-auto max-w-6xl text-center">
            <span className="text-[11px] font-semibold uppercase" style={{ color: GREEN, letterSpacing: "0.35em" }}>TESTIMONIALS</span>
            <h2 className="mt-4 text-[40px] font-black uppercase tracking-tight md:text-[48px]" style={{ fontFamily: "var(--font-gym-display), sans-serif" }}>
              REAL RESULTS
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                className="rounded-2xl p-6 transition-all duration-300"
                style={{ background: BG, borderLeft: `3px solid ${GREEN}`, border: `1px solid ${BORDER}`, borderLeftColor: GREEN, borderLeftWidth: "3px" }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill={GREEN} stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-4 text-[13px] font-semibold uppercase tracking-wide" style={{ color: WHITE }}>
                  {t.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════ 7. CTA + FLOATING DOTS ════════════ */}
      <section id="cta" className="relative overflow-hidden px-6 py-36 text-center" style={{ background: BG }}>
        {/* 12 floating green CSS dots */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 4 + (i % 4) * 3,
              height: 4 + (i % 4) * 3,
              background: GREEN,
              opacity: 0.15 + (i % 5) * 0.05,
              left: `${8 + (i * 7.5) % 85}%`,
              top: `${10 + ((i * 13) % 80)}%`,
            }}
            animate={{
              y: [0, -20 - (i % 3) * 10, 0],
              x: [0, (i % 2 === 0 ? 10 : -10), 0],
              opacity: [0.15 + (i % 5) * 0.05, 0.3, 0.15 + (i % 5) * 0.05],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + (i % 3),
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}

        <Reveal>
          <div className="relative z-10">
            <h2 className="mx-auto max-w-2xl text-[36px] font-black uppercase leading-tight tracking-tight md:text-[52px]" style={{ fontFamily: "var(--font-gym-display), sans-serif" }}>
              <span style={{ color: WHITE }}>YOUR TRANSFORMATION</span>{" "}
              <span style={{ color: GREEN }}>STARTS TODAY.</span>
            </h2>
            <p className="mt-6 text-[15px]" style={{ color: MUTED }}>
              First week free. No commitment. No pressure.
            </p>
            <div className="mt-10">
              <MagneticButton>
                <span
                  className="inline-block rounded-full px-12 py-5 text-[15px] font-bold uppercase tracking-wider transition-all hover:brightness-110"
                  style={{ background: GREEN, color: "#000" }}
                >
                  START FREE TRIAL
                </span>
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>

      <FitFooter />
    </main>
  );
}
