import Image from "next/image";
import React from "react";
import williamsScreen from "../images/williamslex.png";
import unmsmScreen from "../images/unmsm.png";
import ugazZegarra from "../images/UgazZegarra.png";

const PortfolioSection = () => {
  return (
    <section
      className={`bg-[url("../images/geometricBG.jpg")] bg-cover bg-center`}
    >
      <div className=" w-[96%] max-w-[100rem] mx-auto py-16 flex flex-col xl:flex-row items-start">
        <div className="lg:w-full xl:w-1/3 text-center bg-white drop-shadow-lg px-[0.625rem] py-8 block lg:mr-5 mb-10 h-auto">
          <h3 className="text-[2rem] font-thin leading-[1.2] mb-6 text-[#46c2ca]">
            Diseñamos y Construimos Cada Sitio Web a la Medida, en Todo Momento.
          </h3>
          <p>
            Nuestro equipo lo guiará desde el principio hasta la finalización de
            su sitio web para garantizar que obtenga un sitio web personalizado
            y de alto funcionamiento que se adapte a la marca y los objetivos de
            su empresa.
          </p>
          <a href="#contactSection">
            <button className="bg-[#16d0c5] text-white px-8 py-3 uppercase hover:bg-[#15aca3] transition-colors font-lato mt-10">
              OBTÉN UNA COTIZACIÓN
            </button>
          </a>
        </div>
        <div className="flex flex-wrap justify-start lg:justify-evenly xl:w-2/3 w-full mt-4 md:mt-0">
          <div className="w-1/2 sm:flex-1 drop-shadow-md pr-4">
            <a
              href="https://lawyer-page-model-1-rokoned2.vercel.app/"
              target="_blank"
            >
              <Image src={williamsScreen} className="bg-cover drop-shadow-md" />
            </a>
          </div>

          <div className="w-1/2 sm:flex-1 drop-shadow-md	sm:pr-4">
            <a href="https://williamslex.vercel.app/" target="_blank">
              <Image src={unmsmScreen} className="bg-cover" />
            </a>
          </div>
          <div className="w-1/2 sm:flex-1 drop-shadow-md pr-4 sm:pr-0">
            <a href="https://estudiougaz.vercel.app/" target="_blank">
              <Image src={ugazZegarra} className="bg-cover" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
