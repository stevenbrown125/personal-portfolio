/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#e95f47',
        },
        secondary: {
          light: '#fbbc04',
          DEFAULT: '#BE3B3B',
        },
        background: {
          light: '#FCFCFC',
        },
        twitter: {
          DEFAULT: '#459ccf',
        },
        linkedin: {
          DEFAULT: '#3972bd',
        },
        github: {
          DEFAULT: '#f0842c',
        },
      },
    },
    corePlugins: {
      aspectRatio: false,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
