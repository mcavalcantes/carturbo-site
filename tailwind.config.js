/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html}"],
  theme: {
    extend: {
      colors: {
        branco: '#FFFFFF',
        preto: '#000000',
        pretoClaro: '#33312D',
        cinza: '#D9D9D9',
        cinzaClaro: '#EEEEEE',
        cinzaEscuro: '#575757',
        douradoLogo: '#FEC92B',
        douradoClaro: '#FABD14',
        douradoEscuro: '#CFA633',
        douradoEscuroFraco: '#7A6D47',
        verde: '#28C900',
        vermelho: '#C90000',
      }
    },
  },
  plugins: [],
}
