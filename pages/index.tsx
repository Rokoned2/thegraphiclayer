import type { NextPage } from "next";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { useEffect } from "react";
import AboutSection from "../components/AboutSection";
import BannerSection from "../components/BannerSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MonthWinsSection from "../components/MonthWinsSection";
import PortfolioSection from "../components/PortfolioSection";
import ServicesSection from "../components/ServicesSection";
import Buttons from "../components/Buttons";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="font-montserrat relative ">
      <Head>
        <title>GL | Graphic Layer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Buttons />
      <div className="bg-white">
        <Header />
        <BannerSection />
        <ServicesSection />
      </div>
      <MonthWinsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
