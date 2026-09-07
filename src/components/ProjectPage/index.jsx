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
    <div>
      <ProjectContentRenderer {...projectToRender} />
      <div className="pb-[120px]">
        <WorkSection cardToHide={projectName} title="MORE WORK" />
        <GetInTouchSection hideSocialMedia />
      </div>
    </div>
  )
}

export default ProjectPage
