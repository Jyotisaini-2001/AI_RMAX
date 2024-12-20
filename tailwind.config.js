/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customRed: 'rgba(245, 79, 53, 1)', // Define custom color
        customDarkRed: 'rgb(185 28 28)'
      },
      maxWidth: {
        'screen-1056': '1056px',  // This will allow you to use max-w-screen-1056
        'screen-1120': '1120px',  // This will allow you to use max-w-screen-1056

      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        secularOne: ['Secular One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
