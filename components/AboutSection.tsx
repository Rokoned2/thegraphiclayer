import Image from "next/image";
import React from "react";
import responsive from "../images/responsive.svg";

const AboutSection = () => {
  return (
    <div className="my-16 text-center">
      <div className="h-[5.875rem] w-[23.75rem] fill-[#4381A6] mx-auto">
        <Image src={responsive} />
      </div>

      <h3 className="text-[1.6875rem] sm:text-[2.8125rem] font-light mt-20 uppercase text-[#46c2ca]  ">
        Una empresa de diseño web
      </h3>
      <h4 className="text-[#d3d05e] text-[1.0125rem] sm:text-[1.6875rem] leading-[0.8] mt-3">
        Diseños Web Personalizados
      </h4>
    </div>
  );
};

export default AboutSection;
