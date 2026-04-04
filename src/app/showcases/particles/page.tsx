"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type ColorMode = "white" | "cyan" | "rainbow";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseOpacity: number;
  hue: number;
}

function hslColor(mode: ColorMode, hue: number): string {
  if (mode === "white") return "255,255,255";
  if (mode === "cyan") return "14,165,233";
  // rainbow
  const h = hue % 360;
  const s = 80;
  const l = 60;
  const c = (1 - Math.abs((2 * l) / 100 - 1)) * (s / 100);
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l / 100 - c / 2;
  let r = 0,
    g = 0,
    b = 0;
  if (h < 60) {
    r = c;
    g = x;
  } else if (h < 120) {
    r = x;
    g = c;
  } else if (h < 180) {
    g = c;
    b = x;
  } else if (h < 240) {
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    b = c;
  } else {
    r = c;
    b = x;
  }
  return `${Math.round((r + m) * 255)},${Math.round((g + m) * 255)},${Math.round((b + m) * 255)}`;
}

function createParticles(count: number, w: number, h: number): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.1 + Math.random() * 0.2;
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: 1 + Math.random(),
      baseOpacity: 0.3 + Math.random() * 0.4,
      hue: Math.random() * 360,
    });
  }
  return particles;
}

export default function ParticlesPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const scrollRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);
  const [colorMode, setColorMode] = useState<ColorMode>("white");
  const colorModeRef = useRef<ColorMode>("white");

  // Keep ref in sync with state
  useEffect(() => {
    colorModeRef.current = colorMode;
  }, [colorMode]);

  const getParticleCount = useCallback(() => {
    if (typeof window === "undefined") return 300;
    return window.innerWidth < 768 ? 150 : 300;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w: number, h: number, dpr: number;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = document.documentElement.scrollHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = w < 768 ? 150 : 300;
      if (particlesRef.current.length === 0) {
        particlesRef.current = createParticles(count, w, h);
      }
    }

    resize();
    window.addEventListener("resize", resize);

    function onMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY + window.scrollY };
    }
    function onMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 };
    }
    function onTouchMove(e: TouchEvent) {
      if (e.touches.length > 0) {
        mouseRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY + window.scrollY,
        };
      }
    }
    function onTouchEnd() {
      mouseRef.current = { x: -9999, y: -9999 };
    }
    function onScroll() {
      scrollRef.current = window.scrollY;
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("scroll", onScroll);

    function animate() {
      const particles = particlesRef.current;
      const mode = colorModeRef.current;
      const viewH = window.innerHeight;
      const scrollY = window.scrollY;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx!.clearRect(0, 0, w, h);

      // Calculate scroll progress for grid formation
      // The scroll section starts after the first viewport
      const scrollProgress = Math.min(
        1,
        Math.max(0, (scrollY - viewH * 0.3) / (viewH * 0.7))
      );

      // Grid target positions
      const cols = Math.ceil(Math.sqrt(particles.length * (w / viewH)));
      const rows = Math.ceil(particles.length / cols);
      const cellW = w / (cols + 1);
      const cellH = viewH / (rows + 1);
      const gridOffsetY = viewH; // Grid is in the second viewport

      // Connection tracking per particle
      const connectionCounts = new Uint8Array(particles.length);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Grid target
        const col = i % cols;
        const row = Math.floor(i / cols);
        const gridX = (col + 1) * cellW;
        const gridY = gridOffsetY + (row + 1) * cellH;

        // Drift
        if (scrollProgress < 1) {
          p.x += p.vx * (1 - scrollProgress);
          p.y += p.vy * (1 - scrollProgress);
        }

        // Lerp toward grid based on scroll
        if (scrollProgress > 0) {
          p.x += (gridX - p.x) * scrollProgress * 0.05;
          p.y += (gridY - p.y) * scrollProgress * 0.05;
        }

        // Wrap edges (only when not in grid mode)
        if (scrollProgress < 0.5) {
          if (p.x < 0) p.x = w;
          if (p.x > w) p.x = 0;
          if (p.y < 0) p.y = h;
          if (p.y > h) p.y = 0;
        }

        // Cursor interaction
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let opacity = p.baseOpacity;

        if (dist < 200) {
          opacity = 0.9;
          // Gentle repulsion
          const force = (200 - dist) / 200;
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * force * 0.5;
          p.y += Math.sin(angle) * force * 0.5;
        }

        // Draw particle
        const rgb = hslColor(mode, p.hue);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${rgb},${opacity})`;
        ctx!.fill();

        // Draw connections (only check particles after current)
        if (connectionCounts[i] < 3) {
          for (let j = i + 1; j < particles.length; j++) {
            if (connectionCounts[i] >= 3) break;
            if (connectionCounts[j] >= 3) continue;

            const p2 = particles[j];
            const cdx = p.x - p2.x;
            const cdy = p.y - p2.y;
            const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

            if (cdist < 150) {
              const lineOpacity = (1 - cdist / 150) * 0.3;
              const rgb2 = hslColor(mode, (p.hue + p2.hue) / 2);
              ctx!.beginPath();
              ctx!.moveTo(p.x, p.y);
              ctx!.lineTo(p2.x, p2.y);
              ctx!.strokeStyle = `rgba(${rgb2},${lineOpacity})`;
              ctx!.lineWidth = 0.5;
              ctx!.stroke();
              connectionCounts[i]++;
              connectionCounts[j]++;
            }
          }
        }
      }

      // Slowly rotate hue for rainbow mode
      if (mode === "rainbow") {
        for (const p of particles) {
          p.hue = (p.hue + 0.1) % 360;
        }
      }

      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("scroll", onScroll);
    };
  }, [getParticleCount]);

  const modes: { mode: ColorMode; color: string }[] = [
    { mode: "white", color: "#ffffff" },
    { mode: "cyan", color: "#0EA5E9" },
    { mode: "rainbow", color: "conic-gradient(red, yellow, lime, cyan, blue, magenta, red)" },
  ];

  return (
    <div className="relative bg-black min-h-[200vh] pt-16 pb-20">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Color mode toggle */}
      <div className="fixed top-20 right-4 z-50 flex flex-col gap-2">
        {modes.map(({ mode, color }) => (
          <button
            key={mode}
            onClick={() => setColorMode(mode)}
            className="w-7 h-7 rounded-full transition-all duration-200"
            style={{
              background: color,
              boxShadow:
                colorMode === mode
                  ? "0 0 0 2px black, 0 0 0 4px white"
                  : "none",
              transform: colorMode === mode ? "scale(1.1)" : "scale(1)",
            }}
            aria-label={`Switch to ${mode} color mode`}
          />
        ))}
      </div>

      {/* Hero text overlay */}
      <div className="relative z-10 pointer-events-none flex flex-col items-center justify-center h-screen">
        <h1 className="text-[40px] md:text-[80px] font-black text-white tracking-tight leading-none">
          CONSTELLATION
        </h1>
        <p className="text-[10px] text-white/20 mt-2">
          {getParticleCount()} particles &middot; Real-time connections &middot;
          Cursor-reactive
        </p>
      </div>

      {/* Scroll section */}
      <div className="relative z-10 pointer-events-none flex items-center justify-center h-screen px-6">
        <p className="text-white/30 text-center text-sm md:text-base max-w-xl leading-relaxed">
          Every interaction calculated in real-time. No pre-rendered animation.
          Pure mathematics rendered 60 times per second.
        </p>
      </div>
    </div>
  );
}
