import SectionHeading from "../SectionHeading"
import DrawingFrame from "./DrawingFrame"
import Reveal from "./Reveal"
import { capabilities } from "../../content/homeExperience"

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="02 / Drawing office"
          title="What the board is for"
        />
        <p className="mt-5 max-w-2xl text-ivory/75 text-base md:text-lg leading-relaxed">
          Naval architecture and marine design, with the same surface discipline
          used for jewellery CAD. These are the jobs the tools already on this
          site are built for — not a new list of certificates.
        </p>
        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
          {capabilities.map((item, index) => (
            <Reveal key={item.code} delay={index * 0.06}>
              <DrawingFrame
                className="h-full p-6 md:p-7 bg-surface/70"
                label={item.code}
                sheet="CAPABILITY"
              >
                <h3 className="font-display text-2xl md:text-3xl text-ivory leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-ivory/75 text-sm md:text-base leading-7">
                  {item.copy}
                </p>
              </DrawingFrame>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
