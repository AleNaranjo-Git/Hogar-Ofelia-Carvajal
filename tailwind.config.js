/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lightBlue: 'hsl(202, 75%, 79%)',
        mintGreen: 'hsl(169, 48%, 80%)',
        cream: 'hsl(40, 100%, 94%)',
        lightGray: 'hsl(0, 0%, 83%)',
        blueGray: 'hsl(214, 41%, 78%)'
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}

