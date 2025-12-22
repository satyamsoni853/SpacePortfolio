"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { projectsData } from "@/constants/projects";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 relative z-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-10">
        {projectsData.slice(0, 6).map((project) => (
          <ProjectCard
            key={project.id}
            src={project.image}
            title={project.projectName}
            description={project.projectDesc}
            tags={project.tags}
            code={project.code}
            demo={project.demo}
          />
        ))}
      </div>

      <div className="w-full flex justify-center mt-10">
        <Link
          href="/projects"
          className="px-6 py-3 bg-linear-to-r from-purple-500 to-cyan-500 text-center text-white cursor-pointer rounded-lg max-w-[200px] transition-all duration-300 hover:scale-105 active:scale-95 font-semibold shadow-lg shadow-purple-500/30"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default Projects;
