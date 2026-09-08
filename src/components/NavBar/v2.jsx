import React, { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import OptimizedImage from "../OptimizedImage"
import { publicUrl } from "../../utils/publicUrl"

const NavbarV2 = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [isSkiped, setIsSkiped] = useState(false)
  const location = useLocation()

  let oldScroll = useRef(0)

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > oldScroll.current && showNavbar) {
        setShowNavbar(false)
      } else if (window.scrollY < oldScroll.current && !showNavbar) {
        setShowNavbar(true)
      }
      oldScroll.current = window.scrollY

      if (window.scrollY >= 100 && !isSkiped) {
        setIsSkiped(true)
      } else if (window.scrollY < 100 && isSkiped) {
        setIsSkiped(false)
      }
    }

    window.addEventListener("scroll", scrollListener, { passive: true })

    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [showNavbar, isSkiped])

  return (
    <header
      className={`transition-all duration-1000 flex justify-between items-center sm:px-10 px-2 z-50 fixed ${
        showNavbar ? " top-0 " : " -top-20 "
      }`}
    >
      <nav
        aria-label="Primary"
        className={`bg-gradient-to-r from-[#373737] via-[#373737] to-[#3A3A3A] z-1 relative transition-all duration-500 group rounded-b-md flex items-center gap-4 overflow-hidden ${
          location.pathname !== "/official-docs" ? "hover:pr-[120px]" : ""
        }`}
      >
        <Link
          to="/"
          aria-label="Home"
          title="Home"
          className="p-2 bg-[#373737] duration-700 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-four"
        >
          <div className="rounded-full bg-gray-200 grayscale hover:grayscale-0 cursor-pointer z-10">
            <OptimizedImage
              priority
              src={publicUrl("images/profile-small.webp")}
              alt="Hasan Habka"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
          </div>
        </Link>
        {location.pathname !== "/official-docs" ? (
          <div className="text-lg -translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 absolute right-2 whitespace-nowrap z-[-1]">
            <Link
              className="text-gray-200 transition-all duration-500 hover:text-four focus-visible:text-four before:h-[2px] before:w-0 hover:before:w-full before:absolute before:bg-four before:transition-all before:duration-five before:bottom-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-four"
              to="/official-docs"
            >
              Official Docs
            </Link>
          </div>
        ) : null}
      </nav>
    </header>
  )
}

export default NavbarV2
