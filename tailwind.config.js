/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FD590C",
        secondary: "#FFF7F5",
        black: "#1C1C1C",
      },
      screens: {
        xs: "360px", // Extra-small screens
        sm: "576px", // Small screens
        md: "768px", // Medium screens
        lg: "992px", // Large screens
        xl: "1200px", // Extra-large screens
        "2xl": "1440px", // 2x Extra-large screens
      },
    },
  },
  plugins: [],
};
