import React from "react"
import TextSplitter from "../TextSpletter"
import { FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { socialMediaLinks } from "../../content/socialMedia"

const GetInTouchSection = ({ hideSocialMedia }) => {
  return (
    <div
      id="getInTouch"
      className="mt-[100px] md:mt-0 md:min-h-screen flex flex-col justify-center items-center"
    >
      <a href={`mailto:${socialMediaLinks.email}?subject=Get%20In%20Touch`}>
        <div
          data-aos="fade-up"
          className="group relative cursor-pointer hover:scale-105 transition-all duration-300 h-[170px] md:h-[260px] md:rounded-xl bg-[#12121222] w-[100vw] md:w-[80vw]"
        >
          <div className="absolute text-white tracking-wider  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:opacity-0 transition-all duration-500 group-hover:opacity-100">
            <TextSplitter
              strokeWordsArray={[0]}
              text={socialMediaLinks.email}
            />
          </div>
          <div className="absolute bottom-0  translate-y-1/2 left-0 w-full text-center">
            <div className="text-white pointer-events-none text-5xl md:text-[10em] flex items-center gap-6 justify-center font-[900]">
              <TextSplitter strokeWordsArray={[1]} text="GET IN TOUCH" />
            </div>
          </div>
        </div>
      </a>
      <div className="w-full top-full h-[30px] md:h-[100px] mix-blend-darken bg-orange-300"></div>
      {!hideSocialMedia && (
        <div className="md:mt-10 my-8  md:mb-0 mb-[140px]  flex items-center justify-center gap-8">
          {!!socialMediaLinks?.facebook && (
            <a
              href={socialMediaLinks.facebook}
              target="_blank"
              data-aos="fade-down"
              data-aos-delay="250"
              rel="noreferrer"
            >
              <div className="md:hover:bg-white md:bg-transparent bg-white cursor-pointer hover:-translate-y-[6px]  rounded-full transition-all duration-300 group">
                <FaFacebook className="w-9 h-9 md:group-hover:scale-[1.11] scale-[1.11] md:scale-100  md:group-hover:text-[#4267B2] text-[#4267B2] md:text-[#121212]" />
              </div>
            </a>
          )}
          {!!socialMediaLinks?.linkedin && (
            <a
              href={socialMediaLinks.linkedin}
              target="_blank"
              data-aos="fade-down"
              data-aos-delay="300"
              rel="noreferrer"
            >
              <div className="md:hover:bg-[#0a66c2] bg-[#0a66c2] md:bg-transparent cursor-pointer hover:-translate-y-[6px]  rounded-full transition-all duration-300 p-1 group">
                <FaLinkedinIn className="w-9 h-9  md:group-hover:scale-[0.85] md:scale-100 scale-[0.85] text-white  md:group-hover:text-white md:text-[#121212]" />
              </div>
            </a>
          )}
          {!!socialMediaLinks?.instagram && (
            <a
              href={socialMediaLinks.instagram}
              target="_blank"
              data-aos="fade-down"
              data-aos-delay="300"
              rel="noreferrer"
            >
              <div className="md:hover:bg-gradient-to-t bg-gradient-to-t md:bg-none from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]  cursor-pointer hover:-translate-y-[6px]  rounded-full transition-all duration-300 p-1 group">
                <FaInstagram className="w-9 h-9 scale-[0.92] md:scale-100   md:group-hover:text-white text-white md:text-[#121212]" />
              </div>
            </a>
          )}
          {!!socialMediaLinks?.whatsappNumber && (
            <a
              href={`https://api.whatsapp.com/send?phone=${socialMediaLinks.whatsappNumber}&text=Hi`}
              target="_blank"
              data-aos="fade-down"
              data-aos-delay="250"
              rel="noreferrer"
            >
              <div className="hover:bg-[#25D366] bg-[#25D366] md:bg-transparent cursor-pointer hover:-translate-y-[6px]  rounded-full transition-all duration-300 p-1 group">
                <FaWhatsapp className="w-9 h-9  group-hover:text-white text-white scale-[0.88] md:scale-100 md:text-[#121212]" />
              </div>
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default GetInTouchSection
