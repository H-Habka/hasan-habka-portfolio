import React from "react"

const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  ...rest
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={className}
      {...rest}
    />
  )
}

export default OptimizedImage
