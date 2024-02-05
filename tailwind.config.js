/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#871cf8",
        "backgroun-100":"#1a1a1a",
        "backgroun-200":"#292929",
        "backgroun-300":"#404040",
        "backgroun-400":"#5b5b5b",
      }
    },
  },
  plugins: [],
}
