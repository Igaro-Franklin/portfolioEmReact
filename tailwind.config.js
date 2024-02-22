/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      width: {
        '60': '60%'
      },
      boxShadow: {
        'custom1': '4px 4px 4px #000',
        'custom2': '4px 4px 1px #1E429F',
        'custom3': '4px 4px 2px #FFF'
      },
      backgroundColor:{
        'bg01': '#414141c9'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

