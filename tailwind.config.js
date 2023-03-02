/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark' : '#202124',
        'secondary-dark' : '#171717',
      }
    },
  },
  plugins: [],
}
