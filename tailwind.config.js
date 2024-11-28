/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffffff',
        'secondery': '#dddddd',
        'bdybg': '#121212',
        'brand': '#FF4655',
        'bgsecondery': '#212121'
        
      },
      gridTemplateColumns: {
        'bnrgrid': '45%  55%',
        'StreamGrid': '40% 20% 40%',
        'gameGrid': '1fr 1fr 1fr 1fr',
        'teamGrid': '1fr 1fr',
        'footGrid': '1fr 1fr 1fr'
      },
      backgroundImage: {
        'bnrbg': "url('images/bannerimg.png')",
      },
    },
    container: {
      center: true,
      screens: {
        'sm': '640px',
  
        'md': '768px',
  
        'lg': '1024px',
  
        'xl': '1320px',
      },
      padding: {
        DEFAULT: '10px',
      },
    },
    fontFamily: {
      'oswald': ["Oswald", "sans-serif"],
      'Barlow': ["Barlow Condensed", "sans-serif"]
    }
  },
  plugins: [],
}