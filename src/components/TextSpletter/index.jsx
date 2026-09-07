import React, { useRef } from "react"
import { twMerge } from "tailwind-merge"

const TextSplitter = ({
  withoutAnimation,
  text,
  strokeWordsArray,
  containerClassName,
}) => {
  const arrayOfWords = text.split(" ")
  const counter = useRef(0)
  return (
    <div
      className={twMerge("flex flex-wrap justify-center", containerClassName)}
    >
      {arrayOfWords.map((word, i) => {
        return (
          <div key={i}>
            {word.split("").map((letter, j) => {
              counter.current = counter.current + 1
              if (
                Array.isArray(strokeWordsArray) &&
                strokeWordsArray.includes(i)
              )
                return (
                  <span
                    key={j}
                    style={{ WebkitTextStroke: "1px white" }}
                    className={`text-transparent`}
                    {...(withoutAnimation
                      ? {}
                      : {
                          "data-aos": "fade-right",
                          "data-aos-delay": counter.current * 50,
                        })}
                  >
                    {letter}
                  </span>
                )
              return (
                <span
                  key={j}
                  {...(withoutAnimation
                    ? {}
                    : {
                        "data-aos": "fade-right",
                        "data-aos-delay": counter.current * 50,
                      })}
                >
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
