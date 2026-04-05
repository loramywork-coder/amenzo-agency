"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DemoBanner } from "@/components/demos/demo-banner";
import Reveal from "@/components/demos/Reveal";

/* ------------------------------------------------------------------ */
/*  PALETTE                                                           */
/* ------------------------------------------------------------------ */
const BG      = "#080808";
const SURFACE = "#111111";
const GREEN   = "#22C55E";
const WHITE   = "#FFFFFF";
const MUTED   = "#71717A";
const BORDER  = "#27272A";

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/* ------------------------------------------------------------------ */
const NAV_LINKS = [
  { label: "Classes",    href: "/demos/fitness/classes" },
  { label: "Trainers",   href: "/demos/fitness/trainers" },
  { label: "Pricing",    href: "/demos/fitness/pricing" },
  { label: "Blog",       href: "/demos/fitness/blog" },
  { label: "Gallery",    href: "/demos/fitness/gallery" },
];

interface Plan {
  name: string;
  price: number;
  highlighted: boolean;
  features: string[];
  description: string;
}

const PLANS: Plan[] = [
  {
    name: "BASIC",
    price: 49,
    highlighted: false,
    description: "Everything you need to get started on your fitness journey.",
    features: [
      "Full gym access",
      "Locker room & showers",
      "2 group classes / week",
      "Basic fitness assessment",
      "Mobile app access",
    ],
  },
  {
    name: "PRO",
    price: 79,
    highlighted: true,
    description: "For those serious about results. Our most popular plan.",
    features: [
      "Full gym access",
      "Unlimited group classes",
      "Personal training 1x / month",
      "Sauna & steam room",
      "Priority class booking",
      "Nutrition guidance",
      "InBody composition scan",
    ],
  },
  {
    name: "ELITE",
    price: 119,
    highlighted: false,
    description: "The ultimate package. No limits, no compromises.",
    features: [
      "Everything in Pro",
      "Unlimited personal training",
      "Custom nutrition plan",
      "Recovery suite access",
      "2 guest passes / month",
      "Priority equipment booking",
      "Quarterly health checkup",
      "Exclusive member events",
    ],
  },
];

const COMPARISON_FEATURES = [
  { feature: "Gym Access",               basic: true,  pro: true,  elite: true  },
  { feature: "Locker Room",              basic: true,  pro: true,  elite: true  },
  { feature: "Group Classes",            basic: "2/wk", pro: "Unlimited", elite: "Unlimited" },
  { feature: "Personal Training",        basic: false, pro: "1x/mo", elite: "Unlimited" },
  { feature: "Sauna & Steam",            basic: false, pro: true,  elite: true  },
  { feature: "Priority Booking",         basic: false, pro: true,  elite: true  },
  { feature: "Nutrition Plan",           basic: false, pro: false, elite: true  },
  { feature: "Recovery Suite",           basic: false, pro: false, elite: true  },
  { feature: "Guest Passes",             basic: false, pro: false, elite: "2/mo" },
  { feature: "InBody Scan",              basic: false, pro: true,  elite: true  },
  { feature: "Quarterly Health Checkup", basic: false, pro: false, elite: true  },
];

/* ------------------------------------------------------------------ */
/*  INLINE NAV (absolute)                                             */
/* ------------------------------------------------------------------ */
function FitNav() {
  return (
    <nav
      className="absolute top-10 left-0 right-0 z-50"
      style={{ background: "transparent" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/demos/fitness"
          className="flex items-center gap-0 text-xl font-bold uppercase tracking-wider"
          style={{ fontFamily: "var(--font-gym-display), sans-serif" }}
        >
          <span style={{ color: WHITE }}>FIT</span>
          <span style={{ color: GREEN }}>ZONE</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] uppercase tracking-wider transition-colors hover:text-white"
              style={{ color: MUTED, letterSpacing: "0.08em" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/demos/fitness#cta"
          className="hidden rounded-full px-6 py-2.5 text-[13px] font-medium uppercase tracking-wider transition-all hover:brightness-110 md:inline-block"
          style={{ background: GREEN, color: "#000" }}
        >
          Start Free Trial
        </Link>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  CHECK / X ICONS                                                   */
/* ------------------------------------------------------------------ */
function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3F3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  CELL RENDERER                                                     */
/* ------------------------------------------------------------------ */
function CellValue({ value }: { value: boolean | string }) {
  if (value === true)  return <CheckIcon />;
  if (value === false) return <XIcon />;
  return <span className="text-[13px] font-semibold" style={{ color: GREEN }}>{value}</span>;
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */
export default function PricingPage() {
  return (
    <main style={{ background: BG, color: WHITE, fontFamily: "var(--font-gym-display), Inter, system-ui, sans-serif" }}>
      <DemoBanner />
      <FitNav />

      {/* ════════════ HERO ════════════ */}
      <section className="px-6 pb-16 pt-36 md:px-12 lg:px-20" style={{ background: BG }}>
        <Reveal>
          <div className="mx-auto max-w-6xl text-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-semibold uppercase"
              style={{ color: GREEN, letterSpacing: "0.35em" }}
            >
              INVEST IN YOURSELF
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-[52px] font-black uppercase tracking-tight md:text-[72px]"
              style={{ fontFamily: "var(--font-gym-display), sans-serif" }}
            >
              MEMBER<span style={{ color: GREEN }}>SHIP</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed"
              style={{ color: MUTED }}
            >
              No contracts. No hidden fees. Just results. Choose the plan that matches
              your ambition and start transforming today.
            </motion.p>
          </div>
        </Reveal>
      </section>

      {/* ════════════ PRICING CARDS ════════════ */}
      <section className="px-6 pb-28 md:px-12 lg:px-20" style={{ background: BG }}>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="relative flex h-full flex-col rounded-2xl p-8"
                style={{
                  background: SURFACE,
                  border: plan.highlighted ? `2px solid ${GREEN}` : `1px solid ${BORDER}`,
                }}
              >
                {plan.highlighted && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[11px] font-bold uppercase tracking-widest"
                    style={{ background: GREEN, color: "#000" }}
                  >
                    Most Popular
                  </div>
                )}

                <h3
                  className="text-[13px] font-bold uppercase tracking-widest"
                  style={{ color: plan.highlighted ? GREEN : MUTED, letterSpacing: "0.2em" }}
                >
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-[48px] font-black" style={{ fontFamily: "var(--font-gym-display), sans-serif" }}>
                    &euro;{plan.price}
                  </span>
                  <span className="text-[14px]" style={{ color: MUTED }}>/mo</span>
                </div>

                <p className="mt-3 text-[13px] leading-relaxed" style={{ color: MUTED }}>
                  {plan.description}
                </p>

                <div className="my-6 border-t" style={{ borderColor: BORDER }} />

                <ul className="flex-1 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-[13px]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span style={{ color: "rgba(255,255,255,0.8)" }}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="mt-8 w-full rounded-full py-3.5 text-[13px] font-bold uppercase tracking-widest transition-all duration-200 hover:brightness-110"
                  style={{
                    background: plan.highlighted ? GREEN : "transparent",
                    color: plan.highlighted ? "#000" : WHITE,
                    border: plan.highlighted ? "none" : `1px solid ${BORDER}`,
                  }}
                >
                  JOIN NOW
                </button>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════ COMPARISON TABLE ════════════ */}
      <section className="px-6 pb-28 md:px-12 lg:px-20" style={{ background: BG }}>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2
              className="mb-12 text-center text-[32px] font-black uppercase tracking-tight md:text-[40px]"
              style={{ fontFamily: "var(--font-gym-display), sans-serif" }}
            >
              COMPARE <span style={{ color: GREEN }}>PLANS</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-x-auto rounded-xl" style={{ border: `1px solid ${BORDER}` }}>
              <table className="w-full min-w-[600px] text-left">
                <thead>
                  <tr style={{ background: SURFACE }}>
                    <th className="px-6 py-4 text-[12px] font-bold uppercase tracking-widest" style={{ color: MUTED }}>Feature</th>
                    <th className="px-6 py-4 text-center text-[12px] font-bold uppercase tracking-widest" style={{ color: MUTED }}>Basic</th>
                    <th className="px-6 py-4 text-center text-[12px] font-bold uppercase tracking-widest" style={{ color: GREEN }}>Pro</th>
                    <th className="px-6 py-4 text-center text-[12px] font-bold uppercase tracking-widest" style={{ color: MUTED }}>Elite</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_FEATURES.map((row, idx) => (
                    <tr
                      key={row.feature}
                      style={{
                        background: idx % 2 === 0 ? BG : SURFACE,
                        borderTop: `1px solid ${BORDER}`,
                      }}
                    >
                      <td className="px-6 py-4 text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center"><div className="flex justify-center"><CellValue value={row.basic} /></div></td>
                      <td className="px-6 py-4 text-center"><div className="flex justify-center"><CellValue value={row.pro} /></div></td>
                      <td className="px-6 py-4 text-center"><div className="flex justify-center"><CellValue value={row.elite} /></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════ GUARANTEE ════════════ */}
      <section className="px-6 pb-28 md:px-12 lg:px-20" style={{ background: BG }}>
        <Reveal>
          <div
            className="mx-auto max-w-3xl rounded-2xl p-10 text-center md:p-14"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <div
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
              style={{ background: "rgba(34,197,94,0.1)", border: `1px solid rgba(34,197,94,0.3)` }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <h3
              className="text-[24px] font-black uppercase tracking-tight md:text-[28px]"
              style={{ fontFamily: "var(--font-gym-display), sans-serif" }}
            >
              30-DAY MONEY-BACK <span style={{ color: GREEN }}>GUARANTEE</span>
            </h3>
            <p className="mx-auto mt-4 max-w-md text-[14px] leading-relaxed" style={{ color: MUTED }}>
              Not feeling it? No problem. If you&apos;re not completely satisfied within your first
              30 days, we&apos;ll refund every cent. No questions asked.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              {["Cancel anytime", "No lock-in contracts", "Full refund policy"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[13px]" style={{ color: "rgba(255,255,255,0.7)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer style={{ background: "#000000", borderTop: `1px solid ${BORDER}` }} className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-0 text-2xl font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-gym-display), sans-serif" }}>
                <span style={{ color: WHITE }}>FIT</span>
                <span style={{ color: GREEN }}>ZONE</span>
              </div>
              <p className="mt-4 max-w-xs text-[13px] leading-relaxed" style={{ color: MUTED }}>
                Premium fitness facility. Transforming bodies and lives since 2018.
              </p>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: WHITE }}>LOCATION</h4>
              <div className="mt-4 space-y-2 text-[13px]" style={{ color: MUTED }}>
                <p>23 Harbour Street</p>
                <p>Downtown</p>
              </div>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: WHITE }}>HOURS</h4>
              <div className="mt-4 space-y-2 text-[13px]" style={{ color: MUTED }}>
                <p>Mon &ndash; Fri: 5:00 AM &ndash; 11:00 PM</p>
                <p>Sat &ndash; Sun: 6:00 AM &ndash; 10:00 PM</p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row" style={{ borderColor: BORDER }}>
            <div className="flex gap-6">
              {["Instagram", "Facebook", "YouTube", "TikTok"].map((s) => (
                <span key={s} className="cursor-pointer text-[12px] uppercase tracking-wider transition-colors hover:text-white" style={{ color: MUTED }}>
                  {s}
                </span>
              ))}
            </div>
            <span className="text-[12px]" style={{ color: MUTED }}>&copy; 2026 FitZone. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
