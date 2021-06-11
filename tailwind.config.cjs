const defaultTheme = require('tailwindcss/defaultTheme')
const fontFamily = {
  ...defaultTheme.fontFamily,
  sans: ['system-ui', 'Open Sans', 'sans-serif'],
}

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
