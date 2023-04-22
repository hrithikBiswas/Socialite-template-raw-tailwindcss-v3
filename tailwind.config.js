/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html", "./src/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        "dark-foreground": "#0e1726",
        "dark-background": "#060818",
      },
    },
  },
  plugins: [],
};
