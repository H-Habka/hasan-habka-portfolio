import React from "react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { FaFilePdf } from "react-icons/fa"
import { Link } from "react-router-dom"

const PDFViewer = ({ title, to }) => {
  return (
    <Link
      to={to}
      className="h-full rounded-2xl flex flex-col gap-6 p-5 group relative transition-colors duration-300 bg-surface border border-line hover:border-copper/50 justify-between focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
    >
      <p className="text-ivory text-lg leading-snug">{title}</p>
      <div className="flex items-center justify-center py-6">
        <FaFilePdf
          size={72}
          className="fill-copper/80 group-hover:fill-copper transition-colors duration-300"
        />
      </div>
      <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-ivory/80 group-hover:text-copper">
        Preview PDF
        <AiOutlineArrowRight size={18} />
      </span>
    </Link>
  )
}

export default PDFViewer
