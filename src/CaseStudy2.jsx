import React from "react";
import Header from "./Header";
import "./css/casestudy2.css";
import eventifyImage from "./assets/images/eventify-app-design.png";
import ellipse from "./assets/images/Ellipse.png";
import mobile from "./assets/images/mobile-images.png";
import singleMobile from "./assets/images/single-mobile.png";
import Primarychallenges from "./assets/images/primaryChallenges.png";
import goal from "./assets/images/goals.png";
import compare from "./assets/images/compare.png";
import mapping from "./assets/images/mapping.png";
import findings from "./assets/images/findings.png";
import useflow from "./assets/images/DemoUser.png";
function CaseStudy2() {
  return (
    <div>
      <div className="container1">
        <div className="first-text">Featured Project</div>
        <div className="eventify">
          <b>EVENTIFY APP DESIGN</b>
        </div>
        <div className="main-text flex gap-14 flex-row-reverse items-start">
          <div className="w-full ">
            <img src={eventifyImage} alt="image" className="image1" />
          </div>
          <div className=" w-full">
            <div className="main-text1 ">
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
                <p className="text2">Dec-Jan 2023(2weeks)</p>
              </div>
              <div className="sector">
                <span className="text1">SECTOR</span>
                <p className="text2">Entertainment, Social Networking</p>
              </div>
            </div>
            <div className="design-role">
              <span className="text1">DESIGN ROLE</span>
              <p className="text2">
                Design thinking , UX/UI , Problem Solving
              </p>
            <p className="text-sm italic underline mt-6">
                Figma File
              </p>
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
            <img src={ellipse}></img> Problem Statements
          </b>
        </div>

        <div className="text4">
          <b>
            "Ever felt like there's always something exciting happening nearby,
            but you're just not sure how to find it?
          </b>
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
            <img src={ellipse}></img> Solutions
          </b>
        </div>
        <div className="flex gap-16 flex-row-reverse items-start">

        <div className="layers1 w-full">
          <img src={singleMobile} alt="image" className="image2"></img>
        </div>

        <div className="w-full">

        <div className="text7">
            Make reaching people easily and quick within your range engage with
            local events tailored to your interests with
        </div>

        <div className="text8">
          <b>What is Eventify aiming to do?</b>
        </div>

        <div className="text9">
          <span className="leading-7">
            Eventify aims to revolutionize the way
            <b className="boldit"> people discover, connect, and engage</b> with
            events in their local communities.Eventify strives to facilitate
            seamless connections between event organizers and attendees, foster
            community engagement, and create memorable experiences for users.
          </span>
        </div>
        </div>
        </div>
      </div>

      <div className="container5">
        <div className="layers2">
          <img src={mobile} className="image3" />
        </div>
      </div>

      <div className="container6">
      <div className="lists">
          <b className="flex items-center gap-4">
            <img src={ellipse}></img> Research
          </b>
        </div>
        <div className="flex items-center justify-evenly my-20">
          <div className="text-gray-500 text-lg font-semibold underline">1.Secondary Research</div>
          <div className="text-gray-500 text-lg font-semibold underline">2.Users Research</div>
          <div className="text-gray-500 text-lg font-semibold underline">3.Competitive Research</div>
        </div>
        <div><span className="font-semibold">Method: </span>Interview</div>
        
        <p className="my-10 font-[500]">There were few things of primary interest that I addressed through short conversations with few people I wanted to know the need for app WHY?</p>
        <img src={Primarychallenges} className="image4" />
      </div>

      <div className="container7">
      <img src={findings} className="image4" />

      </div>

      <div className="container8">
        <div className="container8-heading">
          <b>COMPETITIVE ANALYSIS</b>
        </div>

        <div className="text10">
          <b>
            The demand for event planning apps has due to the need for efficient
            organization in today's busy world.
          </b>
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
        <img src={goal} className="image5" />
      </div>

      <div className="container10">
        <div className="container10-text">
          How would <b>Eventify</b> compare?
        </div>
        <div className="flex gap-16 flex-row-reverse items-start">

        <div className=" w-full bg-red-300">
          <img src={compare} alt="image" className="image10"></img>
        </div>

        <div className="w-full ">
        <div className="text12">
          A combination of its competitors, Eventify would offers&nbsp; a broader
          range of features for both casual and professional event planning.
          It's like the Swiss Army knife of event apps, with tons of
          customization options, advanced management tools, and collaboration
          features.
        </div>

        <div className="text13">
            Professionals can effortlessly organize events while keeping up with
            their hectic schedules.
        </div>

        <div className="text14">
          <span>
            Eventify is like having a trusty sidekick for busy professionals,
            planning a conference or a company retreat, Eventify is there to
            lend a helping hand, making event planning feel like a walk in the
            park!
          </span>
        </div>
        </div>
        </div>

      </div>

      <div className="container11">
        <div className="container11-heading">
            MAPPING & SORTING
        </div>

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
        <img src={mapping} className="image6" />
      </div>
      <div className="text16">Takeaways from the understanding of users</div>

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
        <img src={findings} className="image7" />
      </div>

      <div className="container15">
        <div className="lists">
          <b className="flex items-center gap-4">
            <img src={ellipse}></img> Design
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
          <img src={useflow} className="image8" />
        </div>
      </div>
    </div>
  );
}

export default CaseStudy2;
