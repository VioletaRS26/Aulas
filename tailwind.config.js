/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        azulEscuro: '#006ec7',
        azulMedio: '#0033ab',
        azulClaro: '#006ec7'
      }
    },
  },
  plugins: [],
}
