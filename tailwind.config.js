/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7FAFC", // Soft white
        primary: "#2DD4BF", // Teal
        text: "#4A5568", // Dark gray
        secondary: "#E2E8F0", // Light gray
      },
    },
  },
  plugins: [],
};