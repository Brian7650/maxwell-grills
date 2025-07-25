import React from "react";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function ContactPage() {

  return (
    <div>
      <Banner title="Contact Us" pageName="Contact" />
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactPage;