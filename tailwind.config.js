/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderWidth: {
        0.5: "0.5px", // Definiere eine benutzerdefinierte Randbreite
      },
      colors: {
        blackish: "#121212", // Hintergrundfarbe ähnlich wie dein Button-Hintergrund
        "glow-start": "rgba(255, 255, 255, 0.5)", // Reduziere Opazität für Startfarbe des Glühens
        "glow-end": "rgba(255, 255, 255, 0.2)", // Endfarbe des Glühens
      },
      boxShadow: {
        glow: "0 0 15px rgba(255, 255, 255, 0.3)", // Glüheffekt
      },
      backgroundImage: {
        "gradient-border":
          "linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2))",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serife"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
