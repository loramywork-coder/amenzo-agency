"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NOTIFICATIONS = [
  { color: "bg-blue-400", text: "New project inquiry", time: "2m ago", hasSoundWave: true },
  { color: "bg-green-400", text: "Payment received", time: "1h ago", hasSoundWave: false },
  { color: "bg-purple-400", text: "Site deployed", time: "3h ago", hasSoundWave: false },
  { color: "bg-amber-400", text: "New team member joined", time: "5m ago", hasSoundWave: false },
  { color: "bg-rose-400", text: "Server alert resolved", time: "10m ago", hasSoundWave: false },
  { color: "bg-cyan-400", text: "Client feedback submitted", time: "15m ago", hasSoundWave: true },
];

const CHART_POINTS = [
  { x: 0, y: 60 },
  { x: 50, y: 55 },
  { x: 90, y: 45 },
  { x: 130, y: 50 },
  { x: 180, y: 25 },
  { x: 220, y: 30 },
  { x: 270, y: 15 },
  { x: 300, y: 12 },
];

function useAnimatedNumber(target: number, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf: number;
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased * 10) / 10);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

function SoundWaveIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" className="inline-block ml-1 opacity-50">
      <rect x="1" y="4" width="1.5" height="4" fill="white" rx="0.5">
        <animate attributeName="height" values="4;8;4" dur="0.8s" repeatCount="indefinite" />
        <animate attributeName="y" values="4;2;4" dur="0.8s" repeatCount="indefinite" />
      </rect>
      <rect x="4" y="3" width="1.5" height="6" fill="white" rx="0.5">
        <animate attributeName="height" values="6;3;6" dur="0.6s" repeatCount="indefinite" />
        <animate attributeName="y" values="3;4.5;3" dur="0.6s" repeatCount="indefinite" />
      </rect>
      <rect x="7" y="2" width="1.5" height="8" fill="white" rx="0.5">
        <animate attributeName="height" values="8;4;8" dur="0.7s" repeatCount="indefinite" />
        <animate attributeName="y" values="2;4;2" dur="0.7s" repeatCount="indefinite" />
      </rect>
      <rect x="10" y="4" width="1.5" height="4" fill="white" rx="0.5">
        <animate attributeName="height" values="4;7;4" dur="0.9s" repeatCount="indefinite" />
        <animate attributeName="y" values="4;2.5;4" dur="0.9s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

export default function GlassmorphismShowcase() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  // Music player state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  // Dashboard state
  const visitors = useAnimatedNumber(12400);
  const convRate = useAnimatedNumber(3.2, 2000);
  const revenue = useAnimatedNumber(8500, 1800);
  const [lastUpdated, setLastUpdated] = useState(0);
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // Notification state
  const [visibleNotifs, setVisibleNotifs] = useState<typeof NOTIFICATIONS>([]);
  const [notifCycleIndex, setNotifCycleIndex] = useState(3);
  const notifContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Music player timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentTime((t) => {
        if (t >= 30) {
          setIsPlaying(false);
          return 0;
        }
        return t + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Last updated ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated((t) => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Staggered notification mount
  useEffect(() => {
    const initial = NOTIFICATIONS.slice(0, 3);
    initial.forEach((notif, i) => {
      setTimeout(() => {
        setVisibleNotifs((prev) => {
          if (prev.find((n) => n.text === notif.text)) return prev;
          return [...prev, notif];
        });
      }, (i + 1) * 400);
    });
  }, []);

  // Cycle new notifications every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifCycleIndex((prev) => {
        const nextIdx = prev % NOTIFICATIONS.length;
        const newNotif = NOTIFICATIONS[nextIdx];
        setVisibleNotifs((current) => {
          const updated = [...current, newNotif];
          if (updated.length > 5) return updated.slice(updated.length - 5);
          return updated;
        });
        return prev + 1;
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Toast auto-dismiss
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 1500);
    return () => clearTimeout(t);
  }, [toast]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    },
    []
  );

  const dismissNotif = (index: number) => {
    setVisibleNotifs((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setTimeout(() => setRipple(null), 600);
  };

  const formatTime = (s: number) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  const formatNumber = (n: number, decimals = 0) => {
    if (n >= 1000) return (n / 1000).toFixed(1) + "K";
    return n.toFixed(decimals);
  };

  const glassCard: React.CSSProperties = {
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "24px",
  };

  // Tilt calculations (perspective + rotateX/Y)
  const tiltX = mousePos.y * -8;
  const tiltY = mousePos.x * 8;

  return (
    <>
      <style>{`
        @keyframes drift-blue {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(60px, 40px); }
          50% { transform: translate(-30px, 80px); }
          75% { transform: translate(40px, -20px); }
        }
        @keyframes drift-purple {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-50px, 60px); }
          50% { transform: translate(70px, -30px); }
          75% { transform: translate(-40px, -50px); }
        }
        @keyframes drift-pink {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(40px, -60px); }
          50% { transform: translate(-60px, -20px); }
          75% { transform: translate(30px, 50px); }
        }
        @keyframes progress-fill {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes spin-vinyl {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes waveform-1 { 0%, 100% { height: 6px; } 50% { height: 16px; } }
        @keyframes waveform-2 { 0%, 100% { height: 12px; } 50% { height: 4px; } }
        @keyframes waveform-3 { 0%, 100% { height: 8px; } 50% { height: 18px; } }
        @keyframes waveform-4 { 0%, 100% { height: 14px; } 50% { height: 6px; } }
        @keyframes waveform-5 { 0%, 100% { height: 10px; } 50% { height: 14px; } }
        @keyframes ripple-effect {
          0% { transform: scale(0); opacity: 0.5; }
          100% { transform: scale(4); opacity: 0; }
        }
        .chart-glow {
          filter: drop-shadow(0 0 6px rgba(255,255,255,0.15));
        }
      `}</style>

      <div
        className="relative min-h-screen overflow-hidden pt-24 pb-24"
        onMouseMove={handleMouseMove}
        style={{ perspective: "1200px" }}
      >
        {/* Toast */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl text-sm text-white"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {toast}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating orbs */}
        <div
          className="absolute top-[10%] left-[10%] w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: "#3B82F6",
            filter: "blur(120px)",
            opacity: 0.15,
            animation: "drift-blue 30s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[30%] right-[15%] w-[250px] h-[250px] rounded-full pointer-events-none"
          style={{
            background: "#8B5CF6",
            filter: "blur(120px)",
            opacity: 0.15,
            animation: "drift-purple 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[15%] left-[35%] w-[200px] h-[200px] rounded-full pointer-events-none"
          style={{
            background: "#EC4899",
            filter: "blur(120px)",
            opacity: 0.15,
            animation: "drift-pink 35s ease-in-out infinite",
          }}
        />

        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight">
            GLASS
          </h1>
          <p className="text-sm text-white/40 mt-2">
            Layered depth through translucent surfaces
          </p>
        </div>

        {/* Glass Cards */}
        <div
          className="relative z-10 flex flex-col md:flex-row items-center md:items-end justify-center gap-6 px-6 max-w-5xl mx-auto"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          {/* Card 1 - Music Player */}
          <div
            className="w-full md:w-[280px] p-8"
            style={{
              ...glassCard,
              transform: isDesktop
                ? `translateX(${mousePos.x * -3}px) translateY(${mousePos.y * -3}px) rotate(-2deg)`
                : `translateX(${mousePos.x * -3}px) translateY(${mousePos.y * -3}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            {/* Album art with vinyl rotation */}
            <div className="relative w-[120px] h-[120px] mb-4">
              <div
                className="w-full h-full rounded-xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899)",
                  animation: isPlaying
                    ? "spin-vinyl 4s linear infinite"
                    : "none",
                  borderRadius: isPlaying ? "50%" : "12px",
                  transition: "border-radius 0.4s ease",
                }}
              >
                {/* Vinyl hole */}
                {isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-black/40 border border-white/10" />
                  </div>
                )}
                {/* Vinyl rings */}
                {isPlaying && (
                  <>
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: "1px solid rgba(255,255,255,0.08)",
                        margin: "20px",
                        borderRadius: "50%",
                      }}
                    />
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: "1px solid rgba(255,255,255,0.05)",
                        margin: "35px",
                        borderRadius: "50%",
                      }}
                    />
                  </>
                )}
              </div>
            </div>

            <p className="text-lg font-semibold text-white">Midnight Drive</p>
            <p className="text-sm text-white/50 mb-3">The Midnight</p>

            {/* Waveform visualization */}
            <div
              className="flex items-end gap-[3px] h-5 mb-3"
              style={{ opacity: isPlaying ? 1 : 0, transition: "opacity 0.3s" }}
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-[3px] rounded-full bg-white/40"
                  style={{
                    height: "8px",
                    animation: isPlaying
                      ? `waveform-${i} ${0.4 + i * 0.1}s ease-in-out infinite`
                      : "none",
                  }}
                />
              ))}
            </div>

            {/* Play controls */}
            <div className="flex items-center gap-2 mb-3">
              {/* Skip back */}
              <button
                onClick={() => setToast("Demo -- Skip back")}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M8 0L2 5L8 10V0Z" fill="white" opacity="0.6" />
                  <rect x="0" y="0" width="1.5" height="10" fill="white" opacity="0.6" />
                </svg>
              </button>

              {/* Play/Pause */}
              <button
                onClick={() => {
                  setIsPlaying(!isPlaying);
                  if (!isPlaying && currentTime >= 30) setCurrentTime(0);
                }}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/15 transition-colors cursor-pointer"
              >
                {isPlaying ? (
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <rect x="0" y="0" width="4" height="14" rx="1" fill="white" />
                    <rect x="8" y="0" width="4" height="14" rx="1" fill="white" />
                  </svg>
                ) : (
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    className="ml-0.5"
                  >
                    <path d="M0 0L14 8L0 16V0Z" fill="white" />
                  </svg>
                )}
              </button>

              {/* Skip forward */}
              <button
                onClick={() => setToast("Demo -- Skip forward")}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 0L8 5L2 10V0Z" fill="white" opacity="0.6" />
                  <rect x="8.5" y="0" width="1.5" height="10" fill="white" opacity="0.6" />
                </svg>
              </button>
            </div>

            {/* Time display */}
            <div className="flex justify-between text-[10px] text-white/30 mb-1">
              <span>{formatTime(currentTime)}</span>
              <span>0:30</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-white/40 rounded-full"
                style={
                  isPlaying
                    ? {
                        animation: `progress-fill ${30 - currentTime}s linear forwards`,
                        width: `${(currentTime / 30) * 100}%`,
                      }
                    : { width: `${(currentTime / 30) * 100}%`, transition: "width 0.3s" }
                }
              />
            </div>
          </div>

          {/* Card 2 - Dashboard */}
          <div
            className="w-full md:w-[340px] p-8 z-10"
            style={{
              ...glassCard,
              transform: `translateX(${mousePos.x * 1.5}px) translateY(${mousePos.y * 1.5}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div>
                <p className="text-xl font-bold text-white">
                  {formatNumber(visitors)}
                </p>
                <p className="text-xs text-white/40">Visitors</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">
                  {convRate.toFixed(1)}%
                </p>
                <p className="text-xs text-white/40">Conv. Rate</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">
                  &euro;{formatNumber(revenue)}
                </p>
                <p className="text-xs text-white/40">Revenue</p>
              </div>
            </div>

            {/* Mini area chart with glow and tooltips */}
            <svg
              viewBox="0 0 300 80"
              className="w-full h-16 mb-2 chart-glow"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="chartGrad"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
                <filter id="chartGlow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M0,60 C30,55 60,40 90,45 C120,50 150,20 180,25 C210,30 240,10 270,15 C285,17 300,12 300,12 L300,80 L0,80 Z"
                fill="url(#chartGrad)"
              />
              <path
                d="M0,60 C30,55 60,40 90,45 C120,50 150,20 180,25 C210,30 240,10 270,15 C285,17 300,12 300,12"
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="2"
                filter="url(#chartGlow)"
              />
              {/* Interactive points */}
              {CHART_POINTS.map((p, i) => (
                <g key={i}>
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={hoveredPoint === i ? 5 : 3}
                    fill={hoveredPoint === i ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)"}
                    style={{ transition: "r 0.2s, fill 0.2s", cursor: "pointer" }}
                    onMouseEnter={() => setHoveredPoint(i)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                  {hoveredPoint === i && (
                    <>
                      <rect
                        x={p.x - 20}
                        y={p.y - 22}
                        width="40"
                        height="16"
                        rx="4"
                        fill="rgba(0,0,0,0.6)"
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="0.5"
                      />
                      <text
                        x={p.x}
                        y={p.y - 11}
                        textAnchor="middle"
                        fill="white"
                        fontSize="8"
                        fontFamily="sans-serif"
                      >
                        {Math.round((80 - p.y) * 15.5)}
                      </text>
                    </>
                  )}
                </g>
              ))}
            </svg>

            {/* Last updated */}
            <p className="text-[10px] text-white/25 mb-4">
              Updated {lastUpdated}s ago
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                className="relative flex-1 px-4 py-2 text-sm text-white bg-white/10 border border-white/10 rounded-lg overflow-hidden cursor-pointer"
                onClick={handleRipple}
              >
                {ripple && (
                  <span
                    className="absolute rounded-full bg-white/20 pointer-events-none"
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                      width: 20,
                      height: 20,
                      marginLeft: -10,
                      marginTop: -10,
                      animation: "ripple-effect 0.6s ease-out forwards",
                    }}
                  />
                )}
                View Report
              </button>
              <button className="flex-1 px-4 py-2 text-sm text-white bg-white/10 border border-white/10 rounded-lg cursor-pointer hover:bg-white/15 transition-colors">
                Export
              </button>
            </div>
          </div>

          {/* Card 3 - Notifications */}
          <div
            className="w-full md:w-[280px] p-8"
            style={{
              ...glassCard,
              transform: isDesktop
                ? `translateX(${mousePos.x * 3}px) translateY(${mousePos.y * 3}px) rotate(2deg)`
                : `translateX(${mousePos.x * 3}px) translateY(${mousePos.y * 3}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                Notifications
              </p>
              {/* Bell icon with badge */}
              <div className="relative">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 1C5.79 1 4 2.79 4 5v3l-1 2v1h10v-1l-1-2V5c0-2.21-1.79-4-4-4z"
                    fill="white"
                    opacity="0.4"
                  />
                  <path d="M6.5 13a1.5 1.5 0 003 0" fill="white" opacity="0.4" />
                </svg>
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                  {visibleNotifs.length}
                </span>
              </div>
            </div>

            {/* Notification items */}
            <div ref={notifContainerRef} className="relative min-h-[140px]">
              <AnimatePresence mode="popLayout">
                {visibleNotifs.map((notif, i) => (
                  <motion.div
                    key={notif.text + "-" + i}
                    layout
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40, height: 0, marginBottom: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      delay: 0,
                    }}
                    onClick={() => dismissNotif(i)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-start gap-3 py-3 hover:bg-white/[0.03] rounded-lg transition-colors px-1">
                      <div
                        className={`w-2 h-2 rounded-full ${notif.color} mt-1.5 shrink-0`}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white">
                          {notif.text}
                          {notif.hasSoundWave && <SoundWaveIcon />}
                        </p>
                        <p className="text-xs text-white/30">{notif.time}</p>
                      </div>
                    </div>
                    {i < visibleNotifs.length - 1 && (
                      <div className="h-px bg-white/[0.06]" />
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Code snippet section */}
        <div className="relative z-10 text-center mt-20 px-6 max-w-xl mx-auto">
          <div className="inline-block px-6 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <code className="text-sm font-mono text-white/60">
              backdrop-filter: blur(20px)
            </code>
          </div>
          <p className="text-sm text-white/40 mt-4 leading-relaxed">
            Glassmorphism creates depth and hierarchy through translucent
            layers, frosted backgrounds, and subtle borders that let underlying
            content bleed through.
          </p>
        </div>
      </div>
    </>
  );
}
