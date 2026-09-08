import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "react-router-dom"
import { docwiseDetails } from "../../content/projects/dockwise"
import SectionHeading from "../SectionHeading"
import OptimizedImage from "../OptimizedImage"
import CustomButton from "../CustomButton"
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion"

gsap.registerPlugin(ScrollTrigger)

const heroImage = docwiseDetails.photoGallery[0].images[0].original
const structureImage = docwiseDetails.photoGallery[1].images[0].original

export default function FeaturedVessel() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const plateRef = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return undefined
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -8, scale: 1.08 },
        {
          yPercent: 8,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      )
      gsap.from(plateRef.current, {
        y: 48,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: plateRef.current,
          start: "top 85%",
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section id="featured" ref={sectionRef} className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="05 / Featured study"
          title="DockWise — lines to basin"
        />
        <div className="mt-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-6 md:gap-8 items-stretch">
          <div className="featured-stage dwg-frame overflow-hidden min-h-[320px] md:min-h-[520px]">
            <div ref={imageRef} className="featured-stage__image-wrap">
              <OptimizedImage
                src={heroImage}
                alt="Rendered DockWise hull study"
                width={1200}
                height={800}
                className="featured-stage__image"
              />
            </div>
            <div className="featured-stage__meta">
              <span>DWG · DOCKWISE</span>
              <span>RHINO + MAXSURF</span>
            </div>
          </div>

          <div ref={plateRef} className="dwg-frame bg-surface/80 p-6 md:p-8 flex flex-col">
            <p className="text-[11px] tracking-[0.28em] uppercase text-copper">
              Final year project · 99% grade
            </p>
            <h3 className="mt-4 font-display text-3xl md:text-5xl text-ivory leading-tight">
              An integrated design study, then a wooden model in the yard.
            </h3>
            {docwiseDetails.descriptionBlocks.map((block) => (
              <p
                key={block.slice(0, 24)}
                className="mt-4 text-ivory/75 text-sm md:text-base leading-7"
              >
                {block}
              </p>
            ))}
            <div className="mt-5 flex flex-wrap gap-2">
              {docwiseDetails.tags.map((tag) => (
                <span key={tag} className="dwg-chip">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <CustomButton title="Open the study" to="/projects/dockwise" />
            </div>
          </div>
        </div>

        <Link
          to="/projects/dockwise"
          className="mt-6 md:mt-8 group dwg-frame overflow-hidden grid md:grid-cols-[0.7fr_1.3fr] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
        >
          <div className="relative min-h-[200px]">
            <OptimizedImage
              src={structureImage}
              alt="DockWise structure design drawing"
              width={900}
              height={520}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>
          <div className="p-6 md:p-10 bg-surface/80 flex flex-col justify-center">
            <p className="text-[11px] tracking-[0.28em] uppercase text-copper">
              Structure design
            </p>
            <p className="mt-3 font-display text-2xl md:text-4xl text-ivory">
              The same hull, opened as structure — the second sheet in the
              DockWise set.
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.16em] text-mute group-hover:text-copper transition-colors">
              Continue into the gallery →
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}
