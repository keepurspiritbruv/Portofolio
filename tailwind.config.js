/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#0f172a',
        icikiwir: '#64748b',
        thirdary: '#ed4b00',
        fourthdary: '#ebeaed',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

