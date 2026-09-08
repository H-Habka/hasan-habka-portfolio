/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "576px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        ink: "#0a0e14",
        surface: "#121820",
        raised: "#1a222d",
        line: "#2c3644",
        copper: "#e07a3d",
        glow: "#f0a06a",
        ivory: "#f3efe6",
        mute: "#8e97a8",
        one: "#0a0e14",
        two: "#e07a3d",
        three: "#d55A54",
        four: "#f0a06a",
        five: "#e07a3d",
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        1: "1",
      },
      borderRadius: {
        "1/2": "50%",
      },
      gridTemplateColumns: {
        "1fr2fr": "1fr 2fr",
        "3fr2fr": "3fr 2fr",
      },
      boxShadow: {
        dock: "0 8px 32px rgba(0, 0, 0, 0.35)",
        card: "0 18px 40px rgba(0, 0, 0, 0.28)",
      },
    },
  },
  plugins: [],
}
