module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {

        'blue-cris': '#2e6399',
        'red-cris':  '#E67870',

      },
    },
    fontFamily:{
      'display': ['Alegreya Sans SC'],
      'body': ['Alegreya Sans'],
    },

  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
