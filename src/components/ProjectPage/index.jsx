import React, { lazy } from "react"
import { useParams } from "react-router-dom"
import ProjectContentRenderer from "./ProjectContentRenderer"
import { projectsData } from "../../content/projects"

const WorkSection = lazy(() => import("../WorkSection/index"))
const GetInTouchSection = lazy(() => import("../GetInTouchSection"))

const ProjectPage = () => {
  const params = useParams()
  const projectName = params["projectName"]
  const projectToRender = projectsData[projectName]

  return (
    <main>
      <ProjectContentRenderer {...projectToRender} />
      <WorkSection cardToHide={projectName} title="More work" />
      <GetInTouchSection />
    </main>
  )
}

export default ProjectPage
