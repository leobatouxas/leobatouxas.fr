const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './src/*.html'	
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '440px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1680px',
    },
    colors: {
      dark: colors.gray,
      yellow: colors.yellow,
      red: colors.red,
      bgray: colors.blueGray,
      gray: colors.coolGray,
      green: colors.green,
      blue: colors.blue,
      orange: colors.orange,
      lblue: colors.lightBlue,
      indigo: colors.indigo,
      cyan: colors.cyan
    },
    
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

