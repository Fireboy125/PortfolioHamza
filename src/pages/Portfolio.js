import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import AboutMe from "../components/About Me/AboutMe";
import Capabilities from "../components/Capabilities/Capabilities";
import Client from "../components/Client/Client";
import FormSection from "../components/FormSection/FormSection";
import PortfolioSection from "../components/PortfolioSection/PortfolioSect";
import Footer from "../components/Footer/Footer";
const Portfolio = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <PortfolioSection />
      <Capabilities />
      <Client />
      <FormSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
