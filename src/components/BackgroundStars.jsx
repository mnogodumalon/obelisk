import { motion } from "framer-motion";
import BackgroundPattern from "../assets/bg-pattern1.png";
import BackgroundPattern2 from "../assets/bg-pattern2.png";
import BackgroundPatternMobile1 from "../assets/bg-pattern-mobile1.png";
import Star1 from "../assets//stars/star1.png";
import Star2 from "../assets//stars/star2.png";
import Star3 from "../assets//stars/star3.png";
import Star4 from "../assets//stars/star4.png";
import Star5 from "../assets//stars/star5.png";
import Star6 from "../assets//stars/star6.png";
import Star7 from "../assets//stars/star7.png";
import Star8 from "../assets//stars/star8.png";
import Star9 from "../assets//stars/star9.png";
import Star10 from "../assets//stars/star10.png";
import Star11 from "../assets//stars/star11.png";
import Star12 from "../assets//stars/star12.png";
import Star13 from "../assets//stars/star13.png";
import Star14 from "../assets//stars/star14.png";
import Star15 from "../assets//stars/star15.png";
import Star16 from "../assets//stars/star16.png";
import Star17 from "../assets//stars/star17.png";

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
        top: `${top}%`,
        left: `${left}%`,
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
    <div>
      <div className="hidden md:block absolute top-0 left-0 w-full h-full -z-10">
        <img src={BackgroundPattern} alt="" />
        <img className="relative -top-[22%]" src={BackgroundPattern2} alt="" />
        <Star top={2.2} left={41} height={60} width={60} src={Star1} />
        <Star top={5} left={82} height={43} width={43} src={Star2} />
        <Star top={15} left={78} height={20} width={20} src={Star3} />
        <Star top={17} left={43} height={60} width={60} src={Star4} />
        <Star top={15} left={8} height={14} width={14} src={Star5} />
        <Star top={25.5} left={60} height={55} width={55} src={Star6} />
        <Star top={24} left={19} height={30} width={30} src={Star7} />
        <Star top={32} left={80} height={70} width={70} src={Star8} />
        <Star top={41} left={13} height={45} width={45} src={Star9} />
        <Star top={42.6} left={45} height={60} width={60} src={Star10} />
        <Star top={48} left={86} height={70} width={70} src={Star11} />
        <Star top={55.5} left={38} height={60} width={60} src={Star12} />
        <Star top={58} left={85} height={40} width={40} src={Star13} />
        <Star top={70} left={15} height={40} width={40} src={Star14} />
        <Star top={72} left={87} height={80} width={80} src={Star15} />
        <Star top={81} left={25} height={50} width={50} src={Star16} />
        <Star top={95.5} left={11.5} height={90} width={90} src={Star17} />
      </div>
      <div className="md:hidden absolute top-0 left-0 w-full h-full -z-10">
        <img
          src={BackgroundPatternMobile1}
          alt=""
          className="relative top-[0.5%] -left-[60%] max-w-[230%] h-auto"
        />
      </div>
    </div>
  );
}

export default BackgroundStars;
