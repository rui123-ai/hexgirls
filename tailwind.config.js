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
      fontFamily: {
        'gothic': ['Gothic', 'serif'],
        'punk': ['Punk', 'sans-serif'],
      },
      animation: {
        'flame': 'flame 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
      },
      keyframes: {
        flame: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
      },
    },
  },
  plugins: [],
} 