/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pallette-60': '#f8f8f8',
        'pallette-30': '#01D7D6',
        'pallette-10': '#1B4F72',
        'pallette-10-contrast': '#1B3C59',
        'complement': '#01D7D6',

        'gradient-1': '#00abab',
        'gradient-2': '#008182',
        'gradient-3': '#00abab',
        'gradient-4': '#9374ac',
      },
      fontFamily: {
        title: ["Geomanist"],
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}