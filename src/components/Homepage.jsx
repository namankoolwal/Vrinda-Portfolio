import React from "react";
import { useNavigate } from "react-router-dom";
import Aboutme from "./Aboutme";
import StartButton from '../assets/images/StartButton.png';
import Header from "./Header";

function Homepage() {
  let navigate = useNavigate(); // Hook to access the history instance

  // Function to handle click event
  const redirectToAboutMe = () => {
    navigate('/landing-page'); // Redirect to About Me page
  };

  return (
    <div className="bg-[url('./assets/images/Background.png')] bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <img src={StartButton} alt="Telephone" className="h-auto w-1/2 md:w-full animate-ring mb-0" />
        <button
          className="px-[30px] py-4 ml-5 md:ml-10 mt-[25px] text-[22px] md:text-[28px] text-gray-600 font-normal bg-transparent rounded-full hover:text-white hover:bg-black transition-colors duration-500 outline outline-1"
          onClick={redirectToAboutMe}
        >
          Wanna Chat?
        </button>
      </div>
    </div>
  );
}

export default Homepage;
