/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hex': {
          'black': '#0A0A0A',
          'red': '#8B0000',
          'purple': '#2D0047',
          'gray': '#1A1A1A',
          'neon': '#39FF14',
        },
      },
    },
  },
  plugins: [],
} 