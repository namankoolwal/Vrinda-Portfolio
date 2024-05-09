# Vrinda-portfolio
This is a portfolio made for vrinda using react.

# eye


## Eye.jsx
``` javascript

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
   
    transform: `translate(${eyePosition.x / 20}px, ${eyePosition.y / 20}px) rotate(${-45}deg) `, 
  };
 

// more css is imported from App.css  

  return (
    <>
      <div className="flex md:gap-28 gap-20 ">
        <div  className=" eye flex items-center justify-center md:block w-[80px] h-[50px] md:w-[150px] md:h-[80px]">
        <div className="eyelid">
                <span></span>
            </div>
          <div  style={eyeBallStyle} className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]  animate-eyeball md:animate-none">
            <img src={eyeballs} alt="" />
          </div>
        </div>

        <div  className="eye flex items-center justify-center md:block w-[80px] h-[50px] md:w-[150px] md:h-[80px] ">
        <div className="eyelid ">
                <span></span>
            </div>
        <div  style={eyeBallStyle} className="w-[60px] h-[60px]  md:w-[80px] md:h-[80px]  animate-eyeball md:animate-none">
            <img src={eyeballs} alt="" className=""/>
          </div>
        </div>
      </div>



    </>
  );
};

export default Eye;

```

## App.css

``` css 
/* *{
    cursor: url(./assets/Imp/curserIcon.cur) , pointer;
} */




.eye{
   position: relative;
    border: 4px solid #FC6D42;
    display: inline-block;
    /* border-radius: 80% 10px; */
    border-radius: 70% ;
    /* transform: rotate(45deg); */
    /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16) , 0 3px 6px rgba(0, 0, 0, 0.23); */
    overflow: hidden;
    animation: eyeborder 4s infinite;
}

@keyframes eyeborder{
    0%{
        opacity: 1;
    }
    10%{
        opacity: 0;
     }
     20%{
        opacity: 1;
     }
     100%{
        opacity: 1;
 }
 }

.eyelid{
    width: 200px;
    height: 100px;
    z-index: 1000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%) ;
}
.eyelid span{
    display: block;
    width: 100%;
    height: 20%;
    background-color: white;
    border-radius: 0 0 60% 60%;
    animation: eyelid 4s infinite;
}

@keyframes eyelid{
   0%{
       height: 0%;
   }
   10%{
    height: 100%;
    }
    20%{
        height: 0%;
    }
    100%{
        height: 0%;
}
}


```