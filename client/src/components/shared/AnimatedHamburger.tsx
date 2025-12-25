"use client";

import { motion } from "framer-motion";

interface AnimatedHamburgerProps {
  isOpen: boolean;
}

const AnimatedHamburger = ({ isOpen }: AnimatedHamburgerProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 w-6 h-6 outline-hidden">
      <motion.span
        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-6 h-0.5 bg-current rounded-full block"
      />
      <motion.span
        animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-6 h-0.5 bg-current rounded-full block"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-6 h-0.5 bg-current rounded-full block"
      />
    </div>
  );
};

export default AnimatedHamburger;
