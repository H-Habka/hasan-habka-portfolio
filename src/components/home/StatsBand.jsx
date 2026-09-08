import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { designStats } from "../../content/homeExperience"
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion"

gsap.registerPlugin(ScrollTrigger)

function Stat({ item }) {
  const reduced = usePrefersReducedMotion()
  const ref = useRef(null)
  const [display, setDisplay] = useState(reduced ? item.value : 0)

  useEffect(() => {
    if (reduced) {
      setDisplay(item.value)
      return undefined
    }
    const state = { val: 0 }
    const tween = gsap.to(state, {
      val: item.value,
      duration: 1.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
      onUpdate: () => setDisplay(Math.round(state.val)),
    })
    return () => tween.kill()
  }, [item.value, reduced])

  return (
    <article ref={ref} className="stat-cell">
      <p className="font-display text-5xl md:text-6xl text-ivory leading-none">
        {display}
        <span className="text-copper">{item.suffix}</span>
      </p>
      <p className="mt-3 text-sm md:text-base font-medium text-ivory">
        {item.label}
      </p>
      <p className="mt-2 text-xs md:text-sm text-mute leading-relaxed">
        {item.note}
      </p>
    </article>
  )
}

export default function StatsBand() {
  return (
    <section id="figures" className="py-8 md:py-10" aria-label="Design figures">
      <div className="section-shell">
        <div className="dwg-frame overflow-hidden">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {designStats.map((item) => (
              <Stat key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
