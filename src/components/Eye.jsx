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
    position: "relative",
    width: "120px",
    height: "120px",
    transform: "rotate(45deg)",
    borderRadius: "80% 0%",
    border: "3px solid #FC6D42",
    overflow: "hidden",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  };

  const eyeBallStyle = {
    position: "absolute",
    width: "80px",
    height: "80px",
    transform: ` translate(${eyePosition.x / 20}px, ${eyePosition.y / 20}px)`, // Adjust translation as needed
  };

  return (
    <>
      <div className="flex gap-28">
        <div style={eyeStyle} className="">
          <div className="eye-ball" style={eyeBallStyle}>
            <img src={eyeballs} alt="" />
          </div>
        </div>

        <div style={eyeStyle} className="">
          <div className="eye-ball" style={eyeBallStyle}>
            <img src={eyeballs} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Eye;
