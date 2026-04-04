"use client";
import { useRef, useState } from "react";

export default function MagneticButton({ children, className = "", href }: {
  children: React.ReactNode; className?: string; href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: (e.clientX - rect.left - rect.width / 2) * 0.3, y: (e.clientY - rect.top - rect.height / 2) * 0.3 });
  };

  const inner = (
    <span className={className} style={{ display: "inline-block", transform: `translate(${pos.x}px, ${pos.y}px)`, transition: "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)" }}>
      {children}
    </span>
  );

  return (
    <div ref={ref} onMouseMove={handleMouse} onMouseLeave={() => setPos({ x: 0, y: 0 })} className="inline-block">
      {href ? <a href={href}>{inner}</a> : inner}
    </div>
  );
}
