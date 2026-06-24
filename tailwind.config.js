module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#032368",
        secondary: "#0642C4",
        accent: "#EAE22F",
        font: "#242424",
      },
    },
  },
  plugins: [],
};
