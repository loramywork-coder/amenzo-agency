"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { AnimateIn } from "@/components/ui/motion";

const FAQ_ITEMS = [
  {
    question: "How does the pricing work? Are there any hidden fees?",
    answer:
      "Our pricing is completely transparent. The price you see is the price you pay. All tiers include design, development, and launch. The only additional costs would be optional add-ons that you choose, third-party services like premium stock photography, or domain registration. We will never surprise you with hidden charges.",
  },
  {
    question: "What is your payment structure?",
    answer:
      "We require a 50% deposit to begin work, with the remaining 50% due upon delivery before the site goes live. For projects over EUR 3,000, we offer payment plans split into three milestones: 40% to start, 30% at design approval, and 30% at launch. Enterprise projects have custom payment terms.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on the tier and scope. Starter projects typically take 2 weeks, Professional projects 3 weeks, and Premium projects 3-4 weeks. Enterprise projects are scoped individually. These timelines assume prompt feedback from your side. We will agree on a detailed timeline before starting.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "Every tier includes post-launch support (30 days to 12 months depending on tier). During this period, we handle bug fixes and minor content updates at no extra cost. For ongoing changes beyond the support period, we offer maintenance packages starting at EUR 80 per month. Larger feature additions are quoted separately.",
  },
  {
    question: "Do I own the code and design files?",
    answer:
      "Absolutely. Once the project is paid in full, you own 100% of the code, design files, and all assets we create for you. We provide full access to the Git repository, Figma files, and any other deliverables. No lock-in, no proprietary systems, no hostage situations.",
  },
  {
    question: "Can I switch tiers or upgrade mid-project?",
    answer:
      "Yes. If your needs evolve during the project, we can adjust the scope and pricing accordingly. We will provide a clear change order outlining the additional work, cost difference, and any impact on the timeline. You will never be locked into a tier that no longer fits.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We build with Next.js, React, TypeScript, and Tailwind CSS, deployed on Vercel. For backend needs, we use Supabase, and for payments, Stripe. This modern stack ensures your site is fast, secure, accessible, and easy to maintain. No WordPress, no page builders, no technical debt.",
  },
  {
    question: "Do you work with clients outside Malta?",
    answer:
      "Absolutely. While we are based in Malta, we work with clients across Europe, the UK, and beyond. All communication happens over video calls, Slack, and email. Our process is designed for remote collaboration, and timezone differences have never been an issue.",
  },
  {
    question: "What if I am not happy with the design?",
    answer:
      "We work closely with you throughout the design process to ensure alignment. Each tier includes revision rounds (1 for Starter, 3 for Professional, unlimited for Premium and Enterprise). If after revisions you are still not satisfied, we will work with you until we get it right. Our goal is your success.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "If we have not started design work, we offer a full refund of your deposit. Once design work has begun, the deposit is non-refundable as it covers the discovery and design phase. However, in our entire history, we have never had a client request a refund, and we intend to keep it that way.",
  },
] as const;

export function PricingFAQ() {
  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {FAQ_ITEMS.map((item, index) => (
        <AnimateIn key={index} animation="fadeUp" delay={index * 0.05}>
          <Accordion.Item
            value={`item-${index}`}
            className="rounded-xl border border-border bg-surface-elevated overflow-hidden transition-colors duration-300 data-[state=open]:border-violet/30"
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200 hover:bg-surface cursor-pointer">
                <span className="font-display text-base font-medium text-text-primary pr-4 leading-snug">
                  {item.question}
                </span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 text-text-muted transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-violet" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=open]:animate-[slideDown_200ms_ease-out] data-[state=closed]:animate-[slideUp_200ms_ease-out]">
              <div className="px-6 pb-5 text-text-secondary leading-relaxed text-sm">
                {item.answer}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </AnimateIn>
      ))}
    </Accordion.Root>
  );
}
