import React from "react"
import SectionHeading from "../SectionHeading"
import OptimizedImage from "../OptimizedImage"
import { softwareExperienceData } from "../../content/softwareExperienceData"

const SoftwareExperience = () => {
  return (
    <section id="software" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="02 / Tools" title="Software experience" />
        <div
          data-aos="fade-up"
          className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {softwareExperienceData?.map((item, idx) => {
            const inner = (
              <>
                <OptimizedImage
                  alt={item.name}
                  src={item.image}
                  width={120}
                  height={120}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover"
                />
                <p className="mt-4 text-sm md:text-base font-medium text-ivory">
                  {item.name}
                </p>
              </>
            )

            const cardClass =
              "flex flex-col items-center justify-center rounded-2xl border border-line bg-surface/70 p-6 min-h-[160px] transition-transform duration-200 hover:-translate-y-1"

            return item.href ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                data-aos="zoom-out"
                data-aos-delay={idx * 80}
                aria-label={item.name}
                className={cardClass}
              >
                {inner}
              </a>
            ) : (
              <div
                key={item.name}
                className={cardClass}
                data-aos="zoom-out"
                data-aos-delay={idx * 80}
              >
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SoftwareExperience
