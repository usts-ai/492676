import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Services from "../components/Services";
import Process from "../components/Process";
import Security from "../components/Security";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f4f8fc]">
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Services />
        <Process />
        <Security />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
