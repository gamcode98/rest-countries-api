/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    fontWeight: {
      300: '300',
      600: '600',
      800: '800'
    },
    colors: {
      'dm-dark-blue': 'hsl(209, 23%,22%)',
      'dm-very-dark-blue': 'hsl(207, 26%,17%)',
      'lm-very-dark': 'hsl(200, 15%,8%)',
      'lm-dark-gray': 'hsl(0, 0%,52%)',
      'lm-very-light-gray': 'hsl(0, 0%, 98%)',
      white: 'hsl(0, 0%, 100%)'
    },
    fontFamily: {
      'nunito-sans': ['Nunito Sans', 'sans-serif']
    },
    backgroundSize: {
      'search-width': '20px'
    },
    backgroundPosition: {
      'search-position': 'left 1rem center'
    },
    extend: {
      backgroundImage: {
        'white-search': "url('/assets/white-search.svg')",
        'dark-search': "url('/assets/dark-search.svg')"
      }
    }
  },
  plugins: []
}
