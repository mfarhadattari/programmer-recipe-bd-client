/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      pacifico: ["Pacifico", "cursive"],
      nato: ["Noto Serif", "serif"],
    },
  },
  plugins: [require("daisyui")],
};
