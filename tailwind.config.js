/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vermelhos (Mais fechados e elegantes)
        'natal-red-dark': '#7F1D1D',   // Vinho profundo
        'natal-red': '#991B1B',        // Vermelho sangue
        'natal-red-light': '#FCA5A5',  // Rosa suave

        // Verdes (Mais naturais e sóbrios)
        'natal-green-dark': '#14532D', // Verde floresta
        'natal-green': '#166534',      // Verde pinheiro
        'natal-green-light': '#86EFAC', // Verde menta

        // Dourados (Mais metálicos)
        'natal-gold-dark': '#B45309',  // Bronze
        'natal-gold': '#D97706',       // Ouro velho
        'natal-gold-light': '#FDE68A', // Champanhe

        // Neutros (Mais quentes)
        'natal-cream': '#FFFAF0',      // Floral White
        'natal-silver': '#F3F4F6',     // Cinza gelo
        'natal-bronze': '#78350F',     // Marrom café
        'natal-pine': '#064E3B',       // Verde quase preto
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
