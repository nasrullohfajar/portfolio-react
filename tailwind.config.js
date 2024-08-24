/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#0A0A0A",
          900: "#1C212A",
          800: "#212631",
          700: "#373F4E",
          600: "#4E576A",
          500: "#667085",
        },
      },
    },
  },
  plugins: [],
};
