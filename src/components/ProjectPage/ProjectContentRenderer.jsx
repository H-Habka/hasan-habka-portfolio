import React from "react"
import TextSplitter from "../TextSpletter"
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
    <div className=" md:px-[10vw] pt-10 md:min-h-screen flex flex-col justify-center">
      <div className="bg-[#23232388] text-white rounded-md md:px-8 px-6 py-10">
        <div className=" md:max-w-[50%]">
          <div className="flex items-center justify-between">
            <div className="md:text-[100px] text-[60px] font-bold">
              <TextSplitter containerClassName="justify-start" text={title} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {descriptionBlocks?.map((description, idx) => {
              return (
                <p
                  className="text-[20px]"
                  data-aos="fade-right"
                  data-aos-delay={500 + idx * 300}
                  data-aos-duration="800"
                >
                  {description}
                </p>
              )
            })}
          </div>
          <div className="mt-8">
            <Tags keywords={tags} />
          </div>
        </div>
        {photoGallery?.map(
          ({ photoGalleryTitle, strokeWordsArray, images }) => {
            return (
              <div className="mt-20">
                <div className="mb-6 text-white text-[32px] font-bold tracking-wide  md:text-[80px] flex justify-center">
                  <TextSplitter
                    strokeWordsArray={strokeWordsArray}
                    text={photoGalleryTitle}
                  />
                </div>
                <div data-aos="zoom-in-up">
                  <PhotoGallery images={images} />
                </div>
              </div>
            )
          }
        )}
        {videos?.map(({ title, videoId, strokeWordsArray }) => {
          return (
            <div className="mt-20">
              <div className="mb-6 text-white text-[32px] font-bold tracking-wide  md:text-[80px] flex justify-center ">
                <TextSplitter
                  strokeWordsArray={strokeWordsArray}
                  text={title}
                />
              </div>
              <div data-aos="zoom-in-up" className="h-[calc(9/16*100vw)] md:h-[80vh]">
                <YoutubeVideoRenderer videoId={videoId} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectContentRenderer
