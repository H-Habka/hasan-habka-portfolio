import { twMerge } from "tailwind-merge"

const SectionHeading = ({
  eyebrow,
  title,
  as: Tag = "h2",
  align = "left",
  className = "",
  titleClassName = "",
}) => {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left"

  return (
    <div className={twMerge("flex flex-col gap-3", alignment, className)}>
      {eyebrow ? (
        <p className="text-[11px] md:text-xs font-semibold tracking-[0.28em] uppercase text-copper">
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={twMerge(
          "font-display font-normal text-ivory tracking-tight leading-[0.95] text-4xl md:text-6xl",
          titleClassName
        )}
      >
        {title}
      </Tag>
    </div>
  )
}

export default SectionHeading
