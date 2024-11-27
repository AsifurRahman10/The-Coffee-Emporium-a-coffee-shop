/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nav-bg': "url('./src/assets/images/more/15.jpg')",
        'banner-bg': "url('./src/assets/images/more/3.png')",
        'addCoffee-bg': "url('./src/assets/images/more/11.png')",
        'allCoffee-bg': "url('./src/assets/images/more/1.png')",
        'footer-bg': "url('./src/assets/images/more/13.jpg')",

      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

