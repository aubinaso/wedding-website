/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Base ivoire / beige
        ivory: '#FFF9F0',
        cream: '#F2E9DA',
        beige: '#F2E9DA',
        // Bleu canard (couleur principale)
        canard: '#005F73',
        canardDark: '#084F59',
        canardDeep: '#07333B',
        // Or
        gold: '#C7A24A',
        goldSoft: '#D6B45C',
        goldDeep: '#A8842F',
        // Floral / accent doux
        blush: '#E7C9C2',
        rose: '#C98B86',
        // Texte
        ink: '#263A3A',
        muted: '#5C6B62',
      },
      fontFamily: {
        script: ['Parisienne', 'cursive'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(7, 51, 59, 0.12)',
        frame: '0 30px 80px rgba(7, 51, 59, 0.20)',
      },
      keyframes: {
        floatIn: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.06)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        floatIn: 'floatIn 900ms ease-out both',
        fadeIn: 'fadeIn 1200ms ease-out both',
        slowZoom: 'slowZoom 18s ease-in-out infinite',
        sway: 'sway 9s ease-in-out infinite',
        shimmer: 'shimmer 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
