import React from "react"
import TextSplitter from "../TextSpletter"
import { LazyLoadImage } from "react-lazy-load-image-component"

const CompaniesIworkedWith = () => {
  return (
    <div
      data-aos="fade-up"
      className="mt-[100px] md:mt-0 md:px-[10vw] md:h-[60vh] flex flex-col justify-center"
    >
      <div className="pt-10 flex flex-col justify-between  md:flex-row gap-10 items-center  bg-[#12121222] md:p-8 pb-8 md:rounded-xl">
        <div className="md:py-20 font-bold text-4xl md:max-w-[40vw] flex gap-2 text-four">
          <TextSplitter
            strokeWordsArray={[0, 1, 2, 3]}
            text="I Have worked With"
          />
        </div>
        <div className="flex gap-10 flex-1 items-center justify-evenly [&_img]:rounded-xl hover:[&_img]:-translate-y-1 hover:[&_img]:-translate-x-1 [&_img]:transition-all [&_img]:duration-200 hover:[&_img]:shadow-[10px_10px_10px_2px_#121212] [&_img]:w-[120px] [&_img]:h-[120px] [&>a]:justify-self-center">
          <a
            href="https://sarayjewellery.com/"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-out"
            data-aos-delay="0"
          >
            <LazyLoadImage alt="saray" src="https://i.imgur.com/E3HEC0X.jpeg" />
          </a>
          <a
            href="https://marinedesignhub.co.uk/"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-out"
            data-aos-delay="250"
          >
            <LazyLoadImage alt="mdh" src="https://i.imgur.com/bDPzNxQ.jpeg" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default CompaniesIworkedWith
