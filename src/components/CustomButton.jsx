import React from "react"
import { Link } from "react-router-dom"

const CustomButton = ({
  title,
  reversed,
  href,
  to,
  className = "",
  ...rest
}) => {
  const reversedStyles =
    "bg-transparent text-ivory border-ivory/30 hover:border-copper hover:text-copper"
  const normalStyles =
    "bg-copper text-ink border-copper hover:bg-glow hover:border-glow"

  const classes = `inline-flex items-center justify-center text-[13px] md:text-sm font-semibold tracking-[0.14em] uppercase px-5 py-3 rounded-full border transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper ${
    reversed ? reversedStyles : normalStyles
  } ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        <span>{title}</span>
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        <span>{title}</span>
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      <span>{title}</span>
    </button>
  )
}

export default CustomButton
