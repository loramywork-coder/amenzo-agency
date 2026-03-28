export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-speed-is-the-most-underrated-conversion-tool",
    title: "Why Speed Is the Most Underrated Conversion Tool",
    excerpt:
      "A 1-second delay costs you 7% of conversions. Here\u2019s how we build sites that load in under 1.5 seconds \u2014 and why it matters more than your headline.",
    category: "Performance",
    date: "2026-03-15",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=3840&q=90",
    content: `Your headline doesn\u2019t matter if nobody waits to read it.

## The Numbers Don\u2019t Lie

Google\u2019s research is clear: 53% of mobile visitors abandon a page that takes longer than 3 seconds to load. For every additional second, conversion rates drop by 7%.

That means a site loading in 5 seconds instead of 1.5 seconds is losing roughly 25% of potential conversions before anyone reads a word.

**This isn\u2019t a design problem. It\u2019s a revenue problem.**

## What Slows Sites Down

Most performance issues come from three places:

1. **Unoptimised images.** A single hero image at 4MB will kill your load time. WebP format, responsive sizing, and lazy loading solve this overnight.
2. **Too much JavaScript.** WordPress plugins, analytics scripts, chat widgets, cookie banners \u2014 each one adds weight. A typical WordPress site ships 2-3MB of JavaScript. Ours ship under 150KB.
3. **Bad hosting.** Shared hosting with a server in another continent adds hundreds of milliseconds. Edge deployment (Vercel, Cloudflare) serves your site from the nearest data centre.

## How We Hit Sub-1.5 Seconds

Our stack is built for speed from the ground up:

- **Next.js** with automatic code splitting \u2014 each page loads only what it needs
- **Static generation** where possible \u2014 pages are pre-built at deploy time
- **Image optimisation** via Next.js Image \u2014 automatic WebP, responsive sizes, blur placeholders
- **Edge deployment** on Vercel \u2014 your site is served from 30+ global locations
- **Zero bloat** \u2014 no jQuery, no unnecessary libraries, no plugin soup

## The Lighthouse Standard

Every site we deliver scores 95+ on Google Lighthouse. That\u2019s not a nice-to-have \u2014 it\u2019s our minimum standard.

- Performance: 95+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

These scores directly influence your Google ranking. A faster site ranks higher. Period.

## What You Can Do Right Now

Run your site through PageSpeed Insights. If your mobile score is below 60, you\u2019re losing customers every day.

The fix might be as simple as optimising images and removing unused plugins. Or it might mean rebuilding from scratch with modern technology.

Either way, speed is the cheapest conversion improvement you\u2019ll ever make.`,
  },
  {
    slug: "the-real-cost-of-a-custom-website",
    title: "The Real Cost of a Custom Website in 2026",
    excerpt:
      "From \u20AC500 templates to \u20AC50,000 platforms. An honest breakdown of what websites cost, why, and what you actually get at each price point.",
    category: "Business",
    date: "2026-03-08",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=3840&q=90",
    content: `Nobody in the web industry wants to talk honestly about pricing. Every agency says "contact for a quote." Nobody tells you what you actually get for your money.

Here\u2019s the real breakdown.

## The \u20AC500\u2013\u20AC1,000 Range: Templates

At this price, you\u2019re getting a WordPress theme or a Wix site. Someone installs a template, swaps in your logo, adds your text, and hands it over.

**What you get:** A functional website that\u2019s responsive (because the template is), a basic contact form, and limited customisation.

**What you don\u2019t get:** Custom design, performance optimisation, serious SEO, or anything unique. Your site will look like thousands of others.

**Right for:** Businesses that just need a basic online presence and don\u2019t compete on digital experience.

## The \u20AC750\u2013\u20AC2,000 Range: Basic to Standard

This is where real design begins. A good agency will design your site from scratch, build it with modern technology, and deliver something that genuinely represents your brand.

**What you get:** Custom design tailored to your brand, mobile-first development, SEO foundation, 2 languages, and 1\u201310 pages.

**What you don\u2019t get:** Complex functionality like booking systems, e-commerce, or user accounts.

**Right for:** Small to medium businesses serious about standing out.

## The \u20AC2,000\u2013\u20AC4,000 Range: Premium Solutions

Sites that actively drive business results. Advanced features, multilingual support, and design that makes competitors nervous.

**What you get:** Everything above plus booking forms, galleries, donation pages, custom animations, 3+ languages, and Lighthouse scores above 95.

**Right for:** Businesses that see their website as a primary revenue driver.

## The \u20AC5,000\u2013\u20AC8,000 Range: Custom Builds

E-commerce platforms, marketplace sites, and complex builds with payment processing, API integrations, and architecture built for scale.

**Right for:** Companies building online stores, marketplaces, or bespoke digital platforms.

## Why the Same Project Can Cost \u20AC800 or \u20AC8,000

The difference comes down to four things:

1. **Design quality.** Templates vs. custom design is the biggest factor.
2. **Code quality.** WordPress with plugins vs. hand-crafted code in Next.js. This affects speed, security, and long-term maintenance costs.
3. **Strategy.** Does the agency build what you ask for, or challenge you to build what works?
4. **Support.** What happens after launch?

## Our Advice

Don\u2019t buy the cheapest option just because it\u2019s cheap. And don\u2019t buy the most expensive assuming it\u2019s better.

Buy the option where the agency clearly explains what they\u2019ll build, why it\u2019ll help your business, and what the ongoing costs look like. Transparency is the signal.`,
  },
  {
    slug: "why-we-dont-use-wordpress-anymore",
    title: "Why We Don\u2019t Use WordPress Anymore",
    excerpt:
      "We used to build WordPress sites. Here\u2019s why we stopped \u2014 and why our clients\u2019 sites are faster, safer, and cheaper to maintain because of it.",
    category: "Technology",
    date: "2026-02-28",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=3840&q=90",
    content: `We have a confession: we used to build WordPress sites.

They were fine. They worked. Clients could edit content. Everyone was happy enough.

But "fine" isn\u2019t the standard we set. So we switched to Next.js. We haven\u2019t looked back.

## The Problem with WordPress

WordPress powers 40% of the web. That\u2019s both its strength and its biggest vulnerability.

**Performance.** A typical WordPress site loads in 3\u20135 seconds after caching plugins and optimisation prayers. A comparable Next.js site loads in under 1.5 seconds out of the box.

**Security.** WordPress is the most attacked CMS in the world. Every plugin is a potential entry point. We spent more time patching vulnerabilities than building features.

**Maintenance.** Core updates, theme updates, plugin updates. Each one can break something. The maintenance overhead was eating our time.

**Design ceiling.** WordPress themes give you a head start and a ceiling. The moment you need something the theme doesn\u2019t support, you\u2019re fighting its architecture.

## Why Next.js

Next.js gives us complete control over every aspect of the website.

**Performance by default.** Automatic code splitting, image optimisation, and static generation. Every page is fast without extra work.

**Security by design.** No database to hack. No plugins to exploit. No admin panel to brute force. The attack surface is essentially zero.

**Total design freedom.** Every pixel is intentional. We build exactly what we design, with no theme constraints.

**Better developer experience.** TypeScript catches errors before production. Component architecture ensures consistency.

## "But I Can\u2019t Edit Content"

Actually, you can. Headless CMS platforms like Sanity give clients an editing experience better than WordPress \u2014 a clean interface for exactly the content you manage, without 47 confusing menu items.

## The Measurable Difference

After switching our clients:

- **Pages load 3\u20134x faster**
- **99.99% uptime** vs. WordPress average of 99.5%
- **Better Google rankings** from improved Core Web Vitals
- **Zero security incidents**
- **Lower hosting costs** (Vercel free tier vs. managed WordPress hosting)

## Is WordPress Dead?

No. It\u2019s still fine for simple blogs where budget is the primary constraint. But for businesses that compete on their digital experience, it\u2019s no longer the right tool.

The web moved on. We moved with it.`,
  },
  {
    slug: "design-systems-why-your-brand-needs-one",
    title: "Design Systems: Why Your Brand Needs One",
    excerpt:
      "A design system isn\u2019t a luxury for big companies. It\u2019s the reason some brands look polished everywhere and others look like they\u2019re winging it.",
    category: "Design",
    date: "2026-02-20",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=3840&q=90",
    content: `You\u2019ve seen the difference. Some brands look polished on every touchpoint \u2014 their website, their Instagram, their emails, their proposals. Others look like each piece was designed by a different person on a different day.

The difference is a design system.

## What Is a Design System?

A design system is the single source of truth for your brand\u2019s visual language. It defines:

- **Colours.** Not just "blue" but the exact hex codes, when to use each shade, and what each colour communicates.
- **Typography.** Which fonts, at what sizes, for what purpose. Headings, body text, captions, buttons \u2014 all defined.
- **Spacing.** Consistent padding, margins, and gaps that create visual rhythm.
- **Components.** Buttons, cards, forms, navigation \u2014 designed once, used everywhere.
- **Tone of voice.** How you write, not just how you look.

## Why It Matters

**Consistency builds trust.** When every touchpoint looks like it belongs to the same brand, customers develop confidence. Inconsistency signals chaos.

**Speed.** When the design decisions are already made, creating new pages, emails, or social posts takes a fraction of the time.

**Scalability.** As your team grows, the design system ensures everyone produces work that looks on-brand without constant design reviews.

**Cost savings.** Decisions made once don\u2019t need to be made again. No more debating which blue to use or what size the heading should be.

## What We Include in Every Brand Package

When we build a design system, it covers:

1. **Colour palette** with primary, secondary, accent, and neutral scales
2. **Typography scale** with font families, weights, and sizes for every context
3. **Spacing system** based on a consistent base unit
4. **Component library** for web (buttons, forms, cards, navigation, footers)
5. **Icon style** \u2014 consistent stroke weight, size, and visual language
6. **Photography direction** \u2014 colour treatment, composition style, mood
7. **Brand guidelines document** that any designer or developer can follow

## You Don\u2019t Need to Be Big

Design systems aren\u2019t just for enterprises. A solo business with a clear design system looks more professional than a 50-person company winging it.

The investment pays for itself the first time you need a new landing page, a social template, or a presentation deck \u2014 and it takes 30 minutes instead of 3 hours because every decision is already made.

## Start Simple

You don\u2019t need a 200-page brand bible on day one. Start with:

- 5 colours (2 primary, 2 neutral, 1 accent)
- 2 fonts (one for headings, one for body)
- A consistent button and link style
- A document that records these decisions

Then build from there. The key is documenting decisions so they don\u2019t need to be made twice.`,
  },
  {
    slug: "anatomy-of-a-high-converting-landing-page",
    title: "Anatomy of a High-Converting Landing Page",
    excerpt:
      "We\u2019ve built over 100 landing pages. Here are the 7 elements that separate pages that convert at 2% from pages that convert at 12%.",
    category: "Strategy",
    date: "2026-02-12",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=3840&q=90",
    content: `A landing page has one job: convert a visitor into a lead or customer. No navigation distractions, no blog sidebar, no "explore our services." One page. One goal.

Here are the 7 elements that make the difference.

## 1. A Headline That States the Outcome

Not what you do. What the visitor gets.

**Bad:** "Professional Web Design Services"
**Good:** "A Website That Turns Visitors Into Customers"

The headline should make someone think "that\u2019s exactly what I need" within 3 seconds.

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
- "Fixed pricing \u2014 no surprise invoices"

## 4. Visual Proof

Show, don\u2019t just tell. Screenshots, before/after comparisons, demo videos, or live interactive previews of your work.

Pages with visual proof convert 40% better than text-only pages. People believe their eyes more than your words.

## 5. Testimonials With Specifics

Vague testimonials ("Great service!") are worthless. Specific ones sell:

"Our organic traffic increased 180% in 4 months. The site loads in 1.2 seconds and we rank on page 1 for our primary keywords."

Numbers, timelines, and measurable results. That\u2019s what builds trust.

## 6. A Single, Unmissable CTA

One call to action. Repeated 2\u20133 times on the page. Visually dominant \u2014 gradient background, large text, impossible to miss.

Don\u2019t give people choices. "Get a Free Quote" or "Book a Consultation." Not both.

## 7. Urgency or Scarcity (Honest)

Not fake countdown timers. Real urgency:

- "We take on 3 new projects per month"
- "Free consultation \u2014 limited availability this quarter"
- "Prices increase April 1st"

If the urgency is real, state it. If it\u2019s not, skip this element entirely. Fake urgency destroys trust.

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
    excerpt:
      "The European Accessibility Act takes effect in 2025. Here\u2019s what it means for your website and why accessibility is good business, not just compliance.",
    category: "Accessibility",
    date: "2026-02-05",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=3840&q=90",
    content: `Web accessibility used to be a nice-to-have. As of 2025, it\u2019s the law.

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

**Understandable.** Text is readable. Navigation is consistent. Error messages are clear and helpful. Forms explain what\u2019s needed.

**Robust.** The site works with assistive technology \u2014 screen readers, voice control, switch devices.

## The Business Case

Accessibility isn\u2019t just about compliance. It\u2019s about reach.

- **15% of the world\u2019s population** has some form of disability
- **Accessible sites rank better** on Google (semantic HTML, proper headings, and alt text are SEO fundamentals)
- **Accessible sites are faster** (clean code, proper structure, optimised media)
- **Accessible sites convert better** (clear navigation, readable text, obvious CTAs help everyone)

## Common Failures We See

When we audit websites, these issues appear on nearly every one:

1. **Missing alt text** on images (screen readers can\u2019t describe what they can\u2019t read)
2. **Low colour contrast** (light grey text on white backgrounds \u2014 fails WCAG 4.5:1 ratio)
3. **No keyboard navigation** (try pressing Tab through your site \u2014 can you reach everything?)
4. **Missing form labels** (inputs without labels are invisible to screen readers)
5. **Auto-playing media** (disorienting for users with cognitive disabilities)
6. **No skip navigation** (keyboard users must tab through the entire header on every page)

## What We Build Into Every Project

Accessibility isn\u2019t an add-on. It\u2019s built into our process from day one:

- Semantic HTML structure (proper headings, landmarks, and roles)
- Colour contrast ratios that exceed WCAG AA requirements
- Full keyboard navigability with visible focus indicators
- Alt text on every image
- ARIA labels on interactive elements
- Skip-to-content links
- Responsive text sizing (no fixed pixel fonts)
- Reduced motion support for users who prefer it

## Start With an Audit

If your current site wasn\u2019t built with accessibility in mind, start with an audit. Tools like axe DevTools, WAVE, and Lighthouse accessibility audits can identify the most critical issues.

Fix the high-impact items first: alt text, colour contrast, keyboard navigation, and form labels. These four changes alone will address 80% of common accessibility failures.

Accessibility makes your site better for everyone \u2014 not just users with disabilities. Clear navigation, readable text, and logical structure benefit every visitor.`,
  },
];
