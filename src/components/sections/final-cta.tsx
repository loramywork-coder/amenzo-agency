"use client";

import { ArrowRight, Globe, ExternalLink, Palette } from "lucide-react";
import { AnimateIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-bg" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="relative container-wide text-center py-24 md:py-32">
        <AnimateIn>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 max-w-4xl mx-auto leading-tight">
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
          <p className="mt-8 text-text-muted text-sm">
            Or email us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-text-secondary hover:text-violet transition-colors underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </AnimateIn>

        <AnimateIn delay={0.5}>
          <div className="flex items-center justify-center gap-4 mt-8">
            {[
              { icon: Globe, label: "Instagram" },
              { icon: ExternalLink, label: "LinkedIn" },
              { icon: Palette, label: "Dribbble" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-text-primary hover:border-violet/50 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
