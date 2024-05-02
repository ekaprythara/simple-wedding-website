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
      platypi: ["Platypi"],
    },
    extend: {
      colors: {
        gold: "#988568",
      },
      backgroundImage: {
        ceremonyImg: "url('/src/assets/images/ceremony.webp')",
        heroImgHorizontal: "url('/src/assets/images/hero.webp')",
        heroImgVertical: "url('/src/assets/images/profile.webp')",
      },
    },
  },
  plugins: [],
};
