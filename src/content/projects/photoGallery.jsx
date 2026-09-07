import React from "react"
import ImageGallery from "react-image-gallery"

const PhotoGallery = ({ images }) => {
  return (
    <ImageGallery
      showPlayButton={false}
      // showFullscreenButton={false}
      lazyLoad
      items={images}
      loading="lazy"
      thumbnailLoading="lazy"
    />
  )
}

export default PhotoGallery
