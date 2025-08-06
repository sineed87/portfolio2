import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import localFont from "next/font/local";

const navLinks = ["Home", "About", "Services", "Contact"];

const editorlightitalic = localFont({
  src: "../fonts/editorlightitalic.otf",
});

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const sidebarVariants: Variants = {
  hidden: { x: "100%" },
  show: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  },
  exit: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

const iconSpinVariants: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${editorlightitalic.className}`}>
      
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed top-4 right-4 z-50 w-12 h-12 text-black  rounded-full flex items-center justify-center"
        initial="initial"
        animate="animate"
        key={isOpen ? "open" : "close"}
        variants={iconSpinVariants}
      >
        {isOpen ? (
          <X className="text-white w-6 h-6" />
        ) : (
          <Menu className="text-white w-6 h-6" />
        )}
      </motion.button>
      

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial="hidden"
            animate="show"
            exit="exit"
            variants={sidebarVariants}
            className="fixed top-0 right-0 h-full w-420 rounded-l-[10px] bg-[#121212] shadow-lg z-40 p-6"
          >
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {navLinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  variants={linkVariants}
                  className="text-6xl text-white py-2 tracking-wider    border-gray-200 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </motion.li>
              ))}
            </motion.ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
