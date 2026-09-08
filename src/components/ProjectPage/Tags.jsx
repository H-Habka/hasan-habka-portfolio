import React from "react"

const Tags = ({ keywords }) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {keywords.map((keyword, idx) => {
        return (
          <div
            key={keyword}
            data-aos="zoom-in-up"
            data-aos-delay={80 + idx * 40}
            className="border border-line rounded-full px-3 py-1.5 text-sm text-ivory/80"
          >
            {keyword}
          </div>
        )
      })}
    </div>
  )
}

export default Tags
