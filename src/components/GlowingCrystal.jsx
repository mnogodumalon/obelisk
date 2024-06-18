import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Crystal from "../assets/obelisk.png"; // Pfad zu Ihrem Kristallbild
import { useEffect } from "react";

function GlowingCrystal() {
  const controls = useAnimation();
  const isDesktop = useMediaQuery({ minWidth: 768 });

  // Animationsvarianten für das Leuchten
  const glowVariants = {
    static: {
      filter:
        "brightness(1) drop-shadow(0 0 120px rgba(0, 255, 255, 1)) drop-shadow(0 0 120px rgba(0, 255, 255, 0.7)) saturate(150%)",
    },
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

  useEffect(() => {
    if (isDesktop) {
      controls.start("animate");
    } else {
      controls.start("static");
    }
  }, [controls, isDesktop]);

  return (
    <motion.img
      src={Crystal}
      alt="Glowing Crystal"
      className="md:h-96 h-64"
      variants={glowVariants}
      initial={isDesktop ? "animate" : "static"}
      animate={controls}
    />
  );
}

export default GlowingCrystal;
