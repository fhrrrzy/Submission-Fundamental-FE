/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        spinnerspin: {
          '0%': { transform: 'translateX(-50%) rotate(0deg)' },
          '100%': { transform: 'translateX(-50%) rotate(360deg)' },
        },
      },
      animation: {
        spinnerspinslow: 'spinnerspin 0.5s linear infinite',
      },
    },
  },
  plugins: [],
}

