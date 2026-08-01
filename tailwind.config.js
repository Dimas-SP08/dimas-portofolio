/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./porto/templates/**/*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#111111',       // Deep Charcoal / Almost Black
          surface: '#1A1A1A',  // Lighter Charcoal for cards
          text: '#F3F4F6',     // Off-white text
          muted: '#9CA3AF',    // Gray text
          accent: '#E07A5F',   // Soft Terracotta / Peach accent
          line: '#333333'      // Subtle line color
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
        mega: '.5em',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-right': 'slide-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }
    }
  },
  plugins: [],
}
