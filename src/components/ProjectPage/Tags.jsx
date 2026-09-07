import React from "react"

const Tags = ({ keywords }) => {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      {keywords.map((keyword, idx) => {
        return (
          <div
            key={keyword}
            data-aos="zoom-in-up"
            data-aos-delay={400 + idx * 100}
            data-aos-duration="500"
            className="border-2 border-gray-200 rounded-md px-3 py-1.5"
          >
            {keyword}
          </div>
        )
      })}
    </div>
  )
}

export default Tags
