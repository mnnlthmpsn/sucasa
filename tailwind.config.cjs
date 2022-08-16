/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gotham'],
        gothamBold: ['Gotham-Bold']
      },
      colors: {
        primary: '#222'
      }
    },
  },
  plugins: [],
}