/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: { DEFAULT: '#00C6FF', dark: '#0072FF' },
        violet: { DEFAULT: '#8B5CF6', dark: '#6D28D9' },
        bg: { DEFAULT: '#050B18', 2: '#0A1628', 3: '#0F1E35' },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
