module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        parkson: ["Parkson-Black", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        gigapink: "#E14985",
        gigablue: "#4EDDF0",
      },
      backgroundImage: {
        pgb: "url('/projects/PGB.jpg')",
        grandvenue: "url('/projects/grandvenue.jpg')",
        mycabinbed: "url('/projects/mycabinbed.jpg')",
        swapmyenergy: "url('/projects/swapmyenergy.jpg')",
        unitecities: "url('/projects/unitecities.jpg')",
        gradient: "url('/gradient.svg')",
        studio: "url('/studio.jpg')",
      },
      keyframes: {
        grow: {
          "0%": { transform: "scale(1.0)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "card-grow": "grow .2s linear ease-in-out",
      },
      screens: {
        lg2: "1300px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};
