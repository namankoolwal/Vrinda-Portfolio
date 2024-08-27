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





```
 <div className="container mx-auto mt-[50px] bg-[#005323] rounded-3xl p-10 pt-0">
      <div className="pinterest flex items-center justify-around gap-10 flex-row-reverse ">
          <div
            className=" image flex justify-end relative "       
          >
            <img
              src={dogImg}
              alt=""
              className="w-[80%] pt-10 pr-20 "
            />
            <img
              src={tooltip}
              alt=""
              className="w-[45%] absolute top-6 right-14 z-10"
            />
            <div className="w-[40%] absolute flex flex-col gap-3 text-xs top-7 right-14 z-10 text-[#EB7E23] "> 
            <span>I am happy you come all  the way down here. Let’s grab a virtual coffee together!</span>
            <div className="flex gap-3">

                <button className="bg-gray-800 py-[2px] text-xs px-5 text-white rounded-md hover:bg-white hover:text-[#EB7E23]">Sure</button>
                <button className="bg-gray-800 py-[2px] text-xs px-5 text-white rounded-md hover:bg-white hover:text-[#EB7E23]">No, thanks</button>
            </div>
            </div>
           
          </div>
          <div className="">
            <div className="details flex flex-col gap-7 px-5 md:px-0 ">
            

                <div className=" text-4xl md:text-6xl text-white font-Bree">
                Let's get in touch!
                </div>
                <div className=" text-[#FFFFFF] pt-1 w-3/4">
                I'd love to hear from you and explore collaboration, answer your questions, or simply chat.
                </div>
              <div className=" flex gap-4">
                {" "}
                <a href="https://www.behance.net/vrindakhandel1" target="_blank"><img src={behanceLogo} alt="behanceLogo" className="w-7" /></a>
                <a href="https://www.linkedin.com/in/vrinda-khandelwal-60bab8243/" target="_blank"><img src={lindinLogo} alt="linkdin" className="w-7" /></a>
                <a  href="mailto:vrinyk@gmail.com"
                  target="_blank"
                 className="text-white border-2 rounded-full px-3 border-white hover:bg-[#EB7E23]">vrinyk@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
```










<div
        className="container mx-auto md:my-[50px] cursor-pointer "
      >
        <div className="talentBuzz flex items-center m-0 flex-col md:flex-row">
          <div
            className=" flex-1 image p-5 md:p-12 relative bg-green-400  w-fit  h-fit  pb-6 md:pr-0"

          >
            <div className="   bg-red-400 overflow-hidden rounded-2xl relative w-full h-[30vh] md:h-[50vh] lg:w-[41.7vw] lg:h-[62vh] ">
              <div className="  relative overflow-hidden bg-green-400">
                <img src={TlandingPage} alt="" className="w-full h-full bg-green-400" />
              </div>


            </div>
            <img src={OuterFrame} alt="" className="absolute top-5  md:top-10 md:left-12" />

          </div>
          <div className="flex-1">
            <div className="details flex flex-col px-5 md:px-0 md:w-[60%] mx-auto md:mx-0">
              <div className="w-2/5 ">
                <img
                  src={eventifyLogo}
                  alt="eventifyLogo"
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