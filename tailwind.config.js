/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: "576px",
            ...defaultTheme.screens,
        },
        extend: {
            colors: {
                // one: "#55565b",
                // one: "#44465b",
                one: "#24262b",
                // two: "#f48915",
                two: "#E06000",
                three: "#d55A54",
                four: "#e19f51",
                five: "#f88718",
            },
            zIndex: {
                1: "1",
            },
            borderRadius:{
              "1/2" : "50%"
            },
            gridTemplateColumns : {
                "1fr2fr" : "1fr 2fr",
                "3fr2fr" : "3fr 2fr"
            },
        },
    },
    plugins: [],
};
