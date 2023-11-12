/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        font15: "15px",
        font17: "17px",
        font20: "20px",
      },
    },
  },
  plugins: [],
};
