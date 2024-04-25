import React from "react";
import ellipse from "../assets/images/Ellipse.png";
import eventDiscovery from "../assets/images/eventDiscovery.png";
import eventCreation from "../assets/images/eventCreation.png";
import userProfile from "../assets/images/userProfile.png";
import joinCommunity from "../assets/images/joinCommunity.png";
import { useState } from "react";

const FinalScreen = () => {
  const [displayImg, setDisplayImg] = useState(eventDiscovery);
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (item) => {
    setDisplayImg(item.img);
    setActiveButton(item.id);
  };

  const buttonDetails = [
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
      sub: "personalized hub for users, offers a snapshot of their event activity",
      img: joinCommunity,
    },
  ];
  return (
    <>
      <div className="bg-[#211c1c] mb-16">
        <span className="flex items-center gap-2 px-6 py-4 md:py-8">
          <img loading="lazy" src={ellipse}></img>{" "}
          <span className="font-semibold text-white">Final Screens</span>
        </span>
        <div className="section1 flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-center md:justify-between p-7 md:p-12">
          <div className="button w-full flex flex-row flex-wrap md:flex-col order-2 md:order-1 justify-center gap-5 md:pl-5">
            {buttonDetails.map((item) => (
              <button
                key={item.id}
                className= {`hover:bg-[#626262c4] pl-2 text-left flex items-center w-full md:w-2/3 p-3 justify-center rounded-md border border-[#929292c4] cursor-pointer ${activeButton === item.id ? 'bg-[#626262c4]' : ''}`}
                
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
