/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avant: ["var(--font-avant)"],
        avenir: ["var(--font-avenir)"],
      },
      colors: {
        secondaryGray: "#666666",
      },
    },
  },
  plugins: [],
};
