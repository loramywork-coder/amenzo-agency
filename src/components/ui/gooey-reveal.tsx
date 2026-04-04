"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GooeyRevealProps {
  text: string;
  className?: string;
  as?: "h2" | "h3" | "p" | "span";
  threshold?: number;
}

/**
 * Text that morphs in when scrolled into view and morphs out when scrolled back up.
 * Uses CSS blur + opacity + scale for a smooth deblur reveal effect.
 */
export function GooeyReveal({
  text,
  className,
  as: Tag = "h2",
  threshold = 0.15,
}: GooeyRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setHasAnimated(true);
        } else if (hasAnimated && entry.boundingClientRect.top > 0) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, hasAnimated]);

  return (
    <div ref={ref}>
      <Tag
        className={cn("will-change-[filter,opacity,transform]", className)}
        style={{
          filter: visible ? "blur(0px)" : "blur(10px)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(8px) scale(0.98)",
          transition: visible
            ? "filter 1.2s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 1s ease-out, transform 1s cubic-bezier(0.22, 0.61, 0.36, 1)"
            : "filter 0.5s ease-in, opacity 0.4s ease-in, transform 0.5s ease-in",
        }}
      >
        {text}
      </Tag>
    </div>
  );
}
