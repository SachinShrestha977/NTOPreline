/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import flowbite from "flowbite/plugin";

export default {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "base-orange": "#E76D32",
        "base-blue": "#5F55AE",
        container: "#FEF5EA",
        "dark-secondary": "#A43D00",
      },
      keyframes: {
        slide: {
          from: { transform: "translateX(-100%)" }, // Start off-screen to the left
          to: { transform: "translateX(0%)" }, // End aligned with the left edge
        },
      },
      animation: {
        slide: "slide 1s ease-out forwards",
        slide2: "slide 2s ease-out forwards",
      },
    },
  },
  plugins: [forms, typography, flowbite, require("preline/plugin")],
};
