/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mist: "#EEF1EC",
        ink: "#18212B",
        slate: "#586472",
        cobalt: "#2C4FD8",
        haze: "#D5DCF7",
        rule: "#C9D0CB",
      },
      fontFamily: {
        display: ['"Archivo"', "system-ui", "sans-serif"],
        serif: ['"Source Serif 4"', "Georgia", "serif"],
      },
      maxWidth: { measure: "38rem" },
    },
  },
  plugins: [],
};
