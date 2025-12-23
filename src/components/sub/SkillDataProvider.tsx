"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  name?: string;
}

const SkillDataProvider = ({ src, width, height, index, name }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex flex-col items-center justify-between gap-2 p-2 md:p-3 rounded-xl transition-transform hover:scale-105 z-10 bg-[#0b0c1e]/20 border border-[#7042f88b]/20 hover:border-[#7042f88b] shadow-sm w-28 h-28 md:w-36 md:h-36"
    >
      <div className="flex-1 flex items-center justify-center w-full">
        <Image
          src={src}
          width={width}
          height={height}
          alt={name || "skill image"}
          className="object-contain max-h-[70px] w-auto text-white"
        />
      </div>

      {name && (
        <span className="text-white text-[13px] font-medium text-center px-2 py-1 rounded bg-[#2A0E61]/40 border border-[#7042f88b]/30 w-full truncate">
          {name}
        </span>
      )}
    </motion.div>
  );
};

export default SkillDataProvider;
