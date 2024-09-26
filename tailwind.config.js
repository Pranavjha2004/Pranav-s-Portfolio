/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 3px 8px rgba(0, 0, 0, 0.24)',
      },
    },
  },
  plugins: [],
}

