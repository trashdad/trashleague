module.exports = {
  mode: 'jit',
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    debugScreens: {
      position: ['bottom', 'right'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ],
  purge: ['./src/**/*.{js,md,njk,svg}'],

    extend: {
      typography: {
        css: {
          h1: {
            fontSize: '3.5rem', //Trying to make h1 big like in https://trash.farm
            marginBottom: '0',
          },
        },
      },
    },
}