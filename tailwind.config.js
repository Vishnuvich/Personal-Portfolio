const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1320',
      },
      fontFamily: {
        roboto_mono: ['var(--font-roboto-mono)', ...fontFamily.sans],
        roboto: ['var(--font-roboto)', ...fontFamily.sans]
      }
    },
    listStyleType: {
      circle: 'circle'
    }
  },
  plugins: [],
}