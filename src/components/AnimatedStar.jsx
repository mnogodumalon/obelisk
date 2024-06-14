import { motion } from "framer-motion";

function AnimatedStar() {
  const variants = {
    animate: {
      rotate: [0, 360],
      x: ["0%", "2%", "0%", "-2%", "0%"],
      y: ["0%", "-2%", "0%", "2%", "0%"],
      scale: [1, 1.1, 1, 1.1, 1],
      transition: {
        duration: 5,
        loop: Infinity,
        ease: "linear",
      },
    },
  };

  return <motion.div className="star" variants={variants} animate="animate" />;
}

export default AnimatedStar;
