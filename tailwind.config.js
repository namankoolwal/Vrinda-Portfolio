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
            transform: 'translateY(-8%)',
          },
          '50%' : {
            transform: 'translateY(0)',
          },
          '75%' : {
            transform: 'translateY(-4%)',
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
            transform: 'translateY(-8%)',
          },
          '50%' : {
            transform: 'translateY(0)',
          },
          '75%' : {
            transform: 'translateY(-4%)',
          },
         
          '100%' : {
            transform: 'translateY(0)',
          }
        },
        blinkone: {
          '0%, 10%, 12%, 20%, 22%, 40%, 42%, 60%, 62%, 70%, 72%, 90%, 92%, 98%, 100%': {
            width: '120px',
          },
          '11%, 21%, 41%, 61%, 71%, 91%, 99%': {
            width: '0px',
          },
        },
        blinkTwo: {
          '0%, 10%, 12%, 20%, 22%, 40%, 42%, 60%, 62%, 70%, 72%, 90%, 92%, 98%, 100%': {
            height: '80px',
          },
          '11%, 21%, 41%, 61%, 71%, 91%, 99%': {
            height: '0px',
          },
        },
        eyeball :{
          '0%' :{
            top : '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          },
          '25%' :{
            top : '50%',
            left: '50%',
            transform: 'translate(-100%, 0%)'
          },
          '50%' :{
            top : '50%',
            left: '50%',
            transform: 'translate(-80%, -80%)'
          },
          '75%' :{
            top : '50%',
            left: '50%',
            transform: 'translate(0%, -100%)'
          },
          '100%' :{
            top : '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          },
        },
        text:{
          '0%' : {
            transform: 'translateY(0)',
          },
          '25%' : {
            transform: 'translateY(-48%)',
          },
          '50%' : {
            transform: 'translateY(0)',
          },
          '75%' : {
            transform: 'translateY(-44%)',
          },
          '80%' : {
            transform: 'translateY(-40%)',
          },
          '100%' : {
            transform: 'translateY(0)',
          }
        },
        
      },
      animation : {
        ring : 'ring 0.4s ease-in-out infinite alternate',
        phone : 'phone 3.5s ease-in-out alternate ',
        phoneTwo : 'phoneTwo 3.5s ease-in-out alternate',
        blinkone : 'blinkone 10s infinite',
        blinkTwo : 'blinkTwo 10s infinite',
        text : 'text 8s ease-in-out infinite alternate',
        eyeball : 'eyeball 10s infinite'
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

