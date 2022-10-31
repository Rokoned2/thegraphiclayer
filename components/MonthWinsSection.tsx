import React from "react";
import Image from "next/image";
import backgroundLaw from "../images/law-pattern.jpg";
import happyImage from "../images/happy-man.svg";
import calendar from "../images/calendar.svg";
import noWord from "../images/no-word.svg";
import workEthic from "../images/work-ethic.svg";

const MonthWinsSection = () => {
  return (
    <section className="relative">
      <img
        className="w-full h-screen fixed object-cover left-0 top-0 -z-20 "
        src={backgroundLaw.src}
        alt=""
      />
      <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-r from-[#000000d9] to-[#27003080] -z-10"></div>
      <div className="pt-10 xxl:pt-20 xxl:pb-10 w-full h-full text-white text-center z-10">
        <div className="md:flex mx-auto max-w-[73.125rem]">
          <div className="flex md:flex-1">
            <div className="mb-12 mx-[0.9375rem] flex-1">
              <div className="w-[3.4375rem] h-[3.4375rem] mx-auto mb-7">
                <Image src={happyImage} />
              </div>
              <p className="text-[1.0625rem] font-light mb-[0.625rem]">
                MÁS DE <span className="text-[1.375rem] font-[500]">50</span>
              </p>
              <p className="text-[0.75rem] ">
                clientes felices nuestros resultados
              </p>
            </div>

            <div className="mb-12 mx-[0.9375rem] flex-1">
              <div className="w-[3.4375rem] h-[3.4375rem] mx-auto mb-7">
                <Image src={calendar} />
              </div>
              <p className="text-[1.0625rem] font-light mb-[0.625rem]">
                MÁS DE <span className="text-[1.375rem] font-[500]">10</span>
              </p>
              <p className="text-[0.75rem] ">páginas en espera</p>
            </div>
          </div>
          <div className="flex md:flex-1">
            <div className="mb-12 mx-[0.9375rem] flex-1">
              <div className="w-[3.4375rem] h-[3.4375rem] mx-auto mb-7">
                <Image src={noWord} />
              </div>
              <p className="text-[1.0625rem] font-light mb-[0.625rem]">
                MÁS DE <span className="text-[1.375rem] font-[500]">30</span>
              </p>
              <p className="text-[0.75rem]">páginas totalmente optimizadas</p>
            </div>

            <div className="mb-12 mx-[0.9375rem] flex-1">
              <div className="w-[3.2rem] h-[3.4375rem] mx-auto mb-7">
                <Image src={workEthic} />
              </div>
              <p className="text-[1.0625rem] font-light mb-[0.625rem]">
                MÁS DE <span className="text-[1.375rem] font-[500]">10</span>
              </p>
              <p className="text-[0.75rem]">profesionales trabajando para ti</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonthWinsSection;
