import React from "react";
import Header from "./Header";
import ProfilePhoto from "../assets/images/profilephoto.png";
import "../css/aboutme.css";
import { FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa6";
import Behands from "../assets/images/Social.png";
import Dribble from "../assets/images/Dribble.png";
import layer1 from "../assets/images/Layer_1.png";
import ScrollToTop from "./ScrollToTop";

const hola = ["H", "☻", "l", "a"];
function Aboutme() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="aboutme-container">
        <div className="row">
          <div className="text-content">
            <h1 className="heading-hola -z-20">
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
            <p className="texts">
              My name is Vrinda. I'm an Interaction Design student{" "}
            </p>
            <p className="texts text-balance">
              My passion for design emerged as the world turned digital. I began
              with <span className="font-semibold">graphic designing</span> and I find myself <span className="font-semibold">crafting experiences</span> that
              strengthens connection and creates a sense of community for
              others. Since then, I have shifted my career focus to UX design.
            </p>
            <p className="texts  text-balance">
              Designing for <span className="font-semibold">inclusivity, equitability, and universal</span>
              accessibility are my core values when it comes to designing
              positive experiences with people in mind.
            </p>
          </div>
        </div>
        <div className="content w-full">
          <div className="hobbies w-full flex flex-col justify-between items-center md:flex-row-reverse">
            <img
              src={ProfilePhoto}
              alt="Profile Photo"
              className="profile-photo"
            />
            <div className="flex-1 w-full">

            <h2 className="designing mb-4">
              Besides designing you can find me ⬇️
            </h2>
            <div>
              <p className="find-me">👋 Writing Notes To Myself</p>
              <p className="find-me">☕ Having Coffee Hours</p>
              <p className="find-me">🍄 Cooking Food lorem250</p>
              <p className="find-me">🌈 Watching Anime</p>
              <p className="find-me">🎨 Drawing in my Sketchbook</p>
              <p className="find-me">
                🌱 Probably Collecting Way Too Many Notebooks
              </p>
              <p className="find-me">✨ Eating Ramen </p>
            </div>
            </div>
          </div>
          <div className="contact">
            <h2 className="know-me mb-4">Wanna know me in person</h2>
            <div className="detail ">
              <p className="find-me">
                <a
                  href="mailto:vrinyk@gmail.com"
                  target="_blank"
                  className="flex items-center gap-3"
                >
                  <FaEnvelope />{" "}
                  <span className="font-[500]">email - vrinyk@gmail.com </span>
                </a>
              </p>
              <p className="find-me">
                <a
                  href="https://www.linkedin.com/in/vrinda-khandelwal-60bab8243/"
                  target="_blank"
                  className="flex items-center gap-3"
                >
                  <FaLinkedinIn />{" "}
                  <span className="font-[500]">
                    {" "}
                    LinkedIn - Vrinda Khandelwal
                  </span>
                </a>
              </p>
              <p className="find-me">
                <a
                  href="tel:91+9468734804"
                  target="_blank"
                  className="flex items-center gap-3"
                >
                  <FaPhone />{" "}
                  <span className="font-[500]">
                    {" "}
                    Mobile No - 91+9468734804{" "}
                  </span>
                </a>
              </p>
            </div>
          </div>
          <div className="note mb-10">
            <h2 className="footer text-[#005323]">Made with lots of love and caffeine</h2>
            <div className="images flex ">
              <a href="https://www.behance.net/vrindakhandel1">
                {" "}
                <img src={Behands} className="behands" />
              </a>
              <a
                href="https://dribbble.com/vrindavk
"
              >
                {" "}
                <img src={Dribble} className="dribble" />
              </a>
              <img src={layer1} className="layer1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
