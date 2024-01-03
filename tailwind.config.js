/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto"],
        inter: ["inter"],
      },
      colors: {
        primary: "#F9A826",
        secondary: "#F9A826",
        tertiary: "#F9A826",
        dark: "#1A1A1A",
        light: "#FFFFFF",
        green: "#4CAF4F",
        grey: "#4D4D4D",
        grey_desc: "#717171",
        bg_local: "#F5F7FA",
        sum_local: "#4D4D4D",
        footer: "#263238",
      },
    },
  },
  plugins: [],
};
