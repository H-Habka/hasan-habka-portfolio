import React from "react"
import SectionHeading from "../SectionHeading"
import Tags from "./Tags"
import PhotoGallery from "../../content/projects/photoGallery"
import YoutubeVideoRenderer from "./youtubeVideoRenderer"

const ProjectContentRenderer = ({
  title,
  descriptionBlocks,
  tags,
  photoGallery,
  videos,
}) => {
  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-16">
      <div className="section-shell">
        <div className="rounded-[2rem] border border-line bg-surface/80 px-6 py-10 md:px-12 md:py-14 text-ivory">
          <SectionHeading
            eyebrow="Project"
            title={title}
            titleClassName="text-5xl md:text-7xl"
          />
          <div className="mt-8 flex flex-col gap-4 max-w-3xl">
            {descriptionBlocks?.map((description, idx) => {
              return (
                <p
                  key={`${title}-desc-${idx}`}
                  className="text-base md:text-lg text-ivory/80 leading-8"
                  data-aos="fade-up"
                  data-aos-delay={80 + idx * 80}
                >
                  {description}
                </p>
              )
            })}
          </div>
          <div className="mt-8">
            <Tags keywords={tags} />
          </div>
          {photoGallery?.map(({ photoGalleryTitle, images }) => {
            return (
              <div key={photoGalleryTitle} className="mt-16">
                <SectionHeading
                  as="h3"
                  title={photoGalleryTitle
                    .toLowerCase()
                    .replace(/\b\w/g, (letter) => letter.toUpperCase())}
                  titleClassName="text-3xl md:text-5xl"
                  className="mb-6 items-center text-center"
                />
                <div data-aos="zoom-in-up">
                  <PhotoGallery images={images} />
                </div>
              </div>
            )
          })}
          {videos?.map(({ title: videoTitle, videoId }) => {
            return (
              <div key={videoId || videoTitle} className="mt-16">
                <SectionHeading
                  as="h3"
                  title={videoTitle}
                  titleClassName="text-3xl md:text-5xl"
                  className="mb-6 items-center text-center"
                />
                <div
                  data-aos="zoom-in-up"
                  className="h-[calc(9/16*100vw)] md:h-[70vh] rounded-2xl overflow-hidden border border-line"
                >
                  <YoutubeVideoRenderer videoId={videoId} title={videoTitle} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectContentRenderer
