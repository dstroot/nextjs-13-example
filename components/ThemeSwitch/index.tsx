"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// icons
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";

// library
import { cn } from "../../lib/cn";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="flex justify-between mx-auto bg-white border-2 border-gray-500 rounded-full dark:bg-gray-300 dark:border-gray-300 w-28">
        <button
          id="light"
          className={cn(
            "hover:transition-all w-8 h-8 p-2 rounded-full hover:bg-gray-500 hover:text-white",
            theme === "light" ? "bg-gray-500 text-white" : "text-black"
          )}
          onClick={(e) => setTheme("light")}
        >
          <FiSun />
        </button>
        <button
          id="system"
          className={cn(
            "hover:transition-all w-8 h-8 p-2 rounded-full hover:bg-gray-500 hover:text-white",
            theme === "system"
              ? "text-white bg-gray-500 dark:text-white"
              : "text-black"
          )}
          aria-label="Toggle Light/Dark Mode - System Setting"
          onClick={(e) => setTheme("system")}
        >
          <FiSettings />
        </button>
        <button
          id="dark"
          className={cn(
            "hover:transition-all w-8 h-8 p-2 rounded-full hover:bg-gray-500 dark:hover:text-white hover:text-white",
            theme === "dark" ? "bg-gray-500 text-white" : "dark:text-black"
          )}
          onClick={(e) => setTheme("dark")}
        >
          <FiMoon />
        </button>
      </div>
    </>
  );
};
