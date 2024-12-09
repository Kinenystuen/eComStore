/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  base: "/eComStore/",
  theme: {
    extend: {
      colors: {
        customBg: "#F7F9FA",
        customBgDark: {
          DEFAULT: "#2c2c2c",
          100: "#d5d5d5",
          200: "#ababab",
          300: "#808080",
          400: "#565656",
          500: "#2c2c2c",
          600: "#232323",
          700: "#1a1a1a",
          800: "#121212",
          900: "#090909"
        },
        whiteFont: {
          DEFAULT: "#E6E6E6",
          100: "#fafafa",
          200: "#f5f5f5",
          300: "#f0f0f0",
          400: "#ebebeb",
          500: "#e6e6e6",
          600: "#b8b8b8",
          700: "#8a8a8a",
          800: "#5c5c5c",
          900: "#2e2e2e"
        },
        BtnColor: {
          DEFAULT: "#3a3a3a",
          100: "#d8d8d8",
          200: "#b0b0b0",
          300: "#898989",
          400: "#616161",
          500: "#3a3a3a",
          600: "#2e2e2e",
          700: "#232323",
          800: "#171717",
          900: "#0c0c0c"
        },
        blueGreen: {
          DEFAULT: "#087f8c",
          100: "#cee5e8",
          200: "#9cccd1",
          300: "#6bb2ba",
          400: "#3999a3",
          500: "#087f8c",
          600: "#066670",
          700: "#054c54",
          800: "#033338",
          900: "#02191c"
        }
      },
      fontFamily: {
        header: ["Poppins", "sans-serif"],
        body: ["Nunito", "sans-serif"]
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
      }
    }
  },
  plugins: [require("tailwindcss"), require("autoprefixer")]
};
