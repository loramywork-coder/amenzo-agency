"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { AnimateIn } from "@/components/ui/motion";
import { useLocale } from "@/lib/i18n/locale-context";
import type { TranslationKey } from "@/lib/i18n/dictionary";

const FAQ_ITEMS: ReadonlyArray<{ qKey: TranslationKey; aKey: TranslationKey }> = [
  { qKey: "faq.q1", aKey: "faq.a1" },
  { qKey: "faq.q2", aKey: "faq.a2" },
  { qKey: "faq.q3", aKey: "faq.a3" },
  { qKey: "faq.q4", aKey: "faq.a4" },
  { qKey: "faq.q5", aKey: "faq.a5" },
  { qKey: "faq.q6", aKey: "faq.a6" },
  { qKey: "faq.q7", aKey: "faq.a7" },
  { qKey: "faq.q8", aKey: "faq.a8" },
  { qKey: "faq.q9", aKey: "faq.a9" },
  { qKey: "faq.q10", aKey: "faq.a10" },
];

export function PricingFAQ() {
  const { t } = useLocale();
  return (
    <Accordion.Root type="multiple" className="space-y-3">
      {FAQ_ITEMS.map((item, index) => (
        <AnimateIn key={index} animation="fadeUp" delay={index * 0.05}>
          <Accordion.Item
            value={`item-${index}`}
            className="rounded-xl border border-border bg-surface-elevated overflow-hidden transition-colors duration-300 data-[state=open]:border-violet/30"
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200 hover:bg-surface cursor-pointer">
                <span className="font-display text-base font-medium text-text-primary pr-4 leading-snug">
                  {t(item.qKey)}
                </span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 text-text-muted transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-violet" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=open]:animate-[slideDown_200ms_ease-out] data-[state=closed]:animate-[slideUp_200ms_ease-out]">
              <div className="px-6 pb-5 text-text-secondary leading-relaxed text-sm">
                {t(item.aKey)}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </AnimateIn>
      ))}
    </Accordion.Root>
  );
}
