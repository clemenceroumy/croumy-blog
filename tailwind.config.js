module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "background-light": "#FFFFFF",
        "background-dark": "#0D1317",
        "text-light": "#000000",
        "text-dark": "#FFFFFF",
        primary: '#3116FA',
        darkGray: '#9C8F6E',
        "bg-article": "#FEF7E5",
        "bg-article-dark": "#252323"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}