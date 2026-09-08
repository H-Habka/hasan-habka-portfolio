import React from "react"
import { twMerge } from "tailwind-merge"

const TextSplitter = ({
  withoutAnimation,
  text,
  strokeWordsArray,
  containerClassName,
}) => {
  const arrayOfWords = text.split(" ")
  return (
    <div
      className={twMerge("flex flex-wrap justify-center", containerClassName)}
    >
      {arrayOfWords.map((word, i) => {
        const letterOffset = arrayOfWords
          .slice(0, i)
          .reduce((acc, item) => acc + item.length, 0)
        return (
          <div key={i}>
            {word.split("").map((letter, j) => {
              const delay = (letterOffset + j) * 50
              const animationProps = withoutAnimation
                ? {}
                : {
                    "data-aos": "fade-right",
                    "data-aos-delay": delay,
                  }
              if (
                Array.isArray(strokeWordsArray) &&
                strokeWordsArray.includes(i)
              )
                return (
                  <span
                    key={j}
                    style={{ WebkitTextStroke: "1px white" }}
                    className={`text-transparent`}
                    {...animationProps}
                  >
                    {letter}
                  </span>
                )
              return (
                <span key={j} {...animationProps}>
                  {letter}
                </span>
              )
            })}
            <span className="opacity-0">.</span>
          </div>
        )
      })}
    </div>
  )
}

export default TextSplitter
