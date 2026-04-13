/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E11D48', // Vibrant Red
          dark: '#9F1239',
          light: '#FB7185',
        },
        accent: {
          DEFAULT: '#F59E0B', // Gold/Amber accent? Maybe stick to red/black/white
        },
        background: '#0a0a0a',
        surface: '#171717',
        border: '#262626',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
