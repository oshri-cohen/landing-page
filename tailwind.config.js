/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#FF7F50",
        secondary:"#f3f3f3",
        
      }
    },
  },
  plugins: [],
}

