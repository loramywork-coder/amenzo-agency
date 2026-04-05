"use client";

export function DemoBanner() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-10 flex items-center justify-center px-4 text-[12px]"
      style={{ background: "#0A0A0A", color: "#888", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <a
        href="https://amenzo.co"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 transition-colors hover:text-white"
      >
        <span>Design Showcase by</span>
        <strong className="text-white">Amenzo</strong>
        <span>&mdash;</span>
        <span className="text-[#9B8BF7] font-medium">Visit amenzo.co &rarr;</span>
      </a>
    </div>
  );
}
