/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: 'class',

  theme: {
    colors: {
      'light-primary': '#FFFFFF',
      'light-secondary': '#2196F3',
      'light-tertiary': '#0A6FC2',
      'dark-primary': '#1A1A1A',
      'dark-secondary': '#3498DB',
      'dark-tertiary': '#1E4B75',
    },
    textColor: {
      'light-primary': '#34495E',
      'light-secondary': '#333333',
      'light-tertiary': '#000000',
      'light-main': '#2196F3',
      'dark-primary': '#ECF0F1',
      'dark-secondary': '#BDC3C7',
      'dark-tertiary': '#FFFFFF',
      'dark-main': '#3498DB',
    },
    extend: {},
  },
  plugins: [],
}

