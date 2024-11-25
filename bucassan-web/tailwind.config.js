/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
			screens: {
        'tall-max': {'raw': '(max-height: 800px)'}
      },
  		colors: {
  			'pallette-60': '#f8f8f8',
  			'pallette-30': '#01D7D6',
  			'pallette-10': '#045988',
  			'pallette-10-contrast': '#1B3C59',

  			'gradient-1': '#4f9d9c',
  			'gradient-2': '#bffcfa',
  			'gradient-3': '#e6f4f1',
  			'gradient-4': '#e4fffe'
  		},
  		fontFamily: {
  			title: ["Geomanist"]
  		},
  		animation: {
  			float: 'float 4s ease-in-out infinite',
  			pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'fade-in-up-skeleton': 'fadeInUp 0.5s ease-out',
  			'fade-in-left': 'fade-in-left 0.4s ease-out forwards',
  			'fade-in-right': 'fade-in-right 0.4s ease-out forwards',
  			'fade-in-up': 'fade-in-up 0.4s ease-out forwards',
  			'fade-in-down': 'fade-in-down 0.4s ease-out forwards'
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-15px)'
  				}
  			},
  			pulse: {
  				'0%, 100%': {
  					opacity: '1'
  				},
  				'50%': {
  					opacity: '.5'
  				}
  			},
  			fadeInUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-in-left': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(-20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			'fade-in-right': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			'fade-in-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-in-down': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(-20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
			backgroundImage: {
        'half-gray': 'linear-gradient(to bottom, #e6f4f1 50%, transparent 50%)',
      }
  	}
  },
  plugins: [
    require('tailwindcss-filters'),
      require("tailwindcss-animate")
],
}