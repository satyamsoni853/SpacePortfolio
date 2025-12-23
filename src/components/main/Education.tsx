"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center w-full py-20 relative overflow-hidden"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 py-10 relative z-10">
        My Education
      </h1>

      <div className="flex flex-col items-center justify-center w-full gap-8 relative z-10 px-5">
        {/* B.Tech Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.3)}
          className="w-full max-w-[900px] p-[3px] rounded-2xl bg-linear-to-r from-purple-500 to-cyan-500 transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
        >
          <div className="flex flex-col md:flex-row items-center justify-between w-full p-8 rounded-2xl bg-[#030014] backgrop-blur-3xl min-h-[180px]">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-2">
                <SparklesIcon className="text-[#b49bff] h-6 w-6" />
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  Bachelor of Technology (B.Tech)
                </h1>
              </div>
              <h2 className="text-xl text-gray-300 font-medium">
                Computer Science & Engineering
              </h2>
              <h3 className="text-lg text-purple-400">
                Kamala Nehru Institute of Physical and Social Sciences
              </h3>
              <p className="text-gray-400 text-sm mt-2 max-w-[500px]">
                Specialized in Java Full Stack Web Development. Built a strong
                foundation in algorithms, data structures, and software
                engineering principles.
              </p>
            </div>
            <div className="flex flex-col items-end justify-center mt-5 md:mt-0">
              <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-b from-purple-500 to-cyan-500">
                2025
              </span>
              <span className="text-gray-400 text-sm tracking-widest uppercase mt-2">
                Graduation Year
              </span>
            </div>
          </div>
        </motion.div>

        {/* Intermediate Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromRight(0.4)}
          className="w-full max-w-[900px] p-[3px] rounded-2xl bg-linear-to-r from-cyan-500 to-purple-500 transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
        >
          <div className="flex flex-col md:flex-row items-center justify-between w-full p-8 rounded-2xl bg-[#030014] backgrop-blur-3xl min-h-[150px]">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Intermediate (12th Grade)
              </h1>
              <h3 className="text-lg text-cyan-400">
                Sangam Modern Inter College, Prayagraj
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Completed higher secondary education with a focus on Science and
                Mathematics.
              </p>
            </div>
            <div className="flex flex-col items-end justify-center mt-5 md:mt-0">
              <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-b from-cyan-500 to-purple-500">
                2020
              </span>
              <span className="text-gray-400 text-sm tracking-widest uppercase mt-2">
                Completed
              </span>
            </div>
          </div>
        </motion.div>

        {/* High School Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)}
          className="w-full max-w-[900px] p-[3px] rounded-2xl bg-linear-to-r from-purple-500 to-cyan-500 transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
        >
          <div className="flex flex-col md:flex-row items-center justify-between w-full p-8 rounded-2xl bg-[#030014] backgrop-blur-3xl min-h-[150px]">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                High School (10th Grade)
              </h1>
              <h3 className="text-lg text-purple-400">
                Sangam Modern Inter College, Prayagraj
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Foundation of academic journey.
              </p>
            </div>
            <div className="flex flex-col items-end justify-center mt-5 md:mt-0">
              <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-b from-purple-500 to-cyan-500">
                2018
              </span>
              <span className="text-gray-400 text-sm tracking-widest uppercase mt-2">
                Completed
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <div className="w-[80%] h-[60%] rounded-full bg-linear-to-r from-purple-800 to-cyan-800 blur-[120px] opacity-40"></div>
        </div>
      </div>
    </section>
  );
};

export default Education;
