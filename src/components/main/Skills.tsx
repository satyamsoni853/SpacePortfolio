import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  UI_Libraries,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-10 md:gap-20 relative pb-20 md:pb-40 py-20 w-full"
    >
      <SkillText />

      <div className="flex flex-col items-center gap-8 md:gap-12 w-full z-20">
        {/* Frontend */}
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 text-2xl md:text-3xl font-bold tracking-wider text-center">
            FRONTEND TECHNOLOGIES
          </h3>
          <div className="flex flex-row justify-center flex-wrap gap-5 items-center">
            {Frontend_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                name={image.skill_name}
              />
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 text-2xl md:text-3xl font-bold tracking-wider text-center">
            BACKEND TECHNOLOGIES
          </h3>
          <div className="flex flex-row justify-center flex-wrap gap-5 items-center">
            {Backend_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                name={image.skill_name}
              />
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 text-2xl md:text-3xl font-bold tracking-wider text-center">
            DATABASE TECHNOLOGIES
          </h3>
          <div className="flex flex-row justify-center flex-wrap gap-5 items-center">
            {Full_stack.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                name={image.skill_name}
              />
            ))}
          </div>
        </div>

        {/* Tools & DevOps */}
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 text-2xl md:text-3xl font-bold tracking-wider text-center">
            TOOLS & DEVOPS
          </h3>
          <div className="flex flex-row justify-center flex-wrap gap-5 items-center">
            {Other_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                name={image.skill_name}
              />
            ))}
          </div>
        </div>

        {/* UI Libraries */}
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 text-2xl md:text-3xl font-bold tracking-wider text-center">
            UI FRAMEWORKS & LIBRARIES
          </h3>
          <div className="flex flex-row justify-center flex-wrap gap-5 items-center">
            {UI_Libraries.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                name={image.skill_name}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
