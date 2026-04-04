"use client";

import { usePathname } from "next/navigation";

export default function GradientBlobs() {
  const pathname = usePathname();
  if (pathname.startsWith("/demos")) return null;

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Indigo/violet blob — top right */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          top: "5%",
          right: "10%",
          background:
            "radial-gradient(circle, rgba(109,91,247,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "blob-drift-1 25s ease-in-out infinite",
        }}
      />
      {/* Warm amber blob — bottom left */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          bottom: "10%",
          left: "5%",
          background:
            "radial-gradient(circle, rgba(184,146,62,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "blob-drift-2 30s ease-in-out infinite",
        }}
      />
      {/* Deep blue accent — centre */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          top: "40%",
          left: "45%",
          background:
            "radial-gradient(circle, rgba(59,50,150,0.04) 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: "blob-drift-3 20s ease-in-out infinite",
        }}
      />
    </div>
  );
}
