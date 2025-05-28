/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#008080',           // Your chosen teal
        accent: '#00F5D4',            // Bright teal/green
        dark: '#1A1A1A',              // Dark background or text
        light: '#F9FAFB',             // Light background
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],   // Sleek and modern for titles
        body: ['Source Code Pro', 'sans-serif'],    // Monospaced and clean for content
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
};