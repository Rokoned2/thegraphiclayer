/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1024px",
      xxl: "1200px",
    },

    extend: {},

    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
