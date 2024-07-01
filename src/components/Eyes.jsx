import React, { useState, useEffect } from "react";
import eyeballs from "../assets/images/landingPage/eyeballs.png";

import eyeclose from "../assets/images/landingPage/eyeclose.svg";
import eyeopen from "../assets/images/landingPage/eyeopen.svg";


const Eye = () => {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      // Set the translation values based on mouse position
      setTranslate({ x: deltaX * 0.05, y: deltaY * 0.04 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="flex relative md:gap-28 gap-20">
        <div className="relative">
        <img src={eyeopen} alt=""  className="lefteye  absolute -top-3 z-10 w-full h-full scale-[1.6] overflow-hidden "/>
        <img src={eyeclose} className="lefteyeclose absolute top-6 left-2 z-10 w-full h-full scale-[1.5] overflow-hidden "/>

          <div className="eye relative flex items-center justify-center md:block w-[80px] h-[80px] md:w-[130px] md:h-[130px]">
            <div className="eyelid">
              <span className=""></span>
            </div>
            <div className="relative w-full h-full -rotate-45 flex items-center justify-center">
              <div
                style={{
                  transform: `translate(${translate.x}px, ${translate.y}px)`,
                  transition: "transform 0.1s easein",
                }}
                className="eyeball w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-[#fc6d42] rounded-full animate-eyeball md:animate-none"
              >
               
              </div>
            </div>
          </div>
        
        </div>

        <div className="relative">
          <img src={eyeopen} alt=""  className="absolute -top-3 z-10 w-full h-full scale-[1.6] overflow-hidden "/>
          <div className="eyeright relative flex items-center justify-center md:block w-[80px] h-[80px] md:w-[130px] md:h-[130px]">
            <div className="relative w-full h-full -rotate-45 flex items-center justify-center ">
              <div
                style={{
                  transform: `translate(${translate.x}px, ${translate.y}px)`,
                  transition: "transform 0.1s easein",
                }}
                className="w-[55px] h-[55px] md:w-[80px] md:h-[80px] bg-[#fc6d42] rounded-full animate-eyeball md:animate-none"
              ></div>
            </div>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default Eye;





