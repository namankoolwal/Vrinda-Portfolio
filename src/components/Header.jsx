import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(currentScrollPos < prevScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  const menuItems = [
    {
      id: 1,
      name: "Home",
      link: "/case-study2",
    },
    {
      id: 2,
      name: "Projects",
      link: "/projects",
    },
    {
      id: 3,
      name: "About Me",
      link: "/about-me",
    },
    {
      id: 4,
      name: "Linkedin",
      link: "/Linkedin",
    },
    {
      id: 5,
      name: "Resume",
      link: "/Resume",
    },
  ];

  return (
    <>
      <nav
        className={`bg-gray-100 px-4 py-2 md:py-4 md:px-10 sticky top-0 z-50 transition-all duration-500 ${
          visible ? "top-0" : "-top-28"
        }`}
      >
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
        <div
          className={` ${
            isMenuOpen ? "peer-[#hamburger]/toggle:flex " : "hidden"
          } pt-2 md:mt-0 hidden md:flex flex-col md:flex-row md:justify-end md:items-center gap-6 `}
        >
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className="nav-item"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : null,
              })}
            >
              {item.name}
            </NavLink>
          ))}

          {/* <NavLink
            to="/Resume"
            className="nav-item"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : null,
            })}
          >
            Resume
          </NavLink> */}
        </div>
      </nav>
    </>
  );
}

export default Header;
