import React from "react";
import {useNavigate} from "react-router-dom"
import Aboutme from "./Aboutme";
import StartButton from './assets/images/StartButton.png'
import Header from "./Header";
import './css/homepagestyles.css'

function Homepage() {
    let navigate = useNavigate(); // Hook to access the history instance

    // Function to handle click event
    const redirectToAboutMe = () => {
        navigate('/case-study2'); // Redirect to About Me page
    };
    return (
        <div className="homepage">
        <div className="content-container">
      <img src={StartButton} alt="Telephone" className="telephone" />
      <button className="chat-button" onClick={redirectToAboutMe}>Wanna Chat?</button>
      </div>
        </div>
    )
}

export default Homepage;