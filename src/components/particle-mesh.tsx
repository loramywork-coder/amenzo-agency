"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  radius: number;
  opacity: number;
  layer: number;
  color: string; // "violet" | "cyan" | "white"
  pulse: number; // phase offset for pulsing
}

export default function ParticleMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const pausedRef = useRef(false);
  const timeRef = useRef(0);
  const pathname = usePathname();
  const isDemo = pathname.startsWith("/demos");

  const getCount = useCallback(() => {
    const w = window.innerWidth;
    if (w < 768) return 45;
    if (w < 1024) return 65;
    return 95;
  }, []);

  const createParticles = useCallback(
    (count: number, w: number, h: number): Particle[] =>
      Array.from({ length: count }, () => {
        const layer = Math.random() < 0.12 ? 2 : Math.random() < 0.35 ? 1 : 0;
        const sizeMul = [0.7, 1, 1.4][layer];
        const baseR = 1.2 + Math.random() * 1.8;
        const vx = (Math.random() - 0.5) * 0.35;
        const vy = (Math.random() - 0.5) * 0.35;
        const rnd = Math.random();
        const color = rnd < 0.35 ? "violet" : rnd < 0.6 ? "cyan" : "white";
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx, vy, baseVx: vx, baseVy: vy,
          radius: baseR * sizeMul,
          opacity: 0.15 + layer * 0.1 + Math.random() * 0.1,
          layer,
          color,
          pulse: Math.random() * Math.PI * 2,
        };
      }),
    []
  );

  useEffect(() => {
    if (isDemo) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const isTouchDevice = "ontouchstart" in window;

    let isTouching = false;
    let scrollCheckId: ReturnType<typeof setInterval>;
    let lastScrollY = window.scrollY;

    const colorMap = {
      violet: "109, 91, 247",
      cyan: "184, 146, 62",
      white: "220, 220, 255",
    };

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      resize();
      const w = window.innerWidth;
      const h = window.innerHeight;
      const count = getCount();
      const existing = particlesRef.current;
      if (existing.length > count) {
        particlesRef.current = existing.slice(0, count);
      } else if (existing.length < count) {
        particlesRef.current = [...existing, ...createParticles(count - existing.length, w, h)];
      }
    };

    init();

    if (prefersReduced) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const particles = particlesRef.current;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        const rgb = colorMap[p.color as keyof typeof colorMap];
        ctx.fillStyle = `rgba(${rgb},${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      return;
    }

    const drawParticles = (particles: Particle[], w: number, h: number, time: number, _interactive: boolean) => {
      // Pure floating stars — no grid lines, just universe
      for (const p of particles) {
        const rgb = colorMap[p.color as keyof typeof colorMap];
        const pulse = 0.5 + 0.5 * Math.sin(time * 2.5 + p.pulse);
        const r = p.radius * (0.8 + 0.2 * pulse);
        const isStar = p.layer === 2;

        // Outer bloom
        const bloomR = isStar ? r * 12 : r * 7;
        const bloom = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, bloomR);
        bloom.addColorStop(0, `rgba(${rgb}, ${(isStar ? 0.3 : 0.15) * pulse})`);
        bloom.addColorStop(0.4, `rgba(${rgb}, ${(isStar ? 0.08 : 0.04) * pulse})`);
        bloom.addColorStop(1, `rgba(${rgb}, 0)`);
        ctx.fillStyle = bloom;
        ctx.beginPath();
        ctx.arc(p.x, p.y, bloomR, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `rgba(${rgb}, ${(isStar ? 0.9 : 0.7) * pulse})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();

        // Hot white center
        if (isStar || p.layer === 1) {
          const wc = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 0.5);
          wc.addColorStop(0, `rgba(255, 255, 255, ${(isStar ? 0.9 : 0.5) * pulse})`);
          wc.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.fillStyle = wc;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const draw = () => {
      if (pausedRef.current) { animRef.current = requestAnimationFrame(draw); return; }

      const w = window.innerWidth;
      const h = window.innerHeight;
      const particles = particlesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.clearRect(0, 0, w, h);

      if (isTouching) {
        // Still draw but don't move
        drawParticles(particles, w, h, timeRef.current, false);
        animRef.current = requestAnimationFrame(draw);
        return;
      }

      timeRef.current += 0.016;

      // Update positions
      for (const p of particles) {
        if (!isTouchDevice) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 0) {
            const force = Math.min(2, (120 - dist) / 60);
            p.vx += (dx / dist) * force * 0.15;
            p.vy += (dy / dist) * force * 0.15;
          }
        }
        p.vx += (p.baseVx - p.vx) * 0.02;
        p.vy += (p.baseVy - p.vy) * 0.02;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x > w + 10) p.x = -10;
        if (p.x < -10) p.x = w + 10;
        if (p.y > h + 10) p.y = -10;
        if (p.y < -10) p.y = h + 10;
      }

      drawParticles(particles, w, h, timeRef.current, !isTouchDevice);
      animRef.current = requestAnimationFrame(draw);
    };

    const onMouse = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    const onVisibility = () => { pausedRef.current = document.hidden; };
    const onTouchStart = () => { isTouching = true; clearInterval(scrollCheckId); };
    const onTouchEnd = () => {
      lastScrollY = window.scrollY;
      clearInterval(scrollCheckId);
      scrollCheckId = setInterval(() => {
        if (window.scrollY === lastScrollY) { isTouching = false; clearInterval(scrollCheckId); }
        lastScrollY = window.scrollY;
      }, 100);
    };
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(init, 250); };

    animRef.current = requestAnimationFrame(draw);
    if (!isTouchDevice) {
      window.addEventListener("mousemove", onMouse, { passive: true });
      document.addEventListener("mouseleave", onMouseLeave);
    }
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", onResize);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      cancelAnimationFrame(animRef.current);
      clearInterval(scrollCheckId);
      clearTimeout(resizeTimer);
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [isDemo, getCount, createParticles]);

  if (isDemo) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
