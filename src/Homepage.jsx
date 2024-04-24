import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Aboutme from "./Aboutme";
import StartButton from './assets/images/StartButton.png';
import Header from "./Header";

function Homepage() {
  let navigate = useNavigate(); // Hook to access the history instance

  // Function to handle click event
  const redirectToAboutMe = () => {
    navigate('/case-study2'); // Redirect to About Me page
  };

  return (
    <div className="bg-[url('./assets/images/Background.png')] bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <img src={StartButton} alt="Telephone" className="h-auto animate-ring mb-0" />
        <NavLink to='/case-study2'
          className="px-[30px] py-7 ml-10 mt-[20px] text-5xl text-gray-600 font-normal bg-transparent rounded-full hover:text-white hover:bg-black transition-colors duration-500 outline outline-1"
         
        >
          Wanna Chat?
        </NavLink>
      </div>
    </div>
  );
}

export default Homepage;
