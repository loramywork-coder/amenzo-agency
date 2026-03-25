"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { AnimateIn } from "@/components/ui/motion";
import { SectionHeader } from "@/components/ui/section";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <SectionHeader
          caption="CLIENT LOVE"
          title="What Our Clients Say"
          align="center"
        />

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Quote icon */}
              <div className="mb-8 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet to-cyan flex items-center justify-center">
                  <Quote size={28} className="text-white" />
                </div>
              </div>

              {/* Quote text */}
              <blockquote className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-text-primary leading-relaxed mb-8 px-4">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-warning fill-warning"
                  />
                ))}
              </div>

              {/* Attribution */}
              <p className="text-text-primary font-medium">
                {testimonial.name}
              </p>
              <p className="text-text-muted text-sm">
                {testimonial.title}, {testimonial.company}
              </p>
              <p className="text-text-muted text-xs mt-1">
                {testimonial.location}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-violet/50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-violet w-6"
                      : "bg-border hover:bg-text-muted"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-violet/50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
