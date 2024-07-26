/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { poppins: "Poppins, sans-serif" },
    extend: {},
    screens: {
      'xsm': '300px',
      'sm': '730px',
      'md': '800px',
      'lg': '1100px',
      'xl': '1280px',
      '2xl': '1536px',

    }
  },
  plugins: [],
};
