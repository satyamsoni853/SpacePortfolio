"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const certificationImages = [
  "/certification/Codsoftt.png",
  "/certification/Jspiders.png",
  "/certification/img10.jpg",
  "/certification/img11.png",
  "/certification/img3.jpg",
  "/certification/img4.jpg",
  "/certification/img6.jpg",
  "/certification/img7.jpg",
  "/certification/img8.jpg",
  "/certification/img9.jpg",
];

// Duplicate the array to ensure seamless looping
const marqueeImages = [...certificationImages, ...certificationImages];

const Certification = () => {
  return (
    <section
      id="certifications"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 pb-10 uppercase tracking-widest">
        Certifications
      </h1>

      <div className="w-full relative overflow-hidden flex items-center">
        <motion.div
          className="flex gap-10 cursor-pointer"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30, // Adjust speed (seconds)
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }} // Note: Framer motion doesn't support 'animationPlayState' in whileHover directly this easily for specific CSS props, but we can do a hack or use CSS class.
          // Actually, simpler to just let it flow or use a CSS class for hover pause if Framer is tricky.
          // For simple continuous marquee, just animate.
        >
          {marqueeImages.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0300145e] hover:shadow-[#2A0E61] transition-shadow duration-300 w-[300px] h-[200px] flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Certification ${index + 1}`}
                fill
                className="object-contain p-2"
                sizes="300px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certification;
