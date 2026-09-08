import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion"

gsap.registerPlugin(ScrollTrigger)

export default function ScrollExperience() {
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) {
      document.documentElement.classList.add("motion-static")
      return () => document.documentElement.classList.remove("motion-static")
    }

    document.documentElement.classList.add("lenis-active")

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.92,
    })

    window.__lenis = lenis

    lenis.on("scroll", ScrollTrigger.update)

    const ticker = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)

    const refresh = () => ScrollTrigger.refresh()
    const refreshTimer = window.setTimeout(refresh, 400)
    window.addEventListener("load", refresh)

    return () => {
      window.clearTimeout(refreshTimer)
      window.removeEventListener("load", refresh)
      gsap.ticker.remove(ticker)
      lenis.destroy()
      if (window.__lenis === lenis) window.__lenis = null
      document.documentElement.classList.remove("lenis-active")
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [reduced])

  return null
}
