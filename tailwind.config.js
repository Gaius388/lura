/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purpleLura: "#5D18EB",
        help1: "#E0FFB8",
        help2: "#B8FFFB",
        help3: "#FFB8CD",
        help4: "#FFDAB8",
        help5: "#B9FFB8",
        help6: "#DBB8FF",
      },
    },
  },
  plugins: [],
};
