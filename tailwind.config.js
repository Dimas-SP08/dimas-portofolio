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
      }
    }
  },
  plugins: [],
}
