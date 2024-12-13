/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
      padding: '8px',
    },
    textSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    screens: {
      sm: '480px',
      md: '780px',
      lg: '976px',
      xl: '1440px',
    },
   
    extend: {
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    
  ],
}

