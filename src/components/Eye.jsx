import React, { useState, useEffect } from "react";
import eyeballs from "../assets/images/landingPage/eyeballs.png";
import eyeOuter from "../assets/images/landingPage/eyeOuter.png";

const Eye = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setEyePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const eyeStyle = {
    // position: "relative",
    // transform: "rotate(45deg)",
    // borderRadius: "80% 0%",
    // border: "3px solid #FC6D42",
    // overflow: "hidden",
  };

  const eyeBallStyle = {
    position: "absolute",
   
    transform: `translate(${eyePosition.x / 20}px, ${eyePosition.y / 20}px) rotate(${45}deg) `, // Adjust translation and counteract rotation

  };


  return (
    <>
      <div className="flex md:gap-20 gap-20 ">
        <div  className=" eye flex items-center justify-center md:block w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
        <div className="eyelid">
                <span></span>
            </div>
          <div  style={eyeBallStyle} className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] ">
            <img src={eyeballs} alt="" />
          </div>
        </div>

        <div  className="eye flex items-center justify-center md:block w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
        <div className="eyelid ">
                <span></span>
            </div>
        <div  style={eyeBallStyle} className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]">
            <img src={eyeballs} alt="" className=""/>
          </div>
        </div>
      </div>



    </>
  );
};

export default Eye;