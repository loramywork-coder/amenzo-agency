"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<"default" | "interactive" | "image">("default");
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.(
        "a, button, [role='button'], input, textarea, select, [data-cursor='interactive']"
      );
      const img = (e.target as HTMLElement)?.closest?.("img, [data-cursor='image']");

      if (img) hoverRef.current = "image";
      else if (el) hoverRef.current = "interactive";
      else hoverRef.current = "default";

      // Update ring size
      const isHover = hoverRef.current !== "default";
      const isImage = hoverRef.current === "image";
      ring.style.width = isImage ? "80px" : isHover ? "48px" : "32px";
      ring.style.height = isImage ? "80px" : isHover ? "48px" : "32px";
      ring.style.borderColor = isHover
        ? "rgba(240,240,240,0.15)"
        : "rgba(240,240,240,0.25)";
      ring.style.backgroundColor = isHover
        ? "rgba(255,255,255,0.04)"
        : "transparent";
    };

    let raf: number;
    const animate = () => {
      // Dot follows fast
      dotPos.current.x = lerp(dotPos.current.x, target.current.x, 0.35);
      dotPos.current.y = lerp(dotPos.current.y, target.current.y, 0.35);
      // Ring follows with more delay — creates fluid feel
      ringPos.current.x = lerp(ringPos.current.x, target.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, target.current.y, 0.12);

      dot.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;

      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Inner dot — fast, precise */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#F0F0F0",
        }}
      />
      {/* Outer ring — slower, fluid */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[99998] hidden md:block"
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1.5px solid rgba(240,240,240,0.25)",
          background: "transparent",
          transition: "width 0.35s cubic-bezier(0.25,0.1,0.25,1), height 0.35s cubic-bezier(0.25,0.1,0.25,1), border-color 0.3s ease, background 0.3s ease",
        }}
      />
    </>
  );
}
