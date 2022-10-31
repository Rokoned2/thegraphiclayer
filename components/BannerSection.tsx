import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import firstSlide from "../images/Orthodontics-Website.jpg";
import secondSlide from "../images/fish-shark.jpg";
import Image from "next/image";

const BannerSection = () => {
  return (
    <section className="relative font-montserrat pt-[2.78625rem] sm:pt-0 sm:mt-11 md:mt-24">
      <Swiper
        spaceBetween={50}
        className=""
        loop={true}
        modules={[Pagination]}
        pagination={true}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Image src={firstSlide} className="bg-cover" objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={secondSlide} className="bg-cover" objectFit="cover" />
        </SwiperSlide>
      </Swiper>

      <div className="xl:absolute xl:w-1/2 top-9 left-8 z-10 bg-white/80 text-center p-[1.25rem] block">
        <div className="w-full h-full border-[1px] border-[#d3d05e] py-4">
          <h3 className="text-[#256dd6] text-[2rem] sm:text-[3.125rem] font-light leading-[1]	">
            WEBSITES PERSONALIZADOS DE CALIDAD
          </h3>
          <p className="text-[1.875rem] font-montserrat leading-[1] py-9 text-[#4a4a4a]">
            diseñados con innovación y resultados efectivos en mente
          </p>
          <a href="#contactSection">
            <button className="bg-[#16d0c5] text-white px-8 py-3 uppercase hover:bg-[#15aca3] transition-colors font-lato">
              Contáctanos
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
