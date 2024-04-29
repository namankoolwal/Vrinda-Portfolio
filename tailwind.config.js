/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes :{
        ring: {
          '0%' : { transform: 'translateX(-5px) rotate(-15deg)' },
          '25%' : { transform: 'translateX(5px) rotate(5deg)' },
          '50%': { transform: 'translateX(-5px) rotate(-10deg)' },
          '75%' : { transform: 'translateX(5px) rotate(10deg)' },
          '100%' : { transform: 'translateX(0) rotate(0deg)' }
        },
        phone:{
          '0%' : {
            transform: 'translateY(0)',
          },
          '25%' : {
            transform: 'translateY(-11%)',
          },
          '50%' : {
            transform: 'translateY(0)',
          },
          '75%' : {
            transform: 'translateY(-6%)',
          },
         
          '100%' : {
            transform: 'translateY(0)',
          }
        },
        phoneTwo:{
          '0%' : {
            transform: 'translateY(0)',
          },
          '25%' : {
            transform: 'translateY(-11%)',
          },
          '50%' : {
            transform: 'translateY(0)',
          },
          '75%' : {
            transform: 'translateY(-6%)',
          },
         
          '100%' : {
            transform: 'translateY(0)',
          }
        }
      },
      animation : {
        ring : 'ring 0.4s ease-in-out infinite alternate',
        phone : 'phone 5s ease-in-out alternate ',
        phoneTwo : 'phoneTwo 5s ease-in-out alternate'
      },
      cursor: {
        'fancy': 'url(./src/assets/Imp/curserIcon.svg), wait',
      }
    },
    fontFamily: {
      Urbanist: ['Urbanist', 'sans-serif'],
      Bree : ["Bree serif", 'serif']
    },
  },
  plugins: [],
}

