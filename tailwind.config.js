/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
        fo_t:['SFPro-thin', 'sans-serif'],
        fo_r: ['SFPro-rounded', 'sans-serif'],
    
    },
  },
  plugins: [],
}