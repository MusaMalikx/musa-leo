/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        light: '#F9F9F9',
        'dark-border': '#202023', //"#37474F",
        'light-border': '#F7f7f7',
        'primary-dark': '#F96666',
        'primary-light': '#FF1E1E',
        linkedin: '#0B66C2',
        snapchat: '#F7F300',
        facebook: '#0088FF',
        instagram: '#E100A6',
        email: '#34A853', //#EA4336',
      },
      fontFamily: {
        'family-poppins': 'Poppins',
        'family-montserrat': 'Montserrat',
        'family-dancing-script': 'Dancing Script',
        'family-noto-serif-sc': 'Noto Serif SC',
        'family-plaster': 'Plaster',
      },
    },
  },
  plugins: [],
};
