/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      maxWidth: {
        theme: "1440px",
      },
      colors: {
        dash: {
          bg: "#1B1B1B",
        },
        primary: "#FCCF3D",
        wp: "#F9F9F9",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        "obviously-wide": ["Obviously Wide", "sans-serif"],
      },
      spacing: {
        theme: "12px",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-focus", "group-hover"],
    },
  },
  plugins: [],
});
