'use client'

import { useEffect, useRef } from 'react'

const PATHS = [
  'M0,200 C400,100 800,400 1200,150 S1600,300 1920,200',
  'M0,600 C400,500 800,700 1200,400 S1600,600 1920,500',
  'M200,0 C300,300 100,600 400,900 S300,1080 500,1080',
  'M1700,0 C1600,200 1800,500 1500,700 S1600,900 1400,1080',
  'M0,400 C500,200 1000,600 1500,300 S1800,500 1920,400',
  'M960,0 C800,300 1100,500 900,700 S1000,900 960,1080',
  'M0,800 C300,700 700,900 1100,750 S1500,850 1920,800',
  'M1920,100 C1500,300 1000,100 500,400 S200,200 0,350',
]

const BEAM_COLORS = [
  '#ffffff',
  '#3b82f6',
  '#8b5cf6',
  '#0ea5e9',
  '#ffffff',
  '#3b82f6',
  '#8b5cf6',
  '#0ea5e9',
]

const DURATIONS = [6, 5, 7, 4.5, 8, 5.5, 6.5, 4]
const DELAYS = [0, 0.8, 1.5, 0.3, 2, 1, 2.5, 0.5]

const EXPLANATION_CARDS = [
  {
    title: 'SVG Dash Arrays',
    description:
      'The stroke-dasharray property splits a path into visible and invisible segments. By setting a short dash (150px) followed by a long gap (3000px), only a small segment of each path is visible at any time.',
  },
  {
    title: 'Dash Offset Animation',
    description:
      'Animating stroke-dashoffset from a high value to zero slides the visible dash segment along the entire path. This creates the illusion of a beam of light travelling through space.',
  },
  {
    title: 'Gradient Fade',
    description:
      'Each beam uses an SVG linearGradient applied to the stroke, fading from a bright head colour to transparent. Combined with the dash animation, this produces a comet-like tail effect.',
  },
]

export default function BeamsPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes beam-travel {
        from { stroke-dashoffset: 3150; }
        to { stroke-dashoffset: 0; }
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div>
      {/* Hero section */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black">
        {/* Centre glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-[120px]" />
        </div>

        {/* Animated SVG beams */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {BEAM_COLORS.map((color, i) => (
              <linearGradient
                key={`grad-${i}`}
                id={`beam-grad-${i}`}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor={color} stopOpacity="0" />
                <stop offset="70%" stopColor={color} stopOpacity="0.6" />
                <stop offset="100%" stopColor={color} stopOpacity="1" />
              </linearGradient>
            ))}
          </defs>

          {PATHS.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke={`url(#beam-grad-${i})`}
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                strokeDasharray: '150 3000',
                strokeDashoffset: 3150,
                animation: `beam-travel ${DURATIONS[i]}s linear ${DELAYS[i]}s infinite`,
              }}
            />
          ))}
        </svg>

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h1 className="text-[60px] md:text-[100px] font-black text-white tracking-tight leading-none">
            LIGHT
          </h1>
          <h1
            className="text-[60px] md:text-[100px] font-black tracking-tight leading-none bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(to right, #3b82f6, #8b5cf6, #0ea5e9)',
            }}
          >
            BEAMS
          </h1>
          <p className="mt-8 text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/40">
            SVG PATHS &middot; DASH ANIMATION &middot; BEAM GRADIENTS
          </p>
        </div>
      </section>

      {/* Scroll section */}
      <section className="pt-16 pb-20 px-6 max-w-5xl mx-auto">
        {/* Wireframe diagram */}
        <div className="mb-16">
          <svg
            className="w-full"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            {PATHS.map((d, i) => (
              <path
                key={i}
                d={d}
                fill="none"
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="1.5"
              />
            ))}
          </svg>
        </div>

        {/* Explanation cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {EXPLANATION_CARDS.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <h3 className="text-sm font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
