import { useRef } from "react";
import { useInView, useAnimation, motion } from "framer-motion";
import React from "react";

function GradientText(props) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  React.useEffect(() => {
    if (isInView) {
      controls.start({
        backgroundPosition: ["300%", "50%"], // Start und Endwerte für die Animation
        transition: { duration: 2, ease: "linear" },
      });
    }
  }, [controls, isInView]);

  return (
    <motion.h3
      className="font-medium text-base animated-h3"
      ref={ref}
      initial={{ backgroundPosition: "300%" }}
      animate={controls}
      style={{ backgroundSize: "200%" }}
    >
      {">"}
      {props.text}
    </motion.h3>
  );
}

export default GradientText;
