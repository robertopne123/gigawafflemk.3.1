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
        rainbow: {
          "0%": {
            transform: "translateY(10px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
          "100%": {
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        "card-grow": "grow .2s linear ease-in-out",
        rainbow: "rainbow 1.5s ease-in-out infinite",
      },
      screens: {
        xs: { min: "400px", max: "768px" },
        lg: { min: "1024px", max: "1250px" },
        md: { min: "768px", max: "1024px" },
        lg2: { min: "1300px", max: "4000px" },
        lg3: { min: "1250px", max: "1300px" },
        sm2: { min: "500px", max: "1250px" },
        sm3: { min: "400px", max: "500px" },
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};
