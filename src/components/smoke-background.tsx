"use client";

import { usePathname } from "next/navigation";

export default function SmokeBackground() {
  const pathname = usePathname();
  if (pathname.startsWith("/demos") || pathname.startsWith("/showcases")) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Orb 1: large, slow, top-right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 800,
          height: 800,
          right: "-10%",
          top: "-20%",
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          filter: "blur(120px)",
          animation: "smoke-drift-1 60s ease-in-out infinite alternate",
        }}
      />
      {/* Orb 2: medium, centre-right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          right: "5%",
          top: "20%",
          background: "radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: "smoke-drift-2 80s ease-in-out infinite alternate",
        }}
      />
      {/* Orb 3: small accent, bottom */}
      <div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          right: "15%",
          top: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "smoke-drift-3 70s ease-in-out infinite alternate",
        }}
      />
      {/* Noise texture for organic feel */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.015,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "256px",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
