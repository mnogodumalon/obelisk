import { motion } from "framer-motion";

const ShinyButton = () => {
  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="px-14 py-5 rounded-full relative radial-gradien bg-gradient-to-r from-blue-600 to-teal-300"
    >
      <span className="rounded-md text-neutral-100 tracking-wide font-semibold text-base h-full w-full block relative linear-mask ">
        Launch App
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
};

export default ShinyButton;
