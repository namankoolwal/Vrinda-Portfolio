import React from "react";
import Header from "./Header";
import ProfilePhoto from "../assets/images/profilephoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/aboutme.css";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Behands from "../assets/images/Social.png"
import Dribble from "../assets/images/Dribble.png"
import layer1 from "../assets/images/Layer_1.png"

const hola = ["H", "☻", "l", "a"];
function Aboutme() {
  return (
    <>
      <Header />
      <div className="aboutme-container">
        <div className="row">
          <div className="text-content">
            <h1 className="heading-hola">
              {hola.map((letter, index) => (
                <span
                  className="drop-letter"
                  style={{ animationDelay: `${index * 0.5}s` }}
                  key={index}
                >
                  {letter}
                </span>
              ))}
            </h1>
            <p className="texts">My name is Vrinda. I'm an Interaction Design student </p>
            <p className="texts">
              My passion for design emerged as the world turned digital. I began
              with graphic designing and I find myself crafting experiences that
              strengthens connection and creates a sense of community for
              others. Since then, I have shifted my career focus to UX design.
            </p>
            <p className="texts">
              Designing for inclusivity, equitability, and universal
              accessibility are my core values when it comes to designing
              positive experiences with people in mind.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="hobbies">
            <img src={ProfilePhoto} alt="Profile Photo" className="profile-photo" />
            <h2 className="designing">Besides designing you can find me ⬇️</h2>
            <div>
              <p className="find-me">👋 Writing Notes To Myself</p>
              <p className="find-me">☕ Having Coffee Hours</p>
              <p className="find-me">🍄 Cooking Food</p>
              <p className="find-me">🌈 Watching Anime</p>
              <p className="find-me">🎨 Drawing in my Sketchbook</p>
              <p className="find-me">🪴 Probably Collecting Way Too Many Notebooks</p>
              <p className="find-me">✨ Eating Ramen </p>
            </div>
          </div>
          <div className="contact">
            <h2 className="know-me">Wanna know me in person</h2>
            <div className="detail">
              <p className="find-me"><FontAwesomeIcon icon={faEnvelope} /> Email - vrinyk@gmail.com</p>
              <p className="find-me">Linkedin - https://www.linkedin.com/in/vrinda-khandelwal-60bab8243/ </p>
              <p className="find-me">Mobile No -</p>
            </div>
          </div>
          <div className="note">
            <h2 className="footer">Made with lots of love and caffeine</h2>
            <div className="images">
              <a href="https://www.behance.net/vrindakhandel1">  <img src={Behands} className="behands" /></a>
              <a href="https://dribbble.com/vrindavk
"> <img src={Dribble} className="dribble" /></a>
              <img src={layer1} className="layer1" />
            </div>
          </div>

        </div>
        {/* <div className="hobbies">
          <h2>Besides designing you can find me ⬇️</h2>
          <ul>
            <p>👋 writing notes to myself</p>
            <p>☕ having coffee hours</p>
            <p>🍄 cooking food</p>
            <p>🌈 watching anime</p>
            <p>🎨 drawing in my sketchbook</p>
            <p>🪴 probably collecting way too many notebooks</p>
            <p>✨ eating ramen </p>
          </ul>
        </div> */}
        {/* <div className="contact">
          <h2>Wanna know me in person</h2>
          <ul>
            <p>email</p>
            <p>Linkedin</p>
            <p>9999999999</p>
          </ul>
        </div>
        <div className="note">
          <h2>Made with lots of love and caffeine</h2>
          <div className="images"></div>
        </div> */}
      </div>
    </>
  );
}

export default Aboutme;
