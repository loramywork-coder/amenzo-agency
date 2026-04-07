import { generatePageMeta } from "@/lib/seo";
import { FAQSchema, BreadcrumbSchema, faqData } from "@/components/structured-data";
import { CONTACT_EMAIL } from "@/lib/constants";
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


export const metadata = generatePageMeta({
  title: "Web Design Pricing — Transparent Packages from €750",
  description: "Transparent web design pricing. Startup Launch €750, Basic €1,000, Standard €2,000 (bilingual), Premium €4,000, Custom from €5,000+. Built with Next.js. No templates.",
  path: "/pricing",
});

const TIERS = [
  {
    name: "Startup Launch",
    price: "750",
    period: "one-time",
    description:
      "Launch-ready in 10 days. Custom-built, fully responsive, and built on the same stack we use for every client. Because every great company starts with a great website.",
    features: [
      { text: "1-5 page website", included: true },
      { text: "Custom design (no templates)", included: true },
      { text: "Mobile responsive, Lighthouse 90+", included: true },
      { text: "Basic SEO setup", included: true },
      { text: "Deployed on Vercel", included: true },
      { text: "Delivered in 10 days", included: true },
    ],
    cta: "Start a Project",
    ctaHref: "/start-project",
    highlighted: false,
    badge: "For Founders",
    footnote: "Amenzo backlink in footer · 1 public review required",
  },
  {
    name: "Basic",
    price: "1,000",
    period: "one-time",
    description:
      "A clean, professional website built from your content. You provide the text, images, and logo — we handle everything else.",
    features: [
      { text: "Everything in Startup Launch, plus:", included: true },
      { text: "Contact form with email delivery", included: true },
      { text: "SSL certificate and hosting setup", included: true },
      { text: "Google Analytics configuration", included: true },
      { text: "1-2 week delivery", included: true },
    ],
    cta: "Start a Project",
    ctaHref: "/start-project",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "2,000",
    period: "one-time",
    description:
      "A custom-designed website that stands out from your competitors. We help structure your content and deliver in 2-3 weeks.",
    features: [
      { text: "Everything in Basic, plus:", included: true },
      { text: "5-10 custom responsive pages", included: true },
      { text: "Full SEO setup (meta, schema, sitemap)", included: true },
      { text: "2 languages included", included: true },
      { text: "Blog or news section", included: true },
      { text: "Preview link + 2 revision rounds", included: true },
      { text: "2-3 week delivery", included: true },
    ],
    cta: "Start a Project",
    ctaHref: "/start-project",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "4,000",
    period: "one-time",
    description:
      "A premium website with advanced features, multilingual support, and polished animations. Built for competitive advantage.",
    features: [
      { text: "Everything in Standard, plus:", included: true },
      { text: "10-20 custom pages", included: true },
      { text: "Premium design with animations", included: true },
      { text: "3+ languages", included: true },
      { text: "Galleries, booking forms, donations", included: true },
      { text: "Lighthouse score 95+ guaranteed", included: true },
      { text: "3-4 week delivery", included: true },
    ],
    cta: "Start a Project",
    ctaHref: "/start-project",
    highlighted: false,
  },
  {
    name: "Custom",
    price: "5,000",
    period: "custom",
    priceNote: "+",
    description:
      "For complex projects. E-commerce, marketplace platforms, custom integrations — scoped and priced to your exact requirements.",
    features: [
      { text: "Everything in Premium, plus:", included: true },
      { text: "Unlimited pages, fully bespoke", included: true },
      { text: "E-commerce with Stripe / PayPal", included: true },
      { text: "Custom integrations and APIs", included: true },
      { text: "Priority support during build", included: true },
      { text: "4-6 week delivery", included: true },
    ],
    cta: "Start a Project",
    ctaHref: "/start-project",
    highlighted: false,
  },
] as const;

const ADD_ONS = [
  {
    name: "Additional Language",
    price: "250",
    description: "Add an extra language to your website.",
  },
  {
    name: "Logo & Branding",
    price: "800",
    description:
      "Professional logo, colour palette, typography, and brand guidelines.",
  },
  {
    name: "Copywriting (per page)",
    price: "100",
    description: "Professional website copy, SEO-optimised and on-brand.",
  },
  {
    name: "Monthly SEO",
    price: "300/mo",
    description:
      "Ongoing technical SEO, keyword tracking, monthly reports.",
  },
  {
    name: "Hosting & Maintenance",
    price: "80/mo",
    description:
      "Managed hosting, SSL, backups, monitoring, updates, bug fixes.",
  },
  {
    name: "Priority Support",
    price: "200/mo",
    description:
      "Weekly content updates (~8hrs/month), 12hr response, quarterly review.",
  },
] as const;

const MONTHLY_SERVICES = [
  {
    name: "Hosting & Maintenance",
    price: "80",
    period: "mo",
    description:
      "Managed hosting, SSL certificates, daily backups, uptime monitoring, dependency updates, and bug fixes. Everything you need to keep your site fast, secure, and online.",
  },
  {
    name: "Priority Support",
    price: "200",
    period: "mo",
    description:
      "Weekly content updates (approximately 8 hours per month), 12-hour response time, and a quarterly strategy review. Perfect for businesses that need ongoing changes without the overhead of a full-time developer.",
  },
] as const;

const COMPARISON_ROWS = [
  { label: "Price", startup: "€750", basic: "€1,000", standard: "€2,000", premium: "€4,000", custom: "From €5,000+" },
  { label: "Pages", startup: "1-5", basic: "1-5", standard: "5-10", premium: "10-20", custom: "Unlimited" },
  { label: "Delivery", startup: "10 days", basic: "1-2 weeks", standard: "2-3 weeks", premium: "3-4 weeks", custom: "4-6 weeks" },
  { label: "Design", startup: "Custom", basic: "Clean & responsive", standard: "Custom branded", premium: "Premium + animations", custom: "Fully bespoke" },
  { label: "Languages", startup: "1", basic: "1", standard: "2", premium: "3+", custom: "Unlimited" },
  { label: "SEO", startup: "Basic", basic: "Basic", standard: "Full", premium: "Full + schema", custom: "Full + advanced" },
  { label: "Blog / News", startup: null, basic: null, standard: true, premium: true, custom: true },
  { label: "E-commerce", startup: null, basic: null, standard: null, premium: null, custom: true },
  { label: "Booking / Donations", startup: null, basic: null, standard: null, premium: true, custom: true },
  { label: "Image sourcing", startup: null, basic: null, standard: true, premium: true, custom: true },
  { label: "Content guidance", startup: null, basic: null, standard: true, premium: true, custom: "Full collaboration" },
  { label: "Preview / Demo", startup: null, basic: null, standard: "Preview link", premium: "Preview + revisions", custom: "Full demo + 2 rounds" },
  { label: "Revisions", startup: "1 round", basic: "1 round", standard: "2 rounds", premium: "Dedicated round", custom: "2 dedicated rounds" },
  { label: "Lighthouse 95+", startup: null, basic: null, standard: null, premium: "Guaranteed", custom: "Guaranteed" },
  { label: "Priority support", startup: null, basic: null, standard: null, premium: null, custom: true },
] as const;

function ComparisonCell({ value }: { value: boolean | string | null }) {
  if (value === null) {
    return (
      <div className="flex items-center justify-center">
        <Minus className="w-4 h-4 text-text-muted" />
      </div>
    );
  }
  if (value === true) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-violet/10 flex items-center justify-center">
          <Check className="w-3 h-3 text-violet" />
        </div>
      </div>
    );
  }
  return (
    <span className="text-sm text-text-secondary">{value}</span>
  );
}

export default function PricingPage() {
  return (
    <>
      <FAQSchema faqs={faqData} />
      <BreadcrumbSchema items={[{ name: "Pricing", url: "/pricing" }]} />
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-x-hidden">
        
        <div className="container-wide relative z-10 pt-40 pb-24">
          <AnimateIn animation="fadeIn" delay={0.1}>
            <p className="caption mb-6 text-violet">Pricing</p>
          </AnimateIn>
          <TextReveal className="pb-3">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-[0.95]">
              Transparent Packages,
            </h1>
          </TextReveal>
          <TextReveal delay={0.15} className="pb-3">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mt-2">
              <span className="gradient-text">Real Results</span>
            </h1>
          </TextReveal>
          <AnimateIn animation="fadeUp" delay={0.4}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed">
              Transparent pricing. No hidden fees. No hourly billing. You know
              exactly what you are getting before we write a single line of code.
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
            <StaggerItem key={tier.name} className="h-full">
              <div
                className={`relative flex flex-col h-full rounded-2xl border p-8 transition-all duration-500 ${
                  tier.highlighted
                    ? "border-white/15 bg-surface-elevated shadow-xl shadow-white/5"
                    : "border-border bg-surface hover:border-white/15 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-xs font-semibold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  {"badge" in tier && tier.badge && (
                    <span className="inline-block text-[10px] tracking-[0.15em] uppercase text-success bg-success/10 px-2.5 py-1 rounded-full font-medium mb-3">
                      {tier.badge}
                    </span>
                  )}
                  <h3 className="font-display text-xl font-semibold text-text-primary mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3 flex-wrap">
                    {"priceNote" in tier && tier.priceNote ? (
                      <>
                        <span className="font-display text-2xl md:text-3xl font-bold text-text-primary">
                          &euro;{tier.price}{tier.priceNote}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-sm text-text-muted">&euro;</span>
                        <span className="font-display text-4xl md:text-5xl font-bold text-text-primary">
                          {tier.price}
                        </span>
                        {tier.period === "one-time" && (
                          <span className="text-sm text-text-muted ml-1">one-time</span>
                        )}
                        {tier.period === "custom" && (
                          <span className="text-sm text-text-muted ml-1">custom</span>
                        )}
                      </>
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
                <div className="mt-auto">
                  <Button
                    href={tier.ctaHref}
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className="w-full justify-center"
                    magnetic
                  >
                    {tier.cta} <ArrowRight className="w-4 h-4" />
                  </Button>
                  {"footnote" in tier && tier.footnote && (
                    <p className="text-[9px] text-text-muted text-center mt-3 italic">
                      {tier.footnote}
                    </p>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn animation="fadeUp" delay={0.3}>
          <p className="text-center text-text-muted text-sm mt-10 max-w-2xl mx-auto">
            All prices are in EUR and exclude VAT where applicable. Basic
            package: full payment on signing. Standard and above: 50% deposit,
            balance on launch.
          </p>
        </AnimateIn>
      </Section>

      {/* Feature Comparison Table */}
      <Section className="">
        <AnimateIn animation="fadeUp">
          <SectionHeader
            caption="Compare"
            title="Feature Comparison"
            subtitle="See exactly what is included in each package at a glance."
            align="center"
          />
        </AnimateIn>
        <AnimateIn animation="fadeUp" delay={0.2}>
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-text-primary w-[160px]">
                    Feature
                  </th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-success">
                    Startup
                  </th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-text-primary">
                    Basic
                  </th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-violet">
                    Standard
                  </th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-text-primary">
                    Premium
                  </th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-text-primary">
                    Custom
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-border/50 hover:bg-surface-elevated/50 transition-colors"
                  >
                    <td className="py-3 px-4 text-sm font-medium text-text-primary">
                      {row.label}
                    </td>
                    <td className="py-3 px-3 text-center">
                      <ComparisonCell value={row.startup} />
                    </td>
                    <td className="py-3 px-3 text-center">
                      <ComparisonCell value={row.basic} />
                    </td>
                    <td className="py-3 px-3 text-center bg-violet/[0.03]">
                      <ComparisonCell value={row.standard} />
                    </td>
                    <td className="py-3 px-3 text-center">
                      <ComparisonCell value={row.premium} />
                    </td>
                    <td className="py-3 px-3 text-center">
                      <ComparisonCell value={row.custom} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateIn>
      </Section>

      {/* Add-ons */}
      <Section>
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
              <div className="rounded-2xl border border-border bg-surface-elevated p-6 md:p-8 transition-all duration-500 hover:border-violet/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 h-full flex flex-col">
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

      {/* Monthly Services */}
      <Section className="">
        <AnimateIn animation="fadeUp">
          <SectionHeader
            caption="Monthly Services"
            title="Ongoing Support"
            subtitle="Keep your site performing at its best with our monthly packages."
            align="center"
          />
        </AnimateIn>
        <StaggerContainer
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          staggerDelay={0.1}
        >
          {MONTHLY_SERVICES.map((service) => (
            <StaggerItem key={service.name}>
              <div className="rounded-2xl border border-border bg-surface-elevated p-8 transition-all duration-500 hover:border-violet/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 h-full flex flex-col">
                <h3 className="font-display text-xl font-semibold text-text-primary mb-2">
                  {service.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-sm text-text-muted">&euro;</span>
                  <span className="font-display text-3xl font-bold text-text-primary">
                    {service.price}
                  </span>
                  <span className="text-sm text-text-muted">
                    /{service.period}
                  </span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  {service.description}
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
      <Section className="">
        <div className="text-center max-w-3xl mx-auto">
          <AnimateIn animation="fadeUp">
            <p className="caption mb-4 text-violet">
              Ready to Invest in Growth?
            </p>
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
