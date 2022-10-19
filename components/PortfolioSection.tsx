import Image from "next/image";
import React from "react";
import williamsScreen from "../images/williamslex.png";
import unmsmScreen from "../images/unmsm.png";

const PortfolioSection = () => {
  return (
    <section
      className={`bg-[url("../images/geometricBG.jpg")] bg-cover bg-center`}
    >
      <div className=" w-[96%] max-w-[100rem] mx-auto py-16 flex flex-col md:flex-row items-start">
        <div className="xl:w-1/3 text-center bg-white drop-shadow-lg px-[0.625rem] py-8 block mr-5 h-auto">
          <h3 className="text-[2rem] font-thin leading-[1.2] mb-6 text-[#46c2ca]">
            Diseñamos y Construimos Cada Sitio Web a la Medida, en Todo Momento.
          </h3>
          <p>
            Nuestro equipo lo guiará desde el principio hasta la finalización de
            su sitio web para garantizar que obtenga un sitio web personalizado
            y de alto funcionamiento que se adapte a la marca y los objetivos de
            su empresa.
          </p>
          <button className="bg-[#16d0c5] text-white px-8 py-3 uppercase hover:bg-[#15aca3] transition-colors font-lato mt-10">
            OBTÉN UNA COTIZACIÓN
          </button>
        </div>
        <div className="flex justify-evenly xl:w-2/3 w-full mt-10 md:mt-0">
          <div className="w-[13.2rem]">
            <a
              href="https://lawyer-page-model-1-rokoned2.vercel.app/"
              target="_blank"
            >
              <Image src={williamsScreen} className="bg-cover drop-shadow-md" />
            </a>
          </div>

          <div className="w-[13.2rem] drop-shadow-md	">
            <a href="https://san-marcos-college.vercel.app/" target="_blank">
              <Image src={unmsmScreen} className="bg-cover" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
