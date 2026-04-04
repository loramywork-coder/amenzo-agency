"use client";

import { useEffect, useRef, useState } from "react";

export function VideoHeroBg({ src }: { src: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(0.45);

  useEffect(() => {
    // Try to play video (some browsers block autoplay)
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }

    const onScroll = () => {
      const y = window.scrollY;
      if (y < 600) {
        setOpacity(Math.max(0, 0.45 - (y / 600) * 0.45));
      } else {
        setOpacity(0);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="absolute inset-0 z-[0] transition-opacity duration-100"
      style={{ opacity }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.25) 40%, rgba(10,10,10,0.7) 75%, rgba(10,10,10,1) 95%)",
        }}
      />
    </div>
  );
}
