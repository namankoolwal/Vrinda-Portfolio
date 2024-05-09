import React, { useState, useEffect } from "react";
import eyeballs from "../assets/images/landingPage/eyeballs.png";

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

 

  const eyeBallStyle = {
    position: "absolute",
   
    transform: `translate(${eyePosition.x / 20}px, ${eyePosition.y / 20}px) rotate(${45}deg) `, 
  };
 

// more css is imported from App.css  

  return (
    <>
      <div className="flex md:gap-28 gap-20 ">
        <div  className=" eye flex items-center justify-center md:block w-[80px] h-[80px] md:w-[130px] md:h-[130px]">
        <div className="eyelid">
                <span></span>
            </div>
          <div  style={eyeBallStyle} className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] ">
            <img src={eyeballs} alt="" />
          </div>
        </div>

        <div  className="eye flex items-center justify-center md:block w-[80px] h-[80px] md:w-[130px] md:h-[130px] ">
        <div className="eyelid ">
                <span></span>
            </div>
        <div  style={eyeBallStyle} className="w-[60px] h-[60px]  md:w-[80px] md:h-[80px]">
            <img src={eyeballs} alt="" className=""/>
          </div>
        </div>
      </div>



    </>
  );
};

export default Eye;