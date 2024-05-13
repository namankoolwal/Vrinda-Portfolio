import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

const TypewriterText = () => {
    const textRef = useRef(null)
    useEffect(()=>{
        const typed = new Typed(textRef.current, {
            strings: ['designed by me', 'developed by Naman'],
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 1000,
            loop: true,
            showCursor: false,
          });
          return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
        
    }, [])
  return (
    <>
        {/* <div className="wrapper inline-flex">
            <div className="static-text">This Website is</div>
            <ul className="dynamic-text overflow-hidden *:relative *:top-0 *:animate-slide ml-1 h-6 leading-6 ">
                <li ><span className='relative after:absolute after:content-[""]  after:border-red-400 after:h-full after:py-5 after:w-full after:left-0 after:animate-typing after:bg-white'>designed by me</span></li>
                <li ><span className='relative after:absolute after:content-[""] after:border-red-400 after:h-full after:py-5 after:w-full after:left-0 after:animate-typing after:bg-white'>developed by Naman</span></li>
            </ul>
        </div> */}

        <div className='wrapper text-xs md:text-sm'>
        <div className="static-text">This Website <span className='auto-type' ref={textRef}></span></div>
        </div>
    </>
  )
}

export default TypewriterText