// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans"],
      },
      colors: {
        "dark-gray": "hsl(0, 0%, 59%)",
        "dark-cyan": "hsl(185, 75%, 39%)",
        cyan: "hsl(185, 75%, 39%)",
        blue: {
          100: "hsl(229, 23%, 23%)",
          200: "hsl(227, 10%, 46%)",
        },
      },
      backgroundImage: () => ({
        "card-pattern": "url('/bg-pattern-card.svg')",
      }),
    },
    screens: {
      xs: "375px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
