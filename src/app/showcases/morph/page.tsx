"use client";

import { useState, useCallback, useEffect, useRef } from "react";

const SHAPES = [
  "40% 60% 60% 40% / 60% 30% 70% 40%",
  "60% 40% 30% 70% / 40% 60% 70% 30%",
  "30% 60% 70% 40% / 50% 60% 30% 60%",
  "70% 30% 50% 50% / 30% 50% 70% 40%",
  "50% 40% 60% 50% / 40% 50% 60% 50%",
] as const;

export default function MorphPage() {
  const [shaking, setShaking] = useState(false);
  const [activeShape, setActiveShape] = useState<number | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const blobRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    setShaking(true);
    setTimeout(() => setShaking(false), 300);
  }, []);

  const handleThumbnailClick = useCallback((index: number) => {
    setActiveShape(index);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setMouse({
        x: (e.clientX - cx) * 0.05,
        y: (e.clientY - cy) * 0.05,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollTop = containerRef.current.scrollTop;
      setScrolled(scrollTop > 100);
    };
    const el = containerRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const blobTranslate = `translate(${mouse.x}px, ${mouse.y}px)`;
  const blobStyle: React.CSSProperties = {
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, #3b82f6 0%, #4c1d95 40%, #0a0a2e 100%)",
    boxShadow: "0 0 80px rgba(59,130,246,0.3), 0 0 160px rgba(59,130,246,0.1)",
    transition: "transform 0.5s ease-out, border-radius 0.8s ease-in-out",
    transform: blobTranslate,
    cursor: "pointer",
    ...(activeShape !== null
      ? { borderRadius: SHAPES[activeShape], animation: shaking ? "shake 0.3s ease-in-out" : "none" }
      : {
          animation: shaking
            ? "morph 20s ease-in-out infinite, shake 0.3s ease-in-out"
            : scrolled
              ? "none"
              : "morph 20s ease-in-out infinite",
        }),
  };

  return (
    <>
      <style>{`
        @keyframes morph {
          0%   { border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%; }
          20%  { border-radius: 60% 40% 30% 70% / 40% 60% 70% 30%; }
          40%  { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          60%  { border-radius: 70% 30% 50% 50% / 30% 50% 70% 40%; }
          80%  { border-radius: 50% 40% 60% 50% / 40% 50% 60% 50%; }
          100% { border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%; }
        }

        @keyframes shake {
          0%, 100% { transform: translate(0, 0) scale(1); }
          10%  { transform: translate(-8px, 4px) scale(1.02); }
          20%  { transform: translate(6px, -6px) scale(0.98); }
          30%  { transform: translate(-4px, 8px) scale(1.01); }
          40%  { transform: translate(8px, -2px) scale(0.99); }
          50%  { transform: translate(-6px, -4px) scale(1.03); }
          60%  { transform: translate(4px, 6px) scale(0.97); }
          70%  { transform: translate(-8px, -8px) scale(1.02); }
          80%  { transform: translate(6px, 4px) scale(0.98); }
          90%  { transform: translate(-2px, -6px) scale(1.01); }
        }

        @keyframes grain-shift {
          0%, 100% { transform: translate(0, 0); }
          10%  { transform: translate(-5%, -10%); }
          30%  { transform: translate(3%, -15%); }
          50%  { transform: translate(12%, 9%); }
          70%  { transform: translate(9%, 4%); }
          90%  { transform: translate(-1%, 7%); }
        }

        .morph-grain-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 50;
          opacity: 0.03;
          animation: grain-shift 0.5s steps(4) infinite;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 256px 256px;
        }

        .morph-blob-container {
          width: 400px;
          height: 400px;
        }

        .morph-thumbnail {
          width: 40px;
          height: 40px;
          background: radial-gradient(circle, #3b82f6 0%, #4c1d95 40%, #0a0a2e 100%);
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          flex-shrink: 0;
        }

        .morph-thumbnail:hover {
          transform: scale(1.15);
          box-shadow: 0 0 20px rgba(59,130,246,0.4);
        }

        .morph-thumbnail-active {
          box-shadow: 0 0 0 2px #020202, 0 0 0 4px rgba(255,255,255,0.9), 0 0 20px rgba(59,130,246,0.4);
        }

        .morph-sequence-shape {
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, #3b82f6 0%, #4c1d95 40%, #0a0a2e 100%);
          box-shadow: 0 0 30px rgba(59,130,246,0.15);
          flex-shrink: 0;
        }

        .morph-sequence-arrow {
          color: rgba(255,255,255,0.15);
          font-size: 24px;
          flex-shrink: 0;
          user-select: none;
        }

        @media (max-width: 640px) {
          .morph-blob-container {
            width: 300px;
            height: 300px;
          }

          .morph-sequence-shape {
            width: 56px;
            height: 56px;
          }

          .morph-sequence-arrow {
            font-size: 16px;
          }
        }
      `}</style>

      <div
        ref={containerRef}
        className="w-full h-screen overflow-y-auto"
        style={{ background: "#020202" }}
      >
        {/* Grain overlay */}
        <div className="morph-grain-overlay" />

        {/* Hero section */}
        <div
          className="relative flex flex-col items-center justify-center"
          style={{
            minHeight: "100vh",
            paddingTop: "4rem",
            paddingBottom: "5rem",
            background: "radial-gradient(ellipse at center, rgba(10,10,46,0.4) 0%, transparent 70%)",
          }}
        >
          {/* Blob */}
          <div className="morph-blob-container" style={{ position: "relative", zIndex: 10 }}>
            <div
              ref={blobRef}
              className="w-full h-full"
              style={blobStyle}
              onClick={handleClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleClick();
              }}
              aria-label="Click to shake the blob"
            />
          </div>

          {/* Thumbnails */}
          <div
            className="flex items-center gap-4 mt-10"
            style={{ position: "relative", zIndex: 10 }}
          >
            {SHAPES.map((shape, i) => (
              <button
                key={i}
                className={`morph-thumbnail ${activeShape === i ? "morph-thumbnail-active" : ""}`}
                style={{ borderRadius: shape, border: "none" }}
                onClick={() => handleThumbnailClick(i)}
                aria-label={`Morph to shape ${i + 1}`}
              />
            ))}
          </div>

          {/* Text - bottom left */}
          <div
            style={{
              position: "absolute",
              bottom: "5rem",
              left: "2rem",
              zIndex: 20,
            }}
          >
            <h1
              className="text-4xl md:text-5xl font-bold text-white"
              style={{
                letterSpacing: "0.15em",
                lineHeight: 1,
                margin: 0,
              }}
            >
              METAMORPHOSIS
            </h1>
            <p
              className="text-[10px] mt-2"
              style={{ color: "rgba(255,255,255,0.2)", margin: 0 }}
            >
              SVG path morphing &middot; Bezier interpolation &middot; Organic motion
            </p>
          </div>
        </div>

        {/* Scroll section */}
        <div className="pt-16 pb-20 px-6 md:px-16" style={{ position: "relative", zIndex: 10 }}>
          {/* Sequence diagram */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2
              className="text-xl md:text-2xl font-semibold text-white mb-2"
              style={{ letterSpacing: "0.05em" }}
            >
              Shape Sequence
            </h2>
            <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.3)" }}>
              The five keyframe states that define the morphing cycle
            </p>

            <div className="flex items-center justify-center gap-3 md:gap-5 flex-wrap">
              {SHAPES.map((shape, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-5">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="morph-sequence-shape"
                      style={{ borderRadius: shape }}
                    />
                    <span
                      className="text-[10px] font-mono"
                      style={{ color: "rgba(255,255,255,0.25)" }}
                    >
                      {i * 20}%
                    </span>
                  </div>
                  {i < SHAPES.length - 1 && (
                    <span className="morph-sequence-arrow">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technique explanation */}
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-xl md:text-2xl font-semibold text-white mb-4"
              style={{ letterSpacing: "0.05em" }}
            >
              How It Works
            </h2>

            <div className="space-y-6">
              <div>
                <h3
                  className="text-sm font-semibold mb-1"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Border-Radius Morphing
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
                  CSS border-radius accepts 8 values separated by a slash, defining the horizontal
                  and vertical radii of each corner independently. By animating between different
                  8-value configurations, we create fluid organic shapes without any SVG or canvas.
                </p>
              </div>

              <div>
                <h3
                  className="text-sm font-semibold mb-1"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Cursor Tracking
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
                  The blob follows the cursor with a subtle parallax effect. Mouse position is
                  captured relative to the viewport center, then multiplied by a dampening factor
                  of 0.05. A CSS transition of 0.5s ease-out smooths the movement, creating a
                  floating, magnetic feel.
                </p>
              </div>

              <div>
                <h3
                  className="text-sm font-semibold mb-1"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Click Reaction
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Clicking the blob triggers a 300ms shake animation that rapidly oscillates
                  position and scale. The animation uses 10 keyframe steps with alternating
                  positive and negative transforms to simulate an elastic impact response.
                </p>
              </div>

              <div>
                <h3
                  className="text-sm font-semibold mb-1"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Gradient and Glow
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
                  The blob uses a radial gradient from bright blue through deep purple to near-black,
                  creating depth. A dual-layer box-shadow produces the glow: an 80px close glow at
                  30% opacity and a 160px ambient glow at 10%, simulating subsurface scattering.
                </p>
              </div>

              <div>
                <h3
                  className="text-sm font-semibold mb-1"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Film Grain
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
                  A full-screen overlay uses an inline SVG noise filter rendered as a CSS
                  background-image. The grain shifts position via a stepped keyframe animation,
                  creating the organic texture of analog film at just 3% opacity.
                </p>
              </div>
            </div>
          </div>

          {/* Code snippet */}
          <div className="max-w-2xl mx-auto mt-14">
            <h3
              className="text-sm font-semibold mb-3"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Keyframe Definition
            </h3>
            <pre
              className="text-xs leading-relaxed p-5 rounded-lg overflow-x-auto"
              style={{
                background: "rgba(255,255,255,0.03)",
                color: "rgba(255,255,255,0.35)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
{`@keyframes morph {
  0%   { border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%; }
  20%  { border-radius: 60% 40% 30% 70% / 40% 60% 70% 30%; }
  40%  { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  60%  { border-radius: 70% 30% 50% 50% / 30% 50% 70% 40%; }
  80%  { border-radius: 50% 40% 60% 50% / 40% 50% 60% 50%; }
  100% { border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%; }
}`}
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
