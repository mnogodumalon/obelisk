import { motion } from "framer-motion";
import obeliskIcon from "../assets/obelisk-icon.png";

function Navbar() {
  const hoverVariants = {
    hover: {
      scale: 1.05,
      textShadow:
        "0 0 12px rgba(0, 255, 255, 1), 0 0 24px rgba(0, 255, 255, 0.7)",
    },
  };

  return (
    <nav className="hidden md:block md:w-full p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex md:w-full justify-center">
          <div className="flex md:w-full justify-around items-center">
            <motion.a
              className="px-3 py-2 rounded font-medium text-xl bg-transparent border-none outline-none focus:outline-none"
              style={{ cursor: "pointer" }}
              variants={hoverVariants}
              whileHover="hover"
              href="#hero"
            >
              <div className="flex items-center">
                <img
                  className="h-24 w-24 max-w-24 mr-2"
                  src={obeliskIcon}
                  alt="Obelisk DEX"
                />
                <span className="text-nowrap">Obelisk DEX</span>
              </div>
            </motion.a>
            {[
              { name: "EXPLORE", href: "#description" },
              { name: "ROADMAP", href: "#roadmap" },
              { name: "PARTNERSHIPS", href: "#partnerships" },
              { name: "SOCIALS", href: "#socials" },
              { name: "DOCS", href: "#footer" },
            ].map((link) => (
              <motion.a
                key={link.name}
                className="px-3 py-2 rounded font-normal text-xl bg-transparent border-none outline-none focus:outline-none"
                style={{ cursor: "pointer" }}
                variants={hoverVariants}
                whileHover="hover"
                href={link.href}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
