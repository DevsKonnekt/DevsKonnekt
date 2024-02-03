"use client";

import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

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

const MovingSection = () => {
  return (
    <>
      <section className="relative w-screen max-w-[1440px] h-[80px] overflow-x-hidden mt-4 mb-8 border-b-2 border-b-primary/50 dark:border-b-gray-400">
        <motion.div
          className=" absolute whitespace-nowrap top-1/3 -translate-y-1/2"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1 className="text-blue-500 text-2xl font-bold items-center flex gap-4">
            <FaArrowDown className="text-blue-500 text-4xl" /> Ignite Your
            Creativity.
            <FaArrowDown className="text-blue-500 text-4xl" /> Unleash Your
            Connectivity. <FaArrowDown className="text-blue-500 text-4xl" />
            Experience The Magic.
            <FaArrowDown className="text-blue-500 text-4xl" /> Ignite Your
            Creativity.
            <FaArrowDown className="text-blue-500 text-4xl" /> Unleash Your
            Connectivity. <FaArrowDown className="text-blue-500 text-4xl" />
            Experience The Magic.
            <FaArrowDown className="text-blue-500 text-4xl" /> Ignite Your
            Creativity.
            <FaArrowDown className="text-blue-500 text-4xl" /> Unleash Your
            Connectivity. <FaArrowDown className="text-blue-500 text-4xl" />
            Experience The Magic.
          </h1>
        </motion.div>
      </section>
    </>
  );
};

export default MovingSection;
