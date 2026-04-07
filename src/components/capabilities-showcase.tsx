"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Heart,
  Bell,
  Copy,
  ChevronDown,
  Play,
  Pause,
  Sun,
  Moon,
  Clipboard,
  Home,
  Search,
  User,
  Star,
  Share2,
  Bookmark,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Volume1,
  RefreshCw,
  X,
  Menu,
  MessageSquare,
  Link2,
  Minus,
  Plus,
} from "lucide-react";

/* ─── hooks ──────────────────────────────────────────────────────── */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function usePointerPosition(ref: React.RefObject<HTMLDivElement | null>) {
  const [pos, setPos] = useState({ x: 0, y: 0, active: false });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const rect = el.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      setPos({ x: clientX - rect.left, y: clientY - rect.top, active: true });
    };
    const handleEnd = () => setPos(p => ({ ...p, active: false }));
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("touchmove", handleMove, { passive: true });
    el.addEventListener("mouseleave", handleEnd);
    el.addEventListener("touchend", handleEnd);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("touchmove", handleMove);
      el.removeEventListener("mouseleave", handleEnd);
      el.removeEventListener("touchend", handleEnd);
    };
  }, [ref]);
  return pos;
}

/* ─── shared ─────────────────────────────────────────────────────── */

function SectionDivider({ num, title, useCase }: { num: string; title: string; useCase: string }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 border-t border-white/[0.04]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] tracking-[0.5em] uppercase text-white/35 font-medium">{num}</p>
          <h3 className="text-lg font-bold text-white/80 mt-1">{title}</h3>
        </div>
        <p className="text-[11px] text-white/25 max-w-xs text-right hidden md:block">{useCase}</p>
      </div>
    </div>
  );
}

function DemoCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-3 p-5 bg-white/[0.02] rounded-xl border border-white/[0.04] ${className}`}>
      {children}
    </div>
  );
}

function DemoLabel({ children }: { children: React.ReactNode }) {
  return <span className="text-[8px] text-white/15">{children}</span>;
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 1 — BUTTONS & CTAs
   ═══════════════════════════════════════════════════════════════════ */

function ColourShiftButton() {
  const colours = ["bg-white", "bg-emerald-400", "bg-sky-400", "bg-violet-400", "bg-rose-400"];
  const [i, setI] = useState(0);
  return (
    <button onClick={() => setI((i + 1) % colours.length)}
      className={`px-5 py-2.5 ${colours[i]} text-black text-[10px] font-bold uppercase tracking-wider rounded-full transition-colors duration-300 active:scale-95`}>
      Tap Me
    </button>
  );
}

function RippleButton({ label }: { label: string }) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples(prev => [...prev, { x, y, id }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 600);
  };
  return (
    <button onClick={handleClick}
      className="relative px-5 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-wider rounded-full overflow-hidden active:scale-95">
      {label}
      {ripples.map(r => (
        <span key={r.id} className="absolute rounded-full bg-black/20 animate-ripple-expand pointer-events-none"
          style={{ left: r.x, top: r.y, width: 10, height: 10, transform: "translate(-50%, -50%)" }} />
      ))}
    </button>
  );
}

function ButtonsSection() {
  return (
    <>
      <SectionDivider num="01" title="Buttons & CTAs" useCase="Every site needs buttons that feel alive" />
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <DemoCard>
            <button className="px-5 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-wider rounded-full active:scale-90 hover:scale-[1.03] transition-transform duration-150">
              Get Started
            </button>
            <DemoLabel>Solid Pill</DemoLabel>
          </DemoCard>
          <DemoCard>
            <button className="px-5 py-2.5 border border-white/20 text-white/60 text-[10px] font-medium uppercase tracking-wider rounded-full active:bg-white active:text-black active:border-white hover:bg-white/5 transition-all duration-200">
              Learn More
            </button>
            <DemoLabel>Ghost → Solid</DemoLabel>
          </DemoCard>
          <DemoCard>
            <button className="relative px-5 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-wider rounded-full overflow-hidden group active:scale-95">
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full group-active:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/10 to-transparent" />
            </button>
            <DemoLabel>Shimmer Sweep</DemoLabel>
          </DemoCard>
          <DemoCard>
            <button className="relative px-5 py-2.5 border border-white/20 text-[10px] font-bold uppercase tracking-wider rounded-full overflow-hidden group active:border-white">
              <span className="relative z-10 text-white/60 group-hover:text-black group-active:text-black transition-colors duration-300">Contact</span>
              <div className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-300" />
            </button>
            <DemoLabel>Fill Reveal</DemoLabel>
          </DemoCard>
          <DemoCard>
            <button className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-wider rounded-full active:scale-95">
              Explore
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 group-active:translate-x-2 transition-transform duration-200" />
            </button>
            <DemoLabel>Arrow Slide</DemoLabel>
          </DemoCard>
          <DemoCard>
            <button className="px-5 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-wider rounded-full hover:scale-105 transition-transform active:animate-[bounce-once_0.4s_ease]">
              Bounce
            </button>
            <DemoLabel>Tap Bounce</DemoLabel>
          </DemoCard>
          <DemoCard>
            <ColourShiftButton />
            <DemoLabel>Colour Cycle</DemoLabel>
          </DemoCard>
          <DemoCard>
            <RippleButton label="Ripple" />
            <DemoLabel>Tap Ripple</DemoLabel>
          </DemoCard>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 2 — CARD INTERACTIONS
   ═══════════════════════════════════════════════════════════════════ */

function SpotlightCard() {
  const ref = useRef<HTMLDivElement>(null);
  const pos = usePointerPosition(ref);
  return (
    <div ref={ref} className="relative bg-[#0A0A0A] rounded-xl border border-white/[0.06] p-6 h-48 overflow-hidden cursor-pointer touch-none"
      style={pos.active ? { background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.06), transparent 50%)` } : {}}>
      <h4 className="text-sm font-semibold text-white/70 mb-1">Spotlight Follow</h4>
      <p className="text-[11px] text-white/30">Drag your finger across</p>
    </div>
  );
}

function TiltCard() {
  const ref = useRef<HTMLDivElement>(null);
  const pos = usePointerPosition(ref);
  const rotateX = pos.active ? ((pos.y - 96) / 96) * -10 : 0;
  const rotateY = pos.active ? ((pos.x - 96) / 96) * 10 : 0;
  return (
    <div ref={ref} className="touch-none" style={{ perspective: 600 }}>
      <div className="bg-[#0A0A0A] rounded-xl border border-white/[0.06] p-6 h-48 transition-transform duration-100"
        style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}>
        <h4 className="text-sm font-semibold text-white/70 mb-1">3D Tilt</h4>
        <p className="text-[11px] text-white/30">Drag to tilt</p>
      </div>
    </div>
  );
}

function GlareCard() {
  const [active, setActive] = useState(false);
  const activate = () => { setActive(true); setTimeout(() => setActive(false), 800); };
  return (
    <div onClick={activate} className="relative bg-[#0A0A0A] rounded-xl border border-white/[0.06] p-6 h-48 overflow-hidden cursor-pointer">
      <h4 className="text-sm font-semibold text-white/70 mb-1">Glare Sweep</h4>
      <p className="text-[11px] text-white/30">Tap to sweep</p>
      <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transition-transform duration-700 ${active ? "translate-x-full translate-y-full" : "-translate-x-full -translate-y-full"}`} />
    </div>
  );
}

function LiftCard() {
  const [active, setActive] = useState(false);
  const activate = () => { setActive(true); setTimeout(() => setActive(false), 2000); };
  return (
    <div onClick={activate}
      className={`bg-[#0A0A0A] rounded-xl border border-white/[0.06] p-6 h-48 cursor-pointer transition-all duration-300 ${active ? "-translate-y-3 shadow-[0_12px_40px_rgba(255,255,255,0.06)]" : ""}`}>
      <h4 className="text-sm font-semibold text-white/70 mb-1">Lift & Glow</h4>
      <p className="text-[11px] text-white/30">Tap to lift</p>
    </div>
  );
}

function FlipCard() {
  const [flipped, setFlipped] = useState(false);
  return (
    <div onClick={() => setFlipped(!flipped)} className="cursor-pointer h-48" style={{ perspective: 600 }}>
      <div className="relative w-full h-full transition-transform duration-500" style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "" }}>
        <div className="absolute inset-0 bg-[#0A0A0A] rounded-xl border border-white/[0.06] p-6" style={{ backfaceVisibility: "hidden" }}>
          <h4 className="text-sm font-semibold text-white/70 mb-1">Flip Card</h4>
          <p className="text-[11px] text-white/30">Tap to flip</p>
        </div>
        <div className="absolute inset-0 bg-white/[0.08] rounded-xl border border-white/10 p-6 flex items-center justify-center" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          <p className="text-sm text-white/60 text-center">This is the back of the card</p>
        </div>
      </div>
    </div>
  );
}

function ScaleCard() {
  const [active, setActive] = useState(false);
  const activate = () => { setActive(true); setTimeout(() => setActive(false), 2000); };
  return (
    <div onClick={activate}
      className={`bg-[#0A0A0A] rounded-xl border border-white/[0.06] p-6 h-48 cursor-pointer transition-all duration-300 ${active ? "scale-[1.05] border-white/15" : ""}`}>
      <h4 className="text-sm font-semibold text-white/70 mb-1">Scale Pop</h4>
      <p className="text-[11px] text-white/30">Tap to scale</p>
    </div>
  );
}

function CardInteractionsSection() {
  return (
    <>
      <SectionDivider num="02" title="Card Interactions" useCase="Tap any card to see the effect" />
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <SpotlightCard />
          <TiltCard />
          <GlareCard />
          <LiftCard />
          <FlipCard />
          <ScaleCard />
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 3 — INTERACTIVE PLAYGROUND
   ═══════════════════════════════════════════════════════════════════ */

function ToggleDemo() {
  const [on, setOn] = useState(false);
  return (
    <div className={`bg-[#0A0A0A] rounded-xl p-4 border border-white/[0.04] transition-colors duration-500 ${on ? "!bg-[#F5F5F5]" : ""}`}>
      <div className="flex items-center justify-between mb-3">
        <span className={`text-[10px] font-medium ${on ? "text-black/60" : "text-white/40"}`}>Theme</span>
        <button onClick={() => setOn(!on)} className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${on ? "bg-black" : "bg-white/10"}`}>
          <motion.div className={`w-4 h-4 rounded-full absolute top-1 ${on ? "bg-white" : "bg-white/50"}`}
            animate={{ left: on ? 23 : 3 }} transition={{ duration: 0.15 }}>
            {on ? <Sun className="w-2.5 h-2.5 m-[3px] text-black" /> : <Moon className="w-2.5 h-2.5 m-[3px] text-black/50" />}
          </motion.div>
        </button>
      </div>
      <DemoLabel>{on ? "Light" : "Dark"}</DemoLabel>
    </div>
  );
}

function SliderDemo() {
  const [value, setValue] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const handleMove = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setValue(Math.round(pct));
  }, []);
  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (e.buttons > 0 || e.pressure > 0) handleMove(e.clientX);
  };
  return (
    <div className="bg-[#0A0A0A] rounded-xl p-4 border border-white/[0.04]">
      <span className="text-[10px] text-white/40 font-medium block mb-3">{value}%</span>
      <div ref={trackRef} className="relative h-1.5 bg-white/10 rounded-full cursor-pointer touch-none"
        onPointerDown={onPointerDown} onPointerMove={onPointerMove}>
        <div className="h-full bg-white/40 rounded-full" style={{ width: `${value}%` }} />
        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg" style={{ left: `calc(${value}% - 8px)` }} />
      </div>
      <DemoLabel>Drag Slider</DemoLabel>
    </div>
  );
}

function CounterDemo() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const startHold = (dir: 1 | -1) => {
    intervalRef.current = setInterval(() => setCount(c => c + dir), 100);
  };
  const stopHold = () => clearInterval(intervalRef.current);
  return (
    <div className="bg-[#0A0A0A] rounded-xl p-4 border border-white/[0.04] text-center">
      <div className="flex items-center justify-center gap-4 mb-2">
        <button onClick={() => setCount(c => c - 1)} onPointerDown={() => startHold(-1)} onPointerUp={stopHold} onPointerLeave={stopHold}
          className="w-9 h-9 rounded-full bg-white/5 text-white/60 flex items-center justify-center active:bg-white/10">
          <Minus className="w-3.5 h-3.5" />
        </button>
        <motion.span key={count} initial={{ scale: 1.3 }} animate={{ scale: 1 }} className={`text-2xl font-bold tabular-nums ${count < 0 ? "text-red-400" : "text-white"}`}>
          {count}
        </motion.span>
        <button onClick={() => setCount(c => c + 1)} onPointerDown={() => startHold(1)} onPointerUp={stopHold} onPointerLeave={stopHold}
          className="w-9 h-9 rounded-full bg-white/5 text-white/60 flex items-center justify-center active:bg-white/10">
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>
      <DemoLabel>Hold to repeat</DemoLabel>
    </div>
  );
}

function AccordionDemo() {
  const [open, setOpen] = useState<number | null>(null);
  const items = ["Design", "Develop", "Launch"];
  return (
    <div className="bg-[#0A0A0A] rounded-xl p-4 border border-white/[0.04]">
      {items.map((item, i) => (
        <div key={item}>
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between py-2 text-left">
            <span className="text-[11px] text-white/60 font-medium">{item}</span>
            <ChevronDown className={`w-3 h-3 text-white/30 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                <p className="text-[10px] text-white/25 pb-2 leading-relaxed">We handle the {item.toLowerCase()} phase with care and precision.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
      <DemoLabel>Accordion</DemoLabel>
    </div>
  );
}

function ConfettiDemo() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; color: string; vx: number; vy: number }[]>([]);
  const fire = () => {
    const colors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#A78BFA", "#F472B6"];
    const newP = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: 0, y: 0,
      color: colors[i % colors.length],
      vx: (Math.random() - 0.5) * 120,
      vy: -Math.random() * 100 - 30,
    }));
    setParticles(newP);
    setTimeout(() => setParticles([]), 1000);
  };
  return (
    <div className="bg-[#0A0A0A] rounded-xl p-4 border border-white/[0.04] text-center relative overflow-hidden">
      <button onClick={fire} className="px-4 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-wider rounded-full active:scale-95 relative z-10">
        Celebrate
      </button>
      {particles.map(p => (
        <motion.div key={p.id} className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
          style={{ background: p.color, left: "50%", top: "50%" }}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: p.vx, y: p.vy + 80, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      ))}
      <div className="mt-2"><DemoLabel>Tap Confetti</DemoLabel></div>
    </div>
  );
}

function ProgressRingDemo() {
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);
  const start = () => {
    if (running) return;
    setRunning(true);
    setProgress(0);
    let p = 0;
    const interval = setInterval(() => {
      p += 2;
      setProgress(p);
      if (p >= 100) { clearInterval(interval); setRunning(false); }
    }, 40);
  };
  const r = 30, c = 2 * Math.PI * r;
  return (
    <div className="bg-[#0A0A0A] rounded-xl p-4 border border-white/[0.04] text-center">
      <div onClick={start} className="cursor-pointer inline-block">
        <svg width="76" height="76" className="transform -rotate-90">
          <circle cx="38" cy="38" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
          <circle cx="38" cy="38" r={r} fill="none" stroke="white" strokeWidth="4" strokeLinecap="round"
            strokeDasharray={c} strokeDashoffset={c - (progress / 100) * c} className="transition-[stroke-dashoffset] duration-75" />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-white tabular-nums" style={{ position: "relative", marginTop: -66 }}>
          {progress}%
        </span>
      </div>
      <div className="mt-1"><DemoLabel>Tap to fill</DemoLabel></div>
    </div>
  );
}

function PlaygroundSection() {
  return (
    <>
      <SectionDivider num="03" title="Playground" useCase="Touch, drag, toggle, play" />
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          <ToggleDemo />
          <SliderDemo />
          <CounterDemo />
          <AccordionDemo />
          <ConfettiDemo />
          <ProgressRingDemo />
          {/* Segmented Control */}
          <SegmentedControlDemo />
          {/* Star Rating */}
          <StarRatingDemo />
          {/* Copy Button */}
          <CopyButtonDemo />
          {/* Like Heart */}
          <LikeHeartDemo />
        </div>
      </div>
    </>
  );
}

function SegmentedControlDemo() {
  const [active, setActive] = useState(0);
  const opts = ["Day", "Week", "Month"];
  return (
    <div className="bg-[#0A0A0A] rounded-xl p-4 border border-white/[0.04]">
      <div className="relative flex bg-white/5 rounded-lg p-0.5">
        <motion.div className="absolute top-0.5 bottom-0.5 bg-white rounded-md" style={{ width: `${100 / 3}%` }}
          animate={{ left: `calc(${(active * 100) / 3}% + 2px)` }} transition={{ type: "spring", stiffness: 400, damping: 30 }} />
        {opts.map((opt, i) => (
          <button key={opt} onClick={() => setActive(i)} className={`relative z-10 flex-1 py-1.5 text-[9px] font-medium transition-colors ${active === i ? "text-black" : "text-white/30"}`}>
            {opt}
          </button>
        ))}
      </div>
      <div className="mt-2"><DemoLabel>Segmented</DemoLabel></div>
    </div>
  );
}

function StarRatingDemo() {
  const [rating, setRating] = useState(0);
  return (
    <div className="bg-[#0A0A0A] rounded-xl p-4 border border-white/[0.04] text-center">
      <div className="flex gap-1 justify-center">
        {[1, 2, 3, 4, 5].map(n => (
          <button key={n} onClick={() => setRating(rating === n ? 0 : n)}>
            <Star className={`w-5 h-5 transition-colors ${n <= rating ? "text-yellow-400 fill-yellow-400" : "text-white/15"}`} />
          </button>
        ))}
      </div>
      <div className="mt-2"><DemoLabel>Star Rating</DemoLabel></div>
    </div>
  );
}

function CopyButtonDemo() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => { setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="bg-[#0A0A0A] rounded-xl p-4 border border-white/[0.04] text-center">
      <button onClick={handleCopy} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-medium transition-all duration-200 ${copied ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-white/50"}`}>
        {copied ? <><Check className="w-3 h-3" /> Copied</> : <><Clipboard className="w-3 h-3" /> Copy</>}
      </button>
      <div className="mt-2"><DemoLabel>Copy Button</DemoLabel></div>
    </div>
  );
}

function LikeHeartDemo() {
  const [liked, setLiked] = useState(false);
  return (
    <div className="bg-[#0A0A0A] rounded-xl p-4 border border-white/[0.04] text-center">
      <button onClick={() => setLiked(!liked)} className="relative">
        <motion.div animate={liked ? { scale: [1, 1.4, 1] } : { scale: 1 }} transition={{ duration: 0.3 }}>
          <Heart className={`w-7 h-7 transition-colors ${liked ? "text-red-500 fill-red-500" : "text-white/20"}`} />
        </motion.div>
      </button>
      <p className="text-[10px] text-white/30 mt-1 tabular-nums">{liked ? 1 : 0}</p>
      <DemoLabel>Like</DemoLabel>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 4 — SCROLL ANIMATIONS
   ═══════════════════════════════════════════════════════════════════ */

function ScrollAnimDemo({ label, initial: initialAnim }: { label: string; initial: { opacity: number; x?: number; y?: number; scale?: number; filter?: string; rotate?: number } }) {
  const [key, setKey] = useState(0);
  const { ref, inView } = useInView(0.3);
  return (
    <div ref={ref} className="text-center">
      <motion.div key={key} className="h-24 rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.04] flex items-center justify-center"
        initial={initialAnim} animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" } : initialAnim}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}>
        <span className="text-[10px] text-white/30 font-medium">{label}</span>
      </motion.div>
      <button onClick={() => setKey(k => k + 1)} className="text-[9px] text-white/15 mt-2 active:text-white/30">↻ Replay</button>
    </div>
  );
}

function ScrollAnimationsSection() {
  const anims: { label: string; initial: { opacity: number; x?: number; y?: number; scale?: number; filter?: string; rotate?: number } }[] = [
    { label: "Fade Up", initial: { opacity: 0, y: 40 } },
    { label: "Fade Down", initial: { opacity: 0, y: -40 } },
    { label: "Slide Left", initial: { opacity: 0, x: -60 } },
    { label: "Slide Right", initial: { opacity: 0, x: 60 } },
    { label: "Scale", initial: { opacity: 0, scale: 0.7 } },
    { label: "Blur In", initial: { opacity: 0, filter: "blur(15px)" } },
    { label: "Rotate In", initial: { opacity: 0, rotate: -15 } },
    { label: "Stagger", initial: { opacity: 0, y: 20 } },
  ];
  return (
    <>
      <SectionDivider num="04" title="Scroll Reveals" useCase="Every section of your site can come alive" />
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {anims.map(a => <ScrollAnimDemo key={a.label} label={a.label} initial={a.initial} />)}
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 5 — TEXT EFFECTS
   ═══════════════════════════════════════════════════════════════════ */

function GradientShimmerText() {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="text-center py-8">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight"
        style={inView ? {
          background: "linear-gradient(90deg, #fff 0%, #555 25%, #fff 50%, #555 75%, #fff 100%)",
          backgroundSize: "300% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "shimmer-text 4s linear infinite",
        } : { color: "rgba(255,255,255,0.1)" }}>
        WHERE CODE MEETS CRAFT
      </h2>
      <DemoLabel>Gradient Shimmer</DemoLabel>
    </div>
  );
}

function TypewriterText() {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState(0);
  const { ref, inView } = useInView();
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const lines = ["$ npm run build", "✓ Compiled successfully"];
    let lineIdx = 0, charIdx = 0;
    setText("");
    setPhase(0);
    const interval = setInterval(() => {
      if (lineIdx >= lines.length) { clearInterval(interval); return; }
      if (charIdx < lines[lineIdx].length) {
        setText(lines[lineIdx].slice(0, charIdx + 1));
        charIdx++;
      } else {
        lineIdx++;
        charIdx = 0;
        if (lineIdx < lines.length) {
          setPhase(1);
          setText("");
        }
      }
    }, 60);
    return () => clearInterval(interval);
  }, [inView, key]);

  return (
    <div ref={ref} className="text-center py-8">
      <div className="inline-block bg-[#0A0A0A] rounded-lg border border-white/[0.06] px-6 py-4 text-left font-mono">
        <span className={`text-sm ${phase === 0 ? "text-emerald-400" : "text-white"}`}>{text}</span>
        <span className="inline-block w-2 h-4 bg-emerald-400 ml-0.5" style={{ animation: "typewriter-blink 1s step-end infinite" }} />
      </div>
      <div className="mt-2">
        <button onClick={() => setKey(k => k + 1)} className="text-[9px] text-white/15 active:text-white/30">↻ Replay</button>
      </div>
    </div>
  );
}

function LetterStaggerText() {
  const [key, setKey] = useState(0);
  const { ref, inView } = useInView();
  const word = "AMENZO";
  return (
    <div ref={ref} className="text-center py-8">
      <div className="text-5xl md:text-7xl font-bold tracking-tight" key={key}>
        {word.split("").map((letter, i) => (
          <motion.span key={i} className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}>
            {letter}
          </motion.span>
        ))}
      </div>
      <button onClick={() => setKey(k => k + 1)} className="text-[9px] text-white/15 mt-2 active:text-white/30">↻ Replay</button>
    </div>
  );
}

function WordBounceText() {
  const [key, setKey] = useState(0);
  const { ref, inView } = useInView();
  const words = "Every pixel earns its place".split(" ");
  return (
    <div ref={ref} className="text-center py-8">
      <div className="text-xl md:text-2xl font-bold" key={key}>
        {words.map((word, i) => (
          <motion.span key={i} className="inline-block mr-2"
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 15 }}>
            {word}
          </motion.span>
        ))}
      </div>
      <button onClick={() => setKey(k => k + 1)} className="text-[9px] text-white/15 mt-2 active:text-white/30">↻ Replay</button>
    </div>
  );
}

function TextEffectsSection() {
  return (
    <>
      <SectionDivider num="05" title="Typography" useCase="Headlines that demand attention" />
      <div className="max-w-5xl mx-auto px-6 pb-16 space-y-4">
        <GradientShimmerText />
        <LetterStaggerText />
        <TypewriterText />
        <WordBounceText />
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 6 — GLASS & DEPTH
   ═══════════════════════════════════════════════════════════════════ */

function GlassSection() {
  const ref = useRef<HTMLDivElement>(null);
  const pos = usePointerPosition(ref);
  const offsetX = pos.active ? (pos.x - 300) * 0.02 : 0;

  return (
    <>
      <SectionDivider num="06" title="Glassmorphism" useCase="Floating panels with real depth" />
      <div ref={ref} className="max-w-5xl mx-auto px-6 pb-16 relative overflow-hidden touch-none" style={{ minHeight: 340 }}>
        {/* Orbs */}
        <div className="absolute w-40 h-40 rounded-full top-10 left-10 opacity-10" style={{ background: "#3b3bf6", filter: "blur(80px)" }} />
        <div className="absolute w-32 h-32 rounded-full top-20 right-20 opacity-10" style={{ background: "#8b3aed", filter: "blur(60px)" }} />
        <div className="absolute w-36 h-36 rounded-full bottom-10 left-1/3 opacity-10" style={{ background: "#c026d3", filter: "blur(70px)" }} />

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Dashboard */}
          <div className="rounded-2xl p-5 border border-white/[0.06]" style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)", transform: `translateX(${offsetX * 1.5}px)` }}>
            <p className="text-[10px] text-white/40 uppercase tracking-wider mb-3">Dashboard</p>
            <div className="grid grid-cols-3 gap-2">
              {[{ n: "2,847", l: "Visitors" }, { n: "12.4%", l: "Conv." }, { n: "€8.2K", l: "Revenue" }].map(s => (
                <div key={s.l} className="text-center">
                  <p className="text-lg font-bold text-white">{s.n}</p>
                  <p className="text-[9px] text-white/30">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Music */}
          <MusicPlayerCard offsetX={offsetX} />

          {/* Notifications */}
          <NotificationCard offsetX={offsetX} />
        </div>
      </div>
    </>
  );
}

function MusicPlayerCard({ offsetX }: { offsetX: number }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="rounded-2xl p-5 border border-white/[0.06]" style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)", transform: `translateX(${offsetX}px)` }}>
      <p className="text-[10px] text-white/40 uppercase tracking-wider mb-3">Now Playing</p>
      <p className="text-sm text-white font-medium">Midnight Drive</p>
      <p className="text-[11px] text-white/40">Synthwave Collection</p>
      <div className="flex items-center gap-3 mt-3">
        <button onClick={() => setPlaying(!playing)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center active:bg-white/20">
          {playing ? <Pause className="w-3.5 h-3.5 text-white" /> : <Play className="w-3.5 h-3.5 text-white ml-0.5" />}
        </button>
        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div className="h-full bg-white/40 rounded-full" animate={{ width: playing ? "100%" : "35%" }} transition={{ duration: playing ? 10 : 0.3 }} />
        </div>
      </div>
    </div>
  );
}

function NotificationCard({ offsetX }: { offsetX: number }) {
  const [items, setItems] = useState([
    { id: 1, text: "New order received", time: "2m ago" },
    { id: 2, text: "Payment confirmed", time: "5m ago" },
    { id: 3, text: "Review published", time: "12m ago" },
  ]);
  return (
    <div className="rounded-2xl p-5 border border-white/[0.06]" style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)", transform: `translateX(${offsetX * 0.5}px)` }}>
      <p className="text-[10px] text-white/40 uppercase tracking-wider mb-3">Notifications</p>
      <AnimatePresence>
        {items.map(item => (
          <motion.div key={item.id} layout exit={{ opacity: 0, x: 60 }} className="flex items-center justify-between py-1.5">
            <div>
              <p className="text-[11px] text-white/70">{item.text}</p>
              <p className="text-[9px] text-white/25">{item.time}</p>
            </div>
            <button onClick={() => setItems(its => its.filter(i => i.id !== item.id))} className="text-white/15 active:text-white/40">
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
      {items.length === 0 && <p className="text-[10px] text-white/20">All clear</p>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 7 — NAVIGATION DEMOS
   ═══════════════════════════════════════════════════════════════════ */

function MobileDrawerDemo() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Services", "Portfolio", "Contact"];
  return (
    <div className="bg-[#0A0A0A] rounded-xl border border-white/[0.04] p-0 overflow-hidden relative" style={{ height: 200 }}>
      {/* Mini header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.04]">
        <span className="text-[10px] font-bold text-white/60 tracking-wider">BRAND</span>
        <button onClick={() => setOpen(!open)} className="text-white/40 active:text-white">
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>
      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.2 }}
            className="absolute inset-0 top-0 bg-[#0A0A0A] z-10 flex flex-col items-center justify-center gap-3">
            <button onClick={() => setOpen(false)} className="absolute top-3 right-4 text-white/40"><X className="w-4 h-4" /></button>
            {links.map((link, i) => (
              <motion.span key={link} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="text-sm text-white/60 font-medium">{link}</motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="p-4">
        <p className="text-[10px] text-white/20">Tap hamburger to open drawer</p>
      </div>
    </div>
  );
}

function TabBarDemo() {
  const [active, setActive] = useState(0);
  const icons = [Home, Search, Heart, User];
  const labels = ["Home", "Search", "Likes", "Profile"];
  return (
    <div className="bg-[#0A0A0A] rounded-xl border border-white/[0.04] overflow-hidden" style={{ height: 200 }}>
      <div className="h-[156px] flex items-center justify-center">
        <span className="text-[10px] text-white/20">{labels[active]} screen</span>
      </div>
      <div className="flex items-center justify-around border-t border-white/[0.04] py-2 px-2">
        {icons.map((Icon, i) => (
          <button key={i} onClick={() => setActive(i)} className="flex flex-col items-center gap-0.5 relative">
            <motion.div animate={{ scale: active === i ? 1.2 : 1 }}>
              <Icon className={`w-4 h-4 transition-colors ${active === i ? "text-white" : "text-white/20"}`} />
            </motion.div>
            {active === i && <motion.div layoutId="tab-dot" className="w-1 h-1 rounded-full bg-white" />}
          </button>
        ))}
      </div>
    </div>
  );
}

function NavDemosSection() {
  return (
    <>
      <SectionDivider num="07" title="Navigation" useCase="First impression in milliseconds" />
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MobileDrawerDemo />
          <TabBarDemo />
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 8 — TESTIMONIALS
   ═══════════════════════════════════════════════════════════════════ */

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const testimonials = [
    { quote: "They built our hotel website in under two weeks. The results were immediate — bookings up 40% in the first month.", author: "Maria S.", role: "Hotel Manager" },
    { quote: "We went from an embarrassing Wix site to something that looks like a million euros. Best investment we made.", author: "Thomas K.", role: "Restaurant Owner" },
    { quote: "The attention to detail is remarkable. Every interaction, every animation — it all feels premium.", author: "Sarah L.", role: "Clinic Director" },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <>
      <SectionDivider num="09" title="Social Proof" useCase="Let your clients sell for you" />
      <div className="max-w-5xl mx-auto px-6 pb-16">
        {/* Carousel */}
        <div className="relative overflow-hidden rounded-xl bg-white/[0.02] border border-white/[0.04] p-8">
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
              <p className="text-white/70 text-sm md:text-base leading-relaxed italic mb-4">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <p className="text-[11px] text-white/40">
                <span className="text-white/60 font-medium">{testimonials[current].author}</span> — {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-1.5 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-6 h-1 rounded-full transition-colors ${i === current ? "bg-white/40" : "bg-white/10"}`} />
            ))}
          </div>
        </div>

        {/* Expanding quote */}
        <div className="mt-4 rounded-xl bg-white/[0.02] border border-white/[0.04] p-6">
          <p className="text-sm text-white/60 italic">
            &ldquo;The team at Amenzo understood our vision from day one...{!expanded && ""}
          </p>
          <AnimatePresence>
            {expanded && (
              <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                className="text-sm text-white/60 italic mt-2 overflow-hidden">
                They delivered a website that not only looks stunning but actually converts visitors into paying customers. The ROI was visible within the first week.&rdquo;
              </motion.p>
            )}
          </AnimatePresence>
          <button onClick={() => setExpanded(!expanded)} className="text-[11px] text-white/30 mt-3 active:text-white/50">
            {expanded ? "Show less ↑" : "Read full review →"}
          </button>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 10 — FORMS & INPUTS
   ═══════════════════════════════════════════════════════════════════ */

function FormsSection() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const services = ["New Website", "Redesign", "E-Commerce", "SEO"];

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setStep(1); setService(""); setName(""); setEmail(""); setBudget(""); setNotes(""); }, 2000);
  };

  return (
    <>
      <SectionDivider num="10" title="Forms" useCase="Where visitors become leads" />
      <div className="max-w-lg mx-auto px-6 pb-16">
        <div className="rounded-xl bg-white/[0.02] border border-white/[0.04] p-6">
          {/* Step dots */}
          <div className="flex gap-2 mb-6 justify-center">
            {[1, 2, 3].map(s => (
              <div key={s} className={`w-2 h-2 rounded-full transition-colors ${step >= s ? "bg-white/40" : "bg-white/10"}`} />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                <p className="text-sm text-white/60 mb-4">What do you need?</p>
                <div className="grid grid-cols-2 gap-2">
                  {services.map(s => (
                    <button key={s} onClick={() => setService(s)}
                      className={`py-3 px-4 rounded-xl border text-[11px] font-medium text-left transition-all active:scale-95 ${
                        service === s ? "border-white/30 bg-white/[0.08] text-white" : "border-white/[0.06] text-white/40"
                      }`}>
                      {service === s && <Check className="w-3 h-3 inline mr-1.5" />}
                      {s}
                    </button>
                  ))}
                </div>
                <button onClick={() => service && setStep(2)} disabled={!service}
                  className="w-full mt-4 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-wider rounded-full disabled:opacity-30 active:scale-95">
                  Next →
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                <p className="text-sm text-white/60 mb-4">Your details</p>
                <div className="space-y-3">
                  <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name"
                    className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white text-[14px] placeholder:text-white/20 focus:border-white/20 focus:outline-none" style={{ fontSize: 16 }} />
                  <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" type="email"
                    className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white text-[14px] placeholder:text-white/20 focus:border-white/20 focus:outline-none" style={{ fontSize: 16 }} />
                  <div className="flex flex-wrap gap-2">
                    {["€1K–€2K", "€2K–€5K", "€5K+"].map(b => (
                      <button key={b} onClick={() => setBudget(b)}
                        className={`px-4 py-2.5 rounded-full text-[11px] font-medium border transition-all ${budget === b ? "border-white/30 bg-white/10 text-white" : "border-white/[0.06] text-white/30"}`}>
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button onClick={() => setStep(1)} className="flex-1 py-3 border border-white/10 text-white/40 text-[10px] font-medium uppercase tracking-wider rounded-full active:bg-white/5">← Back</button>
                  <button onClick={() => name && email && setStep(3)} disabled={!name || !email}
                    className="flex-1 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-wider rounded-full disabled:opacity-30 active:scale-95">Next →</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                <p className="text-sm text-white/60 mb-4">Anything else?</p>
                <div className="relative">
                  <textarea value={notes} onChange={e => setNotes(e.target.value.slice(0, 500))} rows={4} placeholder="Tell us about your project..."
                    className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white text-[14px] placeholder:text-white/20 focus:border-white/20 focus:outline-none resize-none" style={{ fontSize: 16 }} />
                  <span className="absolute bottom-3 right-3 text-[9px] text-white/15 tabular-nums">{notes.length}/500</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <button onClick={() => setStep(2)} className="flex-1 py-3 border border-white/10 text-white/40 text-[10px] font-medium uppercase tracking-wider rounded-full active:bg-white/5">← Back</button>
                  <button onClick={handleSubmit}
                    className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-wider rounded-full active:scale-95 transition-all ${
                      submitted ? "bg-emerald-500 text-white" : "bg-white text-black"
                    }`}>
                    {submitted ? "✓ Sent!" : "Submit"}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 11 — MICRO-INTERACTIONS
   ═══════════════════════════════════════════════════════════════════ */

function BookmarkDemo() {
  const [saved, setSaved] = useState(false);
  return (
    <div className="bg-[#0A0A0A] rounded-xl p-4 border border-white/[0.04] text-center">
      <button onClick={() => setSaved(!saved)}>
        <motion.div animate={saved ? { scale: [1, 1.3, 1] } : {}} transition={{ duration: 0.2 }}>
          <Bookmark className={`w-6 h-6 transition-colors ${saved ? "text-white fill-white" : "text-white/20"}`} />
        </motion.div>
      </button>
      <div className="mt-2"><DemoLabel>Bookmark</DemoLabel></div>
    </div>
  );
}

function BellDemo() {
  const [count, setCount] = useState(3);
  const [shake, setShake] = useState(false);
  const tap = () => {
    if (count <= 0) return;
    setCount(c => c - 1);
    setShake(true);
    setTimeout(() => setShake(false), 300);
  };
  return (
    <div className="bg-[#0A0A0A] rounded-xl p-4 border border-white/[0.04] text-center">
      <button onClick={tap} className="relative">
        <motion.div animate={shake ? { rotate: [0, -15, 15, -10, 10, 0] } : {}} transition={{ duration: 0.3 }}>
          <Bell className="w-6 h-6 text-white/30" />
        </motion.div>
        {count > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[8px] text-white font-bold flex items-center justify-center">
            {count}
          </span>
        )}
      </button>
      <div className="mt-2"><DemoLabel>Notification</DemoLabel></div>
    </div>
  );
}

function PasswordToggleDemo() {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-[#0A0A0A] rounded-xl p-4 border border-white/[0.04]">
      <div className="flex items-center gap-2 bg-white/[0.02] rounded-lg border border-white/[0.06] px-3 py-2">
        <span className="text-[11px] text-white/60 flex-1 font-mono">{show ? "my$ecretP4ss" : "•••••••••"}</span>
        <button onClick={() => setShow(!show)} className="text-white/30 active:text-white/60">
          {show ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
        </button>
      </div>
      <div className="mt-2"><DemoLabel>Password Toggle</DemoLabel></div>
    </div>
  );
}

function ShareDemo() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState("");
  const share = (platform: string) => {
    setToast(`${platform} copied!`);
    setTimeout(() => setToast(""), 1500);
  };
  return (
    <div className="bg-[#0A0A0A] rounded-xl p-4 border border-white/[0.04] text-center relative">
      <button onClick={() => setOpen(!open)} className="relative z-10">
        <Share2 className="w-6 h-6 text-white/30" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
            className="flex gap-2 justify-center mt-2">
            {[{ icon: MessageSquare, label: "Chat" }, { icon: Link2, label: "Link" }].map(({ icon: Icon, label }) => (
              <button key={label} onClick={() => share(label)} className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center active:bg-white/10">
                <Icon className="w-3 h-3 text-white/40" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {toast && <p className="text-[9px] text-emerald-400 mt-1">{toast}</p>}
      <div className="mt-1"><DemoLabel>Share</DemoLabel></div>
    </div>
  );
}

function MicroInteractionsSection() {
  return (
    <>
      <SectionDivider num="11" title="Micro-Interactions" useCase="The details that make it premium" />
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <LikeHeartDemo />
          <BookmarkDemo />
          <ShareDemo />
          <BellDemo />
          <CopyButtonDemo />
          <StarRatingDemo />
          <PasswordToggleDemo />
          <SegmentedControlDemo />
          <CounterDemo />
          <ConfettiDemo />
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 12 — LOADING STATES
   ═══════════════════════════════════════════════════════════════════ */

function LoadingStatesSection() {
  const [showContent, setShowContent] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const [progress, setProgress] = useState(0);
  const { ref: progressRef, inView: progressInView } = useInView();

  useEffect(() => {
    if (!progressInView) return;
    setProgress(0);
    let p = 0;
    const interval = setInterval(() => { p += 1; setProgress(p); if (p >= 100) clearInterval(interval); }, 20);
    return () => clearInterval(interval);
  }, [progressInView, progressKey]);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SectionDivider num="12" title="Loading States" useCase="No blank screens, ever" />
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Skeleton */}
          <div className="bg-[#0A0A0A] rounded-xl border border-white/[0.04] p-5">
            <p className="text-[9px] text-white/25 mb-3">Skeleton Shimmer</p>
            <div className="space-y-3">
              <div className="h-4 bg-white/[0.04] rounded-md relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" style={{ animation: "skeleton-sweep 1.5s ease-in-out infinite" }} /></div>
              <div className="h-4 bg-white/[0.04] rounded-md w-3/4 relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" style={{ animation: "skeleton-sweep 1.5s ease-in-out infinite 0.1s" }} /></div>
              <div className="h-4 bg-white/[0.04] rounded-md w-1/2 relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" style={{ animation: "skeleton-sweep 1.5s ease-in-out infinite 0.2s" }} /></div>
            </div>
          </div>

          {/* Progress */}
          <div ref={progressRef} className="bg-[#0A0A0A] rounded-xl border border-white/[0.04] p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[9px] text-white/25">Progress Bar</p>
              <button onClick={() => setProgressKey(k => k + 1)} className="text-[9px] text-white/15 active:text-white/30">↻</button>
            </div>
            <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
              <div className="h-full bg-white/30 rounded-full transition-all duration-75" style={{ width: `${progress}%` }} />
            </div>
            <p className="text-[10px] text-white/30 mt-2 tabular-nums">{progress}%</p>
          </div>

          {/* Spinners */}
          <div className="bg-[#0A0A0A] rounded-xl border border-white/[0.04] p-5">
            <p className="text-[9px] text-white/25 mb-3">Spinners</p>
            <div className="flex items-center justify-around">
              {/* Ring */}
              <div className="w-6 h-6 border-2 border-white/10 border-t-white/50 rounded-full" style={{ animation: "spin-ring 0.8s linear infinite" }} />
              {/* Dots */}
              <div className="flex gap-1">
                {[0, 1, 2].map(i => (
                  <div key={i} className="w-2 h-2 bg-white/30 rounded-full" style={{ animation: `dot-pulse 1.2s ease-in-out ${i * 0.15}s infinite` }} />
                ))}
              </div>
              {/* Pulse */}
              <div className="w-6 h-6 bg-white/10 rounded-full" style={{ animation: "dot-pulse 1.5s ease-in-out infinite" }} />
            </div>
          </div>

          {/* Placeholder → Content */}
          <div className="bg-[#0A0A0A] rounded-xl border border-white/[0.04] p-5">
            <p className="text-[9px] text-white/25 mb-3">Content Load</p>
            <AnimatePresence mode="wait">
              {!showContent ? (
                <motion.div key="skel" exit={{ opacity: 0 }} className="space-y-2">
                  <div className="h-8 w-8 bg-white/[0.04] rounded-full" />
                  <div className="h-3 bg-white/[0.04] rounded w-3/4" />
                  <div className="h-3 bg-white/[0.04] rounded w-1/2" />
                </motion.div>
              ) : (
                <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white/50">A</div>
                  <p className="text-[11px] text-white/60 font-medium">Amenzo Studio</p>
                  <p className="text-[10px] text-white/30">Web design studio</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 13 — BENTO GRID
   ═══════════════════════════════════════════════════════════════════ */

function BentoSection() {
  const { ref: counterRef, inView: counterInView } = useInView();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!counterInView) return;
    let c = 0;
    const interval = setInterval(() => { c += 127; if (c >= 9847) { setCounter(9847); clearInterval(interval); } else setCounter(c); }, 30);
    return () => clearInterval(interval);
  }, [counterInView]);

  return (
    <>
      <SectionDivider num="13" title="Bento Layouts" useCase="Complex content, beautifully organised" />
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[100px]">
          {/* Large chart cell */}
          <div className="col-span-2 row-span-2 bg-[#0A0A0A] rounded-xl border border-white/[0.04] p-5 flex flex-col justify-between">
            <p className="text-[9px] text-white/25 uppercase tracking-wider">Monthly Growth</p>
            <svg viewBox="0 0 200 80" className="w-full h-auto mt-2 opacity-40">
              <polyline fill="none" stroke="white" strokeWidth="1.5" points="0,70 30,55 60,60 90,35 120,40 150,20 180,25 200,10" />
            </svg>
          </div>
          {/* Counter */}
          <div ref={counterRef} className="bg-[#0A0A0A] rounded-xl border border-white/[0.04] p-4 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-white tabular-nums">{counter.toLocaleString()}</span>
            <span className="text-[9px] text-white/25">Visitors</span>
          </div>
          {/* Stats */}
          <div className="bg-[#0A0A0A] rounded-xl border border-white/[0.04] p-4 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-white">98+</span>
            <span className="text-[9px] text-white/25">Projects</span>
          </div>
          {/* Marquee */}
          <div className="col-span-2 bg-[#0A0A0A] rounded-xl border border-white/[0.04] overflow-hidden flex items-center">
            <div className="whitespace-nowrap" style={{ animation: "marquee 15s linear infinite" }}>
              <span className="text-[10px] text-white/15 tracking-widest uppercase mx-4">Design &bull; Code &bull; Launch &bull; Grow &bull; Design &bull; Code &bull; Launch &bull; Grow &bull;</span>
              <span className="text-[10px] text-white/15 tracking-widest uppercase mx-4">Design &bull; Code &bull; Launch &bull; Grow &bull; Design &bull; Code &bull; Launch &bull; Grow &bull;</span>
            </div>
          </div>
          {/* Delivery */}
          <div className="bg-[#0A0A0A] rounded-xl border border-white/[0.04] p-4 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-white">2wk</span>
            <span className="text-[9px] text-white/25">Delivery</span>
          </div>
          {/* Price */}
          <div className="bg-[#0A0A0A] rounded-xl border border-white/[0.04] p-4 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-white">&euro;1K</span>
            <span className="text-[9px] text-white/25">Starting</span>
          </div>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 14 — THEME TOGGLE
   ═══════════════════════════════════════════════════════════════════ */

function ThemeToggleSection() {
  const [light, setLight] = useState(false);
  return (
    <>
      <SectionDivider num="14" title="Dark & Light" useCase="Themes for every brand" />
      <div className="max-w-lg mx-auto px-6 pb-16">
        <div className={`rounded-xl border p-6 transition-all duration-500 ${light ? "bg-white border-black/10" : "bg-[#0A0A0A] border-white/[0.04]"}`}>
          <div className="flex items-center justify-between mb-4">
            <span className={`text-sm font-medium transition-colors duration-500 ${light ? "text-black" : "text-white"}`}>Theme Preview</span>
            <button onClick={() => setLight(!light)} className={`w-11 h-6 rounded-full relative transition-colors duration-300 ${light ? "bg-black" : "bg-white/10"}`}>
              <motion.div className={`w-4 h-4 rounded-full absolute top-1 shadow-sm ${light ? "bg-white" : "bg-white/50"}`}
                animate={{ left: light ? 23 : 3 }} transition={{ duration: 0.15 }}>
                {light ? <Sun className="w-2.5 h-2.5 m-[3px] text-black" /> : <Moon className="w-2.5 h-2.5 m-[3px]" />}
              </motion.div>
            </button>
          </div>
          <div className={`rounded-lg p-4 transition-all duration-500 ${light ? "bg-gray-100 border border-gray-200" : "bg-white/[0.03] border border-white/[0.06]"}`}>
            <p className={`text-xs transition-colors duration-500 ${light ? "text-gray-800" : "text-white/60"}`}>
              We build for both modes. Your users choose their preference.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 15 — MARQUEES
   ═══════════════════════════════════════════════════════════════════ */

function MarqueesSection() {
  return (
    <>
      <SectionDivider num="16" title="Scrolling Text" useCase="Trust strips, announcements, energy" />
      <div className="pb-16 space-y-4 overflow-hidden">
        {/* Trust strip */}
        <div className="whitespace-nowrap" style={{ animation: "marquee 40s linear infinite" }}>
          {[0, 1].map(i => (
            <span key={i} className="text-[11px] text-white/15 tracking-[0.3em] uppercase">
              Design & Development ✦ Clients Worldwide ✦ Lighthouse 95+ ✦ Hand-Crafted Code ✦ No Templates ✦ Delivered in Weeks ✦&nbsp;
            </span>
          ))}
        </div>
        {/* Large kinetic */}
        <div className="whitespace-nowrap" style={{ animation: "marquee 20s linear infinite" }}>
          {[0, 1].map(i => (
            <span key={i} className="text-[60px] md:text-[80px] font-bold text-white/[0.03] leading-none tracking-tight">
              DESIGN · CODE · LAUNCH · GROW ·&nbsp;
            </span>
          ))}
        </div>
        {/* Reverse */}
        <div className="whitespace-nowrap" style={{ animation: "marquee 35s linear infinite reverse" }}>
          {[0, 1].map(i => (
            <span key={i} className="text-[30px] font-bold text-white/[0.06] tracking-tight">
              PREMIUM · CUSTOM · HAND-CODED · RESPONSIVE ·&nbsp;
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 17 — FOOTER PATTERNS
   ═══════════════════════════════════════════════════════════════════ */

function FooterPatternsSection() {
  return (
    <>
      <SectionDivider num="17" title="Footers" useCase="The last impression" />
      <div className="max-w-5xl mx-auto px-6 pb-16 space-y-4">
        {/* Full footer */}
        <div className="rounded-xl bg-[#0A0A0A] border border-white/[0.04] p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm font-bold text-white/60 mb-3">BRAND</p>
              <p className="text-[10px] text-white/25 leading-relaxed">Web design studio building premium digital experiences.</p>
            </div>
            <div>
              <p className="text-[9px] text-white/30 uppercase tracking-wider mb-2">Navigation</p>
              {["Home", "Work", "About", "Contact"].map(l => <p key={l} className="text-[11px] text-white/40 py-0.5">{l}</p>)}
            </div>
            <div>
              <p className="text-[9px] text-white/30 uppercase tracking-wider mb-2">Services</p>
              {["Web Design", "E-Commerce", "SEO", "Hosting"].map(l => <p key={l} className="text-[11px] text-white/40 py-0.5">{l}</p>)}
            </div>
            <div>
              <p className="text-[9px] text-white/30 uppercase tracking-wider mb-2">Contact</p>
              <p className="text-[11px] text-white/40">info@studio.com</p>
              <p className="text-[11px] text-white/40 mt-1">LinkedIn · Instagram</p>
            </div>
          </div>
        </div>
        {/* Minimal footer */}
        <div className="rounded-xl bg-[#0A0A0A] border border-white/[0.04] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[10px] font-bold text-white/40 tracking-wider">BRAND</span>
          <span className="text-[10px] text-white/20">Netherlands</span>
          <span className="text-[10px] text-white/20">LinkedIn · Instagram · X</span>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 18 — GALLERIES
   ═══════════════════════════════════════════════════════════════════ */

function GalleriesSection() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Interior", "Food", "People"];
  const images = [
    { id: 1, cat: "Interior", color: "from-blue-900/20 to-indigo-900/20" },
    { id: 2, cat: "Food", color: "from-amber-900/20 to-orange-900/20" },
    { id: 3, cat: "People", color: "from-rose-900/20 to-pink-900/20" },
    { id: 4, cat: "Interior", color: "from-emerald-900/20 to-teal-900/20" },
    { id: 5, cat: "Food", color: "from-yellow-900/20 to-amber-900/20" },
    { id: 6, cat: "People", color: "from-violet-900/20 to-purple-900/20" },
  ];
  const filtered = filter === "All" ? images : images.filter(i => i.cat === filter);

  return (
    <>
      <SectionDivider num="18" title="Galleries" useCase="Portfolios, restaurants, hotels" />
      <div className="max-w-5xl mx-auto px-6 pb-16">
        {/* Filter tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-[10px] font-medium whitespace-nowrap transition-all ${filter === f ? "bg-white text-black" : "bg-white/5 text-white/30"}`}>
              {f}
            </button>
          ))}
        </div>
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <AnimatePresence>
            {filtered.map(img => (
              <motion.div key={img.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${img.color} border border-white/[0.04] flex items-center justify-center`}>
                <span className="text-[10px] text-white/20">{img.cat}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION 19 — RESPONSIVE PREVIEW
   ═══════════════════════════════════════════════════════════════════ */

function ResponsivePreviewSection() {
  return (
    <>
      <SectionDivider num="19" title="Responsive Design" useCase="Every screen, every device" />
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="flex flex-col md:flex-row items-end justify-center gap-6">
          {/* Phone */}
          <div className="w-[140px] mx-auto md:mx-0">
            <div className="rounded-2xl border-2 border-white/10 bg-[#0A0A0A] p-1.5 aspect-[9/19]">
              <div className="w-8 h-1 bg-white/10 rounded-full mx-auto mb-1.5" />
              <div className="rounded-xl bg-white/[0.03] h-full flex items-center justify-center">
                <span className="text-[8px] text-white/15">375 × 812</span>
              </div>
            </div>
            <p className="text-[9px] text-white/15 text-center mt-2">Mobile</p>
          </div>
          {/* Tablet */}
          <div className="w-[200px] mx-auto md:mx-0">
            <div className="rounded-2xl border-2 border-white/10 bg-[#0A0A0A] p-2 aspect-[3/4]">
              <div className="rounded-xl bg-white/[0.03] h-full flex items-center justify-center">
                <span className="text-[9px] text-white/15">768 × 1024</span>
              </div>
            </div>
            <p className="text-[9px] text-white/15 text-center mt-2">Tablet</p>
          </div>
          {/* Desktop */}
          <div className="w-full max-w-[360px] mx-auto md:mx-0">
            <div className="rounded-xl border-2 border-white/10 bg-[#0A0A0A] p-2 aspect-[16/10]">
              <div className="rounded-lg bg-white/[0.03] h-full flex items-center justify-center">
                <span className="text-[9px] text-white/15">1440 × 900</span>
              </div>
            </div>
            <div className="w-16 h-4 bg-white/5 rounded-b-lg mx-auto border-x-2 border-b-2 border-white/10" />
            <p className="text-[9px] text-white/15 text-center mt-2">Desktop</p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════════════ */

export function CapabilitiesShowcase() {
  return (
    <div className="min-h-screen bg-[#050505]">

      {/* HERO */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[9px] tracking-[0.6em] uppercase text-white/15 font-medium mb-6">
            Design Capabilities
          </p>
          <h1 className="text-3xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]">
            Tap. Swipe. Scroll<span className="text-white/15">.</span>
          </h1>
          <p className="mt-6 text-sm text-white/30 max-w-md mx-auto leading-relaxed">
            Every component below is live and interactive.
            Touch it on your phone. Hover it on desktop.
            These are the building blocks of your next website.
          </p>
          <p className="mt-3 text-[10px] text-white/15 tracking-wider uppercase">
            <span className="hidden md:inline">Hover and click to interact</span>
            <span className="md:hidden">Tap and swipe to interact</span>
          </p>
        </div>
      </section>

      <ButtonsSection />
      <CardInteractionsSection />
      <PlaygroundSection />
      <ScrollAnimationsSection />
      <TextEffectsSection />
      <GlassSection />
      <NavDemosSection />

      <TestimonialsSection />
      <FormsSection />
      <MicroInteractionsSection />
      <LoadingStatesSection />
      <BentoSection />
      <ThemeToggleSection />
      <MarqueesSection />
      <FooterPatternsSection />
      <GalleriesSection />
      <ResponsivePreviewSection />

      {/* FINAL CTA */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Seen enough<span className="text-white/15">?</span>
          </h2>
          <p className="mt-6 text-sm text-white/30 max-w-md mx-auto">
            Every component on this page can be part of your website.
            Tell us what you need.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
            <a href="/start-project"
              className="w-full sm:w-auto text-center group inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-black text-[11px] font-bold uppercase tracking-[0.15em] rounded-full active:scale-95 transition-transform">
              Start a Project
              <ArrowRight className="w-3.5 h-3.5 group-active:translate-x-1 transition-transform" />
            </a>
            <a href="/pricing"
              className="w-full sm:w-auto text-center px-10 py-4 border border-white/10 text-white/50 text-[11px] font-medium uppercase tracking-[0.15em] rounded-full active:bg-white/5 transition-all">
              View Pricing
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
