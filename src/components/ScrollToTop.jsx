import React from "react";

const ScrollToTop = () => {
  const handelScroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button
      className="group/button w-[50px] hover:w-[140px] h-[50px] rounded-full hover:rounded-[50px] duration-300 bg-[#141414] hover:bg-[#8778c4] border-none font-semibold flex items-center justify-center shadow-[0px_0px_0px_4px_rgba(180,160,255,0.253)]  fixed bottom-4 right-6 before:absolute before:-bottom-5 before:content-['Back_To_Top'] before:text-[0px] before:text-white hover:before:text-sm/3 hover:before:bottom-auto hover:before:duration-300 hover:before:opacity-100"
      onClick={handelScroll}
    >
      <svg viewBox="0 0 384 512" className=" w-3 duration-300 group-hover/button:-translate-y-[200%]">
        <path
          className="fill-white"
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        ></path>
      </svg>
    </button>
  );
};

export default ScrollToTop;
