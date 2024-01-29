/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      screens: {
        sm: '640px', // Adjust the breakpoint value accordingly
      },
      fontSize: {
        '5xl': '2.5rem', // Adjust the size value accordingly
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
