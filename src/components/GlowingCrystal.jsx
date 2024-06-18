import { motion } from "framer-motion";
import Crystal from "../assets/obelisk.png";
import obeliskBG from "../assets/obelisk-bg.png";

function GlowingCrystal() {
  // Animationsvarianten für das Leuchten
  const glowVariants = {
    animate: {
      scale: [1, 1.02, 1], // Leichte Skalierung für den Glow-Effekt
      filter: [
        "brightness(1) drop-shadow(0 0 120px rgba(0, 255, 255, 1)) drop-shadow(0 0 120px rgba(0, 255, 255, 0.7)) saturate(150%)",
        "brightness(1.2) drop-shadow(0 0 70px rgba(0, 255, 255, 1)) drop-shadow(0 0 70px rgba(0, 255, 255, 0.7))",
        "brightness(1) drop-shadow(0 0 120px rgba(0, 255, 255, 1)) drop-shadow(0 0 120px rgba(0, 255, 255, 0.7)) saturate(150%)",
      ], // Veränderung der Helligkeit und Schatten für den Leuchteffekt
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <div className="w-full">
      <motion.img
        src={Crystal}
        alt="Glowing Crystal"
        className="md:h-96 hidden md:block"
        variants={glowVariants}
        animate="animate"
      />
      <div className="flex items-center justify-center relative w-96">
        <img
          src={Crystal}
          alt="Glowing Crystal"
          className="md:hidden h-64 overflow-visible crystal-bg"
          // style={{
          //   filter:
          //     "drop-shadow(0 0 120px rgba(0, 255, 255, 1)) drop-shadow(0 0 120px rgba(0, 255, 255, 1))",
          //   transform: "translateZ(0)",
          // }}
        />
        <img
          src={obeliskBG}
          alt="Crystal Background"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96"
        />
      </div>
    </div>
  );
}

export default GlowingCrystal;
