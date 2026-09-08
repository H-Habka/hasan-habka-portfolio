import { FaLinkedinIn, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { contactLinks, socialMediaLinks } from "../../content/socialMedia"

const socialItems = [
  {
    href: contactLinks.mailto,
    label: "Email Hasan",
    icon: MdEmail,
    brand: "email",
    external: false,
  },
  {
    href: contactLinks.whatsapp,
    label: "WhatsApp Hasan",
    icon: FaWhatsapp,
    brand: "whatsapp",
    external: true,
  },
  socialMediaLinks.linkedin && {
    href: socialMediaLinks.linkedin,
    label: "LinkedIn",
    icon: FaLinkedinIn,
    brand: "linkedin",
    external: true,
  },
  socialMediaLinks.instagram && {
    href: socialMediaLinks.instagram,
    label: "Instagram",
    icon: FaInstagram,
    brand: "instagram",
    external: true,
  },
  socialMediaLinks.facebook && {
    href: socialMediaLinks.facebook,
    label: "Facebook",
    icon: FaFacebook,
    brand: "facebook",
    external: true,
  },
].filter(Boolean)

const SocialBar = () => {
  return (
    <nav
      aria-label="Social and contact"
      className="pointer-events-none fixed z-40 inset-x-0 bottom-0 md:inset-auto md:left-5 md:top-1/2 md:-translate-y-1/2"
    >
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <linearGradient id="ig-brand" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F58529" />
            <stop offset="50%" stopColor="#DD2A7B" />
            <stop offset="100%" stopColor="#8134AF" />
          </linearGradient>
        </defs>
      </svg>
      <div
        className="social-dock pointer-events-auto flex items-center justify-center gap-2 mx-3 px-3 py-2 md:mx-0 md:flex-col md:gap-3 md:px-2.5 md:py-4"
        style={{
          marginBottom: "max(12px, env(safe-area-inset-bottom, 0px))",
        }}
      >
        {socialItems.map(({ href, label, icon: Icon, brand, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={label}
            title={label}
            className={`social-link social-link--${brand}`}
          >
            <Icon className="w-5 h-5" aria-hidden />
          </a>
        ))}
      </div>
    </nav>
  )
}

export default SocialBar
