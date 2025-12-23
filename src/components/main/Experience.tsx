"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experienceData = [
  {
    title: "Next.Js Developer",
    company: "Cloudfire IT Services",
    date: "Nov 2025 - Present",
    location: "Gurugram, India",
    description:
      "Freelance Next.js Developer working on a travel booking website. Responsible for frontend development, API integration, dynamic data rendering, and building responsive, user-friendly UI components using Next.js while ensuring smooth performance and cross-device compatibility.",
  },

  {
    title: "Front-End Developer",
    company: "Uniisphere Unified Pvt Ltd",
    date: "Nov 2024 - Nov 2025",
    location: "Gurugram, India",
    description:
      "Worked as a Frontend Developer on a unified job-portal and social-media platform. Created responsive, animated UIs with Next.js/React, integrating APIs, and adding real-time features like chat using WebSockets.",
  },
  {
    title: "Java Full Stack Developer",
    company: "JSpider-Training Institute",
    date: "Apr 2024 - Apr 2025",
    location: "Bengaluru, India",
    description:
      "Completed Java Full Stack Development training. Gained hands-on experience in building end-to-end web applications. The training focused on practical implementation of Java, SQL, Servlets, and modern frontend technologies through real-world assignments and projects.",
  },
  {
    title: "Front-End Developer",
    company: "Apex Planet Software Pvt Ltd",
    date: "Jan 2025 - Feb 2025",
    location: "Bihar, India",
    description:
      "Contributed to front-end development, focusing on creating responsive and interactive user interfaces using modern web technologies. Collaborated with the team to deliver high-quality software solutions.",
  },
  {
    title: "Front-End Developer Intern",
    company: "CodSoft",
    date: "Jan 2024 - March 2024",
    location: "Remote",
    description:
      "Completed a web development internship, completing various tasks and projects such as a calculator, landing page, and portfolio website using HTML, CSS, and JavaScript.",
  },
];

const ExperienceCard = ({ item, index }: { item: any; index: number }) => {
  const ref = useRef(null);
  // Independent scroll progress for each card to trigger animations on view
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const xInitial = index % 2 === 0 ? -50 : 50;
  const xValue = useTransform(scrollYProgress, [0, 1], [xInitial, 0]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        x: xValue,
        opacity: opacityValue,
      }}
      className={`relative flex items-center md:justify-between md:items-center w-full mb-8 ${
        index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      } flex-row`}
    >
      {/* Spacer for desktop alignment */}
      <div className="hidden md:block w-5/12" />

      {/* Center Node */}
      <div className="z-20 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-r from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/50 absolute left-0 md:left-1/2 transform md:-translate-x-1/2 border-4 border-[#030014]">
        <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
      </div>

      {/* Content Card */}
      <div className="w-full pl-10 md:w-5/12 md:pl-0">
        <div className="p-6 rounded-lg border border-[#7042f88b] bg-[#0300145e] hover:bg-[#03001480] transition-all duration-300 shadow-lg hover:shadow-[#2A0E61]/50 backdrop-blur-md hover:scale-[1.02] cursor-pointer">
          <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
          <h4 className="text-lg text-purple-300 font-semibold">
            {item.company}
          </h4>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mt-2 mb-4">
            <span>{item.date}</span>
            <span className="hidden sm:inline">|</span>
            <span>{item.location}</span>
          </div>
          <p className="text-gray-200 leading-relaxed text-sm md:text-base">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center w-full py-20 overflow-hidden relative"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 py-20">
        Experience
      </h1>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 relative">
        {/* Central Vertical Line */}
        <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-purple-500 via-cyan-500 to-purple-500 rounded-full opacity-30" />

        <div className="flex flex-col gap-10">
          {experienceData.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
