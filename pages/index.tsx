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
import previewImage from "../public/graphiclawyer.png";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="font-montserrat relative ">
      <Head>
        <title>GL | Graphic Lawyer</title>
        <meta
          name="description"
          content="Hola, Somos Graphic Lawyer.
Vendemos páginas web con diseños profesionales a estudios jurídicos, etc."
        />
        <meta property="og:title" content="GL | Graphic Lawyer" />
        <meta
          property="og:url"
          content="https://graphiclawyer.netlify.app/"
          key="ogurl"
        />
        <meta property="og:image" content={previewImage.src} key="ogimage" />
        <meta
          property="og:site_name"
          content={"Graphic Lawyer"}
          key="ogsitename"
        />
        <meta
          property="og:title"
          content={"GL | Graphic Lawyer"}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={
            "Hola, Somos Graphic Lawyer. Vendemos páginas web con diseños profesionales a estudios jurídicos, etc."
          }
          key="ogdesc"
        />
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
