/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#FF3366',
        'neon-blue': '#33FFFF',
        'neon-dark': '#0A0A0A',
      },
      fontFamily: {
        'display': ['Orbitron', 'sans-serif'],
      }
    },
  },
  plugins: [],
}