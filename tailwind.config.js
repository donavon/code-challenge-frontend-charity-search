/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      colors: {
        background: '#0a1929',
        text: '#b2bac2',
        highlighttext: '#f5f5f5',
        primarybuttonbg: {
          default: '#2299ff',
          lighter: '#2488dd',
        },
        primarybuttontext: '#ffffff',
        disabledbuttonbg: '#131f26',
        disabledbuttontext: '#9b9797',
        link: '#66b2ff',
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '479px' },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
