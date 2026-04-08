import { generatePageMeta } from "@/lib/seo";
import { T } from "@/lib/i18n/T";
import type { TranslationKey } from "@/lib/i18n/dictionary";
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
    nameKey: "tier.startup.name" as const,
    price: "750",
    period: "one-time",
    descKey: "tier.startup.desc" as const,
    featureKeys: ["tier.startup.f1","tier.startup.f2","tier.startup.f3","tier.startup.f4","tier.startup.f5","tier.startup.f6"] as const,
    ctaHref: "/start-project",
    highlighted: false,
    badgeKey: "pricing.forFounders" as const,
    footnoteKey: "tier.startup.footnote" as const,
  },
  {
    nameKey: "tier.basic.name" as const,
    price: "1,000",
    period: "one-time",
    descKey: "tier.basic.desc" as const,
    featureKeys: ["tier.basic.f1","tier.basic.f2","tier.basic.f3","tier.basic.f4","tier.basic.f5"] as const,
    ctaHref: "/start-project",
    highlighted: false,
  },
  {
    nameKey: "tier.standard.name" as const,
    price: "2,000",
    period: "one-time",
    descKey: "tier.standard.desc" as const,
    featureKeys: ["tier.standard.f1","tier.standard.f2","tier.standard.f3","tier.standard.f4","tier.standard.f5","tier.standard.f6","tier.standard.f7"] as const,
    ctaHref: "/start-project",
    highlighted: true,
  },
  {
    nameKey: "tier.premium.name" as const,
    price: "4,000",
    period: "one-time",
    descKey: "tier.premium.desc" as const,
    featureKeys: ["tier.premium.f1","tier.premium.f2","tier.premium.f3","tier.premium.f4","tier.premium.f5","tier.premium.f6","tier.premium.f7"] as const,
    ctaHref: "/start-project",
    highlighted: false,
  },
  {
    nameKey: "tier.custom.name" as const,
    price: "5,000",
    period: "custom",
    priceNote: "+",
    descKey: "tier.custom.desc" as const,
    featureKeys: ["tier.custom.f1","tier.custom.f2","tier.custom.f3","tier.custom.f4","tier.custom.f5","tier.custom.f6"] as const,
    ctaHref: "/start-project",
    highlighted: false,
  },
] as const;

const ADD_ONS = [
  { nameKey: "addon.lang.name" as const, price: "250", descKey: "addon.lang.desc" as const },
  { nameKey: "addon.logo.name" as const, price: "800", descKey: "addon.logo.desc" as const },
  { nameKey: "addon.copy.name" as const, price: "100", descKey: "addon.copy.desc" as const },
] as const;

const MONTHLY_SERVICES = [
  { nameKey: "month.host.name" as const, price: "80", period: "mo", descKey: "month.host.desc" as const },
  { nameKey: "month.seo.name" as const, price: "300", period: "mo", descKey: "month.seo.desc" as const },
  { nameKey: "month.priority.name" as const, price: "200", period: "mo", descKey: "month.priority.desc" as const },
] as const;

type CmpVal = boolean | null | { key: TranslationKey } | string;
const v = (key: TranslationKey): { key: TranslationKey } => ({ key });

const COMPARISON_ROWS: ReadonlyArray<{ labelKey: TranslationKey; startup: CmpVal; basic: CmpVal; standard: CmpVal; premium: CmpVal; custom: CmpVal }> = [
  { labelKey: "cmp.row.price", startup: "€750", basic: "€1,000", standard: "€2,000", premium: "€4,000", custom: v("cmp.val.from5k") },
  { labelKey: "cmp.row.pages", startup: "1-5", basic: "1-5", standard: "5-10", premium: "10-20", custom: v("cmp.val.unlimited") },
  { labelKey: "cmp.row.delivery", startup: v("cmp.val.10days"), basic: v("cmp.val.1to2"), standard: v("cmp.val.2to3"), premium: v("cmp.val.3to4"), custom: v("cmp.val.4to6") },
  { labelKey: "cmp.row.design", startup: v("cmp.val.custom"), basic: v("cmp.val.cleanResponsive"), standard: v("cmp.val.customBranded"), premium: v("cmp.val.premiumAnimations"), custom: v("cmp.val.fullyBespoke") },
  { labelKey: "cmp.row.languages", startup: "1", basic: "1", standard: "2", premium: "3+", custom: v("cmp.val.unlimited") },
  { labelKey: "cmp.row.seo", startup: v("cmp.val.basic"), basic: v("cmp.val.basic"), standard: v("cmp.val.full"), premium: v("cmp.val.fullSchema"), custom: v("cmp.val.fullAdvanced") },
  { labelKey: "cmp.row.blog", startup: null, basic: null, standard: true, premium: true, custom: true },
  { labelKey: "cmp.row.ecommerce", startup: null, basic: null, standard: null, premium: null, custom: true },
  { labelKey: "cmp.row.booking", startup: null, basic: null, standard: null, premium: true, custom: true },
  { labelKey: "cmp.row.images", startup: null, basic: null, standard: true, premium: true, custom: true },
  { labelKey: "cmp.row.content", startup: null, basic: null, standard: true, premium: true, custom: v("cmp.val.fullCollab") },
  { labelKey: "cmp.row.preview", startup: null, basic: null, standard: v("cmp.val.previewLink"), premium: v("cmp.val.previewRevisions"), custom: v("cmp.val.fullDemo2") },
  { labelKey: "cmp.row.revisions", startup: v("cmp.val.1round"), basic: v("cmp.val.1round"), standard: v("cmp.val.2rounds"), premium: v("cmp.val.dedRound"), custom: v("cmp.val.2dedRounds") },
  { labelKey: "cmp.row.lighthouse", startup: null, basic: null, standard: null, premium: v("cmp.val.guaranteed"), custom: v("cmp.val.guaranteed") },
  { labelKey: "cmp.row.priority", startup: null, basic: null, standard: null, premium: null, custom: true },
];

function ComparisonCell({ value }: { value: CmpVal }) {
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
  if (typeof value === "object" && "key" in value) {
    return <span className="text-sm text-text-secondary"><T k={value.key} /></span>;
  }
  return <span className="text-sm text-text-secondary">{value}</span>;
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
            <p className="caption mb-6 text-violet"><T k="pricing.eyebrow" /></p>
          </AnimateIn>
          <TextReveal className="pb-3">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-[0.95]">
              <T k="pricing.title" />
            </h1>
          </TextReveal>
          <AnimateIn animation="fadeUp" delay={0.4}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed">
              <T k="pricing.subtitle" />
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
            <StaggerItem key={tier.nameKey} className="h-full">
              <div
                className={`relative flex flex-col h-full rounded-2xl border p-8 transition-all duration-500 ${
                  tier.highlighted
                    ? "border-white/15 bg-surface-elevated shadow-xl shadow-white/5"
                    : "border-border bg-surface hover:border-white/15 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-[10px] font-semibold uppercase tracking-wider whitespace-nowrap">
                    <T k="pricing.mostPopular" />
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <div className="h-7 mb-3">
                    {"badgeKey" in tier && tier.badgeKey && (
                      <span className="inline-block text-[10px] tracking-[0.15em] uppercase text-success bg-success/10 px-2.5 py-1 rounded-full font-medium">
                        <T k={tier.badgeKey} />
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-text-primary mb-2">
                    <T k={tier.nameKey} />
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
                          <span className="text-sm text-text-muted ml-1"><T k="pricing.oneTime" /></span>
                        )}
                        {tier.period === "custom" && (
                          <span className="text-sm text-text-muted ml-1"><T k="tier.custom.name" /></span>
                        )}
                      </>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    <T k={tier.descKey} />
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.featureKeys.map((fk) => (
                    <li key={fk} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-violet/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-violet" />
                      </div>
                      <span className="text-sm leading-relaxed text-text-secondary">
                        <T k={fk} />
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
                    <T k="cta.startProject" /> <ArrowRight className="w-4 h-4" />
                  </Button>
                  <p className="text-[9px] text-text-muted text-center mt-3 italic min-h-[14px]">
                    {"footnoteKey" in tier && tier.footnoteKey ? <T k={tier.footnoteKey} /> : "\u00A0"}
                  </p>
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
            caption={<T k="pricing.compare.eyebrow" />}
            title={<T k="cmp.title" />}
            subtitle={<T k="cmp.subtitle" />}
            align="center"
          />
        </AnimateIn>
        <AnimateIn animation="fadeUp" delay={0.2}>
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-text-primary w-[160px]">
                    <T k="cmp.feature" />
                  </th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-success">
                    <T k="tier.startup.name" />
                  </th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-text-primary">
                    <T k="tier.basic.name" />
                  </th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-violet">
                    <T k="tier.standard.name" />
                  </th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-text-primary">
                    <T k="tier.premium.name" />
                  </th>
                  <th className="text-center py-4 px-3 text-sm font-semibold text-text-primary">
                    <T k="tier.custom.name" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr
                    key={row.labelKey}
                    className="border-b border-border/50 hover:bg-surface-elevated/50 transition-colors"
                  >
                    <td className="py-3 px-4 text-sm font-medium text-text-primary">
                      <T k={row.labelKey} />
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
            caption={<T k="addon.eyebrow" />}
            title={<T k="pricing.addons.title" />}
            subtitle={<T k="pricing.addons.subtitle" />}
            align="center"
          />
        </AnimateIn>
        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {ADD_ONS.map((addon) => (
            <StaggerItem key={addon.nameKey}>
              <div className="rounded-2xl border border-border bg-surface-elevated p-6 md:p-8 transition-all duration-500 hover:border-violet/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 h-full flex flex-col">
                <h3 className="font-display text-lg font-semibold text-text-primary mb-1">
                  <T k={addon.nameKey} />
                </h3>
                <p className="text-violet font-semibold text-lg mb-3">
                  &euro;{addon.price}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  <T k={addon.descKey} />
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
            caption={<T k="month.eyebrow" />}
            title={<T k="pricing.ongoing.title" />}
            subtitle={<T k="pricing.ongoing.subtitle" />}
            align="center"
          />
        </AnimateIn>
        <StaggerContainer
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          staggerDelay={0.1}
        >
          {MONTHLY_SERVICES.map((service) => (
            <StaggerItem key={service.nameKey}>
              <div className="rounded-2xl border border-border bg-surface-elevated p-8 transition-all duration-500 hover:border-violet/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 h-full flex flex-col">
                <h3 className="font-display text-xl font-semibold text-text-primary mb-2">
                  <T k={service.nameKey} />
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
                  <T k={service.descKey} />
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
            title={<T k="pricing.faq.title" />}
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
              <T k="pricing.cta.eyebrow" />
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
              <T k="pricing.cta.title" />
            </h2>
            <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed">
              <T k="pricing.cta.subtitle" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/start-project" size="lg" magnetic>
                <T k="cta.startProject" /> <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                href={`mailto:${CONTACT_EMAIL}`}
                variant="secondary"
                size="lg"
              >
                <T k="pricing.cta.ask" />
              </Button>
            </div>
          </AnimateIn>
        </div>
      </Section>
    </>
  );
}
