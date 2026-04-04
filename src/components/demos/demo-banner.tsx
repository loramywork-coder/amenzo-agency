"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function DemoBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("amenzo-demo-banner") === "hidden")
      setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-10 flex items-center justify-center px-4 text-[13px]"
      style={{ background: "#111111", color: "#bbb", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <span className="truncate">
        Design Showcase by{" "}
        <strong className="text-white">Amenzo</strong>
        {" "}&mdash;{" "}
        <a
          href="https://amenzo.co"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9B8BF7] hover:text-[#C9A455] font-medium transition-colors"
        >
          Visit amenzo.co &rarr;
        </a>
      </span>
      <button
        onClick={() => {
          setVisible(false);
          sessionStorage.setItem("amenzo-demo-banner", "hidden");
        }}
        className="absolute right-3 p-1 text-white/40 hover:text-white transition-colors"
        aria-label="Close banner"
      >
        <X size={14} />
      </button>
    </div>
  );
}
