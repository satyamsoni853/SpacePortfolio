"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Preloader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Disable scroll while preloader is active
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "auto";
    }, 4500); // Increased duration to accommodate typing

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-screen bg-[#030014] z-[9999] flex items-center justify-center pointer-events-none"
        >
          <div className="flex flex-col items-center gap-4 px-5 text-center">
            <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 tracking-wider min-h-[100px] flex items-center justify-center">
              <TypeAnimation
                sequence={[
                  "Welcome to",
                  1000,
                  "Welcome to Satyam Soni",
                  1000,
                  "Welcome to Satyam Soni Developer Space",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={0}
                cursor={true}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
