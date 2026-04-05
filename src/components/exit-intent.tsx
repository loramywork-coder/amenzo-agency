"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    if (sessionStorage.getItem("exitShown")) return;
    if ("ontouchstart" in window) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10) {
        setShow(true);
        sessionStorage.setItem("exitShown", "true");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pathname]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setShow(false)}>
      <div className="relative bg-[#141414] border border-white/10 rounded-2xl p-10 max-w-md mx-6 text-center" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setShow(false)} className="absolute top-4 right-4 text-white/40 hover:text-white text-lg leading-none" aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <h3 className="text-2xl font-bold text-white mb-3 font-display">Before you go</h3>
        <p className="text-white/60 mb-6 text-sm leading-relaxed">
          See what we can build for your business. Browse our live demos — each one is a fully interactive website.
        </p>
        <a
          href="/work"
          className="inline-block px-8 py-3.5 bg-white text-[#0A0A0A] text-sm font-medium uppercase tracking-wide rounded-full hover:bg-white/90 transition"
        >
          View Our Work
        </a>
      </div>
    </div>
  );
}
