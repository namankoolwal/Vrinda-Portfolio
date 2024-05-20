import React from "react";
import Header from "./Header";
import "../css/casestudy2.css";
// import eventifyImage from "../assets/images/eventify-app-design.png";
import eventifyImage from "../assets/images/eventify-app-design.webp";
import ellipse from "../assets/images/Ellipse.png";
import mobile from "../assets/images/mobile-images.png";
import singleMobile from "../assets/images/single-mobile.png";
import Primarychallenges from "../assets/images/primaryChallenges.png";
import goal from "../assets/images/goals.png";
// import compare from "../assets/images/compare.png";
import compare from "../assets/images/compare.webp";
import mapping from "../assets/images/mapping.png";
import findings from "../assets/images/findings.png";
import findingsOne from "../assets/images/findingsOne.png";
import useflow from "../assets/images/DemoUser.png";
import userTesting from "../assets/images/userTesting.png";
import takeawayOne from "../assets/images/takeawayOne.png";
import takeawayTwo from "../assets/images/takeawayTwo.png";
// import gettingStarted from "../assets/images/gettingStarted.png";
import gettingStarted from "../assets/images/gettingStarted.webp";
import gettingStartedInnerImg from "../assets/images/gettingStartedInnerImg.png";
import navbarImg from "../assets/images/navbarImg.png";
import FinalScreen from "./FinalScreen";
import styleGuide from "../assets/images/styleGuide.png";
import thankYou from "../assets/images/thankYou.png";
import greenLightning from "../assets/images/greenLightning.png";
import fitverx from "../assets/images/fitverx.png";
import pinterestImg from "../assets/images/pinterestImg.png";
import ScrollToTop from "./ScrollToTop";
import { useNavigate } from "react-router-dom";

function CaseStudy2() {
  const navigate = useNavigate();

  const pageNavigate = (path) => {
    navigate(path)
    window.scrollTo({
      top: 0, // Specify the y-coordinate value you want to scroll to
      behavior: "smooth"
  });
  }
  return (
    <div>
      <ScrollToTop/>
      <div className="container1">
        <div className="first-text">Featured Project</div>
        <div className="eventify">
          <b>EVENTIFY APP DESIGN</b>
        </div>
        <div className="main-text flex gap-14 flex-col lg:flex-row-reverse items-start">
          <div className="w-full pt-5 lg:pt-0">
            <img
              loading="lazy"
              src={eventifyImage}
              alt="image"
              className="image1"
            />
          </div>
          <div className=" w-full">
            <div className="main-text1 text-[20px] md:text-[36px] md:pt-5">
              Discover, Connect, Attend. Effortlessly explore and engage with
              local events.
            </div>
            {/* <div className="main-text2">Effortlessly explore and engage</div>
          <div>with local events.</div> */}

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
              <p className="text-sm italic underline mt-6"><a href="https://www.figma.com/design/s4SP9jdVvEIQCBIMMQK27w/eventify?node-id=0%3A1&t=jWXkHjbZfU9AcZT9-1" target="_blank">
                Figma File</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="intro">
          <b>Introduction</b>
        </div>

        <div className="text3">
          <span>
            This project was done as part of my challenge where we were prompted
            design a user interface for a fictional mobile application called
            "Eventify." Eventify is a social event planning app that allows
            users to create, discover, and join events in their local community.
          </span>
        </div>

        <div className="ultimate">
          <span>
            Your Ultimate Event Companion! Discover and connect with local
            events effortlessly.
          </span>
        </div>

        <div className="text3">
          <span>
            Your all-in-one solution for event discovery, planning, and
            connection. Discover exciting events tailored to your interests,
            connect with like-minded individuals, and create unforgettable
            experiences.
          </span>
        </div>
      </div>

      <div className="container3">
        <div className="lists">
          <b className="flex items-center gap-4">
            <img loading="lazy" src={ellipse}></img> Problem Statements
          </b>
        </div>

        <div className="ultimate">
          <span>
            "Ever felt like there's always something exciting happening nearby,
            but you're just not sure how to find it?
          </span>
        </div>

        <div className="text5">
          <span>
            Whether it's missing out on cool concerts, fun meetups, or local
            workshops, many of us struggle to discover and connect with the
            events that truly spark our interest. Existing event apps often feel
            impersonal, leaving us lost in a sea of options without any real
            sense of community. That's where Eventify comes in! We're here to
            change the game by creating a friendly, intuitive platform that
            makes event discovery a breeze.
          </span>
        </div>
        <div className="text6">
          <span>
            Our goal is to bring people together, help you find events you'll
            love, and make it easy to connect with others who share your
            passions. Say goodbye to FOMO and hello to a world of endless
            possibilities with Eventify!"
          </span>
        </div>
      </div>

      <div className="container4">
        <div className="lists">
          <b className="flex items-center gap-4">
            <img loading="lazy" src={ellipse}></img> Solutions
          </b>
        </div>
        <div className="flex gap-16 flex-col mt-5 md:mt-0 lg:flex-row-reverse items-start">
          <div className="layers1 w-full pt-5 flex items-center justify-center lg:pt-0">
            <img
              loading="lazy"
              src={singleMobile}
              alt="image"
              className="image2 mx-auto"
            ></img>
          </div>

          <div className="w-full">
            <div className="text7">
              Make reaching people easily and quick within your range engage
              with local events tailored to your interests with
            </div>

            <div className="text8">
              <b>What is Eventify aiming to do?</b>
            </div>

            <div className="text9">
              <span className="leading-7">
                Eventify aims to revolutionize the way
                <b className="boldit">
                  {" "}
                  people discover, connect, and engage
                </b>{" "}
                with events in their local communities.Eventify strives to
                facilitate seamless connections between event organizers and
                attendees, foster community engagement, and create memorable
                experiences for users.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container5">
        <div className="layers2">
          <img loading="lazy" src={mobile} className="image3" />
        </div>
      </div>

      <div className="container6">
        <div className="lists">
          <b className="flex items-center gap-4">
            <img loading="lazy" src={ellipse}></img> Research
          </b>
        </div>
        <div className="flex items-center justify-evenly my-10 md:my-20">
          <div className="text-gray-500 text-sm md:text-lg font-semibold underline">
           <a href="#interview">1.Primary Research</a>
          </div>
          <div className="text-gray-500 text-sm md:text-lg font-semibold underline">
          <a href="#competitive">2.Competitive Analysis</a>
          </div>
          <div className="text-gray-500 text-sm md:text-lg font-semibold underline">
          <a href="#mapping">3.Users Research</a>
          </div>
          
        </div>
        <div id="interview">
          <span className="font-semibold">Method: </span>Interview
        </div>

        <p className="my-10 font-[500]">
          There were few things of primary interest that I addressed through
          short conversations with few people I wanted to know the need for app
          WHY?
        </p>
        <img loading="lazy" src={Primarychallenges} className="image4" />
      </div>

      <div className="container7">
        <img loading="lazy" src={findingsOne} className="image4" />
      </div>

      <div className="container8">
        <div className="container8-heading" id="competitive">COMPETITIVE ANALYSIS</div>

        <div className="text10">
          The demand for event planning apps has due to the need for efficient
          organization in today's busy world.
        </div>

        <div className="text11">
          <span>
            While it's true that there's no shortage of competitors in this
            space, each brings its own unique blend of services and features to
            the table, enriching the options available to users .So, let's take
            it easy and explore what's out there. Who knows, we might find some
            awesome inspiration along the way!
          </span>
        </div>
      </div>

      <div className="container9">
        <img loading="lazy" src={goal} className="image5" />
      </div>

      <div className="container10">
        <div className="container10-text">
          How would <b>Eventify</b> compare?
        </div>
        <div className="flex gap-16 flex-col lg:flex-row-reverse items-center">
          <div className=" w-full pt-5 lg:pt-0">
            <img
              loading="lazy"
              src={compare}
              alt="image"
              className="image10"
            ></img>
          </div>

          <div className="w-full ">
            <div className="text12">
              A combination of its competitors, Eventify would offers&nbsp; a
              broader range of features for both casual and professional event
              planning. It's like the Swiss Army knife of event apps, with tons
              of customization options, advanced management tools, and
              collaboration features.
            </div>

            <div className="text13">
              Professionals can effortlessly organize events while keeping up
              with their hectic schedules.
            </div>

            <div className="text14">
              <span>
                Eventify is like having a trusty sidekick for busy
                professionals, planning a conference or a company retreat,
                Eventify is there to lend a helping hand, making event planning
                feel like a walk in the park!
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container11">
        <div className="container11-heading" id="mapping">MAPPING & SORTING</div>

        <div className="text15">
          <span>
            I also asked them if there were anything they would be curious about
            when checking out events, gain a deeper understanding of users, the
            issues they come across, what they want and need, and how they
            behave.
          </span>
        </div>
      </div>

      <div className="container12">
        <img loading="lazy" src={mapping} className="image6" />
        <div className="text16 md:mt-[24px] md:text-[17px]">
          <span className="italic">
            Takeaways from the understanding of users
          </span>
        </div>
      </div>

      <div className="container13">
        <div className="container13-heading">
          Sorting the features in terms of importance and order
        </div>
        <div className="text17">
          <span className="text18">
            Given the following six features (a mix of features I sampled from
            researching competitors)...
          </span>
          <ul className="text19 list-disc ml-10 mb-12">
            <li>online registartion</li>
            <li> locationg Distance from your location</li>
            <li>different categories of events</li>
            <li>Price/ Tickets to buy</li>
          </ul>

          <span className="text20">
            Sorting in terms of importance gave me a sense of which features to
            emphasize and sorting in terms of order gave me a sense of
            preference for page navigation. It also highlighted the difference
            in value people have for their own page and for other's pages.
          </span>
        </div>
      </div>

      <div className="container14">
        <img loading="lazy" src={findings} className="image7" />
      </div>

      <div className="container15">
        <div className="lists">
          <b className="flex items-center gap-4">
            <img loading="lazy" src={ellipse}></img> Design
          </b>
        </div>
        <div className="text21">
          <span>
            I designed the user experience by imagining the user flow, followed
            with a wireframe (1) and complete prototype (1), each accompanied
            with user testing.
          </span>
        </div>
        <div className="container15-image">
          <img loading="lazy" src={useflow} className="image8" />
        </div>
      </div>
      {/* *********************** */}
      <div className="container8">
        <div className="container8-heading">USER TESTING (WIREFRAME)</div>
        <div className=" w-full mt-10">
          <img
            loading="lazy"
            src={userTesting}
            className="w-full"
          />
          {/* <img
            loading="lazy"
            src={userTestingTwo}
            className="w-[140px] h-[170px] md:h-[455px] md:w-[370px] lg:w-[470px]"
          /> */}
        </div>
        <div className="text11">
          <span>
            I focused mainly on the homepage and its navigation at this stage
            and wanted to get external opinions early on.I asked 3 people to
            navigate the prototype without guidance and wanted to see...
          </span>
          <ul className="leading-7 list-disc ml-5 mt-5 mb-10">
            <li>If the navigation was intuitive</li>
            <li>
              If there were features/information missing they would have found
              useful
            </li>
            <li>How they felt during the process</li>
          </ul>
        </div>
      </div>
      {/* ******************************************* */}
      <div className="container8">
        <div className="container8-heading">TAKEAWAYS</div>
        <div className=" w-full flex flex-col gap-8 pt-10 justify-center">
          <img loading="lazy" src={takeawayOne} />
          <img loading="lazy" src={takeawayTwo} />
        </div>
      </div>
      {/* ******************************************** */}

      <div className="container10">
        <div className="flex gap-16 flex-col lg:flex-row-reverse items-center">
          <div className=" w-full pt-5 lg:pt-0">
            <img
              loading="lazy"
              src={gettingStarted}
              alt="image"
              className="image10"
            ></img>
          </div>
          <div className="w-full ">
            <div className="text12 w-4/5 flex flex-col gap-10">
              <img
                loading="lazy"
                src={gettingStartedInnerImg}
                alt="image"
                width={300}
              />
              <p>
                Based on feedback from testing, I added a "Sign In" button
                alongside "Get Started" which is friendly update that caters to
                both new and returning users. It offers convenience and
                personalization, like welcoming newcomers to a party while also
                greeting familiar faces with a warm hello.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ************************************************** */}
      <div className="container10">
        <div className="flex gap-8 md:gap-16 flex-col-reverse lg:flex-row-reverse items-center">
          <div className=" w-full pb-5 lg:pb-0">
            <img
              loading="lazy"
              src={navbarImg}
              alt="image"
            ></img>
          </div>
          <div className="w-full ">
            <div className="text12 w-4/5 flex flex-col gap-10">
              <span className="font-bold">THE NAV BAR</span>
              <p>
                I incorrectly assumed that most users would eventually learn the
                purpose of each page through experience. By accompanying the
                icons with text, it becomes much easier to navigate for new
                users.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ===================================================== */}
      <div className="container10">
        <FinalScreen caseStudy={'eventify'}/>
      </div>
      {/* ===================================================== */}
      <div className="container15">
        <div className="lists">
          <b className="flex items-center gap-4">Prototype</b>
        </div>
        <div className=" bg-[#d9d9d9] mb-10 overflow-hidden m-auto h-[670px] flex mt-10 ">
          <iframe
            width="800"
            height={700}
            className="m-auto w-full"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fs4SP9jdVvEIQCBIMMQK27w%2Feventify%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D505-350%26viewport%3D2994%252C7326%252C0.5%26t%3DLZF0W1aA7ZadTabp-1%26scaling%3Dscale-down%26starting-point-node-id%3D505%253A350%26mode%3Ddesign&hotspot-hints=0&hide-ui=1"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      {/* ===================================================== */}
      <div className="container10">
        <div className="flex gap-16 flex-col lg:flex-row-reverse items-center">
          <div className=" w-full pt-5 lg:pt-0">
            <img
              loading="lazy"
              src={styleGuide}
              alt="image"
              className="image10"
            ></img>
          </div>
          <div className="w-full ">
            <div className="text12 w-4/5 flex flex-col gap-10 ">
              <span className="font-semibold">STYLE GUIDE</span>
              <p>
                I wanted to convey the app as one that's fun and accessible,
                making users excited to start their new journey with Eventify.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ****************************************************************** */}
      <div className="px-5 lg:px-[200px] my-[40px] md:my-[120px] font-Urbanist box-border">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full">
            <div className="grid grid-cols-2 p-5 lg:px-28">
              <div className="bg-black w-full h-11"></div>
              <div className="bg-[#717171] w-full h-11"></div>
              <div className="bg-[#F0F2F9] w-full h-11"></div>
              <div className="bg-[#595E5A] w-full h-11"></div>
              <div className="bg-[#426DDD] w-full h-11"></div>
              <div className="bg-[#B6BDFF] w-full h-11"></div>
              <div className="bg-[#EF7739] w-full h-11"></div>
              <div className="bg-[#0ABCA7] w-full h-11"></div>
              <div className="bg-[#FFE8C8] w-full h-11"></div>
              <div className="bg-[#EEFBF2] w-full h-11"></div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-5 justify-center pl-5 md:px-0 md:pr-10 h-full">
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#426DDD]">Typography</span>
                <span className="text-[#717171]">Poppins</span>
                <span className="flex items-center gap-3 md:gap-6 text-[#717171]">
                  <span className="font-[500]">Medium</span>
                  <span className="font-semibold">Semi-Medium</span>
                  <span className="font-bold">Bold</span>
                </span>
              </div>

              <div className="flex flex-col gap-2 text-[#717171]">
                <span>Montserrat</span>
                <span className="flex items-center gap-3 md:gap-6">
                  <span>Regular</span>
                  <span className="font-[500]">Medium</span>
                  <span className="font-semibold">Semi-Medium</span>
                  <span className="font-bold">Bold</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ****************************************************************** */}
      <div className="px-5 lg:px-[200px] my-[80px] md:my-[120px] font-Urbanist box-border pb-10">
        <div className="text-2xl">
          <b className="flex items-center gap-4">
            <img loading="lazy" src={ellipse}></img> Conclusion
          </b>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 pt-8">
          <div className=" md:w-2/3 ">
            <div className="flex flex-col gap-4">
              <span className="text-[17px]">Not Really</span>
              <span className="text-xl font-semibold">The End</span>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-5 mr-5 text-balance md:pr-10">
              <div className="text-[17px] leading-5">
                The long process of researching, testing, and repeatedly honing
                my designs has led to a project I’m proud of, but still, I
                believe there’s a lot of room for improvement.
              </div>
              <div className="text-xl font-semibold">WHAT I LEARNED</div>
              <div className="text-[17px]">
                It's good to ask for lots of help! Having a fresh pair of eyes
                helped a lot with nitpicking details I glazed over
                <br /> Settling on a good word choice can be harder than
                settling on a design choice...
                <br /> Brand identity is formed through every decision in tone,
                color, shapes, and more!
              </div>
              <div className="text-xl font-semibold">
                SOMETHING I WANT TO IMPROVE ON
              </div>
              <div className="text-[17px] leading-5">
                I'd like to work more on my research method. The sample for my
                initial interview research was quite small and biased given that
                they were my friends. While they gave me incredible insights, it
                definitely would have been better if I reached out to a larger
                audience for more diversity!
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***************************************************************** */}
      <div className="px-5 lg:px-[200px] my-[80px] md:my-[120px] font-Urbanist box-border">
        <div className="flex flex-col gap-6 items-center justify-center">
          <img
            src={greenLightning}
            alt="greenLightning"
            className="w-[200px]"
            loading="lazy"
          />
          <img
            src={thankYou}
            alt="thankYou"
            className="w-[150px]"
            loading="lazy"
          />
        </div>
      </div>
      {/* ***************************************************************** */}
      <div className="px-5 lg:px-[200px] my-[80px] md:my-[150px] font-Urbanist box-border">
        <div>
          <div className="flex flex-col gap-10">
            <div className="">
              <p
                className="text-xs md:text-3xl font-[500] text-center"
               
              >
                You've reached the end...why not take a look at my other
                projects?
              </p>
            </div>
            <div className="flex gap-9 items-start justify-center">
              {/* <div className=" w-full flex p-5 pr-0 mr-0 justify-end"> */}
                <div className="flex flex-col gap-3 md:w-[40%] cursor-pointer"
                onClick={()=>{pageNavigate('/case-study1')}}
                >
                  <img
                    loading="lazy"
                    src={fitverx}
                    alt="image"
                    className="w-full"
                  ></img>
                  <div className="flex flex-col gap-2 items-start text-left w-full ">
                    <span className="text-[12px] md:text-[20px] font-semibold">
                      FITVERX:Virtual Try ON Feature
                    </span>
                    <span className="text-[#8C8C8C] text-[12px] md:text-sm">
                      Problem Solving
                    </span>
                  </div>
                </div>
              {/* </div> */}
              {/* <div className="  w-full p-5 pl-0"> */}
                <div className="flex gap-3 flex-col md:w-[40%] cursor-pointer"
                onClick={()=> ( window.open(
                  "https://www.behance.net/gallery/185011191/Pinterest-UX-Case-Study", 
                  "_blank"
              ))}
                >
                  <img
                    loading="lazy"
                    src={pinterestImg}
                    alt="image"
                    className="w-full"
                  ></img>
                  <div className="flex gap-2 flex-col">
                    <span className="text-[12px] md:text-[20px] font-semibold">
                      Pinterest:Redesigning Pinterest
                    </span>
                    <span className="text-[#8C8C8C] text-[12px] md:text-sm">
                      User Research, User Experience
                    </span>
                  </div>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy2;
