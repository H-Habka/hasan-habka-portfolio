import { twMerge } from "tailwind-merge"

export default function DrawingFrame({
  children,
  className = "",
  label,
  sheet,
}) {
  return (
    <div className={twMerge("dwg-frame", className)}>
      <span className="dwg-corner dwg-corner--tl" aria-hidden />
      <span className="dwg-corner dwg-corner--tr" aria-hidden />
      <span className="dwg-corner dwg-corner--bl" aria-hidden />
      <span className="dwg-corner dwg-corner--br" aria-hidden />
      {label || sheet ? (
        <div className="dwg-titleblock">
          {label ? <span>{label}</span> : null}
          {sheet ? <span>{sheet}</span> : null}
        </div>
      ) : null}
      {children}
    </div>
  )
}
