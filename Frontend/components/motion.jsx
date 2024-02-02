"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15,
        ease: "linear",
      },
    },
  },
};

const MovingTextSection = () => {
  return (
    <div>
      <div className="bg-primary relative w-screen max-w-[1440px] h-[80px] overflow-x-hidden">
        <motion.div
          className=" absolute whitespace-nowrap top-1/3 -translate-y-1/2"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1 className="text-3xl text-white font-bold flex gap-4">
            <FaStar /> Engage. Inspire. Innovate.
            <FaStar /> Unleash Your Creativity. <FaStar /> Engage. Inspire.
            Innovate.
            <FaStar /> Unleash Your Creativity. <FaStar /> Engage. Inspire.
            Innovate.
            <FaStar /> Unleash Your Creativity. <FaStar /> Engage. Inspire.
            Innovate.
            <FaStar /> Unleash Your Creativity. <FaStar />
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default MovingTextSection;
