export interface BlogPost {
  slug: string;
  title: string;
  titleDe?: string;
  excerpt: string;
  excerptDe?: string;
  category: string;
  categoryDe?: string;
  date: string;
  readTime: string;
  readTimeDe?: string;
  image: string;
  content: string;
  contentDe?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-speed-is-the-most-underrated-conversion-tool",
    title: "Why Speed Is the Most Underrated Conversion Tool",
    titleDe: "Warum Geschwindigkeit das unterschätzteste Conversion-Tool ist",
    excerpt:
      "A 1-second delay costs you 7% of conversions. Here’s how modern sites load in under 1.5 seconds — and why it matters more than your headline.",
    excerptDe:
      "Eine Sekunde Verzögerung kostet Sie 7 % Ihrer Conversions. So laden moderne Websites in unter 1,5 Sekunden — und warum das wichtiger ist als Ihre Überschrift.",
    category: "Performance",
    categoryDe: "Performance",
    date: "2026-03-31",
    readTime: "6 min read",
    readTimeDe: "6 Min. Lesezeit",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=3840&q=90",
    content: `Your headline doesn’t matter if nobody waits to read it.

## The Numbers Don’t Lie

Google’s research is clear: 53% of mobile visitors abandon a page that takes longer than 3 seconds to load. For every additional second, conversion rates drop by 7%.

That means a site loading in 5 seconds instead of 1.5 seconds is losing roughly 25% of potential conversions before anyone reads a word.

**This isn’t a design problem. It’s a revenue problem.**

## What Slows Sites Down

Most performance issues come from three places:

1. **Unoptimised images.** A single hero image at 4MB will kill your load time. WebP format, responsive sizing, and lazy loading solve this overnight.
2. **Too much JavaScript.** WordPress plugins, analytics scripts, chat widgets, cookie banners — each one adds weight. A typical WordPress site ships 2-3MB of JavaScript. A well-built Next.js site ships under 150KB.
3. **Bad hosting.** Shared hosting with a server in another continent adds hundreds of milliseconds. Edge deployment (Vercel, Cloudflare) serves your site from the nearest data centre.

## How to Hit Sub-1.5 Seconds

The best approach is a stack built for speed from the ground up:

- **Next.js** with automatic code splitting — each page loads only what it needs
- **Static generation** where possible — pages are pre-built at deploy time
- **Image optimisation** via Next.js Image — automatic WebP, responsive sizes, blur placeholders
- **Edge deployment** on Vercel — your site is served from 30+ global locations
- **Zero bloat** — no jQuery, no unnecessary libraries, no plugin soup

## The Lighthouse Standard

Every site built this way scores 95+ on Google Lighthouse. That’s not a nice-to-have — it’s the minimum standard.

- Performance: 95+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

These scores directly influence your Google ranking. A faster site ranks higher. Period.

## What You Can Do Right Now

Run your site through PageSpeed Insights. If your mobile score is below 60, you’re losing customers every day.

The fix might be as simple as optimising images and removing unused plugins. Or it might mean rebuilding from scratch with modern technology.

Either way, speed is the cheapest conversion improvement you’ll ever make.`,
  },
  {
    slug: "the-real-cost-of-a-custom-website",
    title: "The Real Cost of a Custom Website in 2026",
    titleDe: "Was eine individuelle Website 2026 wirklich kostet",
    excerpt:
      "From \u20AC500 templates to \u20AC50,000 platforms. An honest breakdown of what websites cost, why, and what you actually get at each price point.",
    excerptDe:
      "Von 500-€-Templates bis zu 50.000-€-Plattformen. Eine ehrliche Aufschlüsselung, was Websites kosten, warum — und was Sie auf jeder Preisstufe wirklich bekommen.",
    category: "Business",
    categoryDe: "Business",
    date: "2026-03-30",
    readTime: "8 min read",
    readTimeDe: "8 Min. Lesezeit",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=3840&q=90",
    content: `Nobody in the web industry wants to talk honestly about pricing. Every agency says "contact for a quote." Nobody tells you what you actually get for your money.

Here’s the real breakdown.

## The \u20AC500–\u20AC1,000 Range: Templates

At this price, you’re getting a WordPress theme or a Wix site. Someone installs a template, swaps in your logo, adds your text, and hands it over.

**What you get:** A functional website that’s responsive (because the template is), a basic contact form, and limited customisation.

**What you don’t get:** Custom design, performance optimisation, serious SEO, or anything unique. Your site will look like thousands of others.

**Right for:** Businesses that just need a basic online presence and don’t compete on digital experience.

## The \u20AC750–\u20AC2,000 Range: Basic to Standard

This is where real design begins. A good agency will design your site from scratch, build it with modern technology, and deliver something that genuinely represents your brand.

**What you get:** Custom design tailored to your brand, mobile-first development, SEO foundation, 2 languages, and 1–10 pages.

**What you don’t get:** Complex functionality like booking systems, e-commerce, or user accounts.

**Right for:** Small to medium businesses serious about standing out.

## The \u20AC2,000–\u20AC4,000 Range: Premium Solutions

Sites that actively drive business results. Advanced features, multilingual support, and design that makes competitors nervous.

**What you get:** Everything above plus booking forms, galleries, donation pages, custom animations, 3+ languages, and Lighthouse scores above 95.

**Right for:** Businesses that see their website as a primary revenue driver.

## The \u20AC5,000–\u20AC8,000 Range: Custom Builds

E-commerce platforms, marketplace sites, and complex builds with payment processing, API integrations, and architecture built for scale.

**Right for:** Companies building online stores, marketplaces, or bespoke digital platforms.

## Why the Same Project Can Cost \u20AC800 or \u20AC8,000

The difference comes down to four things:

1. **Design quality.** Templates vs. custom design is the biggest factor.
2. **Code quality.** WordPress with plugins vs. custom-built code in Next.js. This affects speed, security, and long-term maintenance costs.
3. **Strategy.** Does the agency build what you ask for, or challenge you to build what works?
4. **Support.** What happens after launch?

## The Best Advice

Don’t buy the cheapest option just because it’s cheap. And don’t buy the most expensive assuming it’s better.

Buy the option where the agency clearly explains what they’ll build, why it’ll help your business, and what the ongoing costs look like. Transparency is the signal.`,
  },
  {
    slug: "why-we-dont-use-wordpress-anymore",
    title: "Why WordPress Is No Longer the Best Choice",
    titleDe: "Warum WordPress nicht mehr die beste Wahl ist",
    excerpt:
      "WordPress used to be the go-to. Here’s why many have moved on — and why businesses’ sites are faster, safer, and cheaper to maintain because of it.",
    excerptDe:
      "WordPress war einmal die Standardwahl. Warum viele weitergezogen sind — und warum Unternehmens-Websites dadurch schneller, sicherer und günstiger im Betrieb sind.",
    category: "Technology",
    categoryDe: "Technologie",
    date: "2026-03-29",
    readTime: "7 min read",
    readTimeDe: "7 Min. Lesezeit",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=3840&q=90",
    content: `Here’s a common story: many agencies used to build WordPress sites.

They were fine. They worked. Clients could edit content. Everyone was happy enough.

But "fine" isn’t a high enough standard. The move to Next.js has been a game changer.

## The Problem with WordPress

WordPress powers 40% of the web. That’s both its strength and its biggest vulnerability.

**Performance.** A typical WordPress site loads in 3–5 seconds after caching plugins and optimisation prayers. A comparable Next.js site loads in under 1.5 seconds out of the box.

**Security.** WordPress is the most attacked CMS in the world. Every plugin is a potential entry point. Teams spend more time patching vulnerabilities than building features.

**Maintenance.** Core updates, theme updates, plugin updates. Each one can break something. The maintenance overhead eats into development time.

**Design ceiling.** WordPress themes give you a head start and a ceiling. The moment you need something the theme doesn’t support, you’re fighting its architecture.

## Why Next.js

Next.js gives us complete control over every aspect of the website.

**Performance by default.** Automatic code splitting, image optimisation, and static generation. Every page is fast without extra work.

**Security by design.** No database to hack. No plugins to exploit. No admin panel to brute force. The attack surface is essentially zero.

**Total design freedom.** Every pixel is intentional. You build exactly what you design, with no theme constraints.

**Better developer experience.** TypeScript catches errors before production. Component architecture ensures consistency.

## "But I Can’t Edit Content"

Actually, you can. Headless CMS platforms like Sanity give clients an editing experience better than WordPress — a clean interface for exactly the content you manage, without 47 confusing menu items.

## The Measurable Difference

After switching to Next.js, companies typically see:

- **Pages load 3–4x faster**
- **99.99% uptime** vs. WordPress average of 99.5%
- **Better Google rankings** from improved Core Web Vitals
- **Zero security incidents**
- **Lower hosting costs** (Vercel free tier vs. managed WordPress hosting)

## Is WordPress Dead?

No. It’s still fine for simple blogs where budget is the primary constraint. But for businesses that compete on their digital experience, it’s no longer the right tool.

The web has moved on. Smart businesses are moving with it.`,
  },
  {
    slug: "design-systems-why-your-brand-needs-one",
    title: "Design Systems: Why Your Brand Needs One",
    titleDe: "Design Systems: Warum Ihre Marke eines braucht",
    excerpt:
      "A design system isn’t a luxury for big companies. It’s the reason some brands look polished everywhere and others look like they’re winging it.",
    excerptDe:
      "Ein Design-System ist kein Luxus für Großunternehmen. Es ist der Grund, warum manche Marken überall poliert wirken und andere wie aus dem Stegreif aussehen.",
    category: "Design",
    categoryDe: "Design",
    date: "2026-03-28",
    readTime: "5 min read",
    readTimeDe: "5 Min. Lesezeit",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=3840&q=90",
    content: `You’ve seen the difference. Some brands look polished on every touchpoint — their website, their Instagram, their emails, their proposals. Others look like each piece was designed by a different person on a different day.

The difference is a design system.

## What Is a Design System?

A design system is the single source of truth for your brand’s visual language. It defines:

- **Colours.** Not just "blue" but the exact hex codes, when to use each shade, and what each colour communicates.
- **Typography.** Which fonts, at what sizes, for what purpose. Headings, body text, captions, buttons — all defined.
- **Spacing.** Consistent padding, margins, and gaps that create visual rhythm.
- **Components.** Buttons, cards, forms, navigation — designed once, used everywhere.
- **Tone of voice.** How you write, not just how you look.

## Why It Matters

**Consistency builds trust.** When every touchpoint looks like it belongs to the same brand, customers develop confidence. Inconsistency signals chaos.

**Speed.** When the design decisions are already made, creating new pages, emails, or social posts takes a fraction of the time.

**Scalability.** As your team grows, the design system ensures everyone produces work that looks on-brand without constant design reviews.

**Cost savings.** Decisions made once don’t need to be made again. No more debating which blue to use or what size the heading should be.

## What a Good Brand Package Includes

A solid design system covers:

1. **Colour palette** with primary, secondary, accent, and neutral scales
2. **Typography scale** with font families, weights, and sizes for every context
3. **Spacing system** based on a consistent base unit
4. **Component library** for web (buttons, forms, cards, navigation, footers)
5. **Icon style** — consistent stroke weight, size, and visual language
6. **Photography direction** — colour treatment, composition style, mood
7. **Brand guidelines document** that any designer or developer can follow

## You Don’t Need to Be Big

Design systems aren’t just for enterprises. A solo business with a clear design system looks more professional than a 50-person company winging it.

The investment pays for itself the first time you need a new landing page, a social template, or a presentation deck — and it takes 30 minutes instead of 3 hours because every decision is already made.

## Start Simple

You don’t need a 200-page brand bible on day one. Start with:

- 5 colours (2 primary, 2 neutral, 1 accent)
- 2 fonts (one for headings, one for body)
- A consistent button and link style
- A document that records these decisions

Then build from there. The key is documenting decisions so they don’t need to be made twice.`,
  },
  {
    slug: "anatomy-of-a-high-converting-landing-page",
    title: "Anatomy of a High-Converting Landing Page",
    titleDe: "Anatomie einer hochkonvertierenden Landing Page",
    excerpt:
      "After studying hundreds of high-converting landing pages, here are the 7 elements that separate pages that convert at 2% from pages that convert at 12%.",
    excerptDe:
      "Nach der Analyse hunderter hochkonvertierender Landing Pages: die 7 Elemente, die Seiten mit 2 % Conversion von Seiten mit 12 % unterscheiden.",
    category: "Strategy",
    categoryDe: "Strategie",
    date: "2026-03-27",
    readTime: "7 min read",
    readTimeDe: "7 Min. Lesezeit",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=3840&q=90",
    content: `A landing page has one job: convert a visitor into a lead or customer. No navigation distractions, no blog sidebar, no "explore our services." One page. One goal.

Here are the 7 elements that make the difference.

## 1. A Headline That States the Outcome

Not what you do. What the visitor gets.

**Bad:** "Professional Web Design Services"
**Good:** "A Website That Turns Visitors Into Customers"

The headline should make someone think "that’s exactly what I need" within 3 seconds.

## 2. Social Proof Above the Fold

Before asking anyone to read further, prove that others trust you. This can be:

- Client logos
- A one-line testimonial
- "Trusted by 50+ businesses"
- Star rating
- Press mentions

Social proof above the fold increases conversion rates by an average of 34%.

## 3. A Clear Value Proposition

Three bullet points or a short paragraph that answers: "Why should I choose you over the alternatives?"

Focus on outcomes, not features:
- "Launch in 3 weeks, not 3 months"
- "Lighthouse score 95+ guaranteed"
- "Fixed pricing — no surprise invoices"

## 4. Visual Proof

Show, don’t just tell. Screenshots, before/after comparisons, demo videos, or live interactive previews of your work.

Pages with visual proof convert 40% better than text-only pages. People believe their eyes more than your words.

## 5. Testimonials With Specifics

Vague testimonials ("Great service!") are worthless. Specific ones sell:

"Our organic traffic increased 180% in 4 months. The site loads in 1.2 seconds and we rank on page 1 for our primary keywords."

Numbers, timelines, and measurable results. That’s what builds trust.

## 6. A Single, Unmissable CTA

One call to action. Repeated 2–3 times on the page. Visually dominant — gradient background, large text, impossible to miss.

Don’t give people choices. "Get a Free Quote" or "Book a Consultation." Not both.

## 7. Urgency or Scarcity (Honest)

Not fake countdown timers. Real urgency:

- "We take on 3 new projects per month"
- "Free consultation — limited availability this quarter"
- "Prices increase April 1st"

If the urgency is real, state it. If it’s not, skip this element entirely. Fake urgency destroys trust.

## The Layout

Top to bottom:
1. Headline + subheadline
2. Social proof strip
3. Value proposition
4. Visual proof / screenshots
5. Testimonials
6. CTA
7. FAQ (handles objections)
8. Final CTA

Keep it focused. Every element either builds trust or drives action. If it does neither, remove it.

## Measure Everything

Set up conversion tracking before you launch. Track:
- Click-through rate on the CTA
- Form completion rate
- Scroll depth (are people even seeing your CTA?)
- Time on page

Then iterate. The first version is never the best version.`,
  },
  {
    slug: "accessibility-is-not-optional",
    title: "Web Accessibility Is Not Optional Anymore",
    titleDe: "Web-Barrierefreiheit ist nicht mehr optional",
    excerpt:
      "The European Accessibility Act takes effect in 2025. Here’s what it means for your website and why accessibility is good business, not just compliance.",
    excerptDe:
      "Der European Accessibility Act tritt 2025 in Kraft. Was das für Ihre Website bedeutet — und warum Barrierefreiheit gutes Geschäft ist, nicht nur Pflichterfüllung.",
    category: "Accessibility",
    categoryDe: "Barrierefreiheit",
    date: "2026-03-26",
    readTime: "6 min read",
    readTimeDe: "6 Min. Lesezeit",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=3840&q=90",
    content: `Web accessibility used to be a nice-to-have. As of 2025, it’s the law.

The European Accessibility Act (EAA) requires websites and digital services to meet accessibility standards. Non-compliance carries real penalties. But beyond compliance, accessibility is simply good business.

## Who Does This Affect?

If your business operates in the EU and offers products or services through a website, the EAA likely applies to you. This includes:

- E-commerce stores
- Banking and financial services
- Transport and travel booking
- Telecommunications
- Government and public services

Even businesses not directly covered should pay attention. Accessibility lawsuits have increased 300% since 2020, and the trend is accelerating.

## What Does Accessible Mean?

WCAG 2.1 AA is the standard. In practical terms:

**Perceivable.** All content is available to all senses. Images have alt text. Videos have captions. Colour is never the only way to convey information.

**Operable.** Everything works with a keyboard. No interactions require a mouse. Focus indicators are visible. Time limits are adjustable.

**Understandable.** Text is readable. Navigation is consistent. Error messages are clear and helpful. Forms explain what’s needed.

**Robust.** The site works with assistive technology — screen readers, voice control, switch devices.

## The Business Case

Accessibility isn’t just about compliance. It’s about reach.

- **15% of the world’s population** has some form of disability
- **Accessible sites rank better** on Google (semantic HTML, proper headings, and alt text are SEO fundamentals)
- **Accessible sites are faster** (clean code, proper structure, optimised media)
- **Accessible sites convert better** (clear navigation, readable text, obvious CTAs help everyone)

## Common Failures to Watch For

When auditing websites, these issues appear on nearly every one:

1. **Missing alt text** on images (screen readers can’t describe what they can’t read)
2. **Low colour contrast** (light grey text on white backgrounds — fails WCAG 4.5:1 ratio)
3. **No keyboard navigation** (try pressing Tab through your site — can you reach everything?)
4. **Missing form labels** (inputs without labels are invisible to screen readers)
5. **Auto-playing media** (disorienting for users with cognitive disabilities)
6. **No skip navigation** (keyboard users must tab through the entire header on every page)

## What to Build Into Every Project

Accessibility isn’t an add-on. It should be built into the process from day one:

- Semantic HTML structure (proper headings, landmarks, and roles)
- Colour contrast ratios that exceed WCAG AA requirements
- Full keyboard navigability with visible focus indicators
- Alt text on every image
- ARIA labels on interactive elements
- Skip-to-content links
- Responsive text sizing (no fixed pixel fonts)
- Reduced motion support for users who prefer it

## Start With an Audit

If your current site wasn’t built with accessibility in mind, start with an audit. Tools like axe DevTools, WAVE, and Lighthouse accessibility audits can identify the most critical issues.

Fix the high-impact items first: alt text, colour contrast, keyboard navigation, and form labels. These four changes alone will address 80% of common accessibility failures.

Accessibility makes your site better for everyone — not just users with disabilities. Clear navigation, readable text, and logical structure benefit every visitor.`,
  },
];
