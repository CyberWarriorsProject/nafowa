/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nafowaBlue: "#08C1FF",
        nafowaGold: "#CC9828",
        lighterNafowaBlue: "#8ee3ff",
      },
    },

    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
