/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f1f8f3',
          100: '#def0e3',
          200: '#bfdfc7',
          300: '#93c6a0',
          400: '#64a775',
          500: '#408953',
          600: '#2f6e40',
          700: '#265734',
          800: '#21462c',
          900: '#1b3a25',
          950: '#0e2014',
        },
        safety: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        charcoal: {
          800: '#1c2226',
          900: '#12171a',
          950: '#0a0d0f',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
