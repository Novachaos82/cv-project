/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#2f3335",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        BebasNeue: ["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [],
};
