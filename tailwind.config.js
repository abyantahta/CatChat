/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title: ["Plus Jakarta Sans", "sans-serif"]
      },
      colors:{
        biru : '#3264E6'
      }
    },
  },
  plugins: [],
}