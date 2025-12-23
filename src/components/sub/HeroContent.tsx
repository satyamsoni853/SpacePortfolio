"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-24 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] w-fit flex flex-row items-center rounded-lg bg-white/80 dark:bg-[#00000088]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-gray-900 dark:text-gray-300">
            Java Full Stack Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-black dark:text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-3xl md:text-5xl font-bold mt-2">
            <TypeAnimation
              sequence={[
                "Java Full Stack Web Developer",
                1000,
                "Java Developer",
                1000,
                "Frontend Developer",
                1000,
                "ReactJS Developer",
                1000,
                "NextJS Developer",
                1000,
                "Database Operations",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-800 dark:text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m Satyam Soni, a passionate Java Full Stack Developer skilled
          in building responsive, efficient, and user-friendly applications
          using React, Java, Spring Boot, SQL, and modern UI frameworks.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="https://www.linkedin.com/in/satyam-soni-90a618258/"
          target="_blank"
          rel="noreferrer"
          className="py-2 px-4 shadow-button text-center text-white cursor-pointer rounded-lg max-w-[200px] bg-linear-to-r from-purple-500 to-cyan-500 hover:opacity-90 transition-opacity"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >
        <div className="w-full md:w-[650px] h-auto flex items-center justify-center">
          <Image
            src="/MyPhoto/satyam.png"
            alt="Satyam Soni"
            height={650}
            width={650}
            className="w-full max-w-[400px] md:max-w-[450px] aspect-square object-cover rounded-full border-4 border-[#7042f88b]/50 shadow-[0_0_30px_rgba(112,66,248,0.5)]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
