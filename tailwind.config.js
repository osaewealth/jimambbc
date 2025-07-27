/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0A3A75', // Jimam Bricks Blue
          black: '#181818', // Jimam Bricks Black
          white: '#FFFFFF', // White for accents
        },
      },
    },
  },
  plugins: [],
};
