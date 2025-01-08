/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat:['Montserrat','sans-serif'],
        inter:['Inter','sans-serif'],
        oswald:['Oswald','sans-serif']
      }
    },
  },
  plugins: [],
}