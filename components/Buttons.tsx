import Image from "next/image";
import React, { useEffect, useState } from "react";
import map from "../images/map.png";
import blueCheck from "../images/blueCheck.svg";
import wsp from "../images/wspp.svg";

const Buttons = () => {
  const [activeMessage, setActiveMessage] = useState(
    "opacity-0 pointer-events-none"
  );
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    setTimeout(() => {
      setActiveMessage("opacity-1");

      timer = setTimeout(() => {
        setActiveMessage("opacity-0 pointer-events-none");
      }, 15000);
      // timer = setInterval(() => {
      //   setcounter(c => c + 1);
      // }, 1000);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <a href="https://wp-social-proof.com/" target="_blank">
        <div
          className={`
        ${activeMessage}
        fixed py-5 pl-5 pr-2 bottom-3 left-3 bg-white z-[90] flex items-center rounded-full shadow-2xl transition-opacity duration-500`}
        >
          <div className="w-14 h-14 mr-4 flex items-center">
            <Image src={map} alt="" />
          </div>
          <div className="text-sm">
            <b>Estudio Bardales & Abogados, La Libertad</b>
            <p className="text-[#686B81]">
              compró DISEÑO DE LOGOS PRO... hace 5 horas.
            </p>
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2">
                <Image src={blueCheck} />
              </div>
              <p className="text-[#0095FF] text-[0.6rem] italic">
                Verificado por <b className="not-italic"> WP Social Proof</b>
              </p>
            </div>
          </div>
        </div>
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=%2B51934498220&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <div className="fixed bottom-6 right-6 h-14 w-14 bg-[#25d366] hover:bg-[#128c7e] flex items-center justify-center rounded-full z-[90] transition-colors duration-500">
          <Image className="" src={wsp} />
        </div>
      </a>
    </>
  );
};

export default Buttons;
