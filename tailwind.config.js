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
        "pra-main-500": "#242529",
        "pra-main-400": "#2c2d31",
        "pra-main-300": "#2c2d31",
        "pra-accent": "#5bcb8b",
        "pra-text-500": "#78797d",
        "pra-text-400": "#ffffff",
        "pra-universe": "#040d21",
      },
    },
  },
  plugins: [],
};
