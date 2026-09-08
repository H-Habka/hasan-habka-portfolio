import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion"

gsap.registerPlugin(ScrollTrigger)

export default function Reveal({
  children,
  className = "",
  y = 40,
  delay = 0,
  as: Tag = "div",
}) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (!ref.current || reduced) return undefined
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        y,
        opacity: 0,
        duration: 1.05,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [delay, reduced, y])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
