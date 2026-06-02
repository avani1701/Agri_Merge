/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf', // Teal 400 (Agri Merge Internationals main color)
          500: '#14b8a6',
          600: '#0d9488', // Teal 600
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a', // Teal 900
        },
        slate: {
          900: '#0f172a', // Deep Navy (Agri Merge Internationals dark background)
        }
      },
    },
  },
  plugins: [],
};
