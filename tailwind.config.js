/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
      textColor:{
        primary: {
          DEFAULT: "#1C1C1C",
        },
        secondary: {
          DEFAULT: "#4D4D4D",
        },
      },
      colors: {
        primary: {
          // DEFAULT: "#F6F6F6",
          DEFAULT: "rgb()251, 256, 247",
          // DEFAULT: "#F7F7F7",
        },
        secondary: {
          DEFAULT: "#000000",
        },
        btn: {
          DEFAULT: "#1B1B1B",
        },
      },
    },
  },
  plugins: [],
}

