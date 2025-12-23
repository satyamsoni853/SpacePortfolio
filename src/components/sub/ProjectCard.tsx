"use client";

import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  tags?: string[];
  code?: string;
  demo?: string;
}

const ProjectCard = ({ src, title, description, tags, code, demo }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0300145e] hover:shadow-[#2A0E61] transition-all duration-300 hover:scale-105 flex flex-col justify-between h-full cursor-pointer">
      <div>
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-cover h-48"
        />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300 text-sm leading-relaxed">
            {description}
          </p>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium text-white bg-[#2A0E61] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-4 pt-0 mt-4 flex gap-4">
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 rounded-lg bg-linear-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity text-sm"
          >
            Live Demo
          </a>
        )}
        {code && (
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 rounded-lg border border-[#7042f88b] text-gray-300 font-semibold hover:bg-[#7042f81a] transition-colors text-sm"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
