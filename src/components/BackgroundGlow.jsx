import ArgumentBg from "../assets/ArgumentBg.png";
import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";

function BackgroundGlow(props) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  React.useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut", delay: 1.5 },
      });
    }
  }, [controls, isInView]);

  return (
    <motion.img
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      src={ArgumentBg}
      className={
        props.direction
          ? "absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 -z-10 hidden md:block"
          : "absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 -z-10 hidden md:block"
      }
      alt=""
    />
  );
}

export default BackgroundGlow;
