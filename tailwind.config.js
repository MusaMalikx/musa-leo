/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        light: "#F9F9F9",
        "dark-border": "#202023", //"#37474F",
        "light-border": "#F7f7f7",
        "primary-dark": "#F96666",
        "primary-light": "#FF1E1E",
      },
      fontFamily: {
        "family-poppins": "Poppins",
        "family-montserrat": "Montserrat",
        "family-dancing-script": "Dancing Script",
        "family-noto-serif-sc": "Noto Serif SC",
      },
    },
  },
  plugins: [],
};

// export const lightTheme = {
//   body: "#FFF",
//   text: "#363537",
//   toggleBorder: "#FFF",
//   background: "#363537",
// };
// export const darkTheme = {
//   body: "#363537",
//   text: "#FAFAFA",
//   toggleBorder: "#6B8096",
//   background: "#999",
// };
