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
      fontSize: {
        xs: ["0.8rem", { lineHeight: "160%" }],
        h4: ["1.953rem", { lineHeight: "40.62px" }],
      },
    },
  },
  plugins: [],
};
