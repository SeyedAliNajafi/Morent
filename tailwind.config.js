/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#3563e9",
        secondary: "#90a3bf",
        background: "#F6F7F9",
      },
    },
  },
  plugins: [],
};
