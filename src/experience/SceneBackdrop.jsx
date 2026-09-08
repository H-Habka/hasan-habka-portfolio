import { Suspense, useEffect, useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion"
import { useWebGLSupport } from "../hooks/useWebGLSupport"
import HullStudio from "./HullStudio"
import LinesPlanFallback from "../components/home/LinesPlanFallback"

gsap.registerPlugin(ScrollTrigger)

export default function SceneBackdrop() {
  const reduced = usePrefersReducedMotion()
  const webgl = useWebGLSupport()
  const progressRef = useRef(0)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)")
    const sync = () => setMobile(media.matches)
    sync()
    media.addEventListener("change", sync)
    return () => media.removeEventListener("change", sync)
  }, [])

  useEffect(() => {
    const root = document.querySelector(".scene-backdrop")
    const trigger = ScrollTrigger.create({
      trigger: "#home-experience",
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        progressRef.current = self.progress
      },
    })
    const fade = root
      ? gsap.fromTo(
          root,
          { opacity: 1 },
          {
            opacity: 0.12,
            ease: "none",
            scrollTrigger: {
              trigger: "#home-experience",
              start: "center top",
              end: "bottom top",
              scrub: true,
            },
          }
        )
      : null
    return () => {
      trigger.kill()
      fade?.scrollTrigger?.kill()
      fade?.kill()
    }
  }, [])

  if (!webgl) {
    return (
      <div className="scene-backdrop" aria-hidden>
        <LinesPlanFallback />
      </div>
    )
  }

  return (
    <div className="scene-backdrop" aria-hidden>
      <Canvas
        camera={{ position: [0.35, 0.92, 5.1], fov: 30, near: 0.1, far: 40 }}
        dpr={mobile ? [1, 1] : [1, 1.5]}
        style={{ pointerEvents: "none" }}
        gl={{
          antialias: !mobile,
          alpha: true,
          powerPreference: mobile ? "low-power" : "high-performance",
        }}
        frameloop={reduced ? "demand" : "always"}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0)
          if (reduced) gl.domElement.parentElement?.classList.add("is-static")
        }}
      >
        <Suspense fallback={null}>
          <HullStudio
            progressRef={progressRef}
            reduced={reduced}
            mobile={mobile}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
