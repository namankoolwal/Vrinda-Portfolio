import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import VrindaResume from "../../public/Vrinda 2024 Resume.pdf"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   
    navRef.current.classList.toggle("bg-gray-100");
    navRef.current.classList.toggle("translate-x-full");
  };

  const handleClick = () => {
    window.scrollTo({
      top: 1200, // Specify the y-coordinate value you want to scroll to
      behavior: "smooth",
    });
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

    if (visible) {
      navRef.current.classList.add("md:top-0");
      navRef.current.classList.remove("md:-top-28");
    } else {
      navRef.current.classList.remove("md:top-0");
      navRef.current.classList.add("md:-top-28");
    }
  };

  const menuItems = [
    {
      id: 1,
      name: "About Me",
      link: "/about-me",
    },
  ];

  return (
    <>
    
      <button
        id="hamburger"
        className="md:hidden sticky top-0 peer/toggle bg-gray-100 p-2 w-full px-4 text-left z-50 flex items-center justify-between"
        onClick={toggleMenu}
      >
        <span className="font-Bree text-xl text-[#005323]">Vrinda</span>


        {isMenuOpen ? (
          <span className="text-2xl font-bold">&#10005;</span>
        ) : (
          <span className="text-2xl font-bold ">&#9776;</span>
        )}
      </button>
      <nav
        className={` md:bg-gray-100 px-4 right-0 py-2 md:py-4 md:px-10 w-1/2 h-full md:w-full fixed md:sticky z-50 transition-all duration-500 translate-x-full md:translate-x-0`}
        ref={navRef}
      >
      <div className="flex items-center justify-between">
        <span className="hidden md:block font-Bree text-xl text-[#005323]">Vrinda</span>
        <div
          className={` ${
            isMenuOpen ? "flex " : "hidden"
          } pt-10 md:pt-2 pl-10 md:mt-0 flex md:flex flex-col md:flex-row md:justify-end md:items-center gap-12 md:gap-6 `}
        >
            <NavLink
            to="/"
            className="nav-item text-lg"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : null,
            })}
            
          >
            Home
          </NavLink>
          <NavLink
            to="/"
            className="nav-item text-lg"
            
            onClick={handleClick}
          >
            Projects
          </NavLink>
          <NavLink
            to="/about-me"
            className="nav-item text-lg"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : null,
            })}
          >
            About Me
          </NavLink>

          <a
            href={"./Vrinda 2024 Resume.pdf"}
            target="_blank"
            className="nav-item text-lg"
          >
            Resume
          </a>

          <NavLink
            to="https://www.linkedin.com/in/vrinda-khandelwal-60bab8243/"
            target="_blank"
            className="nav-item text-lg"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : null,
            })}
          >
            LinkedIn
          </NavLink>
        </div>
      </div>

      </nav>
    </>
  );
}
// https://www.linkedin.com/in/vrinda-khandelwal-60bab8243/
export default Header;
