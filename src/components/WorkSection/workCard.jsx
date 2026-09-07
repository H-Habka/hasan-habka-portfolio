import React from "react"
import { RiShareBoxFill } from "react-icons/ri"
import { Link } from "react-router-dom"

const WorkCard = ({ isSticky, title, to, children }) => {
  return (
    <div
      className={`${
        isSticky ? "sticky md:top-[150px] top-[120px]" : ""
      } md:brightness-90 md:hover:brightness-105 transition-all duration-300`}
    >
      <Link to={to}>
        <div className="overflow-hidden  rounded-xl  bg-[#121212]">
          <div className=" text-white flex justify-between p-4 text-2xl uppercase bg-gray-600">
            <p>{title}</p>
            <RiShareBoxFill className="w-8 h-8 animate-pulse" />
          </div>
          <div className="md:h-[340px] h-[500px] md:max-h-[400px]">
            {children}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default WorkCard
