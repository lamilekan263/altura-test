/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rajdhani: ['"Rajdhani"', ...defaultTheme.fontFamily.sans],
        WorkSans: ['"Work Sans"', ...defaultTheme.fontFamily.sans],
        SpaceMono: ['"Space Mono"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
};