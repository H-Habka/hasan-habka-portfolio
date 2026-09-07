import React from "react"
import CustomButton from "../CustomButton"
import { LazyLoadImage } from "react-lazy-load-image-component"
import TextSplitter from "../TextSpletter"
import { generalDetails } from "../../content/generalDetails"

const HeroSection = () => {
  return (
    <div id="home" className="flex flex-col md:flex-row md:h-screen relative">
      <div
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }}
        className="hidden md:flex hover:scale-110 transition-all duration-500 opacity-30 hover:opacity-100 cursor-pointer  absolute left-1/2 bottom-3 w-8 h-16 rounded-full border-2 border-gray-400 -translate-x-1/2 group"
      >
        <div className="transition-all duration-700 flex items-center group-hover:translate-y-7 justify-center w-8 h-8 rounded-full bg-gray-700">
          <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      <div className="order-2 md:order-none w-full md:w-9/12 md:pt-40 pt-8 ">
        <div className="flex flex-col gap-2 px-2 md:px-10 md:w-10/12 w-full items-center md:items-start ">
          <h1 className=" font-bold flex flex-col gap-4 my-[50px]">
            <div style={{ boxShadow: "0 0 1000000px 60px #f48915" }} />
            <div className="md:text-[80px] text-[50px] md:block flex justify-center text-white">
              <TextSplitter strokeWordsArray={[0]} text={generalDetails.name} />
            </div>
            <div className="animate-pulse mt-[-24px] md:mt-6 text-3xl  text-white md:text-5xl uppercase">
              <TextSplitter
                containerClassName="justify-start"
                text={generalDetails.jobTitle}
              />
            </div>
          </h1>
          <a href="#getInTouch">
            <CustomButton title="Get in touch" reversed />
          </a>
        </div>
      </div>
      <div className="mt-[80px] flex items-start justify-center md:w-3/12 bg-transparent md:bg-two relative md:h-auto z-1 ">
        <LazyLoadImage
          loading="lazy"
          src="/images/hero.webp"
          alt="hero"
          className="absolute md:top-1/4 md:-left-1/2 h-4/6 -z-1 left-1/4  top-0 transition-all duration-1000"
        />
        <LazyLoadImage
          loading="lazy"
          src="/images/profile.webp"
          alt="hero1"
          className="min-h-[300px] animate-bounce-2 scale-105 md:absolute left-0  bottom-[50px] max-w-[320px] w-10/12 md:w-auto rounded-full"
          style={{
            boxShadow: "0px 12px 12px 5px rgba(0,0,0,.8)",
          }}
        />
      </div>
    </div>
  )
}

export default HeroSection
