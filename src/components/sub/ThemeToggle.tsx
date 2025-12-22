"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full border border-[#7042f861] bg-[#0300145e] dark:bg-[#0300145e] bg-gray-200 hover:bg-gray-300 dark:hover:bg-[#1a1a2e] transition-all duration-300 group"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6 text-yellow-400 group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <MoonIcon className="h-6 w-6 text-[#7042f8] group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
