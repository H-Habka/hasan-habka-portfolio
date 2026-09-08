import React from "react"
import CustomButton from "../CustomButton"
import OptimizedImage from "../OptimizedImage"
import { generalDetails } from "../../content/generalDetails"
import { publicUrl } from "../../utils/publicUrl"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-24 pb-28 md:pt-28 md:pb-20"
    >
      <div className="section-shell grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-10 md:gap-16 items-center">
        <div className="order-2 md:order-none flex flex-col items-start">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.32em] uppercase text-copper">
            {generalDetails.jobTitle}
          </p>
          <h1 className="mt-4 font-display text-[3.4rem] leading-[0.9] sm:text-7xl md:text-[6.4rem] text-ivory">
            Hasan{" "}
            <span className="block md:mt-1">Habka</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl text-ivory/80 leading-relaxed">
            {generalDetails.descriptionTitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CustomButton
              title="Get in touch"
              href="#getInTouch"
              onClick={(event) => {
                const section = document.getElementById("getInTouch")
                if (!section) return
                event.preventDefault()
                section.scrollIntoView({ behavior: "smooth", block: "start" })
                window.history.replaceState(null, "", "#getInTouch")
              }}
            />
            <CustomButton title="Official docs" reversed to="/official-docs" />
          </div>
        </div>

        <div className="order-1 md:order-none relative mx-auto w-full max-w-[380px] overflow-visible pl-[18%] md:pl-[22%]">
          <div className="relative w-full">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
            >
              <div className="absolute -inset-10 rounded-full bg-copper/15 blur-3xl" />
            </div>
            <OptimizedImage
              src={publicUrl("images/hero.webp")}
              alt=""
              aria-hidden="true"
              width={178}
              height={309}
              className="pointer-events-none absolute z-[1] h-[108%] md:h-[120%] w-auto max-w-none -left-[22%] md:-left-[28%] top-1/2 -translate-y-1/2 opacity-90"
            />
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
