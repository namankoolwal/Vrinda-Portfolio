import React from 'react'
import Header from './Header'
import ScrollToTop from './ScrollToTop';
import ellipse from "../assets/images/Ellipse.png";
import fitverxHeaderOne from "../assets/images/fitverx/fitverxHeaderOne.png";
import fitverxHeaderTwo from "../assets/images/fitverx/fitverxHeaderTwo.png";
import mobiles from "../assets/images/fitverx/mobiles.png";


const CaseStudy1 = () => {
  return (
    <div>
        <Header/>
        <ScrollToTop/>
      <div className="py-10 px-20 ">
        <div className="first-text">Featured Project</div>
        <div className="eventify">
          <b>EVENTIFY APP DESIGN</b>
        </div>
        <div className="main-text flex gap-14 flex-col lg:flex-row-reverse items-start">
          <div className="w-full flex flex-col gap-10 pt-5 lg:pt-0">
            <img
              loading="lazy"
              src={fitverxHeaderOne}
              alt="image"
              className="image1"
            />
             <img
              loading="lazy"
              src={fitverxHeaderTwo}
              alt="image"
              className="image1"
            />
          </div>
          <div className=" w-full">
            <div className="main-text1 text-[20px] md:text-[35px] md:pt-5">
            Your Virtual Fitting Room, Where Style Meets Fit!"
            </div>
            

            <div className="labels">
              <p className="label1">Visual Design</p>
              <p className="label2">UX/UI</p>
              <p className="label3">Product Design</p>
            </div>
            <div className="time mt-4">
              <span>8 min read</span>
            </div>

            <div className="details">
              <div className="timeline ">
                <span className="text1">TIMELINE</span>
                <p className="text2">Dec-Jan 2024</p>
              </div>
              <div className="sector">
                <span className="text1">SECTOR</span>
                <p className="text2">Entertainment, Social Networking</p>
              </div>
            </div>
            <div className="design-role">
              <span className="text1">DESIGN ROLE</span>
              <p className="text2">Design thinking , UX/UI , Problem Solving</p>
              <p className="text-sm italic underline mt-6"><a href="https://www.figma.com/file/s4SP9jdVvEIQCBIMMQK27w/eventify?type=design&node-id=0%3A1&mode=design&t=NcoO9INqaUQnkLFB-1">
                Figma File</a></p>
            </div>
          </div>
        </div>
      </div>
      {/* ************************************************************************************************* */}

      <div className="container4">
        <div className="lists">
          <b className="flex items-center gap-4">
            <img loading="lazy" src={ellipse}></img> Problem Statements
          </b>
        </div>

        <div className="text7">
          <b>
          People who shop for clothes online encounter challenges visualizing how items will fit and look on them before they order.
          </b>
        </div>

        <div className="text8">
          <b>
          It results in frequent returns and delays in receiving suitable clothing, especially for specific occasions, ultimately impacting the overall shopping experience negatively.
          </b>
        </div>

        <div className="text5 py-3">
          <span>
          I often found it challenging to visualize myself while shopping online. Even if I order with the hope they will look good on me, I often end up having to return them because they don't suit me, causing delays in receiving the items.
          </span>
        </div>
        <div className="text6">
          <span>
          Not to mention it is  frustrating when need a specific dress for an occasion, as I'm left with no alternative outfits. I am curious! to have trial before I purchase online.
It added another layer of emotional stress when trying to choose between which clothes will look good on me  and ordering new clothes again would only lead to further delays.
          </span>
        </div>
      </div>

      {/* ************************************************************************************************* */}
      <div className="container5">
        <div className="layers2">
          <img loading="lazy" src={mobiles} className="image3" />
        </div>
      </div>
    </div>
  )
}

export default CaseStudy1