/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'white':"#fff",
      'app-terinary-color':"#20202a",
      'secondary':"#54595f",
      'banner-bg':"#1e1e28e0",
      'content-bg':"#1e1e28",
      'app-yellow':"#ffc107",
      'duration':"#8c8c8e"
    }
    ,
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [],
}

