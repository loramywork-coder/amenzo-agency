"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/motion";

export function AboutTeaser() {
  return (
    <section className="bg-[#0F0F0F] section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimateIn animation="slideLeft">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Amenzo team collaborating on a project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient fade on right edge */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0F0F0F]/30" />
            </div>
          </AnimateIn>

          {/* Text */}
          <AnimateIn animation="slideRight" delay={0.2}>
            <div className="max-w-[480px]">
              <p className="text-[11px] uppercase tracking-[0.2em] gradient-text font-medium mb-6">
                About Amenzo
              </p>
              <h2 className="font-display text-[32px] md:text-[36px] font-bold text-text-primary tracking-[-0.02em] leading-[1.15] mb-8">
                We don&apos;t build websites. We build competitive advantages.
              </h2>
              <div className="space-y-5 text-[17px] text-[#B0B0B0] leading-[1.7]">
                <p>
                  Amenzo is a premium digital agency based in Malta. We design
                  and develop custom websites that transform how businesses
                  connect with their customers.
                </p>
                <p>
                  We work with hotels, restaurants, startups, enterprises, and
                  everything in between. No templates. No themes. Every pixel
                  is hand-crafted.
                </p>
                <p>
                  Using cutting-edge technology and obsessive attention to
                  detail, we deliver in weeks what traditional agencies take
                  months to build.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-[13px] font-display font-semibold gradient-text link-underline"
              >
                Learn more about us
                <ArrowRight size={14} />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
