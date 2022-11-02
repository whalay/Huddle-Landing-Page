import React from "react";
import Navbar from "./Navbar";

import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <section className="bg-heroM md:bg-heroD bg-cover bg-pale_Cyan h-screen">
      <Navbar />
      <div className="p-20 text-center block items-center justify-center">
        <motion.p 
        animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
        transition={{
            duration: 3,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1.2 }}
        className="text-4xl md:text-5xl font-bold text-black ">OYA SOPE <span className="text-Pink">OTILOR</span></motion.p>
        <motion.p
        animate={{x: [200, 100, -200],  y:-400 , opacity: 1, scale: 1 }}
        transition={{
            duration: 9,
            delay: 0.5,
            ease: [0.5, 0.71, 1, 1.5],
            repeat: Infinity
        }}
        initial={{ x: [100, -100], y: 100, opacity: 0, scale: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-black pt-10"
        >
            <span className="text-Pink">E don</span> Go!!!
        </motion.p>
      </div>
    </section>
  );
};

export default NotFound;
