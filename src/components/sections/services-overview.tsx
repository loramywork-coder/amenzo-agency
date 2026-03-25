"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  ShoppingBag,
  Palette,
  Layers,
  TrendingUp,
  RefreshCw,
  Server,
  Compass,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  ShoppingBag,
  Palette,
  Layers,
  TrendingUp,
  RefreshCw,
  Server,
  Compass,
};

export function ServicesOverview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section>
      <SectionHeader
        caption="WHAT WE DO"
        title="End-to-End Digital Solutions"
        subtitle="From first sketch to final pixel — and everything after launch"
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon] || Monitor;
          const isOpen = openIndex === index;

          return (
            <StaggerItem key={service.slug}>
              <motion.div
                className="group bg-surface border border-border rounded-lg hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] overflow-hidden cursor-pointer"
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                layout
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-surface border border-border flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-violet" />
                      </div>
                      <div>
                        <h3 className="font-display text-[20px] font-semibold text-text-primary mb-2">
                          {service.title}
                        </h3>
                        <p className="text-[15px] text-text-secondary leading-relaxed">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 mt-1">
                      {isOpen ? (
                        <Minus
                          size={18}
                          className="text-text-muted"
                        />
                      ) : (
                        <Plus
                          size={18}
                          className="text-text-muted"
                        />
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t border-border">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 text-[10px] uppercase font-mono text-text-muted bg-bg rounded-full border border-border"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-text-muted">
                              From{" "}
                              <span className="text-text-primary font-semibold">
                                EUR {service.price}
                              </span>
                            </span>
                            <Link
                              href="/services"
                              className="inline-flex items-center gap-1 text-sm font-medium text-violet hover:text-cyan transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Learn More
                              <ArrowRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
