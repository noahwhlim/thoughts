"use client";
import React from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav className="px-10 py-3 flex flex-row items-center justify-between font-semibold text-4xl">
      {/* <div className=''>Thoughts</div> */}
      Thoughts
      {currentTheme === "dark" ? (
        <button onClick={() => setTheme("light")} className="p-2 rounded-xl">
          <RiSunLine size={25} color="white" />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")} className="p-2 rounded-xl">
          <RiMoonFill size={25} />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
