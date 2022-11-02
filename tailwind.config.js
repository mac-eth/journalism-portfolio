/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown": "#87695d",
        "green": "#b2af8a",
        "cream": "#ded7c7",
        "darkcream": "#b3ad9f",
        "tan": "#ac886a",
      },
    },  
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],
}
