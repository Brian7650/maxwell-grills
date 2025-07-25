import React from "react";
import Banner from "../components/Banner/Banner";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";

function MenuPage() {

  return (
    <div>
      <Banner title="Menu" pageName="Menu" />
      <Menu />
      <Footer />
    </div>
  );
}

export default MenuPage;