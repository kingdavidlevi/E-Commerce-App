 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // newblue: "#a7c7ec"
        newblue: ' #d0e6ff',
        iconblue: '#4893e4',
      },
      width: {
        100: '500px',
        150: '520px',
        200: '550px',
        250: '580px',
        260 : '620px',
        280 : '765px',
      270 : '750px',
        300: '800px',
        310: '850px',
        120: '2000px',
        70 : '260px' ,
        82 : '380px',
        340 : '1000px',
        350 : '1000px',
        400: '1235px',
        98 : '450px',
        97 : '420px',
        38 : '152px',
        90: '350px',
        370: '1170px'

      },
      
      borderWidth: {
        r: "0.1px"
      },
      
      screens : {
       'md2': '890px'
      },

      top:{
        88:'340px'
      },

      height:{
        100: '500px',
        150: '520px',
        200: '550px',
        250: '580px',
        300: '950px',
        400: '1000px',
        120: '2000px',
        75:'400px',
        82 : '390px',
        26 : '104px',
        18 : '75px',
        97 : '420px',
        98 : '450px',
        33 : '140px',
      },

     

      fontWeight:{
        semi:'500px'
      },
     
      margin:{
        100: '450px'
      },

    },
  },
  plugins: [],
}