"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

export default function TextScramble({ text, className = "", speed = 30 }: {
  text: string; className?: string; speed?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(text.replace(/[^ ]/g, "\u00A0"));

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const interval = setInterval(() => {
      setDisplay(text.split("").map((char, i) => {
        if (char === " ") return " ";
        if (frame / 3 > i) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(""));
      frame++;
      if (frame / 3 > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [inView, text, speed]);

  return <span ref={ref} className={className}>{display}</span>;
}
