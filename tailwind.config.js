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
        'c-text': {
          DEFAULT: 'rgb(var(--c-text-01) / <alpha-value>)',
          '00': 'rgb(var(--c-text-00) / <alpha-value>)',
          '01': 'rgb(var(--c-text-01) / <alpha-value>)'
        },
        'c-brdr': {
          DEFAULT: 'rgb(var(--c-brdr) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
