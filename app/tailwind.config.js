/** @type {import('tailwindcss').Config} */
// prettier-ignore

module.exports = {
  content: [
    './imports/ui/**/*.{js,jsx,ts,tsx}',
    './imports/ui/**/**/*.{js,jsx,ts,tsx}',
    './client/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'aubergine': '#362E43',
        'dark-sky': '#292433',
        'lemon': '#FFC720',
        'cilantro': '#3A8D5C',
        'salt': '#FAFAFB'
      }
    },
  },
  plugins: [],
};
