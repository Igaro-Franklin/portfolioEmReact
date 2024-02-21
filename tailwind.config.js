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
        'custom': '4px 4px 4px rgba(0, 0, 0)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

