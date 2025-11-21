/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ayanokoji-black": "#050505",
        "ayanokoji-dark": "#0a0a0a",
        "ayanokoji-red": "#8b0000",
        "ayanokoji-crimson": "#dc143c",
        "ayanokoji-gray": "#1f1f1f",
      },
      fontFamily: {
        mono: ['"Courier New"', "Courier", "monospace"],
        sans: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
