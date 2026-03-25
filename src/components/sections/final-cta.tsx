"use client";

import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-bg" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(400px circle at center, rgba(124,58,237,0.05) 0%, transparent 100%)",
        }}
      />

      <div className="relative container-wide text-center py-24 md:py-32">
        <AnimateIn>
          <h2 className="font-display text-[48px] font-bold text-text-primary tracking-[-0.02em] leading-[1.08] mb-6 max-w-4xl mx-auto">
            Ready to Build Something{" "}
            <span className="gradient-text">Extraordinary?</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Let&apos;s talk about your project. First consultation is
            free.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <Button href="/start-project" size="lg" magnetic>
            Start a Project
            <ArrowRight size={18} />
          </Button>
        </AnimateIn>

        <AnimateIn delay={0.4}>
          <p className="mt-8 text-[14px] text-text-muted">
            Or email us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-text-muted hover:underline hover:text-text-secondary transition-colors underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </AnimateIn>

      </div>
    </section>
  );
}
