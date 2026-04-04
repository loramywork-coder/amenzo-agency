"use client";

import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "photo-1470723710355-95304d8aece4",
  "photo-1506794778202-cad84cf45f1d",
  "photo-1477959858617-67f85cf4f1df",
  "photo-1511818966892-d7d671e672a2",
  "photo-1531746020798-e6953c6e8e04",
  "photo-1514565131-fce0801e5785",
];

const QUOTE_TEXT =
  "Every frame tells a story that words alone could never capture";

export default function NoirPage() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const [visibleWords, setVisibleWords] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);

  // Word-by-word reveal on scroll
  useEffect(() => {
    const el = quoteRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ratio = entry.intersectionRatio;
            const words = QUOTE_TEXT.split(" ").length;
            setVisibleWords(Math.ceil(ratio * words));
          }
        });
      },
      { threshold: Array.from({ length: 20 }, (_, i) => i / 19) }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-scrolling film strip
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    let frame: number;
    let pos = 0;

    const scroll = () => {
      pos += 0.5;
      if (pos >= strip.scrollWidth / 2) pos = 0;
      strip.scrollLeft = pos;
      frame = requestAnimationFrame(scroll);
    };

    frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
  }, []);

  const words = QUOTE_TEXT.split(" ");

  return (
    <>
      <style>{`
        @keyframes grain-anim {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -15%); }
          40% { transform: translate(-5%, 15%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 10%); }
          80% { transform: translate(3%, 15%); }
          90% { transform: translate(-10%, 10%); }
        }

        .noir-grain {
          position: fixed;
          inset: -50%;
          width: 200%;
          height: 200%;
          pointer-events: none;
          z-index: 100;
          opacity: 0.04;
          animation: grain-anim 0.1s steps(1) infinite;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 256px 256px;
        }

        .noir-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%);
          pointer-events: none;
        }

        .noir-img {
          filter: grayscale(100%) contrast(1.3);
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .noir-img-inverted {
          filter: grayscale(100%) contrast(1.3) invert(1);
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .film-strip {
          overflow: hidden;
          white-space: nowrap;
        }

        .film-strip-inner {
          display: inline-flex;
          gap: 4px;
        }

        .film-frame {
          width: 120px;
          height: 80px;
          flex-shrink: 0;
          position: relative;
          border: 2px solid rgba(255,255,255,0.15);
          overflow: hidden;
        }

        .film-perf {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          z-index: 2;
        }

        .film-perf-hole {
          width: 6px;
          height: 4px;
          border-radius: 1px;
          background: rgba(0,0,0,0.8);
          border: 1px solid rgba(255,255,255,0.1);
        }

        @media (max-width: 640px) {
          .noir-title { font-size: 80px !important; }
          .noir-subtitle { font-size: 80px !important; }
        }
      `}</style>

      <div
        style={{
          background: "#000",
          color: "#fff",
          paddingTop: "4rem",
          paddingBottom: "5rem",
          minHeight: "100vh",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div className="noir-grain" />

        {/* Section 1: Title */}
        <section
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div className="noir-vignette" />
          <h1
            className="noir-title"
            style={{
              fontSize: 140,
              fontWeight: 900,
              letterSpacing: "0.15em",
              margin: 0,
              lineHeight: 1,
              textAlign: "center",
            }}
          >
            FILM
          </h1>
          <div
            style={{
              width: "60%",
              maxWidth: 400,
              height: 1,
              background: "rgba(255,255,255,0.4)",
              margin: "1.5rem 0",
            }}
          />
          <h2
            className="noir-subtitle"
            style={{
              fontSize: 140,
              fontWeight: 900,
              letterSpacing: "0.15em",
              margin: 0,
              lineHeight: 1,
              color: "rgba(255,255,255,0.2)",
              textAlign: "center",
            }}
          >
            NOIR
          </h2>
        </section>

        {/* Section 2: Images */}
        <section style={{ padding: "4rem 0" }}>
          {/* Full-width hero */}
          <div style={{ width: "100%", height: "70vh", overflow: "hidden" }}>
            <img
              className="noir-img"
              src={`https://images.unsplash.com/${IMAGES[0]}?w=1920&q=80`}
              alt=""
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Split row */}
          <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
            <div style={{ flex: 1, height: "50vh", overflow: "hidden" }}>
              <img
                className="noir-img"
                src={`https://images.unsplash.com/${IMAGES[1]}?w=960&q=80`}
                alt=""
                loading="lazy"
              />
            </div>
            <div style={{ flex: 1, height: "50vh", overflow: "hidden" }}>
              <img
                className="noir-img"
                src={`https://images.unsplash.com/${IMAGES[2]}?w=960&q=80`}
                alt=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Full-width */}
          <div
            style={{
              width: "100%",
              height: "60vh",
              overflow: "hidden",
              marginTop: 4,
            }}
          >
            <img
              className="noir-img"
              src={`https://images.unsplash.com/${IMAGES[3]}?w=1920&q=80`}
              alt=""
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Split row */}
          <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
            <div style={{ flex: 1, height: "50vh", overflow: "hidden" }}>
              <img
                className="noir-img"
                src={`https://images.unsplash.com/${IMAGES[4]}?w=960&q=80`}
                alt=""
                loading="lazy"
              />
            </div>
            <div style={{ flex: 1, height: "50vh", overflow: "hidden" }}>
              <img
                className="noir-img"
                src={`https://images.unsplash.com/${IMAGES[5]}?w=960&q=80`}
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Pull quote */}
        <section
          ref={quoteRef}
          style={{
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "6rem 2rem",
          }}
        >
          <blockquote
            style={{
              fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
              fontWeight: 300,
              fontStyle: "italic",
              textAlign: "center",
              maxWidth: 900,
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            {words.map((word, i) => (
              <span
                key={i}
                style={{
                  opacity: i < visibleWords ? 1 : 0.1,
                  transition: "opacity 0.4s ease",
                  marginRight: "0.3em",
                  display: "inline-block",
                }}
              >
                {word}
              </span>
            ))}
          </blockquote>
        </section>

        {/* Film strip */}
        <section style={{ padding: "2rem 0", overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 0,
              background: "rgba(255,255,255,0.03)",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              padding: "1rem 0",
              position: "relative",
            }}
          >
            {/* Perforation left */}
            <div className="film-perf" style={{ left: 0 }}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="film-perf-hole" />
              ))}
            </div>

            <div className="film-strip" ref={stripRef} style={{ flex: 1 }}>
              <div className="film-strip-inner">
                {/* Double the frames for seamless loop */}
                {[...IMAGES, ...IMAGES, ...IMAGES, ...IMAGES].map((id, i) => (
                  <div key={i} className="film-frame">
                    <img
                      className="noir-img-inverted"
                      src={`https://images.unsplash.com/${id}?w=240&q=60`}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Perforation right */}
            <div className="film-perf" style={{ right: 0 }}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="film-perf-hole" />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
