/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: 
    {
      fontFamily: 
      {
        "oswald": ['Oswald', 'sans-serif'],
        "source-code": ['Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [],
}

