import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { ArrowRight, Check, Minus, HelpCircle } from "lucide-react";
import { PricingFAQ } from "./faq";

export const metadata: Metadata = {
  title: "Pricing — Transparent Investment, Real Results",
  description:
    "Transparent pricing from AMENZO. Four tiers from EUR 1,500 to enterprise. No hidden fees, no hourly billing. You pay for results.",
  openGraph: {
    title: `Pricing | ${SITE_NAME}`,
    description:
      "Transparent pricing. Four tiers from EUR 1,500 to enterprise. No hidden fees, no hourly billing.",
  },
};

const TIERS = [
  {
    name: "Starter",
    price: "1,500",
    period: "one-time",
    description:
      "Perfect for small businesses and startups that need a professional web presence without the enterprise price tag.",
    features: [
      { text: "Up to 5 custom pages", included: true },
      { text: "Responsive mobile design", included: true },
      { text: "Basic SEO setup", included: true },
      { text: "Contact form integration", included: true },
      { text: "Google Analytics setup", included: true },
      { text: "1 round of revisions", included: true },
      { text: "2-week delivery", included: true },
      { text: "30 days post-launch support", included: true },
      { text: "CMS integration", included: false },
      { text: "E-commerce functionality", included: false },
      { text: "Custom animations", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "5,000",
    period: "one-time",
    description:
      "Our most popular tier. For businesses ready to invest in a website that actively drives growth and outperforms the competition.",
    features: [
      { text: "Up to 15 custom pages", included: true },
      { text: "Responsive mobile design", included: true },
      { text: "Advanced SEO and schema markup", included: true },
      { text: "CMS integration (headless)", included: true },
      { text: "Custom animations and interactions", included: true },
      { text: "Performance optimisation (95+ Lighthouse)", included: true },
      { text: "Analytics dashboard setup", included: true },
      { text: "3 rounds of revisions", included: true },
      { text: "3-week delivery", included: true },
      { text: "90 days post-launch support", included: true },
      { text: "Blog or news section", included: true },
      { text: "Lead capture and CRM integration", included: true },
    ],
    cta: "Start a Project",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "10,000",
    period: "one-time",
    description:
      "For established brands that demand the best. Full-service design, development, and strategy with white-glove treatment.",
    features: [
      { text: "Unlimited custom pages", included: true },
      { text: "Bespoke UI/UX design process", included: true },
      { text: "Full branding package included", included: true },
      { text: "Advanced CMS with custom fields", included: true },
      { text: "E-commerce ready (up to 100 products)", included: true },
      { text: "Custom animations and micro-interactions", included: true },
      { text: "Multi-language support", included: true },
      { text: "A/B testing setup", included: true },
      { text: "Unlimited revisions", included: true },
      { text: "3-4 week delivery", included: true },
      { text: "6 months post-launch support", included: true },
      { text: "Monthly performance reports", included: true },
    ],
    cta: "Start a Project",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "15,000+",
    period: "custom",
    description:
      "For complex projects that need a tailored approach. Web applications, large-scale e-commerce, and multi-site platforms.",
    features: [
      { text: "Everything in Premium", included: true },
      { text: "Custom web application development", included: true },
      { text: "Advanced API integrations", included: true },
      { text: "Authentication and user management", included: true },
      { text: "Real-time features and dashboards", included: true },
      { text: "Scalable database architecture", included: true },
      { text: "CI/CD pipeline and staging environment", included: true },
      { text: "Dedicated project manager", included: true },
      { text: "Custom SLA and response times", included: true },
      { text: "12 months post-launch support", included: true },
      { text: "Quarterly strategy reviews", included: true },
      { text: "Team training and documentation", included: true },
    ],
    cta: "Contact Us",
    highlighted: false,
  },
] as const;

const ADD_ONS = [
  {
    name: "Logo & Brand Identity",
    price: "800",
    description: "Professional logo, colour palette, typography, and brand guidelines document.",
  },
  {
    name: "Copywriting",
    price: "500",
    description: "Professional website copy for up to 10 pages, SEO-optimised and on-brand.",
  },
  {
    name: "Photography Direction",
    price: "400",
    description: "Art direction for a professional photo shoot, including moodboard and shot list.",
  },
  {
    name: "Monthly SEO Package",
    price: "500/mo",
    description: "Ongoing technical SEO, keyword tracking, monthly reports, and content recommendations.",
  },
  {
    name: "Hosting & Maintenance",
    price: "80/mo",
    description: "Managed hosting, daily backups, security monitoring, and monthly dependency updates.",
  },
  {
    name: "Priority Support",
    price: "200/mo",
    description: "4-hour response time, dedicated Slack channel, and priority bug fixes.",
  },
] as const;

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-bg overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.08),transparent_60%)]" />
        <div className="container-wide relative z-10 pt-40 pb-24">
          <AnimateIn animation="fadeIn" delay={0.1}>
            <p className="caption mb-6 text-violet">Pricing</p>
          </AnimateIn>
          <TextReveal>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-[0.95]">
              Investment,
            </h1>
          </TextReveal>
          <TextReveal delay={0.15}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mt-2">
              <span className="gradient-text">Not Cost</span>
            </h1>
          </TextReveal>
          <AnimateIn animation="fadeUp" delay={0.4}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed">
              Transparent pricing. No hidden fees. No hourly billing. You pay for
              results, and you know exactly what you are getting before we write a
              single line of code.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Pricing Tiers */}
      <Section>
        <StaggerContainer
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {TIERS.map((tier) => (
            <StaggerItem key={tier.name}>
              <div
                className={`relative flex flex-col h-full rounded-2xl border p-8 transition-all duration-500 ${
                  tier.highlighted
                    ? "border-violet bg-surface-elevated shadow-xl shadow-violet/10 scale-[1.02] lg:scale-105"
                    : "border-border bg-surface hover:border-violet/30"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet to-cyan text-white text-xs font-semibold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-display text-xl font-semibold text-text-primary mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-sm text-text-muted">&euro;</span>
                    <span className="font-display text-4xl md:text-5xl font-bold text-text-primary">
                      {tier.price}
                    </span>
                    {tier.period === "one-time" && (
                      <span className="text-sm text-text-muted ml-1">
                        one-time
                      </span>
                    )}
                    {tier.period === "custom" && (
                      <span className="text-sm text-text-muted ml-1">
                        custom
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-violet/10 flex items-center justify-center">
                          <Check className="w-3 h-3 text-violet" />
                        </div>
                      ) : (
                        <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-surface-elevated flex items-center justify-center">
                          <Minus className="w-3 h-3 text-text-muted" />
                        </div>
                      )}
                      <span
                        className={`text-sm leading-relaxed ${
                          feature.included
                            ? "text-text-secondary"
                            : "text-text-muted"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  href={
                    tier.name === "Enterprise"
                      ? `/contact`
                      : "/start-project"
                  }
                  variant={tier.highlighted ? "primary" : "secondary"}
                  className="w-full justify-center"
                  magnetic
                >
                  {tier.cta} <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn animation="fadeUp" delay={0.3}>
          <p className="text-center text-text-muted text-sm mt-10 max-w-2xl mx-auto">
            All prices are in EUR and exclude VAT where applicable. Payment plans
            available on projects over &euro;3,000. 50% deposit required to begin
            work, balance due on delivery.
          </p>
        </AnimateIn>
      </Section>

      {/* Add-ons */}
      <Section className="bg-surface">
        <AnimateIn animation="fadeUp">
          <SectionHeader
            caption="Add-Ons"
            title="Enhance Your Package"
            subtitle="Mix and match these add-ons with any tier to build exactly the solution your business needs."
            align="center"
          />
        </AnimateIn>
        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {ADD_ONS.map((addon) => (
            <StaggerItem key={addon.name}>
              <div className="rounded-2xl border border-border bg-surface-elevated p-6 md:p-8 transition-all duration-300 hover:border-violet/30 h-full flex flex-col">
                <h3 className="font-display text-lg font-semibold text-text-primary mb-1">
                  {addon.name}
                </h3>
                <p className="text-violet font-semibold text-lg mb-3">
                  &euro;{addon.price}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  {addon.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* FAQ */}
      <Section>
        <AnimateIn animation="fadeUp">
          <SectionHeader
            caption="FAQ"
            title="Common Questions"
            subtitle="Everything you need to know about working with us. If your question is not here, just ask."
            align="center"
          />
        </AnimateIn>
        <div className="max-w-3xl mx-auto">
          <PricingFAQ />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-surface">
        <div className="text-center max-w-3xl mx-auto">
          <AnimateIn animation="fadeUp">
            <p className="caption mb-4 text-violet">Ready to Invest in Growth?</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
              Let&apos;s Build Your{" "}
              <span className="gradient-text">Competitive Edge</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed">
              Every day without a high-performing website is a day your
              competitors are winning customers that should be yours. Let us
              change that.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/start-project" size="lg" magnetic>
                Start a Project <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                href={`mailto:${CONTACT_EMAIL}`}
                variant="secondary"
                size="lg"
              >
                Ask a Question
              </Button>
            </div>
          </AnimateIn>
        </div>
      </Section>
    </>
  );
}
