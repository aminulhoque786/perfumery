/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      maxWidth:{
        container:"1140px"
       },
       backgroundImage: {
        'img': "url('./assets/calender.jpg')",
        'banner': "url('./assets/banner.jpg')",
        'banner1': "url('./assets/banner1.jpg')",
        'banner2': "url('./assets/banner2.jpg')",
        
       
      },
       fontFamily: {
        'tail': ['Lato', 'sans-serif',],
        'nail': ['Robot', 'sans-serif',],
        'gail': ['Montserrat', 'sans-serif',],
        'gails': ['Roboto Condensed', 'sans-serif',],
        'pops': ['Gowun Batang ', 'sans-serif',],
      },
       

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}