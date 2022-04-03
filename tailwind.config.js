module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "body": "#14141B",
        "body-light": "#1F1F28",
        "border": "#858599",
        "pred": "#e75a66",
        "pred-faded": "#e75a66",
        "white": "#E8E8E8"
      },
      backgroundImage: {
        'cutie': "url('../public/cutie.png')"
      }
    },
  },
  plugins: [],
}