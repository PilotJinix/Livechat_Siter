module.exports = {
  mode: "jit",
  important: true,
  purge: {
    content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
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

      primary: {
        50: "#f7f8fe",
        100: "#eff0fc",
        200: "#d7daf8",
        300: "#bec4f3",
        400: "#8e97ea",
        500: "#5d6be1",
        600: "#5460cb",
        700: "#4650a9",
        800: "#384087",
        900: "#2e346e",
        DEFAULT: "#5d6be1",
      },

      secondary: {
        50: "#f9f7fd",
        100: "#f2effc",
        200: "#dfd8f6",
        300: "#ccc1f1",
        400: "#a692e7",
        500: "#8063dc",
        600: "#7359c6",
        700: "#604aa5",
        800: "#4d3b84",
        900: "#3f316c",
        DEFAULT: "#8063dc",
      },

      gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
        DEFAULT: "#6B7280",
      },

      light: "#F9FAFB",
      dark: "#111827",

      white: "#FDFEFF",
      black: "#020F12",
    },
    fontFamily: {
      serif: ['"Roboto Slab"', "ui-serif", "serif"],
      sans: ["Rubik", "ui-sans-serif", "sans-serif"],
    },
    extend: {
      spacing: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "44rem",
        192: "48rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
