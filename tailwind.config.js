/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#650909', // Jimam Bricks Red
          black: '#4b1313', // Jimam Bricks Dark Red
          white: '#FFFFFF', // White for accents
        },
      },
    },
  },
  plugins: [],
};
