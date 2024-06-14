import { motion } from "framer-motion";

function Star({ top, left }) {
  const variants = {
    animate: {
      rotate: [0, 360], // Komplette Umdrehung von 0 bis 360 Grad
      x: ["0%", "2%", "0%", "-2%", "0%"], // Horizontal oszillieren
      y: ["0%", "-2%", "0%", "2%", "0%"], // Vertikal oszillieren
      scale: [1, 1.1, 1, 1.1, 1], // Pulsieren
      transition: {
        rotate: {
          repeat: Infinity, // Unendliches Wiederholen der Drehung
          duration: 5, // Dauer der vollständigen 360° Drehung
          ease: "linear", // Lineares Bewegungstempo
        },
        default: {
          repeat: Infinity, // Unendliches Wiederholen aller anderen Animationen
          duration: 5, // Dauer für einen kompletten Zyklus der anderen Animationen
          ease: "linear", // Lineares Bewegungstempo für alle anderen Animationen
        },
      },
    },
  };

  return (
    <motion.div
      className="star absolute"
      style={{ top: `${top}%`, left: `${left}%` }}
      variants={variants}
      animate="animate"
    />
  );
}

function BackgroundStars() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-10">
      <Star top={0} left={15} />
      <Star top={20} left={50} />
      <Star top={50} left={30} />
      <Star top={70} left={80} />
      <Star top={80} left={20} />
      {/* Weitere Sterne nach Bedarf */}
    </div>
  );
}

export default BackgroundStars;
