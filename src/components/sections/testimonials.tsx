"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { AnimateIn } from "@/components/ui/motion";
import { SectionHeader } from "@/components/ui/section";
import { TESTIMONIALS } from "@/lib/constants";

const avatarColors = [
  "#7C3AED",
  "#06B6D4",
  "#EF4444",
  "#F59E0B",
  "#10B981",
  "#EC4899",
  "#3B82F6",
  "#F97316",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="section-padding bg-[#141414]">
      <div className="container-wide">
        <AnimateIn>
          <SectionHeader
            caption="TESTIMONIALS"
            title="Don't take our word for it."
            align="center"
          />
        </AnimateIn>

        <div
          className="relative max-w-[800px] mx-auto min-h-[360px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center w-full"
            >
              {/* Large decorative quote mark */}
              <div className="relative">
                <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[100px] leading-none gradient-text font-display opacity-20 select-none pointer-events-none">
                  &ldquo;
                </span>
              </div>

              {/* Quote text */}
              <blockquote className="font-body text-[22px] md:text-[24px] italic text-[#D0D0D0] leading-relaxed mb-10 px-4 max-w-[700px] mx-auto mt-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Avatar + Attribution */}
              <div className="flex flex-col items-center gap-3">
                {/* Avatar circle with initials */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-display text-[18px] font-bold"
                  style={{
                    backgroundColor:
                      avatarColors[current % avatarColors.length],
                  }}
                >
                  {getInitials(testimonial.name)}
                </div>

                <div>
                  <p className="text-[15px] font-display font-semibold text-[#F0F0F0]">
                    {testimonial.name}
                  </p>
                  <p className="text-[13px] text-[#888888] mt-0.5">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-violet w-6"
                  : "bg-[#1E1E1E] w-2 hover:bg-[#555555]"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
