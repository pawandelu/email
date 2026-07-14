import React from "react";

const Button = ({ btn, vari, type = "button" }) => {
  const variants = {
    pri: "border border-transparent bg-orange text-white hover:bg-white hover:border-orange hover:text-orange lg:mt-10 md:mt-9 sm:mt-7 mt-5",
    sec: " border border-white bg-transparent text-white hover:border-transparent hover:bg-white hover:text-charcoal-blue lg:mt-10 md:mt-9 sm:mt-7 mt-5",
    dan: "border border-transparent bg-orange text-white hover:bg-white hover:border-orange hover:text-orange",
  };
  return (
    <button
      className={`jost btn max-w-max md:py-6 sm:py-4 py-3  md:px-12 sm:px-9 px-7 font-semibold lg:text-[24px] md:text-[20px] sm:text-[18px] text-[16px] leading-[100%] transition-all duration-500 cursor-pointer ${variants[vari]} `}
    >
      {btn}
    </button>
  );
};

export default Button;
