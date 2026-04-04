"use client";

import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/motion";
import { CONTACT_EMAIL } from "@/lib/constants";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0A]/40" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(600px circle at center, rgba(124,58,237,0.06) 0%, transparent 100%)",
        }}
      />

      <div className="relative container-wide text-center py-28 md:py-36">
        <AnimateIn>
          <h2 className="font-display text-[36px] sm:text-[42px] md:text-[48px] font-bold text-text-primary tracking-[-0.02em] leading-[1.08] mb-6 max-w-[700px] mx-auto">
            Let&apos;s build something{" "}
            <span className="gradient-text italic">worth talking about.</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="text-[18px] text-[#999] max-w-[480px] mx-auto mb-10 leading-relaxed">
            Free consultation. No strings. Just a conversation about what&apos;s possible.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <p className="text-[13px] text-text-muted italic mb-6">
            We take on a limited number of projects each month to maintain quality.
            Currently booking for{" "}
            {(() => { const d = new Date(); d.setMonth(d.getMonth() + 1); return d.toLocaleDateString("en-US", { month: "long", year: "numeric" }); })()}.
          </p>
          <Link
            href="/start-project"
            className="inline-block px-12 py-4 bg-white text-[#0A0A0A] text-[15px] font-medium uppercase tracking-wide rounded-full hover:bg-white/90 hover:scale-[1.02] transition-all duration-200"
          >
            Start a Project
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
