import Link from "../assets/icons/link.png";
import { motion } from "framer-motion";

function Partnerships() {
  return (
    <div id="partnerships" className="pt-44 flex flex-col items-center gap-6">
      <h2 className="font-medium text-4xl">PARTNERSHIPS</h2>
      <p className="text-gray-600 text-lg text-center w-[600px]">
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
        className=" mt-2 flex items-center font-semibold text-lg px-24 py-5 rounded-full bg-blackish text-white shadow-glow relative border-thin border-gray-700"
      >
        Become our partner
        <img className="ml-4" src={Link} alt="Link icons" />
      </motion.button>
    </div>
  );
}

export default Partnerships;
