import React,{useState} from "react";
import './css/header.css'


function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return(
        <>
        <nav className="navigation-bar">
        <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`nav-items ${isMenuOpen ? 'show' : ''}`}>
            <a href ="#" className="nav-item">Projects</a>
            <a href ="#" className="nav-item">About Me</a>
            <a href ="#" className="nav-item">Linkedin</a>
            <a href ="#" className="nav-item">Resume</a>
            </div>
        </nav>
        </>
    )
}

export default Header;