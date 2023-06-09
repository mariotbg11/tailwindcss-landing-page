/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "32px": "2rem",
      },
      boxShadow: {
        "bx-sd": "5px 5px 0 0 rgb(249 115 22);",
      },
      colors: {
        primary: "#1c262f",
        primarylight: "#212d37",
        textlight: "#f8f9fa",
      },
      borderRadius: {
        circle: "50%",
      },
      width: {
        500: "31.25rem",
      },
      height: {
        500: "31.25rem",
      },
      maxWidth: {
        "8xl": "1310px",
      },
      screens: {
        xsm: "390px",
        // => @media (min-width: 400px) { ... }
      },
    },
  },
  plugins: [],
};
