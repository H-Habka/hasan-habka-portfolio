import React from "react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { FaFilePdf } from "react-icons/fa"
import { Link } from "react-router-dom"

const PDFViewer = ({ title, to }) => {
  return (
    <Link to={to}>
      <div className="h-full rounded-2xl flex flex-col gap-4 p-4 group relative transition-all duration-500 bg-[#232323] justify-between z-1 ">
        <div className="flex items-center gap-6">
          <p className="text-white text-lg">{title}</p>
        </div>
        <div className="flex items-center justify-center">
          <FaFilePdf
            size={100}
            className="fill-red-300 group-hover:fill-red-600 transition-all duration-500"
          />
        </div>
        <button className="flex gap-2 py-2 px-0 group-hover:px-2  group-hover:bg-white text-white group-hover:text-two w-fit transition-all duration-500 rounded-lg">
          <p>Preview PDF</p>
          <AiOutlineArrowRight size={24} />
        </button>
      </div>
    </Link>
  )
}

export default PDFViewer
