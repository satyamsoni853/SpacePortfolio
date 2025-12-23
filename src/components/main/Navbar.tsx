"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
// Using simple text or SVG for icons if heroicons import is risky, but existing code uses it.
// Assuming @heroicons/react is available as seen in HeroContent.tsx
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "../sub/ThemeToggle";
import { Cedarville_Cursive } from "next/font/google";

const font = Cedarville_Cursive({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span
            className={`${font.className} font-bold ml-[10px] hidden md:block text-gray-950 dark:text-gray-300 text-3xl`}
          >
            Satyam Soni
          </span>
          <span
            className={`${font.className} font-bold ml-[10px] block md:hidden text-gray-950 dark:text-gray-300 text-2xl`}
          >
            SS
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-white/80 dark:bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-black dark:text-gray-200">
            <a
              href="#about-me"
              className="cursor-pointer hover:text-[#7042f8] dark:hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="cursor-pointer hover:text-[#7042f8] dark:hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer hover:text-[#7042f8] dark:hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="cursor-pointer hover:text-[#7042f8] dark:hover:text-white transition-colors"
            >
              Experience
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex flex-row gap-5">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black dark:text-gray-300 hover:text-[#7042f8] dark:hover:text-white"
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Theme Toggle & Socials - Desktop */}
        <div className="hidden md:flex flex-row gap-5 items-center">
          <ThemeToggle />
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="cursor-pointer hover:opacity-80"
            />
          ))}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-[65px] left-0 w-full bg-[#030014] border-b border-[#7042f861] p-4 flex flex-col items-center gap-4 text-gray-200 shadow-xl">
          <a
            href="#about-me"
            onClick={() => setIsOpen(false)}
            className="text-lg py-2 hover:text-white"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="text-lg py-2 hover:text-white"
          >
            Skills
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="text-lg py-2 hover:text-white"
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="text-lg py-2 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="text-lg py-2 hover:text-white"
          >
            Experience
          </a>
          <a
            href="#education"
            onClick={() => setIsOpen(false)}
            className="text-lg py-2 hover:text-white"
          >
            Education
          </a>

          <div className="flex flex-row gap-5 mt-4">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
                className="cursor-pointer hover:opacity-80"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
