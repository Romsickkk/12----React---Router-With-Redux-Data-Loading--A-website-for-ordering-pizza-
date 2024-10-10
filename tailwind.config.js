/** @type {import('tailwindcss').Config} */

//eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pizza: "Roboto Mono, monospace",
      },

      colors: {
        pizza: "#234",
      },
    },
  },
  plugins: [],
};
