// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#432361",
        primary2: "#783EAD",
        secondaryGray: "#4F4F4F",
      },
      fontFamily: {
        custom: ["Gilroy", "sans"],
      },
      height: {
        "27-screen": "27vh",
        "30-screen": "30vh",
        "35-screen": "35vh",
        "40-screen": "40vh",
        "45-screen": "45vh",
        "50-screen": "50vh",
        "55-screen": "55vh",
        "60-screen": "60vh",
      },
    },
  },
  variants: {},
  plugins: [],
};
