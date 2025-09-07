/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       
        'fix': {'min': '500px', 'max': '1280px'},
      
    },
  },
  plugins: [],
}