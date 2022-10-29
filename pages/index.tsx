import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutSection from "../components/AboutSection";
import BannerSection from "../components/BannerSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MonthWinsSection from "../components/MonthWinsSection";
import PortfolioSection from "../components/PortfolioSection";

const Home: NextPage = () => {
  return (
    <div className="font-montserrat">
      <Head>
        <title>GL | Graphic Layer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <BannerSection />
      <AboutSection />
      <MonthWinsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
