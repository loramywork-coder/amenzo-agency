"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const DESKTOP_COLS = 25;
const DESKTOP_ROWS = 16;
const MOBILE_COLS = 12;
const MOBILE_ROWS = 20;
const MAX_RIPPLE_RADIUS = 5;
const RIPPLE_DELAY = 50;
const MEGA_RIPPLE_DELAY = 20;
const THROTTLE_MS = 16;

const RING_OPACITIES = [0.15, 0.12, 0.08, 0.05, 0.02];

function getHueFromX(x: number, totalWidth: number): number {
  const t = Math.max(0, Math.min(1, x / totalWidth));
  return 210 + t * 70; // 210 (blue) to 280 (purple)
}

export default function RipplePage() {
  const [cols, setCols] = useState(DESKTOP_COLS);
  const [rows, setRows] = useState(DESKTOP_ROWS);
  const cellStatesRef = useRef<Map<number, { color: string; opacity: number; timeout: ReturnType<typeof setTimeout> }>>(new Map());
  const activeCellsRef = useRef<Set<number>>(new Set());
  const gridRef = useRef<HTMLDivElement>(null);
  const lastTriggerRef = useRef(0);
  const totalCells = cols * rows;

  useEffect(() => {
    const update = () => {
      const isMobile = window.innerWidth < 768;
      setCols(isMobile ? MOBILE_COLS : DESKTOP_COLS);
      setRows(isMobile ? MOBILE_ROWS : DESKTOP_ROWS);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const activateCell = useCallback(
    (index: number, hue: number, opacity: number) => {
      const el = gridRef.current?.children[index] as HTMLElement | undefined;
      if (!el) return;

      const existing = cellStatesRef.current.get(index);
      if (existing) clearTimeout(existing.timeout);

      const color = `hsla(${hue}, 70%, 60%, ${opacity})`;
      el.style.backgroundColor = color;
      activeCellsRef.current.add(index);

      const timeout = setTimeout(() => {
        el.style.backgroundColor = "transparent";
        activeCellsRef.current.delete(index);
        cellStatesRef.current.delete(index);
      }, 300);

      cellStatesRef.current.set(index, { color, opacity, timeout });
    },
    []
  );

  const triggerRipple = useCallback(
    (originCol: number, originRow: number, hue: number, maxRadius: number, delayPerRing: number) => {
      for (let ring = 0; ring <= maxRadius; ring++) {
        const opacity = ring < RING_OPACITIES.length ? RING_OPACITIES[ring] : 0.01;
        const delay = ring * delayPerRing;

        setTimeout(() => {
          for (let dr = -ring; dr <= ring; dr++) {
            for (let dc = -ring; dc <= ring; dc++) {
              if (Math.max(Math.abs(dr), Math.abs(dc)) !== ring) continue;
              const r = originRow + dr;
              const c = originCol + dc;
              if (r < 0 || r >= rows || c < 0 || c >= cols) continue;
              const idx = r * cols + c;
              activateCell(idx, hue, opacity);
            }
          }
        }, delay);
      }
    },
    [cols, rows, activateCell]
  );

  const handleCellEnter = useCallback(
    (index: number) => {
      const now = performance.now();
      if (now - lastTriggerRef.current < THROTTLE_MS) return;
      lastTriggerRef.current = now;

      const col = index % cols;
      const row = Math.floor(index / cols);
      const gridEl = gridRef.current;
      const cellWidth = gridEl ? gridEl.clientWidth / cols : 0;
      const x = col * cellWidth + cellWidth / 2;
      const totalWidth = gridEl ? gridEl.clientWidth : 1;
      const hue = getHueFromX(x, totalWidth);

      triggerRipple(col, row, hue, MAX_RIPPLE_RADIUS, RIPPLE_DELAY);
    },
    [cols, triggerRipple]
  );

  const handleClick = useCallback(
    (index: number) => {
      const col = index % cols;
      const row = Math.floor(index / cols);

      // White flash at origin
      const el = gridRef.current?.children[index] as HTMLElement | undefined;
      if (el) {
        el.style.backgroundColor = "rgba(255,255,255,0.8)";
        setTimeout(() => {
          el.style.backgroundColor = "transparent";
        }, 150);
      }

      const maxDist = Math.max(
        Math.max(col, cols - 1 - col) + Math.max(row, rows - 1 - row),
        Math.ceil(Math.sqrt(cols * cols + rows * rows))
      );
      const gridEl = gridRef.current;
      const cellWidth = gridEl ? gridEl.clientWidth / cols : 0;
      const x = col * cellWidth + cellWidth / 2;
      const totalWidth = gridEl ? gridEl.clientWidth : 1;
      const hue = getHueFromX(x, totalWidth);

      for (let ring = 1; ring <= maxDist; ring++) {
        const opacity = Math.max(0.01, 0.2 - ring * 0.005);
        const delay = ring * MEGA_RIPPLE_DELAY;

        setTimeout(() => {
          for (let dr = -ring; dr <= ring; dr++) {
            for (let dc = -ring; dc <= ring; dc++) {
              if (Math.max(Math.abs(dr), Math.abs(dc)) !== ring) continue;
              const r = row + dr;
              const c = col + dc;
              if (r < 0 || r >= rows || c < 0 || c >= cols) continue;
              const idx = r * cols + c;
              activateCell(idx, hue, opacity);
            }
          }
        }, delay);
      }
    },
    [cols, rows, activateCell]
  );

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black pt-16 pb-20">
      {/* Centered text */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center">
        <h1 className="text-[60px] md:text-[100px] font-black text-white/50 leading-none select-none">
          RIPPLE
        </h1>
        <p className="mt-2 text-xs text-white/15 select-none">
          Hover to create waves. Click for impact.
        </p>
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="absolute inset-0"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: totalCells }, (_, i) => (
          <div
            key={`${cols}-${rows}-${i}`}
            onMouseEnter={() => handleCellEnter(i)}
            onClick={() => handleClick(i)}
            style={{
              backgroundColor: "transparent",
              border: "1px solid rgba(255,255,255,0.03)",
              transition: "background-color 800ms ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
