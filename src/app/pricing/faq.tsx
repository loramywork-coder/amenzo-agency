"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { AnimateIn } from "@/components/ui/motion";

const FAQ_ITEMS = [
  {
    question: "How much does a website cost?",
    answer:
      "Our packages start at EUR 750 for a basic 5-page website. A standard business website with custom design and 2 languages is EUR 2,000. Premium multilingual sites with advanced features are EUR 4,000. Complex projects like e-commerce platforms start from EUR 5,000. Every project gets a fixed quote — no hourly billing, no surprises.",
  },
  {
    question: "What's the difference between Basic and Standard?",
    answer:
      "Basic (EUR 750) is a clean, professional site built from content you provide. No demo, no design consultation — just fast, quality output. Standard (EUR 2,000) includes custom design, we help structure your content, you get a preview before launch, and 2 rounds of revisions. Standard is our most popular package.",
  },
  {
    question: "Do I get to see the site before it goes live?",
    answer:
      "For Basic: no — you provide content, we build, you review and approve. For Standard: yes, you get a preview link. For Premium and Custom: yes, plus dedicated revision rounds to refine everything before launch.",
  },
  {
    question: "Do you take a deposit?",
    answer:
      "For Basic (EUR 750): full payment on signing — it is a small, fast project. For Standard and above: 50% deposit on signing, 50% on launch.",
  },
  {
    question: "What about ongoing costs?",
    answer:
      "After launch, we offer optional hosting and maintenance (EUR 80/month) and priority support (EUR 200/month). You can choose one, both, or neither. If you choose no ongoing services, we hand over everything and you manage it yourself.",
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "Yes. If you start with Basic and want to add languages, a blog, or more pages later, we quote the additional work separately. Many clients start Basic and upgrade to Standard within 6 months.",
  },
  {
    question: "How do you compare to other agencies?",
    answer:
      "Most agencies typically charge EUR 775 to EUR 2,600 or more for similar work, often using WordPress templates. We build everything custom with modern technology (Next.js, React) — faster sites, better SEO, no plugin bloat. You get agency-quality output at competitive prices.",
  },
  {
    question: "Do I own the code and design files?",
    answer:
      "Absolutely. Once the project is paid in full, you own 100% of the code, design files, and all assets we create for you. We provide full access to the Git repository, Figma files, and any other deliverables. No lock-in, no proprietary systems, no hostage situations.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We build with Next.js, React, TypeScript, and Tailwind CSS, deployed on Vercel. For backend needs, we use Supabase, and for payments, Stripe. This modern stack ensures your site is fast, secure, accessible, and easy to maintain. No WordPress, no page builders, no technical debt.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "We work with clients across Europe, the UK, and beyond. All communication happens over video calls, Slack, and email. Our process is designed for remote collaboration, and timezone differences have never been an issue.",
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
