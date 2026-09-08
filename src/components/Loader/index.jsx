import React from "react"
import { RingLoader } from "react-spinners"
import { publicUrl } from "../../utils/publicUrl"

const Loader = () => {
  return (
    <div
      style={{ backgroundImage: `url(${publicUrl("images/bg.png")})` }}
      className="overflow-x-hidden bg-ink w-screen h-screen flex items-center justify-center"
    >
      <RingLoader color="#e07a3d" size={120} speedMultiplier={0.8} />
    </div>
  )
}

export default Loader
