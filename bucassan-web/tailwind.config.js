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
        'pallette-10': '#045988',
        'pallette-10-contrast': '#1B3C59',
        'complement': '#01D7D6',

        'gradient-1': '#4f9d9c',
        'gradient-2': '#bffcfa',
        'gradient-3': '#e6f4f1',
        'gradient-4': '#e4fffe',
      },
      fontFamily: {
        title: ["Geomanist"],
      },
      backgroundImage: {
        'hero-background': "url('/images/home-bg.jpg')",
        'services-background': "url('/images/home-bg.jpg')",
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'fade-in-left': 'fade-in-left 0.4s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.4s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.4s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.4s ease-out forwards'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}