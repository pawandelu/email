import React from "react";

const Heading = ({ heading, vari }) => {
  const variants = {
    pri: "xl:text-[84px] lg:text-[60px] md:text-[42px] text-[32px] text-white",
    sec: "lg:text-[60px] md:text-[48px] sm:text-[38px] text-[32px] text-charcoal-blue mb-5",
    dan: "lg:text-[60px] md:text-[48px] sm:text-[38px] text-[32px] text-orange underline",
    not: "lg:text-[60px] md:text-[48px] sm:text-[38px] text-[32px] text-charcoal-blue",
  };
  return (
    <h2 className={`jost font-medium leading-[120%] ${variants[vari]}`}>
      {heading}
    </h2>
  );
};

export default Heading;
