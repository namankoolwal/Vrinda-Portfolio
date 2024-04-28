import React from 'react'
import { FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa6";


const Resume = () => {
  return (
    <>
    <div className='bg-gray-300 flex flex-col items-center justify-center h-screen'>

    <div className='text-3xl font-extrabold'>Resume ?? </div>
    <div className='text-3xl font-extrabold'>Hum pe toh hai hi noo.. !!</div>
    <img src="https://preview.redd.it/raat-ka-jugaad-v0-f31amlwj88cc1.jpg?width=405&format=pjpg&auto=webp&s=759eb63836fa89aa6087a0fe43a45491c8386d75" alt="" width={270} />
    <p className="find-me">
                <a
                  href={"tel:91+9468734804"}
                  className="touch-auto"
                >
                  <FaPhone />
                  <span className="font-[500]">
                    
                     - 91+9468734804{" "}
                  </span>
                </a>
              </p>
    </div>


    </>
  )
}

export default Resume