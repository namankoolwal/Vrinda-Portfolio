import React from "react";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
import ellipse from "../assets/images/Ellipse.png";
import fitverxHeaderOne from "../assets/images/fitverx/fitverxHeaderOne.png";
import fitverxHeaderTwo from "../assets/images/fitverx/fitverxHeaderTwo.png";
import mobiles from "../assets/images/fitverx/mobiles.png";
import researchPartOne from "../assets/images/fitverx/researchPartOne.png";
import researchPartTwo from "../assets/images/fitverx/researchPartTwo.png";
import findings from "../assets/images/fitverx/findings.png";
import findingsTwo from "../assets/images/fitverx/findingsTwo.png";
import myntraQuote from "../assets/images/fitverx/myntraQuote.png";
import mapping from "../assets/images/fitverx/mapping.png";
import persona from "../assets/images/fitverx/persona.png";
import analysisOne from "../assets/images/fitverx/analysisOne.png";
import analysisTwo from "../assets/images/fitverx/analysisTwo.png";
import analysisThree from "../assets/images/fitverx/analysisThree.png";
import effectBusiness from "../assets/images/fitverx/effectBusiness.png";
import design from "../assets/images/fitverx/design.png";
import WIREFRAME from "../assets/images/fitverx/WIREFRAME.png";
import lightning from "../assets/images/fitverx/lightning.png";
import thankYou from "../assets/images/fitverx/thankYou.png";
import pinterestImg from "../assets/images/fitverx/pinterestImg.png";
import eventifyImg from "../assets/images/fitverx/eventifyImg.png";
import FinalScreen from "./FinalScreen";
import { useNavigate } from "react-router-dom";

const CaseStudy1 = () => {
  const navigate = useNavigate()

  const pageNavigate = (path) => {
    navigate(path)
    window.scrollTo({
      top: 0, // Specify the y-coordinate value you want to scroll to
      behavior: "smooth"
  });
  }
  return (
    <div>
      <Header />
      <ScrollToTop />
      <div className="container1">
        <div className="first-text">Featured Project</div>
        <div className="eventify">
          <b>FITVERX APP DESIGN</b>
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
              <p className="text-sm italic underline mt-6">
                <a href="https://www.figma.com/design/1gCLhhiVo0J3Gi5zsaxizE/FITVERX?node-id=0%3A1&t=1qCm4Z607grTsdGq-1" target="_blank">
                  Figma File
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ************************************************************************************************* */}

      <div className="container3">
        <div className="lists">
          <b className="flex items-center gap-4">
            <img loading="lazy" src={ellipse}></img> Problem Statements
          </b>
        </div>

        <div className="text5">
          <b>
            People who shop for clothes online encounter challenges visualizing
            how items will fit and look on them before they order.
          </b>
        </div>

        <div className="text5">
          <b>
            It results in frequent returns and delays in receiving suitable
            clothing, especially for specific occasions, ultimately impacting
            the overall shopping experience negatively.
          </b>
        </div>

        <div className="text5 py-3">
          <span>
            I often found it challenging to visualize myself while shopping
            online. Even if I order with the hope they will look good on me, I
            often end up having to return them because they don't suit me,
            causing delays in receiving the items.
          </span>
        </div>
        <div className="text6">
          <span>
            Not to mention it is frustrating when need a specific dress for an
            occasion, as I'm left with no alternative outfits. I am curious! to
            have trial before I purchase online. It added another layer of
            emotional stress when trying to choose between which clothes will
            look good on me and ordering new clothes again would only lead to
            further delays.
          </span>
        </div>
      </div>

      {/* ************************************************************************************************* */}
      <div className="container5">
        <div className="layers2">
          <img loading="lazy" src={mobiles} className="image3" />
        </div>
      </div>

      {/* ************************************************************************************************* */}

      <div className="container4">
        <div className="lists">
          <b className="flex items-center gap-4">
            <img loading="lazy" src={ellipse}></img> Research
          </b>
        </div>

        <div className="text-sm pt-10 text-[#626262]">
          <span>PART 1</span>
        </div>
        <div className="text-xl pt-2">
          <span>Identifying Problem</span>
        </div>
        <div className="text-xl py-5">
          <span>
            <span className="font-semibold">Method:</span> Interview
          </span>
        </div>
        <div className="text5 py-3">
          <span>
            To determine if other people shared similar concerns in trying
            outfits. I created a list of questions to better understand what
            exactly they feel while shopping online. I perpare few questions to
            ask that would give me the most insight into the problem space, and
            conducted 15-minute interviews with 2 people
          </span>
        </div>
      </div>

      {/* ************************************************************************************************* */}
      <div className="container5">
        <div className="layers2">
          <img loading="lazy" src={researchPartOne} className="image3" />
        </div>
        <div className="pt-3">
          <p>
            *Admittedly, there's a lot of room for improvement for my research
            method here! I talk more about this in my conculsion.
          </p>
        </div>
      </div>
      {/* ************************************************************************************************* */}
      <div className="container5">
        <div className="layers2">
          <img loading="lazy" src={findings} className="image3" />
        </div>
      </div>
      {/* ************************************************************************************************* */}
      <div className="container4">
        <div className="text-sm text-[#626262]">
          <span>PART 2</span>
        </div>
        <div className="text-xl pt-2">
          <span>Understanding Problem</span>
        </div>
        <div className="text-xl py-5">
          <span>
            <span className="font-semibold">Method:</span> Questionnaire,
            afinnity mapping, user persona
          </span>
        </div>
        <div className="text5 py-3">
          <span>
            I wanted to do further research through a survey with a 
            <span className="font-semibold">larger sample</span> size to
            determine if I was addressing a valid concern. I sampled their
            various thoughts, behaviors, and values towards their online
            shopping and purchasing habit, followed with another round of 
            <span className="font-semibold">interviews</span> to pinpoint their
            troubles. 22 people participated in the survey and I interviewed 3
            of them.
          </span>
        </div>
      </div>
      {/* ********************************************************************************************** */}
      <div className="container5">
        <div className="layers2">
          <img loading="lazy" src={researchPartTwo} className="image3" />
        </div>
        <div className="py-6">
          <p className="text-2xl">
            I found <span className="text-[#2603FE] font-bold">Myntra</span> is
            the most used online shopping apps.{" "}
            <span className="text-[#2603FE] font-bold">
              People sometimes returned
            </span>{" "}
            clothing items because they didn't meet their expectations in terms
            of appearance and appearance of the product influence their{" "}
            <span className="text-[#2603FE] font-bold">
              high rate of returns
            </span>
          </p>
        </div>
        <div className="layers2">
          <img loading="lazy" src={myntraQuote} className="image3" />
        </div>
      </div>
      {/* ********************************************************************************************* */}
      <div className="container4">
        <div className="lists">
          <b className="flex items-center gap-4">AFFINITY MAPPING</b>
        </div>
        <div className="text5 py-6">
          <span>
            I sorted the notes from the survey + interviews and categorized them
            to find commonalities.
          </span>
        </div>
        <div className="px-5 pt-2">
          <img loading="lazy" src={mapping} className="image3" />
        </div>
      </div>
      {/* ********************************************************************************************* */}
      <div className="container5">
        <div className="layers2">
          <img loading="lazy" src={findingsTwo} className="image3" />
        </div>
      </div>
      {/* ********************************************************************************************* */}
      <div className="container4">
        <div className="lists">
          <b className="flex items-center gap-4">PERSONA</b>
        </div>

        <div className="pt-5">
          <img loading="lazy" src={persona} className="image3" />
        </div>
      </div>
      {/* ******************************************************************************************* */}
      <div className="container4">
        <div className="lists">
          <b className="flex items-center gap-4">COMPETITIVE ANALYSIS</b>
        </div>

        <div className="text7">
          <span className="text-2xl">
            None in the market has virtual try on experience for your favourite
            outfits of wishlist.
          </span>
        </div>

        <div className="text5 py-3">
          <span>
            I conducted a competitive analysis of the apps which have AR feature
            and some other fashion apps Zara , Myntra, Ajio, Meesho etc by going
            through some relevant articles and resources. Here are some of the
            key findings and best UX features of each app, based on the
            information I found:
          </span>
        </div>
        <div className="flex gap-10 mt-10">
          <div className="">
            <img loading="lazy" src={analysisOne} className="image3" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="">
              <img loading="lazy" src={analysisTwo} className="image3" />
            </div>

            <div className="">
              <img loading="lazy" src={analysisThree} className="image3" />
            </div>
          </div>
        </div>
      </div>
      {/* ******************************************************************************************* */}
      <div className="container10">
        <div className="flex gap-20 flex-col lg:flex-row-reverse items-start">
          <div className=" w-full pt-5 lg:pt-0">
            <img
              loading="lazy"
              src={effectBusiness}
              alt="image"
              className="image10"
            ></img>
          </div>

          <div className="w-full ">
            <div className="container10-text font-semibold">
              How Would FitverX affect business
            </div>

            <div className="text12">
              Empowering customers to make more informed purchasing decisions,
              virtual try-on technology can alleviate many of the challenges
              faced by the{" "}
              <span className="font-semibold text-[#F58021]">
                fashion industry
              </span>{" "}
              today.
            </div>
            <div className="text14">
              <span>
                FITVERX implementation will boost{" "}
                <span className="font-semibold text-[#F58021]">
                  on-the-spot purchases
                </span>{" "}
                within the shopping app by approximately 80%. By enabling users
                to instantly visualize how products will look and fit, also
                reduces{" "}
                <span className="font-semibold">
                  struggles with getting dresesd again & again more no. of
                  trials and sky-high returns.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ************************************************************************************************ */}
      <div className="container4">
        <div className="lists">
          <b className="flex items-center gap-4">
            <img loading="lazy" src={ellipse}></img> Design
          </b>
        </div>

        <div className="text5 py-10">
          <span>
            I designed the user experience by imagining the user flow, followed
            with a wireframe (1) and complete prototype .
          </span>
        </div>
        <div className="pt-10">
          <img loading="lazy" src={design} className="image3" />
        </div>
      </div>
      {/* ************************************************************************************************ */}
      <div className="container4">
        <div className="lists">
          <b className="flex items-center gap-4">IDEATION</b>
        </div>

        <div className="text5 pt-5">
          <p>
            <p>
              After analyzing the features of Try on apps on the market, we
              tested out three potential approaches* to the and ultimately
              narrowed it down to one.
            </p>
            <p className="pt-5">
              *Approaches
              <ul>
                <li>
                  (1) Activity summary followed by activity feed (forum format)
                </li>
                <li>
                  (2) Activity summary followed by activity feed (image-forward
                  social media format)
                </li>
                <li>(3) Activity summary only</li>
              </ul>
            </p>
          </p>
        </div>
      </div>

      {/* ************************************************************************************************ */}
      <div className="container4">
        <div className="lists">
          <b className="flex items-center gap-4">WIREFRAME</b>
        </div>
        <div className="pt-10">
          <img loading="lazy" src={WIREFRAME} className="image3" />
        </div>
      </div>
      {/* ===================================================== */}
      <div className="container4">
        <div className="lists pb-10">
          <b className="flex items-center gap-4">FINAL SCREENS</b>
        </div>
        <FinalScreen caseStudy={'fitverx'} />
      </div>
      {/* ===================================================== */}
      <div className="container4">
        <div className="lists">
          <b className="flex items-center gap-4">
            <img loading="lazy" src={ellipse}></img> Conculsion
          </b>
        </div>

        <div className="text5 pt-10">
          <span>
            Since I only had to design few page, it was a really fun learning
            experience being able to get into the nitty gritty details of every
            single design choice. I ran into quite a few unexpected ideas as I
            was nearing the end of my project such as Multiple colors of same
            design carousel which really helped tie it all together!
          </span>
        </div>
      </div>
      {/* **************************************************************************** */}

      <div className="container4 ">
        <div className="w-full">
          <div className="flex flex-col gap-5 md:w-[60%]">
            <div className="text-xl font-semibold">WHAT I LEARNED</div>
            <div className="text-[17px]">
              <p className="font-semibold">1. Peer feedback saved my project</p>
              <p className="">
                I asked two other designer friends to look over my project and
                they challenged all of my design decisions, making sure there
                was valid support behind everything.
              </p>
            </div>
            <div className="text-[17px] ">
              <p className="font-semibold">2. Storytell the process</p>
              <p className="">
                I put extra effort into organizing the Figma file for this
                challenge and had a lot of fun structuring it as a story for
                easier digestion. It also made referencing everything easier for
                this case study :)
              </p>
            </div>
            <div className="text-lg font-semibold">
              SOME THINGS I WOULD DO DIFFERENTLY..
            </div>
            <div className="text-[17px] leading-5 ">
              <ul className="list-disc pl-10 space-y-1 leading-6 ">
                <li className=" ">
                  Spend more time polishing the survey, ensuring the wording is
                  as concise and unbiased as possible
                </li>
                <li>
                  Show my wireframe designs to the testers to get their feedback
                  and remove some of my own assumptions
                </li>
                <li>
                  Video interview my friends to get more candid and detailed
                  answers from them <br />
                  which would hopefully help form some better insights
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ***************************************************************************************************** */}

      <div className="px-5 lg:px-[200px] my-[80px] md:my-[120px] font-Urbanist box-border">
        <div className="flex flex-col gap-6 items-center justify-center">
          <img
            src={lightning}
            alt="lightning"
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
      <div className="px-5 lg:px-[200px] my-[80px] md:my-[120px] font-Urbanist box-border">
        <div>
          <div className="flex flex-col gap-10">
            <div className="">
              <p className="text-xs md:text-3xl font-[500] text-center">
                You've reached the end...why not take a look at my other
                projects?
              </p>
            </div>
            <div className="flex gap-9 items-start justify-center">
              <div className="flex flex-col gap-3 md:w-[40%] cursor-pointer"
              onClick={()=>{pageNavigate('/case-study2')}}
              >
                <img
                  loading="lazy"
                  src={eventifyImg}
                  alt="image"
                  className="w-full"
                ></img>
                <div className="flex flex-col gap-2 items-start text-left w-full ">
                  <span className="text-[12px] md:text-[20px] font-semibold">
                    Eventify:Finding & Hosting Events in your locality
                  </span>
                  <span className="text-[#8C8C8C] text-[12px] md:text-sm">
                    UX/UI App Design
                  </span>
                </div>
              </div>

              <div className="flex gap-3 flex-col md:w-[40%] cursor-pointer" 
              onClick={()=> ( window.open(
                "https://www.behance.net/gallery/185011191/Pinterest-UX-Case-Study/modules/1045636797", 
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy1;
