import Link from "../assets/icons/link.png";
import { motion } from "framer-motion";

function Partnerships() {
  return (
    <div
      id="partnerships"
      className="md:pt-44 pt-24 flex flex-col items-center gap-6"
    >
      <h2 className="font-medium md:text-4xl text-xl">PARTNERSHIPS</h2>
      <p className="text-gray-600 md:text-lg text-sm text-center md:w-[600px]">
        We’re open to cooperation and mutual support between new projects and
        those that have already proven themselves to be the best. Below is the
        feedback form, fill it out if you are ready to become our partner
      </p>
      <motion.button
        whileTap={{ scale: 0.97 }}
        whileHover={{
          scale: 1.05,
          // boxShadow:
          //   "0 0 20px rgba(255, 255, 255, 0.1), 0 0 40px rgba(255, 255, 255, 0.1)",
        }}
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
        className="text-nowrap mt-2 flex items-center font-semibold text-sm md:px-24 px-16 py-5 rounded-full bg-blackish text-white shadow-glow relative border-thin border-gray-700"
      >
        Become our partner
        <img className="md:ml-4 ml-2 h-[18px]" src={Link} alt="Link icons" />
      </motion.button>
    </div>
  );
}

export default Partnerships;
