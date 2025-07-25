import React from "react";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Team from "../components/Team/Team";
import Footer from "../components/Footer/Footer";

function AboutPage() {

  return (
    <div>
      <Banner title="About Us" pageName="About" />
      <About />
      <Team numberOfCards={4} />
      <Footer />
    </div>
  );
}

export default AboutPage;
