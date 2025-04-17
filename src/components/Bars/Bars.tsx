import { motion } from "framer-motion";
import { useState } from "react";
import "./Bars.css";

const Bars = () => {
  const [isOpen, setIsOpen] = useState(false);
  const transition = { duration: 0.3, ease: "linear" };
  const topVariants = {
    closed: { rotate: 0, y: 0, transition },
    open: { rotate: 45, y: 9, transition },
  };

  const centerVariants = {
    closed: { opacity: 1, transition },
    open: { opacity: 0, transition },
  };

  const bottomVariants = {
    closed: { rotate: 0, y: 0, transition },
    open: { rotate: -45, y: -9, transition },
  };

  return (
    <button
      className="hamburger"
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Menu"
    >
      <motion.span
        className="hamburger-line"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={topVariants}
      />
      <motion.span
        className="hamburger-line"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={centerVariants}
      />
      <motion.span
        className="hamburger-line"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={bottomVariants}
      />
    </button>
  );
};

export default Bars;
