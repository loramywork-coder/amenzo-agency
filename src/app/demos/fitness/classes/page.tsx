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
type ClassCategory = "All" | "HIIT" | "Strength" | "Cardio" | "Yoga" | "Boxing" | "Functional";

const CATEGORIES: ClassCategory[] = ["All", "HIIT", "Strength", "Cardio", "Yoga", "Boxing", "Functional"];

interface GymClass {
  name: string;
  instructor: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "All Levels" | "Intermediate" | "Advanced";
  schedule: string;
  category: ClassCategory;
  image: string;
}

const CLASSES: GymClass[] = [
  {
    name: "HIIT BURN",
    instructor: "Alex Borg",
    description: "High-intensity interval training designed to torch calories and build explosive power. Expect circuits, sprints, and zero rest.",
    duration: "45 min",
    difficulty: "Advanced",
    schedule: "Mon / Wed / Fri  6:00 AM",
    category: "HIIT",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&q=80",
  },
  {
    name: "YOGA FLOW",
    instructor: "Mia Grech",
    description: "A dynamic vinyasa flow connecting breath and movement. Perfect for flexibility, balance, and mental clarity at any level.",
    duration: "60 min",
    difficulty: "All Levels",
    schedule: "Tue / Thu  8:00 AM",
    category: "Yoga",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
  },
  {
    name: "BOXING FIT",
    instructor: "Danny Vella",
    description: "Learn real boxing technique while getting an insane cardio workout. Pads, bags, and partner drills included.",
    duration: "50 min",
    difficulty: "Intermediate",
    schedule: "Mon / Wed  6:00 PM",
    category: "Boxing",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80",
  },
  {
    name: "SPIN CYCLE",
    instructor: "Lisa Camilleri",
    description: "High-energy indoor cycling with killer playlists. Sprint intervals, hill climbs, and endurance rides to push your limits.",
    duration: "40 min",
    difficulty: "All Levels",
    schedule: "Daily  6:30 AM",
    category: "Cardio",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
  },
  {
    name: "STRENGTH LAB",
    instructor: "Alex Borg",
    description: "Barbell-focused strength training with progressive overload programming. Build real strength with compound lifts.",
    duration: "55 min",
    difficulty: "Intermediate",
    schedule: "Tue / Thu  10:00 AM",
    category: "Strength",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
  },
  {
    name: "CROSSFIT WOD",
    instructor: "Danny Vella",
    description: "Workout of the Day combining Olympic lifting, gymnastics, and metabolic conditioning. Scaled options for every athlete.",
    duration: "50 min",
    difficulty: "Advanced",
    schedule: "Mon / Wed / Fri  5:30 PM",
    category: "Functional",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
  },
  {
    name: "PILATES CORE",
    instructor: "Mia Grech",
    description: "Mat-based Pilates focusing on deep core activation, spinal mobility, and postural alignment. Gentle yet challenging.",
    duration: "45 min",
    difficulty: "Beginner",
    schedule: "Sat  9:00 AM",
    category: "Yoga",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
  },
  {
    name: "FUNCTIONAL TRAINING",
    instructor: "Lisa Camilleri",
    description: "Movement-based training that mimics real life. Kettlebells, TRX, sleds, and bodyweight exercises for total-body performance.",
    duration: "50 min",
    difficulty: "All Levels",
    schedule: "Tue / Thu / Sat  7:00 AM",
    category: "Functional",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80",
  },
];

const DIFFICULTY_COLOR: Record<string, string> = {
  Beginner: GREEN,
  "All Levels": GREEN,
  Intermediate: "#EAB308",
  Advanced: "#EF4444",
};

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
export default function ClassesPage() {
  const [activeCategory, setActiveCategory] = useState<ClassCategory>("All");

  const filteredClasses =
    activeCategory === "All"
      ? CLASSES
      : CLASSES.filter((c) => c.category === activeCategory);

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
              OUR CLASSES
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-[44px] font-black uppercase tracking-tight md:text-[60px]"
              style={{ fontFamily: "var(--font-gym-display), sans-serif" }}
            >
              FIND YOUR <span style={{ color: GREEN }}>FIRE</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 max-w-lg text-[15px] leading-relaxed"
              style={{ color: MUTED }}
            >
              From high-intensity intervals to mindful yoga flows. Eight programs designed
              to challenge every fitness level.
            </motion.p>
          </div>
        </Reveal>
      </section>

      {/* ════════════ FILTER TABS ════════════ */}
      <section className="px-6 md:px-12 lg:px-20" style={{ background: BG }}>
        <div className="mx-auto max-w-6xl">
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2 pb-12">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="rounded-full px-5 py-2.5 text-[12px] font-semibold uppercase tracking-wider transition-all duration-200"
                    style={{
                      background: isActive ? GREEN : "transparent",
                      color: isActive ? "#000" : "rgba(255,255,255,0.5)",
                      border: isActive ? `1px solid ${GREEN}` : "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════ CLASS GRID ════════════ */}
      <section className="px-6 pb-28 md:px-12 lg:px-20" style={{ background: BG }}>
        <div className="mx-auto max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {filteredClasses.map((cls, i) => (
                <motion.div
                  key={cls.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5"
                  style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderTopColor = GREEN;
                    e.currentTarget.style.borderTopWidth = "2px";
                    e.currentTarget.style.boxShadow = `0 8px 32px rgba(34,197,94,0.08)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderTopColor = BORDER;
                    e.currentTarget.style.borderTopWidth = "1px";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Image */}
                  <div className="relative h-[180px] w-full overflow-hidden">
                    <Image
                      src={cls.image}
                      alt={cls.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent 60%)" }} />
                    {/* Duration badge on image */}
                    <span
                      className="absolute bottom-3 left-3 rounded-full px-3 py-1 text-[11px] font-semibold"
                      style={{ background: "rgba(0,0,0,0.6)", color: WHITE, backdropFilter: "blur(8px)" }}
                    >
                      {cls.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-[15px] font-bold uppercase tracking-wide" style={{ color: WHITE }}>
                      {cls.name}
                    </h3>
                    <p className="mt-1 text-[13px] font-medium" style={{ color: GREEN }}>
                      {cls.instructor}
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed" style={{ color: MUTED }}>
                      {cls.description}
                    </p>
                    <p className="mt-3 text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                      {cls.schedule}
                    </p>

                    {/* Duration + Difficulty */}
                    <div className="mt-3 flex items-center gap-3">
                      <span
                        className="rounded-full px-3 py-1 text-[11px] font-medium"
                        style={{ background: "rgba(255,255,255,0.05)", color: MUTED }}
                      >
                        {cls.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-[11px] font-medium" style={{ color: MUTED }}>
                        <span
                          className="inline-block h-2 w-2 rounded-full"
                          style={{ background: DIFFICULTY_COLOR[cls.difficulty] }}
                        />
                        {cls.difficulty}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredClasses.length === 0 && (
            <Reveal>
              <div className="py-20 text-center">
                <p className="text-[15px]" style={{ color: MUTED }}>
                  No classes found in this category. Try another filter.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ════════════ CTA STRIP ════════════ */}
      <section className="px-6 py-20 text-center md:px-12" style={{ background: SURFACE }}>
        <Reveal>
          <h2 className="text-[32px] font-black uppercase tracking-tight md:text-[40px]" style={{ fontFamily: "var(--font-gym-display), sans-serif" }}>
            <span style={{ color: WHITE }}>READY TO </span>
            <span style={{ color: GREEN }}>GET STARTED?</span>
          </h2>
          <p className="mt-4 text-[15px]" style={{ color: MUTED }}>
            Your first class is on us. No strings attached.
          </p>
          <div className="mt-8">
            <MagneticButton>
              <span
                className="inline-block rounded-full px-10 py-4 text-[14px] font-bold uppercase tracking-wider transition-all hover:brightness-110"
                style={{ background: GREEN, color: "#000" }}
              >
                BOOK YOUR FIRST CLASS
              </span>
            </MagneticButton>
          </div>
        </Reveal>
      </section>

      <FitFooter />
    </main>
  );
}
