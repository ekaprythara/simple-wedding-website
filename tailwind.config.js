/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      greatVibes: ["Great Vibes", "cursive"],
      lato: ["Lato"],
      lora: ["Lora"],
      playFair: ["Playfair Display"],
      cousineMono: ["Cousine"],
      poppins: ["Poppins"],
      rubik: ["Rubik"],
    },
    extend: {
      colors: {
        gold: "#988568",
      },
      backgroundImage: {
        "wood-pattern": "url('/src/assets/images/background.png')",
        berdua: "url('/src/assets/images/Berdua.webp')",
      },
    },
  },
  plugins: [],
};
