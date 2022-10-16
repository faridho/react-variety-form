/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "gray-rof": {
        100: "#f1f2f6",
        200: "#dfe4ea",
        300: "#95a5a6"
      },
      "black-rof": {
        100: "#747d8c"
      },
      "red-rof": {
        100: "#e74c3c"
      },
      "white-rof": {
        100: "#ffffff"
      }
    },
    extend: {
      backgroundImage: {
        'arrow-down': "url('/assets/arrow-down.svg')"
      }
    },
  },
  plugins: [],
}
