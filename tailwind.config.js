/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Base ivoire / crème
        ivory: '#FBF8F1',
        cream: '#F4EEE1',
        // Bleu canard / sarcelle (couleur principale)
        canard: '#12626E',
        canardDark: '#0C4A54',
        canardDeep: '#07333B',
        // Or
        gold: '#C9A227',
        goldSoft: '#D9BE6A',
        goldDeep: '#A8871B',
        // Floral / accent doux
        blush: '#E7C9C2',
        rose: '#C98B86',
        // Texte
        ink: '#243029',
        muted: '#5C6B62',
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(6, 53, 40, 0.12)',
        frame: '0 30px 80px rgba(6, 53, 40, 0.20)',
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
      },
      animation: {
        floatIn: 'floatIn 900ms ease-out both',
        fadeIn: 'fadeIn 1200ms ease-out both',
        slowZoom: 'slowZoom 18s ease-in-out infinite',
        sway: 'sway 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
