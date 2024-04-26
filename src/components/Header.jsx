import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-100 px-4 py-2 md:py-4 md:px-10 sticky top-0 z-50">
        <button
        id="hamburger"
          className="md:hidden block peer/toggle"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <span className="font-semibold">&#10005;</span>
          ) : (
            <span className="text-2xl">&#9776;</span>
          )}
        </button>
        <div className={` ${isMenuOpen ? "peer-[#hamburger]/toggle:flex " : "hidden"} pt-2 md:mt-0 hidden md:flex flex-col md:flex-row md:justify-end md:items-center gap-6 `}>
          <NavLink
            to="/case-study2"
            className="nav-item"
            activeClassName="underline"
          >
            Home
          </NavLink>
          <a href="#" className="nav-item">
            Projects
          </a>
          <NavLink
            to="/about-me"
            className="nav-item"
            activeClassName="underline"
          >
            About Me
          </NavLink>
          <a href="#" className="nav-item">
            Linkedin
          </a>
          <a href="#" className="nav-item">
            Resume
          </a>
        </div>
      </nav>
      
    </>
  );
}

export default Header;
