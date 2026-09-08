import React from "react"
import CustomButton from "../CustomButton"
import OptimizedImage from "../OptimizedImage"
import { generalDetails } from "../../content/generalDetails"
import { publicUrl } from "../../utils/publicUrl"
import { scrollToId } from "../../motion/scrollApi"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-24 pb-28 md:pt-28 md:pb-20"
    >
      <div className="section-shell grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-10 md:gap-16 items-center">
        <div className="order-2 md:order-none flex flex-col items-start hero-copy">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.32em] uppercase text-copper">
            {generalDetails.jobTitle} · Hull, yacht & jewellery design
          </p>
          <h1 className="mt-4 font-display text-[3.4rem] leading-[0.9] sm:text-7xl md:text-[6.4rem] text-ivory">
            Hasan{" "}
            <span className="block md:mt-1">Habka</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl text-ivory/80 leading-relaxed">
            {generalDetails.descriptionTitle}
          </p>
          <p className="mt-3 max-w-xl text-sm md:text-base text-ivory/55 tracking-[0.18em] uppercase">
            Sheer · Body · Half-breadth
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CustomButton
              title="Get in touch"
              href="#getInTouch"
              onClick={(event) => {
                event.preventDefault()
                if (scrollToId("getInTouch")) {
                  window.history.replaceState(null, "", "#getInTouch")
                }
              }}
            />
            <CustomButton title="Official docs" reversed to="/official-docs" />
          </div>
          <p className="mt-8 text-[11px] tracking-[0.22em] uppercase text-mute">
            Scroll — the camera walks the lines plan
          </p>
        </div>

        <div className="order-1 md:order-none relative mx-auto w-full max-w-[400px] overflow-visible">
          <div className="hero-portrait">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
            >
              <div className="absolute -inset-10 rounded-full bg-copper/15 blur-3xl" />
            </div>
            <div className="hero-waves" aria-hidden>
              <svg viewBox="0 0 128 116" preserveAspectRatio="none">
                <defs>
                  <linearGradient
                    id="hero-wave-grad"
                    x1="0"
                    y1="0"
                    x2="0.2"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#e07a3d" />
                    <stop offset="50%" stopColor="#f0a06a" />
                    <stop offset="100%" stopColor="#d55A54" />
                  </linearGradient>
                  <filter
                    id="hero-wave-glow"
                    x="-30%"
                    y="-30%"
                    width="160%"
                    height="160%"
                  >
                    <feGaussianBlur stdDeviation="1.2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M 78 6 A 70 52 0 0 0 78 110"
                  fill="none"
                  stroke="url(#hero-wave-grad)"
                  strokeWidth="3.6"
                  strokeLinecap="round"
                  filter="url(#hero-wave-glow)"
                  opacity="0.95"
                />
                <path
                  d="M 78 16 A 56 42 0 0 0 78 100"
                  fill="none"
                  stroke="url(#hero-wave-grad)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  opacity="0.88"
                />
              </svg>
            </div>
            <OptimizedImage
              priority
              src={publicUrl("images/profile.webp")}
              alt={`Portrait of ${generalDetails.name}`}
              width={320}
              height={320}
              className="relative z-[2] w-full rounded-full border border-ivory/10"
              style={{ boxShadow: "0 18px 48px rgba(0,0,0,.5)" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
