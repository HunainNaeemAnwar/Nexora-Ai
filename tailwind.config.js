/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    // tailwind.config.js
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [],
};
