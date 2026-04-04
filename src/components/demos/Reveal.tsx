"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type RevealType = "fade" | "slide-up" | "slide-left" | "slide-right" | "scale" | "blur";

export default function Reveal({
  children, type = "slide-up", delay = 0, className = "", duration = 0.7
}: { children: ReactNode; type?: RevealType; delay?: number; className?: string; duration?: number }) {
  const variants = {
    "fade": { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    "slide-up": { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    "slide-left": { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
    "slide-right": { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
    "scale": { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
    "blur": { hidden: { opacity: 0, filter: "blur(10px)" }, visible: { opacity: 1, filter: "blur(0px)" } },
  };
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      variants={variants[type]} className={className}>
      {children}
    </motion.div>
  );
}
