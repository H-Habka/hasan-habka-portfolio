import React from "react"
import { RingLoader } from "react-spinners"

const Loader = () => {
  return (
    <div
      style={{ backgroundImage: `url(/images/bg.webp)` }}
      className="overflow-x-hidden bg-one w-screen h-screen flex items-center justify-center"
    >
      <RingLoader color="#e19f51" size={120} speedMultiplier={0.8} />
    </div>
  )
}

export default Loader
