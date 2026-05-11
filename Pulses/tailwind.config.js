/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#f5f5f5',
          foreground: '#000000',
        },
        accent: {
          DEFAULT: '#FFD700', // Gold/Yellow often used in export/agri sites
          foreground: '#000000',
        }
      },
    },
  },
  plugins: [],
}
