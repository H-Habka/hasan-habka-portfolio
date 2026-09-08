import React from "react"
import SectionHeading from "../SectionHeading"
import { generalDetails } from "../../content/generalDetails"
import DrawingFrame from "../home/DrawingFrame"
import Reveal from "../home/Reveal"

const AboutMe = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="01 / Profile" title="About me" />
        <Reveal className="mt-10">
          <DrawingFrame
            className="grid md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-14 bg-surface/70 p-6 md:p-12"
            label="PROFILE"
            sheet="NAVAL ARCHITECT"
          >
            <h3 className="font-display text-3xl md:text-5xl text-ivory leading-tight">
              {generalDetails.descriptionTitle}
            </h3>
            <p className="text-ivory/80 text-base md:text-lg leading-8">
              {generalDetails.descriptionContent}
            </p>
          </DrawingFrame>
        </Reveal>
      </div>
    </section>
  )
}

export default AboutMe
