"use client";

import Link from "next/link";
import { AnimateIn } from "@/components/ui/motion";

export function AboutTeaser() {
  return (
    <section className="bg-transparent py-28 md:py-36">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-medium mb-6 text-center">
              About Amenzo
            </p>
            <h2 className="font-display text-[32px] md:text-[40px] font-bold text-text-primary tracking-[-0.02em] leading-[1.15] mb-10 text-center">
              Not an agency. A growth partner.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <div className="space-y-5 text-[17px] text-[#999] leading-[1.75]">
              <p>
                We build websites that convert visitors into customers.
                No templates. No page builders. Every line of code is
                written specifically for your business.
              </p>
              <p>
                A two-person studio that moves fast and builds right.
                Using cutting-edge technology and obsessive attention to detail,
                we deliver in weeks what traditional agencies take months to build.
              </p>
            </div>
            <div className="text-center mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/25 text-white/90 text-sm font-medium uppercase tracking-wide rounded-full hover:border-white hover:bg-white/5 transition-all duration-200"
              >
                Learn more about us
              </Link>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
