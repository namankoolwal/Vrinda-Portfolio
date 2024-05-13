import React, { useRef, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "./Header";
import Hi from "../assets/images/landingPage/Hi.png";
import imVrinda from "../assets/images/landingPage/imVrinda.png";
import Layer1 from "../assets/images/landingPage/Layer1.svg";
import fitverxImg from "../assets/images/landingPage/fitverxImg.png";
import Pinterest from "../assets/images/landingPage/Pinterest.png";
import pinterestLogo from "../assets/images/landingPage/pinterestLogo.png";
import Eventify from "../assets/images/landingPage/Eventify.png";
import eventifyLogo from "../assets/images/landingPage/eventifyLogo.png";
import Behands from "../assets/images/Social.png";
import Dribble from "../assets/images/Dribble.png";
import layer1 from "../assets/images/Layer_1.png";
import vk from "../assets/images/landingPage/vk.gif";
import eventifyBg from "../assets/images/landingPage/eventifyBg.png";
import fitverxBg from "../assets/images/landingPage/fitverxBg.png";
import pinterestBg from "../assets/images/landingPage/pinterestBg.png";
import dogImg from "../assets/images/landingPage/dogImg.png";
import behanceLogo from "../assets/images/landingPage/behanceLogo.png";
import lindinLogo from "../assets/images/landingPage/lindinLogo.png";
import tooltip from "../assets/images/landingPage/tooltip.png";
import Eye from "./Eye";
import TypewriterText from "./TypewriterText";
import Typed from 'typed.js';

const LandingPage = ({ scrollToRef }) => {
  
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const navigate = useNavigate();
  const infoRef = useRef(null)
  const [sectionReached, setSectionReached] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !sectionReached) {
          console.log("Hello");
          setSectionReached(true);
          new Typed(infoRef.current, {
            strings: ['I am happy you come all  the way down here. Let’s grab a virtual coffee together!'],
            typeSpeed: 40,
            backDelay: 2000,
            backSpeed: 0,
            fadeOut: true,
            showCursor: false,
            
          });
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust as needed
      }
    
    );

    if (infoRef.current) {
      observer.observe(infoRef.current);
    }

    return () => {
      if (infoRef.current) {
        observer.unobserve(infoRef.current);
      }
    };
  }, []);



  const pageNavigate = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0, // Specify the y-coordinate value you want to scroll to
      behavior: "smooth",
    });
  };


  const handleClick = () => {
    window.scrollTo({
      top: 650, // Specify the y-coordinate value you want to scroll to
      behavior: "smooth",
    });
  };

  const onMouseOver = async (e) => {
    if (e.current.classList.contains("animate-phone")) {
      e.current.classList.remove("animate-phone");
      e.current.classList.add("animate-phoneTwo");
    } else {
      e.current.classList.add("animate-phone");
      e.current.classList.remove("animate-phoneTwo");
    }
  };

  return (
    <div>

      <div className=" mx-auto my-[150px] md:my-[100px] py-10 flex flex-col items-center gap-10 md:gap-6 justify-center" onClick={handleClick}>
        <Eye />
        <div className="animate-text">
          <p className="text-[#999999] text-lg">BLINK AND YOU’ll MISS IT</p>
        </div>
        <div className="md:w-[60%] mx-auto text-center animate-text">
          <p className="text-4xl md:text-6xl font-Bree md:px-20">Crafting great <br /> digital experiences</p>
        </div>
      </div>
      {/* **************************************************************************************** */}
      <div className=" mx-auto md:my-[50px] py-10 px-4 md:px-24 ">
        <div className="flex items-center flex-col-reverse gap-10 md:gap-10 md:flex-row justify-center">
          <div className="flex flex-col gap-10 md:gap-3 ">
            <p className="flex items-center justify-center md:justify-start gap-3 mx-auto w-[80%] md:w-full">
              <img src={Hi} alt="Hi" className="w-[20%] md:w-auto" />
              <img
                src={imVrinda}
                alt="imVrinda"
                className="w-[60%] md:w-auto"
              />
              <img src={Layer1} alt="Layer1" className="w-[20%] md:w-auto" />
            </p>
            <p className="text-2xl">
              Aspiring <span className="font-semibold">UI/UX wizard</span> who enjoys<span className="font-semibold"> seamlessly</span> bridging
              the gap between people and digital space by day, and a lofi loving
              artist by night.
            </p>
          </div>
          <div className=" w-[70%] md:w-auto">
            <img src={vk} alt="illustraterGif" />
          </div>
        </div>
      </div>
      {/* ********************************************************************* */}
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
        className="mx-auto mt-24 md:mt-0 md:pt-10 px-2 md:px-24"
        ref={scrollToRef}
      >
        <p className="text-2xl md:text-3xl font-Bree text-[#005323] pb-6">
          Scroll to have some UX Tea
        </p>
        <hr className="font-bold text-black h-[2px] bg-black" />
      </div>
      {/* ********************************************************************* */}
      <div
        className="container mx-auto md:my-[50px] cursor-pointer "
        onClick={() => {
          pageNavigate("/case-study2");
        }}
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <div className="eventi flex items-center m-0 flex-col md:flex-row">
          <div
            className="hoverEvent image flex-1 relative"
            ref={refOne}
            onMouseOver={() => onMouseOver(refOne)}
          >
            <img src={Eventify} alt="" className="w-auto z-20 peer/eventify" />
            <img
              src={eventifyBg}
              alt=""
              className="w-auto absolute opacity-0 top-0 -z-10 transition ease-in-out duration-700 peer-hover/eventify:opacity-100"
            />
            {/* hover:-translate-y-5 transition-all duration-700 */}
          </div>
          <div className="flex-1">
            <div className="details flex flex-col px-5 md:px-0 md:w-[60%] mx-auto md:mx-0">
              <div className="w-2/5 ">
                <img
                  src={eventifyLogo}
                  alt="pinterestLogo"
                  className="w-auto "
                />
              </div>
              <div>
                <div className=" text-[22px] text-transparent bg-clip-text bg-gradient-to-b from-[#4252DD] from-0% via-[#0ABCA7] via-40% to-[#3E5AD9] to-90% font-Bree">
                  Finding & Hosting Events in your locality
                </div>
                <div className=" text-[#717171] pt-1">
                  Your go-to app for seamless event discovery and community
                  connection in your nearby area.
                </div>
              </div>
              <div className="text-[#696062] text-sm font-semibold">
                {" "}
                MOBILE DESIGN // UX DESIGN // FINDING EVENTS
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ********************************************************************* */}
      <div
        className="container mx-auto my-[50px] cursor-pointer"
        onClick={() => {
          pageNavigate("/case-study1");
        }}
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <div className="fitverx flex items-center flex-col md:flex-row">
          <div
            className="hoverEvent image flex-1 relative"
            ref={refTwo}
            onMouseOver={() => onMouseOver(refTwo)}
          >
            <img src={fitverxImg} alt="" className="w-full z-20 peer/fitverx" />
            <img
              src={fitverxBg}
              alt=""
              className="w-auto absolute opacity-0 top-0 -z-10 transition ease-in-out duration-700 peer-hover/fitverx:opacity-100"
            />
          </div>
          <div className="flex-1">
            <div className="details flex flex-col md:gap-4 px-5 md:px-0 md:w-[60%] mx-auto md:mx-0">
              <div className=" text-[44px] text-transparent bg-clip-text bg-gradient-to-b from-[#000000] to-[#666666] font-Bree ">
                Fitverx
              </div>
              <div>
                <div className=" text-[22px] text-transparent bg-clip-text bg-gradient-to-b from-[#4252DD] from-0% via-[#0ABCA7] via-40% to-[#3E5AD9] to-90% font-Bree">
                  Get a Virtual trial before you buy
                </div>
                <div className=" text-[#717171] pt-1">
                  Our innovative virtual try-on technology, select the items you
                  love, and with a click, see yourself wearing them in
                  real-time.
                </div>
              </div>
              <div className="text-[#696062] text-sm font-semibold">
                {" "}
                UI DESIGN // UX DESIGN // VIRTUAL FASHION
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ******************************************************************** */}
      <div
        className="container mx-auto my-[50px] cursor-pointer"
        onClick={() =>
          window.open(
            "https://www.behance.net/gallery/185011191/Pinterest-UX-Case-Study",
            "_blank"
          )
        }
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <div className="pinterest flex items-center flex-col md:flex-row ">
          <div
            className="hoverEvent image flex-1 relative"
            ref={refThree}
            onMouseOver={() => onMouseOver(refThree)}
          >
            <img
              src={Pinterest}
              alt=""
              className="w-full z-20 peer/pinterest"
            />
            <img
              src={pinterestBg}
              alt=""
              className="w-auto absolute opacity-0 top-0 -z-10 transition ease-in-out duration-700 peer-hover/pinterest:opacity-100"
            />
          </div>
          <div className="flex-1">
            <div className="details flex flex-col md:gap-4 px-5 md:px-0 md:w-[60%] mx-auto md:mx-0">
              <div className="w-2/4 ">
                <img
                  src={pinterestLogo}
                  alt="pinterestLogo"
                  className="w-auto "
                />
              </div>

              <div className=" mt-0">
                <div className=" text-[22px] text-transparent pt-3 bg-clip-text bg-gradient-to-b from-[#BD081C] to-[#000000] font-Bree">
                  Redesigning Pinterest
                </div>
                <div className=" text-[#717171] pt-1">
                  Delve into the intricacies of Pinterest's seeking
                  opportunities for improvement and explore potential
                  enhancements to the user experience."
                </div>
              </div>
              <div className="text-[#696062] text-sm font-semibold">
                {" "}
                MOBILE DESIGN // UX RESEARCH // EXPERIENCE DESIGN{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ******************************************************************************************* */}
      {/* <div
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
        className=" mx-auto my-[120px] px-4 md:px-24"
      >
        <div className="text-2xl md:text-3xl font-Bree  text-[#005323]">
          Made with lots of love and caffeine.
        </div>
        <div className="pt-6 flex ">
          <a href="https://www.behance.net/vrindakhandel1" target="_blank">
            {" "}
            <img src={Behands} alt="behands" className="behands" />
          </a>
          <a href="https://dribbble.com/vrindavk" target="_blank">
            {" "}
            <img src={Dribble} alt="Dribble" className="dribble" />
          </a>
          <img src={layer1} alt="layer1" className="layer1" />
        </div>
      </div> */}
      {/* ******************************************************************* */}
      <div className="container mx-auto mt-[70px] px-2 md:px-12 ">
      <div className="flex mx-auto mt-[50px] bg-[#005323] rounded-3xl p-5 md:p-10 md:pt-0 items-center justify-center md:justify-around  gap-10 flex-col md:flex-row-reverse ">
          <div
            className=" image flex justify-end relative "       
          >
            <img
              src={dogImg}
              alt=""
              className=" md:w-[80%] pt-20 pr-20 "
            />
            <img
              src={tooltip}
              alt=""
              className="w-[80%] md:w-[60%] absolute top-5 right-0 md:z-10"
            />
            <div className="w-[65%] md:w-[50%] absolute flex flex-col gap-2 md:gap-4 text-sm top-8 right-3 md:z-10 text-[#EB7E23] overflow-hidden"> 
            <span ref={infoRef} className="h-14"></span>
            <div className="flex gap-3 ">

                <button className="bg-gray-800 py-[2px] px-5 text-white rounded-md focus:bg-white focus:text-[#EB7E23]">Sure</button>
                <button className="bg-gray-800 py-[2px] px-5 text-white rounded-md focus:bg-white focus:text-[#EB7E23]">No, thanks</button>
            </div>
            </div>
           
          </div>
          <div className="flex items-center justify-center ">
            <div className="details flex flex-col gap-7  md:px-0 ">
            

                <div className=" text-4xl md:text-6xl text-white font-Bree ">
                Let's get in touch!
                </div>
                <div className=" text-[#FFFFFF] pt-1 md:w-3/4">
                I'd love to hear from you and explore collaboration, answer your questions, or simply chat.
                </div>
              <div className=" flex gap-4">
                {" "}
                <a href="https://www.behance.net/vrindakhandel1" target="_blank"><img src={behanceLogo} alt="behanceLogo" className="w-7" /></a>
                <a href="https://www.linkedin.com/in/vrinda-khandelwal-60bab8243/" target="_blank"><img src={lindinLogo} alt="linkdin" className="w-7" /></a>
                <a  href="mailto:vrinyk@gmail.com"
                  target="_blank"
                 className="text-white border-2 rounded-full px-2 border-white hover:bg-[#EB7E23]">vrinyk@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ********************** */}
      <div className="container mx-auto mb-[30px] pt-2 px-5 text-center flex items-end justify-end" >
        <div className="w-[200px] md:w-[250px] text-left">

        <TypewriterText/>
        </div>

      </div>
      {/* ************************************* */}
    </div>
  );
};

export default LandingPage;
