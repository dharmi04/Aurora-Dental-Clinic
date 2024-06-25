/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(353.89deg, #4EA76D 5.64%, #2B292A 44.94%, #000000 99.51%)',
      },
      colors:{
        primary: '#57CEBB',
        footer: "#444444"
      },
      fontFamily: {
        'rounded': ['"Arial Rounded MT Bold"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

