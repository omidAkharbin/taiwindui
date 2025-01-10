/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      myvarella: "Varela",
    },
    extend: {
      screens: {
        xs: "300px",
      },
    },
  },
  plugins: [],
};
