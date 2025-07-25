import React from "react";
import Banner from "../components/Banner/Banner";
import Service from "../components/Service/Service";
import Footer from "../components/Footer/Footer";

function ServicePage() {
  return (
    <div>
      <Banner title="Service" pageName="Service"/>
      <Service numberOfCards={8} />
      <Footer />
    </div>
  );
}

export default ServicePage;