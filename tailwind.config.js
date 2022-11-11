module.exports = {
  purge: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        code: ["Source Code Pro"],
      },
      colors: {
        "gray-light": {
          50: "#fafafa",
          100: "#f2f2f2",
          200: "#e6e6e6",
          300: "#cfcfcf",
          400: "#b3b3b3",
          500: "#969696",
          600: "#787878",
          700: "#5c5c5c",
          800: "#4d4d4d",
          900: "#424242",
        },
        "gray-dark": {
          50: "#f3f3f3",
          100: "#e8e8e8",
          200: "#c5c5c5",
          300: "#a2a2a2",
          400: "#5c5c5c",
          500: "#161616",
          600: "#141414",
          700: "#111111",
          800: "#0d0d0d",
          900: "#0b0b0b",
        },
        cyan: {
          50: "#e5f9ff",
          100: "#d1f4ff",
          200: "#a2e9ff",
          300: "#4dd5ff",
          400: "#00b8f0",
          500: "#0095c2",
          600: "#007194",
          700: "#005670",
          800: "#004e66",
          900: "#003f52",
        },
        "mint": {
          50: "#ecfeee",
          100: "#d3fdda",
          200: "#a8fab4",
          250: "#79f88d",
          300: "#34f450",
          400: "#0bd52a",
          500: "#09b323",
          600: "#08911c",
          700: "#066f16",
          800: "#055c12",
          900: "#044e0f",
        },
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
