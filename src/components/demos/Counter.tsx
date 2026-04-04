"use client";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Counter({ target, prefix = "", suffix = "", className = "" }: {
  target: number; prefix?: string; suffix?: string; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 50, damping: 20 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) motionVal.set(target);
  }, [inView, target, motionVal]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v).toLocaleString()));
    return unsub;
  }, [spring]);

  return <span ref={ref} className={className}>{prefix}{display}{suffix}</span>;
}
