import { FaLinkedinIn, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { contactLinks, socialMediaLinks } from "../../content/socialMedia"

const socialItems = [
  {
    href: contactLinks.mailto,
    label: "Email Hasan",
    icon: MdEmail,
    external: false,
  },
  {
    href: contactLinks.whatsapp,
    label: "WhatsApp Hasan",
    icon: FaWhatsapp,
    external: true,
  },
  socialMediaLinks.linkedin && {
    href: socialMediaLinks.linkedin,
    label: "LinkedIn",
    icon: FaLinkedinIn,
    external: true,
  },
  socialMediaLinks.instagram && {
    href: socialMediaLinks.instagram,
    label: "Instagram",
    icon: FaInstagram,
    external: true,
  },
  socialMediaLinks.facebook && {
    href: socialMediaLinks.facebook,
    label: "Facebook",
    icon: FaFacebook,
    external: true,
  },
].filter(Boolean)

const SocialBar = () => {
  return (
    <nav
      aria-label="Social and contact"
      className="pointer-events-none fixed z-40 inset-x-0 bottom-0 md:inset-auto md:left-0 md:top-1/2 md:-translate-y-1/2"
    >
      <div
        className="pointer-events-auto flex items-center justify-center gap-2 mx-3 px-3 py-2 md:mx-0 md:flex-col md:gap-3 md:px-3 md:py-5 bg-surface/95 md:bg-surface/80 backdrop-blur-md border border-line md:border-y-0 md:border-l-0 rounded-full md:rounded-none shadow-dock"
        style={{
          marginBottom: "max(12px, env(safe-area-inset-bottom, 0px))",
        }}
      >
        {socialItems.map(({ href, label, icon: Icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={label}
            title={label}
            className="flex items-center justify-center w-11 h-11 rounded-full border border-line bg-raised text-ivory hover:text-ink hover:bg-copper hover:border-copper transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
          >
            <Icon className="w-5 h-5" aria-hidden />
          </a>
        ))}
      </div>
    </nav>
  )
}

export default SocialBar
