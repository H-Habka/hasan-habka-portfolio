import React from "react"
import SectionHeading from "../SectionHeading"
import WorkCard from "./workCard"
import { projectsDataAsArray } from "../../content/projects"
import OptimizedImage from "../OptimizedImage"

const WorkSection = ({ title = "Latest work", cardToHide }) => {
  const heading = title
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase())

  return (
    <section id="work" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow={cardToHide ? "Portfolio" : "06 / Portfolio"}
          title={heading}
        />
        <div className="mt-10 grid md:grid-cols-2 gap-5 md:gap-7">
          {projectsDataAsArray.map((project) => {
            if (project.name === cardToHide) return null

            const preview =
              project?.cardImages?.[0] ??
              project.photoGallery?.[0]?.images?.[0]?.original

            return (
              <WorkCard
                to={`/projects/${project.name}`}
                title={project.title}
                key={project.name}
              >
                <OptimizedImage
                  className="w-full h-full object-cover"
                  src={preview}
                  alt={`${project.title} preview`}
                  width={800}
                  height={400}
                />
              </WorkCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WorkSection
