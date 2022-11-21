/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5ba4a4',
        light: {
          100: '#effafa',
          200: '#eef6f6'
        },
        dark: {
          100: '#7b8e8e',
          200: '#2c3a3a'
        }
      }
    },
  },
  plugins: [],
};
