import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionHeading from "../SectionHeading"
import { processStations } from "../../content/homeExperience"
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion"

gsap.registerPlugin(ScrollTrigger)

export default function ProcessSection() {
  const pinRef = useRef(null)
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const keelRef = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return undefined

    const pin = pinRef.current
    const viewport = viewportRef.current
    const track = trackRef.current
    const keel = keelRef.current
    if (!pin || !viewport || !track) return undefined

    const mm = gsap.matchMedia()

    mm.add("(min-width: 768px)", () => {
      const distance = () =>
        Math.max(0, track.scrollWidth - viewport.clientWidth)

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top 88px",
          end: () => `+=${Math.max(distance() * 1.15, 900)}`,
          scrub: 0.65,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      })

      const keelTween = keel
        ? gsap.fromTo(
            keel,
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: pin,
                start: "top 88px",
                end: () => `+=${Math.max(distance() * 1.15, 900)}`,
                scrub: 0.65,
                invalidateOnRefresh: true,
              },
            }
          )
        : null

      const refresh = () => ScrollTrigger.refresh()
      const refreshTimer = window.setTimeout(refresh, 50)
      window.addEventListener("load", refresh)
      document.fonts?.ready?.then(refresh)

      return () => {
        window.clearTimeout(refreshTimer)
        window.removeEventListener("load", refresh)
        tween.kill()
        keelTween?.kill()
      }
    })

    return () => mm.revert()
  }, [reduced])

  return (
    <section id="process" className="py-20 md:py-28">
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

        <div ref={viewportRef} className="process-viewport mt-8">
          <div ref={trackRef} className="process-track gap-4 md:gap-5">
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
      </div>
    </section>
  )
}
