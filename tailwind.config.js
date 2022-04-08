const colors = require('tailwindcss/colors');

const brandColor = colors.purple;

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: brandColor,
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
