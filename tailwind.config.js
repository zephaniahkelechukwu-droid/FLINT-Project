/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // This is the CRUCIAL array that tells Tailwind where your class names are.
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Standard Vite path (if used)
    "./components/**/*.{js,ts,jsx,tsx}", // This ensures Tailwind scans the components folder
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#FF3366',
        'neon-blue': '#33FFFF',
        'neon-dark': '#0A0A0A', // Dark background for the app
      },
      fontFamily: {
        'display': ['Orbitron', 'sans-serif'],
      }
    },
  },
  plugins: [],
}