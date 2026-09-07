import React from "react"
import TextSplitter from "../TextSpletter"
import { generalDetails } from "../../content/generalDetails"

const AboutMe = () => {
  return (
    <div className="md:px-[10vw] md:min-h-screen flex flex-col justify-center">
      <div className="relative justify-center flex mt-10">
        <div className="pointer-events-none text-[70px] md:text-[7em] flex items-center gap-6  justify-center font-[900] text-white">
          <TextSplitter strokeWordsArray={[0]} text="ABOUT ME" />
        </div>
        <div className="absolute bottom-0 mix-blend-darken  w-full h-1/2 bg-orange-300"></div>
      </div>
      <div
        data-aos="fade-up"
        className="py-20 flex flex-col  md:flex-row gap-6 justify-around  bg-[#12121222] p-8 md:rounded-xl"
      >
        <div className="md:text-6xl text-4xl md:max-w-[40vw] flex gap-2 text-four">
          <TextSplitter
            strokeWordsArray={[0]}
            text={generalDetails.descriptionTitle}
          />
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-delay="100"
          data-aos-duration="700"
          className="md:max-w-[40vw] text-white text-lg "
        >
          {generalDetails.descriptionContent}
        </div>
      </div>
    </div>
  )
}

export default AboutMe
