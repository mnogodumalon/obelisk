import { motion } from "framer-motion";
import BackgroundPattern from "../assets/bg-pattern1.png";
import BackgroundPattern2 from "../assets/bg-pattern2.png";
import Star1 from "../assets//stars/star1.png";
import Star2 from "../assets//stars/star2.png";
import Star3 from "../assets//stars/star3.png";
import Star4 from "../assets//stars/star4.png";
import Star5 from "../assets//stars/star5.png";

function randomize(value, variation) {
  const change = value * (Math.random() * variation - variation / 2);
  return value + change;
}

function Star({ top, left, src, height, width }) {
  // Erzeugt zufällige Startwerte und Amplituden für die Animation
  const initialX = randomize(0, 0.4); // Bis zu ±20% Variabilität
  const initialY = randomize(0, 0.4);
  const initialScale = randomize(1, 0.1); // Skalierung zwischen 0.9 und 1.1
  const rotationAmount = randomize(20, 1); // Zufällige Drehung zwischen -5° und +5°

  const variants = {
    animate: {
      x: [initialX, initialX - 3, initialX + 3, initialX],
      y: [initialY, initialY + 3, initialY - 3, initialY],
      scale: [
        initialScale,
        initialScale + 0.1,
        initialScale,
        initialScale + 0.1,
        initialScale,
      ],
      rotate: [0, rotationAmount, -rotationAmount, 0], // Drehung hinzugefügt
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: randomize(15, 1),
          ease: "easeInOut",
        },
        y: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: randomize(15, 1),
          ease: "easeInOut",
        },
        scale: {
          repeat: Infinity,
          repeatType: "loop",
          duration: randomize(15, 0.6),
          ease: "easeInOut",
        },
        rotate: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Dauer für eine komplette Rotationsrunde
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <motion.img
      src={src}
      alt="star"
      className="absolute"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
      variants={variants}
      animate="animate"
    />
  );
}

function BackgroundStars() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <img src={BackgroundPattern} alt="" />
      <img src={BackgroundPattern2} alt="" />
      <Star top={100} left={700} height={60} width={60} src={Star1} />
      <Star top={171} left={1723} height={43} width={43} src={Star2} />
      <Star top={750} left={1708} height={20} width={20} src={Star3} />
      <Star top={800} left={800} height={46} width={46} src={Star4} />
      <Star top={617} left={83} height={7} width={7} src={Star5} />
      {/* Weitere Sterne nach Bedarf */}
    </div>
  );
}

export default BackgroundStars;
