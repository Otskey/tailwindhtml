module.exports = {
  content: [
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
};

