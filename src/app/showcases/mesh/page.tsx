"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const GRID = 4;
const TOTAL = GRID * GRID;
const RADIUS = 400;

const COLORS = [
  "#0a0a2e", "#1e3a8a", "#4c1d95", "#0a0a2e",
  "#1e40ff", "#3b82f6", "#8b5cf6", "#7c3aed",
  "#0ea5e9", "#06b6d4", "#a855f7", "#ec4899",
  "#0a0a2e", "#0369a1", "#6d28d9", "#0a0a2e",
];

interface ControlPoint {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  color: string;
  driftRadius: number;
  driftSpeed: number;
  driftPhase: number;
  driftRatioX: number;
  driftRatioY: number;
  scatterX: number;
  scatterY: number;
  scatterStartX: number;
  scatterStartY: number;
  opacity: number;
}

function hexToRgb(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255] as const;
}

function createPoints(w: number, h: number): ControlPoint[] {
  const pts: ControlPoint[] = [];
  for (let row = 0; row < GRID; row++) {
    for (let col = 0; col < GRID; col++) {
      const i = row * GRID + col;
      const bx = (col / (GRID - 1)) * w;
      const by = (row / (GRID - 1)) * h;
      pts.push({
        baseX: bx,
        baseY: by,
        x: bx,
        y: by,
        color: COLORS[i],
        driftRadius: 20 + Math.random() * 40,
        driftSpeed: 0.001 + Math.random() * 0.002,
        driftPhase: Math.random() * Math.PI * 2,
        driftRatioX: 1 + Math.random() * 2,
        driftRatioY: 1 + Math.random() * 2,
        scatterX: 0,
        scatterY: 0,
        scatterStartX: 0,
        scatterStartY: 0,
        opacity: 1,
      });
    }
  }
  return pts;
}

export default function MeshPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayCanvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<ControlPoint[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const scatterRef = useRef({ active: false, startTime: 0, duration: 3000 });
  const rafRef = useRef<number>(0);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const initPoints = useCallback((w: number, h: number) => {
    pointsRef.current = createPoints(w, h);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const overlayCanvas = overlayCanvasRef.current;
    if (!canvas || !overlayCanvas) return;

    const parent = canvas.parentElement!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const renderScale = 0.5;

    function resize() {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      const rw = Math.floor(w * renderScale * dpr);
      const rh = Math.floor(h * renderScale * dpr);
      canvas!.width = rw;
      canvas!.height = rh;
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      overlayCanvas!.width = Math.floor(w * dpr);
      overlayCanvas!.height = Math.floor(h * dpr);
      overlayCanvas!.style.width = w + "px";
      overlayCanvas!.style.height = h + "px";
      initPoints(w, h);
    }

    resize();
    window.addEventListener("resize", resize);

    const ctx = canvas.getContext("2d", { alpha: false })!;
    const overlayCtx = overlayCanvas.getContext("2d")!;

    function animate(time: number) {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      const rw = canvas!.width;
      const rh = canvas!.height;
      const pts = pointsRef.current;
      const scatter = scatterRef.current;
      const mouse = mouseRef.current;

      // Update point positions
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const t = time;

        // Lissajous drift
        let dx = Math.sin(t * p.driftSpeed + p.driftPhase) * p.driftRadius * Math.cos(t * p.driftSpeed * p.driftRatioX);
        let dy = Math.cos(t * p.driftSpeed + p.driftPhase) * p.driftRadius * Math.sin(t * p.driftSpeed * p.driftRatioY);

        // Scatter animation
        if (scatter.active) {
          const elapsed = time - scatter.startTime;
          const progress = Math.min(elapsed / scatter.duration, 1);
          // Ease out elastic-ish spring back
          const spring = 1 - Math.pow(1 - progress, 3) * Math.cos(progress * Math.PI * 2);
          const scatterFade = 1 - spring;
          dx += (p.scatterX - p.scatterStartX) * scatterFade;
          dy += (p.scatterY - p.scatterStartY) * scatterFade;
          if (progress >= 1) scatter.active = false;
        }

        p.x = p.baseX + dx;
        p.y = p.baseY + dy;

        // Mouse proximity brightening
        const dist = Math.hypot(mouse.x - p.x, mouse.y - p.y);
        const influence = Math.max(0, 1 - dist / 200);
        p.opacity = 1 + influence * 0.6;
      }

      // Render mesh at half resolution
      const sx = rw / w;
      const sy = rh / h;

      ctx.fillStyle = "#030303";
      ctx.fillRect(0, 0, rw, rh);
      ctx.globalCompositeOperation = "screen";

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const px = p.x * sx;
        const py = p.y * sy;
        const r = RADIUS * sx;
        const [cr, cg, cb] = hexToRgb(p.color);
        const alpha = Math.min(p.opacity, 1.6);

        const grad = ctx.createRadialGradient(px, py, 0, px, py, r);
        grad.addColorStop(0, `rgba(${cr},${cg},${cb},${alpha})`);
        grad.addColorStop(0.4, `rgba(${cr},${cg},${cb},${alpha * 0.5})`);
        grad.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(px - r, py - r, r * 2, r * 2);
      }

      ctx.globalCompositeOperation = "source-over";

      // Draw skeleton overlay if visible
      overlayCtx.clearRect(0, 0, overlayCanvas!.width, overlayCanvas!.height);
      if (showSkeleton) {
        const odpr = overlayCanvas!.width / w;
        overlayCtx.strokeStyle = "rgba(255,255,255,0.12)";
        overlayCtx.lineWidth = 1 * odpr;

        // Draw grid lines
        for (let row = 0; row < GRID; row++) {
          for (let col = 0; col < GRID; col++) {
            const idx = row * GRID + col;
            const p = pts[idx];
            // Right neighbor
            if (col < GRID - 1) {
              const right = pts[idx + 1];
              overlayCtx.beginPath();
              overlayCtx.moveTo(p.x * odpr, p.y * odpr);
              overlayCtx.lineTo(right.x * odpr, right.y * odpr);
              overlayCtx.stroke();
            }
            // Bottom neighbor
            if (row < GRID - 1) {
              const below = pts[idx + GRID];
              overlayCtx.beginPath();
              overlayCtx.moveTo(p.x * odpr, p.y * odpr);
              overlayCtx.lineTo(below.x * odpr, below.y * odpr);
              overlayCtx.stroke();
            }
          }
        }

        // Draw control points
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i];
          overlayCtx.fillStyle = "rgba(255,255,255,0.3)";
          overlayCtx.beginPath();
          overlayCtx.arc(p.x * odpr, p.y * odpr, 3 * odpr, 0, Math.PI * 2);
          overlayCtx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [initPoints, showSkeleton]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -1000, y: -1000 };
  }, []);

  const handleClick = useCallback(() => {
    const pts = pointsRef.current;
    const parent = canvasRef.current?.parentElement;
    if (!parent) return;
    const w = parent.clientWidth;
    const h = parent.clientHeight;

    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      p.scatterStartX = p.x - p.baseX;
      p.scatterStartY = p.y - p.baseY;
      p.scatterX = (Math.random() - 0.5) * w * 0.8;
      p.scatterY = (Math.random() - 0.5) * h * 0.8;
    }

    scatterRef.current = {
      active: true,
      startTime: performance.now(),
      duration: 3000,
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      ([entry]) => setShowSkeleton(entry.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="pt-16 pb-20">
      {/* Hero canvas section */}
      <div
        className="relative w-full h-screen cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{ imageRendering: "auto" }}
        />
        <canvas
          ref={overlayCanvasRef}
          className="absolute inset-0 pointer-events-none"
        />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h1 className="text-[80px] md:text-[120px] font-black text-white text-center leading-none select-none">
            MESH
          </h1>
          <p className="text-[10px] text-white/20 mt-4 tracking-wider select-none">
            16 control points &middot; Additive blending &middot; 60fps
          </p>
        </div>
      </div>

      {/* Scroll section: skeleton + explanation */}
      <div ref={sectionRef} className="relative max-w-3xl mx-auto px-6 py-32">
        <div className="space-y-16">
          <div>
            <h2 className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/40 mb-6">
              Under the hood
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The skeleton
            </h3>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Scroll here to reveal the wireframe grid connecting all 16 control
              points. Each point drifts along a unique Lissajous curve, creating
              organic motion without repetition.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Mesh gradients vs. linear/radial
            </h3>
            <p className="text-sm text-white/40 leading-relaxed mb-4">
              Traditional CSS gradients interpolate color along a single axis
              (linear) or from a central point (radial). Both produce predictable,
              mechanical results.
            </p>
            <p className="text-sm text-white/40 leading-relaxed mb-4">
              A mesh gradient distributes color across a 2D grid of control points.
              Each point bleeds into its neighbors, and the result is a smooth,
              multi-directional color field that feels organic and dimensional.
            </p>
            <p className="text-sm text-white/40 leading-relaxed">
              This demo approximates a mesh by rendering 16 large radial gradients
              with additive (&ldquo;screen&rdquo;) blending. The overlapping halos
              mix colors naturally, while half-resolution rendering keeps everything
              locked at 60fps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
