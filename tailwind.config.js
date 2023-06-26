/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gray': '#E2E2E2',
        'red-dragon': '#FF0000',
        'white': '#FFFFFF',
      },
      fontFamily: {
        'sans': ['Bebas\\ Neue', 'Poppins']
      }
    },
  },
  plugins: [],
}
