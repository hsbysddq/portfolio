/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        navy: "#8892B0f",
      },
      backgroundImage: {
        logo: "url('./src/img/logo.png')",
      },
    },
  },
  plugins: [],
}
