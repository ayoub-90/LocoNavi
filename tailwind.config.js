module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" },
    },
    extend: {
      colors: {
        gray: {
          100: "#f4f4f4",
          "100_01": "#f4f3ff",
        },
        blue: {
          100: "#c4e1f5",
          600: "#3498db",
          "600_49": "#3498db49",
        },
        white: {
          A700: "#ffffff",
          A700_e0: "#ffffffe0",
        },
        deep_purple: {
          800: "#4a20aa",
          "800_7f": "#4a20aa7f",
          "800_cc": "#4a20aacc",
          "800_9b": "#4a20aa9b",
          "800_d1": "#4a20aad1",
        },
        blue_gray: {
          400: "#8a8a8a",
          700: "#4f5358",
          "100_9e": "#d9d9d99e",
        },
        black: {
          900: "#000000",
          "900_6b": "#0000006b",
        },
        green_A400: "#15cf74",
        red_500: "#ff3a44",
        pink_A700: "#c31162",
        red_A700_01: "#ff0000",
        teal_300: "#3a9dc4",
      },
      boxShadow: {
        xs: "0px 4px 60px 0px rgba(0, 0, 0, 0.16)",
        sm: "0px 4px 35px 0px rgba(0, 0, 0, 0.26)",
      },
      fontFamily: {
        opensans: "Open Sans",
        overlock: "Overlock",
      },
      opacity: {
        0.6: 0.6,
        0.5: 0.5,
        0.65: 0.65,
      },
      backgroundImage: {
        gradient: "linear-gradient(163deg, #2980b9,#3498db)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
