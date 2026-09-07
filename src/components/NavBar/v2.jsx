import React, { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"

const NavbarV2 = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [isSkiped, setIsSkiped] = useState(false)
  const location = useLocation()

  let oldScroll = useRef(0)
  let scrollDirection = useRef("")

  useEffect(() => {
    const scrollListener = (e) => {
      if (window.scrollY > oldScroll.current && showNavbar) {
        scrollDirection.current = "down"
        setShowNavbar(false)
      } else if (window.scrollY < oldScroll.current && !showNavbar) {
        scrollDirection.current = "up"
        setShowNavbar(true)
      }
      oldScroll.current = window.scrollY

      if (window.scrollY >= 100 && !isSkiped) {
        setIsSkiped(true)
      } else if (window.scrollY < 100 && isSkiped) {
        setIsSkiped(false)
      }
    }

    window.addEventListener("scroll", scrollListener)

    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [showNavbar, isSkiped])
  return (
    <div
      className={`transition-all duration-1000  flex justify-between items-center sm:px-10 px-2 z-50 fixed 
           ${showNavbar ? ` top-0 ` : " -top-20 "}`}
    >
      <div
        className={`bg-gradient-to-r from-[#373737] via-[#373737] to-[#3A3A3A] z-1 relative transition-all duration-500 group rounded-b-md flex items-center gap-4  overflow-hidden ${
          location.pathname !== "/official-docs" ? "hover:pr-[120px]" : ""
        }`}
      >
        <abbr
          className="p-2 bg-[#373737] duration-700 transition-all"
          title="Home"
        >
          <Link to="/">
            <div className="rounded-full bg-gray-200 grayscale hover:grayscale-0 cursor-pointer z-10">
              <LazyLoadImage
                loading="lazy"
                src="/images/profile-small.webp"
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </Link>
        </abbr>
        {location.pathname !== "/official-docs" ? (
          <div className="text-lg -translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 absolute right-2 whitespace-nowrap z-[-1] ">
            <Link
              className="text-gray-200 transition-all duration-500 hover:text-four  before:h-[2px] before:w-0 hover:before:w-full before:absolute before:bg-four before:transition-all before:duration-five before:bottom-1"
              to="/official-docs"
            >
              Offical Docs
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default NavbarV2
