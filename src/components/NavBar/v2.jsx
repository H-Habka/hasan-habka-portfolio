import React from "react"
import { Link, useLocation } from "react-router-dom"
import OptimizedImage from "../OptimizedImage"
import { publicUrl } from "../../utils/publicUrl"
import { generalDetails } from "../../content/generalDetails"
import { scrollToId } from "../../motion/scrollApi"

const links = [
  { label: "Work", hash: "work" },
  { label: "About", hash: "about" },
  { label: "Docs", to: "/official-docs" },
  { label: "Contact", hash: "getInTouch" },
]

const NavbarV2 = () => {
  const location = useLocation()

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50">
      <div className="bg-ink/80 backdrop-blur-md border-b border-line">
        <div className="section-shell site-header-inner h-[72px] flex items-center justify-between gap-4">
          <Link
            to="/"
            aria-label="Home"
            title="Home"
            className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper rounded-full"
          >
            <OptimizedImage
              priority
              src={publicUrl("images/profile-small.webp")}
              alt="Hasan Habka"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover border border-line"
            />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-lg text-ivory">
                Hasan Habka
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-mute">
                {generalDetails.jobTitle}
              </span>
            </span>
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
            {links.map((item) => {
              if (item.to) {
                const active = location.pathname === item.to
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`px-2.5 sm:px-3 py-2 text-[12px] sm:text-sm tracking-wide rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper ${
                      active
                        ? "text-copper"
                        : "text-ivory/80 hover:text-ivory"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              }

              return (
                <Link
                  key={item.label}
                  to={`/#${item.hash}`}
                  onClick={(event) => {
                    if (location.pathname !== "/") return
                    event.preventDefault()
                    scrollToId(item.hash)
                    window.history.replaceState(null, "", `#${item.hash}`)
                  }}
                  className="px-2.5 sm:px-3 py-2 text-[12px] sm:text-sm tracking-wide rounded-full text-ivory/80 hover:text-ivory transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default NavbarV2
