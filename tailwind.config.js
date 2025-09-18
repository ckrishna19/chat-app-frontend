/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          softBlue: "#8ECAE6",
          vibrantBlue: "#219EBC",
          deepNavy: "#023047",
          goldenYellow: "#FFB703",
          warmOrange: "#FB8500",
        },
      },
    },
  },
  plugins: [],
};
