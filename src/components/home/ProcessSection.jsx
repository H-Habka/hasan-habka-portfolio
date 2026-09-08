import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionHeading from "../SectionHeading"
import { processStations } from "../../content/homeExperience"
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion"

gsap.registerPlugin(ScrollTrigger)

export default function ProcessSection() {
  const trackRef = useRef(null)
  const pinRef = useRef(null)
  const keelRef = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced || !trackRef.current || window.innerWidth < 768) return undefined

    const track = trackRef.current
    const distance = track.scrollWidth - track.clientWidth

    const tween = gsap.to(track, {
      x: -distance,
      ease: "none",
      scrollTrigger: {
        trigger: pinRef.current,
        start: "top 12%",
        end: () => `+=${Math.max(distance, 700)}`,
        scrub: 0.65,
        pin: true,
        anticipatePin: 1,
      },
    })

    if (keelRef.current) {
      gsap.fromTo(
        keelRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top 12%",
            end: () => `+=${Math.max(distance, 700)}`,
            scrub: 0.65,
          },
        }
      )
    }

    return () => tween.kill()
  }, [reduced])

  return (
    <section id="process" className="py-20 md:py-28 overflow-hidden">
      <div ref={pinRef} className="section-shell">
        <SectionHeading
          eyebrow="03 / Stations"
          title="From brief to basin"
        />
        <p className="mt-5 max-w-2xl text-ivory/75 text-base md:text-lg leading-relaxed">
          A working sequence, not a certified pipeline: the same path visible in
          the DockWise study — Rhino surfaces, Maxsurf checks, structure, then a
          model you can hold or run.
        </p>

        <div className="mt-8 keel-meter" aria-hidden>
          <span ref={keelRef} className="keel-meter__fill" />
        </div>

        <div
          ref={trackRef}
          className="mt-8 flex flex-col md:flex-row gap-4 md:gap-5 md:w-max"
        >
          {processStations.map((step) => (
            <article
              key={step.station}
              className="dwg-frame process-card bg-surface/75 p-6 md:p-8"
            >
              <p className="text-[11px] tracking-[0.28em] uppercase text-copper">
                {step.station}
              </p>
              <h3 className="mt-4 font-display text-3xl md:text-4xl text-ivory">
                {step.title}
              </h3>
              <p className="mt-4 text-ivory/75 leading-7">{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
