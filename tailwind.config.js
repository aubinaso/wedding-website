/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fff8ed',
        porcelain: '#fffdf8',
        wine: '#7f1d1d',
        rosewood: '#9f3434',
        blush: '#f4d7cf',
        champagne: '#ead7b7',
        ink: '#3d2923',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(127, 29, 29, 0.14)',
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
