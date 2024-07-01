import React, { useState, useEffect } from "react";
import eyeballs from "../assets/images/landingPage/eyeballs.png";

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
                className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-black rounded-full animate-eyeball md:animate-none"
              ></div>
            </div>
          </div>

        
        </div>

        <div className="relative">
          <div className="eyeright relative flex items-center justify-center md:block w-[80px] h-[80px] md:w-[130px] md:h-[130px]">
            <div className="relative w-full h-full -rotate-45 flex items-center justify-center">
              <div
                style={{
                  transform: `translate(${translate.x}px, ${translate.y}px)`,
                  transition: "transform 0.1s easein",
                }}
                className="w-[55px] h-[55px] md:w-[80px] md:h-[80px] bg-black rounded-full animate-eyeball md:animate-none"
              ></div>
            </div>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default Eye;






// .eyeright{
   
//   border: 4px solid black;
//   border-radius: 85% 10px;
//   transform: rotate(45deg);
//   overflow: hidden;
// }
// .eye{
//   border: 4px solid black;
//   border-radius: 85% 10px;
//   transform: rotate(45deg);
//   overflow: hidden;
//   height: 130px;
//   width: 130px;
//   animation: eyeborder 4s infinite;
// }

// @keyframes eyeborder {
//   0%, 10%, 18%, 100% {
//       border-top: 4px solid black;
//       border-left: 4px solid black;
//   }
//   10%, 15% {
//       border-top: 4px solid white;
//       border-left: 4px solid white;
//   }
// }

// .eyelid {
//   width: 200px;
//   height: 100px;
//   z-index: 1000;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%) rotate(-45deg);
// }

// .eyelid span {
//   display: block;
//   width: 100%;
//   height: 0;
//   background-color: white;
//   border: 4px solid black;
//   border-radius: 0 0 60% 60%;
//   animation: eyelid 4s infinite;
// }

// @keyframes eyelid {
//   0%, 20%, 100% {
//       height: 0;
//   }
//   10% {
//       height: 100%;
//   }
// }

// .eyelashed {
//   position: absolute;
//   width: 50%;
//   height: 100%;
//   left: 0;
//   top: 0;
//   display: flex;
//   justify-content: space-around;
//   align-items: flex-start;
// }

// .eyelashed span {
//   border: 1px solid black;
//   background-color: black;
//   width: 2.4px;
//   height: 4px;
//   transform: rotate(-12deg);
// }
