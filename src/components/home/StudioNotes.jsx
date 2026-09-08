import SectionHeading from "../SectionHeading"
import Reveal from "./Reveal"
import { studioNotes } from "../../content/homeExperience"

export default function StudioNotes() {
  return (
    <section id="notes" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="How the work is held"
          title="Studio notes — in his own terms"
        />
        <p className="mt-5 max-w-2xl text-ivory/75 text-base md:text-lg leading-relaxed">
          Not client quotes. These lines are taken from the way Hasan already
          describes the practice: brief, standards, stability, and a job that
          runs from first surface to last review.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-4 md:gap-5">
          {studioNotes.map((note, index) => (
            <Reveal key={note.mark} delay={index * 0.08}>
              <blockquote className="dwg-frame h-full bg-surface/70 p-6 md:p-8">
                <p className="font-display text-4xl text-copper">{note.mark}</p>
                <h3 className="mt-4 font-display text-2xl md:text-3xl text-ivory leading-tight">
                  {note.title}
                </h3>
                <p className="mt-4 text-ivory/75 leading-7">{note.copy}</p>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
