/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
	],
  theme: {
    
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
      
    },
    extend: {
colors: {
        'purplehope' : '#9158DB',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};