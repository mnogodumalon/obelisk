import { motion } from "framer-motion";
import Crystal from "../assets/obelisk.png"; // Pfad zu Ihrem Kristallbild

function GlowingCrystal() {
  // Animationsvarianten für das Leuchten
  const glowVariants = {
    animate: {
      scale: [1, 1.02, 1], // Leichte Skalierung für den Glow-Effekt
      filter: [
        "brightness(1) drop-shadow(0 0 120px rgba(0, 255, 204, 1)) drop-shadow(0 0 120px rgba(0, 255, 204, 0.7)) saturate(150%)",
        "brightness(1.2) drop-shadow(0 0 70px rgba(0, 255, 204, 1)) drop-shadow(0 0 70px rgba(0, 255, 204, 0.7))",
        "brightness(1) drop-shadow(0 0 120px rgba(0, 255, 204, 1)) drop-shadow(0 0 120px rgba(0, 255, 204, 0.7)) saturate(150%)",
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
    <motion.img
      src={Crystal}
      alt="Glowing Crystal"
      className="h-96" // Größe anpassen nach Bedarf
      variants={glowVariants}
      animate="animate"
    />
  );
}

export default GlowingCrystal;
