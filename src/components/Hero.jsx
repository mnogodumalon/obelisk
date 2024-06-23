import Logo from "../assets/logo.png";
import ShinyButton from "./ShinyButton";
import GlowingCrystal from "./GlowingCrystal";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import iStar from "../assets/istar.svg";

function Hero() {
  return (
    <div
      id="obelisk"
      className="hero flex md:flex-row flex-col items-center gap-20 md:gap-0 md:pt-32 pt-14"
    >
      <h1 className="md:hidden text-center text-3xl font-bold">
        Welcome to Obel<span className="custom-i-mobile">ı</span>sk!
      </h1>
      <div>
        <GlowingCrystal />
      </div>
      <div className="flex gap-16 flex-col items-center">
        <h1 className="hidden md:block text-[64px] font-semibold">
          Welcome to Obel
          <span className="custom-i">ı</span>
          sk!
        </h1>
        <div className="flex md:flex-row flex-col gap-8">
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
            className="order-1 md:order-2 font-semibold text-base px-14 py-5 rounded-full bg-blackish text-white shadow-glow relative border-thin border-gray-700"
          >
            Learn more
          </motion.button>
          <ShinyButton />
        </div>
      </div>
    </div>
  );
}

export default Hero;
