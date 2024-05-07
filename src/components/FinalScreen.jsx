import React, { useEffect } from "react";
import ellipse from "../assets/images/Ellipse.png";
import eventDiscovery from "../assets/images/eventDiscovery.png";
import eventCreation from "../assets/images/eventCreation.png";
import userProfile from "../assets/images/userProfile.png";
import joinCommunity from "../assets/images/joinCommunity.png";
import finalStarting from "../assets/images/finalStarting.png";
import getStarted from "../assets/images/fitverx/getStarted.png";
import UploadingImage from "../assets/images/fitverx/UploadingImage.png";
import virtualTryOn from "../assets/images/fitverx/virtualTryOn.png";
import addToCart from "../assets/images/fitverx/addToCart.png";
import { useState } from "react";

const FinalScreen = ({caseStudy}) => {
  const [displayImg, setDisplayImg] = useState();
  const [activeButton, setActiveButton] = useState(0);
  const [heading, setHeading] = useState()

  const handleButtonClick = (item) => {
    setDisplayImg(item.img);
    setActiveButton(item.id);
  };

  useEffect(() => {
    
  
   if(caseStudy === 'eventify'){
    setDisplayImg(finalStarting);
    setHeading('Final Screens')
   }
   else{
    setDisplayImg(getStarted);
    setHeading('A breakdown of the design')
   }
  }, [])
  
  
  let buttonDetails =[]
  if(caseStudy === 'eventify'){

   buttonDetails = [
    {
      id: 1,
      main: "Event Discovery",
      sub: "Event cards with thumbnails, titles, dates, and locations.",
      img: eventDiscovery,
    },
    {
      id: 2,
      main: "Event Creation",
      sub: "Create and manage your own events",
      img: eventCreation,
    },
    {
      id: 3,
      main: "User Profile",
      sub: "personalized hub for users, offers a snapshot of their event activity",
      img: userProfile,
    },
    {
      id: 4,
      main: "Join Community",
      sub: "connect with others and share event experiences within a community.",
      img: joinCommunity,
    },
  ];
}
else{
  buttonDetails = [
    {
      id: 1,
      main: "Get Strated",
      sub: "Swipe to try your virtual fit",
      img: getStarted,
    },
    {
      id: 2,
      main: "Upload Image",
      sub: "upload image from your gallery to try on clothes",
      img: UploadingImage,
    },
    {
      id: 3,
      main: "Virtual Try-On",
      sub: "Scan Your Image to Explore Clothing Options",
      img: virtualTryOn,
    },
    {
      id: 4,
      main: "Add to Cart",
      sub: "See your virtual fit and add to your cart",
      img: addToCart,
    },
  ];
}
  return (
    <>
      <div className="bg-[#211c1c] mb-16">
        <span className="flex items-center gap-2 px-6 py-4 md:py-8">
          <img loading="lazy" src={ellipse}></img>{" "}
          <span className="font-[500] text-white text-[24px]">{heading}</span>
        </span>
        <div className="section1 flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-center md:justify-between p-7 md:p-12">
          <div className="button w-full flex flex-row flex-wrap md:flex-col order-2 md:order-1 justify-center gap-6 md:pl-5">
            {buttonDetails.map((item) => (
              <button
                key={item.id}
                className= {`hover:bg-[#626262c4] pl-2 text-left flex items-center w-full md:w-2/3 h-28 p-3 justify-center rounded-md border border-[#929292c4] cursor-pointer ${activeButton === item.id ? 'bg-[#626262c4]' : ''}`}
                
                onClick={() => handleButtonClick(item)}
              >
                <div className="flex flex-col gap-2 justify-center w-3/4 text-white">
                  <span className="font-semibold text-lg">{item.main}</span>
                  <span className="text-[14px]">{item.sub}</span>
                </div>
              </button>
            ))}
          </div>

          <div className=" w-full order-1 md:order-2">
            <img
              src={displayImg}
              alt="image"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalScreen;
