module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: '#4dc0b5',
        'teal-lighter': '#c9f9f7'
      },
    },
    fontFamily: {
      sans: ['Barlow Condensed', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      // screen: {
      //   lg: '1124px',
      //   xl: '1124px',
      //   '2xl': '1124px',
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
