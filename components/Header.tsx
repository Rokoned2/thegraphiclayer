import React, { useEffect, useState } from "react";
import { RiPhoneFill } from "react-icons/ri";
import { FaPaintBrush } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import logo from "../images/graphicLawyer.svg";
import Image from "next/image";

const Header = () => {
  const [overlay, setOverlay] = useState(false);
  const [fix, setFix] = useState(false);

  useEffect(() => {
    function setFixed() {
      if (window.scrollY >= 37) {
        setFix(true);
      } else {
        setFix(false);
      }
    }
    window.addEventListener("scroll", setFixed);
    return () => {
      document.removeEventListener("scroll", setFixed);
    };
  }, []);

  return (
    <header className="w-full ">
      <div className="hidden sm:flex justify-between py-2 px-4 border-b-[1px] text-xs md:text-sm text-[#7f7f7f]">
        <div className="flex items-center w-1/3 xl:w-1/4 xl:ml-auto w-17 whitespace-normal">
          <FaPaintBrush className="w-4 h-4 mr-2 text-[#0FB3D0]" />
          <p>Agencia de Diseño Gráfico</p>
        </div>
        <div className="flex w-2/3 xl:w-1/2">
          <div className="flex items-center w-1/2">
            <GrMail className="w-4 h-4 mr-2 shrink-0	 text-[#0FB3D0]" />
            <p>thegraphiclawyer@gmail.com</p>
          </div>
          <div className="flex items-center w-1/2 text-base justify-center">
            <RiPhoneFill className="w-4 h-4 mr-2 text-[#0FB3D0]" />
            <p>926-819-555</p>
          </div>
        </div>
      </div>
      <nav
        className={`flex transition-all duration-500 ${
          fix ? "!fixed top-0 !py-2 xxl:!pl-16" : ""
        } block sm:absolute z-20  w-full left-0 items-center justify-between bg-[#15376C]/90 text-white px-5 xxl:px-10 py-[0.625rem] md:py-[1.5625rem]`}
      >
        <div
          className={`w-[14.3rem] md:w-80 transition-all duration-500 flex items-center
        ${fix ? "h-[1.375rem] md:w-64" : ""}`}
        >
          <Image src={logo} className="" alt="" />
        </div>
        <div className="flex items-center">
          <a
            className="hidden md:block bg-[#16d0c5] px-5 py-3 font-bold mr-4"
            href="#contactSection"
          >
            OBTÉN UNA COTIZACIÓN
          </a>
          <button>
            <div className="flex flex-col">
              <div className=""></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
