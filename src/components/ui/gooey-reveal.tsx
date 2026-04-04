"use client";

import * as React from "react";
import { useRef, useState, useEffect, useId } from "react";
import { cn } from "@/lib/utils";

interface GooeyRevealProps {
  text: string;
  className?: string;
  as?: "h2" | "h3" | "p" | "span";
  threshold?: number;
}

/**
 * Text that morphs in with a gooey blur effect when scrolled into view,
 * and morphs out when scrolled back up. Uses an SVG feColorMatrix filter
 * to create the gooey threshold effect during the blur transition.
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
  const rawId = useId();
  const filterId = `gooey${rawId.replace(/:/g, "")}`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setHasAnimated(true);
        } else if (hasAnimated) {
          if (entry.boundingClientRect.top > 0) {
            setVisible(false);
          }
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, hasAnimated]);

  return (
    <div ref={ref} className="relative">
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <filter id={filterId}>
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
      <div style={{ filter: `url(#${filterId})` }}>
        <Tag
          className={cn(
            "transition-all will-change-[filter,opacity,transform]",
            className
          )}
          style={{
            filter: visible ? "blur(0px)" : "blur(14px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transitionDuration: visible ? "1.4s" : "0.8s",
            transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)",
          }}
        >
          {text}
        </Tag>
      </div>
    </div>
  );
}
