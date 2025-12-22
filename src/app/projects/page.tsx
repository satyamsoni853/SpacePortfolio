"use client";

import React from "react";
import ProjectCard from "@/components/sub/ProjectCard";
import { projectsData } from "@/constants/projects";

const ProjectsPage = () => {
  return (
    <div className="w-full h-full pt-32 pb-20 relative z-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 pb-10">
          All Projects
        </h1>
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-10">
          {projectsData.map((project) => (
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
      </div>
    </div>
  );
};

export default ProjectsPage;
