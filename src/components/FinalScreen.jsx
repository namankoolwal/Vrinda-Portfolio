import React from "react";
import ellipse from "../assets/images/Ellipse.png";
import eventDiscovery from "../assets/images/eventDiscovery.png";
import eventCreation from "../assets/images/eventCreation.png";
import userProfile from "../assets/images/userProfile.png";
import joinCommunity from "../assets/images/joinCommunity.png";
import { useState } from "react";

const FinalScreen = () => {
  const [displayImg, setDisplayImg] = useState(eventDiscovery);

  // // Function to handle button click and update display text
  const handleButtonClick = (id) => {
    setDisplayImg(id);
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
        <span className="flex items-center gap-2 px-5 py-8">
          <img loading="lazy" src={ellipse}></img>{" "}
          <span className="font-semibold text-white">Final Screens</span>
        </span>
        <div className="section1 flex items-stretch justify-between p-12">
          <div className="button w-full flex flex-col py-5 gap-5 pl-5">
            {buttonDetails.map((item) => (
              <button
                key={item.id}
                className="hover:bg-[#626262c4] pl-2 text-left flex items-center w-2/3 p-2 justify-center rounded-md border border-[#929292c4] cursor-pointer"
                onClick={() => handleButtonClick(item.img)}
              >
                <div className="flex flex-col gap-2 justify-center w-3/4 text-white">
                  <span className="font-semibold">{item.main}</span>
                  <span className="text-[12px]">{item.sub}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="bg-black w-full">
            <img
              loading="lazy"
              src={displayImg}
              alt="image"
              className="image10"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalScreen;
