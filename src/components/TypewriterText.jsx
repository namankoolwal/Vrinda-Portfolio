import React from 'react'

const TypewriterText = () => {
  return (
    <>
        <div className="wrapper inline-flex">
            <div className="static-text">This Website is</div>
            <ul className="dynamic-text overflow-hidden *:relative *:top-0 *:animate-slide ml-1 h-6 leading-6 ">
                <li ><span className='relative after:absolute after:content-[""]  after:border-red-400 after:h-full after:py-5 after:w-full after:left-0 after:animate-typing after:bg-white'>designed by me</span></li>
                <li ><span className='relative after:absolute after:content-[""] after:border-red-400 after:h-full after:py-5 after:w-full after:left-0 after:animate-typing after:bg-white'>developed by Naman</span></li>
            </ul>
        </div>
    </>
  )
}

export default TypewriterText