import React from "react"
import { RiShareBoxFill } from "react-icons/ri"
import { Link } from "react-router-dom"

const WorkCard = ({ title, to, children }) => {
  return (
    <article className="group">
      <Link
        to={to}
        className="block overflow-hidden rounded-3xl border border-line bg-surface/80 hover:border-copper/50 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
      >
        <div className="relative h-[260px] md:h-[340px] overflow-hidden">
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
            {children}
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 px-5 py-5 md:px-7">
          <h3 className="font-display text-2xl md:text-3xl text-ivory">
            {title}
          </h3>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-mute group-hover:text-copper transition-colors">
            View
            <RiShareBoxFill className="w-5 h-5" />
          </span>
        </div>
      </Link>
    </article>
  )
}

export default WorkCard
