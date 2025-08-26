/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        comic: ['Comic Neue', 'cursive'],
        lilita: ['"Lilita One"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
};