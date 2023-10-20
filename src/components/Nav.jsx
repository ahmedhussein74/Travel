import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [view, setView] = useState(false);
  const [icon, setIcon] = useState("fa-solid fa-bars");

  const changeHeight = () => {
    if (window.screen.width < 1024) {
      if (view) {
        setView(false);
        setIcon("fa-solid fa-bars");
        document.querySelector("nav").style.height = "60px";
      } else {
        setView(true);
        setIcon("fa-solid fa-xmark");
        document.querySelector("nav").style.height = "420px";
      }
    }
  };
  return (
    <nav className="w-full lg:w-[90%] h-[60px] mx-auto flex overflow-hidden flex-wrap lg:items-center lg:justify-between duration-1000 z-10 bg-white">
      <header className="w-full lg:w-fit h-[60px] px-3 lg:px-0 text-[#1B1F2D] flex justify-between items-center">
        <p className="text-[18px] font-bold">
          <i className="fa-solid fa-plane text-[#2F80ED] rotate-[-45deg]"></i>{" "}
          my Dream Place
        </p>
        <i
          onClick={changeHeight}
          className={`${icon} block lg:hidden text-[25px]`}
        ></i>
      </header>
      <aside className="w-full lg:w-fit text-[#333333] flex flex-wrap gap-0 lg:gap-[48px]">
        <NavLink
          to="/"
          onClick={changeHeight}
          className="h-[60px] lg:h-fit w-full lg:w-fit px-3 lg:px-0"
        >
          Home
        </NavLink>
        <NavLink
          to="/discover"
          onClick={changeHeight}
          className="h-[60px] lg:h-fit w-full lg:w-fit px-3 lg:px-0"
        >
          Discover
        </NavLink>
        <NavLink
          to="/actvities"
          onClick={changeHeight}
          className="h-[60px] lg:h-fit w-full lg:w-fit px-3 lg:px-0"
        >
          Actvities
        </NavLink>
        <NavLink
          to="/about"
          onClick={changeHeight}
          className="h-[60px] lg:h-fit w-full lg:w-fit px-3 lg:px-0"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          onClick={changeHeight}
          className="h-[60px] lg:h-fit w-full lg:w-fit px-3 lg:px-0"
        >
          Contact
        </NavLink>
      </aside>
      <div className="h-[60px] flex items-center gap-[20px] pl-3 lg:pl-0">
        <button className="w-[90px] h-[40px] border border-[#2F80ED] text-[#2F80ED] rounded">
          Register
        </button>
        <button className="w-[90px] h-[40px] bg-[#2F80ED] text-white rounded">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Nav;
