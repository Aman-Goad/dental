/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textblack: '#000',
        textwhite: '#fff',
        textgray: '#d3d3d3',
        bgblue: "#135DE8"
      },
    },
  },
  plugins: [],
}