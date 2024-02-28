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
      backgroundImage: {
        "pra-gradient":
          "linear-gradient(116.23deg, #ff44ec 0%, #5bcb8b 101.42%)",
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
