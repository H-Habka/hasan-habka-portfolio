import React from "react"
import TextSplitter from "../TextSpletter"
import { FaLinkedinIn, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import {
  contactLinks,
  formatWhatsAppNumber,
  socialMediaLinks,
} from "../../content/socialMedia"
import CustomButton from "../CustomButton"

const GetInTouchSection = ({ hideSocialMedia }) => {
  const phoneLabel = formatWhatsAppNumber()

  return (
    <section
      id="getInTouch"
      className="mt-[100px] md:mt-0 md:min-h-screen flex flex-col justify-center items-center"
    >
      <div className="relative w-[100vw] md:w-[80vw] md:rounded-xl bg-[#12121222] px-4 py-10 md:py-16">
        <div className="pointer-events-none text-white tracking-wider text-5xl md:text-[8em] flex items-center justify-center font-[900]">
          <TextSplitter strokeWordsArray={[1]} text="GET IN TOUCH" />
        </div>
        <p className="mt-4 text-center text-white/80 text-base md:text-lg">
          Email or WhatsApp — both open a real conversation, no form required.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2">
          <CustomButton
            title="Email me"
            href={contactLinks.mailto}
            aria-label={`Email ${socialMediaLinks.email}`}
          />
          <CustomButton
            title="WhatsApp"
            reversed
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label={`WhatsApp ${phoneLabel}`}
          />
        </div>
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white/90 text-sm md:text-base">
          <a
            href={contactLinks.mailto}
            className="inline-flex items-center gap-2 hover:text-four underline-offset-4 hover:underline"
          >
            <MdEmail aria-hidden className="w-5 h-5" />
            {socialMediaLinks.email}
          </a>
          <span className="hidden sm:inline text-white/40" aria-hidden>
            ·
          </span>
          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-four underline-offset-4 hover:underline"
          >
            <FaWhatsapp aria-hidden className="w-5 h-5" />
            {phoneLabel}
          </a>
        </div>
      </div>
      <div className="w-full top-full h-[30px] md:h-[100px] mix-blend-darken bg-orange-300"></div>
      {!hideSocialMedia && (
        <div className="md:mt-10 my-8 md:mb-0 mb-[140px] flex items-center justify-center gap-8">
          {!!socialMediaLinks?.facebook && (
            <a
              href={socialMediaLinks.facebook}
              target="_blank"
              data-aos="fade-down"
              data-aos-delay="250"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <div className="md:hover:bg-white md:bg-transparent bg-white cursor-pointer hover:-translate-y-[6px] rounded-full transition-all duration-300 group">
                <FaFacebook className="w-9 h-9 md:group-hover:scale-[1.11] scale-[1.11] md:scale-100 md:group-hover:text-[#4267B2] text-[#4267B2] md:text-[#121212]" />
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
              aria-label="LinkedIn"
            >
              <div className="md:hover:bg-[#0a66c2] bg-[#0a66c2] md:bg-transparent cursor-pointer hover:-translate-y-[6px] rounded-full transition-all duration-300 p-1 group">
                <FaLinkedinIn className="w-9 h-9 md:group-hover:scale-[0.85] md:scale-100 scale-[0.85] text-white md:group-hover:text-white md:text-[#121212]" />
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
              aria-label="Instagram"
            >
              <div className="md:hover:bg-gradient-to-t bg-gradient-to-t md:bg-none from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] cursor-pointer hover:-translate-y-[6px] rounded-full transition-all duration-300 p-1 group">
                <FaInstagram className="w-9 h-9 scale-[0.92] md:scale-100 md:group-hover:text-white text-white md:text-[#121212]" />
              </div>
            </a>
          )}
          {!!socialMediaLinks?.whatsappNumber && (
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              data-aos="fade-down"
              data-aos-delay="250"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <div className="hover:bg-[#25D366] bg-[#25D366] md:bg-transparent cursor-pointer hover:-translate-y-[6px] rounded-full transition-all duration-300 p-1 group">
                <FaWhatsapp className="w-9 h-9 group-hover:text-white text-white scale-[0.88] md:scale-100 md:text-[#121212]" />
              </div>
            </a>
          )}
        </div>
      )}
    </section>
  )
}

export default GetInTouchSection
