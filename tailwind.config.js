/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        jakarta: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#F4EFEB',
        emerald: {
          DEFAULT: '#0A1A12',
          mid: '#122A1C',
          soft: '#1C3D28',
        },
        gold: {
          DEFAULT: '#C9963B',
          light: '#E4B96A',
          pale: '#F3E4C7',
        },
        ink: {
          DEFAULT: '#0F1410',
          mid: '#2C3830',
          soft: '#5A6E60',
        },
      },
    },
  },
  plugins: [],
}
