/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aring: ['"Aring"', "sans-serif"],
        balbek: ['"Balbek"', "sans-serif"],
        wanderer: ['"Wanderer"', "sans-serif"],
        asteroid: ['"Asteroid"', "sans-serif"],
        ringstun: ['"Ringstun"', "sans-serif"],
        largest: ['"Largest"', "sans-serif"],
      },
      colors: {
        "accent-light": "#eea20c",
        "accent-dark": "#f0980e",
      },
    },
  },
  plugins: [nextui()],
};
