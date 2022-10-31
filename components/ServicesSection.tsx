import React from "react";
import Image from "next/image";
import logoDesign from "../images/artwork.svg";
import webCoding from "../images/webCoding.svg";
import google from "../images/google.svg";
import communityM from "../images/community_manager.svg";

const ServicesSection = () => {
  return (
    <div className="py-14 max-w-[73.125rem] mx-auto overflow-hidden bg-white">
      <div>
        <h3 className=" text-[1.7rem] text-[#3b5998] font-bold font-montserrat uppercase text-center">
          Servicios
        </h3>
        <div className="mt-3 mb-5 h-[1px] w-20 bg-[#666] mx-auto"></div>
        <p className="mb-[4.5rem] text-[0.875rem] text-[#666] text-center">
          Dinos qué necesitas
        </p>
      </div>
      <div className="lg:flex ">
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="text-center px-[0.9375rem] my-[2.1875rem]"
        >
          <div className="w-[6.25rem] h-[6.25rem] flex items-center mx-auto">
            <Image src={logoDesign} alt="" />
          </div>
          <h5 className=" pt-2.5 pb-1 uppercase text-[#3b5998]">
            Diseño de Logos Profesionales
          </h5>
          <p className=" pb-1 text-[0.8125rem] text-[#333]">(Branding)</p>
          <p className="text-sm text-[#666] leading-[1.8]">
            El poder de marca ayuda a diferenciarte de tu competencia. Un diseño
            creativo y profesional reflejará correctamente la personalidad de tu
            empresa.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="text-center px-[0.9375rem] my-[2.1875rem]"
        >
          <div className="w-[6.25rem] h-[6.25rem] flex items-center mx-auto">
            <Image src={webCoding} alt="" />
          </div>
          <h5 className=" pt-2.5 pb-1 uppercase text-[#3b5998]">PÁGINA WEB</h5>
          <p className=" pb-1 text-[0.8125rem] text-[#333]">
            (Diseño web personalizado)
          </p>
          <p className="text-sm text-[#666] leading-[1.8]">
            ¿Ya sabes para qué la quieres? Cada página web debe tener siempre un
            objetivo. Nuestros expertos analistas te asesorarán para definir
            correctamente el tuyo.
          </p>
        </div>
      </div>
      <div className="lg:flex">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="text-center px-[0.9375rem] my-[2.1875rem]"
        >
          <div className="w-[6.25rem] h-[6.25rem] flex items-center mx-auto">
            <Image src={google} alt="" />
          </div>
          <h5 className=" pt-2.5 pb-1 uppercase text-[#3b5998]">
            Rankear 1° lugar en Google
          </h5>
          <p className=" pb-1 text-[0.8125rem] text-[#333]">(SEO)</p>
          <p className="text-sm text-[#666] leading-[1.8]">
            Somos certificados y partners de Google Adwords. Solicita nuestra
            asesoría informativa sin compromiso.
          </p>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="text-center px-[0.9375rem] my-[2.1875rem]"
        >
          <div className="w-[6.25rem] h-[6.25rem] flex items-center mx-auto">
            <Image src={communityM} alt="" />
          </div>
          <h5 className=" pt-2.5 pb-1 uppercase text-[#3b5998]">
            Redes Sociales exitosas
          </h5>
          <p className=" pb-1 text-[0.8125rem] text-[#333]">
            (Community Manager)
          </p>
          <p className="text-sm text-[#666] leading-[1.8]">
            Nuestros Community Managers desarrollarán campañas personalizadas de
            acuerdo a lo que necesita tu negocio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
