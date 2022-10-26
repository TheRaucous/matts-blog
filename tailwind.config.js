/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'c-bg': {
          DEFAULT: 'rgb(var(--c-bg-00) / <alpha-value>)',
        },
        'c-theme': {
          DEFAULT: 'rgb(var(--c-theme) / <alpha-value>)',
        },
        'c-brdr': {
          DEFAULT: 'rgb(var(--c-brdr) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};
