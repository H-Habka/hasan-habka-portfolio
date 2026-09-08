import React from "react"
import SectionHeading from "../SectionHeading"
import { generalDetails } from "../../content/generalDetails"

const AboutMe = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="01 / Profile" title="About me" />
        <div
          data-aos="fade-up"
          className="mt-10 grid md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-14 rounded-3xl border border-line bg-surface/70 p-6 md:p-12"
        >
          <h3 className="font-display text-3xl md:text-5xl text-ivory leading-tight">
            {generalDetails.descriptionTitle}
          </h3>
          <p
            data-aos="fade-up"
            data-aos-delay="80"
            className="text-ivory/80 text-base md:text-lg leading-8"
          >
            {generalDetails.descriptionContent}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
