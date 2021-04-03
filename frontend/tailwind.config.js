module.exports = {
  important: true,
  purge: {
    content: ["./src/**/*.tsx", "./src/**/*.ts"],
  },
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",

      white: "#ffffff",
      black: "#000000",

      primary: {
        100: "#f6f9fb",
        200: "#d3e2ec",
        300: "#afcbdc",

        400: "#8cb3cc",
        500: "#689cbd",
        600: "#4a84a8",

        700: "#3a6885",
        800: "#2b4c61",
        900: "#1b313e",

        light: "#f6f9fb",
        DEFAULT: "#689cbd",
        dark: "#1b313e",
      },

      neutral: {
        100: "#f9f9f9",
        200: "#dfdfdf",
        300: "#c5c6c6",

        400: "#abacad",
        500: "#919394",
        600: "#78797a",

        700: "#5f6061",
        800: "#454647",
        900: "#2c2d2d",

        light: "#f9f9f9",
        DEFAULT: "#919394",
        dark: "#2c2d2d",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      // borderColor: ["checked"],
      inset: ["checked"],
      // zIndex: ["hover", "active"],
    },
  },
  plugins: [],
};
