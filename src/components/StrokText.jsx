import React from "react"

const StrokText = ({ content, className }) => {
  return (
    <span
      style={{ WebkitTextStroke: "1px white" }}
      className={`text-transparent ${className}`}
    >
      {content}
    </span>
  )
}

export default StrokText
