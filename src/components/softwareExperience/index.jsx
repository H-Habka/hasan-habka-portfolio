import React from "react"
import TextSplitter from "../TextSpletter"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { softwareExperienceData } from "../../content/softwareExperienceData"

const SoftwareExperience = () => {
  return (
    <div
      data-aos="fade-up"
      className="md:px-[10vw] md:mt-0 mt-[130px] md:min-h-[100vh] flex flex-col justify-center"
    >
      <div className=" flex flex-col md:flex-row gap-10 items-center  bg-[#12121222] p-8 md:rounded-xl">
        <div className="md:py-20 text-3xl font-bold  md:text-4xl md:max-w-[40vw] flex gap-2 text-four">
          <TextSplitter strokeWordsArray={[0, 1]} text="Software Experience" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 flex-1 [&_img]:rounded-xl hover:[&_img]:-translate-y-1 hover:[&_img]:-translate-x-1 [&_img]:transition-all [&_img]:duration-200 hover:[&_img]:shadow-[10px_10px_10px_2px_#121212] [&_img]:w-[120px] [&_img]:h-[120px] [&>a]:justify-self-center">
          {softwareExperienceData?.map((item, idx) =>
            item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                data-aos="zoom-out"
                data-aos-delay={idx * 250}
              >
                <LazyLoadImage alt="autocad" src={item.image} />
              </a>
            ) : (
              <div
                className="flex items-center justify-center"
                data-aos="zoom-out"
                data-aos-delay={idx * 250}
              >
                <LazyLoadImage alt="autocad" src={item.image} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default SoftwareExperience
