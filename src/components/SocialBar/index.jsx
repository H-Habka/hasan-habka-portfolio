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
      className="social-nav pointer-events-none fixed z-40"
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
      <div className="social-dock pointer-events-auto">
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
