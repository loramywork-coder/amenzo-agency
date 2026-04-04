"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   Section 1 — Split Reveal
   ───────────────────────────────────────────── */

const splitWords: {
  text: string;
  initial: { x?: number; y?: number };
  delay: number;
  underlineColor?: string;
}[] = [
  { text: "WHERE", initial: { x: -100 }, delay: 0, underlineColor: "#8b5cf6" },
  { text: "CODE", initial: { x: 100 }, delay: 0.15 },
  { text: "MEETS", initial: { y: -80 }, delay: 0.3 },
  { text: "CRAFT", initial: { y: 80 }, delay: 0.45, underlineColor: "#f59e0b" },
];

function SplitReveal() {
  const [allRevealed, setAllRevealed] = useState(false);

  useEffect(() => {
    // All words finish at delay 0.45 + duration 0.8 = ~1.25s
    const timer = setTimeout(() => setAllRevealed(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex h-screen items-center justify-center pt-20 pb-24">
      <div className="flex flex-col items-center gap-0">
        {splitWords.map((w) => (
          <div key={w.text} className="relative">
            <motion.span
              initial={{ ...w.initial, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14,
                bounce: 0.3,
                delay: w.delay,
              }}
              className="block text-[60px] leading-none font-black tracking-tight text-white md:text-[100px]"
            >
              {w.text.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 12,
                    bounce: 0.3,
                    delay: w.delay + i * 0.04,
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
            {/* Colored underline accent */}
            {w.underlineColor && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: w.delay + 0.8, ease: "easeOut" }}
                className="absolute bottom-0 left-0 h-[3px] w-full origin-left"
                style={{ backgroundColor: w.underlineColor, opacity: 0.7 }}
              />
            )}
          </div>
        ))}
        {/* Cursor blink after all revealed */}
        <AnimatePresence>
          {allRevealed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 inline-block h-[60px] w-[3px] md:h-[100px]"
              style={{ backgroundColor: "#8b5cf6" }}
            >
              <style>{`
                @keyframes cursor-blink-reveal {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0; }
                }
              `}</style>
              <div
                className="h-full w-full"
                style={{ animation: "cursor-blink-reveal 1s step-end infinite" }}
              />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 2 — Scramble Text
   ───────────────────────────────────────────── */

const SCRAMBLE_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?";
const TARGET_TEXT = "We build websites that convert visitors into customers.";
const BRAND_COLORS = ["#8b5cf6", "#a78bfa", "#f59e0b", "#fbbf24", "#c084fc", "#d97706"];

function ScrambleText() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [displayChars, setDisplayChars] = useState<
    { char: string; resolved: boolean }[]
  >(
    Array.from({ length: TARGET_TEXT.length }, () => ({
      char: SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)],
      resolved: false,
    }))
  );
  const [done, setDone] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef(0);
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (!isInView) {
      // Reset when scrolling out
      hasTriggered.current = false;
      setDone(false);
      setDisplayChars(
        Array.from({ length: TARGET_TEXT.length }, () => ({
          char: SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)],
          resolved: false,
        }))
      );
      return;
    }

    if (hasTriggered.current) return;
    hasTriggered.current = true;
    startTimeRef.current = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const shouldBeResolved = Math.min(
        Math.floor(elapsed / 50),
        TARGET_TEXT.length
      );

      setDisplayChars(
        Array.from({ length: TARGET_TEXT.length }, (_, i) => {
          if (i < shouldBeResolved) {
            return { char: TARGET_TEXT[i], resolved: true };
          }
          return {
            char: SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)],
            resolved: false,
          };
        })
      );

      if (shouldBeResolved >= TARGET_TEXT.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDone(true);
      }
    }, 30);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative flex h-screen flex-col items-center justify-center px-6 pt-20 pb-24"
    >
      <p className="mx-auto max-w-4xl text-center font-mono text-2xl font-bold md:text-4xl">
        {displayChars.map((c, i) => (
          <span
            key={i}
            style={{
              color: c.resolved
                ? "#ffffff"
                : BRAND_COLORS[i % BRAND_COLORS.length],
              transition: c.resolved ? "color 0.15s ease" : undefined,
            }}
          >
            {c.char}
          </span>
        ))}
      </p>
      {/* Status label */}
      <motion.div
        className="mt-6 font-mono text-sm tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ delay: 0.2 }}
      >
        {done ? (
          <span className="text-green-400">decoded &#10003;</span>
        ) : isInView ? (
          <span className="text-violet-400 animate-pulse">decrypting...</span>
        ) : null}
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 3 — Marquee Stack
   ───────────────────────────────────────────── */

const marqueeLines: {
  text: string;
  direction: "left" | "right";
  duration: string;
  textClass: string;
  opacityClass: string;
}[] = [
  {
    text: "NEXT.JS \u00B7 REACT \u00B7 TAILWIND \u00B7 TYPESCRIPT \u00B7 ",
    direction: "right",
    duration: "25s",
    textClass: "text-5xl",
    opacityClass: "text-white/20",
  },
  {
    text: "DESIGN \u00B7 CODE \u00B7 LAUNCH \u00B7 GROW \u00B7 OPTIMISE \u00B7 ",
    direction: "left",
    duration: "30s",
    textClass: "text-4xl",
    opacityClass: "text-white/15",
  },
  {
    text: "HOTEL \u00B7 RESTAURANT \u00B7 E-COMMERCE \u00B7 SaaS \u00B7 ",
    direction: "right",
    duration: "20s",
    textClass: "text-3xl",
    opacityClass: "text-white/10",
  },
  {
    text: "MALTA \u00B7 EUROPE \u00B7 WORLDWIDE \u00B7 GLOBAL \u00B7 ",
    direction: "left",
    duration: "35s",
    textClass: "text-4xl",
    opacityClass: "text-white/15",
  },
  {
    text: "FAST \u00B7 PREMIUM \u00B7 CUSTOM \u00B7 RESPONSIVE \u00B7 ",
    direction: "right",
    duration: "22s",
    textClass: "text-5xl",
    opacityClass: "text-white/20",
  },
  {
    text: "\uD83D\uDE80 \u00B7 \uD83D\uDC8E \u00B7 \u26A1 \u00B7 \uD83C\uDFAF \u00B7 \uD83D\uDD25 \u00B7 ",
    direction: "left",
    duration: "18s",
    textClass: "text-4xl",
    opacityClass: "text-white/25",
  },
];

function MarqueeStack() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="marquee-section relative flex h-[60vh] flex-col justify-center overflow-hidden pt-20 pb-24"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      {/* Vertical gradient overlay (dark at top/bottom edges) */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.6) 100%)",
        }}
      />
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .marquee-section .marquee-track {
          transition: animation-duration 0.6s ease;
        }
      `}</style>
      {marqueeLines.map((line, i) => (
        <div key={i} className="whitespace-nowrap overflow-hidden">
          <div
            className="marquee-track inline-block"
            style={{
              animation: `marquee-${line.direction} ${line.duration} linear infinite`,
              animationDuration: hovered
                ? `${parseFloat(line.duration) * 2}s`
                : line.duration,
            }}
          >
            <span
              className={`${line.textClass} ${line.opacityClass} font-black tracking-tight`}
            >
              {line.text.repeat(4)}
            </span>
            <span
              className={`${line.textClass} ${line.opacityClass} font-black tracking-tight`}
            >
              {line.text.repeat(4)}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 4 — Gravity Text
   ───────────────────────────────────────────── */

const GRAVITY_COLORS = [
  "#8b5cf6", // violet
  "#a78bfa", // light violet
  "#f59e0b", // amber
  "#fbbf24", // light amber
  "#c084fc", // purple
  "#d97706", // dark amber
];

function GravityText() {
  const letters = "AMENZO".split("");
  const [phase, setPhase] = useState<"idle" | "shaking" | "fallen" | "reassembling">("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fallTargets = useRef(
    letters.map(() => ({
      y: 200 + Math.random() * 400,
      rotate: -45 + Math.random() * 90,
    }))
  );

  const handleClick = useCallback(() => {
    if (phase !== "idle") return;
    // Shake phase
    setPhase("shaking");
    timeoutRef.current = setTimeout(() => {
      // Fall phase
      setPhase("fallen");
      timeoutRef.current = setTimeout(() => {
        // Reassembly phase
        setPhase("reassembling");
        timeoutRef.current = setTimeout(() => {
          setPhase("idle");
          // Regenerate fall targets for next click
          fallTargets.current = letters.map(() => ({
            y: 200 + Math.random() * 400,
            rotate: -45 + Math.random() * 90,
          }));
        }, 1200);
      }, 1500);
    }, 300);
  }, [phase, letters]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const isFallen = phase === "fallen";
  const isShaking = phase === "shaking";
  const isReassembling = phase === "reassembling";

  return (
    <section className="relative flex h-screen flex-col items-center justify-center pt-20 pb-24">
      <style>{`
        @keyframes letter-shake {
          0%, 100% { transform: translateX(0) translateY(0); }
          10% { transform: translateX(-2px) translateY(1px); }
          20% { transform: translateX(3px) translateY(-1px); }
          30% { transform: translateX(-1px) translateY(2px); }
          40% { transform: translateX(2px) translateY(-2px); }
          50% { transform: translateX(-3px) translateY(1px); }
          60% { transform: translateX(1px) translateY(-1px); }
          70% { transform: translateX(-2px) translateY(2px); }
          80% { transform: translateX(3px) translateY(0px); }
          90% { transform: translateX(-1px) translateY(-2px); }
        }
        .gravity-trail {
          filter: blur(4px);
          transition: filter 0.8s ease;
        }
        .gravity-no-trail {
          filter: blur(0px);
        }
      `}</style>
      <div
        className="flex cursor-pointer select-none"
        onClick={handleClick}
        onTouchEnd={(e) => {
          e.preventDefault();
          handleClick();
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleClick();
        }}
      >
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            animate={
              isFallen
                ? {
                    y: fallTargets.current[i].y,
                    rotate: fallTargets.current[i].rotate,
                    opacity: 0,
                  }
                : { y: 0, rotate: 0, opacity: 1 }
            }
            transition={{
              type: "spring",
              stiffness: isFallen ? 80 : 200,
              damping: isFallen ? 10 : 15,
              delay: isFallen ? i * 0.05 : i * 0.08,
            }}
            className={`inline-block text-[80px] font-black md:text-[120px] ${
              isReassembling ? "gravity-trail" : "gravity-no-trail"
            }`}
            style={{
              color: isFallen || isReassembling || isShaking
                ? GRAVITY_COLORS[i % GRAVITY_COLORS.length]
                : "#ffffff",
              animation: isShaking
                ? `letter-shake 0.3s ease-in-out ${i * 0.02}s`
                : undefined,
              transition: "color 0.5s ease",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      {/* Label */}
      <motion.p
        className="mt-6 text-sm font-mono tracking-wider"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0.7 }}
      >
        {phase === "idle" && (
          <span className="text-white/40">Click to shatter</span>
        )}
        {phase === "shaking" && (
          <span className="text-amber-400 animate-pulse">Shattering...</span>
        )}
        {phase === "fallen" && (
          <span className="text-violet-400 animate-pulse">Reassembling...</span>
        )}
        {phase === "reassembling" && (
          <span className="text-green-400">Reassembling...</span>
        )}
      </motion.p>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 5 — Typewriter
   ───────────────────────────────────────────── */

const terminalLines = [
  { text: "$ npx create-next-app amenzo --typescript", color: "text-green-400" },
  { text: "\u2713 Ready in 2.3s", color: "text-white" },
  { text: "$ npm run dev", color: "text-green-400" },
  { text: "\u25B6 Running on localhost:3000", color: "text-white" },
  { text: "$ lighthouse --url=localhost:3000", color: "text-green-400" },
  { text: "Performance: 98 | Accessibility: 100 | SEO: 100", color: "text-amber-400" },
];

const LINE_PAUSE_MS = 500;

function Typewriter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [lines, setLines] = useState<string[]>([]);
  const [paused, setPaused] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;
    setCurrentLine(0);
    setCurrentChar(0);
    setLines([]);
  }, [isInView]);

  useEffect(() => {
    if (!started.current) return;
    if (currentLine >= terminalLines.length) return;
    if (paused) return;

    const fullText = terminalLines[currentLine].text;

    if (currentChar < fullText.length) {
      const timer = setTimeout(() => {
        setCurrentChar((c) => c + 1);
      }, 40);
      return () => clearTimeout(timer);
    }

    // Line finished -- commit it, pause, then move to the next
    setLines((prev) => [...prev, fullText]);
    setPaused(true);
    const pauseTimer = setTimeout(() => {
      setCurrentLine((l) => l + 1);
      setCurrentChar(0);
      setPaused(false);
    }, LINE_PAUSE_MS);
    return () => clearTimeout(pauseTimer);
  }, [currentLine, currentChar, paused]);

  const isTyping =
    started.current && currentLine < terminalLines.length && !paused;
  const isComplete = started.current && currentLine >= terminalLines.length;

  return (
    <section
      ref={ref}
      className="relative flex h-[80vh] items-center justify-center px-6 pt-20 pb-24"
    >
      <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0A] p-8 font-mono text-sm md:text-base">
        {/* Scan lines overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)",
          }}
        />

        {/* Top bar */}
        <div className="mb-6 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-3 text-xs text-white/40">terminal</span>
        </div>

        {/* Completed lines */}
        {lines.map((text, i) => (
          <div key={i} className={`${terminalLines[i].color} mb-1`}>
            {text}
          </div>
        ))}

        {/* Currently typing line */}
        {isTyping && (
          <div className={`${terminalLines[currentLine].color} mb-1`}>
            {terminalLines[currentLine].text.slice(0, currentChar)}
            <span className="terminal-cursor">|</span>
          </div>
        )}

        {/* Final cursor blink when complete */}
        {isComplete && (
          <div className="text-green-400 mb-1">
            <span className="terminal-cursor">|</span>
          </div>
        )}

        {/* Blinking cursor that sits after typed content during pause */}
        {paused && (
          <div className="text-green-400 mb-1">
            <span className="terminal-cursor">|</span>
          </div>
        )}
      </div>

      <style>{`
        @keyframes terminal-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .terminal-cursor {
          color: #22c55e;
          font-weight: bold;
          animation: terminal-blink 0.8s step-end infinite;
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */

export default function KineticTypePage() {
  return (
    <main className="min-h-screen bg-black">
      <SplitReveal />
      <ScrambleText />
      <MarqueeStack />
      <GravityText />
      <Typewriter />
    </main>
  );
}
