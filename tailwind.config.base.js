/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{css,scss,xml,html,vue,svelte,ts,tsx}'],
  // use the .ns-dark class to control dark mode (applied by NativeScript) - since 'media' (default) is not supported.
  darkMode: ['class', '.ns-dark'],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: '#FFFFFF',
          200: '#F8F8F7',
          300: '#F1F1EF',
          400: '#DADAD7',
          500: '#BABAB5',
          600: '#6D6D64',
          700: '#4A4A45',
          800: '#2E2E29',
          900: '#000000',
        },
        primary: {
          100: '#EFB8D0',
          200: '#e59393',
          300: '#9E5C60',
        },
        accent: {
          100: '#54807a',
          200: '#19323c',
          300: '#0E242A',
        },
        tertiary: {
          100: '#5ccc9a',
          200: '#68bb70',
          300: '#638f6d',
        },
        focus: {
          100: '#04a7d4',
          200: '#008EAA',
          300: '#016c70',
        },
        danger: {
          100: '#B80C09',
          200: '#860000',
          300: '#680101',
        },
        warning: {
          100: '#E9B44C',
          200: '#A67528',
          300: '#7c5417',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // disables browser-specific resets
  },
};
