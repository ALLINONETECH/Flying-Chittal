/** @type {import('tailwindcss').Config} */
export default {
  // content: [],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Primary: ["Poppins"],
        Secondary: ["Montserrat"],
      },
      boxShadow: {
        custom: "0 0 5px rgba(128, 128, 128, 1)",
      },
    },
  },
  plugins: [],
};
