import React , {useRef , useEffect, useState} from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import Header from './Header'
import Hi from '../assets/images/landingPage/Hi.png'
import imVrinda from '../assets/images/landingPage/imVrinda.png'
import Layer1 from '../assets/images/landingPage/Layer1.svg'
import fitverxImg from '../assets/images/landingPage/fitverxImg.png'
import Pinterest from '../assets/images/landingPage/Pinterest.png'
import pinterestLogo from '../assets/images/landingPage/pinterestLogo.png'
import Eventify from '../assets/images/landingPage/Eventify.png'
import eventifyLogo from '../assets/images/landingPage/eventifyLogo.png'
import Behands from "../assets/images/Social.png";
import Dribble from "../assets/images/Dribble.png";
import layer1 from "../assets/images/Layer_1.png";
import vk from '../assets/images/landingPage/vk.gif'
import eventifyBg from '../assets/images/landingPage/eventifyBg.png'
import fitverxBg from '../assets/images/landingPage/fitverxBg.png'
import pinterestBg from '../assets/images/landingPage/pinterestBg.png'
import dogImg from '../assets/images/landingPage/dogImg.png'

const LandingPage = ({scrollToRef}) => {
    
    const refOne = useRef(null);
    const refTwo = useRef(null);
    const refThree = useRef(null);
    const navigate = useNavigate()

    
  
    const pageNavigate = (path) => {
      navigate(path)
    }

    
    const onMouseOver = async (e) => {
        if(e.current.classList.contains('animate-phone')){
          e.current.classList.remove('animate-phone')
          e.current.classList.add('animate-phoneTwo')
            
        }
        else{
          e.current.classList.add('animate-phone')
          e.current.classList.remove('animate-phoneTwo')
        }       
    }
  
  return (
    <div >
        <Header />
        
          <div className=' mx-auto mt-10 md:mt-0 py-10 px-4 md:px-24 '>
            <div className="flex items-center flex-col-reverse gap-10 md:gap-0 md:flex-row justify-center">
                <div className='flex flex-col gap-10 md:gap-3 '>
                    <p className='flex items-center justify-center md:justify-start gap-3 mx-auto w-[80%] md:w-full'>
                        <img src={Hi} alt="Hi" className='w-[20%] md:w-auto' />
                        <img src={imVrinda} alt="imVrinda" className='w-[60%] md:w-auto' />
                        <img src={Layer1} alt="Layer1" className='w-[20%] md:w-auto' />
                    </p>
                    <p className='text-2xl text-justify md:text-left  text-balance ' >
                        Aspiring <span className='font-semibold'>UI/UX wizard</span>  who enjoys<span className='font-semibold'> seamlessly</span> bridging  the  gap  between  people and digital space by day, and a lofi loving artist by night.</p>
                </div>
                <div className=' w-[70%] md:w-auto'>
                    <img src={vk} alt="illustraterGif" />
                </div>
            </div>
          </div>
          {/* ********************************************************************* */}
          <div className='mx-auto mt-24 md:mt-0 md:pt-10 px-2 md:px-24' ref={scrollToRef}>
            <p className='text-2xl md:text-3xl font-Bree text-[#005323] pb-6'>Scroll to  have some UX Tea</p>
            <hr className='font-bold text-black h-[2px] bg-black' />
          </div>
          {/* ********************************************************************* */}
          <div  className='container mx-auto md:my-[50px] cursor-pointer ' onClick={()=>{pageNavigate('/case-study2')}}>
            <div className='eventi flex items-center m-0 flex-col md:flex-row'>
                <div className='hoverEvent image flex-1 relative' ref={refOne} onMouseOver={()=>onMouseOver(refOne)} >
                    <img src={Eventify} alt="" className='w-auto z-20 peer/eventify'/>
                    <img src={eventifyBg} alt="" className='w-auto absolute opacity-0 top-0 -z-10 transition ease-in-out duration-700 peer-hover/eventify:opacity-100'/>
                    {/* hover:-translate-y-5 transition-all duration-700 */}
                </div>
                <div className='flex-1'>
                <div className='details flex flex-col px-5 md:px-0 md:w-[60%] mx-auto md:mx-0'>
                <div className='w-2/5 '>
                    <img src={eventifyLogo} alt="pinterestLogo" className='w-auto ' />
                        </div>
                    <div>

                    <div className=' text-[22px] text-transparent bg-clip-text bg-gradient-to-b from-[#4252DD] from-0% via-[#0ABCA7] via-40% to-[#3E5AD9] to-90% font-Bree'>Finding & Hosting Events in your locality</div>
                    <div className=' text-[#717171] pt-1'>Your go-to app for seamless event discovery and community connection in your nearby area.</div>
                    </div>
                    <div className='text-[#696062] text-sm font-semibold'> MOBILE DESIGN  //  UX DESIGN   //  FINDING EVENTS</div>
                </div>
                </div>
            </div>
          </div>
          {/* ********************************************************************* */}
          <div className='container mx-auto my-[50px]' onClick={()=>{pageNavigate('/case-study1')}}>
            <div className='fitverx flex items-center flex-col md:flex-row'>
                <div className='hoverEvent image flex-1 relative' ref={refTwo} onMouseOver={()=>onMouseOver(refTwo)}>
                    <img src={fitverxImg} alt="" className='w-full z-20 peer/fitverx'/>
                    <img src={fitverxBg} alt="" className='w-auto absolute opacity-0 top-0 -z-10 transition ease-in-out duration-700 peer-hover/fitverx:opacity-100'/>
                </div>
                <div className='flex-1'>
                <div className='details flex flex-col md:gap-4 px-5 md:px-0 md:w-[60%] mx-auto md:mx-0'>
                    <div className=' text-[44px] text-transparent bg-clip-text bg-gradient-to-b from-[#000000] to-[#666666] font-Bree '>Fitverx</div>
                    <div>

                    <div className=' text-[22px] text-transparent bg-clip-text bg-gradient-to-b from-[#4252DD] from-0% via-[#0ABCA7] via-40% to-[#3E5AD9] to-90% font-Bree'>Get a Virtual trial before you buy</div>
                    <div className=' text-[#717171] pt-1'>Our innovative virtual try-on technology, select the items you love, and with a click, see yourself wearing them in real-time.</div>
                    </div>
                    <div className='text-[#696062] text-sm font-semibold'> UI DESIGN  //  UX DESIGN   // VIRTUAL FASHION</div>
                </div>
                </div>
            </div>
          </div>
          {/* ******************************************************************** */}
          <div className='container mx-auto my-[50px] ' 
          onClick={()=> ( window.open(
            "https://www.behance.net/gallery/185011191/Pinterest-UX-Case-Study/modules/1045636797", 
            "_blank"
        ))}
          >
            <div className='pinterest flex items-center flex-col md:flex-row'>
                <div className='hoverEvent image flex-1 relative' ref={refThree} onMouseOver={()=>onMouseOver(refThree)}>
                <img src={Pinterest} alt="" className='w-full z-20 peer/pinterest'/>
                    <img src={pinterestBg} alt="" className='w-auto absolute opacity-0 top-0 -z-10 transition ease-in-out duration-700 peer-hover/pinterest:opacity-100'/>
                </div>
                <div className='flex-1'>
                <div className='details flex flex-col md:gap-1 px-5 md:px-0 md:w-[60%] mx-auto md:mx-0'>
                    <div className='w-2/4 '>
                    <img src={pinterestLogo} alt="pinterestLogo" className='w-auto ' />
                        </div>
                    
                    <div className=' mt-0'>
                    <div className=' text-[22px] text-transparent bg-clip-text bg-gradient-to-b from-[#BD081C] to-[#000000] font-Bree'>Redesigning Pinterest</div>
                    <div className=' text-[#717171] pt-1'>Delve into the intricacies of Pinterest's seeking opportunities for improvement and explore potential enhancements to the user experience."</div>
                    </div>
                    <div className='text-[#696062] text-sm font-semibold pt-3'> MOBILE DESIGN  //  UX RESEARCH  //  EXPERIENCE DESIGN  </div>
                </div>
                </div>
            </div>
          </div>
          {/* ******************************************************************************************* */}
            <div className=' mx-auto my-[120px] px-4 md:px-24'>
                <div className='text-2xl md:text-3xl font-Bree  text-[#005323]'>Made with lots of love and caffeine.</div>
                <div className="images flex ">
              <a href="https://www.behance.net/vrindakhandel1">
                {" "}
                <img src={Behands} className="behands" />
              </a>
              <a
                href="https://dribbble.com/vrindavk
"
              >
                {" "}
                <img src={Dribble} className="dribble" />
              </a>
              <img src={layer1} className="layer1" />
            </div>
            </div>
            {/* ******************************************************************* */}
          <div className='container mx-auto my-[50px] '>
            <div className='flex flex-col items-center justify-center'>
              <div className=' flex items-center justify-center'>
                <img src={dogImg} alt="dogImg" className='w-3/4' />
              </div>
              <dir>Let's brew up some more tales later</dir>
            </div>
          </div>

        </div>
  )
}

export default LandingPage