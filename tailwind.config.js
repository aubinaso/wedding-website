/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FFF8EF',
        champagne: '#EFE7D8',
        gold: '#D4AF37',
        burgundy: '#8A1E2D',
        teal: '#0F7C80',
        cream: '#FFF9F0',
        text: '#2F2A26',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        luxe: '0 24px 80px rgba(11, 31, 58, 0.16)',
      },
      keyframes: {
        floatIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        floatIn: 'floatIn 900ms ease-out both',
        slowZoom: 'slowZoom 16s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
