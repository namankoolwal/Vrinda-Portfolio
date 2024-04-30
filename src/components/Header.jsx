import React, { useState, useEffect ,useRef } from "react";
import { NavLink } from "react-router-dom";

function Header({setScrollTO}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navRef = useRef(null);

  const toggleMenu = () => { 
    setIsMenuOpen(!isMenuOpen);
    console.log("hii")
    if(navRef.current.classList.contains("bg-gray-100")){
      console.log(navRef.current.classList.contains("bg-gray-100"))
      navRef.current.classList.remove("bg-gray-100")
    }
    else{
      navRef.current.classList.add("bg-gray-100")

    }
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

    if(visible){
      navRef.current.classList.add("md:top-0")
      navRef.current.classList.remove("md:-top-28")
    }
    else{
      navRef.current.classList.remove("md:top-0")
      navRef.current.classList.add("md:-top-28")
    }
  };

  const menuItems = [
    {
      id: 1,
      name: "About Me",
      link: "/about-me",
    },
    {
      id: 2,
      name: "Resume",
      link: "/resume",
    },
  ];

  return (
    <>
       <button
          id="hamburger"
          className="md:hidden sticky top-0 peer/toggle bg-gray-100 p-2 w-full px-4 text-left z-10"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <span className="text-2xl font-bold">&#10005;</span>
          ) : (
            <span className="text-2xl font-bold ">&#9776;</span>
          )}
        </button>
      <nav
        className={` md:bg-gray-100 px-4 py-2 md:py-4 md:px-10 w-1/2 h-full md:w-full fixed md:sticky z-50 transition-all duration-500 `}
        ref={navRef}
      >
     
        <div
          className={` ${
            isMenuOpen ? "flex " : "hidden"
          } pt-10 md:pt-2 pl-10 md:mt-0 flex md:flex flex-col md:flex-row md:justify-end md:items-center gap-12 md:gap-6 `}
        >

<NavLink
            to="/landingPage"
            className="nav-item text-lg"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : null,

            })}
            onClick={(e)=> {setScrollTO(true)}}
          >
          Projects
          </NavLink>
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className="nav-item text-lg"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : null,
              })}
            >
              {item.name}
            </NavLink>
          ))}

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
      </nav>
    </>
  );
}
// https://www.linkedin.com/in/vrinda-khandelwal-60bab8243/
export default Header;
