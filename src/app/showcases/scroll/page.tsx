"use client";

import { useRef, useMemo, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  MotionValue,
  useSpring,
} from "framer-motion";

/* ================================================================== */
/*  GLOBAL STYLES — injected once                                      */
/* ================================================================== */
function GlobalStyles() {
  return (
    <style>{`
      @keyframes dust-drift {
        0%, 100% { transform: translate(0,0); opacity: 0.1; }
        25% { opacity: 0.3; }
        50% { transform: translate(var(--dx), var(--dy)); opacity: 0.15; }
        75% { opacity: 0.35; }
      }
      @keyframes cursor-blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      @keyframes gradient-shift {
        0% { background-position: 0% center; }
        100% { background-position: 200% center; }
      }
      @keyframes ring-pulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.25; }
      }
      @keyframes breathe {
        0%, 100% { opacity: 0.04; transform: scale(1); }
        50% { opacity: 0.1; transform: scale(1.01); }
      }
    `}</style>
  );
}

/* ================================================================== */
/*  FLOATING DUST — ambient particles                                  */
/* ================================================================== */
function FloatingDust() {
  const dots = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => {
      const s = (i * 7 + 13) * 3;
      return {
        id: i,
        left: `${(s * 13) % 100}%`,
        top: `${(s * 17) % 100}%`,
        size: 1 + (s % 2),
        dur: 10 + (s % 10),
        delay: -(s % 6),
        dx: 25 + (s % 45),
        dy: 20 + (s % 35),
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[5]">
      {dots.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            "--dx": `${p.dx}px`,
            "--dy": `${p.dy}px`,
            animation: `dust-drift ${p.dur}s ease-in-out ${p.delay}s infinite`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

/* ================================================================== */
/*  PROGRESS BAR — thin line at top                                    */
/* ================================================================== */
function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const width = useTransform(smooth, [0, 1], ["0%", "100%"]);
  return (
    <div className="fixed top-0 left-0 w-full h-px z-50 bg-white/5">
      <motion.div className="h-full bg-white/50" style={{ width }} />
    </div>
  );
}

/* ================================================================== */
/*  CHAPTER NAV — right side markers (desktop)                         */
/* ================================================================== */
function ChapterNav() {
  const { scrollYProgress } = useScroll();
  const [chapter, setChapter] = useState(0);
  const labels = ["Title", "Process", "Manifesto", "Finale"];

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.12) setChapter(0);
    else if (v < 0.58) setChapter(1);
    else if (v < 0.85) setChapter(2);
    else setChapter(3);
  });

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-5 hidden lg:flex">
      {labels.map((l, i) => (
        <div key={l} className="flex items-center gap-2.5">
          <div
            className="h-px transition-all duration-500"
            style={{
              width: i === chapter ? 20 : 10,
              background: i === chapter ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.12)",
            }}
          />
          <span
            className="text-[8px] tracking-[0.2em] uppercase transition-colors duration-500"
            style={{ color: i === chapter ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.12)" }}
          >
            {l}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ================================================================== */
/*  ACT 1 — TITLE ZOOM                                                 */
/*  Scroll: 120vh. Title scales up and dissolves.                      */
/* ================================================================== */
function Act1_Title() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 10]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 1, 0]);
  const letterSpacing = useTransform(scrollYProgress, [0, 0.5], ["-0.04em", "0.3em"]);
  const subOp = useTransform(scrollYProgress, [0, 0.1, 0.35], [1, 1, 0]);
  const barH = useTransform(scrollYProgress, [0, 0.25], ["10vh", "0vh"]);

  return (
    <section ref={ref} className="relative h-[120vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "120px",
        }}
      />

      {/* Letterbox */}
      <motion.div className="absolute top-0 left-0 w-full bg-black z-20" style={{ height: barH }} />
      <motion.div className="absolute bottom-0 left-0 w-full bg-black z-20" style={{ height: barH }} />

      <div className="relative z-10 text-center">
        <motion.p className="text-[10px] sm:text-[11px] text-white/25 tracking-[0.5em] uppercase mb-5 sm:mb-7" style={{ opacity: subOp }}>
          Scroll Cinema Presents
        </motion.p>
        <motion.h1
          className="text-[clamp(44px,11vw,200px)] font-black text-white leading-none select-none will-change-transform"
          style={{ scale, opacity, letterSpacing }}
        >
          CHRONOLOGY
        </motion.h1>
        <motion.p className="text-[11px] sm:text-[13px] text-white/15 tracking-[0.2em] uppercase mt-5 sm:mt-7" style={{ opacity: subOp }}>
          A story told in scroll
        </motion.p>
      </div>

      {/* Scroll prompt */}
      <motion.div className="absolute bottom-[12vh] left-1/2 -translate-x-1/2 z-30" style={{ opacity: subOp }}>
        <motion.div
          className="w-px h-7 bg-white/15 origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

/* ================================================================== */
/*  ACT 2 — THE FOUR STEPS  (stacking sticky cards)                    */
/*  Scroll: 400vh (100vh per step). Cards stack on top of each other.  */
/*  Always something visible — no gaps.                                */
/* ================================================================== */
const processSteps = [
  {
    num: "01",
    title: "DISCOVER",
    subtitle: "Understanding your vision",
    items: ["Competitive deep-dive", "User journey mapping", "Goal alignment", "Brand audit"],
    accent: "rgba(99, 102, 241, 0.15)",
  },
  {
    num: "02",
    title: "DESIGN",
    subtitle: "Crafting the visual language",
    items: ["Wireframe architecture", "High-fidelity mockups", "Interaction design", "Design system"],
    accent: "rgba(168, 85, 247, 0.15)",
  },
  {
    num: "03",
    title: "BUILD",
    subtitle: "Engineering the experience",
    items: ["Component development", "Performance tuning", "API integration", "Cross-device testing"],
    accent: "rgba(236, 72, 153, 0.12)",
  },
  {
    num: "04",
    title: "LAUNCH",
    subtitle: "Going live with confidence",
    items: ["Staging review", "SEO optimisation", "Analytics setup", "Handover & support"],
    accent: "rgba(34, 197, 94, 0.12)",
  },
];

function StepCard({
  step,
  index,
  globalProgress,
}: {
  step: (typeof processSteps)[0];
  index: number;
  globalProgress: MotionValue<number>;
}) {
  const stepStart = index / 4;
  const stepEnd = (index + 1) / 4;

  const cardOpacity = useTransform(globalProgress,
    index === 0
      ? [0, 0.01, stepEnd - 0.05, stepEnd]
      : [stepStart, stepStart + 0.05, stepEnd - 0.05, stepEnd],
    index === 0
      ? [1, 1, 1, 0]
      : [0, 1, 1, index < 3 ? 0 : 1]
  );
  const cardY = useTransform(globalProgress, [stepStart, stepStart + 0.08], [60, 0]);
  const cardScale = useTransform(globalProgress, [stepEnd - 0.08, stepEnd], [1, index < 3 ? 0.95 : 1]);

  // Stagger item reveal
  const [visible, setVisible] = useState(false);
  useMotionValueEvent(globalProgress, "change", (v) => {
    setVisible(v >= stepStart + 0.06);
  });

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-6"
      style={{ opacity: cardOpacity, y: cardY, scale: cardScale }}
    >
      <div className="w-full max-w-2xl">
        {/* Top: number + radial glow */}
        <div className="relative flex items-center justify-center mb-8 sm:mb-10">
          <div
            className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] rounded-full"
            style={{ background: `radial-gradient(circle, ${step.accent}, transparent 70%)` }}
          />
          <span className="text-[100px] sm:text-[140px] md:text-[180px] font-black text-white/[0.04] leading-none select-none relative">
            {step.num}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[clamp(32px,7vw,72px)] font-black text-white text-center leading-none mb-2 sm:mb-3">
          {step.title}
        </h2>
        <p className="text-[11px] sm:text-[13px] text-white/25 tracking-[0.15em] uppercase text-center mb-8 sm:mb-10">
          {step.subtitle}
        </p>

        {/* Items grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto">
          {step.items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 py-2 transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div className="w-1 h-1 rounded-full bg-white/25 shrink-0" />
              <span className="text-[12px] sm:text-[13px] text-white/50">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Act2_Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Counter ring driven by scroll
  const [pct, setPct] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setPct(Math.round(Math.min(100, Math.max(0, v * 100))));
  });
  const circ = 2 * Math.PI * 44;

  return (
    <section ref={ref} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Progress ring — top left */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20 flex items-center gap-3">
          <svg width="48" height="48" viewBox="0 0 100 100" className="rotate-[-90deg]">
            <circle cx="50" cy="50" r="44" fill="none" stroke="white" strokeOpacity="0.06" strokeWidth="2" />
            <circle
              cx="50" cy="50" r="44" fill="none" stroke="white" strokeOpacity="0.4" strokeWidth="2"
              strokeDasharray={circ} strokeDashoffset={circ * (1 - pct / 100)}
              strokeLinecap="round" className="transition-all duration-100"
            />
          </svg>
          <span className="text-[11px] font-mono text-white/30 tabular-nums hidden sm:block">{pct}%</span>
        </div>

        {/* Step indicator — bottom center */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {processSteps.map((_, i) => {
            const active = pct >= i * 25 && pct < (i + 1) * 25 + (i === 3 ? 1 : 0);
            return (
              <div
                key={i}
                className="h-[3px] rounded-full transition-all duration-400"
                style={{
                  width: active ? 28 : 10,
                  background: active ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.1)",
                }}
              />
            );
          })}
        </div>

        {/* Cards — stacked, always one visible */}
        {processSteps.map((step, i) => (
          <StepCard key={i} step={step} index={i} globalProgress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}

/* ================================================================== */
/*  ACT 3 — MANIFESTO  (word-by-word reveal)                           */
/*  Scroll: 200vh. Always text visible — words light up as you scroll. */
/* ================================================================== */
const manifestoText =
  "Every website we build starts with a conversation. We listen to your goals, study your competitors, and design a digital experience that sets you apart. No templates. No shortcuts. No compromises. Just craft, code, and obsessive attention to the details that make the difference.";

function RevealWord({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.06, 1]);
  const [phase, setPhase] = useState<"dim" | "glow" | "done">("dim");

  useMotionValueEvent(opacity, "change", (v) => {
    if (v > 0.85) setPhase("done");
    else if (v > 0.15) setPhase("glow");
    else setPhase("dim");
  });

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em] sm:mr-[0.3em]">
      <span
        style={{
          color: phase === "glow" ? "#fff" : phase === "done" ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.06)",
          textShadow: phase === "glow" ? "0 0 25px rgba(255,255,255,0.2)" : "none",
          transition: "color 0.25s, text-shadow 0.25s",
        }}
      >
        {word}
      </span>
    </motion.span>
  );
}

function Act3_Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });

  const words = useMemo(() => manifestoText.split(" "), []);
  const [started, setStarted] = useState(false);
  const [readPct, setReadPct] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.02) setStarted(true);
    setReadPct(Math.max(0, Math.min(100, Math.round(v * 100))));
  });

  return (
    <section ref={ref} className="relative min-h-[200vh] flex items-center justify-center px-6 sm:px-10 bg-black">
      {/* Subtle vertical gradient to separate from process */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        <motion.p
          className="text-[10px] text-white/12 tracking-[0.35em] uppercase text-center mb-8 sm:mb-10"
          style={{ opacity: started ? 0 : 0.5, transition: "opacity 0.6s" }}
        >
          Our Manifesto
        </motion.p>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-semibold leading-[1.7] sm:leading-[1.7] text-center">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length + 0.02;
            return <RevealWord key={`${word}-${i}`} word={word} range={[start, end]} progress={scrollYProgress} />;
          })}
        </p>

        <motion.p
          className="text-center text-[10px] text-white/12 mt-8 tracking-[0.2em] uppercase"
          style={{ opacity: started ? 0 : 0.5, transition: "opacity 0.6s" }}
        >
          Scroll to read
        </motion.p>
      </div>

      {/* Progress — desktop only, right side */}
      <div className="fixed right-5 bottom-8 z-30 items-center gap-2 hidden lg:flex">
        <div className="w-16 h-px bg-white/8 rounded-full overflow-hidden">
          <div className="h-full bg-white/35 rounded-full transition-all duration-150" style={{ width: `${readPct}%` }} />
        </div>
        <span className="text-[9px] font-mono text-white/15 tabular-nums">{readPct}%</span>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  ACT 4 — FINALE  (color inversion + CTA)                            */
/*  Scroll: 100vh. Inverts from black → white → black.                 */
/* ================================================================== */
function Act4_Finale() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });

  const bg = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.8, 1], ["#000000", "#ffffff", "#ffffff", "#000000", "#000000"]);
  const fg = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.8, 1], ["#ffffff", "#000000", "#000000", "#ffffff", "#ffffff"]);
  const titleOp = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const titleScale = useTransform(scrollYProgress, [0.05, 0.25], [0.92, 1]);
  const subOp = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const btnOp = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const btnY = useTransform(scrollYProgress, [0.55, 0.75], [16, 0]);

  return (
    <motion.section
      ref={ref}
      className="relative h-screen flex flex-col items-center justify-center gap-3 sm:gap-5 px-6"
      style={{ backgroundColor: bg }}
    >
      <motion.p style={{ opacity: subOp, color: fg }} className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase opacity-25">
        Finale
      </motion.p>

      <motion.h2
        style={{ opacity: titleOp, color: fg, scale: titleScale }}
        className="text-[clamp(36px,9vw,80px)] font-black leading-none tracking-tight select-none"
      >
        AMENZO
      </motion.h2>

      <motion.p style={{ opacity: subOp, color: fg }} className="text-[11px] sm:text-[13px] opacity-25 tracking-wide">
        Where Code Meets Craft
      </motion.p>

      <motion.a
        href="/contact"
        style={{ opacity: btnOp, y: btnY }}
        className="mt-3 sm:mt-5 px-7 sm:px-8 py-3 sm:py-3.5 text-[11px] sm:text-sm font-medium uppercase tracking-[0.12em] rounded-full bg-white text-black hover:bg-white/90 transition-colors"
      >
        Start a Project
      </motion.a>
    </motion.section>
  );
}

/* ================================================================== */
/*  PAGE                                                                */
/* ================================================================== */
export default function ScrollShowcase() {
  return (
    <main className="bg-black">
      <GlobalStyles />
      <ProgressBar />
      <ChapterNav />
      <FloatingDust />
      <Act1_Title />
      <Act2_Process />
      <Act3_Manifesto />
      <Act4_Finale />
    </main>
  );
}
