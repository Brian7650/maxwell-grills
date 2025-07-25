import React from "react";
import Banner from "../components/Banner/Banner";
import Team from "../components/Team/Team";
import Footer from "../components/Footer/Footer";

function TeamPage() {


  return (
    <div>
      <Banner title="Team" pageName="Team" />
      <Team numberOfCards={8} />
      <Footer />
    </div>
  );
}

export default TeamPage;