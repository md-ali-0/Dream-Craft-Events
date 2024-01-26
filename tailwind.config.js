/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ce1446',
        'secondary': '#2d373c',
        'dark_01': '#0a0041'
      },
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  darkMode: "class",
  plugins: [],
}

