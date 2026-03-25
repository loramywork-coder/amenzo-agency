"use client";

import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/motion";
import { CONTACT_EMAIL } from "@/lib/constants";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(600px circle at center, rgba(124,58,237,0.06) 0%, transparent 100%)",
        }}
      />

      <div className="relative container-wide text-center py-28 md:py-36">
        <AnimateIn>
          <h2 className="font-display text-[36px] sm:text-[42px] md:text-[48px] font-bold text-text-primary tracking-[-0.02em] leading-[1.08] mb-6 max-w-[700px] mx-auto">
            Ready to Build Something{" "}
            <span className="gradient-text italic">Extraordinary?</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="text-[18px] text-[#999] max-w-[480px] mx-auto mb-10 leading-relaxed">
            Let&apos;s talk about your project. First consultation is free
            and always will be.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <Link
            href="/start-project"
            className="inline-flex items-center gap-2 px-14 py-5 text-white text-[15px] uppercase tracking-[0.12em] font-bold transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.3)]"
            style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
          >
            Start a Project
            <ArrowRight size={16} />
          </Link>
        </AnimateIn>

        <AnimateIn delay={0.4}>
          <p className="mt-8 text-[14px] text-text-muted">
            Or email us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-text-secondary hover:text-text-primary transition-colors underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
