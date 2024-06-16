import { motion } from "framer-motion";
import obeliskIcon from "../assets/obelisk-icon.png";
import BackgroundStars from "./BackgroundStars";

function Navbar() {
  // Hover-Variants für die Animation der Texte
  const hoverVariants = {
    initial: {
      scale: 1,
      textShadow: "0 0 0px transparent",
    },
    hover: {
      scale: [1, 1.05, 1], // Subtile Pulsation der Skalierung
      textShadow: [
        "0 0 8px rgba(0, 150, 255, 0.7), 0 0 16px rgba(0, 150, 255, 0.5)",
        "0 0 12px rgba(0, 150, 255, 1), 0 0 24px rgba(0, 150, 255, 0.7)",
        "0 0 8px rgba(0, 150, 255, 0.7), 0 0 16px rgba(0, 150, 255, 0.5)",
      ], // Erhöhter und pulsierender Leuchteffekt in Blau
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex gap-36 items-center">
            {/* Navbar items */}
            <motion.button
              className="px-3 py-2 rounded font-medium text-xl bg-transparent border-none outline-none focus:outline-none cursor-pointer"
              variants={hoverVariants}
              initial="initial"
              whileHover="hover"
            >
              <div className="flex items-center">
                <img
                  className="h-24 w-24 max-w-24 mr-2"
                  src={obeliskIcon}
                  alt="obeliskIcon"
                />
                <span className="text-nowrap">Obelisk DEX</span>
              </div>
            </motion.button>
            {["EXPLORE", "ROADMAP", "PARTNERSHIPS", "SOCIALS", "DOCS"].map(
              (item) => (
                <motion.button
                  className="px-3 py-2 rounded font-normal text-xl bg-transparent border-none outline-none focus:outline-none cursor-pointer"
                  key={item}
                  variants={hoverVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {item}
                </motion.button>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
