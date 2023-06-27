/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dragon': "linear-gradient(90deg, #000 3.13%, rgba(0, 0, 0, 0.07) 100%), url('/dragon.png')",
      },
      colors: {
        'gray': "#E2E2E2",
        'red-dragon': "#FF0000",
        'text-white': "#F1F1F1",
        'white': "#FFFFFF",
      },
      fontFamily: {
        'sans': ['Bebas\\ Neue', 'Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
