/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee"],
  },
  // theme: {
  //   container: {
  //     center: true,
  //     padding: {
  //       DEFAULT: '1rem',
  //       md: '1.5rem',
  //       lg: '2rem'
  //     }
  //   },
  //   extend: {}
  // },
  plugins: [require("@tailwindcss/typography"), require("daisyui")]
}
