import React from "react"
import { FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import {
  contactLinks,
  formatWhatsAppNumber,
  socialMediaLinks,
} from "../../content/socialMedia"
import CustomButton from "../CustomButton"
import SectionHeading from "../SectionHeading"

const GetInTouchSection = () => {
  const phoneLabel = formatWhatsAppNumber()

  return (
    <section id="getInTouch" className="py-20 md:py-28">
      <div className="section-shell">
        <div className="rounded-[2rem] border border-line bg-surface/80 px-6 py-12 md:px-14 md:py-16">
          <SectionHeading
            eyebrow="05 / Contact"
            title="Get in touch"
            align="center"
          />
          <p className="mt-5 text-center text-ivory/75 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Email or WhatsApp — both open a real conversation, no form required.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
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
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-ivory/85 text-sm md:text-base">
            <a
              href={contactLinks.mailto}
              className="inline-flex items-center gap-2 hover:text-copper underline-offset-4 hover:underline"
            >
              <MdEmail aria-hidden className="w-5 h-5" />
              {socialMediaLinks.email}
            </a>
            <span className="hidden sm:inline text-ivory/30" aria-hidden>
              ·
            </span>
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-copper underline-offset-4 hover:underline"
            >
              <FaWhatsapp aria-hidden className="w-5 h-5" />
              {phoneLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouchSection
