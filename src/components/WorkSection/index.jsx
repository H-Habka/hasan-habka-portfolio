import React from "react"
import TextSplitter from "../TextSpletter"
import WorkCard from "./workCard"
import { projectsDataAsArray } from "../../content/projects"
import OptimizedImage from "../OptimizedImage"

const WorkSection = ({ title, isSticky, cardToHide }) => {
  return (
    <div className="mt-[100px] md:mt-0 md:px-[10vw] ">
      <div className="bg-[#12121222] pt-6 relative md:rounded-xl px-4 md:px-10  flex flex-col justify-center">
        <div className={isSticky ? "sticky md:-top-2 top-8 " : ""}>
          <div className="relative justify-center flex">
            <div className="md:text-[7em] text-[45px] flex items-center gap-6 justify-center font-[900] text-white">
              <TextSplitter
                withoutAnimation
                strokeWordsArray={[1]}
                text={title}
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            isSticky ? "sticky md:top-[30px] top-[20px]  " : "absolute top-2"
          }  left-0 z-1 w-full h-[50px]  mix-blend-darken  bg-orange-300`}
        ></div>
        <div
          data-aos="fade-up"
          className="flex flex-col gap-8 z-20 pb-8  md:px-8"
        >
          {projectsDataAsArray.map((project) => {
            const previewLeft =
              project?.cardImages?.[0] ??
              project.photoGallery?.[0]?.images?.[0]?.original
            const previewRight =
              project?.cardImages?.[1] ??
              project.photoGallery?.[0]?.images?.[1]?.original

            return (
              project.name !== cardToHide && (
                <WorkCard
                  isSticky={isSticky}
                  to={`/projects/${project.name}`}
                  title={project.title}
                  key={project.name}
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <OptimizedImage
                      className="lg:w-1/2 flex-1 h-full w-full object-cover"
                      src={previewLeft}
                      alt={`${project.title} preview`}
                      width={800}
                      height={400}
                    />
                    {previewRight ? (
                      <OptimizedImage
                        className="lg:w-1/2 flex-1 h-full w-full object-cover"
                        src={previewRight}
                        alt=""
                        width={800}
                        height={400}
                      />
                    ) : null}
                  </div>
                </WorkCard>
              )
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default WorkSection
