import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import obeliskIcon from "../assets/obelisk-icon.png";

function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("HOME");
  const [isFixed, setIsFixed] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "HOME", href: "#obelisk" },
    { name: "EXPLORE", href: "#description" },
    { name: "ROADMAP", href: "#roadmap" },
    { name: "PARTNERSHIPS", href: "#partnerships" },
    { name: "SOCIALS", href: "#socials" },
    { name: "DOCS", href: "#footer" },
  ];

  const hoverVariants = {
    hover: {
      scale: 1.05,
      textShadow:
        "0 0 12px rgba(0, 255, 255, 1), 0 0 24px rgba(0, 255, 255, 0.7)",
    },
  };

  const scrollToSection = (href) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (window.scrollY > navbar.offsetHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      const sections = menuItems.map((item) =>
        document.querySelector(item.href)
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setCurrentPage(section.id.toUpperCase());
          break;
        }
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuItems]);

  return (
    <nav
      className={`p-4 bg-black/75 text-white md:hidden w-screen z-50 ${
        isFixed ? "fixed top-0 left-0 right-0 z-50" : "relative"
      }`}
      onClick={toggleMenu}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="h-12 w-12 mr-2"
            src={obeliskIcon}
            alt="Obelisk Icon"
          />
          <span className="text-lg font-medium">{currentPage}</span>
        </div>
        <button className="text-xl font-medium focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="bg-gray-800/75 absolute top-full left-0 right-0"
        >
          {menuItems.map((item) => (
            <motion.a
              key={item.name}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentPage(item.name);
                scrollToSection(item.href);
                toggleMenu();
              }}
              className="block w-full text-left px-4 py-2 text-lg border-b border-gray-700/75"
              style={{ cursor: "pointer" }}
              variants={hoverVariants}
              whileHover="hover"
              href={item.href}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

export default NavMobile;
