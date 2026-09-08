import React from "react"

const YoutubeVideoRenderer = ({ videoId, title }) => {
  return (
    <iframe
      className="w-full h-full"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
      title={title || "YouTube video player"}
    ></iframe>
  )
}

export default YoutubeVideoRenderer
